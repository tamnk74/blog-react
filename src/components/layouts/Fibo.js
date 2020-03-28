import React, { useState, useEffect } from 'react';

const style = {
  width: '20px',
};

export default function Fibo() {
  const [index, setIndex] = useState(1);
  const calculateFibo = (index) => {
    if(index <= 0 || index>= 300) {
      return Infinity;
    }
    let a = 0;
    let b = 1;
    let i = 0;
    let c = 1;
    while (i < index - 1) {
      c = a + b;
      a = b;
      b = c;
      i++;
    }
    return c;
  };
  useEffect(() => {
  })
  return (
    <div className="input-group">
      <input type="text" className="form-control" onChange={e => setIndex(e.target.value < 300 ? e.target.value : 300)} value={index} style={style}/>
      <div className="input-group-append">
        <span className="input-group-text">{calculateFibo(index)}</span>
      </div>
    </div>
  )

}