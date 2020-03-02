import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Slider from "../../components/slider"

const DecorationPage = () => {

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "services/decoration/bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      slider: allFile(filter: {relativeDirectory: {eq: "services/decoration/slider"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500, quality: 80) {
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
      <Img
        fluid={element.node.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        loading="eager"
        key = {element.node.id}
      />
    )
  });

  return (
    <Layout>
      <SEO title="Décoration" />
      <BackgroundImage
        Tag="section"
        className={'section-header section-header--service'}
        fluid={data.background.childImageSharp.fluid}>

        <div className={"container container--margin"}>

          <h1 className={'title'}>
            Décoration
            <br /> <span className={"colored"}>et aménagement d'intérieur</span>
          </h1>
          <p>
          La décoration donne une âme à votre intérieur. Lorsqu'elle est réussie, elle procure un sentiment de bien-être, d'intimité, de sécurité.
          </p>

        </div>
      </BackgroundImage>

      <Slider className={'slider--gallery'}>

        {sliderElements}

      </Slider>

      <section className={'content content--service'}>
        <h2>
          L'avantage CJ bati
        </h2>

        <ul className={'advantage'}>
          <li>
            <h3>
            Tapissage - détapissage
            </h3>
            <p>
            Nous effectuons ces travaux en toute propreté, maîtrise et précision. Excellente qualité de finition.
            </p>
          </li>

          <li>
            <h3>
            Pose de frises et revêtemtns muraux
            </h3>
            <p>
            Papiers peints, voile de verre, vinyls, tissus, etc...
            </p>
          </li>

          <li>
            <h3>
            Pose de revêtement de sol.
            </h3>
            <p>
            Placement de parquet véritable, de parquet flottant, vinyl, lino, tous types de moquettes, etc.
            </p>
          </li>

          <li>
            <h3>
            Peinture intérieure et extérieure.
            </h3>
            <p>
            Peinture traditionnelle, moderne ou d'antan, design et tendances actuelles.
            </p>
          </li>

          <li>
            <h3>
            Traitement des surfaces
            </h3>
            <p>
            Traitement des surfaces en briques, béton, bois, ... Pose de stuc, de moulures, de décorations diverses.
            </p>
          </li>
          <li>
            <h3>
            Décoration d' entreprise, commerce ou restaurant
            </h3>
            <p>
            Certainement un des critères importants qui contribueront à votre succès commercial.
            </p>
          </li>
        </ul>
      </section>

    </Layout>
  )
}

export default DecorationPage
