import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default ({data}) => {
  const {
    allStrapiProjects:{nodes:projects},
    allStrapiBlogs:{nodes:blogs}
  } = data; // projects는 alias
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      {/* in Home page the titile will be  "featured projects" and in Projects page, it will be "all projects"*/}
      <Projects projects={projects} title="featured proejcts" showLink/>
      <Blogs blogs={blogs} title="latest articles" showLink/>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
               ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        category
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`


