// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const posts = data.allKontentItemTestLandingPage.nodes

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "1rem", gap: "2rem", margin: "5rem" }}>
      {posts.map((item, i) => {
        console.log(item.elements)
        return (
          <div key={i}>
            <img src={item.elements.location_image.value[0].url} />
            <div dangerouslySetInnerHTML={{ __html: item.elements.description_text.value }}></div>
          </div>
        )
      })}
    </div >
  )
}

export default BlogIndex

export const pageQuery = graphql`
  {
        allKontentItemTestLandingPage {
        nodes {
        elements {
        description_text {
        value
      }
      location_image {
        value {
        url
      }
      }
    }
  }
}
}
`
