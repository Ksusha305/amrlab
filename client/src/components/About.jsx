import { AnimatePresence, useAnimate } from 'framer-motion'
import React from 'react'
import {motion} from 'framer-motion'
// async function myAnim(){
//   await animate(scope.current, {rotate: 90}, {delay: 1}, {duration: 0.8})
//   await animate(scope.current, {y: 310}, {duration: 1.5})
//   await animate(scope.current, {rotate:0}, {duration: 0.8})
//   await animate(scope.current, {opacity: 0}, {duration: 1})
// }
// const snap = useSnapshot(state);
//   useEffect(() => {
//     myAnim();
//   }, []);

const About = () => {

  return (
      <AnimatePresence>
        {/* <div className='lineabout'/>  */}
        
        <motion.div className='a'>
          <h2 className='about'>
            Обзор<strong className='txcol'>.</strong>
          </h2>
          
        </motion.div>
        <motion.p className='opicanie1'>AGV тележка-автоматически управляемое автономное мобильное транспортное средство. Данная тележка может иметь большой спектр задач и применений для разных областей производства, сельского хозяйства, бытовых нужд для автоматизирования производства и минимизирования издержек ручного труда.</motion.p>
        <div className='nab'>
          <motion.div 
             initial={{x: -200}}
             whileInView={{x: 0}}
             transition={{duration: 1}}
          className='example1'/>
          <motion.div 
          initial={{x: -700}}
          animate={{transitionDelay: 1}}
          whileInView={{x: 0}}
          transition={{duration: 1}}
          className='example2'>
            <img className="image2" src='../public/threejs.png'/>
            <h2 className='ub'>Робот уборщик</h2>
         </motion.div>
          <motion.div 
             initial={{x: 500}}
             animate={{transitionDelay: 1}}
             whileInView={{x: 0}}
             transition={{duration: 1}}
          className='example3'>
          </motion.div>
          <motion.div 
          initial={{x: -600}}
          // animate={{transitionDelay: 1}}
          whileInView={{x: 0}}
          transition={{duration: 1}}
          className='example4'/>
        </div>
        <motion.p className='opicanie1'>Данный проект решает проблемы автоматизации промышленных комплексов таких как: складские, сельскохозяйственные, производственные и многие другие. С помощью автоматических механизмов (роботов), а в частности AGV тележек, возможно, полностью заменить рабочий труд.
        </motion.p>
        {/* <motion.img 
            // \ref={scope}
            src='ma.png' 
            alt='logo'
            className='image1'  
            initial={{opacity: 0}}
            whileInView={{opacity: 1, rotate: 90}}
            animate={{y: 200}}
            transition={{delay: 2, duration: 1}}
        /> */}
        <div className='pl'>
          <div className='dxj'>
            <div className='lnaz'>название</div>
            <div className='lineabo'>
              <div className='columnleft'>
                <div className='textcolumn'>
                    <div className='treygleft'></div>
                    <div>
                      <div>
                        dd
                      </div>
                      <div>
                        ff
                      </div>
                    </div>
                  </div>
                </div>
                <div className='columnright'>
                <div className='textcolumn'>
                    <div className='treygright'></div>
                    <div>
                      <div>
                        eee
                      </div>
                      <div>
                        eee
                      </div>
                    </div>
                </div>
                </div>
                <div className='columnleft'>
                <div className='textcolumn'>
                    <div className='treygleft'></div>
                    <div>
                      <div>
                        dd
                      </div>
                      <div>
                        ff
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </AnimatePresence>
  )      
}

export default About