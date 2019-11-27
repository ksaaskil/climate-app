import React from "react"

import Layout from "../components/layout"
import Head from "../components/helmet"
import Game from "../components/game"
import "./global.css"

const GamePage = () => (
  <Layout>
    <Head title="Home" />
    <Game />
  </Layout>
)

export default GamePage
