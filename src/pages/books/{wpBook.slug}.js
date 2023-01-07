import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Homecontainer,
  text,
  bookPicture,
  bookTitle,
  bookDetails,
  subtitle
} from "../../page.module.css"
const BookPage = ({data: {wpBook: {bookMeta: book, genres: {nodes: genres}}}}) => {
  const image = getImage(book.picture.localFile)
  return (
    <Layout>
      <section className={Homecontainer}>
      <div>
        <GatsbyImage
         className={bookPicture}
         image={image} 
         alt={book.picture.altText} 
        />
        </div>
        <article className={text}>
      
        <h1 className={bookTitle}>{book.title}</h1>
        <p>by 
         <span className={bookDetails}> {book.authors} </span>
         (Author)
        </p> 
        
        <div
         dangerouslySetInnerHTML={{__html: book.description}} 
        />
        
        <h2 className={subtitle}>Product details:</h2>
        
        <p>Price:
          <span className={bookDetails}>  ${book.price} </span>
        </p>
        <p>Binding:
          <span className={bookDetails}>  {book.binding}</span>
        </p>
        <p>Pages:
          <span className={bookDetails}> {book.numberOfPages}</span> 
        </p>
        <p>Publisher:
          <span className={bookDetails}>  {book.publisher}</span>
        </p>
        <p>Publication Date:
          <span className={bookDetails}> {book.publicationDate}</span> 
        </p>
        <div>Genre(s): {genres.map((genre, i ) => (
          <span className={bookDetails} key={i}>
            {genre.name} {i + 1 < genres.length && "- "}
          </span>
        ))}
        </div>
        </article>

        
      </section>
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
              gatsbyImageData(placeholder: DOMINANT_COLOR)
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