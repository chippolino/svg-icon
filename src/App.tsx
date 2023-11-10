import { useState } from 'react';
import './App.css';
import { BigCupIcon, BlaIcon, DdIcon, Icon, InfoIcon } from './Icon';

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <InfoIcon className='icon icon_star' />
        <DdIcon className='icon icon_star' />
        <BigCupIcon />
        <div style={{ color: 'red' }}>
          <BlaIcon />
          <Icon iconName='info' />
        </div>
      </div>

      <button onClick={() => setShow(!show)}>show</button>

      {show && (
        <div>
          <Icon iconName='bla' />
        </div>
      )}
    </>
  );
}

export default App;
