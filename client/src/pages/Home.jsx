import { motion, AnimatePresence, useAnimate, useScroll} from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { useEffect } from 'react';
import Homep from '../components/Homep'; 
import { useRef } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Razrab from '../components/Razrab';
import AnimatedLetter from '../components/AnimatedLetter';

const Home = () => {
  const [scope, animate] = useAnimate();
  const homeRef = useRef();
  const aboutRef =useRef();
  const contactRef = useRef();
  const razrabRef =useRef();
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  async function myAnim(){
    await animate(scope.current, {rotate: 90}, {delay: 1}, {duration: 0.8})
    await animate(scope.current, {y: 310}, {duration: 1.5})
    await animate(scope.current, {rotate:0}, {duration: 0.8})
    await animate(scope.current, {opacity: 0}, {duration: 1})
  }
 const snap = useSnapshot(state);
  useEffect(() => {
    myAnim();
  }, []);

  return (
    <AnimatePresence>
      <div animate="animate" initial="initial" className='header'>
        <h2 className='head_logo_text'>
          <AnimatedLetter text="АМР ЛАБ" />
        </h2>
        <motion.img 
            //ref={scope}
            src='ma.png' 
            alt='logo'
            className='image'  
        />
      </div>
      <div className='header2'>
      <div  className='dd'>
        <div className='fonhead'>
          <div className="link" onClick={() => {
            homeRef.current?.scrollIntoView({
              behavior: "smooth"
            })
          }}>
            Главная
            </div>
              <div className='linehead'>
                <br></br>
              </div>  
          </div>
        </div>
        <div  className='dd'>
          <div className='fonhead'>
            <div className="link" onClick={() => {
              aboutRef.current?.scrollIntoView({
                behavior: "smooth"
              })
            }}>
              О проекте
            </div> 
            <div className='linehead'>
                <br></br>
            </div>   
          </div>
        </div>
        <div  className='dd'>
          <div className='fonhead'>
            <div className="link" onClick={() => {
              razrabRef.current?.scrollIntoView({
                behavior: "smooth"
              })
            }}>
              Команда
            </div>
            <div className='linehead'>
                <br></br>
            </div>  
          </div>
        </div>    
        <div  className='dd'>
          <div className='fonhead'>
            <div className="link" onClick={() => {
              contactRef.current?.scrollIntoView({
                behavior: "smooth"
              })
            }}>
              Другие разработки
            </div>
            <div className='linehead'>
                <br></br>
            </div>  
          </div>
        </div>
      </div> 
      {snap.intro && (
        <section className='home' >
          <div className='home_content1' id='home_content1' ref={homeRef} >
            <Homep></Homep>
          </div>
        </section>
        
      )}
      <div className='section'  id='about' ref={aboutRef}>
        <About></About>             
      </div>
      <div className='section'  id='razrab' ref={razrabRef}>
        <Razrab></Razrab>                
      </div> 
      <div className='section'  id='contact' ref={contactRef}>
        <Contact></Contact>                
      </div>
    </AnimatePresence>
    
  )
}

export default Home