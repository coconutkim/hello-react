import { useState } from "react";

const RefTest = () => {
    const [form, setForm] = useState({
        num: 0
    });
    const {num} = form;
    const onClick = () => {
        // console.log(num) //=0
        setForm({
            num: num + 1//num++  num = num + 1
        })
        console.log(num)
    }
    const changeText = ()=>{
        onClick();
        var eleH1 = document.getElementById('h1');
        console.log(eleH1.textContent);
        eleH1.textContent = num;
    }

    return(
        <div>
            <h1 id='h1'>hello world</h1>
            <h2>{num}</h2>
            <button>hi</button>
            <button onClick={changeText}>변경</button>
        </div>
    );
};

export default RefTest;