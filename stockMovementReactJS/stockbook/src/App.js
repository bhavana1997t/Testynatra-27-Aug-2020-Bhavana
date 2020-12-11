import './App.css';

import NavComp from './component/Navbar/Navybar';
import RenderComponent from './component/SigIn/RenderComponent';
import  Footer from './component/Navbar/Footer';

function App() {
  return (
    <div >
      <NavComp/>
      <RenderComponent/>
     <Footer/> 
    </div>
  ); 
}

export default App;
