import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useRef, useState, useEffect} from "react"
import gsap from 'gsap'

import Logo from '../images/logo.svg'
import Phone from '../images/pictos/phone.svg'

const Header = ({ siteTitle }) => {

  const [active, setActive] = useState(false)
  const menuEl = useRef(null);
  const subMenu = useRef(null);
  const burger = useRef(null);
  const tl = gsap.timeline()

  const handleMouseenter = () => {
    setTimeout(() => {
      tl.restart()
      tl.set(subMenu.current, {visibility:'visible'}, '#set')
      tl.set(subMenu.current.children, {
        x: -15,
        alpha: 0,
      }, '#set')
      tl.to(subMenu.current.children,
        {
          x: 0,
          alpha: 1,
          stagger: .1,
          duration: .3,
        }
      )
    }, 300);
  }

  const handleMouseleave = () => {
    tl.reverse()
  }

  useEffect(() => {
    if(window.innerWidth > 900){
      menuEl.current.addEventListener('mouseenter', handleMouseenter);
      menuEl.current.addEventListener('mouseleave', handleMouseleave);
      return () => {
        menuEl.current.removeEventListener('mouseenter', () => handleMouseenter);
        menuEl.current.removeEventListener('mouseleave', () => handleMouseleave);
      };
    }
  }, []);

  // const [isSticky, setSticky] = useState(false);
  // const ref = useRef(null);

  // const handleScroll = () => {
  //   if(ref.current !== null){
  //     const refHeight = ref.current.getBoundingClientRect().top + ref.current.getBoundingClientRect().height
  //     setSticky(window.scrollY > refHeight);
  //   }
  // };


  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', () => handleScroll);
  //   };
  // }, []);


  return (
    <header>
      <div className="container">
        <h1 className="title title--logo">
          <Link
            to="/">
            {/* {siteTitle} */}
            <Logo />
          </Link>
        </h1>

        <div id="burger" className={active ? 'is-active' : ''} onClick={() => setActive(!active)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={'nav ' +(active ? 'is-active' : '')}>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li className="nav__el--sub" ref={menuEl}>
              <p>Services</p>
              <ul className={'subnav'} ref={subMenu}>
                <li><Link to="/services/peinture">Peinture</Link></li>
                <li><Link to="/services/renovation">Rénovation</Link></li>
                <li><Link to="/services/sol">Sol et parquet</Link></li>
                <li><Link to="/services/decoration">Décoration</Link></li>
                <li><Link to="/services/plafonnage">Plafonnage</Link></li>
              </ul>
            </li>
            <li className="header__contact">

                <a href="tel:+32471591024" className="link link--tel"> <Phone /> +32 (0) 471 59 10 24</a>
                <Link className="link link--contact" to="/contact">Contact</Link>

            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
