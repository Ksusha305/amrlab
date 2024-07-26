import { motion, AnimatePresence, useAnimate, useScroll} from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { useEffect } from 'react';
import Homep from '../components/Homep'; 
import { useRef } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Razrab from '../components/Razrab';
import Dop from '../components/Dop';
import AnimatedLetter from '../components/AnimatedLetter';
import MediaQuery from 'react-responsive'
// import Carousel from '../components/Carousel';

const Home = () => {
  const [scope, animate] = useAnimate();
  const homeRef = useRef();
  const aboutRef =useRef();
  const contactRef = useRef();
  const razrabRef =useRef();
  const dopRef = useRef();
//   const images = [
//     {
//         src: 'машина2.png',
//         alt: 'img1'
//     },
//     {
//         src: '/машина3.png',
//         alt: 'img2'
//     },
//     {
//         src: '/машина4.png',
//         alt: 'img3'
//     }
// ]
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
      <MediaQuery minWidth={300} maxWidth={1200}>
      <div animate="animate" initial="initial" className='header_t'>
        <h2 className='head_logo_text_t'>
          <AnimatedLetter text="АМР ЛАБ" />
        </h2>
        <motion.img 
            //ref={scope}
            src='/ma.png' 
            alt='logo'
            className='image_t'  
        />
      </div>
      {/* <Carousel images={images}/> */}
      <div className='header2_t'>
      <div  className='dd_t'>
        <div className='fonhead_t'>
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
        <div  className='dd_t'>
          <div className='fonhead_t'>
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
        <div  className='dd_t'>
          <div className='fonhead_t'>
            <div className="link" onClick={() => {
              razrabRef.current?.scrollIntoView({
                behavior: "smooth"
              })
            }}>
              Алгоритм
            </div>
            <div className='linehead'>
                <br></br>
            </div>  
          </div>
        </div>    
        <div  className='dd_t'>
          <div className='fonhead_t'>
            <div className="link" onClick={() => {
              contactRef.current?.scrollIntoView({
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
        <div  className='dd_t'>
          <div className='fonhead_t'>
            <div className="link" onClick={() => {
              dopRef.current?.scrollIntoView({
                behavior: "smooth"
              })
            }}>
              Для соискателей
            </div>
            <div className='linehead'>
                <br></br>
            </div>  
          </div>
        </div>
      </div> 
      {snap.intro && (
        <section className='home' >
          <div className='home_content1_t' id='home_content1' ref={homeRef} >
            <Homep></Homep>
          </div>
        </section>
        
      )}
      <div className='section_t'  id='about' ref={aboutRef}>
        <About></About>             
      </div>
      <div  id='razrab' ref={razrabRef}>
        <Razrab></Razrab>                
      </div> 
      <div className='section_t' id='dop' ref={dopRef}>
        <Dop></Dop>
        </div>
      <div className='section_t'  id='contact' ref={contactRef}>
        <Contact></Contact>                
      </div>
      </MediaQuery>
      <MediaQuery minWidth={1200}>
      <div animate="animate" initial="initial" className='header'>
        <h2 className='head_logo_text'>
          <AnimatedLetter text="АМР ЛАБ" />
        </h2>
        <motion.img 
            //ref={scope}
            src='/ma.png' 
            // initial={{y: 0}}
            // whileInView={{delay: 2, y: 300}}
            // transition={{delay:1, duration: 1}}
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
              Алгоритм
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
              dopRef.current?.scrollIntoView({
                behavior: "smooth"
              })
            }}>
              Для соискателей
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
      <div  id='razrab' ref={razrabRef}>
        <Razrab></Razrab>                
        </div> 
      <div className='section' id='dop' ref={dopRef}>
        <Dop></Dop>
        </div>
      <div className='section'  id='contact' ref={contactRef}>
        <Contact></Contact>                
      </div>
      </MediaQuery>
    </AnimatePresence>
    
  )
}

export default Home