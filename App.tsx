import * as React from 'react';
import './style.css';
import {useState} from 'react'

export default function App() {
  const [state, setState] = useState({count: 1, theme: 'light'})

  const count = state.count;
  const theme = state.theme;

 function handleIncrement() {
    setState((prevState: any) => {
      return {...prevState, count: state.count + 1}
    })
  }

  function handleChangeTheme() {
    if(theme === 'light') {
      setState(prevState => {
        return {...prevState, theme: 'dark'}
      })
    } else {
      setState(prevState => {
        return {...prevState, theme: 'light'}
      })
    }

  }

function handleDecrement() {
  setState((prevState) => {
    return {...prevState, count: state.count - 1}
  })
}
  return (
    <div className={(theme === 'light' ? 'bg-light' : 'bg-dark')} style={{height: '100vh'}}>
      <button className='btn btn-outline-danger' onClick={handleDecrement}>-</button>
      <span className={theme ==="light" ? 'text-dark': 'text-white'}>{count} {theme}</span>
      <button className='btn btn-outline-success' onClick={handleIncrement}>+</button>
      <br />
      <br />
      <button className={'btn ' + (theme === 'blue' ? 'btn-secondary': 'btn-primary')}  onClick={handleChangeTheme}>{theme=== 'light'? 'Light Theme': 'Dark Theme'}</button>
    </div>
  );
}
