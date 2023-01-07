import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Homecontainer,
  text,
  title,
  aboutPicture,
  form
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
      <section className={form}>
        <form name="contact" method="POST" data-netlify="true">
          <h2>Contact us</h2>
          <label>Your Name:</label>
          <input type="text" name="name" required={true} />
          <label>Your Email:</label>
          <input type="email" name="email" required={true} />
          <label>Message:</label>
          <textarea name="message" required={true}></textarea>
          <button type="submit">Send</button>
        </form>
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