import React from 'react'
import {motion} from "framer-motion"
import MediaQuery from 'react-responsive'

const Razrab = () => {
  var w = window.innerWidth
  return (
    <div className='razrab'>
      
        <img className='char' src="/ruk.png" />
        <div>
        <div className='zagl'>
          <motion.img 
              initial={{x: -100}}
              whileInView={{x: w - 870}}  
              transition={{duration: 1.3}}
              // animate={{opacity: 0}}
              src='/ma.png'
              alt='logo'
              className='image3'  
          />
          {/* <MediaQuery minWidth={1200} maxWidth={1535}>
            <motion.h2
            initial={{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{delay: 0.6}}
            className='about1_n'>Алгоритм<strong className='txcol'>.</strong>
            </motion.h2>
          </MediaQuery> 
          <MediaQuery  minWidth={1536} maxWidth={3840}>*/}
            <div > 
              <motion.h2 
              initial={{x: w / 2 - 420 }}
              whileInView={{opacity: 1, scale: 1}}
              transition={{delay: 0.6}}
              className='about1_c'>Алгоритм<strong className='txcol'>.</strong>
              </motion.h2>
            </div>

            </div>
            <div className='textraz'>
              <div className='textr'>
              Получая задание на перемещение, система навигации определяет свое начальное положение по локальным и глобальным меткам; делает расчет траектории движения; активирует запуск передвижения AGV по рассчитанной траектории; в процессе движения используя инерционные датчики и сверяя свое положение по локальным и глобальным меткам при необходимости, корректирует расчеты. Разрабатываемая система управления автономным мобильным транспортом основана на возможности задания расписания или запуска вручную через WEB интерфейс с любого устройства, имеющего доступ к сети
              </div>
            </div>
            </div>
        
          
    </div>
    
  )
}
export default Razrab