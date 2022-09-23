import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  {Header} from './components/Header/Index'
import { Footer } from './components/Footer/Index'
import { Pokemon } from './components/Pokemon/Index'
import { Money } from './components/Money/Index'
import './App.css'


type classe = {
  back: string
}

function App() {
  const [pat, setPat] = React.useState('');
  const [background, setBackground] = React.useState<string>('bodyPoke');

  React.useEffect(() => {
    setInterval(() => {
      setPat(window.location.pathname);
    }, 500);

    if(pat === '/'){
      setBackground('bodyPoke');
    } else if(pat === '/money'){
      setBackground('bodyMoney');
    }
  }, [window.location.pathname])


  return (
      <div className={background}>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Pokemon titulo="Pokedex" />} />
            <Route
              path="money"
              element={<Money  titulo="Conversor de moedas"/>}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
