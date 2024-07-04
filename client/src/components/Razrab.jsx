import React from 'react'
import {motion} from "framer-motion"
import MediaQuery from 'react-responsive'
// import MediaQuery from 'react-responsive'

const Razrab = () => {
  var w = window.innerWidth
  return (
    <div className='razrab'>
    <MediaQuery minWidth={300} maxWidth={1100}>
          <div>
          <div className='zagl'>
                <motion.h2 
                initial={{x: w / 2 - 420}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{delay: 0.6}}
                className='about1_t'>Алгоритм<strong className='txcol'>.</strong>
                </motion.h2>
            {/* <MediaQuery minWidth={1200} maxWidth={1535}>
              <motion.h2
              initial={{opacity: 0, scale: 0}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{delay: 0.6}}
              className='about1_n'>Алгоритм<strong className='txcol'>.</strong>
              </motion.h2>
<<<<<<< HEAD
            </MediaQuery> 
            <MediaQuery  minWidth={1536} maxWidth={3840}>*/}
            <motion.img 
                initial={{x: -200}}
                whileInView={{x: 100}}  
                transition={{duration: 1.3}}
                // animate={{opacity: 0}}
                src='/ma.png'
                alt='logo'
                className='image3_t'  
            />
              </div>
              <div className='textraz_t'>
                <div className='textr_t'>
                Получая задание на перемещение, система навигации определяет свое начальное положение по локальным и глобальным меткам; делает расчет траектории движения; активирует запуск передвижения AGV по рассчитанной траектории; в процессе движения используя инерционные датчики и сверяя свое положение по локальным и глобальным меткам при необходимости, корректирует расчеты. Разрабатываемая система управления автономным мобильным транспортом основана на возможности задания расписания или запуска вручную через WEB интерфейс с любого устройства, имеющего доступ к сети
                </div>
                <div className='char'>
                  <img src='/ruk.png'/>
                </div>
              </div>
=======
            </div>

            </div>
            <div className='textraz'>
              <div className='textr'>
              Получая задание на перемещение, система навигации определяет свое начальное положение по локальным и глобальным меткам; делает расчет траектории движения; активирует запуск передвижения AGV по рассчитанной траектории; в процессе движения, используя инерционные датчики и сверяя свое положение по локальным и глобальным меткам, при необходимости, корректирует расчеты. Разрабатываемая система управления автономным мобильным транспортом основана на возможности задания расписания или запуска вручную через WEB интерфейс с любого устройства, имеющего доступ к сети
>>>>>>> 6285f42d7c123956e5f97691c3875939d7cf2594
              </div>
          
            
      
    </MediaQuery>
    <MediaQuery minWidth={1200} maxWidth={3980}>
          <img className='char' src="/ruk.png" />
          <div>
          <div className='zagl'>
          <div> 
                <motion.h2 
                initial={{x: w / 2 - 420}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{delay: 0.6}}
                className='about1_c'>Алгоритм<strong className='txcol'>.</strong>
                </motion.h2>
              </div>
            {/* <MediaQuery minWidth={1200} maxWidth={1535}>
              <motion.h2
              initial={{opacity: 0, scale: 0}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{delay: 0.6}}
              className='about1_n'>Алгоритм<strong className='txcol'>.</strong>
              </motion.h2>
            </MediaQuery> 
            <MediaQuery  minWidth={1536} maxWidth={3840}>*/}
            <motion.img 
                initial={{x: -100}}
                whileInView={{x: w - 870}}  
                transition={{duration: 1.3}}
                // animate={{opacity: 0}}
                src='/ma.png'
                alt='logo'
                className='image3'  
            />
              </div>
              <div className='textraz'>
                <div className='textr'>
                Получая задание на перемещение, система навигации определяет свое начальное положение по локальным и глобальным меткам; делает расчет траектории движения; активирует запуск передвижения AGV по рассчитанной траектории; в процессе движения используя инерционные датчики и сверяя свое положение по локальным и глобальным меткам при необходимости, корректирует расчеты. Разрабатываемая система управления автономным мобильным транспортом основана на возможности задания расписания или запуска вручную через WEB интерфейс с любого устройства, имеющего доступ к сети
                </div>
              </div>
              </div>
          
            
    </MediaQuery>
    </div>
  )
}
export default Razrab