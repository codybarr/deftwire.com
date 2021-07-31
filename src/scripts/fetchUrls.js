const axios = require('axios')
const cheerio = require('cheerio')

async function fetchHTML(url) {
  const { data } = await axios.get(url)
  const $ = cheerio.load(data)
  return $
}

const main = async () => {
  try {
    const $ = await fetchHTML('https://deftwire.com/')
    const links = $(`.newsItem`)
      .map(function (i, el) {
        return $(this).find('a').attr('href')
      })
      .toArray()

    console.log(links)
  } catch (err) {
    console.log(err)
    // return res.status(500).json({ message: 'Something went terribly wrong!' })
  }
}

main()
