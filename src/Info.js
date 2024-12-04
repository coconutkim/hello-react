import { useState, useEffect } from "react";

//맨 밑에 export를 까먹을까봐 걱정된다면 
//export const Info ...

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        // console.log('rendering is completed');
        // console.log('excuted in only in case of mounting');
        console.log(name);
        // console.log({
        //     name, nickname
        // });
    },[name]);

    const onChangeName = e => {
        //e가 입력할 때마다 변화된 값을 갖고 온다
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return(
        <div>
            <div>
            <input 
            placeholder="name" 
            value={name} 
            onChange={onChangeName}></input>
            <input 
            placeholder="nickname" 
            value={nickname} 
            onChange={onChangeNickname}></input>
        </div>

        <div>
            <div>
                <b>name:</b> {name}
            </div>
            <div>
                <b>nickname:</b> {nickname}
            </div>
        </div>

        </div>
    );
};

export default Info;
