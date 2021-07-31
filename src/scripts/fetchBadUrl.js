var metafetch = require('metafetch')

metafetch.fetch(
  'https://www.nytimes.com/2021/07/26/health/health-care-workers-vaccine-requirement.html?smtyp=cur&smid=fb-nytimes',
  function (err, meta) {
    console.log('title: ', meta.title)
    console.log('description: ', meta.description)
    console.log('type: ', meta.type)
    console.log('url: ', meta.url)
    console.log('ampURL: ', meta.ampURL)
    console.log('siteName: ', meta.siteName)
    console.log('charset: ', meta.charset)
    console.log('image: ', meta.image)
    console.log('meta: ', meta.meta)
    console.log('images: ', meta.images)
    console.log('links: ', meta.links)
    console.log('headers: ', meta.headers)
    console.log('language: ', meta.language)
  }
)
