import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image1.jpeg"
import Image from "gatsby-image"
import images from "../pages/images"
const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image3.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    fluid: file(relativePath: { eq: "image4.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} width="100%" />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>fixed image/ blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>fluid image/ blur</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <h2>Content</h2>
      </article>
    </section>
  )
}

export default Images
