import React, { Component } from "react";
import './ValidationSample.css';

class ValidationSample extends Component{

    input = React.createRef();

    state = {
        password:'',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
            //패스워드 값의 업데이트
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
            //같은지 물어본다
        });
        this.input.focus();
    }

    render(){
        return(
            <div>
                <input
                ref={(ref) => this.input=ref}
                //ref={this.input}
                //dom 요소나 리액트 컴포넌트에 직접 접근할 수 있게 한다
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={
                    this.state.clicked 
                    ? (this.state.validated 
                        ? 'success' //초록색 배경이 된다
                        : 'failure') 
                        : ''}
                    //버튼을 누른 후 결과는 참과 거짓
                    //이에 따라 input 색상이 초록과 빨강
                />
                <button onClick={this.handleButtonClick}>
                    verify</button>
            </div>
        );
    }
}

export default ValidationSample;