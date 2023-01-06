import React from "react"
import { Link} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  wrapper,
  artistInfo,
  fullName,
} from "./book.module.css"

const Book = ({ book, slug }) => {
  const image = getImage(book.bookMeta.picture.localFile)
  return (
    <Link to={slug} className={wrapper}>
      <GatsbyImage
      className={image}
        image={image}
        alt={book.bookMeta.picture.altText}
      />
      <article className={artistInfo}>
        {book.bookMeta.title && <p>{book.bookMeta.title}</p>}
        <p className={fullName}>
          {book.bookMeta.price} $
        </p>
      </article>
    </Link>
  )
}

export default Book;