import React from 'react'
import { CustomButton } from '../components';
import { 
    headContentAnimation,
    headTextAnimation,
   } from '../config/motion';
  import { AnimatePresence, motion} from 'framer-motion';
  import {useRef} from 'react'
  import MediaQuery from 'react-responsive'
  import { Carousel } from "flowbite-react";
  const Homep = () => {
    const aboutRef =useRef();
    return (
          <AnimatePresence>
            <MediaQuery minWidth={300} maxWidth={1200}>
            <div className='g_t'>
                <motion.div {...headTextAnimation}>
                    <h1 className='head-text_t'>
                        Лаборатория мобильных роботов 
                    </h1>
                </motion.div>
                <div className='mach_t'>
              <div className="h-36 sm:h-36 xl:h-36 2xl:h-96">
                <Carousel>
                    <img className='mach1t' src="/1111111.png" alt="..." />
                    <img className='mach1t' src="/2222222.png" alt="..." />
                    <img className='mach1t' src="/3333333.png" alt="..."/>
                    <img className='mach1t' src='/4444444.png' alt="..."/>
                    <img className='mach1t' src='/5555.png' alt="..."/>
                </Carousel>
                </div>
                </div>
                <div className='fsh_t'>
                          <img src="/fsh.png" />
                </div>
                </div>
                <div className='imghead_t'>
                  <div className='boltkr'>
                      <div className='kr_t'>
                          <img src='/kr.png' />
                      </div>
                      <div className='bolt_t'>
                          <img  src="/bolt1.png" /> 
                      </div>
                  </div>
                  <div className='pr_t'>
                      <img src="/pr.png" />
                  </div>
                  <div className='zakr'>
                      <div className='zak_t'>
                          <img src='/zak.png' />
                      </div>
                      <div className='fkr_t'>
                          <img src='/fkr.png' />
                      </div>
                        <div className='palcol'>
                        <div className='pal'>
                            <img src="/pal.png" />
                        </div>
                        <div className='col'>
                            <img src='/col.png' />
                        </div>
                    </div>
                  </div>
                  </div>
            </MediaQuery>
            <MediaQuery minWidth={1200} maxWidth={1800}>

            <div className='g'>
                
              <motion.div {...headTextAnimation}>
                  <h1 className='head-text_n'>
                      Лаборатория мобильных роботов 
                  </h1>
              </motion.div>
              <div className='mach_n'>
              <div className="h-36 sm:h-36 xl:h-36 2xl:h-96">
                <Carousel>
                    <img className='mach1' src="/1111111.png" alt="..." />
                    <img className='mach1' src="/2222222.png" alt="..." />
                    <img className='mach1' src="/3333333.png" alt="..."/>
                    <img className='mach1' src='/4444444.png' alt="..."/>
                    <img className='mach1' src='/5555.png' alt="..."/>
                </Carousel>
                </div>
                </div>
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
                        <img  src="/bolt1.png" /> 
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
            </MediaQuery>
            <MediaQuery minWidth={1801} maxWidth={3980}>

                <div className='g'>
                    
                <motion.div {...headTextAnimation}>
                    <h1 className='head-text'>
                        Лаборатория мобильных роботов 
                    </h1>
                </motion.div>
                <div className='mach'>
                <div className="h-42 sm:h-36 xl:h-36 2xl:h-96">
                    <Carousel>
                        <img className='mach1' src="/1111111.png" alt="..." />
                        <img className='mach1' src="/2222222.png" alt="..." />
                        <img className='mach1' src="/3333333.png" alt="..."/>
                        <img className='mach1' src='/.png' alt="..."/>
                        <img className='mach1' src='/5555.png' alt="..."/>
                    </Carousel>
                    </div>
                    </div>
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
                            <img  src="/bolt1.png" /> 
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
                </MediaQuery>
          </AnimatePresence>  
            
    )
  
  }

  export default Homep;