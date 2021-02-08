import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
    <Link to={`/blog/${article.slug}`}>
  <div className={styles.preview}>
      <Img alt="" fluid={article.heroImage.fluid} className={styles.img }/>
    <h3 className={styles.previewTitle}>
        {article.title}
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
      />
  </div>
      </Link>
)
