import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import axios from "axios"

const Page3 = () => {

  const [componentState, setComponentState] = useState({ name: "bob" });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => {
        const title = res.data.title;
        setComponentState({ ...componentState, title });
        // setLoading(false);
      })
  }, [])

  return (
    <div className="container mx-auto">
      {console.log(componentState)}
      <p><strong>title:</strong> {componentState.title}</p>
    </div>
  )
}

export default Page3
