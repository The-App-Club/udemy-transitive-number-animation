import {css} from '@emotion/css';
import {useRef, useEffect} from 'react';

const Number = ({lastValue, currentValue, isUp, tik}) => {
  const currentDomRef = useRef(null);
  const previousDomRef = useRef(null);

  useEffect(() => {
    const currentDom = currentDomRef.current;
    const previousDom = previousDomRef.current;

    const a = currentDom.animate(
      [
        {
          opacity: 0,
          transform: `translateY(${isUp ? '60px' : '-60px'})`,
        },
        {
          opacity: 1,
          transform: `translateY(${isUp ? '0px' : '0px'})`,
        },
      ],
      {
        duration: 300,
        fill: `both`,
      }
    );

    const b = previousDom.animate(
      [
        {
          opacity: 1,
          transform: `translateY(${isUp ? '0px' : '0px'})`,
        },
        {
          opacity: 0,
          transform: `translateY(${isUp ? '-60px' : '60px'})`,
        },
      ],
      {
        duration: 300,
        fill: `both`,
      }
    );

    return () => {
      a.cancel();
      b.cancel();
    };
  }, [tik]);

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        position: relative;
      `}
    >
      <p
        ref={previousDomRef}
        className={css`
          position: absolute;
          top: 1rem;
        `}
      >
        {lastValue}
      </p>
      <p
        ref={currentDomRef}
        className={css`
          position: absolute;
          top: 1rem;
        `}
      >
        {currentValue}
      </p>
    </div>
  );
};

export {Number};
