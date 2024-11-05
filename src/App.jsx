import './App.css'
import "./themes/variables.css";
import Home from './components/pages/home/home'
import { InputDefault } from '@/components/shared/UI/inputs/inputs.jsx';

function App() {
  

  return (
    <>
    < InputDefault placeholder="Текст 1"/>
    < InputDefault placeholder="Текст 2"/>
    < InputDefault placeholder="Текст 3"/>
      <Home />
    </>
  )
}

export default App
