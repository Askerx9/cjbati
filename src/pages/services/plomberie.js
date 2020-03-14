import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Slider from "../../components/slider"

const PlumbingPage = () => {

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "services/plumbing/bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      slider: allFile(filter: {relativeDirectory: {eq: "services/plumbing/slider"}}) {
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
      <SEO title="Plomberie" />
      <BackgroundImage
        Tag="section"
        className={'section-header section-header--service'}
        fluid={data.background.childImageSharp.fluid}>

        <div className={"container container--margin"}>

          <h1 className={'title'}>
            Entreprise de plomberie
            <br /> <span className={"colored"}>à Bruxelles.</span>
          </h1>
          <p>
          concevoir et réaliser votre salle de bains et votre plomberie. Dans le cadre d’une nouvelle construction ou d’une rénovation, nous analysons avec vous votre projet.
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
            Dépannage en plomberie
            </h3>
            <p>
            Les installations en plomberie peuvent connaître des pannes : fuite de la plomberie, engorgement, ...

            </p>
          </li>

          <li>
            <h3>
            Installation en plomberie

            </h3>
            <p>
            Installation en plomberie et chauffage, chaque prestation est effectuée avec soin.


            </p>
          </li>

          <li>
            <h3>
            Création de salle de bains

            </h3>
            <p>
            Dans le cadre d’une rénovation ou d’une construction, CJBati rénovation  procède à l’installation de salle de bains suivant le projet du client : lavabo, sanitaires, douche, baignoire, sans oublier la robinetterie.

            </p>
          </li>

          <li>
            <h3>
            Entretien de votre installation de chauffage

            </h3>
            <p>
            Afin de maintenir votre chaudière aux normes et en bon état de fonctionnement.
            </p>
          </li>

          <li>
            <h3>
            Débouchage Canalisations
            </h3>
            <p>
            Les travaux inclus  aussi le débouchage de WC bouché, le dégorgement de toilette obstruée,
            </p>
          </li>
        </ul>
      </section>

    </Layout>
  )
}

export default PlumbingPage
