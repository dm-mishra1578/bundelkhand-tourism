import React from 'react'
import Layout from '../../components/layout/Layout'
import './galaryContainer.css'
import { Col, Divider, Row, Card } from 'antd';
import {RightCircleFilled} from '@ant-design/icons';
import img1 from "../../assets/diwali.jpg"
import img2 from "../../assets/holi.jpg"
import img3 from "../../assets/rakhi.png"
import img4 from "../../assets/navrat.jpg"
import img5 from "../../assets/art.jpg"
import img6 from "../../assets/arts.jpg"
import img7 from "../../assets/culture.jpg"
import img8 from "../../assets/music.jpg"
import td1 from "../../assets/tdtm.jpeg"
import td2 from "../../assets/tddat.jpeg"
import td3 from "../../assets/tdkl.jpeg"
import td4 from "../../assets/or.jpeg"
import td5 from "../../assets/tdk.jpeg"
import td6 from "../../assets/tdc.jpeg"
import td7 from "../../assets/tdh.jpeg"
import td8 from "../../assets/tdp.jpeg"
import { Link } from 'react-router-dom';
const GalaryContainer = () => {
  return (
    <div>
      <section className='galary'>
        <div className='container'>
          <section className='fest'>
            <h2 className='title'>Festivals</h2>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6}>
                <div >
                  <div className="custom-card-container">
                    <Card
                      hoverable
                      style={{ width: 300, height: 380 }}
                      cover={<img alt="example" src={img1} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />} >
                      <div className="overlay">
                        <div className="description">
                          <h3 className="title">Diwali</h3>
                          <span className="text"><RightCircleFilled /></span>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className='place'>
                    <p> Deepotsav</p>
                  </div>
                </div>
              </Col>

              <Col className="gutter-row" span={6}>
                <div >

                  <div className="custom-card-container">
                    <Card
                      className='galaryimage'
                      hoverable
                      style={{ width: 300, height: 380 }}
                      cover={<img alt="example" src={img2} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
                    > <div className="overlay">
                        <div className="description">
                          <h3 className="title">title</h3>
                          <span className="text">description</span>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className='place'>
                    <p>Rangotsav</p>
                  </div>
                  {/* <div className='info1'>
                    hellow
                  </div> */}
                </div>
              </Col>

              <Col className="gutter-row" span={6}>
                <div >
                  <div className="custom-card-container">
                    <Card
                      hoverable
                      style={{ width: 300, height: 380 }}
                      cover={<img alt="example" src={img4} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
                    > <div className="overlay">
                        <div className="description">
                          <h3 className="title">title</h3>
                          <span className="text">description</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className='place'>
                    <p>Dussehra</p>
                  </div>
                </div>
              </Col>

              <Col className="gutter-row" span={6}>
                <div >
                  <div className="custom-card-container">
                    <Card
                      hoverable
                      style={{ width: 300, height: 380 }}
                      cover={<img alt="example" src={img3} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
                    > <div className="overlay">
                        <div className="description">
                          <h3 className="title">title</h3>
                          <span className="text">description</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className='place'>
                    <p>RakshaBandhan</p>
                  </div>
                </div>
              </Col>
            </Row>
          </section>

          {/*  */}
          <section className='topDest'>
            <h2 className='title'>Top Destination</h2>
            <div className='row1 topdes1'>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                  <div >
                    <Link to="/chitrakoot">

                      <div className="custom-card-container">
                        <Card
                          hoverable
                          style={{ width: 300, height: 380 }}
                          cover={<img alt="example" src={td6} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />} >
                          <div className="overlay">
                            <div className="description">
                              <h3 className="title">title</h3>
                              <span className="text">description</span>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </Link>
                    <div className='place'>
                      <p>Chitrakoot</p>
                    </div>
                  </div>
                </Col>

                <Col className="gutter-row" span={6}>
                  <div >
                    <Link to="/galary">

                      <div className="custom-card-container">
                        <Card
                          className='galaryimage'
                          hoverable
                          style={{ width: 300, height: 380 }}
                          cover={<img alt="example" src={td2} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
                        > <div className="overlay">
                            <div className="description">
                              <h3 className="title">title</h3>
                              <span className="text">description</span>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </Link>
                    <div className='place'>
                      <p>Arts & Culture</p>
                    </div>

                  </div>
                </Col>

                <Col className="gutter-row" span={6}>
                  <div >
                    <Link to="/banda">

                      <div className="custom-card-container">
                        <Card
                          hoverable
                          style={{ width: 300, height: 380 }}
                          cover={<img alt="example" src={td3} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
                        > <div className="overlay">
                            <div className="description">
                              <h3 className="title">title</h3>
                              <span className="text">description</span>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </Link>
                    <div className='place'>
                      <p>Banda</p>
                    </div>

                  </div>
                </Col>

                <Col className="gutter-row" span={6}>
                  <div >
                    <Link to="/galary">

                      <div className="custom-card-container">
                        <Card
                          hoverable
                          style={{ width: 300, height: 380 }}
                          cover={<img alt="example" src={td4} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
                        > <div className="overlay">
                            <div className="description">
                              <h3 className="title">title</h3>
                              <span className="text">description</span>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </Link>
                    <div className='place'>
                      <p>Arts & Culture</p>
                    </div>
                  </div>

                </Col>
              </Row>
            </div>
            <div className='row2 topdes1'>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                  <div >
                    <Link to="/galary">

                      <div className="custom-card-container">
                        <Card
                          hoverable
                          style={{ width: 300, height: 380 }}
                          cover={<img alt="example" src={td5} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />} >
                          <div className="overlay">
                            <div className="description">
                              <h3 className="title">title</h3>
                              <span className="text">description</span>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </Link>
                    <div className='place'>
                      <p>Arts & Culture</p>
                    </div>
                  </div>
                </Col>

                <Col className="gutter-row" span={6}>
                  <div >
                    <Link to="/galary">

                      <div className="custom-card-container">
                        <Card
                          className='galaryimage'
                          hoverable
                          style={{ width: 300, height: 380 }}
                          cover={<img alt="example" src={td1} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
                        > <div className="overlay">
                            <div className="description">
                              <h3 className="title">title</h3>
                              <span className="text">description</span>
                            </div>
                          </div>
                        </Card></div>
                    </Link>
                    <div className='place'>
                      <p>Arts & Culture</p>
                    </div>

                  </div>
                </Col>

                <Col className="gutter-row" span={6}>
                  <div >
                    <Link to="/galary">

                      <div className="custom-card-container"> <Card
                        hoverable
                        style={{ width: 300, height: 380 }}
                        cover={<img alt="example" src={td7} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
                      > <div className="overlay">
                          <div className="description">
                            <h3 className="title">title</h3>
                            <span className="text">description</span>
                          </div>
                        </div>
                      </Card></div>
                    </Link>
                    <div className='place'>
                      <p>Arts & Culture</p>
                    </div>
                  </div>
                </Col>

                <Col className="gutter-row" span={6}>
                  <div >
                    <Link to="/galary">

                      <div className="custom-card-container"> <Card
                        hoverable
                        style={{ width: 300, height: 380 }}
                        cover={<img alt="example" src={td8} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
                      > <div className="overlay">
                          <div className="description">
                            <h3 className="title">title</h3>
                            <span className="text">description</span>
                          </div>
                        </div>
                      </Card></div>
                    </Link>
                    <div className='place'>
                      <p>Arts & Culture</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </section>

          <section className='artcul'>
            <h2 className='title'>Arts & Culture</h2>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6}>
                <div >
                  <div className="custom-card-container"><Card
                    hoverable
                    style={{ width: 300, height: 380 }}
                    cover={<img alt="example" src={img5} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />} >
                    <div className="overlay">
                      <div className="description">
                        <h3 className="title">title</h3>
                        <span className="text">description</span>
                      </div>
                    </div>
                  </Card>
                  </div>

                  <div className='place'>
                    <p>Arts & Culture</p>
                  </div>
                </div>
              </Col>

              <Col className="gutter-row" span={6}>
                <div >
                  <div className="custom-card-container">
                    <Card
                      className='galaryimage'
                      hoverable
                      style={{ width: 300, height: 380 }}
                      cover={<img alt="example" src={img6} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
                    > <div className="overlay">
                        <div className="description">
                          <h3 className="title">title</h3>
                          <span className="text">description</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className='place'>
                    <p>Arts & Culture</p>
                  </div>
                  <div className='info1'>
                    hellow
                  </div>
                </div>
              </Col>

              <Col className="gutter-row" span={6}>
                <div >
                  <div className="custom-card-container">
                    <Card
                      hoverable
                      style={{ width: 300, height: 380 }}
                      cover={<img alt="example" src={img7} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
                    > <div className="overlay">
                        <div className="description">
                          <h3 className="title">title</h3>
                          <span className="text">description</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className='place'>
                    <p>Arts & Culture</p>
                  </div>
                </div>
              </Col>

              <Col className="gutter-row" span={6}>
                <div >
                  <div className="custom-card-container">
                    <Card
                      hoverable
                      style={{ width: 300, height: 380 }}
                      cover={<img alt="example" src={img8} style={{ height: '380px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
                    > <div className="overlay">
                        <div className="description">
                          <h3 className="title">title</h3>
                          <span className="text">description</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className='place'>
                    <p>Arts & Culture</p>
                  </div>
                </div>
              </Col>
            </Row>
          </section>

        </div>

      </section >
    </div >
  )
}

export default GalaryContainer
