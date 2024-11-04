import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import './heade.css'
const { Header } = Layout;
// const items = new Array(3).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

const items = [
{
   key:1,
   label:<Link to="/">Home</Link>
},
{
  key:2,
  label:<Link to="/galary" >galary</Link>
},
{
  key:3,
  label:"Desination"
},

{
  key:4,
  label:<Link to="/destination/chitrakoot" >Online Booking</Link>
},
{
  key:5,
  label:<Link to="/destination/chitrakoot" >Contact Us</Link>
},
];
const HeaderPage = () => {
  return (
    <>
   
        <Header className="header" >
        <div className="demo-logo" >Apna BundelKhand</div>
        <Menu
          className="navbar"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
        />
        <div className='Search-bar'>
        <input type="text" style={{ flex: 0  , left:0}} /><SearchOutlined />
        </div>
       
      </Header>

    </>
  )
}

export default HeaderPage
