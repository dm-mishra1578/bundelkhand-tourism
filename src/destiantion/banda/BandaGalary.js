import React from 'react'
import Layout from '../../components/layout/Layout'
import '../commangalary.css'
import img from '../../assets/bundel.jpg'
import { Col, Divider, Row } from 'antd';
import { Image } from 'antd';
import banda from '../../assets/banda.jpg'

const BandaGalary = () => {
  return (
    <div>
      <Layout>
        <section className='destnation banda'>
          <div className='bandagalary'>
            <div className='bandaimg'>
              <img src={img} />
            </div>

            <div className='pagetitle'>
              <h2>Banda</h2>
            </div>

            <div className='breadcrump'>
              <div className='breadcrump-list'>
                <span>Home</span> | <span className='active'>Banda</span>
              </div>
            </div>

            <div className='galaryimages'>
              <div className='galarycontainer'>
              <Image.PreviewGroup
                    preview={{
                      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }} >

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='galary-row'>
                 
                    <Col className="gutter-row fun" span={6}>
                      <div > <Image width={300} src={banda}  height={400}/></div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div > <Image width={300} src={banda}  height={400}/></div>

                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div > <Image width={300} src={banda}  height={400}/></div>

                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div > <Image width={300} src={banda}  height={400}/></div>

                    </Col>
                
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='galary-row'>
                 
                <Col className="gutter-row fun" span={6}>
                      <div > <Image width={300} src={banda}  height={400}/></div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div > <Image width={300} src={banda}  height={400}/></div>

                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div > <Image width={300} src={banda}  height={400}/></div>

                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div > <Image width={300} src={banda}  height={400}/></div>

                    </Col>
                </Row>
                </Image.PreviewGroup>
              </div>
            </div>

          </div>
        </section>
      </Layout>
    </div>
  )
}

export default BandaGalary
