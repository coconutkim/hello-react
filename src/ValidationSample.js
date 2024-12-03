import { Component } from "react";
import './ValidationSample.css';

class ValidationSample extends Component{

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
            //검증 결과
        })
    }

    render(){
        return(
            <div>
                <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' :
                    'failure') : ''}
                    //버튼을 누른 후 결과는 참과 거짓
                    //이에 따라 input 색상이 초록과 빨강
                />
                <button onClick={this.handleButtonClick}>verify</button>
            </div>
        );
    }
}

export default ValidationSample;