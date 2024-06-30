import React from 'react'
import { CustomButton } from '../components';
import { 
  headContentAnimation,
  headTextAnimation,
 } from '../config/motion';
import { AnimatePresence, motion} from 'framer-motion';

const Homep = () => {
  return (
        <AnimatePresence>
            <div className='g'>
            <motion.div {...headTextAnimation}>
                <h1 className='head-text'>
                    Лаборатория мобильных роботов 
                </h1>
                <h1 className='head-text2'>AGV тележка</h1>
            </motion.div>
            <div className='opisan'>  
                <motion.div {...headContentAnimation} >
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
            </div>
            <div className='n'>
                <img  src="../public/k.svg" /> 
            </div>
        </AnimatePresence>  
  )
  
}

export default Homep