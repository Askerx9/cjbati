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
  // const burger = useRef(null);
  const tl = gsap.timeline()

  const handleMouseenter = () => {

      tl.restart()
      tl.set(subMenu.current, {visibility:'visible'}, '#set')
      // tl.set(subMenu.current.children, {
      //   x: -15,
      //   alpha: 0,
      // }, '#set')
      // tl.fromTo(subMenu.current, {alpha: 0}, {alpha: 1})
      tl.to(subMenu.current.children,
        {
          x: 0,
          alpha: 1,
          stagger: .1,
          duration: .3,
        }
      )

  }

  const handleMouseleave = () => {
    tl.reverse()
  }

  // useEffect(() => {
  //   const m = menuEl.current
  //   if(window.innerWidth > 900){
  //     // m.addEventListener('mouseenter', handleMouseenter);
  //     // m.addEventListener('mouseleave', handleMouseleave);
  //     return () => {
  //       m.removeEventListener('mouseenter', () => handleMouseenter);
  //       m.removeEventListener('mouseleave', () => handleMouseleave);
  //     };
  //   }
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
            <li><Link to="/services/peinture">Peinture</Link></li>
            <li><Link to="/services/renovation">Rénovation</Link></li>
            <li><Link to="/services/sol">Sol et parquet</Link></li>
            <li><Link to="/services/decoration">Décoration</Link></li>
            <li><Link to="/services/plafonnage">Plafonnage</Link></li>
            <li><Link to="/services/plomberie">Plomberie</Link></li>
            <li><Link to="/services/electricite">Électricité</Link></li>
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
