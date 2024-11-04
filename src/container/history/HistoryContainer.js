import React from 'react'
import { Card } from 'antd';
import bundel from '../../assets/bundel.jpg'
import './historyContainer.css'
import Layout from '../../components/layout/Layout';
const HistoryContainer = () => {
  return (

    <>
<Layout>
<section className='About'>
        <div className='bundelculture'>
          <div className='bundelimg'>
            <img src={bundel} />
          </div>
          
          <div className='pagetitle'>
            <h2>About</h2>
          </div>

          <div className='breadcrump'>
            <div className='breadcrump-list'>
              <span>Home</span> | <span className='active'>About</span>
            </div>
          </div>

          <div className='bundelhistory'>
            <div className='container'>
              <Card className="historycard" style={{ width: "100%" }}>
                <h2 class="title"><strong> Bundelkhand’s Culture and Heritage</strong></h2>
                <div className='messege'>
                  <p style={{fontSize:"1.2rem",fontWeight:"500"}}>
                    The land of Bundelkhand spreads over Madhya Pradesh and Uttar Pradesh. This land carries a imperial chronicle. Be it heritage, art &amp; crafts, handloom or culture, it stands out for its uniqueness. Bundelkhand is known among discerning travelers for its colorful culture, rich history, beautiful landscapes and breathtaking architecture. Enriched with various Bundela and Chandela tourist attractions like UNESCO World <em>Heritage</em> Site- the temples of &nbsp;<em>Khajuraho,</em> the fort and temples of <strong>Orchha</strong>, Panna National Park etc. Bundelkhand is also home to various folk dances like Badhai, Rai, Saira, Alha, Jawara, Akhada, Shaitan, Dhimrai etc. Panna has a rich cultural base. The famous Bundela chief, Chhatrasal, had made Panna his capital. District Chhatarpur is named after him. Panna is known as ‘town of temples’. As a reverence to Saint Prabhunath, Chhtrasal constructed numerous temples, mostly attributed to Lord Shiva. It is said that there are as many as eleven-hundred ancient temples in the district. A famous place of tourist and religious attraction, Orchha, is situated in the district of Tikamgarh. It was the capital of Bundelas before the capital was moved to Tikamgarh.</p>
                    <p style={{fontSize:"1.2rem",fontWeight:"500"}}>
                    The land of Bundelkhand spreads over Madhya Pradesh and Uttar Pradesh. This land carries a imperial chronicle. Be it heritage, art &amp; crafts, handloom or culture, it stands out for its uniqueness. Bundelkhand is known among discerning travelers for its colorful culture, rich history, beautiful landscapes and breathtaking architecture.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
</Layout>

    </>
  )
}

export default HistoryContainer
