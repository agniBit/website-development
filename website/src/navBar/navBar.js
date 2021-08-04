import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navBar.scss'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [nav_up, setNav_up] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function scrollto_div(id){
    var p = document.getElementById(id).offsetTop - 80;
    window.scrollTo({
      top: p,
      behavior: 'smooth',
    });

    setClick(false);
  }

  function MenuItem(props){
    return (
      <li className='nav-item'>
        <button className='nav-links'onClick={()=>scrollto_div(props.section)}>
          {props.name}
        </button>
      </li>
    );
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  window.addEventListener('scroll', function(){
    if (window.scrollY > 0){
      setNav_up(false);
    } else {
      setNav_up(true);
    }
  })

  return (
    <div className={ !click & nav_up ? 'navbar' : 'navbar-up'}>
      <span className='logo'><Link to='/' className='navbar-logo' onClick={closeMobileMenu}>GetWebsite</Link></span>
      <span className='menu-icon' onClick={handleClick}>
        <img src={ !click & nav_up ? './assets/menu_icon_whiet.png' : './assets/menu_icon.png' } alt="menu" />
      </span>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <MenuItem name = 'home' section='mainSection' />
        <MenuItem name = 'l1' section='l1' />
        <MenuItem name = 'l2' section='l2' />
        <MenuItem name = 'l3' section='l3' />
        <MenuItem name = 'l4' section='l4' />
      </ul>
    </div>
  );
}

export default Navbar;