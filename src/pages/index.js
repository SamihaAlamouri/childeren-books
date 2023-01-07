import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Book from "../components/book"
import {
  featuredContainer,
  subtitle,
  books,
  Homecontainer,
  text,
  homePicture,
  title,
} from "../page.module.css"

const IndexPage = ({
  data: {
    wpPage: { homeFields },
  },
}) => {

  const image = getImage(homeFields.picture.localFile)
  return (
    <Layout>
      <section className={Homecontainer}>
      <div>
          <GatsbyImage
            className={homePicture}
            image={image}
            alt={homeFields.picture.altText}
          />
        </div> 
       <article className={text}>
       
        <h1 className={title}>{homeFields.title}</h1>
        <div
            dangerouslySetInnerHTML={{
              __html: homeFields.description,
            }}
          />
      </article> 
        
       
      </section>
      <section className={featuredContainer}>
      <h2 className={subtitle}>Featured Books</h2>
      <p>
      You might remember reading popular Fairy tales titles like Snow White and the Seven Dwarfs, or Repaunzel when you were a child, they all have been passed down for generations. Buy a new edition with luxury illustrations to brighten up your child’s bookshelf.
      </p>
      <div className={books}>
        {homeFields.featuredBooks.map(book => {
          return <Book slug={`books/${book.slug}`} key={book.id} book={book} />
        })}
      </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query {
    wpPage(slug: {eq: "home"}) {
      homeFields {
        description
        title
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        featuredBooks {
          ... on WpBook {
            id
            slug
            bookMeta {
              title
              price
              picture {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
       
      }
    }
  }
`
export default IndexPage