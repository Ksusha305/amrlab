import { motion, AnimatePresence, useAnimate, easeOut} from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { useEffect } from 'react';
import { 
  headContainerAnimation,
  slideAnimation,  
  transition
 } from '../config/motion';
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
    await animate(scope.current, {duration: 1})
    await animate(scope.current, { rotate: 90}, {duration:  0.3})
    await animate(scope.current, { y: 280}, {duration: 1})
    await animate(scope.current, { rotate: 0}, {duration:  0.3})
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
      </div>
        <motion.img 
           ref={scope}
           initial= "hidden"
            src='ma.png' 
            alt='logo'
            className='image'
            
        />
      {/* <div className='header2'>
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
              О нас
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
              Разработки
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
              Контакты
            </div>
            <div className='linehead'>
                <br></br>
            </div>  
          </div>
        </div>
      </div> */}
      {/* <div class="social-icons">
        <a href="https://www.facebook.com/yourusername" target="_blank">
          <img className='icon' src="../public/face.svg" alt="Facebook Icon"/>
        </a>
        <a href="https://www.twitter.com/yourusername" target="_blank">
          <img src="../public/twitter.svg" alt="Twitter Icon"/>
        </a>
        <a href="https://www.instagram.com/yourusername" target="_blank">
          <img src="../public/in.svg" alt="Instagram Icon"/>
        </a> 
        <a href="https://www.instagram.com/yourusername" target="_blank">
          <img src="../public/11.svg" alt="Instagram Icon"/>
        </a> 
        </div> */}
      
    {/* </div>  закрывание прошлого верхнего, щас другой и другое закрытие*/}
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