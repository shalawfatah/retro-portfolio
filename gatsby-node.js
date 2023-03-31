// gatsby-node.js

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const result = await graphql(`
      query {
        allSupabaseProject {
          nodes {
            id
          }
        }
      }
    `)
  
    result.data.allSupabaseProject.nodes.forEach((project) => {
      createPage({
        path: `/projects/${project.id}`,
        component: require.resolve("./src/templates/project.js"),
        context: {
          projectId: project.id,
        },
      })
    })
  }