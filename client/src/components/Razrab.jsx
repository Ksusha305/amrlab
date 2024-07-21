import React from 'react'
import {motion} from "framer-motion"
import MediaQuery from 'react-responsive'

const Razrab = () => {
  var w = window.innerWidth
  return (
    <div id='razrab'>
      <MediaQuery minWidth={300} maxWidth={1100}>
      <div className='razrab_t'>
        <div>
          <div className='zagl_t'>
            <div className='p_t'>
            <motion.h2
              className='about1_t'>Алгоритм<strong className='txcol'>.</strong>
            </motion.h2>
            <motion.img
              initial={{ x: -300}}
              whileInView={{ x: w - 350}}
              transition={{ duration: 1.3 }}
              //animate={{opacity: 0}}
              src='/ma.png'
              alt='logo'
              className='image3_t' />
            </div>
            </div>
          <div className='textraz_t'>
            <div className='textr_t'>
              Получая задание на перемещение, система навигации определяет свое начальное положение по локальным и глобальным меткам; делает расчет траектории движения; активирует запуск передвижения AGV по рассчитанной траектории; в процессе движения используя инерционные датчики и сверяя свое положение по локальным и глобальным меткам при необходимости, корректирует расчеты. Разрабатываемая система управления автономным мобильным транспортом основана на возможности задания расписания или запуска вручную через WEB интерфейс с любого устройства, имеющего доступ к сети
            </div>
          </div>
          </div>
          </div>
      </MediaQuery>
      <MediaQuery minWidth={1200} maxWidth={3980}>
        <div className='razrab'>
        <div>
          <div className='zagl'>
            <div>
              <motion.h2
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
      </MediaQuery>
    </div>
  )
}
export default Razrab