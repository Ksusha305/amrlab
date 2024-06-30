import React from 'react'
import {motion} from "framer-motion"
const Razrab = () => {
  return (
    <div className='razrab'>
      <motion.img 
            
            src='ma.png'
            alt='logo'
            className='image3'  
        />
        <img className='char' src="../public/ruk.png" />
        <h2 className='about1'>Алгоритм<strong className='txcol'>.</strong></h2>
        
    </div>
  )
}

export default Razrab