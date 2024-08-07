import MediaQuery from 'react-responsive'
import { 
    headContentAnimation,
    headTextAnimation,
   } from '../config/motion';
import {easeIn, motion, useInView} from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Sois = () => {
    const ref=useRef(null);
    const isInView=useInView(ref, {once: true});
    const slide = useAnimation();
    
    useEffect(() => {
        if (isInView){
        slide.start("visible")
        }
    }, {isInView}
    );
    return (
        <div>
        <MediaQuery minWidth={300} maxWidth={1199}>
        <div className="soiid_t">
            <div>
                <h2 className='head-textsois_t'>
                <motion.div {...headTextAnimation}>
                                <div className="yyay_t">Для соискателей </div>
                                </motion.div>
                            </h2>
                            
                <div className="link_t"><motion.div {...headTextAnimation}><a className='asas_t' href="/">Назад</a></motion.div></div> 
            </div>
                   <div className='dop1'>
         <b className='dopamr_t'>
             ООО "АМР ЛАБ" (ЛАБОРАТОРИЯ МОБИЛЬНЫХ РОБОТОВ)
         </b>
       </div>
       <div className='dop2'>
         <div>
            <div className='xix'>
            <motion.div className='naz'
                    initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    >
                <b className='dopamr2_t'>Деятельность</b>
                <img className='chel_t' src="/chel.png"></img>
                </motion.div>
            </div>
            <div className='doptext_t'> 
            <motion.div
                    initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    >*ВВЕДЕТСЯ ПРИ ПОДЕРЖКИ ГОСУДАРСТВА МИНИСТЕРСТВА ОБРАЗОВАНИЯ</motion.div></div>
         </div>
             <div className='doptextr_t'>            <motion.div
                    initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    >Разработка и внедрение мобильных роботов в разные сферы быта и
 производства для замены человеческого труда</motion.div>
 </div>
         <div className='scel_t'>
         <motion.div className='dopu'
                    initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    >
            <div className="celflag">
                <b className='cel_t'>
                    Цели
                </b>
                <img className='flag_t' src="flag.png"></img>
            </div>
             <li className='celp_t'>
             Минимизация влияния человеческого фактора
            </li>
            <li className='celp_t'>
            Автоматизация монотонного труда и повышение
 производительности
             </li>
             <li className='celp_t'>
             Замена человеческого труда на вредных и опасных
             производствах
             </li>
             </motion.div>
         </div>
        
         <div className='linedop'>
             <br>
            
             </br>
         </div>
        <div>
             <div className='doptext2_t'>
             <motion.div
                    initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}>
             В НАСТОЯЩИЙ МОМЕНТ РАЗРАБАТЫВАЕТСЯ
     ПРОТОТИП УНИВЕРСАЛЬНОГО РОБОТА. В
     БУДУЩЕМ ЕГО МОЖНО БУДЕТ ОСНАЩАТЬ ПОД
     КОНКРЕТНЫЕ ЗАДАЧИ (РОБОТ ПЫЛЕСОС,
     РОБОТ ПОЛОМОЙЩИК, РОБОТ КУРЬЕР, РОБОТ

     НОСИЛЬЩИК БАГАЖА И Т.Д.).
     </motion.div>
             </div>
             <div className="ka1ka2">
                <img src="c.PNG" className="ka1_t" />    
            </div>
            <img src="xx.jpg" className="ka2_t" /> 
         </div>
         </div>
         <div className='dop2'>
         <div className='scel_t'>
            <div className="celflag2">
             <b className='cel_t'>
             <motion.div
                    initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}>
                ЦЕННОСТЬ
                </motion.div>
             </b>
             <img className='flag_t2' src="zved.png"></img>
            </div>
            <div>
                <div>
                <motion.div
                    initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}>
                    <li className='celp_t'>
                        
                    Развитие отечественных исследований и
        разработок в области искусственного интеллекта,
        робототехники, машинного обучения и других
        смежных областей, связанных с созданием
        интеллектуальных роботов
                    </li>
                    <li className='celp_t'>
                        Расширение возможностей автоматизации
        процессов в различных отраслях, таких как 
        промышленность, медицина, образование и т. д.
                    </li>
                    </motion.div>
                </div>
                <img src="rob.JPG" className="robbb_t"></img>
            </div>
         </div>
        <div className='scel'>
        <motion.div
                    initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}>
            <div className="celflag">
                <b className='cel_t'>
                    ПЕРСПЕКТИВЫ           
                </b>
                <img src="les.png" className="flag_t"></img>
            </div>
             <li className='celp1_t'>
             Возможность карьерного роста в научно-иследовательской среде
             </li>
             <li className='celp1_t'>
             Повышение профессиональной квалификации и уровня образования
             </li>
             <div className="katrb">
                <img className="kat_t" src="kat.JPG"></img>
                <img className="rb_t" src="rb.jpg"></img>
             </div>
             </motion.div>
         </div>
         </div>
         <div>
             <motion.b className='zagldop_t' initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}>
                  ТРЕБОВАНИЯ К СОИСКАТЕЛЮ
             </motion.b>
             <div className='dop2_t'>
                 <div className='tel'>
                    <div className='kvad1_t'>
                     <motion.div className='kvad2_t' initial={{x: 130}}
                                whileInView={{x: 0}}
                                transition={{duration: 0.7}}>
                     <img src='b.png' className='rer_t'></img>
                         <div className='textkvad_t'>
                         БАЗOВЫЕ ЗНАНИЯ ПРОГРАММИРОВАНИЯ
                         </div>
                     </motion.div>
                    <motion.div className='kvad2_t ' initial={{x: -130}}
                                whileInView={{x: 0}}
                                transition={{duration: 0.7}}>
                    <img src='d.png' className='rer_t'></img>
                         <div className='textkvad_t'>
                         УМЕНИЕ РАБОТАТЬ В КОМАНДЕ
                        </div>
                     </motion.div>
                     </div>
                     <motion.div className='kvad2_t' initial={{y: 150}}
                                whileInView={{y: 0}}
                                transition={{duration: 0.7}}>
                     <img src='cc.png' className='rer_t'></img>
                         <div className='textkvad_t'>
                         УМЕНИЕ НАХОДИТЬ НУЖНУЮ ИНФОРМАЦИЮ
                         </div>
                         </motion.div>
                         <div className='kvad1_t'>
                     <motion.div className='kvad2_t' initial={{x: 150}}
                                whileInView={{x: 0}}
                                transition={{duration: 0.7}}>
                     <img src='a.png' className='rer_t'></img>
                        <div className='textkvad_t'>
                         УПОРСТВО В ДОСТИЖЕНИИ РЕЗУЛЬТАТА
                         </div>
                         </motion.div>
                     <motion.div className='kvad2_t' initial={{x: -150}}
                                whileInView={{x: 0}}
                                transition={{duration: 0.7}}>
                     <img src='e.png' className='rer_t'></img>
                        <div className='textkvad_t'>
                             ЖЕЛАНИЕ УЧИТЬСЯ ЧЕМУ-ТО НОВОМУ
                         </div>
                         </motion.div>
                         </div>
                         </div>
                         <div className='scelpr'>
                            <motion.div className='cel_t' initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}>
                                 ПРИВЕТСТВУЮТСЯ
                             </motion.div>
                             <motion.li className='celp_t' initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}>Hавыки работы с ОС Linux, ROS/ROS2</motion.li>
                            <motion.li className='celp_t' initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}>Знания языков руthon, c++, js</motion.li>
                             <motion.li className='celp_t' initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}>Hавыки пайки и электромонтажа</motion.li>
                             <motion.li className='celp_t' initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}>Знания в области ИИ, распознавания
                             речи и машинного зрения</motion.li> 
                         </div>
                         </div>
                         <div className='pod2_t'>
                             <motion.div className='zpr_t' initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}>
                                 ГРАФИК РАБОТЫ И ГРАФИК ТРУДА
                            </motion.div>
                             <motion.div className='opzpr_t' initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}>
                                 Обговариваются на собеседовании (все зависит от уровня соискателя)
                             </motion.div>
                             <motion.div className='zpr_t' initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}>
                                 КОМАНДА
                             </motion.div>
                             <div className='hei'>
                             <div className='poldop_t'>
                                <img src='juj.png' className='imlsss'></img>
                                </div>
                             </div>
                             <div className='kmmm_t'>
                                <motion.div className='kvadd_t' initial={{opacity:0, rotate: 180}}
                                        whileInView={{opacity:1, scale:1, rotate: 0}}
                                        transition={{duration: 0.8}}> 
                                    <div>
                                        <img src='fgf.jpg' className='km_t'></img>
                                    </div>
                                    <div>
                                        <li className='kmm'>Магистры</li>
                                        <li className='kmm'>Аспиранты</li>
                                        <li className='kmm'>Кандидаты наук</li>
                                    </div>
                                </motion.div>
                                {/* <div className='textkm_t'>
                                    <div>
                                        Нацеленные на результат
                                    </div>
                                </div> */}
                             </div>
                             <motion.div className="center" initial={{y: 100}}
                                            whileInView={{y: 0}}>
                                <img className="paz_t" src="kub.png"></img>
                            </motion.div>
                         </div>
                         <div className="pod2">
                            <motion.div className="zpr_t" initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}>
                            Становись частью нашей команды. 
                            Создавай будущее!
                            </motion.div>
                            <div className="margin">
                                <motion.div className="contc_t" initial={{x:-50}}
                                            whileInView={{x:0}}
                                            transition={{duration: 0.7}}>
                                    <img className="ikonnn" src="/po.png"></img>
                                    <div className="op">bocha083@mail.ru</div>
                                </motion.div>
                                <motion.div className="contc_t"
                                initial={{x:50}}
                                whileInView={{x:0}}
                                transition={{duration: 0.7}}>
                                    <img className="ikonnn" src="/tel.png"></img>
                                    <div className="op">89118589563</div>
                                </motion.div>
                                <motion.div className="contc_t" initial={{x:-50}}
                                            whileInView={{x:0}}
                                            transition={{duration: 0.7}}>
                                    <img className="ikonnn" src="/tg.png"></img>
                                    <div className="op">@bocha_kms</div>
                                </motion.div>

                            </div>
                            <div>

                            </div>
                         </div>

                         </div>
                
        </div>
        </MediaQuery>
        <MediaQuery minWidth={1200} maxWidth={3980}>
            <div className="soiid">
                <div>
                    <motion.div {...headTextAnimation}>
                        <h2 className='head-textsois'>
                            <div className="yyay">Для соискателей </div>
                        </h2>
                    </motion.div>
                    <motion.div {...headContentAnimation}>
                    <div className="link"><a className='asas' href="/">Назад</a></div>
                    </motion.div> 
                </div>
                <motion.div {...headContentAnimation}>
                    <div className='dop1'>
                        <b className='dopamr'>
                            ООО "АМР ЛАБ" (ЛАБОРАТОРИЯ МОБИЛЬНЫХ РОБОТОВ)
                        </b>
                    </div>
                </motion.div>
            
                <div
                    className='dop2'>
                <motion.div className='dop'
                    initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    >
                    <b className='dopamr2'>Деятельность</b>
                    <img className='chel' src="/chel.png"></img>
                    <div className='doptext'>*ВВЕДЕТСЯ ПРИ ПОДЕРЖКИ ГОСУДАРСТВА МИНИСТЕРСТВА ОБРАЗОВАНИЯ</div>
                </motion.div>
                <motion.div 
                    initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    className='doptextr'>Разработка и внедрение мобильных роботов в разные сферы быта и
                    производства для замены человеческого труда
                </motion.div>
            <div ref={ref} style={{ position:"relative",overflow: "hidden"}}  className='scel'>
            <motion.div 
                initial={{opacity:0, y:75}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{duration: 0.5, delay:0.25}}
                className='scel'
                >
                <div className="celflag">
                    <b className='cel'>
                        Цели
                    </b>
                    <img className='flag' src="/flag.png"></img>
                </div>
                <li className='celp'>
                Минимизация влияния человеческого фактора
                </li>
                <li className='celp'>
                Автоматизация монотонного труда и повышение
                производительности
                </li>
                <li className='celp'>
                Замена человеческого труда на вредных и опасных
                производствах
                </li>
            </motion.div>
            </div>
            <div className='linedop'>
                <br>
                
                </br>
            </div>
            <motion.div 
                initial={{opacity:0, y:75}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{duration: 0.5, delay:0.25}}
                className="flex">
                <div className='doptext2'>
                    В НАСТОЯЩИЙ МОМЕНТ РАЗРАБАТЫВАЕТСЯ
            ПРОТОТИП УНИВЕРСАЛЬНОГО РОБОТА. В
            БУДУЩЕМ ЕГО МОЖНО БУДЕТ ОСНАЩАТЬ ПОД
            КОНКРЕТНЫЕ ЗАДАЧИ (РОБОТ ПЫЛЕСОС,
            РОБОТ ПОЛОМОЙЩИК, РОБОТ КУРЬЕР, РОБОТ

            НОСИЛЬЩИК БАГАЖА И Т.Д.).
                </div>
                <MediaQuery minWidth={1200} maxWidth={1700}>
                <motion.div 
                    initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    className="ka1ka2">
                    <img src="/c.PNG" className="ka1_n" />
                    <motion.img initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    src="/xx.jpg" className="ka2_n" />           
                </motion.div>
                </MediaQuery>
                <MediaQuery minWidth={1701} maxWidth={3980}>
                <motion.div 
                    initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    className="ka1ka2">
                    <img src="/c.PNG" className="ka1" />
                    <img src="/xx.jpg" className="ka2" />           
                </motion.div>
                </MediaQuery>
            </motion.div>
            </div>
            <motion.div 
                initial={{opacity:0, y:75}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{duration: 0.5, delay:0.25}}
                className='dop2'>
            <motion.div initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    className='scel'>
                <motion.div initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    className="celflag2">
                <b className='cel'>
                    ЦЕННОСТЬ
                </b>
                <img className='flag' src="/zved.png"></img>
                </motion.div>
                <motion.div initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    className="flex">
                    <div>
                        <li className='celp'>
                        Развитие отечественных исследований и
            разработок в области искусственного интеллекта,
            робототехники, машинного обучения и других
            смежных областей, связанных с созданием
            интеллектуальных роботов
                        </li>
                        <li className='celp'>
                            Расширение возможностей автоматизации
            процессов в различных отраслях, таких как 
            промышленность, медицина, образование и т. д.
                        </li>
                    </div>
                    <img src="/rob.JPG" className="robbb"></img>
                </motion.div>
            </motion.div>
            <motion.div initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    className='scel'>
                <motion.div initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    className="celflag">
                    <b className='cel'>
                        ПЕРСПЕКТИВЫ           
                    </b>
                    <img src="/les.png" className="flag"/>
                </motion.div>
                <motion.li initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    className='celp1'>
                Возможность карьерного роста в научно-иследовательской среде
                </motion.li>
                <motion.li initial={{opacity:0, y:75}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay:0.25}}
                    className='celp1'>
                Повышение профессиональной квалификации и уровня образования
                </motion.li>
                <motion.div 
                    initial={{opacity:0}}
                    whileInView={{ opacity: 1}}
                    transition={{duration: 0.5, delay:0.25}}
                    className="katrb">
                    <img className="kat" src="/kat.JPG"></img>
                    <img className="rb" src="/rb.jpg"></img>
                </motion.div>
            </motion.div>
            </motion.div>
            <div>
                <motion.b initial={{opacity:0, y:75}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{duration: 0.5, delay:0.25}}
                className='zagldop'>
                    ТРЕБОВАНИЯ К СОИСКАТЕЛЮ
                </motion.b>
                <div className='dop2'>
                    <div className='kvad1'>
                        <motion.div initial={{x: -200}}
                                whileInView={{x: 0}}
                                transition={{duration: 0.7}}
                                className='kvad2'>
                            <img src='/b.png' className='rer'/>
                            <div className='textkvad'>БАЗОВЫЕ ЗНАНИЯ ПРОГРАММИРОВАНИЯ</div>
                        </motion.div>
                        <motion.div initial={{y: 200}}
                                whileInView={{y: 0}}
                                transition={{duration: 0.7}}
                                className='kvad2'>
                            <img src='/d.png' className='rer'></img>
                            <div className='textkvad'>
                            УМЕНИЕ РАБОТАТЬ В КОМАНДЕ
                            </div>
                        </motion.div>
                        <motion.div initial={{x: 180}}
                                whileInView={{x: 0}}
                                transition={{duration: 0.7}}
                                className='kvad2'>
                        <img src='/cc.png' className='rer'></img>
                            <div className='textkvad'>
                            УМЕНИЕ НАХОДИТЬ НУЖНУЮ ИНФОРМАЦИЮ
                            </div>
                        </motion.div>
                    </div>
                    <div className='kvad1'>
                        <motion.div initial={{x: -200}}
                                whileInView={{x: 0}}
                                transition={{duration: 0.7}} className='kvad2'>
                        <img src='/a.png' className='rer'></img>
                            <div className='textkvad'>
                            УПОРСТВО В ДОСТИЖЕНИИ РЕЗУЛЬТАТА
                            </div>
                        </motion.div>
                        <motion.div initial={{x: 200}}
                                whileInView={{x: 0}}
                                transition={{duration: 0.7}} className='kvad2'>
                        <img src='/e.png' className='rer'></img>
                            <div className='textkvad'>
                                ЖЕЛАНИЕ УЧИТЬСЯ ЧЕМУ-ТО НОВОМУ
                            </div>
                        </motion.div>
                            <img className='tt' src='/tt.png'></img>
                            </div>
                            <div
                                    className='scelpr'>
                                <motion.div initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}
                                    className='cel'>
                                    ПРИВЕТСТВУЮТСЯ
                                </motion.div>
                                <motion.li  initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}
                                    className='celp'>Hавыки работы с ОС Linux, ROS/ROS2</motion.li>
                                <motion.li  initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}
                                    className='celp'>Знания языков руthon, c++, js</motion.li>
                                <motion.li  initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}
                                    className='celp'>Hавыки пайки и электромонтажа</motion.li>
                                <motion.li  initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}
                                    className='celp'>Знания в области ИИ, распознавания
                                речи и машинного зрения</motion.li>
                            </div>
                            </div>
                            <div className='pod2'>
                                <motion.div  initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}
                                    className='zpr'>
                                    ГРАФИК РАБОТЫ И ГРАФИК ТРУДА
                                    
                                </motion.div>
                                <motion.div  initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}
                                    className='opzpr'>
                                    Обговариваются на собеседовании (все зависит от уровня соискателя) 
                                </motion.div>
                                <img src='/gol.png' className='gol'></img>
                                <motion.div initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}
                                    className='zpr'>
                                    КОМАНДА
                                </motion.div>
                                <div className='poldop'>
                                    <div className='linedop2'>
                                        <br>
                                        </br>
                                </div>
                                    <motion.div initial={{x: 100}}
                                    whileInView={{x: 0}}
                                    transition={{duration: 0.9}}
                                    className='kru1'>
                                        Магистры
                                    </motion.div>
                                    <motion.div initial={{x: 300}}
                                    whileInView={{x: 0}}
                                    transition={{duration: 0.8}}
                                    className='kru2'>
                                        Аспиранты
                                    </motion.div>
                                    <motion.div initial={{x: 430}}
                                    whileInView={{x: 0}}
                                    transition={{duration: 0.7}}
                                    className='kru3'>
                                        Кандидаты наук
                                    </motion.div>
                                    <motion.div initial={{x: 140}}
                                    whileInView={{x: 0}}
                                    transition={{duration: 0.6}}
                                    className='kru4'>
                                    Люди, нацеленные на результат
                                    </motion.div>
                                </div>
                                <div className='kmmm'>
                                    <img src='/goll.png' className='goll'></img>
                                    <motion.div 
                                        initial={{opacity:0, rotate: 180}}
                                        whileInView={{opacity:1, scale:1, rotate: 0}}
                                        transition={{duration: 0.8}}
                                        className='kvadd'> 
                                        <div>
                                            <img src='/fgf.jpg' className='km'></img>
                                        </div>
                                        <div>
                                            <li className='kmm'>Магистры</li>
                                            <li className='kmm'>Аспиранты</li>
                                            <li className='kmm'>Кандидаты наук</li>
                                        </div>
                                    </motion.div>
                                    <div className='textkm'>
                                        <motion.div 
                                            // initial={{x:200}}
                                            // whileInView={{x:-100}}
                                            // animate={{x:0}}
                                            // transition={{duration: 0.8}}
                                            className='stt'>
                                            <img className='st' src='/st.png'></img>
                                        </motion.div>
                                        <motion.div initial={{opacity:0, y:75}}
                                            whileInView={{ opacity: 1, y: 0}}>
                                            Нацеленные на результат
                                        </motion.div>
                                        <motion.div initial={{y: 100}}
                                            whileInView={{y: 0}}
                                            className='kubb'>
                                        <img className='kub' src='/kub.png'></img>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <div className="pod2">
                                <motion.div initial={{opacity:0, y:75}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay:0.25}}
                                    className="zpr">
                                Становись частью нашей команды. 
                                Создавай будущее!
                                </motion.div>
                                <div className='display'> 
                                    <div className="margin">
                                        <motion.div initial={{x:-100}}
                                            whileInView={{x:0}}
                                            transition={{duration: 0.7}}
                                            className="contc">
                                            <img className="ikonnn" src="/po.png"></img>
                                            <div className="op">bocha083@mail.ru</div>
                                        </motion.div>
                                        <motion.div initial={{x:100}}
                                            whileInView={{x:0}}
                                            transition={{duration: 0.7}}
                                            className="contc">
                                            <img className="ikonnn" src="/tel.png"></img>
                                            <div className="op">89118589563</div>
                                        </motion.div>
                                        <motion.div initial={{x:-100}}
                                            whileInView={{x:0}}
                                            transition={{duration: 0.7}}
                                            className="contc">
                                            <img className="ikonnn" src="/tg.png"></img>
                                            <div className="op">@bocha_kms</div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                        </div>
        </div>
        </MediaQuery>
        </div>
    )
}
export default Sois