import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar1 from './Components/Navbar/Navbar1';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
