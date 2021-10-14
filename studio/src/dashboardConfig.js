export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "616778504ff3de1dc8eab023",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-224dk369",
                  apiId: "d31033ea-aba4-4c5b-9e7c-f14318d7ccea",
                },
                {
                  buildHookId: "61677850e7a01f1c8d18dd5a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-rn5183qf",
                  apiId: "1ec9a25c-f077-4ff7-9894-57e9ae9bf25a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/oalmaguer/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-rn5183qf.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
