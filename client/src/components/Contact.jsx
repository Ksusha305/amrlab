import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactoz'><h1 className='head-textcon'>Контакты<h3>.</h3></h1></div>  
      <div className='foter'>
        <div className='cont1'>
          <div className='cont'>Контакты:</div>
          <b className='cont'>E-mail: bocha083@mail.ru</b>
          <b className='cont'>Тел: +7 (911) 858 95 63 </b>
        </div>  
        <div className='carta'> 
        <div className='carta_1'><a href="https://yandex.ru/maps/org/nauchno_tekhnologicheskiy_park_fabrika_bfu_im_i_kanta/1675479267/?utm_medium=mapframe&utm_source=maps" className='carta_2'>Научно-технологический парк фабрика БФУ им. и. Канта</a><a href="https://yandex.ru/maps/22/kaliningrad/category/research_institute/184106192/?utm_medium=mapframe&utm_source=maps" className='carta_3'>НИИ в Калининграде</a><a href="https://yandex.ru/maps/22/kaliningrad/category/university/184106140/?utm_medium=mapframe&utm_source=maps" className='carta_4'>ВУЗ в Калининграде</a><iframe src="https://yandex.ru/map-widget/v1/?ll=20.488580%2C54.734391&mode=poi&poi%5Bpoint%5D=20.491520%2C54.736289&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1675479267&z=15.95" width="560" height="250" frameborder="1" allowfullscreen="true" border-radius= "50%" className='carta_5'></iframe></div>
          <div className='contcarta'>
            <div className='cont' >ИНН 3900016545, КПП 390001001</div>
            <div className='cont'>ОГРН 1233900011344</div>
          </div>
      </div>
      </div>
    </div>

  )
}

export default Contact