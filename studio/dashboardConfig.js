export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ff746b0da799329e4abf44a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rnjehy4b',
                  apiId: '11fa6297-de69-4a5e-9eb1-67c0344413bd'
                },
                {
                  buildHookId: '5ff746b094ef653f4b6b5728',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pbqkqbis',
                  apiId: '8d17cd96-dcf1-4bf6-9023-71dce3e5ecfd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fsteve218/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pbqkqbis.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
