import { Component } from 'react';
import PropTypes from 'prop-types'

class MyComponent extends Component {
    //클래스형 컴포넌트에서 설정할 때 클래스 내부에서 지정하는 방식

    static defaultProps = {
        name: 'basic name'
    };

    static propTypes = {
        //prop 타입을 검사하여 개발 시 오류를 미리 방지한다
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
        //isRequired 필수 기재 항목
    };

    render(){
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                hello, my name is {name}<br />
                value of children is {children}<br />
                my fav number is {favoriteNumber}
            </div>
        );
    }
}

// MyComponent.defaultProps = {
//     name: 'basic name'
// };

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// };

export default MyComponent;