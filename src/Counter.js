import { Component } from "react";

class Counter extends Component{

    // constructor(props){
        // super(props);
        //state의 초깃값을 설정
        state = {
            number: 0,
            fixedNumber: 0
        };
    // }
    
    //num = 0;
    //rise = () => {console.log(this.num); this.num++;};
    //gura = () => this.state.number++;
    render(){
        const {number, fixedNumber} =this.state; //state를 조회할 때는 this.state로 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>non-changed number: {fixedNumber}</h2>
                <button
                onClick={() => { //버튼이 클릭되었을 대 호출할 함수를 지정한다
                    this.setState(
                        {
                            number: number + 1
                        },
                        () => {
                            console.log('setstate was just called');
                            console.log(this.state);
                        }
                    );
                }}
                >
                +1
                </button>
                {/* <h1>{this.num}</h1> */}
                {/* <button onClick={this.rise}>증가</button> */}
            </div>
        );
    }
}

export default Counter;