import './Navbar.css';
import GithubIcon from '../utils/GithubIcon';
import NavbarTexts from './NavbarTexts';
import navbarTexts from '../utils/navbarTexts';
import Searchbar from './Searchbar';

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className='navbar-left'>
        <GithubIcon />
        <NavbarTexts info={navbarTexts} />
      </div>
      <div className='navbar-right'>
        <Searchbar />
      </div>
    </nav>
  );
};
