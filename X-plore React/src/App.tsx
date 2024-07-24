import './App.css';

import { Navbar } from './@/components/magicui/Navbar';
import img from './assets/beams-basic-transparent.png';
import Quote from './@/components/magicui/Quote';
import Footer from './@/components/magicui/Footer';
import Globe from './@/components/magicui/globe';

function App() {
  return (
    <>
    <div
      className="absolute h-screen w-screen overflow-hidden"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition:'bottom',
        backgroundRepeat: 'no-repeat',
        
        transform: 'rotate(360deg)',
      }}
    >
      
      <Globe/>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Quote />
      </main>
    <footer>
      <Footer/>
    </footer>
    </div>
      
    
      </>
  );
}

export default App;
