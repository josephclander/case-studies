import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import NotFound from './components/NotFound';
import Secret from './components/Secret';
import Navbar from './components/Navbar';

import { Route, Routes, useNavigate } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secret" element={<Secret navigate={useNavigate()} />} />
          <Route path="/signup" element={<SignUp navigate={useNavigate()} />} />
          <Route path="/signin" element={<SignIn navigate={useNavigate()} />} />
          <Route path="/signout" element={<SignOut navigate={useNavigate()} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
