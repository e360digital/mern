import React, { useState, useRef } from 'react';
import {
  Card,
  Button,
  Upload,
  Typography,
  notification,
  message,
  Row,
  Col,
  Space,
  Divider,
} from 'antd';
import {
  UploadOutlined,
  CopyOutlined,
  DownloadOutlined,
  BgColorsOutlined,
} from '@ant-design/icons';
import { SketchPicker } from 'react-color';
import Header from '../header';
import Footer from '../footer';

const { Title, Text } = Typography;

const ColorPicker = () => {
  const [image, setImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [newColor, setNewColor] = useState('#ffffff');
  const [recentColors, setRecentColors] = useState([]);
  const [majorColors, setMajorColors] = useState([]);
  const canvasRef = useRef(null);

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        fetchMajorColors();
      };
    };
    reader.readAsDataURL(file);
    return false;
  };

  const handleImageClick = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const rgb = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
    const hex = rgbToHex(pixel[0], pixel[1], pixel[2]);
    setSelectedColor(rgb);
    setNewColor(hex);
    setPickerVisible(true);
    addRecentColor(hex, rgb);
    showNotification(hex, rgb);
  };

  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, '0'))
      .join('');

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  };

    const handleColorChange = (color) => {
    setNewColor(color.hex);
  };
  
  const colorMatch = (r, g, b, r1, g1, b1) => {
    const threshold = 50;
    return (
      Math.abs(r - r1) < threshold &&
      Math.abs(g - g1) < threshold &&
      Math.abs(b - b1) < threshold
    );
  };

  const replaceColor = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    const [r1, g1, b1] = selectedColor.match(/\d+/g).map(Number);
    const [r2, g2, b2] = hexToRgb(newColor);

    for (let i = 0; i < data.length; i += 4) {
      const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
      if (colorMatch(r, g, b, r1, g1, b1)) {
        data[i] = r2;
        data[i + 1] = g2;
        data[i + 2] = b2;
      }
    }

    ctx.putImageData(imgData, 0, 0);
    setPickerVisible(false);
  };

  const addRecentColor = (hex, rgb) => {
    setRecentColors([{ hex, rgb }]);
  };

  const showNotification = (hex, rgb) => {
    notification.open({
      message: 'Selected Color',
      description: (
        <Space>
          <div
            style={{
              width: 30,
              height: 30,
              backgroundColor: hex,
              borderRadius: '50%',
              border: '1px solid #000',
            }}
          />
          <div>
            <Text>{hex}</Text>
            <br />
            <Text type="secondary">{rgb}</Text>
          </div>
        </Space>
      ),
      duration: 1.5,
    });
  };

  const fetchMajorColors = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const colorCount = {};

    for (let i = 0; i < data.length; i += 4) {
      const hex = rgbToHex(data[i], data[i + 1], data[i + 2]);
      colorCount[hex] = (colorCount[hex] || 0) + 1;
    }

    const topColors = Object.entries(colorCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([hex]) => ({
        hex,
        rgb: `rgb(${hexToRgb(hex).join(', ')})`,
      }));

    setMajorColors(topColors);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'modified-image.png';
    link.click();
  };

  const handleCopyColor = (value) => {
    navigator.clipboard.writeText(value);
    message.success('Copied to clipboard!');
  };

   return (
    <div className="page-template page-template-templates page-template-custom-software-development page page-id-13453 page-child parent-pageid-13169 wp-embed-responsive mega-menu-primary singular enable-search-modal missing-post-thumbnail has-no-pagination not-showing-comments show-avatars custom-software-development footer-top-hidden">
      <Header />
      <main id="site-content">
        <section className="pad60 box-shadow innertopbanner bannerSideimg">
          <div className="container">
            <div className="row align-items-center height100">
              <div className="col-lg-12 col-md-12">
                <div className="banner-caption pb-0 text-center">
                  <h1>Color Picker</h1>
                 <p>Easily choose and preview your favorite colors. Our color picker helps you find the perfect shade for your project with just a click.</p>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center height100">
              <div className="col-lg-12 col-md-12">
                <div style={{ margin: '50px auto', maxWidth: '1000px' }}>
                  <Card
                    className="whiteBox shadow"
                    style={{
                      padding: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                     <Row gutter={16} justify="center" style={{ marginBottom: 20 }}>
          <Col>
            <Upload beforeUpload={handleImageUpload} showUploadList={false}>
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Col>
          <Col>
            <Button
              icon={<DownloadOutlined />}
              type="primary"
              onClick={handleDownload}
              disabled={!image}
            >
              Download Image
            </Button>
          </Col>
        </Row>

        <div style={{ textAlign: 'center' }}>
          <canvas
            ref={canvasRef}
            style={{
              maxWidth: '100%',
              cursor: 'crosshair',
              borderRadius: 8,
              border: '1px solid #ddd',
            }}
            onClick={handleImageClick}
          />
        </div>

        {pickerVisible && (
          <div style={{ marginTop: 30, textAlign: 'center' }}>
            <SketchPicker color={newColor} onChange={handleColorChange} />
            <Button
              style={{ marginTop: 20 }}
              type="primary"
              icon={<BgColorsOutlined />}
              onClick={replaceColor}
            >
              Apply New Color
            </Button>
          </div>
        )}

        {recentColors.length > 0 && (
          <>
            <Divider orientation="left">🎯 Recent Color</Divider>
            <Row gutter={16} justify="center">
              {recentColors.map((color, i) => (
                <Col key={i}>
                  <Card
                    size="small"
                    hoverable
                    style={{ textAlign: 'center', width: 100 }}
                    bodyStyle={{ padding: 10 }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        margin: 'auto',
                        borderRadius: '50%',
                        backgroundColor: color.hex,
                        border: '1px solid #000',
                      }}
                    />
                    <Text>{color.hex}</Text>
                    <br />
                    <Button
                      type="link"
                      size="small"
                      icon={<CopyOutlined />}
                      onClick={() => handleCopyColor(color.hex)}
                    >
                      Copy
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}

        {majorColors.length > 0 && (
          <>
            <Divider orientation="left">🔥 Major Colors</Divider>
            <Row gutter={[16, 16]}>
              {majorColors.map((color, i) => (
                <Col key={i} xs={12} sm={8} md={4}>
                  <Card
                    size="small"
                    style={{ textAlign: 'center' }}
                    bodyStyle={{ padding: 10 }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        margin: 'auto',
                        borderRadius: '50%',
                        backgroundColor: color.hex,
                        border: '1px solid #000',
                      }}
                    />
                    <Text style={{ display: 'block' }}>{color.hex}</Text>
                    <Button
                      type="link"
                      size="small"
                      icon={<CopyOutlined />}
                      onClick={() => handleCopyColor(color.hex)}
                    >
                      Copy
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ColorPicker;
