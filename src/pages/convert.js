import React from "react"

import Layout from "../components/layout"
import Head from "../components/helmet"
import Convert from "../components/convert"
import "./global.css"

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <Convert />
  </Layout>
)

export default IndexPage
