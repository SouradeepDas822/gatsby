import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is a blog page.</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus atque neque, nostrum at soluta quod possimus porro
          similique maiores ipsum quae dolore tenetur asperiores nesciunt!
        </p>
      </div>
    </Layout>
  )
}

export default blog
