import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(
      () => {
        setLoading(true);
      },
      0,
      setLoading(false)
    );
  }, []);

  return (
    <div>
      {loading && (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          ...Loading
        </div>
      )}
    </div>
  );
};

export default Loading;
