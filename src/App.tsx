import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [scrollIndex, setScrollIndex] = useState(0); 
  // to keep track of which section is currently visible based on the scrollIndex
  // sort of the counter for the sections 

  const sections = ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'];

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0 && scrollIndex < sections.length - 1) {
      setScrollIndex((prevIndex) => prevIndex + 1); // scroll down 
    } else if (e.deltaY < 0 && scrollIndex > 0) {
      setScrollIndex((prevIndex) => prevIndex - 1); // scroll up
    }
  };

  // hook 
  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [scrollIndex]);

  return (
    <div className="App">
      <div
        className="sections-wrapper"
        style={{
          transform: `translateY(-${scrollIndex * 100}vh)`,
        }}
      >
        {sections.map((section, index) => (
          <div key={index} className={`section ${section}`}>
            <h1>{`Section ${index + 1}`}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
