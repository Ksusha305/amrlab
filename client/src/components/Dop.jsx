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
            <div className="link"><a className='asar' href="/sois">Узнать больше</a></div> 
        </div>
        </MediaQuery>
        </div>
    )
}
export default Dop
