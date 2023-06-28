import { useState } from 'react';
import './App.css';
  let i=0
  let k=1

  let a=0
  let b=1

  let c=0
  let d=1


function App() {

  const points1 = useState(0)
  const points2 = useState(0)
  const points3 = useState(0)
  

  function clickImg1(){
    i=i+k
    points1[1](i)
    }
  function clickImg2(){
    a=a+b
    points2[1](a)
    }
  function clickImg3(){
    c=c+d
    points3[1](c)
    }
  
    
  return (
    <div className='App'>
      
      
      
      <div className='text'>Кликай на эмоции</div>
      
       <div className='points-block'>
        <div className='points'>
        <img className='image-class' id='img-cookie' src='em1.png' onClick={clickImg1}></img>
          {points1[0]}
          </div>
        <div className='points'>
        <img className='image-class' id='img-cookie' src='em2.png' onClick={clickImg2}></img>
          {points2[0]}
          </div>
        <div className='points'>
        <img className='image-class' id='img-cookie' src='em3.png' onClick={clickImg3}></img>
        {points3[0]}
        </div>
        </div>
    </div>
  );
}

export default App;
