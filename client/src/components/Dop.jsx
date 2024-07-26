import { useNavigate } from "react-router-dom";
import Sois from "./Sois";
import CustomButton from "./CustomButton";
import {Link, Routes,Route, useMatch } from 'react-router-dom';
import { Button } from "flowbite-react";
const Dop = () => {
    return (
        <div>
            <h1 className='head-text'>
                            Для соискателей 
                        </h1>
            <div className="link"><a className='asa' href="/sois">Узнать больше</a></div> 
        </div>
    )
}
export default Dop