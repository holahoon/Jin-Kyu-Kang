import React, { useState, useEffect } from 'react';

function ComingSoon() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const textTopPosition = {
    marginTop: height * 0.47,
  };

  return (
    <div style={textTopPosition} className='coming-soon'>
      <h2>coming soon</h2>
    </div>
  );
}

export default ComingSoon;
