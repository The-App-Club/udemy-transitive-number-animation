import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';
import '@fontsource/kaushan-script';
import './styles/index.scss';
import {Button} from '@mui/material';

import {useState} from 'react';

import {usePrevious} from './hooks/usePrevious';

import {useCounter} from './hooks/useCounter';

import {Number} from './components/Number';

const App = () => {
  const [tik, setTik] = useState(new Date());
  const [isUp, setIsUp] = useState(false);
  const [count, {increment, decrement}] = useCounter();
  const lastValue = usePrevious(count);

  const handleUp = (e) => {
    increment();
    setTik(new Date());
    setIsUp(true);
    console.log(`handleUp`, lastValue, count);
  };

  const handleDown = (e) => {
    decrement();
    setTik(new Date());
    setIsUp(false);
    console.log(`handleDown`, lastValue, count);
  };

  return (
    <div
      className={css`
        display: grid;
        place-items: center;
        min-height: 100vh;
        width: 100%;
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 1rem;
          /* border: 1px solid; */
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
          `}
        >
          <Button variant={'outlined'} onClick={handleUp}>
            Up
          </Button>
          <Button variant={'outlined'} onClick={handleDown}>
            Down
          </Button>
        </div>
        <Number
          lastValue={lastValue}
          currentValue={count}
          isUp={isUp}
          tik={tik}
        />
        {/* <p
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          {count}
        </p> */}
      </div>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
