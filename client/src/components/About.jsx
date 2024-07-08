import { AnimatePresence, useAnimate } from 'framer-motion'
import React from "react";
import MediaQuery, { useMediaQuery } from 'react-responsive'
import {motion} from 'framer-motion'
// import MediaQuery from 'react-responsive'

// async function myAnim(){
//   await animate(scope.current, {rotate: 90}, {delay: 1}, {duration: 0.8})
//   await animate(scope.current, {y: 310}, {duration: 1.5})
//   await animate(scope.current, {rotate:0}, {duration: 0.8})
//   await animate(scope.current, {opacity: 0}, {duration: 1})
// }
// const snap = useSnapshot(state);
//   useEffect(() => {
//     myAnim();
//   }, []);

const About = () => {
      
  return (
      <AnimatePresence>
        <MediaQuery minWidth={300} maxWidth={1199}>
        <motion.div className='a'>
          <h2 className='about_m_t'>
            <p>Обзор</p><strong className='txcol'>.</strong>
          </h2>
        </motion.div>
        <motion.p className='opicanie1_t'>AGV тележка-автоматически управляемое автономное мобильное транспортное средство. Данная тележка может иметь большой спектр задач и применений для разных областей производства, сельского хозяйства, бытовых нужд для автоматизации производства и минимизирования издержек ручного труда.</motion.p>
        <div className='nab_t'>
          <div className='rob1'>
            <motion.div 
              initial={{x: -100}}
              whileInView={{x: 0}}
              transition={{duration: 1}}
            className='example1_t'>
              <img className="image2_t" src='/ybor.png'/>
              <h2 className='ub_t'>Робот уборщик</h2>
            </motion.div>
            <motion.div 
            initial={{x: -200}}
            animate={{transitionDelay: 1}}
            whileInView={{x: 0}}
            transition={{duration: 1}}
            className='example1_t'>
              <img className="image2_t" src='/trans.png'/>
              <h2 className='ub_t'>Робот транспортер</h2>
          </motion.div>
          </div>
          <div className='rob1'>
          <motion.div 
             initial={{x: 100}}
             animate={{transitionDelay: 1}}
             whileInView={{x: 0}}
             transition={{duration: 1}}
          className='example1_t'>
            <img className="image2_t" src='/kladd.png'/>
            <h2 className='ub_t'>Робот кладовщик</h2>
          </motion.div>
          <motion.div 
          initial={{x: -300}}
          // animate={{transitionDelay: 1}}
          whileInView={{x: 0}}
          transition={{duration: 1}}
          className='example1_t'>
            <img className="image2_t" src='/ma.png'/>
            <h2 className='ub_t'>Робот курьер</h2>  
          </motion.div>
          </div>
        </div>
        <motion.p className='opicanie1_t'>Данный проект решает проблемы автоматизации промышленных комплексов таких как: складские, сельскохозяйственные, производственные и многие другие. С помощью автоматических механизмов (роботов), а в частности AGV тележек, возможно, полностью заменить рабочий труд.
        </motion.p>
        <div className='pl_t'>
          <div className='dxj_t'>
            <motion.div className='a'>
            <h2 className='about_m_t'>
              Характеристика<strong className='txcol'>.</strong>
            </h2>
            </motion.div>
            <div className='lineabo_t'>
              <motion.div 
              className='columnleft_t1'
              >
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                
                className='textcolumnl_t'>
                  <div className='treygright_t'/>
                  <div>
                    <div className='ub1_t'>
                        -Привод: электрический
                    </div>
                      <div className='ub1_t'>
                        -Управление шасси: автономный контроллер
                      </div>
                      <div className='ub1_t'>
                        -Настройка: встроенный интерфейс
                      </div>
                      <div className='ub1_t'>
                        -Протокол связи: WI-Fi
                      </div>
                  </div>
                  </motion.div>
                </motion.div>
                <div className='columnleft_t2'>
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                className='textcolumnl_t'>
                    <div className='treygright_t'></div>
                    <div>
                      <h2 className='ub1_t'>
                        -Настройка движения: локальные метки 
                      </h2>
                      <h2 className='ub1_t'>
                        -Управление: автоматическое по датчикам
                      </h2>
                      <h2 className='ub1_t'>
                        -Безопасность: датчики, аварийная остановка
                      </h2>
                    </div>
                </motion.div>
                </div>
                <div className='columnleft_t3'>
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                className='textcolumnl_t'>
                    <div className='treygright_t'></div>
                    <div>
                      <h2 className='ub1_t'>
                        -Автономность: зависит от условий
                      </h2>
                      <h2 className='ub1_t'>
                          -Продолжительность работы: 8 часов
                      </h2>
                      <h2 className='ub1_t'>
                          -Время зарядки: не более 10 часов
                      </h2>
                    </div>
                  </motion.div>
                </div>
                </div>
              </div>
              </div>
              </MediaQuery>
        <MediaQuery minWidth={1200}>
        <motion.div className='a'>
          <h2 className='about_m'>
            <p>Обзор</p><strong className='txcol'>.</strong>
          </h2>
        </motion.div>
        <motion.p className='opicanie1'>AGV тележка-автоматически управляемое автономное мобильное транспортное средство. Данная тележка может иметь большой спектр задач и применений для разных областей производства, сельского хозяйства, бытовых нужд для автоматизации производства и минимизирования издержек ручного труда.</motion.p>
        <div className='nab'>
          <motion.div 
             initial={{x: -200}}
             whileInView={{x: 0}}
             transition={{duration: 1}}
          className='example1'>
            <img className="image2" src='/ybor.png'/>
            <h2 className='ub'>Робот уборщик</h2>
          </motion.div>
          <motion.div 
          initial={{x: -700}}
          animate={{transitionDelay: 1}}
          whileInView={{x: 0}}
          transition={{duration: 1}}
          className='example1'>
            <img className="image2" src='/trans.png'/>
            <h2 className='ub'>Робот транспортер</h2>
         </motion.div>
          <motion.div 
             initial={{x: 500}}
             animate={{transitionDelay: 1}}
             whileInView={{x: 0}}
             transition={{duration: 1}}
          className='example1'>
            <img className="image2" src='/kladd.png'/>
            <h2 className='ub'>Робот кладовщик</h2>
          </motion.div>
          <motion.div 
          initial={{x: -600}}
          // animate={{transitionDelay: 1}}
          whileInView={{x: 0}}
          transition={{duration: 1}}
          className='example1'>
            <img className="image2" src='/ma.png'/>
            <h2 className='ub'>Робот курьер</h2>  
          </motion.div>
        </div>
        <motion.p className='opicanie1'>Данный проект решает проблемы автоматизации промышленных комплексов таких как: складские, сельскохозяйственные, производственные и многие другие. С помощью автоматических механизмов (роботов), а в частности AGV тележек, возможно полностью заменить рабочий труд.
        </motion.p>
        <div className='pl'>
          <div className='dxj'>
            <motion.div className='a'>
            <h2 className='about'>
              Характеристика<strong className='txcol'>.</strong>
            </h2>
          
            </motion.div>
            <MediaQuery minWidth={1200} maxWidth={1750}>
            <div className='lineabo_n'>
            <MediaQuery minWidth={1200} maxWidth={1750} >
              <motion.div 
              className='columnleft_n'
              >
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                
                className='textcolumnl_n'>
                  <div className='treygleft1_n'/>
                    <div className='ub1_n'>
                        -Привод: электрический
                    </div>
                      <div className='ub1_n'>
                        -Управление шасси: автономный контроллер
                      </div>
                      <div className='ub1_n'>
                        -Настройка: встроенный интерфейс
                      </div>
                      <div className='ub1_n'>
                        -Протокол связи: WI-Fi
                      <div className='ub1'>
                        -Протокол связи: Wi-Fi
                      </div>
                      <div className='ub1_n'>
                        -Скорость: 10м/мин
                      </div>
                  </div>
                  </motion.div>
                </motion.div>
              </MediaQuery>
              <MediaQuery minWidth={1751} maxWidth={3890} >
              <motion.div 
              className='columnleft_c'
              >
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                
                className='textcolumnl_c'>
                  <div className='treygleft1_c'/>
                  <div>
                    <div className='ub1_c'>
                        -Привод: электрический
                    </div>
                      <div className='ub1_c'>
                        -Управление шасси: автономный контроллер
                      </div>
                      <div className='ub1_c'>
                        -Настройка: встроенный интерфейс
                      </div>
                      <div className='ub1_c'>
                        -Протокол связи: WI-Fi
                      </div>
                      <div className='ub1_c'>
                        -Скорость: 10м/мин
                      </div>
                  </div>
                  </motion.div>
                </motion.div>
              </MediaQuery>
              <MediaQuery minWidth={1200} maxWidth={1750}>
                <div className='columnright'>
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                className='textcolumnr_n'>
                    <div className='treygright_n'></div>
                    <div>
                      <h2 className='ub1_n'>
                        -Настройка движения: локальные метки 
                      </h2>
                      <h2 className='ub1_n'>
                        -Управление: автоматическое по датчикам
                      </h2>
                      <h2 className='ub1_n'>
                        -Безопасность: датчики, аварийная остановка
                      </h2>
                    </div>
                </motion.div>
                </div>
                </MediaQuery>
                <MediaQuery minWidth={1751} maxWidth={3890}>
                <div className='columnright'>
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                className='textcolumnr_c'>
                    <div className='treygright_c'></div>
                    <div>
                      <h2 className='ub1_c'>
                        -Настройка движения: локальные метки 
                      </h2>
                      <h2 className='ub1_c'>
                        -Управление: автоматическое по датчикам
                      </h2>
                      <h2 className='ub1_c'>
                        -Безопасность: датчики, аварийная остановка
                      </h2>
                      <h2 className='ub1_c'>
                        -Питание: 24В 100A/час (встр. аккумуляторы)
                      </h2>
                      <h2 className='ub1_c'>
                        -Система зарядки от сети: 220В, 50Гц
                      </h2>
                    </div>
                </motion.div>
                </div>
                </MediaQuery>
                <MediaQuery minWidth={1200} maxWidth={1750}>
                <div className='column3'>
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                className='textcolumnl_n'>
                    <div className='treygleft2_n'></div>
                    <div>
                      <h2 className='ub1_n'>
                        -Автономность: зависит от условий
                      </h2>
                      <h2 className='ub1_n'>
                          -Продолжительность работы: 8 часов
                      </h2>
                      <h2 className='ub1_n'>
                          -Время зарядки: не более 10 часов
                      </h2>
                    </div>
                  </motion.div>
                </div>
                </MediaQuery>
                <MediaQuery minWidth={1751} maxWidth={3890}>
                <div className='column3'>
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                className='textcolumn_с'>
                    <div className='treygleft2_c'></div>
                    <div>
                      <h2 className='ub1_c'>
                        -Автономность: зависит от условий
                      </h2>
                      <h2 className='ub1_c'>
                          -Продолжительность работы: 8 часов
                      </h2>
                      <h2 className='ub1_c'>
                          -Время зарядки: не более 10 часов
                      </h2>
                      <h2 className='ub1_c'>
                          -Габарит: не более 2500х1500х1500 мм
                      </h2>
                      <h2 className='ub1_c'>
                          -Режимы: ручной, автоматический 
                      </h2>
                      
                    </div>
                  </motion.div>
                </div>
                </MediaQuery>
              </div>
              </MediaQuery>
              <MediaQuery minWidth={1751} maxWidth={3980}>
            <div className='lineabo_n'>
            <MediaQuery minWidth={1200} maxWidth={1750} >
              <motion.div 
              className='columnleft_n'
              >
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                
                className='textcolumnl_n'>
                  <div className='treygleft1_n'/>
                  <div>
                    <div className='ub1_n'>
                        -Привод: электрический
                    </div>
                      <div className='ub1_n'>
                        -Управление шасси: автономный контроллер
                      </div>
                      <div className='ub1_n'>
                        -Настройка: встроенный интерфейс
                      </div>
                      <div className='ub1_n'>
                        -Протокол связи: WI-Fi
                      </div>
                      <div className='ub1_n'>
                        -Скорость: 10м/мин
                      </div>
                  </div>
                  </motion.div>
                </motion.div>
              </MediaQuery>
              <MediaQuery minWidth={1751} maxWidth={3890} >
              <motion.div 
              className='columnleft_c'
              >
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                
                className='textcolumnl_c'>
                  <div className='treygleft1_c'/>
                  <div>
                    <div className='ub1_c'>
                        -Привод: электрический
                    </div>
                      <div className='ub1_c'>
                        -Управление шасси: автономный контроллер
                      </div>
                      <div className='ub1_c'>
                        -Настройка: встроенный интерфейс
                      </div>
                      <div className='ub1_c'>
                        -Протокол связи: WI-Fi
                      </div>
                      <div className='ub1_c'>
                        -Скорость: 10м/мин
                      </div>
                  </div>
                  </motion.div>
                </motion.div>
              </MediaQuery>
              <MediaQuery minWidth={1200} maxWidth={1750}>
                <div className='columnright'>
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                className='textcolumnr_n'>
                    <div className='treygright_n'></div>
                    <div>
                      <h2 className='ub1_n'>
                        -Настройка движения: локальные метки 
                      </h2>
                      <h2 className='ub1_n'>
                        -Управление: автоматическое по датчикам
                      </h2>
                      <h2 className='ub1_n'>
                        -Безопасность: датчики, аварийная остановка
                      </h2>
                    </div>
                </motion.div>
                </div>
                </MediaQuery>
                <MediaQuery minWidth={1751} maxWidth={3890}>
                <div className='columnright'>
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                className='textcolumnr_c'>
                    <div className='treygright_c'></div>
                    <div>
                      <h2 className='ub1_c'>
                        -Настройка движения: локальные метки 
                      </h2>
                      <h2 className='ub1_c'>
                        -Управление: автоматическое по датчикам
                      </h2>
                      <h2 className='ub1_c'>
                        -Безопасность: датчики, аварийная остановка
                      </h2>
                      <h2 className='ub1_c'>
                        -Питание: 24В 100A/час (встр. аккумуляторы)
                      </h2>
                      <h2 className='ub1_c'>
                        -Система зарядки от сети: 220В, 50Гц
                      </h2>
                    </div>
                </motion.div>
                </div>
                </MediaQuery>
                <MediaQuery minWidth={1200} maxWidth={1750}>
                <div className='column3'>
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                className='textcolumnl_n'>
                    <div className='treygleft2_n'></div>
                    <div>
                      <h2 className='ub1_n'>
                        -Автономность: зависит от условий
                      </h2>
                      <h2 className='ub1_n'>
                          -Продолжительность работы: 8 часов
                      </h2>
                      <h2 className='ub1_n'>
                          -Время зарядки: не более 10 часов
                      </h2>
                    </div>
                  </motion.div>
                </div>
                </MediaQuery>
                <MediaQuery minWidth={1751} maxWidth={3890}>
                <div className='column3'>
                <motion.div 
                initial={{scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1 }}
                className='textcolumnl_c'>
                    <div className='treygleft2_c'></div>
                    <div>
                      <h2 className='ub1_c'>
                        -Автономность: зависит от условий
                      </h2>
                      <h2 className='ub1_c'>
                          -Продолжительность работы: 8 часов
                      </h2>
                      <h2 className='ub1_c'>
                          -Время зарядки: не более 10 часов
                      </h2>
                      <h2 className='ub1_c'>
                          -Габарит: не более 2500х1500х1500 мм
                      </h2>
                      <h2 className='ub1_c'>
                          -Режимы: ручной, автоматический 
                      </h2>
                      
                    </div>
                  </motion.div>
                </div>
                </MediaQuery>
              </div>
              </MediaQuery>
            </div>
          </div>
          </MediaQuery>
      </AnimatePresence>
  )      
}

export default About