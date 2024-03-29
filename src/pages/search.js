import React from "react"

import Layout from "../components/layout"
import Head from "../components/helmet"
import Search from "../components/search"
import "./global.css"

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <Search />
  </Layout>
)

export default IndexPage
