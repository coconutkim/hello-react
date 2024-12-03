import { useState } from "react";

const EventPractice = () => {
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);
    // const onClick = () => {
    //     alert(username + ': ' + message);
    //     setUsername('');
    //     setMessage('');
    // };
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;
    const onChange = e =>{
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
            alert(username + ': ' + message);
            setForm({
                username: '',
                message: ''
            });
        };
    const onKeyPress = e => {
        if (e.key === 'Enter'){
            onClick();
        }
    };

    return(
        <div>
            <h1>practice event</h1>

            <input
            type='text'
            name='username'
            placeholder="username"
            value={username}
            onChange={onChange}
            />
            <input
            type='text'
            name='message'
            placeholder="input anything"
            value={message}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />

            <button onClick={onClick}
            // {
            //     () => {
            //         alert(this.state.message); 
            //         //현재 상태의 코멘트 값을 메시지 박스로 띄운다
            //         this.setState({
            //             message: ''
            //         }); //값을 공백으로 설정한다
            //     }
            // }
            >confirm</button>
        </div>
    );
};

export default EventPractice;