import { useState } from 'react';
import './App.css';
import { DdIcon, InfoIcon, TimerIcon } from './Icon';

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        {/* <TimerIcon className='icon icon_timer' /> */}
        {/* <StarIcon className='icon icon_star' /> */}
        <InfoIcon className='icon icon_star' />
        <DdIcon className='icon icon_star' />
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>

      <button onClick={() => setShow(!show)}>show</button>

      {show && (
        <div>
          <TimerIcon />
        </div>
      )}
    </>
  );
}

export default App;
