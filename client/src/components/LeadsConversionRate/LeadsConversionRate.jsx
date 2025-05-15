import React, { useState } from 'react';
import '../../App.css';
import Header from '../header';
import Footer from '../footer';
import { Card, InputNumber, Typography, Progress } from 'antd';

const { Title, Text } = Typography;

function LeadsConversionRate() {
  const [conversions, setConversions] = useState(0);
  const [visits, setVisits] = useState(0);

  const getConversionRate = () => {
    if (visits === 0) return 0;
    return ((conversions / visits) * 100).toFixed(2);
  };

  const conversionRate = getConversionRate();

  return (
    <div className="page-template page-template-templates page-template-custom-software-development page page-id-13453 page-child parent-pageid-13169 wp-embed-responsive mega-menu-primary singular enable-search-modal missing-post-thumbnail has-no-pagination not-showing-comments show-avatars custom-software-development footer-top-hidden">
      <Header />
      <main id="site-content">
        <section className="pad60 box-shadow innertopbanner bannerSideimg">
          <div className="container">
            <div className="row align-items-center height100">
              <div className="col-lg-12 col-md-12">
                <div className="banner-caption pb-0 text-center">
                  <h1>Conversion Rate Calculator</h1>
                  <p>
                    Know exactly how well your traffic converts! Enter your conversions and total visits to
                    see your website’s performance in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center height100">
              <div className="col-lg-12 col-md-12">
                <div style={{ margin: '50px auto', maxWidth: '600px' }}>
                  <Card
                    className="whiteBox shadow"
                    style={{
                      padding: '30px',
                      borderRadius: '16px',
                      background: '#fff',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Title level={3} style={{ textAlign: 'center', marginBottom: '30px' }}>
                      🎯 Conversion Rate Calculator
                    </Title>

                    <div style={{ marginBottom: '20px' }}>
                      <Text strong>Conversions:</Text>
                      <InputNumber
                        min={0}
                        style={{ width: '100%', marginTop: '8px' }}
                        value={conversions}
                        onChange={setConversions}
                        placeholder="Enter number of conversions"
                      />
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                      <Text strong>Visits:</Text>
                      <InputNumber
                        min={0}
                        style={{ width: '100%', marginTop: '8px' }}
                        value={visits}
                        onChange={setVisits}
                        placeholder="Enter number of visits"
                      />
                    </div>

                    <div style={{ textAlign: 'center' }}>
                      <Title level={4}>
                        🧮 Conversion Rate: <span style={{ color: '#1890ff' }}>{conversionRate}%</span>
                      </Title>

                     <Progress
  percent={Math.min(parseFloat(conversionRate), 100)}
  showInfo={false}
  status="active"
  strokeColor={{
    '0%': '#87d068',
    '100%': '#1890ff',
  }}
/>

                    </div>
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

export default LeadsConversionRate;
