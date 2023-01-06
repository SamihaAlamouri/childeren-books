import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Book from '../../components/book'

const BooksPage = ({
  data: {
    allWpBook: { edges },
    wpPage: { AllBooks },
  },
}) => {
    return (
      <Layout pageTitle="Books List">
      <section>
        <div>
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
                gatsbyImageData(placeholder: BLURRED)
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