import { useState } from "react";

const IterationSample = () => {
    // return(
    //     <ul>
    //         <li>snowman</li>
    //         <li>snowman</li>
    //         <li>snowman</li>
    //         <li>snowman</li>
    //     </ul>
    // )
    //위의 코드는 반복되는 구간이 많아 비효율적이다

    // const names = ['snowman','ice','snow','wind']; //배열 객체
    //이미 정해져 있다 >> 정적 배열
    // const nameList = names.map(name => <li>{name}</li>);
    // //foreach(string name: names)와 유사하다
    // return <ul>{nameList}</ul>;

    const[names, setNames] = useState([
        {id: 1, text: 'snowman'},
        {id: 2, text: 'ice'},
        {id: 3, text: 'snow'},
        {id: 4, text: 'wind'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextID, setNextID] = useState(5); 
    //새로 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    //계속 데이터를 업데이트해줘야 하기에 event 객체의 e가 붙는다

    const onClick = () => {
        const nextNames = names.concat({ //붙인다
            //객체를 저장하는 변수가 nextnames
            id: nextID,
            text: inputText
        });
        setNextID(nextID + 1);
        setNames(nextNames);
        setInputText('');
    };
    const onKeyPress = e => {
        if (e.key === 'Enter'){
            onClick();
        }
    };

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map(name => 
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}</li>);

    return (
        <>
            <input 
            value={inputText} 
            onChange={onChange} 
            onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>add</button>
            <ol start={1}>{nameList}</ol>
        </>
    );
};

export default IterationSample;