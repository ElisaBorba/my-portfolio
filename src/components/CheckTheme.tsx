import { useContext } from 'react';
import sunIcon from '../../public/static/images/sunny.svg';
import moonIcon from '../../public/static/images/moon.svg';
import ThemeContext from '../context/ThemeContext';

export default function CheckTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <form>
      <label className="labelTheme" htmlFor="themePage">
        <input
          type="checkbox"
          id="themePage"
          className="inputTheme"
          checked={ theme === 'dark' }
          onChange={ toggleTheme }
        />
        <img className="sunIcon" src={ sunIcon } alt="sun icon" />
        <img className="moonIcon" src={ moonIcon } alt="moon icon" />
      </label>
    </form>
  );
}
