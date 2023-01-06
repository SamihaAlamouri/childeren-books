import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BookPage = ({data: {wpBook: {bookMeta: book, genres: {nodes: genres}}}}) => {
  const image = getImage(book.picture.localFile)
  return (
    <Layout pageTitle="Books Template">
      <div>
        <h1>{book.title}</h1>
        <GatsbyImage image={image} alt={book.picture.altText} />
        <div dangerouslySetInnerHTML={{__html: book.description}} />
        <p>Author(s): {book.authors}</p>
        <p>Price: {book.price} $</p>
        <p>Binding: {book.binding}</p>
        <p>Pages: {book.numberOfPages}</p>
        <p>Publisher: {book.publisher}</p>
        <p>publication Date: {book.publicationDate}</p>
        <div>Genre(s): {genres.map((genre, i ) => (
          <span key={i}>
            {genre.name} {i + 1 < genres.length && "- "}
          </span>
        ))}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query ($id: String) {
    wpBook(id: {eq: $id}) {
      bookMeta {
        title
        authors
        price
        numberOfPages
        description
        binding
        publisher
        publicationDate
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      genres {
        nodes {
          name
        }
      }
    }
  }
`
export default BookPage