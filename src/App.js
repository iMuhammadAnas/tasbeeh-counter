import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incrementNumber, decrementNumber } from './actions/index'

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Tasbeeh counter</h1>
          <h4>using React and Redux</h4>
          <div className="quantity">
            <a className="quantity__minus" title="Decrement" onClick={ () => dispatch(decrementNumber()) }><span>-</span></a>
            <input name="quantity" type="text" className="quantity__input" value={myState} />
            <a className="quantity__plus" title="Increment" onClick={ () => dispatch(incrementNumber()) }><span>+</span></a>
          </div>
        </div>
        <div className="water-mark">Design by <a href="https://github.com/iMuhammadAnas" target="_blank">MUHAMMAD ANAS</a><span>❤</span></div>
      </div>
    </>
  )
}

export default App
