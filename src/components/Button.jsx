import React, { useState } from "react";
import Button1 from "./Button1";
const Button = () =>{
    const [count,setCount]=useState(0);
    return(
      <div>
        <p>Наш счетчик: {count}</p>
        <Button1 label="Прибавляем" onclick={()=>setCount(count+1)}></Button1>
        <Button1 label="Отнимаем" onclick={()=>setCount(count-1)}></Button1>
        <Button1 label="Сброс"onclick={()=>setCount(count==0)}></Button1>
      </div>
    );
  }
export default Button