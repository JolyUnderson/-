import React from "react";
import "./Lab_list.css";
import { Link } from "react-router-dom";
const Lab_list = () =>{
    return(
        <ul>
        <li><Link to={'/Lab_2'}>Лабораторная 2</Link></li>
        <li><Link to={'/lab_3'}>Лабораторная 3</Link></li>
        <li><Link to={'/lab_4'}>Лабораторная 4</Link></li>
        <li><Link to={'/lab_5'}>Лабораторная 5</Link></li>
        <li><Link to={'/lab_6'}>Лабораторная 6</Link></li>
        <li><Link to={'/lab_7'}>Лабораторная 7</Link></li>
        <li><Link to={'/lab_8'}>Лабораторная 8</Link></li>
        <li><Link to={'/lab_9'}>Лабораторная 9</Link></li>
      </ul>
    )
}
export default Lab_list