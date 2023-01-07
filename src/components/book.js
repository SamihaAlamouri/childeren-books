import React from "react"
import { Link} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  container,
  title,
  imageContainer,
  price1,
} from "./book.module.css"

const Book = ({ book, slug }) => {
  const image = getImage(book.bookMeta.picture.localFile)
  return (
    <Link to={slug} className={container}>
      <div >
      <GatsbyImage
        className={imageContainer}
        image={image}
        alt={book.bookMeta.picture.altText}
      />
      </div>
      <div>
        {book.bookMeta.title && <p className={title}>{book.bookMeta.title}</p>}
        <p className={price1}>
        ${book.bookMeta.price}
        </p>
      </div>
    </Link>
   
  )
}

export default Book;