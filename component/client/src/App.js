import React from 'react';
import './App.css';
import './compoments/Head/Head.css';
import './compoments/Menu/Menu.css';
import './compoments/Content/Content.css';
import './compoments/Footer/Footer.css';
import{Head} from './compoments/Head/Head'
import{Menu} from './compoments/Menu/Menu'
import{Content} from './compoments/Content/Content'
import{Footer} from './compoments/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Head/>
      <Menu/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
