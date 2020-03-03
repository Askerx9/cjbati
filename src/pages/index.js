import React, {useEffect} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import gsap from 'gsap'
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"

import FacebookSVG from '../images/pictos/facebook-logo.svg'
import InstaSVG from '../images/pictos/instagram.svg'
import EmailSVG from '../images/pictos/email.svg'


const IndexPage = () => {

  gsap.registerPlugin(CSSRulePlugin, ScrollToPlugin);

  useEffect(() => {
    const gradient = CSSRulePlugin.getRule(".section-header--index > div::after");

    console.log(gradient)

    gsap.fromTo(gradient, {
      cssRule: {
        backgroundImage: "radial-gradient(0% 0% at 86.5% 29.74%, rgba(0, 0, 0, 0) 0%, #000000 100%)"
      }
    },{
      cssRule:{
        backgroundImage: "radial-gradient(293.86% 293.83% at 86.5% 29.74%, rgba(0, 0, 0, 0) 0%, #000000 100%)"
      },
      duration: 4,
      delay: 1.5
    })
  })

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "home_header_bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      boss_on_site: file(relativePath: { eq: "advantage/boss_on_site.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      flawless_finishes: file(relativePath: { eq: "advantage/flawless_finishes.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      free_quote: file(relativePath: { eq: "advantage/free_quote.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        Tag="section"
        className={'section-header section-header--index'}
        fluid={data.background.childImageSharp.fluid}>

        <div>
          <div className={"container container--margin"}>

          <h1 className={'title'}>
            CJBati rénovation,<br></br>
            entreprise de peinture <br /> <span className={"colored"}>et décoration</span>
          </h1>
          <p>
            Quand on ne peut pas changer le monde il faut changer le décor...
          </p>

          <div className={"header__footer"}>
            <div className={'scroll'} onClick={() => gsap.to(window, {duration: 2, scrollTo: {y: ".swiper-container", offsetY: 50}})}></div>
            <ul className={"social"}>
              <li><a href="http://google.be"><FacebookSVG /></a></li>
              <li><a href="http://google.be"><InstaSVG /></a></li>
              <li><a href="http://google.be"><EmailSVG /></a></li>
            </ul>
          </div>

          </div>
        </div>

      </BackgroundImage>

      <Slider>
        <li className={'swiper-slide'}>
          <p className={'slider__text'}>
            Vous avez besoin d'un <span className={"bold"}>spécialiste</span> en revêtement de sol
            et parquet, CJBati rénovation saura répondre à vos <span className={"bold"}>exigences</span> en
            matière de travail soigné!
          </p>
          <div className="align-right"><Link className={'slider__link'} to="/">Rénovation</Link></div>
        </li>
        <li className={'swiper-slide'}>
          <p className={'slider__text'}>
            L'équipe de CJBati rénovation s'occupe de tous vos travaux d'intérieur
            mais aussi du nettoyage et de la peinture des façades.
          </p>
        </li>
        <li className={'swiper-slide'}>
          <p className={'slider__text'}>
          CJBati rénovation réalise une étude de votre chantier,
          écoute vos envies et réalise vos désirs !
          </p>
        </li>
      </Slider>

      <section className={'content'}>
        <h2>
          L'avantage de travailler<br />avec CJBati rénovation
        </h2>
        <p>
          Pour répondre entièrement à <span className={'bold'}>vos besoins</span>,
          nous serons à même de vous apporter <span className={'bold'}>une solution </span>
          fiable avec des produits de qualité et une main d'oeuvre dynamique !
        </p>

        <ul className={'grid'}>
          <BackgroundImage
            Tag="li"
            className={'grid__el'}
            fluid={data.flawless_finishes.childImageSharp.fluid}
          >
            <div>
              <h3>
                Finitions irréprochables
              </h3>
              <p>
                Notre expérience et notre professionalisme rejoindront vos exigences en matière
                de travail soigné.
              </p>
            </div>
          </BackgroundImage>

          <BackgroundImage
            Tag="li"
            className={'grid__el'}
            fluid={data.free_quote.childImageSharp.fluid}
          >
            <div>
              <h3>
                Devis gratuit et compétitif
              </h3>
              <p>
                CJBati rénovation se penche sur l'étude de votre projet gratuitement et
                s'engage à vous remettre un devis compétitif.
              </p>
            </div>
          </BackgroundImage>

          <BackgroundImage
            Tag="li"
            className={'grid__el'}
            fluid={data.boss_on_site.childImageSharp.fluid}
          >
            <div>
              <h3>
                Patron sur le chantier
              </h3>
              <p>
                CJBati rénovation met un point d'honneur à être sur tous les chantiers,
                ansi vous avez un seul interlocuteur.
              </p>
            </div>
          </BackgroundImage>

        </ul>
      </section>

    </Layout>
  )
}

export default IndexPage
