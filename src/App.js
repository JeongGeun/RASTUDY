import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Myname from'./MyName'
import Counter from './Counter'
class App extends Component {
  render() {
    const name='조정근'
    return (
      <div>
        <Myname name="조정근"/>
        <Counter/>
        {/**
          1.삼항연산자로 if문 구현 가능
          2.react상에는 style을 줄 때
          const style={
              backgroundColor : 'black',
              padding :'16px',
              color : 'white',
              fontSize : '36px'
          }
          3.className='{css파일이름}'으로 css파일을 불러올 수 있다.
        **/}
        {name==='조정근'?<div>'hi'</div>:<div>bye</div>}
      
      </div>
  );
}
}
export default App;
