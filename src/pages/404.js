import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/Layout"

// ERROR PAGE - 404

const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <Link to="/">Go Back Home</Link>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
