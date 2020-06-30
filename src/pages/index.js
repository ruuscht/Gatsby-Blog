import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"


const IndexPage = () => {

  return (
    <Layout>
      <Head title="Home" />
      <h1>Hejsan!</h1>
      <h2>Jag heter RUUUUSCHTUUU och jag älskar Gatsby.JS</h2>
      <p>Vill du komma i kontakt med mig? <Link to="/contact">Klicka här!</Link></p>
    </Layout>
  )

}

export default IndexPage