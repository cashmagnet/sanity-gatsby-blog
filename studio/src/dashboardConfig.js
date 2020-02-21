export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4f9633646661d16460797d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pv9arscg',
                  apiId: '845234ba-a671-48f9-92ea-30b86e875c3a'
                },
                {
                  buildHookId: '5e4f96331a7711002eb4949c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-w6e4xi7u',
                  apiId: '0f5c9bc0-b581-415d-8f6c-fd222089d29a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cashmagnet/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-w6e4xi7u.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
