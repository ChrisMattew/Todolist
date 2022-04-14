import React, { useState, useEffect, ReactNode } from 'react';
import { css } from 'styled-components';
import RingLoader from 'react-spinners/RingLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

type Props = {
  children: ReactNode;
};

const Loading = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifiContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
          }}
        >
          <RingLoader loading={loading} css={override} size={15} />
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Loading;
