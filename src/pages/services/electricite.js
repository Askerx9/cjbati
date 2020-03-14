import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Slider from "../../components/slider"

const Electricitypage = () => {

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "services/electricity/bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      slider: allFile(filter: {relativeDirectory: {eq: "services/electricity/slider"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                src
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const sliderElements = data.slider.edges.map(element => {
    return (
      <img
        src={element.node.childImageSharp.fluid.src}
        key = {element.node.id}
      />
    )
  });

  return (
    <Layout>
      <SEO title="Électricité" />
      <BackgroundImage
        Tag="section"
        className={'section-header section-header--service'}
        fluid={data.background.childImageSharp.fluid}>

        <div className={"container container--margin"}>

          <h1 className={'title'}>
            Travaux d'électricité
            <br /> <span className={"colored"}>à Bruxelles.</span>
          </h1>
          <p>
            Que ce soit pour une rénovation ou pour une nouvelle construction, notre équipe d’électriciens agréés s’occupent de toutes les parties de votre projet.
          </p>

        </div>
      </BackgroundImage>

      <Slider className={'slider--gallery'}>

        {sliderElements}

      </Slider>

      <section className={'content content--service'}>
        <h2>
          L'avantage CJBati rénovation
        </h2>

        <ul className={'advantage'}>
          <li>
            <h3>
            Installation électrique
            </h3>
            <p>
            Une installation électrique doit être à tout instant fiable de points de vue sécurité et confort.
            </p>
          </li>

          <li>
            <h3>
            Mise en conformité
            </h3>
            <p>
            Suites aux dernières législations, chaque installation électrique doit répondre à certains critères pour pouvoir être considérée comme conforme.
            </p>
          </li>

          <li>
            <h3>
            Tableau électrique
            </h3>
            <p>
            Suites aux dernières législations, chaque installation électrique doit répondre à certains critères pour pouvoir être considérée comme conforme.
            </p>
          </li>

          <li>
            <h3>
            Éclairage
            </h3>
            <p>
            CJBati rénovation met vos idées en lumière et vous permet d’optimiser votre éclairage domestique.
            </p>
          </li>

          <li>
            <h3>
            Vidéophonie - Parlophonie
            </h3>
            <p>
            CJBati rénovation vous installe un kit de sécurité pour votre habitat : parlophonie, vidéophonie, alarmes de tous genre.
            </p>
          </li>

          <li>
            <h3>
            Domotique
            </h3>
            <p>
            CJBati rénovation s’occupe de la domotique chez vous, parce qu’on est quand même bien chez soi !
            </p>
          </li>
        </ul>
      </section>

    </Layout>
  )
}

export default Electricitypage
