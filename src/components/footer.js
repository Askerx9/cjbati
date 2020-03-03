import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import BackgroundImage from 'gatsby-background-image'



const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "footer_bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="footer"
      className={'footer'}
      fluid={data.background.childImageSharp.fluid}
    >
      <div className={'footer__contact'}>
        <div>
          <p>
            Techniques traditionnelles, modernes et innovantes!<br/>
            <small>Notre expérience et notre professionalisme rejoindront vos exigences en matière de travail soigné.</small>
          </p>
          <Link className={'contact__link'} to="/contact">Contactez-nous</Link>
        </div>
      </div>
      <div className={'container footer__container'}>
        <div className={'about'}>
          <h2>
            À propos
          </h2>
          <p>
            Nous sommes une société de peinture composée de professionnels de la décoration intérieure et extérieure, de la rénovation et de la transformation de bâtiment.
          </p>
          <p>
            Une équipe <span className={'bold'}>qualifiée, motivée</span> et <span className={'bold'}>compétente</span> à votre disposition pour concrétiser vos projets de <span className={'bold'}>construction, d'embellissement, d'entretien</span> de bâtiment
          </p>
        </div>
        <div className={'contact_information'}>
          <h2>
            Coordonnées
          </h2>
          <p>
            CJBati rénovation <br/>
            Nering, 28<br/>
            1650 Beersel
          </p>
          <p>
            GSM: <a href="tel:0471591024">+32 (0) 471 59 10 24</a><br/>
            Email: <a href="mailto:propaintingsprl@gmail.com">propaintingsprl@gmail.com</a><br/>
          </p>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Footer
