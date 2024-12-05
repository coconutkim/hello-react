import { useMemo, useState, useCallback, useRef } from "react";

const getAverage = numbers => {
    console.log("calculating the average..........");
    if (numbers.length === 0) return 0;
    //처음 실행을 하게 되면 값이 없기에 이 경우를 고려한다
    const sum = numbers.reduce((a, b) => a+b);
    //reduce 계속 값을 받아서 누적한다
    //reduce는 JavaScript에서 미리 정의된 함수로,
    //직접 정의하지 않아도 사용할 수 있습니다.
    //배열.reduce((누적값, 인덱스, 요소) -> (return 결과), 초기값);
    return sum / numbers.length; //length는 일어난 횟수
};

const Average = () => {
    const [list, setList] = useState([]); //초기값이 배열
    const [number, setNumber] = useState('');
    //값을 입력받는다
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        //concat: Combines two or more arrays
        //배열로 정의한 값을 계속 모은다
        //숫자를 정수형으로 바꾼다 parseInt
        setList(nextList);
        //내부에서는 this.list로 정의한다
        setNumber('');
        inputEl.current.focus();
    }, [number, list]); //숫자나 배열이 바뀌었을 때만 함수를 생성한다

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <h1>Please write in NUMBER</h1>
            <input value={number} onChange={onChange} ref={inputEl}>
            </input>
            {/* 입력할 때마다 이벤트를 발생시킨다 */}
            <button onClick={onInsert}>registration</button>
            <ul>
                {list.map((value, index) => (
                    //맵은 반드시 배열의 개념이 와야 한다
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>value of the average: </b> {avg}
            </div>
        </div>
    );
};

export default Average;