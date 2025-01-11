
import { useEffect, useState } from 'react'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

function App() {
 const [showNavbar, setShowNavbar] = useState(window.innerWidth > 750)

 useEffect(() => {
  const handleResize = () => {
    setShowNavbar(window.innerWidth > 750);
  };

  // Attach the resize event listener
  window.addEventListener('resize', handleResize);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []); 

  return (
    <>
    
       <div>{
        showNavbar &&   <Navbar/> 
       }
       {
        !showNavbar &&   <Menu/> 
       }
     
      </div>
    
      
   
    </>
  )
}

export default App
