// import IterationSample from './IterationSample';
// import { Component } from 'react';

// const App = () => {
//   return <IterationSample />;
// };

// // class App extends Component{
// //   render(){
// //     return(
// //       <div>
// //         <ScrollBox ref={(ref) => this.ScrollBox=ref}></ScrollBox>
// //         <button onClick={() => this.ScrollBox.scrollToTop()}>
// //           to the top
// //         </button>
// //         <button onClick={() => this.ScrollBox.scrollToBottom()}>
// //           to the bottom
// //         </button>
// //       </div>
// //     )
// //   }
// // }

// export default App;


// ===================================================================


import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: '#000000'
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤
           색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
