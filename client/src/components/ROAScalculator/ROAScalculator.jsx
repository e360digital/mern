import React, { useState } from 'react';
import '../../App.css';
import Header from '../header';
import Footer from '../footer';
import { Card, Input, Typography, Divider, Statistic, Row, Col } from 'antd';

const { Title, Text } = Typography;

function ROAScalculator() {
  const [revenue, setRevenue] = useState('');
  const [adSpend, setAdSpend] = useState('');

  const calculateROAS = () => {
    const rev = parseFloat(revenue);
    const spend = parseFloat(adSpend);

    if (!isNaN(rev) && !isNaN(spend) && spend !== 0) {
      return ((rev / spend).toFixed(2)*100);
    }
    return '0.00';
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
                  <h1>ROAS Calculator</h1>
                  <p>
                    Enter your total ad revenue and ad spend to calculate your Return on Ad Spend (ROAS) instantly.
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
                <div style={{ margin: '50px auto', maxWidth: '700px' }}>
                  <Card
                    className="whiteBox shadow"
                    style={{
                      padding: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '16px',
                      background: '#ffffff',
                    }}
                  >
                    <Title level={3} style={{ textAlign: 'center' }}>📈 ROAS Calculator</Title>
                    <Divider />

                    <Text strong>Total Ad Revenue ($)</Text>
                    <Input
                      size="large"
                      type="number"
                      value={revenue}
                      onChange={(e) => setRevenue(e.target.value)}
                      placeholder="e.g. 5000"
                      style={{ marginBottom: '20px', borderRadius: '8px' }}
                    />

                    <Text strong>Total Ad Spend ($)</Text>
                    <Input
                      size="large"
                      type="number"
                      value={adSpend}
                      onChange={(e) => setAdSpend(e.target.value)}
                      placeholder="e.g. 1000"
                      style={{ marginBottom: '30px', borderRadius: '8px' }}
                    />

                    <Row justify="center">
                      <Col>
                        <Statistic
                        title="ROAS (Return on Ad)"
                          value={calculateROAS()}
                          precision={2}
                          suffix="%"
                          valueStyle={{ color: '#3f8600', fontSize: '28px' }}
                        />
                      </Col>
                    </Row>


                       <Divider />

                    <div style={{ textAlign: 'center', color: '#888' }}>
                      <Text type="secondary">
                        ROAS (Return on Ad Spend) = Revenue / Ad Spend
                      </Text>
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

export default ROAScalculator;
