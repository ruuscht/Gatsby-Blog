import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"

import Layout from "../components/layout"

const AboutPage = () => {

    return (
        <Layout>
            <Head title="About" />
            <h1>Welcome to our world</h1>

            <p>You'll soon see a long text here...</p>

            <p>Vill du komma i kontakt med mig? <Link to="/contact">Klicka här!</Link></p>
        </Layout>
    )

}

export default AboutPage