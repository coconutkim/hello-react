import { Component } from "react";

class Counter extends Component{

    constructor(props){
        super(props);
        //state의 초깃값을 설정
        this.state = {
            number: 0
        };
    }
    
    //num = 0;
    //rise = () => {console.log(this.num); this.num++;};
    //gura = () => this.state.number++;
    render(){
        const {number} =this.state; //state를 조회할 때는 this.state로 조회
        return (
            <div>
                <h1>{number}</h1>
                <button
                onClick={() => { //버튼이 클릭되었을 대 호출할 함수를 지정한다
                    //즉 이벤트를 설정한다
                    this.setState({ number: number + 1 });
                    //this.setState를 사용해서 새로운 값을 넣는다
                    // this.gura();
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