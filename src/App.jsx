import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import "./themes/variables.css";
import Profile from '@/components/pages/profile/profile.jsx';
import Main from '@/components/pages/main/main.jsx';
import CalendarPage from '@/components/pages/calendar/calendar.jsx';
import NotFound404 from '@/components/pages/404/404.jsx';
import Login from '@/components/pages/login/login.jsx';
import { TodoPage } from '@/components/pages/TodoPage/TodoPage.jsx';


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/" element={<Main />}/>
        <Route path="/calendar" element={<CalendarPage />}/>
        <Route path="*" element={<NotFound404 />}/>
        <Route path="/todo/:id/:title" element={<TodoPage />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
