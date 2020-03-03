import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Slider from "../../components/slider"

const PlafonnagePage = () => {

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "services/ceiling/bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      slider: allFile(filter: {relativeDirectory: {eq: "services/ceiling/slider"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500, quality: 80) {
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
      <SEO title="Plafonnage" />
      <BackgroundImage
        Tag="section"
        className={'section-header section-header--service'}
        fluid={data.background.childImageSharp.fluid}>

        <div className={"container container--margin"}>

          <h1 className={'title'}>
          Entreprise de plafonnage
            <br /> <span className={"colored"}>en Belgique</span>
          </h1>
          <p>
          Plafonner, ou même placer des plaques de plâtres, peut s'avérer être un exercice difficile. Pour obtenir un résultat pro, il faut avoir un véritable coup de patte et une certaine expérience en la matière.
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
            Travaux sur nouveaux murs
            </h3>
            <p>
            Maison, magasins et tous types de locaux commerciaux, bureaux,...
            </p>
          </li>

          <li>
            <h3>
            Murs anciens et à rénover
            </h3>
            <p>
            Blocs de béton, bloc Ytong, terre cuite, plafonds et faux-plafonds.
            </p>
          </li>

          <li>
            <h3>
            magasins et tous types de locaux commerciaux
            </h3>
            <p>
            Blocs de béton, bloc Ytong, terre cuite, plafonds et faux-plafonds.
            </p>
          </li>

          <li>
            <h3>
            Bureaux
            </h3>
            <p>
            Sur nouveaux murs et nouvelles constructions, murs anciens et à rénover.
            </p>
          </li>

          <li>
            <h3>
            Travaux sur nouvelle construction
            </h3>
            <p>
            Aménagement de grenier, enduisage, lissage, etc.
            </p>
          </li>
          <li>
            <h3>
            Façades et murs extérieurs
            </h3>
            <p>
            Blocs de béton, bloc Ytong, terre cuite.
            </p>
          </li>
        </ul>
      </section>

    </Layout>
  )
}

export default PlafonnagePage
