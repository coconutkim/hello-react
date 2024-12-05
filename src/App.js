import Average from './Average';

const App = () => {
  return <Average />;
};

export default App;


// ===================================================================


// import { useState, useMemo } from 'react'

// function App() {
//   const [count, setCount] = useState(0);
//   const expensiveTask = useMemo(() => {
//     //불필요한 렌더링이 일어나는 자리에 useMemo
//     return slowFunction();
//   }, []);

//   return (
//     <>
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//     </>
//   )
// }

// function slowFunction() {
//   console.log('slowFunction Called');
//   for (let index = 0; index < 1000000000; index++) {
//     // Slowing the function for testing
//   }
//   return "Hi";
// }

// export default App;


// ===================================================================


// // useCallback(fn, [])
// import React, { useState, useCallback, useMemo } from "react";

// function App() {
//   const [buttonX, setButtonX] = useState(0);
//   const [buttonY, setButtonY] = useState(0);
  
//   const handleButtonX = () => {
//     setButtonX((prev) => prev + 1)
//   };
  
//   const handleButtonY = () => {
//     setButtonY((prev) => prev + 1)
//   };
  
//   const returnUseCallback = useCallback(() => {console.log(buttonY)}, [buttonX]);
  
//   returnUseCallback();
    
//   return (
//     <>
//       <button onClick={handleButtonX}>X</button>
//       <button onClick={handleButtonY}>Y</button>
//     </>
//   );
// }

// export default App;


// ===================================================================


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


// import React, { Component } from 'react';
// import LifeCycleSample from './LifeCycleSample';
// import ErrorBoundary from './ErrorBoundary';

// // 랜덤 색상을 생성합니다.
// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }
// class App extends Component {
//   state = {
//     color: '#000000'
//   };
//   handleClick = () => {
//     this.setState({
//       color: getRandomColor()
//     });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤
//            색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }
// export default App;
