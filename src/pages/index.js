import React from "react"

import Layout from "../components/layout"
import Head from "../components/helmet"
import Main from "../components/main"
import "./global.css"

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <Main />
  </Layout>
)

export default IndexPage
