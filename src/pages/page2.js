import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allKontentItemMainPage {
        nodes {
          elements {
            enter_all_the_main_content_here {
              value
            }
          }
        }
      }
    }
  `);

  const posts = data.allKontentItemMainPage.nodes;

  return (
    <div id="test" style={{ padding: "0 3rem" }}>
      {
        posts.map((item, i) => {
          return (
            <div key={i} dangerouslySetInnerHTML={{ __html: item.elements.enter_all_the_main_content_here.value }}></div>
          )
        })
      }
    </div>
  )
}

export default ComponentName
