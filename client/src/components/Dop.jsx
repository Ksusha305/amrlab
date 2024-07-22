import { motion, AnimatePresence, useAnimate, useScroll} from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { useEffect } from 'react';
import Homep from '../components/Homep'; 
import { useRef } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Razrab from '../components/Razrab';
// import Dop from '../components/Dop';
import AnimatedLetter from '../components/AnimatedLetter';
import MediaQuery from 'react-responsive'

const Dop = () => {
    return (
        <h1 className='head-text'>
                        Для соискателей 
                    </h1>
    )
}
export default Dop