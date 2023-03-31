/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `retro-portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", 'gatsby-plugin-postcss', "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.webp"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: `gatsby-source-supabase`,
    options: {
      supabaseUrl: 'https://bgazwwufdpfjahdmbxhk.supabase.co',
      supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnYXp3d3VmZHBmamFoZG1ieGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAxNTkyMTksImV4cCI6MTk5NTczNTIxOX0.YNxNgbisSp9ArKSL4zaFAdLw1OD0QMRPzF1gUXBhkDU',
      types: [
        {
          type: "Blog",
          query: (client) => client.from("blog").select('*'), //sync or async
        },
        {
          type: "Project",
          query: (client) => client.from("projects").select('*'),
        },
      ],
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/",
    },
    __key: "pages"
  }]
};