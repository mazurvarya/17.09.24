import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import "./themes/variables.css";
import Profile from '@/components/pages/profile/profile.jsx';
import Main from '@/components/pages/main/main.jsx';
import Error from '@/components/pages/404/404.jsx';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/" element={<Main />}/>
        <Route path="/404" element={<Error />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
