import React from 'react';
import Whychooseus from './components/Whychooseus';
import Piccard from './components/Picard';
import Update from './components/Update';
import LogoMarquee from './components/LogoMarquee';
import Whychoose from './components/Whychoose';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Whychoose />
      <Whychooseus /> 
      <LogoMarquee />
      <Update />
      <Piccard />
      <Footer />
      
    </div>
  );
}

export default App;
