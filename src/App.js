import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';


function App() {

  const [ contagem, setContagem ] = useState( 0 );

  const botaoAction = () => {
    setContagem(contagem +1);
  };

  const botaoMenos = () =>{
    setContagem(contagem -1);
  };

  return (
      <div>
        <h1> My counter </h1>
      <div className="content">
      <div className="count">{contagem} vezes</div>
      <button className="btn" onClick={botaoAction}> Clique para aumentar</button>
      <hr />
      <button className="btn" onClick={botaoMenos}>  Clique para subtrair</button>
    </div>
    </div>
  );
}

export default App;
