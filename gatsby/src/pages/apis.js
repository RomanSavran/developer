import React from 'react'
import { graphql } from "gatsby";

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'


const ApisPage = ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <section className="Home fullwidth page-content">
                <div className="jumbotron jumbotron-fluid"> 
                    <div id="introduction" className="container">
                        {data.intro.edges.map(({ node }) => (
                            <div key={node.id}>
                            <h1>{node.frontmatter.title}</h1>
                            <p className="content-fragment" dangerouslySetInnerHTML={{ __html: node.html }} />
                            </div>
                        ))}  
                    </div>
                </div>
            </section>
            <main className="container">
                <section className="container row equal">
                    <h3>Platform Authentication and APIs</h3>
                    <div id="api-descriptions" className="card-columns">
                        {data.ApiDescs.edges.map(({ node }) => (
                            <div id="login-api-description" className="card" key={node.id}>
                                <div className="card-header"><h3>{node.frontmatter.title}</h3></div>
                                <div className="card-body">
                                    <div  className="container">
                                        <p className="content-fragment" dangerouslySetInnerHTML={{ __html: node.html }} />
                                    </div>
                                </div>
                            </div>
                        ))}  
                    </div>
                </section> 
                <section id="libraries" className="container">
                    <div id="introduction" className="container">
                        {data.libraries.edges.map(({ node }) => (
                            <div key={node.id}>
                            <h1>{node.frontmatter.title}</h1>
                            <p className="content-fragment" dangerouslySetInnerHTML={{ __html: node.html }} />
                            </div>
                        ))}  
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
query {
    intro: allMarkdownRemark(filter: {
        frontmatter: {
        path: {eq: "/developers/apis#introduction"}, 
        section: {eq: "introduction"}
        }}) {
            totalCount
            edges {
            node {
                id
                html
                frontmatter {
                    title
                    path
                    }
                }
            }
        },
    ApiDescs: allMarkdownRemark(
        filter: {
            frontmatter: {
                path: {eq: "/developers/apis#api-descriptions"}, 
                section: {eq: "api-descriptions"}
            }
        }
        sort: { 
            order: ASC, 
            fields: [frontmatter___date] 
        }
        ) {
            totalCount
            edges {
            node {
                id
                html
                frontmatter {
                    title
                    path
                    date(formatString: "DD MMMM, YYYY")
                }
            }
        }
    },
    libraries: allMarkdownRemark(filter: {
        frontmatter: {
        path: {eq: "/developers/apis#libraries"}, ,
        section: {eq: "libraries"}
        }}) {
            totalCount
            edges {
            node {
                id
                html
                frontmatter {
                    title
                    path
                    }
                }
            }
        }
}
`

export default ApisPage