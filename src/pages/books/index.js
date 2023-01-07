import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Book from '../../components/book'
import {
  books,
  booksListTitle,
} from "../../page.module.css"
const BooksPage = ({
  data: {
    allWpBook: { edges },
    wpPage: { AllBooks },
  },
}) => {
    return (
      <Layout>
        <section>
        <h1 className={booksListTitle}>{AllBooks.title}</h1>
        <div
            style={{textAlign: 'center', fontSize: 23}}
            dangerouslySetInnerHTML={{
              __html: AllBooks.description,
            }}
          />
        </section>
        <section>
          <div className={books}>
            {edges.map(({ node: book }) => (
              <Book key={book.id} slug={book.slug} book={book} />
            ))}
          </div>
        </section>
    </Layout>
     
   
    )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "books"}) {
    AllBooks {
      title
      description
    }
  }
  allWpBook {
    edges {
      node {
        bookMeta {
          title
          price
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
            altText
          }
        }
        slug
        id
      }
    }
  }
}
    
  
`


export default BooksPage;