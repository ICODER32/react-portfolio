import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HashRouter basename='/'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/work' element={<Portfolio />} />
          </Routes>
        </HashRouter>
      </BrowserRouter>

      {/* <!-- Contact me --> */}
      {/* <!--footer contact and link--> */}


    </div>
  );
}

export default App;
