import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import axios from "axios"

const Page2 = () => {

  const data = useStaticQuery(graphql`
    {
      kontentItemNew1 {
        elements {
          section__a__content {
            images {
              url
            }
            value
          }
        }
      }
    }
  `)

  const [componentState, setComponentState] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://deliver.kontent.ai/71fb2b76-0e25-00af-1b74-6fa6edc2d73d/items/untitled_content_item_0b151c8")
      .then(res => {
        setComponentState(res.data.item);
        setLoading(false);
      })
  }, [])


  const sectionA = data.kontentItemNew1.elements.section__a__content;
  return (
    <div className="container mx-auto">
      <section className="section__a mb-10" dangerouslySetInnerHTML={{ __html: sectionA.value }}></section>

      <p className="bg-red-500 text-white p-5 text-lg mb-4">&uarr;data pulled from kontent api at build time&uarr;</p>

      <p className="bg-blue-500 text-white p-5 text-lg mb-4">&darr;data pulled from kontent api at run time&darr;</p>

      <div style={{ position: "relative" }} className={loading ? "spinner" : ""}>
        {componentState && componentState.elements && (
          <div className={`${loading ? "" : "fade-in"}`}>
            <section className="section__b mb-16 gap-10 grid grid-cols-2 mb-16 section__b">
              <div dangerouslySetInnerHTML={{ __html: componentState.elements.section__b__content1.value }}></div>
              <div dangerouslySetInnerHTML={{ __html: componentState.elements.section__b__content2.value }}></div>
            </section>
            <section className="section__c grid-cols-3 grid mb-16 gap-10">
              <div dangerouslySetInnerHTML={{ __html: componentState.elements.section__c__card1.value }}></div>
              <div dangerouslySetInnerHTML={{ __html: componentState.elements.section__c__card2.value }}></div>
              <div dangerouslySetInnerHTML={{ __html: componentState.elements.section__c__card3.value }}></div>
            </section>
            <section className="section__d mb-16" dangerouslySetInnerHTML={{ __html: componentState.elements.section__d__content.value }}></section>
            <section className="section__e mb-16" dangerouslySetInnerHTML={{ __html: componentState.elements.section__e__content.value }}></section>
            <section className="section__f mb-16" dangerouslySetInnerHTML={{ __html: componentState.elements.section__f__content.value }}></section>
            <section className="section__g mb-16">
              <div dangerouslySetInnerHTML={{ __html: componentState.elements.section__g__title.value }}></div>
              <div className="gap-10 grid grid-cols-2">
                <div dangerouslySetInnerHTML={{ __html: componentState.elements.section__g__card1.value }}></div>
                <div dangerouslySetInnerHTML={{ __html: componentState.elements.section__g__card2.value }}></div>
              </div>
            </section>
          </div>
        )}
      </div>

    </div>
  )
}

export default Page2
