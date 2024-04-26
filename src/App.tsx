import { Element } from 'react-scroll';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Stacks from './components/Stacks';
import ThemeContext from './context/ThemeContext';

function App() {
  const [pageTheme, setPageTheme] = useState<'light' | 'dark'>('light');

  function toggleTheme() {
    const newTheme = pageTheme === 'light' ? 'dark' : 'light';
    setPageTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setPageTheme(savedTheme as 'light' | 'dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: pageTheme, toggleTheme }}>
      <div className={pageTheme}>
        <Header />
        <Element name="home">
          <Home />
        </Element>
        <Element name="projetos">
          <Projetos />
        </Element>
        <Element name="stacks">
          <Stacks />
        </Element>
        <Element name="contato">
          <Contato />
        </Element>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
