import React from 'react'
import { CustomButton } from '../components';
import { 
  headContentAnimation,
  headTextAnimation,
 } from '../config/motion';
import { AnimatePresence, motion } from 'framer-motion';

const Homep = () => {
  return (
    <div className='homegl'> 
        <AnimatePresence>
            <motion.div {...headTextAnimation}>
                <h1 className='head-text'>
                    АМР <br className="xl: block hidden" />ЛАБ
                </h1>
            </motion.div>
            <motion.img
               animate={{ x: 1300}}
               transition={{ duration: 1.5 }}
                src="./bolt (1).png" 
                alt='logo'
                className='image'
            /> 
            <div className='opisan'>  
                <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                    <p className='opicanie'>
                        Очень крутые роботы АМР <strong className='txcol'>Супер крутые роботы
                        </strong>{' '} реально супер.
                    </p>
                    <div className='knopka'>
                        <CustomButton 
                            type='filled'
                            title='Узнать больше'
                            handleClick={() => state.intro = false}
                            customStyles=' px-4 py-2.5 font-bold text-sm'/>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>  
    </div>    
  )
  
}

export default Homep