// import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';


const Slider = (props) => {

  const params = {
    WrapperEl: 'ul',
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.swiper-pagination',
      // type: 'fraction',
      clickable: true,

    },
    loop: true,
    spaceBetween: 30
  }


  return (
    <section className={'slider ' + props.className}>
      <Swiper {...params}>
        {props.children}
      </Swiper>
    </section>
  )
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Slider
