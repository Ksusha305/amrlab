import { motion, AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { 
  headContainerAnimation,
  slideAnimation  
 } from '../config/motion';
import Homep from '../components/Homep'; 
import { useRef } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Razrab from '../components/Razrab';
const Home = () => {
  const homeRef = useRef();
  const aboutRef =useRef();
  const contactRef = useRef();
  const razrabRef =useRef();
  const container = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.5 } }
  };
  $maxWidth: 1280;
  
  
  const child = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 }
  };  
 const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      <div animate="animate" initial="initial" className='header'>
      <motion.img
        animate={{ x: 1300}}
        transition={{ duration: 1.5 }}
        src='./ma.png' 
        alt='logo'
        className='image' 
      /> 
      <div class="social-icons">
        <a href="https://www.facebook.com/yourusername" target="_blank">
          <img className='icon' src="../public/face.svg" alt="Facebook Icon"/>
        </a>
        <a href="https://www.twitter.com/yourusername" target="_blank">
          <img src="../public/twitter.svg" alt="Twitter Icon"/>
        </a>
        <a href="https://www.instagram.com/yourusername" target="_blank">
          <img src="../public/in.svg" alt="Instagram Icon"/>
        </a> 
        </div>
      
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