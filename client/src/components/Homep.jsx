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
              <div className='fsh'>
                        <img src="../public/fsh.png" />
              </div>
              </div>

              <div className='imghead'>
                <div className='boltkr'>
                    <div className='kr'>
                        <img src='../public/kr.png' />
                    </div>
                    <div className='bolt'>
                        <img  src="../public/bolt.png" /> 
                    </div>
                </div>
                <div className='pr'>
                    <img src="../public/pr.png" />
                </div>
                <div className='zakr'>
                    <div className='zak'>
                        <img src='../public/zak.png' />
                    </div>
                    <div className='fkr'>
                        <img src='../public/fkr.png' />
                    </div>
                </div>
            </div>
          </AnimatePresence>  
    )
  
  }

  export default Homep;