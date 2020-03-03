import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Slider from "../../components/slider"

const PeinturePage = () => {

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "services/painting/bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      slider: allFile(filter: {relativeDirectory: {eq: "services/painting/slider"}}) {
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
      // <Img
      //   fluid={element.node.childImageSharp.fluid}
      //   objectFit="cover"
      //   objectPosition="50% 50%"
      //   loading="eager"
      //   key = {element.node.id}
      // />
      <img
        src={element.node.childImageSharp.fluid.src}
        key = {element.node.id}
      />
    )
  });

  return (
    <Layout>
      <SEO title="Peinture" />
      <BackgroundImage
        Tag="section"
        className={'section-header section-header--service'}
        fluid={data.background.childImageSharp.fluid}>

        <div className={"container container--margin"}>

          <h1 className={'title'}>
            Entreprise de peinture
            <br /> <span className={"colored"}>Peintre en bâtiment en Belgique</span>
          </h1>
          <p>
            Notre entreprise de peinture, de rénovation et décoration est spécialisée dans les travaux de peinture intérieure et extérieure à Bruxelles tout le Brabant wallon et le brabant flamand.
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
            Humidité
            </h3>
            <p>
            Lutte contre l'humidité.
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
            Revêtements
            </h3>
            <p>
            Revêtements de sols, revêtements muraux, tapissage, plafonnage.
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

        </ul>
      </section>

    </Layout>
  )
}

export default PeinturePage
