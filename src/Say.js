import { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState(''); //초기값을 준다
    //첫 번째 원소는 현재 상태, 두 번째 원소는 상태를 바꾸어 주는 함수
    //두번째는 일명 setter
    //setMessage는 속성 메서드
    const onClickEnter = () => setMessage("welcome");
    const onClickLeave = () => setMessage("get out");

    const [color, setColor] = useState('black');

    return(
        <div>
            <button onClick={onClickEnter}>enter</button>
            <button onClick={onClickLeave}>leave</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={() => setColor('red')}>
                {/* 버튼 자체에도 스타일을 넣어 색상을 맞춘다 */}
                {/* 괄호가 2개인 이유 */}
                {/* 하나는 객체 리터럴을 지정하기 위해,
                다른 하나는 익명 함수를 지정하기 위해 */}
                red
            </button>
            <button style={{color: 'green'}} onClick={() => setColor('green')}>
                {/* 속성으로 전달해야 바뀐 값이 나온다 */}
                green
            </button>
            <button style={{color: 'blue'}} onClick={() => setColor('blue')}>
                blue
            </button>
        </div>
    );
};

export default Say;