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
             <b className='zagldop_t'>
                  ТРЕБОВАНИЯ К СОИСКАТЕЛЮ
             </b>
             <div className='dop2_t'>
                 <div className='tel'>
                    <div className='kvad1_t'>
                     <div className='kvad2_t'>
                     <img src='b.png' className='rer_t'></img>
                         <div className='textkvad_t'>
                         БАЗOВЫЕ ЗНАНИЯ ПРОГРАММИРОВАНИЯ
                         </div>
                     </div>
                    <div className='kvad2_t'>
                    <img src='d.png' className='rer_t'></img>
                         <div className='textkvad_t'>
                         УМЕНИЕ РАБОТАТЬ В КОМАНДЕ
                        </div>
                     </div>
                     </div>
                     <div className='kvad2_t'>
                     <img src='cc.png' className='rer_t'></img>
                         <div className='textkvad_t'>
                         УМЕНИЕ НАХОДИТЬ НУЖНУЮ ИНФОРМАЦИЮ
                         </div>
                         </div>
                         <div className='kvad1_t'>
                     <div className='kvad2_t'>
                     <img src='a.png' className='rer_t'></img>
                        <div className='textkvad_t'>
                         УПОРСТВО В ДОСТИЖЕНИИ РЕЗУЛЬТАТА
                         </div>
                         </div>
                     <div className='kvad2_t'>
                     <img src='e.png' className='rer_t'></img>
                        <div className='textkvad_t'>
                             ЖЕЛАНИЕ УЧИТЬСЯ ЧЕМУ-ТО НОВОМУ
                         </div>
                         </div>
                         </div>
                         </div>
                         <div className='scelpr'>
                            <div className='cel_t'>
                                 ПРИВЕТСТВУЮТСЯ
                             </div>
                             <li className='celp_t'>Hавыки работы с ОС Linux, ROS/ROS2</li>
                            <li className='celp_t'>Знания языков руthon, c++, js</li>
                             <li className='celp_t'>Hавыки пайки и электромонтажа</li>
                             <li className='celp_t'>Знания в области ИИ, распознавания
                             речи и машинного зрения</li> 
                         </div>
                         </div>
                         <div className='pod2_t'>
                             <div className='zpr_t'>
                                 ГРАФИК РАБОТЫ И ГРАФИК ТРУДА
                            </div>
                             <div className='opzpr_t'>
                                 Обговариваются на собеседовании (все зависит от уровня соискателя)
                             </div>
                             <div className='zpr_t'>
                                 КОМАНДА
                             </div>
                             <div className='hei'>
                             <div className='poldop_t'>
                                <img src='juj.png' className='imlsss'></img>
                                </div>
                             </div>
                             <div className='kmmm_t'>
                                <div className='kvadd_t'> 
                                    <div>
                                        <img src='fgf.jpg' className='km_t'></img>
                                    </div>
                                    <div>
                                        <li className='kmm'>Магистры</li>
                                        <li className='kmm'>Аспиранты</li>
                                        <li className='kmm'>Кандидаты наук</li>
                                    </div>
                                </div>
                                {/* <div className='textkm_t'>
                                    <div>
                                        Нацеленные на результат
                                    </div>
                                </div> */}
                             </div>
                             <div className="center">
                                <img className="paz_t" src="paz.png"></img>
                            </div>
                         </div>
                         <div className="pod2">
                            <div className="zpr_t">
                            Становись частью нашей команды. 
                            Создавай будущее!
                            </div>
                            <div className="margin">
                                <div className="contc_t">
                                    <img className="ikonnn" src="/po.png"></img>
                                    <div className="op">bocha083@mail.ru</div>
                                </div>
                                <div className="contc_t">
                                    <img className="ikonnn" src="/tel.png"></img>
                                    <div className="op">89118589563</div>
                                </div>
                                <div className="contc_t">
                                    <img className="ikonnn" src="/tg.png"></img>
                                    <div className="op">@bocha_kms</div>
                                </div>

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
                    <img src="/xx.jpg" className="ka2_n" />           
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
                <b className='zagldop'>
                    ТРЕБОВАНИЯ К СОИСКАТЕЛЮ
                </b>
                <div className='dop2'>
                    <div className='kvad1'>
                        <div className='kvad2'>
                        <img src='/b.png' className='rer'></img>
                            <div className='textkvad'>
                            БАЗВЫЕ ЗНАНИЯ ПРОГРАММИРОВАНИЯ
                            </div>
                        </div>
                        <div className='kvad2'>
                            <img src='/d.png' className='rer'></img>
                            <div className='textkvad'>
                            УМЕНИЕ РАБОТАТЬ В КОМАНДЕ
                            </div>
                        </div>
                        <div className='kvad2'>
                        <img src='/cc.png' className='rer'></img>
                            <div className='textkvad'>
                            УМЕНИЕ НАХОДИТЬ НУЖНУЮ ИНФОРМАЦИЮ
                            </div>
                            </div>
                    </div>
                    <div className='kvad1'>
                        <div className='kvad2'>
                        <img src='/a.png' className='rer'></img>
                            <div className='textkvad'>
                            УПОРСТВО В ДОСТИЖЕНИИ РЕЗУЛЬТАТА
                            </div>
                            </div>
                        <div className='kvad2'>
                        <img src='/e.png' className='rer'></img>
                            <div className='textkvad'>
                                ЖЕЛАНИЕ УЧИТЬСЯ ЧЕМУ-ТО НОВОМУ
                            </div>
                            </div>
                            <img className='tt' src='/tt.png'></img>
                            </div>
                            <div className='scelpr'>
                                <div className='cel'>
                                    ПРИВЕТСТВУЮТСЯ
                                </div>
                                <li className='celp'>Hавыки работы с ОС Linux, ROS/ROS2</li>
                                <li className='celp'>знания языков руthon, c++, js</li>
                                <li className='celp'>Hавыки пайки и электромонтажа</li>
                                <li className='celp'>Знания в области ИИ, распознавания
                                речи и машинного зрения</li> 
                            </div>
                            </div>
                            <div className='pod2'>
                                <div className='zpr'>
                                    ГРАФИК РАБОТЫ И ГРАФИК ТРУДА
                                    
                                </div>
                                <div className='opzpr'>
                                    Обговариваются на собеседовании (все зависит от уровня соискателя)
                                    <img src='/gol.png' className='gol'></img>
                                </div>
                                <div className='zpr'>
                                    КОМАНДА
                                </div>
                                <div className='poldop'>
                                    <div className='linedop2'>
                                        <br>
                                        </br>
                                </div>
                                    <div className='kru1'>
                                        Магистры
                                    </div>
                                    <div className='kru2'>
                                        Аспиранты
                                    </div>
                                    <div className='kru3'>
                                        Кандидаты наук
                                    </div>
                                    <div className='kru4'>
                                    Люди, нацеленные на результат
                                    </div>
                                </div>
                                <div className='kmmm'>
                                    <img src='/goll.png' className='goll'></img>
                                    <div className='kvadd'> 
                                        <div>
                                            <img src='/fgf.jpg' className='km'></img>
                                        </div>
                                        <div>
                                            <li className='kmm'>Магистры</li>
                                            <li className='kmm'>Аспиранты</li>
                                            <li className='kmm'>Кандидаты наук</li>
                                        </div>
                                    </div>
                                    <div className='textkm'>
                                        <div className='stt'>
                                            <img className='st' src='/st.png'></img>
                                        </div>
                                        <div>
                                            Нацеленные на результат
                                        </div>
                                        <div className='kubb'>
                                        <img className='kub' src='/kub.png'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pod2">
                                <div className="zpr">
                                Становись частью нашей команды. 
                                Создавай будущее!
                                </div>
                                <div className='display'> 
                                    <div className="margin">
                                        <div className="contc">
                                            <img className="ikonnn" src="/po.png"></img>
                                            <div className="op">bocha083@mail.ru</div>
                                        </div>
                                        <div className="contc">
                                            <img className="ikonnn" src="/tel.png"></img>
                                            <div className="op">89118589563</div>
                                        </div>
                                        <div className="contc">
                                            <img className="ikonnn" src="/tg.png"></img>
                                            <div className="op">@bocha_kms</div>
                                        </div>
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