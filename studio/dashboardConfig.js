export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6277bc99115e1f46d8b0fb3b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zj15d6vd',
                  apiId: 'cd2fc8e0-5fdd-443b-a3d3-b2ae39fcaf23'
                },
                {
                  buildHookId: '6277bc9a9cbea04a5540fb5e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-d7vv4w6h',
                  apiId: 'c35962b7-5271-4e64-9173-54d6c9c4af37'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gerardambe/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-d7vv4w6h.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
