import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';
import '@fontsource/kaushan-script';
import './styles/index.scss';
import {Button} from '@mui/material';

const App = () => {
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
          border: 1px solid;
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
          <Button variant={'outlined'}>Up</Button>
          <Button variant={'outlined'}>Down</Button>
        </div>
        <p
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          0
        </p>
      </div>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
