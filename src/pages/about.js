import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Homecontainer,
  text,
  title,
  aboutPicture
} from "../page.module.css"

const AboutPage = ({
  data: {
    wpPage: {
      aboutFields,
    },
  },
}) => {
  const image = getImage(aboutFields.picture.localFile)
  return (
    <Layout>
      <section className={Homecontainer}>
        <GatsbyImage 
          className={aboutPicture}
          image={image}
          alt={aboutFields.picture.altText} 
        />
        <article className={text}>
          <h2 className={title}>{aboutFields.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: aboutFields.description,
            }}
          />
        </article>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query {
    wpPage(slug: {eq: "about"}) {
      aboutFields {
        title
        description
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
}
`
export default AboutPage