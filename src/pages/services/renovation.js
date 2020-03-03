import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Slider from "../../components/slider"

const RenovationPage = () => {

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "services/renovation/bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      slider: allFile(filter: {relativeDirectory: {eq: "services/renovation/slider"}}) {
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
      <SEO title="Rénovation" />
      <BackgroundImage
        Tag="section"
        className={'section-header section-header--service'}
        fluid={data.background.childImageSharp.fluid}>

        <div className={"container container--margin"}>

          <h1 className={'title'}>
            Entreprise de rénovation
            <br /> <span className={"colored"}>et remise en état.</span>
          </h1>
          <p>
          Le temps, la météo, l'usure ou les petits incidents ont eu raison d'une partie de votre immeuble ? Vous souhaitez un service professionnel pour la rénovation de vos pièces, locaux divers, façades,...?
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
            Peinture
            </h3>
            <p>
            Peinture murale, peinture porte et chassis, peinture de façade.
            </p>
          </li>

          <li>
            <h3>
            Revêtements
            </h3>
            <p>
            Revêtements de sols, revêtements muraux, tapissage, plafonnage.
            </p>
          </li>

          <li>
            <h3>
            Humidité
            </h3>
            <p>
            Lutte contre l'humidité.
            </p>
          </li>

          <li>
            <h3>
            Travaux intérieurs et extérieurs
            </h3>
            <p>
            De la cave au grenier, du simple au complexe. Travaux intérieurs et extérieurs.
            </p>
          </li>

          <li>
            <h3>
            Rénovation
            </h3>
            <p>
            Rénovation de façade, transformations,...
            </p>
          </li>

          <li>
            <h3>
            Cloisons
            </h3>
            <p>
            Pose de cloisons et de faux plafonds.
            </p>
          </li>

          <li>
            <h3>
            Démontage et évacuation
            </h3>
            <p>
            Plateaux de bureau, magasins, ateliers, etc...
            </p>
          </li>
        </ul>
      </section>

    </Layout>
  )
}

export default RenovationPage
