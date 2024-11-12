import './App.css'
import "./themes/variables.css";
import Home from './components/pages/home/home'
import { InputDefault, InputPassword } from '@/components/shared/UI/inputs/inputs.jsx';
import { TextArea } from '@/components/shared/UI/TextArea/textArea.jsx';

function App() {
  

  return (
    <>
    < InputDefault placeholder="Текст 1"/>
    < InputDefault placeholder="Текст 2"/>
    < InputDefault placeholder="Текст 3"/>
    <InputPassword />
    <TextArea bgColor="red" placeholder="введите что-нибудь"/>
    <TextArea bgColor="green" placeholder="введите что-нибудь" Textsize="40px"/>
      <Home />
    </>
  )
}

export default App
