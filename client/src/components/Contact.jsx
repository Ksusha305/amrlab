import { AnimatePresence, useAnimate } from 'framer-motion'
import React from 'react'
import {motion} from 'framer-motion'
import MediaQuery from 'react-responsive'
const Contact = () => {
  return (
    <AnimatePresence>
      <MediaQuery minWidth={300} maxWidth={1100}>
        <div className='contact'>
        <motion.div className='a'>
              <h2 className='about_t'>
                Команда проекта<strong className='txcol'>.</strong>
                </h2>
            </motion.div> 
            
            <div className='komandcolumn_t'>
              <div className='komandcol_t'>
              <div className='komcol_t'>
                  <b className="imya_t">Бочарников Александр Сергеевич</b>
                  <div className='ava_t'><img className='ava_kar1_t' src='/ma.jpeg' /></div>
                  <div>
                    <div className='opis_t'>Руководство проектом</div>
                    <b className='prof_t'><strong className='txcol'>"</strong>Директор<strong className='txcol'>"</strong></b>
                </div>
                </div>
              <div className='komcol_t'>
              <b className="imya_t">Рахимбердин Ян Рашидович</b>
                  <div className='ava_t'><img className='ava_kar1_t' src='/ma.jpeg' /></div>
                    <div>
                      <div className='opis_t'>Разработка программного обеспечения и пользовательского интерфейса</div>
                      <b className='prof_t'><strong className='txcol_t'>"</strong>Разработчик ПО<strong className='txcol'>"</strong></b>
                    </div>
                </div>
              <div className='komcol_t'>
              <b className="imya_t">Цаунит Антон Николаевич</b>
                  <div className='ava_t'><img className='ava_kar1_t' src='/ma.jpeg' /></div>
                  <div>
                    <div className='opis_t'>Разработка системы управления электропривода передвижения тележки</div>
                    <b className='prof_t'><strong className='txcol'>"</strong>Инженер АСУТП<strong className='txcol'>"</strong></b>
                  </div>
                </div>
              </div>
            </div>
            <motion.div className='a'>
              <h2 className='about_t'>
                Финансовая поддержка<strong className='txcol'>.</strong>
                </h2>
            </motion.div>
          <div className='podd_t'>
            <div  className='pod'>
            <div className='finn_t'>
                <div className='textc_t'>
                <b className='pod1_t'>
                  Компания поддержана институтами развития<strong className='txcol'>:</strong>
                </b>
                <div className='bid'>
                  <div className='ioi_t'>
                      <b className='pod2_t'>
                      <strong className='txcol'>"</strong>ФОНД СОДЕЙСТВИЯ ИННОВАЦИЯМ<strong className='txcol'>"</strong>
                      </b>
                    
                  <div className='pod4'>
                    2023 - 2024 годы
                  </div>
                  </div>
                  <div className='pod3_t'>1 000 000₽</div>
                  </div>

                <div className='bid'>
                  <b className='pod2_t'>
                      <strong className='txcol'>"</strong>Конкурс 'Студенческий старатап' <strong className='txcol'>"</strong>
                  </b>
                  <div className='pod3_t'>
                        1 000 000₽
                  </div>
                </div>
                </div>
                </div>
            </div>
            <div className='fo'>
              <div className='fond'>
                <img src='/fon.png' />
              </div>
              <div className='font'>
                Проект реализован при содействии
              </div>
            </div>
          </div>  
          <div className='cont_t'>
              <div>ООО «АМР Лаб»</div>
              <div>ИНН 3900016545, КПП 390001001</div>
              <div>ОГРН 1233900011344</div>
            </div>
            <div className='cont_t'>
              <div>E-mail: bocha083@mail.ru</div>
              <div>Тел: +7 (911) 858 95 63 </div>
              <div>236029 г. Калининград, ул Горького, дом 69, офис 4</div>
            </div>  
          {/* <div className='contactoz'><h1 className='head-textcon'>Контакты<h3>.</h3></h1></div>  
          <div className='foter'>
            <div className='cont1'>
              <div>
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
          </div> */}  
          </div>
          </MediaQuery>
          <MediaQuery minWidth={1200} maxWidth={3980}>
        <div className='contact'>
        <motion.div className='a'>
              <h2 className='about'>
                Команда проекта<strong className='txcol'>.</strong>
                </h2>
            </motion.div> 
            
            <div className='komandcolumn'>
              <div className='komandcol'>
              <div className='komcol'>
                <MediaQuery minWidth={1200} maxWidth={1800}>
                  <b className="imya_n">Бочарников Александр Сергеевич</b>
                </MediaQuery>
                <MediaQuery minWidth={1800} maxWidth={3980}>
                  <b className="imya">Бочарников Александр Сергеевич</b>
                </MediaQuery>
                  <div className='ava'><img className='ava_kar1' src='/ma.jpeg' /></div>
                  <div>
                    <div className='opis'>Руководство проектом</div>
                    <b className='prof'><strong className='txcol'>"</strong>Директор<strong className='txcol'>"</strong></b>
                </div>
                </div>
              <div className='komcol'>
              <b className="imya">Рахимбердин Ян Рашидович</b>
                  <div className='ava'><img className='ava_kar1' src='/ma.jpeg' /></div>
                    <div>
                      <div className='opis'>Разработка программного обеспечения и пользовательского интерфейса</div>
                      <b className='prof'><strong className='txcol'>"</strong>Разработчик ПО<strong className='txcol'>"</strong></b>
                    </div>
                </div>
              <div className='komcol'>
              <b className="imya">Цаунит Антон Николаевич</b>
                  <div className='ava'><img className='ava_kar1' src='/ma.jpeg' /></div>
                  <div>
                    <div className='opis'>Разработка системы управления электропривода передвижения тележки</div>
                    <b className='prof'><strong className='txcol'>"</strong>Инженер АСУТП<strong className='txcol'>"</strong></b>
                  </div>
                </div>
              </div>
            </div>
            <motion.div className='a'>
              <h2 className='about'>
                Финансовая поддержка<strong className='txcol'>.</strong>
                </h2>
            </motion.div>
          <div className='podd'>
            <div  className='pod'>
            <div className='finn'>
                <div className='textc'>
                <b className='pod1'>
                  Компания поддержана институтами развития<strong className='txcol'>:</strong>
                </b>
                <div className='bid'>
                  <div className='ioi'>
                      <b className='pod2'>
                      <strong className='txcol'>"</strong>ФОНД СОДЕЙСТВИЯ ИННОВАЦИЯМ<strong className='txcol'>"</strong>
                      </b>
                    
                  <div className='pod4'>
                    2023 - 2024 годы
                  </div>
                  </div>
                  <div className='pod3'>1 000 000₽</div>
                  </div>

                <div className='bid'>
                  <b className='pod2'>
                      <strong className='txcol'>"</strong>Конкурс 'Студенческий старатап' <strong className='txcol'>"</strong>
                  </b>
                  <div className='pod3'>
                        1 000 000₽
                  </div>
                </div>
                </div>
                </div>
            </div>
            <div className='fo'>
              <div className='fond'>
                <img src='/fon.png' />
              </div>
              <div className='font'>
                Проект реализован при содействии
              </div>
            </div>
          </div>  
          <div className='cont'>
            <div>ООО «АМР Лаб»</div>
            <div>ИНН 3900016545, КПП 390001001</div>
            <div>ОГРН 1233900011344</div>
            <div>E-mail: bocha083@mail.ru</div>
            <div>Тел: +7 (911) 858 95 63 </div>
            <div>236029 г. Калининград, ул Горького, дом 69, офис 4</div>
          </div>
          {/* <div className='contactoz'><h1 className='head-textcon'>Контакты<h3>.</h3></h1></div>  
          <div className='foter'>
            <div className='cont1'>
              <div>
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
=======
          <h2 className='about'>
            Финансовая поддержка<strong className='txcol'>.</strong>
            </h2>
        </motion.div>
        <div className='textc'>
         <b className='pod1'>
          Компания поддержана институтами развития<strong className='txcol'>:</strong>
         </b>
         <div className='bid'>
            <b className='pod2'>
            <strong className='txcol'>"</strong>ФОНД СОДЕЙСТВИЯ ИННОВАЦИЯМ<strong className='txcol'>"</strong>
            </b>
            <div className='pod3'>
              1 000 000₽
            </div>
          </div>
        <div className='bid'>
          <b className='pod2'>
              <strong className='txcol'>"</strong>Конкурс 'Студенческий стартап' <strong className='txcol'>"</strong>
          </b>
          <div className='pod3'>
                1 000 000₽
>>>>>>> 6285f42d7c123956e5f97691c3875939d7cf2594
          </div>
          </div>
          </div> */}
          </div>
        </MediaQuery>
        </AnimatePresence>
  )
}

export default Contact