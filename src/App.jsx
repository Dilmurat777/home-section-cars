import { useEffect, useState } from 'react';
import './App.css';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';

const App = () => {
  const heroData = [
    { text1: 'Dive into', text2: 'what you love' },
    { text1: 'Indulge', text2: 'your passions' },
    { text1: 'Give in to', text2: 'your passions' },
  ];
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {return count === 2 ? 0 : count + 1})
    }, 3000)
  }, [])
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        setHeroCount={setHeroCount}
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroCount={heroCount}
      />
    </div>
  );
};

export default App;
