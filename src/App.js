import { useState } from 'react';
import './App.css';

function App() {

  const [points1, setPoints1] = useState(0)
  const [points2, setPoints2] = useState(0)
  const [points3, setPoints3] = useState(0)

  const i = 1
  
  

  function clickImg1(){
    setPoints1(points1+i)
    }
  function clickImg2(){
    setPoints2(points2+i)
    }
  function clickImg3(){
    setPoints3(points3+i)
    }
  
    
  return (
    <div className='App'>
      
      
      
      <div className='text'>Кликай на эмоции</div>
      
       <div className='points-block'>
        <div className='points'>
        <img className='image-class' id='img-cookie' src='em1.png' onClick={clickImg1}></img>
          {points1}
          </div>
        <div className='points'>
        <img className='image-class' id='img-cookie' src='em2.png' onClick={clickImg2}></img>
          {points2}
          </div>
        <div className='points'>
        <img className='image-class' id='img-cookie' src='em3.png' onClick={clickImg3}></img>
        {points3}
        </div>
        </div>
    </div>
  );
}

export default App;
