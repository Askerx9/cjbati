import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'


import Layout from "../components/layout"
import SEO from "../components/seo"
import MyMaps from "../components/myMaps"

const ContactPage = () => {

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "contact/bg.jpg" }) {
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
      <SEO title="Contact" />
      <BackgroundImage
        Tag="section"
        className={'section-header section-header--service'}
        fluid={data.background.childImageSharp.fluid}>

        <div className={"container container--margin"}>

          <h1 className={'title'}>
            Contactez-nous !
          </h1>

          <form className={'form'} method="post" action="#">
            <div className={'form_row'}>
                <input type="text" name="lastname" id="lastname" placeholder="Nom" />
                <input type="text" name="firstname" id="firstname" placeholder="Prénom" />
            </div>

            <div className={'form_row'}>
                <input type="email" name="email" id="email" placeholder="E-mail" />
            </div>

            <div className={'form_row'}>
              <p>Quel service vous intéresse-t-il ?</p>
            </div>

            <div className={'form_row form_row_check' }>

              <div className={'form_checkbox'}>
                <input type="checkbox" name="subject_peinture" id="peinture" value="peinture" />
                <label htmlFor="peinture">
                  Peinture
                </label>
              </div>

              <div className={'form_checkbox'}>
                <input type="checkbox" name="subject_renovation" id="renovation" value="renovation" />
                <label htmlFor="renovation">
                  Rénovation
                </label>
              </div>

              <div className={'form_checkbox'}>
                <input type="checkbox" name="subject_sol" id="sol" value="sol" />
                <label htmlFor="sol">
                  Sol et parquet
                </label>
              </div>

              <div className={'form_checkbox'}>
                <input type="checkbox" name="subject_decoration" id="decoration" value="decoration" />
                <label htmlFor="decoration">
                Décoration
                </label>
              </div>

              <div className={'form_checkbox'}>
                <input type="checkbox" name="subject_plafonnage" id="plafonnage" value="plafonnage" />
                <label htmlFor="plafonnage">
                Plafonnage
                </label>
              </div>

            </div>

            <div className={'form_row'}>
                <textarea name="message" id="message" rows="10" placeholder="Message" />
            </div>

            <div className={'form_row form_row_right'}>
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>

      </BackgroundImage>

      <section className={'container container--maps'}>
        <MyMaps />
      </section>

      <section className={'content'}>
        <h2>
          CJBati rénovation
        </h2>
        <p>
        Nous sommes une société de peinture composée de <span className="bold">professionnels</span> de la décoration intérieure et extérieure, de la <span className="bold">rénovation</span> et de la <span className="bold">transformation</span> de bâtiment.
Une équipe <span className="bold">qualifiée</span>, <span className="bold">motivée</span> et <span className="bold">compétente</span> à votre disposition pour concrétiser vos projets de <span className="bold">construction</span>, <span className="bold">d'embellissement</span>, d'<span className="bold">entretien</span> de bâtiment
        </p>
      </section>

    </Layout>
  )
}

export default ContactPage
