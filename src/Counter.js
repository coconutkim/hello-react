import { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);
    //기본값을 0으로 설정한다
    //setmethod는 속성 메소드

    //함수 컴포넌트는 리턴이 있다
    return(
        <div>
            <p>
                current value of counter is <b>{value}</b>.
                {/* 저장된 값을 state가 관리한다 */}
            </p>
            <button onClick={() => setValue(value + 1)}>
                +1
            </button>
            <button onClick={() => setValue(value - 1)}>
                -1
            </button>
        </div>
    );
};

export default Counter;