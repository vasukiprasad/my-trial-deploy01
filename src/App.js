import React from 'react';
import SampleComp from './sampleComp';

function App() {
  const value = 'World';
  return (
    <>
  <div>Hello {value}</div>
  <SampleComp/>
  </>
  );
}

export default App;
