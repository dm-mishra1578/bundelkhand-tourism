import React, { useState } from 'react'
import Layout from '../../components/layout/Layout';
import { Carousel, Col, Row, Card, Flex, Splitter, Typography, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import './homeContainer.css'
import img1 from '../../assets/Festive_Delights_divider.png'
import img2 from '../../assets/explorebg2.png'
import img3 from '../../assets/tribg1.png'
import img4 from '../../assets/tribg2.png'
import img5 from '../../assets/unfoldbg.png'
import img6 from '../../assets/blog.jpeg'
import img7 from '../../assets/galary.jpeg'
import img8 from '../../assets/galaryv.jpeg'
import img9 from '../../assets/connect.jpeg'

import slide1 from '../../assets/slide1.jpg'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.jpg'
import slide4 from '../../assets/slider4.jpg'

import { Link } from 'react-router-dom';
import { FacebookOutlined, XOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
const { Meta } = Card;
const contentStyle = {
  height: '450px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Desc = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);
const event = [
  {
    id: 1,
    name: "circuit",
    about: "",
    area: "",
    img: "",
  },
  {
    id: 2,
    img: "",
    name: "distic"
  }
]
const mapdist = [
  {
    id: 1,
    name: "Banda",
    about: { ar: "4,408 Sq. Km.", pop: "1,799,410 (Census 2011)", sea: "", lan: "Hindi,Bundeli", stdc: "", sc: "Light Cottons", wc: "Woollens" },

    history: "Banda district is easternmost one of the districts of Bundelkhand, Uttar Pradesh State in northern India. The city of Banda is the district and commissionary headquarters of Chitrakoot Dham Mandal Banda. The district is surrounded by Districts Fatehpur ,Hamirpur,Mahoba and Chitrakoot."
  },
  {
    id: 2,
    name: "Chitrakoot",
    about: { ar: "38.2 sq. km.", pop: " 9,91,730 approx. (2011 Census)", alt: "207m above sea level", sea: " July-March", lan: "Hindi, English", stdc: "05198 (UP) & 07670 (MP)", sc: "Light Cottons ", wc: " Woollens" },
    history: "Famed in Hindu mythology, Chitrakoot is celebrated in ballads and scriptures for its religious importance and close association with the epic Ramayan. It is believed to be the place where Lord Rama and Sita spent 12 years of their exile and where the Sage Atri and Sati Anasuiya meditated."
  }, {
    id: 3,
    name: "Hamirpur",
    about: { ar: "4,121.9 Sq. Km.", pop: "11,04,285", sea: "", lan: " Hindi", stdc: "", sc: "", wc: "" },
    history: "Hamirpur district is a part of Chitrakoot Dham Division of Uttar Pradesh state of India. Hamirpur town is the district headquarters. It consists of Four Tehsil namely Hamirpur, Maudaha, Rath,Sarila and Seven Blocks namely Gohand, Kurara, Maudaha, Muskara, Rath, Sarila, Sumerpur."
  }, {
    id: 4,
    name: "Mahoba",
    about: { ar: " 2884 Sq. Km", pop: "875968", sea: "", lan: "Hindi", stdc: "", sc: "", wc: "" },
    history: "MAHOBA A small district in Uttar Pradesh is famous for it’s glorious history. It is known for its bravery. The stories Of Veer ALHA and UDAL defines its importance in Indian history. There are various Places which can create live glorious Moment of that previous time."
  }, {
    id: 5,
    name: "Jhansi",
    about: { ar: "  5024 Sq. km.", pop: "19,98,603", sea: "", lan: "HiHindi, Urdu, Bundeli & Englishndi", stdc: "", sc: "", wc: "" },
    history: "Jhansi city, situated between the rivers Pahunj and Betwa is a symbol of bravery, courage and self respect. It is said that in ancient times Jhansi was a part of the regions Chedi Rashtra, Jejak Bhukit, Jajhoti and Bundelkhand."
  }, {
    id: 6,
    name: "Lalitpur",
    about: { ar: "", pop: "", sea: "", lan: "", stdc: "", sc: "", wc: "" },
    history: "content will be available soon"
  }, {
    id: 7,
    name: "Sagar",
    about: { ar: "4", pop: "", sea: "", lan: "", stdc: "", sc: "", wc: "" },
    history: "content will be available soon"
  }, {
    id: 8,
    name: "DAMOH",
    about: { ar: "  ", pop: "", sea: "", lan: "", stdc: "", sc: "", wc: "" },
    history: "content will be available soon"
  }, {
    id: 9,
    name: "Datia",
    about: { ar: "", pop: "", sea: "", lan: "", stdc: "", sc: "", wc: "" },
    history: "content will be available soon"
  }, {
    id: 10,
    name: "Tikamgarh",
    about: { ar: "", pop: "", sea: "", lan: "", stdc: "", sc: "", wc: "" },
    history: "content will be available soon"
  },
  {
    id: 11,
    name: "Chhatarpur",
    about: { ar: "", pop: "", sea: "", lan: "Hin", stdc: "", sc: "", wc: "" },
    history: "content will be available soon"
  },
  {
    id: 12,
    name: "Panna",
    about: { ar: "", pop: "", sea: "", lan: "Hin", stdc: "", sc: "", wc: "" },
    history: "content will be available soon"
  },
]


const HomeConatiner = () => {
  const [distic, setDistic] = useState(1);
  const [tooltip, setTooltip] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // 

  const handleMouseEnter = (event) => {
    const title = event.target.getAttribute('title');
    setTooltip(title);
    setPosition({ x: event.pageX, y: event.pageY });
  };

  const handleMouseMove = (event) => {
    setPosition({ x: event.pageX, y: event.pageY });
  };

  const handleMouseLeave = () => {
    setTooltip('');
  };

  // 
  return (

    <>
      <Layout>
        {/* slidder */}
        <div className='carouselslide'>
          <Carousel className='crousel' autoplay style={{ width: "100%", height: "450px" }}>
            <div>
              <img src={slide1} />
            </div>
            <div>
              {<img src={slide2} />}
            </div>
            <div>
              <img src={slide3} />
            </div>
            <div>
              <img src={slide4} />
            </div>

          </Carousel>
        </div>
        {/* events imp */}
        <section className='important-event'>
          {/* <div className='eimg1'>
            <img src={img1} width={"100%"} />
          </div> */}
          <div className='container'>
            <div className='tripbg'><img src={img3} width={"100%"} /></div> {/*containerbg  */}

            <div className='title'>
              <p>News & Updates</p>
              <h2><b>What's New</b> <span>in Bundelkhand?</span></h2>
            </div>
            <div className='impevent'>
              <Row>
                <Col xs={{ span: 20, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <Card
                    hoverable
                    style={{ width: 300, height: 380 }}
                    cover={<img alt="example" src="https://uptourism.gov.in/downloadmedia/siteContent/202410232103400879thubh.jpg" style={{ height: '300px', width: '100%', objectFit: 'fill', }} />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>

                </Col>
                <Col xs={{ span: 20, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <Card
                    hoverable
                    style={{ width: 300, height: 380 }}
                    cover={<img alt="example" src="https://uptourism.gov.in/downloadmedia/siteContent/202410232103400879thubh.jpg" style={{ height: '300px', width: '100%', objectFit: 'fill', }} />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>

                </Col>
                <Col xs={{ span: 20, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <Card
                    hoverable
                    style={{ width: 300, height: 380 }}
                    cover={<img alt="example" src="https://uptourism.gov.in/downloadmedia/siteContent/202410232103400879thubh.jpg" style={{ height: '300px', width: '100%', objectFit: 'fill', }} />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>

                </Col>
              </Row>
              {/* slide button */}
              {/* <div className='slidebtn'>
                <Flex gap="small" wrap>
                  <Button type="primary">Prev</Button>
                  <Button type="primary">Next</Button>
                </Flex>
              </div> */}
            </div>

          </div>

          <div className='eimg'>
            <img src={img1} width={"100%"} />
          </div>
        </section>

        {/* explore */}
        <section className='explore'>
          <div className='container'>
            <div className='title'>
              <h2 title='bundel'>Bundelkhand Nahi Dekha Toh<b> India Nahi Dekha</b></h2>
            </div>
            <div className="bundelhistory">
              <Card className="historycard" style={{ width: "100%" }}>
                <p>The land of Bundelkhand spreads over Madhya Pradesh and Uttar Pradesh. This land carries a imperial chronicle. Be it heritage, art & crafts, handloom or culture, it stands out for its uniqueness. Bundelkhand is known among discerning travelers for its colorful culture, rich history, beautiful landscapes and breathtaking architecture. Enriched with various Bundela and Chandela tourist attractions like UNESCO World Heritage Site- the temples of  Khajuraho, the fort and…</p>
                <Link to="/history"><Button type="primary" size="large"> Read More</Button></Link>
              </Card>
            </div>
          </div>

          <div className='eximg'>
            <img src={img2} width={"100%"} />
          </div>
        </section>

        {/* Bundelkhand map */}
        <section className='bundelmap'>
          <div className='container'>
            <div class="title">
              <div class="titlemap">
                <p>Click on any district to explore more details.</p>
                <h2><b>Discover </b>Bundelkhand</h2>
              </div>
              <div class="titledist">
                <p>District</p>
              </div>
            </div>
            <div className='map-container'>
              <div className='map'>

                <svg version="1.1" className='mapsvg' viewBox="0 0 900 1022" width="100%" height="400" >
                  <path transform="translate(61,601)" onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} title="Sagar" onClick={() => setDistic(7)} className='sagar' d="m0 0 4 4 5 6 8 6 4 4-1 10-1 9 4 8v4l9-2 6-4 6-9 5-9 3-3 3-1h9l2 2 2 6 7 3 4 8 5 6 8 5 4 2 2 10 6 2h8l10-6h2l9 22 23-15 1-9 7-2 3-4 7-18 7-10 3-2h4l3 6 4 2h7l4-5 4-7 15-3 5-2h9l8 4 5 4 2 6-2 5-5 4-4-2-10-15-5 2-2 2v7l6 12 1 4-4 7-11 8-5-2-2-2-5 1-4 5-4 8v16l3 3 5 2 2 10h20l7 14v7l-4 5-11 6-5 2-9-2v12l-6 7-2 4 8 1 8 5 12 11 6 4 10 3-1 10 2 5 5 2 10 6-3 3 2 4 15 15-1 3h-15l2 21v6l5 2-5 15-4 3-7 1-2 5-8 1-5 21v3l6 3-1 16-1 3-4 2-1 9-8 1 8 13v6l-14 6h-4l-5-8-10 1-4 1h-10l-3-4-13-2h-16l-11 1v-10h-8l-8-4-6-8-4-12-5-5h-12l-7 1-5-12-2-7 1-2-4-2 1-5 4-6 11-9 12-8 7-6-1-4-7-8-12 7-5 1-31 3h-8v-10l3-9-1-11-10 2-13-24-1-4-8 7-5 6 4 1 7 6-1 5-1 1h-13l-13-7-12-11-1-2v-14l2-8 5-8-2-12v-20l4-20-8-10-5-3h-10l-4 8h-18l-5-9v-2h7l1-7 2-8-6-10 2-6 6-13-13 4-3-6 1-5 8-6 1-5-2-5 1-5 7-8 8-8 8-7 10-5 10-4z" fill="#DAD901"></path>
                  <path transform="translate(573,334)" onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} title="Chhatarpur" onClick={() => setDistic(11)} className='chhatarpur' d="m0 0h7l6 4 5 7 2 23 4 10 5 6 10 5 6 2-2 18-9 6-3 13-8 15-4 1h-9l-7 4-9 1-7 11-9 10-2 1-28 1-2 14 7 8 4 5-1 11-3 5-5 4-8 6-8 17-5 5-8 1v-10l-9 3-5 6-6 14 2 5 3 6-2 38 2 6v5l-6 7-7 6h-4v-10h-10l-9-3-5 1-16 7h-11l1-10-3-8-6-2h-5l-4 5 1 9-3 4-14-1-6-2-7-4-9 9-2 1-1 3-3 44-1 4-20 3 1 12-24 1-15 5h-18l-3-9-7-3-1-2v-14l5-10 3-4 5 1 3 3 5-1 9-7 4-5 1-6-6-10-1-9 4-4 4 4 10 14 9-6 1-7-4-6-5-4-6-3h-10l-8 3-6 1h-8l-3 9-3 4-9-1-2-1-1-9-9-6 4-3v-3l11-13 1-9 4-6 5-4h2l1-8 3-6 2-1h13l10 3 6-1 5-8 2-5 9-2 11-1 3-10 4-11-1-13-1-11 7-11v-15l-2-24v-18l2-15 6-6 12 1 12 3 1 1v8h11l2-9 3-6 4-5 7-3 4 6 6 4 9 2 16 1 16 4 13 3 5-5 7-4h4l-10-22-1-5 7-5 11 3 20-14 16-13 18-18 3 1-3 9 9-1 7-6 4-8z" fill="#DAD901"></path>
                  <path transform="translate(397,610)" onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={() => setDistic(8)} title="Damoh" className='damoh' d="m0 0 8 1 3 4 1 7-3 9 14-1 18-8 5 1 8 2h6l1 1v9l3 1 4 8 2 2v8l-3 5 1 6 2 2v7l-5 3h-2l-2 12-5 10-7 11-4 9-1 6 23 3 1 3v11l-3 5v12l7 1v29l-6 24-1 5 9 2 16 7 6 4 1 4-10 14-11 12-7 8-5 4h-7l-2 9-9 13-17 17-17 13-12 7-16 8-10 10-28 17-9 5-4-2-11-17-5-4-4-1h-7l-5 2-3 1-1 3-5-5-2-5 7-1v-10l5-2 1-13 1-7-6-2-1-3 4-17 2-3 7-1 2-5 8-2 4-5 5-15-5-2-1-5-1-9v-9l14-1 3-1-3-5-2-1v-2h-2l-7-8-4-4 2-4 2-2-10-4-8-6-1-6 2-7-9-2-9-6-11-10-14-7 2-5 4-5 1-9 7 1 12-5 4-3h2l3-6-1-9-6-11v-2l14-5h26l-2-13 14-2h7l2-37 1-14 7-7 4-3 5 2 2 2 21 3 2-4 1-4-1-7z" fill="#DAD901"></path>
                  <path transform="translate(620,433)" onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={() => setDistic(12)} title="Panna" className='panna' d="m0 0 10 5 10-1 8 3 2 3v8l-11-1-6-3-6 7h-2l6 17 1 15 11-8 9 3 11 5v9l-5 4-12 5-5 8-9 5h-2l-1 3-9 3h-6l2 9-10 5 2 6 6 9 7 5 8 2-1 5-3 7v6l2 4v7l-3 3-4 3v11l7 8 4 7-1 9 8 1 7 4 8 8 1 6-1 7 4 10v2l9 3 12 5-1 4-8 9-10 7-13 7-8 7-5 1-15 1-8 8-5 4 1 5v7l-4 8-8 8h-2l2 9-7 2-5-1-10-7-7-2-10-1 1-5 4-5-10-6-1 9-4 3h-6l-12-7-5-3-5 1-6 7-9 20-11 13-4 5-11 2h-5v-26l-7-1-1-3v-7l3-6v-10l-2-5-21-3 1-8 6-11 7-11 3-8 1-7 5-3h2v-9l-3-4 1-6 2-2v-9l-4-5-1-4 14-14v-11l-1-5 1-18v-20l-4-6 3-9 5-10 6-4h3l1 9h7l6-4 8-16 4-6 10-6 4-7 1-5v-7l-11-12 2-13 27-1 6-4 7-9 6-9 10-2 6-3 5 6 3 2h9l5-4 1-2 1-12 10-1z" fill="#DAD901"></path>
                  <path transform="translate(230,292)" onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={() => setDistic(10)} title="Tikamgarh" className='tikamgarh' d="m0 0 8 1 3 7-4 6 5 6-2 5-5 10 9 1 4 4v8l-3 5-6 4-8-1 2-5 2-3-9 1-6 4-7 8h-2l-2 4-6 5 1 2v12l11 1 3-5 1-6-1-6 6-5h15l3 7v9l-3 2h-10l-6 12-5 20 8 1 8-15 16 1-2-17 1-1h7l6 5 5 9v10l-4 3v9l4-1 6-10 1-2 4 2 6 6-1 14h12l2-2v-7l3-3h4l1 9h8l-2-8 5-1h7l1 7 7-5 4 2 6 7-1 18v12l2 28v15l-7 10 1 12 1 13-7 19-10 2-11 1-1 7-4 6-5 2-11-3h-13l-5 5-3 10-8 6-2 6-1 7-11 13-4 5h-7l-7-3-2-3v-10l5 1 6 2-5-14 1-7 2-5-9-5-2-3 1-10-3-2-8 1-1 7-15 4-4 4-11-3 1-9-1-5 3-8 5-8 1-15v-25l-4-5-13-7-7-8-4-6-4-4v-10l2-5v-20l-7-8-3-4-1-16-3-6-5-4 1-11-5-5-9-3-19-4 1-5 10-1 1-3h8l1-1 1-16 15 5-2-11 10-6 11-9 6 1 3 4v2l-8 3-1 2v6l24 9h2v-8l-1-10 4-1h7v-6h-12l-2-2 1-7 4-4 7-1 5 3 5 8v3l7-2v-8l-1-6 9-13z" fill="#DAD901"></path>
                  <path transform="translate(89,377)" onClick={() => setDistic(6)} onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} title="Lalitpur" className='lalitpur' d="m0 0h1v8l7 2-1 7h3l10 18v2l6-4 12-12 8-4h7l6 6 1 4 1 16 10 11v20l-2 5-1 12 4 1 7 10 5 6 12 6 5 5v26l-1 14-6 10-2 7 1 7-2 6 11 4 5-2 5-3 9-2h4v-8l7-1 2 2-1 9 5 6 5 2-1 5-1 7 3 8v3l-5-1-5-2 2 15 5 4 10 2 9 6v2l-7 3-5 6-5 10-7 16-2 1h-7v10l-21 14-2-3-7-18h-3l-10 6h-8l-5-2-2-11-5-1-8-6-5-6-2-4v-4l-7-1-2-2-3-7h-10l-6 3-8 14-7 8-5 2-5-1-4-10 2-11v-7l-7-8-7-4-6-9h-4l-2-6-3-5 2-16 6-7v-17l-4-15-5-10-1-1-1-19-4-8-7-7-3-5v-2l9-5 14-14 12-8 6-7 1-2v-14h-2l-5-9v-2l12-6 3-6 1-6-7 1-1 4-3 3-3-1-3-8 1-8 9-10z" fill="#EED101"></path>
                  <path transform="translate(252,180)" onClick={() => setDistic(5)} onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} title="Jhansi" className='jhansi' d="m0 0h2v6h18l3 4-2 4-3 4v2l5 3h3l2-4h2l8 17v2l9-2 2 1v2l31 1-2 10 11-1 6-4h3l4 11 1 3-1 4-1 21-6 2 12 19-1 5-6 13 4 2-6 8-8 9-2 13-8 5-4 7-4 20v10l4 16 3 10v5l-4 3h-3v-6l-14 2 1 7h-4l-2-9-7 2-2 5v5l-1 1h-10v-13l-9-10h-2l-6 11-4 3-1-5 5-7v-8l-5-10-5-5-2-1-10-1 2 12v7l-12-1-3-1-2 6-5 9-6-1 4-18 2-5 4-5 12-2 1-1v-11l-3-7h-16l-6 4-1 5 1 6-3 6-1 1-7-1-1-1-1-12 19-19 4-2h4l-2 5v3l9 1 8-6 2-4v-8l-4-5-7-2 2-6 3-5-1-4-3-4 2-5v-4l-3-5h-10l-5 5-7 10-1 5 1 8-3 3-2-1-4-8-6-4-9 1-4 4-1 9 3 2 11 1-1 2-4 1h-7l2 11v8l-17-6-7-3v-5l5-3 5-2-3-5-3-3h-6l-10 9-9 5h-3l2 7-1 4-14-5v18h-9l-2 3h-10l-1 7 28 7 6 5v6l-3 4-9 3-9 7-10 10-4-5-7-13v-2h-2v-6l-6-2v-10l-5 3h-2l-6-15 1-5 2-5-7-9 1-7 9-12 9-11 6-8 9-19 4 1 6 1 3-1 2-4 5 1 9 5 5 1 4-3 19-1 19-8 16-7 8-7-2-6-9-15v-2l-3-1 3-3 8-16 4-5 11 3 2 1v-15l3-10 7-6 7-4h2l1-3z" fill="#EED101"></path>
                  <path transform="translate(617,195)" onClick={() => setDistic(1)} onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} title="Chitrakoot" className='chitrakoot' d="m0 0 12 1 11 4 9 6 3 7-13 1-1 1v8l3 6 13 2 3 2 2 12 8 6 10 4 14 3h12l10-9 4-3h10l3 5v5l19 2 5 11 3 6 6 1 9-6h2l2 8-9 11 1 4v12l-5 10-4 2-6-1-5 3-8 9-7 9-9 10-9 8-9 4h-5l7 17 2 6h-8l-1 10 5 6-4 1h-10l-2 5-1 5 13 15 5 6v9l-18 4-5-1-8-10-7-11-3-6-3 3v7l2 6-4 1-10-2-2-1-12-1v7l-3 2-5-1-9-4-2 1h-12v13l-5 6h-8l-6-5v-2h7l3 1 2-6 7-14 2-10 9-6 3-20-10-3-8-5-5-6-4-13-1-18-6-8-6-4-19 1-5 10-5 4-7 1 2-7-1-10 8-5 11-7 4-5 1-3 1-16 7-1v-9l4-8 9-6 2-1 1-14 4-4 2-1-1-7-5-6-13-9-4-5 1-1 12-1-1-3 8-7 3-4 4 1-5-10 11-2z" fill="#EED101"></path>
                  <path transform="translate(498,131)" onClick={() => setDistic(3)} onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} title="Hamirpur" className='hamirpur' d="m0 0h6l3 2v13l4 2 6 4 21 1 3 9-1 4-2 4 9 10 15 6 5 3 11 1 10 8 7 1 5 7-6 7-9 9-10 2 2 5 11 8 8 7 2 3-1 5-5 5-1 13-10 7-3 3-1 3-1 11h-8v18l-4 6-8 6-12 7-1 5-11-1-12-5-1-1-1-19-3-5-3-1 2-7v-19l-6-9-10-5-2-6v-13h9v5l-4-1-2-1 6 9 1-1-2-4 2-2 1-5-36-1-4-5h-4l-1 5-13 1v2l-6 1v8l2 1v-4l4-1 1 3 2 1-2-4-6-2v-1h7v-4h6v5h-2l4 4v-2h5v6l1-12 4-1 1 1v12h1v-12l1-1h9l-1 5-5-2 6 9 1-1-2-4 2-2 1-5h4l1 7 6 2-1 6h3v3l-7-1-2-1v2l9 2-3 7-7 9-7 8-3 6-8 3-4 4-3 6-5-2-8-7-7-7-19 1-1 19-3 3-10-5-7 3h-5l-4-3-21-2-17-5 1-5 5-9v-5l-10-15-1-3h6v-23l1-5-3-9 3-3 3-1h15l5-4 1-8 2-2 5 1 11 6h3v-14l-4-4v-1l11-3 7-6h7l2 2h6l3-2 4 1 19 11 5-2 16-8 3-1v-9l9-1 4-1 2-5 3-10h-4v-26l2-7z" fill="#EED101"></path>
                  <path transform="translate(769,292)" onClick={() => setDistic(2)} onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} title="Banda" className='Banda' d="m0 0 4 2 14 13 12 1 15 11-2 6-7 14 10 2 7 9 6 3 11 2 27 1 5 15v3l6 2 7 3 14-6h2v37l-8 2 1 3v8l-5 6h-7l-12-11-6-7-2-3-4 2-8 7h-2l-2-4v-4l-8 3-2 18-3 10-8 18-2 12v5l-4-1-5-3h-2l-4 12-6-2-19-11-5 1-4 3h-17l-6-5-1-2-6 1-18 7-4-1-4-4-1-6 3-5 6-4 2-4-3-5 1-5 7-4h2l1-17 2-7 3-4v-6l-2-1-12-1v9l-2 16-7-6-4-3-16-1-7-7 1-4 2-4 16-2-7-7 1-7 1-1h9l-10-23 10-4 6-4 10-9 13-16 7-8 4-3 9 1 5-7 2-6z" fill="#EED101"></path>
                  <path transform="translate(497,266)" onClick={() => setDistic(4)} onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} title="Mahoba" className='mahoba' d="m0 0 6 1 7 6 3 6v17l-4 10h6l2 4v21l5 1 11 4 8 2-2 4-8 8h-2l-2 4-14 12-19 14-8 4-11-3-9 9 4 2 8 18v3l-7 3-6 6-16-4-14-3-15-1-11-3-6-7-1-2-5 1-7 6-4 8-3 7h-7v-8l-10-2-12-2h-5l-5 5-4-2-7-9-6-20-2-9v-11l4-19 4-6 4-3 4-2 2-13 11-13 3-4 8 1 6 2 21 2 4 3 7-1 6-2 7 5 5-2 1-2 1-18 11-1 5-1 13 13 6 4 5 1 2-7 5-5 8-3 4-8 9-10z" fill="#EED101"></path>
                  <path transform="translate(88,209)" onClick={() => setDistic(9)} onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} title="Datia" className='datia' d="m0 0h9l10 5 14 9 10-5 15-2h26l4 16 4 7-1 16-4 12-7 8-3 1-2 9-16 1-4 3-9-3-7-4h-5l-2 4-5 1-4-3-9-1 1-7-10-14v-4l-9-1-4-7h-21l2-9 9-13 14-15z" fill="#DAD901"></path>
                  <path transform="translate(88,207)" d="m0 0h8l7 3 16 10h5l7-4 17-2 25-1 4 16 4 7v18l-4 13-5 7-5 3v6l16-6 14-6 9-6 1-4-5-7-6-13h2l12 21-2 4-7 6-16 7-19 8-19 1-5 3-8-3-7-4-4 1-4 4-6-1-4-2-2 6-8 16-10 12-10 13-3 5v5l7 9-3 7 1 5 4 10v3l4-1-1 3-8 7-7 8-1 8 3 8 4-2 1-5h8l-1 9-4 5-9 4h-2l5 9v2l3-1v15l-4 6-8 7-10 7-13 13-6 3h-2l6 9 7 8 2 5 1 19 4 7 4 10 2 9v17l-6 7-2 16 3 5 1 1v5l4-1 7 10 8 5 6 7v7l-2 11 4 10 7-1 7-6 7-13 5-5 4-2h10l3 4 2 5 7 2 4 10 9 8 7 3 3 11 4 1h8l12-7 3 4 6 16 1 2 20-13 1-10 9-1 2-6 7-17 6-8 5-4h4v-2l-5-2-4-3-12-3-4-4 1-3 5 5 4 1h7l7-6-2 5 1 2-4 2 9 6v9l11 1 6-12 17-3 5-2h10l9 5 6 7 1 5-2 5-9 6-8-10-5-8-3 1-1 7 3 8 4 6-2 8-7 7-8 5-4-1-4-3h-3l-6 10-1 3v14l3 3 5 2-1 4-1-3-5-1-4-4v-16l6-11 4-4 5 1 4 3 5-2 8-6 3-6-1-4-6-12v-7l6-5 3 1 8 12 3 4 4-2 3-2 1-5-3-6-8-5-3-1h-9l-13 4-7 1-5 9-3 3h-7l-5-3-2-3v-3l-7 3-6 9-8 20-4 4h-6v9l-24 16-2-3-7-18v-2l-12 7h-8l-6-2-2-6-1-5-8-4-7-6-4-6-1-5-5-1-4-4-2-5h-9l-5 3-9 16-7 6-5 2h-6l-4-10-1-5 2-10v-6l-9-8-7-6-3-5-3 3-4 5-19 8-7 7-8 7-7 7-2 3 2 12-8 8h-2l1 7 2 3 9-3h3l-1 5-6 12 2 5 4 7-3 11-1 4h-7l5 10 18 1 2-6 2-3h10l8 6 6 8-4 20v20l2 12-6 10-1 6v14l7 8 10 7 8 4h13l1-5-7-6-3-1 2-4 9-9h2l13 25 2 2 9-1 2 6-1 8-2 6-1 10 16-2h8v1l-20 3h-6v-11l3-10v-9l-10 1-5-8-8-16-4-1-1 3h-2l-1 6 8 6 1 4-6 5h-11l-9-4-10-7-4-3v-2h-2l-3-5v-20l4-8 2-3-2-19 1-17 2-10v-7l-6-8-6-3h-6l-5 9h-20l-7-13v-2l8-1 3-12-6-10 2-6 4-8v-2l-7 3h-3l-4-9 1-4 9-8-1-6-1-7 9-10 8-7 8-8 8-4 11-4 3-3v-10l-3-3v-16l2-5 3-4h2v-20l-4-13-6-12-1-19-3-6-9-9-2-4 1-4 8-4 6-5 7-8 15-10 4-5 1-3v-10l-8-12 1-4 12-5 3-7-8 6h-3l-5-10v-7l5-8 9-9-3-10-3-8 1-5 1-4-5-7-1-8 8-11 14-17 5-8 7-16h-6l-1-3 1-7-9-11-3-4-7-3-3-6h-12l-9 1-1-5 2-7 8-11 12-14 7-7zm0 2-13 13-11 14-4 7-1 7h21l4 7 9 1 1 6 9 12-1 7 9 1 4 3 5-1 2-4 8 1 8 5 5 1 4-3 16-1 2-9 5-3 5-6 4-12 1-16-5-10-3-13h-26l-15 2-10 5-18-11-6-3z" fill="#010106"></path>
                  <path transform="translate(480,544)" d="m0 0 1 2-4 8-3 9 4 6v20l-1 21 1 2v11l-14 14 2 5 3 4v9l-3 4 1 5 2 3v7l-3 3-4 2-2 10-6 12-7 11-3 8-1 4h8l13 2 2 2 1 4v10l-3 6v10l7 1v26l16-3 11-13 6-10 7-16 7-7 2 1-7 8-8 18-9 12-9 10-16 3-6 23-1 6 6 1 11 4 11 6 3 3v6l-9 12-12 13-7 8-6 5-5 1-4 9-4 6-12 14-10 9-13 10-13 8-17 8-12 12-14 8-13 8-9 5-5-1-4-5-7-11-5-5-2-1h-11l-6 5-1 7-4 3-13 5-4-1-5-8-10 2-2 1h-11l-4-4-16-3-24 1v-9l-10-1-9-6-5-11-4-10-5-2-10 1-8 1-7-20-3-3 1-8 5-7 12-9 12-8 5-5-2-4-3-4-6 1-8 5h-18v-1l14-1 6-2 11-6 9 10-1 4-11 9-12 8-8 7-3 6v3l4 2-1 3 6 17 7-1h12l5 4 4 11 4 8 5 4 5 2 8 1v10l11-2h16l13 2 3 4h10l8-2h6l5 7v2l16-6h2l-2-8-6-9v-2l8-1v-9l2-2h3v-8l2-11-6-2-1-4 5-21 1-1h8l2-6 9-2 4-9 2-7-4-2-2-18v-9l15-1-2-4-15-15 2-4 1-1-11-6-5-5-1-6 2-6-7-1-6-3-10-9-9-7-7-3-5-1 2-6 5-5 1-12 9 1 9-4 9-6 1-2v-7l-6-11v-3h-20l-1-7h2l1 4h18l15-5h24l-2-9 1-4 15-2h5l3-48 2-4 8-7 4-3 7 5 19 3 2-6-1-7 5-6 9 1 4 4 2 9-2 7 11-1 18-8 5 1 7 2 10 1v10l5-2 8-7 3-4-1-8-1-7 2-34-4-8-1-3 7-15zm-83 66-4 4 1 9-3 4v2l-21-3-5-4-4 2-8 7-1 1-3 45v6l-14 1-7 1 2 13h-26l-14 5 2 6 5 10v6l-3 4v2l-5 2-10 5-6 1-4-1-1 9-6 8v2l14 7 7 7 11 8 8 3h3l-2 7 1 6 10 7 8 3-4 4 2 4 8 8 1 2h2v2l4 4 1 2-3 1-14 1v9l1 11 2 4 4 1-6 17-5 4-7 2-1 4-7 1-2 3-4 19 5 3h2l-2 18v2l-5 2v10l-7 1 2 5 5 5 1-3 4-2 4-1h7l7 3 7 9 7 11h4l15-8 13-8 10-7 9-9 21-10 14-10 13-11 14-14 8-12 2-9h7l8-7 11-12 13-17 1-4-5-5-15-7-9-3h-3l6-25 1-4v-29l-7-1v-12l3-5v-11l-1-3-23-3 2-9 7-13 7-11 2-6 1-9 6-2 1-1v-7l-3-4 1-7 2-2v-8l-4-5-3-6h-2v-9l-5-1-8-1-4-2-5 1-16 7-14 1 3-9-2-9-5-3z" fill="#010106"></path>
                  <path transform="translate(228,291)" d="m0 0h10l3 3 2 6-3 4 2 5 2 2-1 5-5 9 7 1 5 6v8l-3 5-8 6-9-1-2-2 4-7-8 3-18 18 1 12 7 1 3-6-1-10 6-5 2-1h16l4 8v11l-2 2-4 1h-8l-2 4-2 2-5 20-1 2h6l7-14 15 2-2-19h10l6 4 6 10 1 3v8l-5 7 1 4 6-9 3-5 4 2 8 9-1 13 10-1v-7l5-5h5l2 9 3-1-1-6 1-1h6v2h-5l2 5v3h-8l-1-9-6 1v9l-3 3h-13l1-15-7-7-2-1-2 6-6 8-4-1v-9l4-3v-10l-6-10-4-3h-7l2 18-14-1-3-1-2 6-5 10-9-2 1-8 4-15 6-9 10-1 2-1v-9l-2-7-15 1-5 4 1 8-3 8-2 2-9-1-2-1-1-12-1-3 8-6 1-2h2l2-4 7-7 7-3 6 1-2 5-2 3h8l6-4 2-4v-8l-3-3-9-2 2-6 4-7-2-5-3-4 4-6-2-6h-8l-5 4-8 12 1 11-1 3-7 2-5-10-5-3-7 1-3 3-1 7 1 1 12 1v6l-11 1 2 10v8l-3 1-24-9-1-1v-6l4-4 6-1-3-5-6-1-11 9-9 5 2 12-15-5-1 15-2 2h-8l-3 3-8 1-1 4 14 2 12 3 7 5 1 2-1 9-1 2 4 2 4 5 1 3 1 16 7 8 3 4v20l-2 5v10l7 8 4 6 6 5 11 6 4 5v25l-1 15-7 12-1 5 1 7-2 6 11 2 4-4 15-3v-7l5-2 6 1 2 2-1 10 4 4 7 4-3 7 1 8 4 12-12-4v9l-2-1v-11l10 3-4-11 1-7 2-5-5-1-6-7 1-9-5-1h-3v8l-16 4-5 4-10-3-4-2 2-8-1-6 4-10 4-6 1-14v-26l-5-5-12-6-6-7-6-9-3-1v-12l2-5v-20l-10-11-1-16-2-5-4-4h-7l-8 4-14 14-4 1-10-18-4-2 2-7-7-2-1-9 3-2v10l6 1 1 5-1 2h2l10 18h2l12-12 10-6 6-2 1-2v-6l-5-4-28-7-1-2 2-6 10-1 2-3 9 1v-18l6 1 8 3-1-10 9-4 13-11h6l7 8-3 3-7 3-1 5 10 3 13 5-1-18 11-2-10-1-4-3 1-9 5-5 9-1 6 4 6 9h2v-7l-1-6 7-11 5-6z" fill="#010106"></path>
                  <path transform="translate(538,152)" d="m0 0 3 3 2 10-2 3 1 4 4 5 18 8 3 2 11 1 11 8 12 1 10-2 3-1h13l13 4 10 6 3 4 1 6-3 1h-10l-2 1 1 7 2 4 15 3 3 7v6l4 4 12 6 7 2 8 1h12l12-11 2-1h8l5 2 2 9 16 1 5 5 4 11 1 3 6-2 8-5 4 1 1 3v8l-6 9 13 13 4 3 10 1 11 7 7 5-1 5-8 15 7 1 5 4 3 5 6 3 10 2 21 1 7-1 4 9 3 10 8 4h6l11-5h2v2l-11 5-6 2-12-6-5-15v-3h-27l-14-3-7-6-3-5-10-3 1-5 7-13v-2l-14-10-12-1-7-7-8-7-2-1v12l-4 9-4 5-9-1-8 7-11 14-11 12-8 6-11 5 9 20v2l-9 1-1 7 7 7v1l-17 1-2 5 1 4 5 5 16 1 8 7 2 2 3-24h12l3 2v6l-4 6-3 22-7 4h-2l1 7 2 4-5 5-5 4-1 6 1 5 4 2 5-1 19-7 4 1v1l-13 4-11 4h-5l-5-4-1-2v-9l5-5 4-3 1-4h-2l-1-6 5-5 4-2 3-21 5-8-1-3h-9l-2 16-1 10-14-12h-13l5 6 4 4 1 2v11l-15 2-3 1h-7l-5-5-9-14-1-4 3 3 8 12 5 6 8-1 9-2h5l-1-9-7-8-11-13 1-5 3-5 13-2-5-5 2-10h8l-9-20v-3l10-3 9-6 10-10 11-14 9-10 6-1 5 1 5-8 1-3v-12l-1-4 9-11-1-8-11 7-6-1-4-7-4-10-16-2-3-1-3-9h-10l-10 9-4 3h-12l-18-4-11-6-4-4-2-12-9-2-7-2-3-6v-8l2-2 12-1-3-6-10-6-9-3-12-1-12 4-6 1 4 6v3l-4-1-2 4-7 7h-2l2 4h-13l1-2 7-1 14-14-4-7-7-1-10-8-11-1-10-5-10-4-8-8-2-4 3-4z" fill="#191713"></path>
                  <path transform="translate(88,207)" d="m0 0h8l7 3 16 10h5l7-4 17-2 25-1 4 16 4 7v18l-4 13-5 7-5 3v6l16-6 14-6 9-6 1-4-5-7-6-13h2l12 21-2 4-7 6-16 7-19 8-19 1-5 3-8-3-7-4-4 1-4 4-6-1-4-2-2 6-8 16-10 12-10 13-3 5v5l7 9-3 7 1 5 4 10v3l4-1-1 3-8 7-7 8-1 8 3 8 4-2 1-5h8l-1 9-4 5-9 4h-2l5 9v2l3-1v15l-4 6-8 7-10 7-13 13-6 3h-2l6 9 7 8 2 5 1 19 4 7 4 10 2 9v17l-6 7-2 16 3 5 1 1-1 8h-1l-1-8-3-3v-16l2-5 3-4h2v-20l-4-13-6-12-1-19-3-6-9-9-2-4 1-4 8-4 6-5 7-8 15-10 4-5 1-3v-10l-8-12 1-4 12-5 3-7-8 6h-3l-5-10v-7l5-8 9-9-3-10-3-8 1-5 1-4-5-7-1-8 8-11 14-17 5-8 7-16h-6l-1-3 1-7-9-11-3-4-7-3-3-6h-12l-9 1-1-5 2-7 8-11 12-14 7-7zm0 2-13 13-11 14-4 7-1 7h21l4 7 9 1 1 6 9 12-1 7 9 1 4 3 5-1 2-4 8 1 8 5 5 1 4-3 16-1 2-9 5-3 5-6 4-12 1-16-5-10-3-13h-26l-15 2-10 5-18-11-6-3z" fill="#050508"></path>
                  <path transform="translate(302,789)" d="m0 0 2 4 5 5 9 5 5 2-4 4 2 4 8 8v2h2v2l3 1 2 5-3 2h-14l2 20 1 3 4 2-1 5-4 12-6 5-6 1-2 5-7 1-4 15-1 6 6 3-1 20-6 2v10l-7 1 6 9 6-5 4-1h7l7 3 6 7 9 14 5-2 18-10 17-11 10-10 12-6 3 1-15 8-11 11-14 8-13 8-9 5-5-1-4-5-7-11-5-5-2-1h-11l-6 5-1 7-4 3-13 5-4-1-5-8-10 2-2 1h-11l-4-4-16-3-24 1v-9l-10-1-9-6-5-11-4-10-5-2-10 1-8 1-7-20-3-3 1-8 5-7 12-9 12-8 5-5-2-4-3-4-6 1-8 5h-18v-1l14-1 6-2 11-6 9 10-1 4-11 9-12 8-8 7-3 6v3l4 2-1 3 6 17 7-1h12l5 4 4 11 4 8 5 4 5 2 8 1v10l11-2h16l13 2 3 4h10l8-2h6l5 7v2l16-6h2l-2-8-6-9v-2l8-1v-9l2-2h3v-8l2-11-6-2-1-4 5-21 1-1h8l2-6 9-2 4-9 2-7-4-2-2-18v-9l15-1-2-4-15-15 2-4 1-1-11-6-5-5-1-5z" fill="#010106"></path>
                  <path transform="translate(592,363)" d="m0 0h2l4 13 6 7 11 5 5 2-2 20-9 6-3 12-9 18-10-1 4 5 2 1h8l4-5 1-13 12-1 3-1 10 5 5-1 1-7h12l4 2 9 1 2-1-2-5v-7l4-4 3 4-1 3-3-4-1 5 3 11h-14l-8-3h-6v5l6 1 5 3 2 4v9h-12l-4-2h-4l-4 5 3 10 2 5 1 11h2l5-5 6 1 17 7 1 1v10l-5 5-13 5-3 6-5 4-5 3-4-1 10-5 3-4 3-5 12-5 4-3 1-9-9-3-9-4-5 2-6 5h-2l-3-19-4-11v-2h2l2-4 5-4 5 3 11 2-2-10-8-3-10 1-10-5-2 1h-10v12l-5 6-2 1h-9l-6-5-3-3-7 4-8 1-10 15-7 6-2 1h-27l-1 13 8 8 3 4v7l-3 9-4 5-10 6-9 19-6 5-2 1h-7l-1-1v-9l-8 4-2-1 5-4 7-1v10l10-3 8-16 4-6 11-8 3-5 1-11-7-8-4-5 2-14 1-1 28-1 8-7 7-11 3-4 9-1 7-4h12l9-17 2-11 9-6 2-17-12-5-7-6-5-10z" fill="#010106"></path>
                  <path transform="translate(463,238)" d="m0 0 5 1 3 4 38 1-2 1v5l-2 4 3 4-4-1-5-7v-2l6 2v-5h-9l1 13 1 1v5l9 3 6 7 2 4v19l-3 7 4 1 3 5 1 19 12 5 7 2v1l-10-1-12-5-1-21-1-3-6-1 3-10v-17l-5-8-4-3-6-2-1 4-6 9-9 11-2 5-5 3-5 2-4 5-2 5h-5l-9-7-10-10-5 1h-11v18l-5 5-5-2-5-3-5 1 2-3 4-1 7 5 4-2 1-19 1-1 19-1 13 13 5 3h2l3-6 5-5 7-2 3-6 9-10 6-9 1-3-8-3v-2l9 2v-3l-4 1 2-7h-5l-2-2v-7h-4v5l-2 4 3 4-4-1-5-7v-2l5 1 1-4-9 1v12h-3v-12h-3l-1 13-2-1v-5l-4-1v2l-4-2v-2h2v-5h-6v4l-6 1 6 2 1 4-3-1v-2l-4 1v2l5 2-4 1-4-3v-8l1-1h6v-2h-9v-1l21-1z" fill="#010106"></path>
                  <path transform="translate(57,605)" d="m0 0v3l-4 3-15 6-8 7-10 9-8 9 2 12-8 8h-2l1 7 2 3 9-3h3l-1 5-6 12 2 5 4 7-3 11-1 4h-7l5 10 18 1 2-6 2-3h10l8 6 6 8-4 20v20l2 12-6 10-1 6v14l7 8 10 7 8 4h13l1-5-7-6-3-1 2-4 9-9h2l13 25 2 2 9-1 2 6-1 8-2 6-1 10 16-2h8v1l-20 3h-6v-11l3-10v-9l-10 1-5-8-8-16-4-1-1 3h-2l-1 6 8 6 1 4-6 5h-11l-9-4-10-7-4-3v-2h-2l-3-5v-20l4-8 2-3-2-19 1-17 2-10v-7l-6-8-6-3h-6l-5 9h-20l-7-13v-2l8-1 3-12-6-10 2-6 4-8v-2l-7 3h-3l-4-9 1-4 9-8-1-6-1-7 9-10 8-7 8-8 8-4 11-4z" fill="#111009"></path>
                  <path transform="translate(768,305)" d="m0 0 1 3-5 9-2 2-9-1-8 7-11 14-11 12-8 6-11 5 9 20v2l-9 1-1 7 7 7v1l-17 1-2 5 1 4 5 5 16 1 8 7 2 2 3-24h12l3 2v6l-4 6-3 22-7 4h-2l1 7 2 4-5 5-5 4-1 6 1 5 4 2 5-1 19-7 4 1v1l-13 4-11 4h-5l-5-4-1-2v-9l5-5 4-3 1-4h-2l-1-6 5-5 4-2 3-21 5-8-1-3h-9l-2 16-1 10-14-12h-13l5 6 4 4 1 2v11l-15 2-3 1h-7l-5-5-9-14-1-4 3 3 8 12 5 6 8-1 9-2h5l-1-9-7-8-11-13 1-5 3-5 13-2-5-5 2-10h8l-9-20v-3l10-3 9-6 10-10 11-14 9-10 6-1 5 1 5-8z" fill="#010106"></path>
                  <path transform="translate(611,523)" d="m0 0h3l2 9-10 5 2 6 6 9 7 5 8 2-1 5-3 7v6l2 4v7l-3 3-4 3v11l7 8 4 7-1 9 8 1 7 4 8 8 1 6-1 7 4 10v2l9 3 12 5-1 4-8 9-10 7-13 7-8 7-5 1-15 1-8 8-5 4 1 5v7l-4 8-8 8h-2l2 9-7 2-5-1-10-7-7-2-10-1 1-5 4-5-10-6-1 9-4 3h-6l-12-7-7-4v-2l5 2 13 8h9l2-12 5 2 10 7-4 5-3 3 11 1 7 3 9 7 8-1-3-6v-2l8-6 4-5 2-4v-9l-1-4 15-14 15-1 7-2 7-7 15-8 7-6h2l2-4 3-4-13-6-6-3-6-14 1-9-4-6-10-7-10-1 1-12-11-14v-10l3-5 4-2-1-9-1-7 4-10-12-6-7-9-5-9v-2l11-5z" fill="#181718"></path>
                  <path transform="translate(90,374)" d="m0 0m-1 1m-2 1h2l-1 3-8 7-7 8-1 8 3 8 4-2 1-5h8l-1 9-4 5-9 4h-2l5 9v2l3-1v15l-4 6-8 7-10 7-13 13-6 3h-2l6 9 7 8 2 5 1 19 4 7 4 10 2 9v17l-6 7-2 16 3 5 1 1-1 8h-1l-1-8-3-3v-16l2-5 3-4h2v-20l-4-13-6-12-1-19-3-6-9-9-2-4 1-4 8-4 6-5 7-8 15-10 4-5 1-3v-10l-8-12 1-4 12-5 3-7-8 6h-3l-5-10v-7l5-8 9-9 1-2z" fill="#36332A"></path>
                  <path transform="translate(518,736)" d="m0 0 2 1-7 8-8 18-9 12-9 10-16 3-6 23-1 6 6 1 11 4 11 6 3 3v6l-9 12-12 13-7 8-6 5-5 1-4 9-4 6-12 14-10 9-13 10-13 8-3-1 12-7 13-10 12-11 9-9 8-12 3-9 9-2 8-8 7-8 12-15 3-5v-4l-4-2-15-7-12-4 1-10 5-19 1-30h2v26l16-3 11-13 6-10 7-16z" fill="#090805"></path>
                  <path transform="translate(859,405)" d="m0 0 4 2 11 13 8 6 4 1 5-6-1-10 8-3h2v2l-8 2 1 3v8l-5 6h-7l-12-11-6-7-2-3-4 2-8 7h-2l-2-4v-4l-8 3-2 18-3 10-8 18-2 12v5l-4-1-5-3h-2l-4 12-6-2-19-11-5 1-4 3h-17v-1l16-1 6-5 5 1 20 11 3 1 1-5 3-7 4 1 6 3v-9l5-14 6-14 2-9 2-16 8-3h3l2 6 4-2z" fill="#1C1B16"></path>

                </svg>
                {tooltip && (
                  <div
                    className="tooltip"
                    style={{
                      left: `${position.x + 10}px`,
                      top: `${position.y + 10}px`, color: "crimson", fontSize: "1.8rem"
                    }}
                  >
                    {tooltip}
                  </div>
                )}
              </div>
              <div className='map-dist'>
                <Card className="mapcard" style={{ width: "78%", height: "90%" }}>
                  {mapdist.map(({ id, name, history, about }) => {
                    return (
                      <>
                        {distic === id ? (
                          <>
                            <h2 className='title'>{name}</h2>
                            <p className='bio'>{history}</p>
                            <p></p>
                            <ol type='none' className='statcic'>
                              <li><strong>Area :</strong>{about.ar}</li>
                              <li><strong>Population :</strong>{about.pop}</li>
                              <li><strong>Language :</strong>{about.lan}</li>
                            </ol>

                            <Link to="/"><Button className='mapreadmore' type="primary" size="large"> Read More</Button></Link>

                          </>
                        ) : null}

                      </>
                    )
                  })}

                </Card>
              </div>

            </div>
          </div>
        </section>
        {/* endd map */}

        {/* festive */}
        <section className='festive'>
          <div className='container'>
            latter
          </div>
        </section>

        {/* trip */}
        <section className='trip'>
          <div className='container'>
            <div className='tripbg'><img src={img3} width={"100%"} /></div>
            <div className='trip-explore'>
              <div className='trip-messege'>
                <h2>Trips to Bundelkhand</h2>
                <h5>Plan your Customized Itinerary</h5>
                <p>Plan a perfect gateway with our trip planner.</p>
              </div>

              <div className='trip-plan'>
                <h2>Plan Your Trip</h2>
                <div className="row1">
                  <div className='box'>
                    <a href="#" target="_blank" rel="noopener" class="external none"><img src="#" alt="Hotal" title="Image of Hotal" /> Hotel Accommodation</a>
                  </div>
                  <div className='box'>
                    <a href="#" target="_blank" rel="noopener" class="external none"><img src="#" alt="Hotal" title="Image of Hotal" /> Hotel Accommodation</a>
                  </div>
                  <div className='box'>
                    <a href="#" target="_blank" rel="noopener" class="external none"><img src="#" alt="Hotal" title="Image of Hotal" /> Hotel Accommodation</a>
                  </div>
                </div>
                <div className="row1">
                  <div className='box'>
                    <a href="#" target="_blank" rel="noopener" class="external none"><img src="#" alt="Hotal" title="Image of Hotal" /> Hotel Accommodation</a>

                  </div>
                  <div className='box'>
                    <a href="#" target="_blank" rel="noopener" class="external none"><img src="#" alt="Hotal" title="Image of Hotal" /> Hotel Accommodation</a>

                  </div>
                  <div className='box'>
                    <a href="#" target="_blank" rel="noopener" class="external none"><img src="#" alt="Hotal" title="Image of Hotal" /> Hotel Accommodation</a>

                  </div>
                </div>

              </div>
            </div>
            <div className='tripbg2'><img src={img4} width={"100%"} /></div>

          </div>
        </section>

        {/* unfold */}
        <section className='unfold'>
          <div className='container'>
            <div class="title">
              <p>Dive In And Discover</p>
              <h2>Visual <b>Library</b></h2>
            </div>
            <div className='galary'>
              <Row>
                <Col xs={{ span: 20, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <Card className='content'
                    hoverable
                    style={{ width: 300, height: 150 }}
                    cover={<img alt="example" src={img6} style={{ height: '400px', width: '100%', objectFit: 'fill', borderRadius: '20px' }} />}
                  />

                  <div className='galarytitile'>
                    <a href="https://bundelkhand.in/info/tourist-guide-to-bundelkhand">
                      <h3 className='blog'>Blog</h3>
                    </a>
                  </div>

                </Col>
                <Col xs={{ span: 20, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <Card className='content'
                    hoverable
                    style={{ width: 300, height: 150 }}
                    cover={<img alt="example" src={img7} style={{ height: '400px', width: '100%', objectFit: 'fill', borderRadius: '20px' }} />}
                  />
                  <div className='galarytitile'>
                    <Link to="/galary">
                      <h3>Image galary</h3>
                    </Link>
                  </div>

                </Col>
                <Col xs={{ span: 20, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <a href="#">
                    <Card className='content'
                      hoverable
                      style={{ width: 300, height: 150 }}
                      cover={<img alt="example" src={img8} style={{ height: '400px', width: '100%', objectFit: 'fill', borderRadius: '20px' }} />}
                    /></a>
                  <div className='galarytitile'>
                    <h3>Video galary</h3>
                  </div>

                </Col>
              </Row>
            </div>
            <div className='unfoldfbg'><img src={img5} width={"100%"} /></div>
          </div>
        </section>

        {/* connect */}
        <section className='connect'>
          <div className='container'>
            <Row>
              <Col span={12}>
                <div className='socialmedia'>
                  <div className='title'>
                    <p>Together, we achieve extraordinary outcomes</p>
                    <h2>Connect & Engage</h2>
                  </div>
                  <div className='socialrow'>
                    <div className='face'><a href="https://www.facebook.com/groups/bundelkhand.india/"><div className='icon'><FacebookOutlined style={{ color: "#1877f2" }} /></div></a></div>
                    <div className='face'><a href="https://x.com/bundelkhand"><div className='icon'><XOutlined style={{ color: "#111" }} /></div></a></div>
                    <div className='face'><a href="https://www.instagram.com/incrediblebundelkhand?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><div className='icon'><InstagramOutlined style={{ color: "#c32aa3" }} /></div></a></div>
                  </div>

                  <div className='socialrow'>
                    <div className='face'><a href="https://www.youtube.com/user/a2zbundelkhandi"><div className='icon'><YoutubeOutlined style={{ color: "#ff0000" }} /></div></a></div>
                    <div className='face'></div>
                    <div className='face'></div>
                  </div>
                </div>

              </Col>

              <Col span={12} >
                <div className='connectmessege'>
                  {<img src={img9} style={{ height: '400px', width: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
                </div>
              </Col>
            </Row>
          </div>
        </section>




      </Layout>
    </>
  )
}

export default HomeConatiner
