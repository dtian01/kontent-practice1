import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import axios from "axios"

const Page2 = () => {

  const [componentState, setComponentState] = useState({});
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://deliver.kontent.ai/71fb2b76-0e25-00af-1b74-6fa6edc2d73d/items/untitled_content_item_0b151c8")
      .then(res => {
        setComponentState(res.data.item);
        // setLoading(false);
      })
  }, [])


  return (
    <div className="container mx-auto">
      {componentState && componentState.elements && (
        <div>
          <section className="section__b mb-16 gap-10 grid grid-cols-2 mb-16 section__b">
            <div dangerouslySetInnerHTML={{ __html: componentState.elements.section__b__content1.value }}></div>
          </section>
        </div>
      )}
    </div>
  )
}

export default Page2
