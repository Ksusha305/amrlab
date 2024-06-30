import React from 'react'
import {motion} from "framer-motion"
const Razrab = () => {
  return (
    <div className='razrab'>
      
        <img className='char' src="../public/ruk.png" />
        
        <motion.img 
            initial={{x: -100}}
            whileInView={{x: 1500}}  
            transition={{duration: 1.3}}
            // animate={{opacity: 0}}
            src='ma.png'
            alt='logo'
            className='image3'  
        />
        
        <motion.h2 
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{delay: 0.6}}
        className='about1'>Алгоритм<strong className='txcol'>.</strong>
        </motion.h2>
        <div className="alg"><h2 className='opicanie5'>Получая задание на перемещение, система навигации определяет свое начальное положение по локальным и глобальным меткам; делает расчет траектории движения; активирует запуск передвижения AGV по рассчитанной траектории; в процессе движения используя инерционные датчики и сверяя свое положение по локальным и глобальным меткам при необходимости, корректирует расчеты. 
Разрабатываемая система управления автономным мобильным транспортом основана на возможности задания расписания или запуска вручную через WEB интерфейс с любого устройства, имеющего доступ к сети (смартфон, планшет, ноутбук, персональный компьютер).
</h2></div>
        
    </div>
  )
}
export default Razrab