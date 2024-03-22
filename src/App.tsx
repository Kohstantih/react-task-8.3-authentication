import { useEffect, useState } from 'react';
import ToolBar from './components/ToolBar/ToolBar';
import News from './components/News/News';
import { TLogIn } from './types/TLogIn';
import { TLogOut } from './types/TLogOut';
import './App.css';

function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem('token')) setToken(sessionStorage.getItem('token'));
  }, []);  

  const logOut: TLogOut = () => {
    setToken(null);
    sessionStorage.removeItem('token');
  };

  const logIn: TLogIn = (data) => {
    const body = JSON.stringify(data);

    fetch(import.meta.env.VITE_APP_AUTH, {
      method: 'POST',
      body
    }).then((response) => response.json()).then((dataToken) => {
      setToken(dataToken.token);
      sessionStorage.setItem('token', dataToken.token);
    });
  }

  return (
    <>
      <ToolBar token={token} logIn={logIn} logOut={logOut} />
      {token && <News token={token} logOut={logOut} />}
    </>
  )
}

export default App
