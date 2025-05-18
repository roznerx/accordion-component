import './Navbar.css';
import ChevronIcon from '../utils/ChevronIcon';

export default function NavbarTexts({ info }) {
  return (
    <div className='navbar-texts'>
      {
        info.map((i, index) => {
          return (
            <div key={index} className='navbar-text-container'>
              <h4>{i.title}</h4>
              { i.chevron && <ChevronIcon />}
            </div>
          )
        })
      }
    </div>
  );
};
