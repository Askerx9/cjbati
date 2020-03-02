import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Slider from "../../components/slider"

const SolPage = () => {

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "services/ground/bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      slider: allFile(filter: {relativeDirectory: {eq: "services/ground/slider"}}) {
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
      <SEO title="Sol et Parquet" />
      <BackgroundImage
        Tag="section"
        className={'section-header section-header--service'}
        fluid={data.background.childImageSharp.fluid}>

        <div className={"container container--margin"}>

          <h1 className={'title'}>
            Revêtement de sol
            <br /> <span className={"colored"}>et pose de parquet</span>
          </h1>
          <p>
          Vous désirez entamer des travaux de revêtement de sol ou de pose de parquet ? Vous cherchez un spécialiste digne de confiance pour vos sols ?
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
            Vynille
            </h3>
            <p>
            Vynille pour sa grande facilité d'entretien.
            </p>
          </li>

          <li>
            <h3>
            Parquet
            </h3>
            <p>
            Pose de parquet, plaintes en bois de toute essence
            </p>
          </li>

          <li>
            <h3>
            Tapis plein
            </h3>
            <p>
            Pose de tapis plein parmis un grand choix de coloris et textures
            </p>
          </li>

          <li>
            <h3>
            Autres revêtements
            </h3>
            <p>
            Sur collection ou parmi les offres de nos partenaires.
            </p>
          </li>

          <li>
            <h3>
            Grand nombre de déclinaisons
            </h3>
            <p>
            Un grand nombre de déclinaisons qui offriront cohérence et harmonie entre les différentes matières.
            </p>
          </li>
        </ul>
      </section>

    </Layout>
  )
}

export default SolPage
