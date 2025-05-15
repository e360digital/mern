import React, { useState } from 'react';
import '../../App.css';
import Header from '../header';
import Footer from '../footer';
import { Card, Input, Typography, Progress } from 'antd';

const { Title, Text } = Typography;

function MetaLengthChecker() {
  const [companyName, setCompanyName] = useState('');
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');

  const maxDescriptionLength = 160;
  const descriptionLength = description.length;

  return (
    <div className="page-template page-template-templates page-template-custom-software-development page page-id-13453 page-child parent-pageid-13169 wp-embed-responsive mega-menu-primary singular enable-search-modal missing-post-thumbnail has-no-pagination not-showing-comments show-avatars custom-software-development footer-top-hidden">
      <Header />
      <main id="site-content">
        <section className="pad60 box-shadow innertopbanner bannerSideimg">
          <div className="container">
            <div className="row align-items-center height100">
              <div className="col-lg-12 col-md-12">
                <div className="banner-caption pb-0 text-center">
                  <h1>Meta Length Checker</h1>
                  <p>Your title tag and meta-description are like a shop front window in Google.
                      Your snippet needs to look perfect if you want people to pop in for a visit.
                      Our meta length checker helps you ensure your descriptions and titles look as
                      good as possible!</p>
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
                    {/* <Title level={3}>Meta Length Checker</Title> */}
                    {/* <Text>
                      Your title tag and meta-description are like a shop front window in Google.
                      Your snippet needs to look perfect if you want people to pop in for a visit.
                      Our meta length checker helps you ensure your descriptions and titles look as
                      good as possible!
                    </Text> */}

                    <Input
                      placeholder="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      style={{ marginTop: '20px' }}
                    />

                    <Input
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      maxLength={60}
                      style={{ marginTop: '20px' }}
                    />
                    <Text type="secondary">{title.length} / 60 characters</Text>

                    <Input
                      placeholder="Link"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      style={{ marginTop: '20px' }}
                    />

                    <Input.TextArea
                      placeholder="Description (160 chars)"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      maxLength={maxDescriptionLength}
                      style={{ marginTop: '20px' }}
                      rows={4}
                    />
                    <Text type="secondary">
                      {descriptionLength} / {maxDescriptionLength} characters
                    </Text>

                    <Progress
                      percent={(descriptionLength / maxDescriptionLength) * 100}
                      status={descriptionLength > maxDescriptionLength ? 'exception' : 'normal'}
                      showInfo={false}
                      style={{ marginTop: '10px' }}
                    />

                    {/* Snippet Preview */}
                    <div
                      style={{
                        marginTop: '40px',
                        padding: '20px',
                        border: '1px solid #e8e8e8',
                        borderRadius: '4px',
                        backgroundColor: '#ffffff',
                      }}
                    >
                      {/* Google Search Bar */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          marginBottom: '20px',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            borderRadius: '50px',
                            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                            backgroundColor: '#ffffff',
                            width: '70%',
                            padding: '5px 10px',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png"
                            alt="Google Logo"
                            style={{ height: '30px', marginRight: '10px' }}
                          />
                          <input
                            type="text"
                            style={{
                              flex: 1,
                              border: 'none',
                              outline: 'none',
                              fontSize: '16px',
                              padding: '10px 0',
                            }}
                            placeholder="Search Google or type a URL"
                          />
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                              src="https://img.icons8.com/color/48/000000/microphone.png"
                              alt="Microphone Icon"
                              style={{ height: '20px', margin: '0 10px' }}
                            />
                            <img
                              src="https://img.icons8.com/ios-glyphs/30/000000/search.png"
                              alt="Search Icon"
                              style={{ height: '20px' }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Favicon and Link */}
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <img
                          src="https://img.icons8.com/ios-filled/50/000000/globe.png"
                          alt="Globe Icon"
                          style={{ width: '16px', height: '16px', marginRight: '8px' }}
                        />
                        <Text style={{ color: '#006621', fontSize: '14px' }}>
                          {link || 'www.example.com'} › {companyName || 'brand-name'}
                        </Text>
                        <img
                          src="https://static.thenounproject.com/png/3137368-200.png"
                          alt="Three Dots"
                          style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                        />
                      </div>

                      {/* Title and Description */}
                      <Text
                        style={{
                          color: '#1a0dab',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          lineHeight: '1.2',
                        }}
                      >
                        {title || 'Your Title Here'}
                      </Text>
                      <div style={{ color: '#006621', fontSize: '14px', marginTop: '4px' }}>
                        {link || 'www.example.com'}
                      </div>
                      <div
                        style={{
                          color: '#545454',
                          fontSize: '13px',
                          marginTop: '4px',
                          maxWidth: '550px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {description || 'Your meta description here...'}
                      </div>

                      {/* Placeholder Blurred Blocks */}
                      <div style={{ marginTop: '20px' }}>
                        <div
                          style={{
                            width: '100%',
                            height: '10px',
                            backgroundColor: '#f1f1f1',
                            marginBottom: '5px',
                          }}
                        ></div>
                        <div
                          style={{
                            width: '90%',
                            height: '10px',
                            backgroundColor: '#f1f1f1',
                            marginBottom: '5px',
                          }}
                        ></div>
                        <div
                          style={{
                            width: '85%',
                            height: '10px',
                            backgroundColor: '#f1f1f1',
                            marginBottom: '5px',
                          }}
                        ></div>
                      </div>
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

export default MetaLengthChecker;
