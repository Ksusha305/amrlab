import { useNavigate } from "react-router-dom";
import Sois from "./Sois";
import CustomButton from "./CustomButton";
import {Link, Routes,Route, useMatch } from 'react-router-dom';
import { Button } from "flowbite-react";
import MediaQuery from 'react-responsive'
const Dop = () => {
    return (
        <div>
        <MediaQuery minWidth={300} maxWidth={1199}>
        <div>
            <h2 className='head-textsois_t'>
                            Для соискателей 
                        </h2>
            <div className="link"><a className='asa_t' href="/sois">Узнать больше</a></div> 
        </div>
        </MediaQuery>
        <MediaQuery minWidth={1200} maxWidth={3980}>
        <div>
            <h2 className='head-textsois'>
                            Для соискателей 
                        </h2>
            <div className="link"><a className='asa' href="/sois">Узнать больше</a></div> 
        </div>
        </MediaQuery>
        </div>
    )
}
export default Dop
// import { motion, AnimatePresence, useAnimate, useScroll} from 'framer-motion';
// import { useSnapshot } from 'valtio';
// import state from '../store';
// import { useEffect } from 'react';
// import Homep from '../components/Homep'; 
// import { useRef } from 'react';
// import About from '../components/About';
// import Contact from '../components/Contact';
// import Razrab from '../components/Razrab';
// // import Dop from '../components/Dop';
// import AnimatedLetter from '../components/AnimatedLetter';
// import MediaQuery from 'react-responsive'

// const Dop = () => {
//     return (
//         <div id='Dop'>
//         <motion.div className='a'>
//         <h2 className='about_c'>
//           Ищем соискателей<strong className='txcol'>.</strong>
//           </h2>
//       </motion.div> 
//       <div className='dop1'>
//         <b className='dopamr'>
//             ООО "АМР ЛАБ" (ЛАБОРАТОРИЯ МОБИЛЬНЫХ РОБОТОВ)
//         </b>
//       </div>
//       <div className='dop2'>
//         <div className='dop'>
//            <b className='dopamr2'>Деятельность</b>
//            <div className='doptext'>*ВВЕДЕТСЯ ПРИ ПОДЕРЖКИ ГОСУДАРСТВА МИНИСТЕРСТВА ОБРАЗОВАНИЯ</div>
//         </div>
//             <div className='doptextr'>Разработка и внедрение мобильных роботов в разные сферы быта и
// производства для замены человеческого труда
// </div>
//         <div className='scel'>
//             <b className='cel'>
//                 Цели:
//             </b>
//             <li className='celp'>
//             Минимизация влияния человеческого фактора
//             </li>
//             <li className='celp'>
//             Автоматизация монотонного труда и повышение
// производительности
//             </li>
//             <li className='celp'>
//             Замена человеческого труда на вредных и опасных
//             производствах
//             </li>
//         </div>
        
//         <div className='linedop'>
//             <br>
            
//             </br>
//         </div>
        
//             <div className='doptext2'>
//             В НАСТОЯЩИЙ МОМЕНТ РАЗРАБАТЫВАЕТСЯ
//     ПРОТОТИП УНИВЕРСАЛЬНОГО РОБОТА. В
//     БУДУЩЕМ ЕГО МОЖНО БУДЕТ ОСНАЩАТЬ ПОД
//     КОНКРЕТНЫЕ ЗАДАЧИ (РОБОТ ПЫЛЕСОС,
//     РОБОТ ПОЛОМОЙЩИК, РОБОТ КУРЬЕР, РОБОТ

//     НОСИЛЬЩИК БАГАЖА И Т.Д.).
//             </div>
//         </div>
//         <div className='dop2'>
//         <div className='scel'>
//             <div className='cel'>
//                 Ценность
//             </div>
//             <li className='celp'>
//             Развитие отечественных исследований и
// разработок в области искусственного интеллекта,
// робототехники, машинного обучения и других
// смежных областей, связанных с созданием
// интеллектуальных роботов
//             </li>
//             <li className='celp'>
//                 Расширение возможностей автоматизации
// процессов в различных отраслях, таких как 
// промышленность, медицина, образование и т. д.
//             </li>
//         </div>
//         <div className='scel'>
//             <div className='cel'>
//                 Перспективы
//             </div>
//             <li className='celp'>
//             Возможность карьерного роста в научно-иследовательской среде
//             </li>
//             <li className='celp'>
//             Повышение профессиональной квалификации и уровня образования
//             </li>
//         </div>
//         </div>
//         <div>
//             <b className='zagldop'>
//                  ТРЕБОВАНИЯ К СОИСКАТЕЛЮ
//             </b>
//             <div className='dop2'>
//                 <div className='kvad1'>
//                     <div className='kvad2'>
//                         <div>

//                         </div>
//                         <div className='textkvad'>
//                         БАЗВЫЕ ЗНАНИЯ ПРОГРАММИРОВАНИЯ
//                         </div>
//                     </div>
//                     <div className='kvad2'>
//                         <div>

//                         </div>
//                         <div className='textkvad'>
//                         УМЕНИЕ РАБОТАТЬ В КОМАНДЕ
//                         </div>
//                     </div>
//                     <div className='kvad2'>
//                         <div>

//                         </div>
//                         <div className='textkvad'>
//                         УМЕНИЕ НАХОДИТЬ НУЖНУЮ ИНФОРМАЦИЮ
//                         </div>
//                         </div>
//                 </div>
//                 <div className='kvad1'>
//                     <div className='kvad2'>
//                         <div>

//                         </div>
//                         <div className='textkvad'>
//                         УПОРСТВО В ДОСТИЖЕНИИ РЕЗУЛЬТАТА
//                         </div>
//                         </div>
//                     <div className='kvad2'>
//                         <div>

//                         </div>
//                         <div className='textkvad'>
//                             ЖЕЛАНИЕ УЧИТЬСЯ ЧЕМУ-ТО НОВОМУ
//                         </div>
//                         </div>
//                         </div>
//                         <div className='scelpr'>
//                             <div className='cel'>
//                                 ПРИВЕТСТВУЮТСЯ
//                             </div>
//                             <li className='celp'>Hавыки работы с ОС Linux, ROS/ROS2</li>
//                             <li className='celp'>знания языков руthon, c++, json</li>
//                             <li className='celp'>Hавыки пайки и электромонтажа</li>
//                             <li className='celp'>Знания в области ИИ, распознавания
//                             речи и машинного зрения</li> 
//                         </div>
//                         </div>
//                         <div className='pod2'>
//                             <div className='zpr'>
//                                 ГРАФИК РАБОТЫ И ГРАФИК ТРУДА
//                             </div>
//                             <div className='opzpr'>
//                                 Обговариваются на собеседовании (все зависит от уравня соискателя)
//                             </div>
//                             <div className='zpr'>
//                                 КОМАНДА
//                             </div>
//                             <div className='poldop'>
//                                 <div className='linedop2'>
//                                     <br>
//                                     </br>
//                                 </div>
//                                 <div className='kru1'>
//                                     Магистры
//                                 </div>
//                                 <div className='kru2'>
//                                     Аспиранты
//                                 </div>
//                                 <div className='kru3'>
//                                     Кандидаты наук
//                                 </div>
//                                 <div className='kru4'>
//                                     Хорошие люди нацеленные на результат
//                                 </div>
//                             </div>
//                             <div className='zpr'>Становись частью нашей команды.
//                             Создавай будущее! </div>
//                         </div>

//                         </div>
//                 </div>

// import { useNavigate } from "react-router-dom";
// import Sois from "./Sois";
// import CustomButton from "./CustomButton";
// import {Link, Routes,Route, useMatch } from 'react-router-dom';
// import { Button } from "flowbite-react";
// const Dop = () => {
//     return (
//         <div>
//             <h1 className='head-text'>
//                             Для соискателей 
//                         </h1>
//             <div className="link"><a className='asa' href="/sois">Узнать больше</a></div> 
//         </div>

//     )
// }
// export default Dop