import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Game from "../components/game"
import "./global.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Game />
  </Layout>
)

export default IndexPage
