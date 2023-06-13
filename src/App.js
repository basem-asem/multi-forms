import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageDesktop from './ImageDesktop';
import Firstpage from './firstpage';
import Secondpage from './secondpage';
import Thirdpage from './Thirdpage';
import Forthpage from './Forthpage';
import Thanks from './Thanks';

function App() {
  const [selectedPath, setSelectedPath] = useState(true);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App md:bg-white flex justify-center md:m-5 md:p-3 rounded-lg md:flex-row flex-col">
        <ImageDesktop />
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/second" element={<Secondpage  setSelectedPath={setSelectedPath} selectedPath={selectedPath} />} />
          <Route path="/third" element={<Thirdpage selectedPath={selectedPath} />} />
          <Route path="/forth" element={<Forthpage selectedPath={selectedPath} />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
