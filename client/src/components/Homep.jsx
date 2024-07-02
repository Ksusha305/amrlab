import React from 'react'
import { CustomButton } from '../components';
import { 
    headContentAnimation,
    headTextAnimation,
   } from '../config/motion';
  import { AnimatePresence, motion} from 'framer-motion';
  import {useRef} from 'react'
  const Homep = () => {
    const aboutRef =useRef();
    return (
        
          <AnimatePresence>
            <div className='g'>
                
              <motion.div {...headTextAnimation}>
                  <h1 className='head-text'>
                      Лаборатория мобильных роботов 
                  </h1>
                  {/* <h1 className='head-text2'>AGV тележка</h1> */}
              </motion.div>
              <div className='opisk'>
                <div className='opisan'>  
                    <motion.div {...headContentAnimation} >
                        <p className='opicanie'>
                            АМРЛАБ тележка AGV с <strong className='txcol'>Комбинируемоей
                            </strong>{' '} системой навигации.
                        </p>
                    </motion.div>
                </div>
                <div className='fsh'>
                            <img src="/fsh.png" />
                </div>
              </div>  
              {/* <div className='opisan'>  
                  <motion.div {...headContentAnimation} >
                      {/* <p className='opicanie'>
                           АМРЛАБ тележка AGV с <strong className='txcol'>Комбинированной 
                          </strong>{' '} системой навигации.
                      </p> */}
                  {/* </motion.div
              </div> */} *
              <div className='fsh'>
                        <img src="/fsh.png" />
              </div>
              </div>

              <div className='imghead'>
                <div className='boltkr'>
                    <div className='kr'>
                        <img src='/kr.png' />
                    </div>
                    <div className='bolt'>
                        <img  src="/bolt.png" /> 
                    </div>
                </div>
                <div className='pr'>
                    <img src="/pr.png" />
                </div>
                <div className='zakr'>
                    <div className='zak'>
                        <img src='/zak.png' />
                    </div>
                    <div className='fkr'>
                        <img src='/fkr.png' />
                    </div>
                </div>
            </div>
          </AnimatePresence>  
    )
  
  }

  export default Homep;