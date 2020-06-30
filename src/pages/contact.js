import React from "react"


import Layout from "../components/layout"

import Head from "../components/head"

const ContactPage = () => {

    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact Us</h1>

            <address>
                <p>Du når mig bäst via Instagram - <a href="https://www.instagram.com" target="blank">Ruuschtuu</a></p>
                <p> Visit us at: <a href="www.Ruuschtuu.com">This site</a> </p>
                <p>Box 564, Disneyland</p>
                <p>Sverige</p>
            </address>
        </Layout>
    )

}

export default ContactPage