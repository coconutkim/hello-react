import React, { Component } from "react";

class ScrollBox extends Component{

    box = React.createRef();

    // scrollHeight:
    // 요소의 콘텐츠 전체 높이를 나타냅니다(스크롤 영역 포함).
    // 요소가 스크롤 가능한 경우,
    // 콘텐츠가 보이지 않는 부분까지 포함한 높이를 반환합니다.

    // clientHeight:
    // 요소의 콘텐츠 영역 높이(패딩 포함, 스크롤바 제외)를 나타냅니다.

    // scrollTop:
    // 스크롤바가 얼마나 아래로 이동했는지 나타내는 속성으로,
    // 이 값을 설정하면 스크롤 위치를 조작할 수 있습니다.

    scrollToBottom = () => {
        const {scrollHeight, clientHeight} = this.box;
        // 위의 코드는 비구화 할당 문법을 사용했다
        // 아래의 코드와 같은 의미
        // const scrollHeight = this.box.scrollHeight
        // const clientHeight = this.box.clientHeight
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    scrollToTop = () => {
        this.box.scrollTop = 0;
    }

    render(){
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
            //직선 방향으로 변한다
        }

        return (
            <div
            style={style}
            ref={(ref) => {this.box=ref}}>
                <div style={innerStyle}></div>
            </div>
        );
    }
}

export default ScrollBox;