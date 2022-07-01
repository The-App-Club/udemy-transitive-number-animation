import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';
import '@fontsource/kaushan-script';
import './styles/index.scss';
import {Button} from '@mui/material';

import {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleUp = (e) => {
    setCount((count) => {
      return count + 1;
    });
  };

  const handleDown = (e) => {
    setCount((count) => {
      return count - 1;
    });
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
        <p
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          {count}
        </p>
      </div>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
