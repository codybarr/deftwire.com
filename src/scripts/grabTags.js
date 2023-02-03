const axios = require('axios')
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const URLS = [
  'https://boundingintocomics.com/2023/01/31/the-walt-disney-companys-grooming-agenda-continues-star-wars-celebration-to-feature-panel-about-drag-shows/',
  'https://thepostmillennial.com/breaking-alec-baldwin-formally-charged-with-involuntary-manslaughter-in-shooting-death-of-cinematographer?utm_campaign=64487',
  'https://nypost.com/2023/01/30/stephen-and-ayesha-curry-object-to-new-housing-development/',
  'https://thepostmillennial.com/suspects-in-assassination-of-haitian-president-taken-into-us-custody?utm_campaign=64487',
  'https://redstate.com/alexparker/2023/01/31/breakthrough-state-dumps-degree-requirement-for-65000-jobs-promotes-practical-experience-over-college-n696499',
  'https://www.lifenews.com/2023/02/01/satanic-temple-opens-new-abortion-clinic-to-kill-babies-in-ritualistic-abortions/',
  'https://www.dailyfetched.com/cnns-chris-wallaces-ratings-are-so-bad-even-amateur-youtubers-are-getting-more-viewers/',
  'https://www.theepochtimes.com/bipartisan-lawmakers-introduce-bill-to-ban-china-from-buying-us-farmland_5024703.html?utm_source=partner&utm_campaign=BonginoReport',
  'https://www.conservativereview.com/male-accused-of-raping-girls-ages-4-and-9-to-serve-less-than-180-days-in-jail-not-required-to-register-as-sex-offender-2659341350.html',
  'https://www.foxnews.com/politics/iranian-illegal-immigrant-terror-watch-list-caught-southern-border-sources',
  'https://www.conservativereview.com/dr-phil-retiring-from-daytime-talk-show-after-21-year-run-plans-new-venture-to-tackle-grave-concerns-for-the-american-family-2659342723.html',
  'https://thepostmillennial.com/breaking-abc-news-producer-arrested-for-transportation-of-child-pornography?utm_campaign=64487',
  'https://nationalpost.com/pmn/news-pmn/crime-pmn/suicide-bomber-breaches-high-security-in-pakistan-mosque-kills-59',
  'https://hotair.com/tree-hugging-sister/2023/01/30/florida-taking-the-first-steps-to-become-26th-constitutional-carry-state-n527375',
  'https://www.dailywire.com/news/u-s-surgeon-general-warns-13-years-old-is-too-young-to-join-social-media',
  'https://www.theepochtimes.com/border-patrol-agents-told-to-not-chase-all-vehicles-that-flee_5022784.html?utm_source=partner&utm_campaign=BonginoReport',
  'https://www.foxnews.com/sports/djokovic-wins-2023-australian-open-mens-singles-final-sweep-tsitsipas-claims-10th-title',
  'https://redstate.com/bonchie/2023/01/29/finland-introduces-first-transgender-figure-skater-and-things-go-very-badly-n695692',
  'https://pjmedia.com/news-and-politics/rick-moran/2023/01/29/minnesota-legislature-passes-barbaric-bill-to-legalize-abortions-up-until-birth-n1666028',
  'https://thepostmillennial.com/breaking-pro-life-activist-mark-houck-found-not-guilty-in-philadelphia?utm_campaign=64487',
  'https://www.foxnews.com/media/bill-gates-addresses-jeffrey-epstein-relationship-awkward-interview-i-had-dinner-with-him-thats-all',
  'https://www.foxnews.com/us/sixth-memphis-police-officer-involved-tyre-nichols-investigation-relieved-duty',
  'https://www.washingtonexaminer.com/news/justice/doj-rejects-jordan-requests-biden-classified-docs-special-counsel',
  'https://www.foxnews.com/media/biden-official-pushed-ban-gas-stoves-calls-anger-misdirected',
  'https://www.cnn.com/2023/01/26/politics/us-isis-leader-killed-somalia/index.html',
  'https://dailycaller.com/2023/01/26/former-nfl-player-dies-suddenly-25-jessie-lemonier-detroit-lions/',
  'https://www.outkick.com/novak-djokovic-vaccine-restrictions-us-open-australian-alex-de-minaur-tommy-haas/',
  'https://www.boundingintosports.com/2023/01/aaron-rodgers-blasts-woke-culture-and-torches-sports-media-for-being-sponsored-by-pfizer/',
  'https://pjmedia.com/news-and-politics/catherinesalgado/2023/01/25/n-y-legislature-votes-to-codify-abortion-in-state-constitution-measure-goes-to-voters-in-2024-n1664976',
  'https://www.theepochtimes.com/florida-supreme-court-refuses-to-stay-abortion-law_5008139.html?utm_source=partner&utm_campaign=BonginoReport',
  'https://pjmedia.com/news-and-politics/rick-moran/2023/01/26/biden-makes-first-move-toward-a-radical-national-rent-control-law-n1665210',
  'https://www.dailyfetched.com/cnns-primetime-viewership-plummets-to-just-444000-as-don-lemon-hits-record-low/',
  'https://thepostmillennial.com/katie-hobbs-to-bus-illegal-immigrants-out-of-arizona-wont-say-where-they-are-going?utm_campaign=64487',
  'https://www.foxnews.com/sports/49ers-brock-purdy-receives-praise-keeping-faith-picture-ahead-nfc-title',
  'https://www.nbcnews.com/politics/2024-election/marjorie-taylor-greene-aims-trumps-vp-pick-2024-rcna67266',
  'https://www.christiantoday.com/article/only.a.minority.of.parents.emphasize.passing.on.their.faith.to.children.study/139756.htm',
  'https://www.theguardian.com/us-news/2023/jan/25/us-m1-abrams-biden-tanks-ukraine-russia-war',
  'https://www.foxnews.com/us/hate-crime-hoax-idaho-police-white-power-graffiti-high-school-created-rival-hispanic-gangs',
  'https://thepostmillennial.com/idaho-massacre-suspect-had-job-interview-with-same-police-department-that-aided-in-his-arrest?utm_campaign=64487',
  'https://www.theepochtimes.com/militarys-push-for-diversity-harms-warfighting-ability-defense-analysts-say_5007672.html?utm_source=partner&utm_campaign=BonginoRepo',
  'https://freebeacon.com/democrats/convenient-timing-pelosi-sold-3-million-of-google-stock-weeks-before-doj-launched-antitrust-probe/',
  'https://www.breitbart.com/politics/2023/01/25/kamala-harriss-silence-biden-doc-scandal-raises-questions-suspicions/',
]

// NY Times sucks to fetch...
// const URL =
//   'https://www.nytimes.com/2021/07/26/health/health-care-workers-vaccine-requirement.html?smtyp=cur&smid=fb-nytimes'

const getFilename = (title) =>
  '2021-07-29-' +
  title
    .match(/[A-Za-z ]/g)
    .join('')
    .trim()
    .toLowerCase()
    .replace(/ /g, '-') +
  '.md'

const fetchAndWriteFile = async (url, minute) => {
  try {
    const { data } = await axios.post(
      `https://meta-fetch.vercel.app/api/metafetch`,
      {
        url,
      }
    )

    const fileName = path.join(
      __dirname,
      '..',
      '..',
      'content',
      'posts',
      getFilename(data.title)
    )

    const content = yaml.dump({
      author: 'waterboy@crosspolitic.com',
      date: `2021-07-29T03:${minute}:41.328Z`,
      tags: {
        title: data.title,
        description: data.description || null,
        url: data.url || '',
        image: data.image || null,
      },
    })

    const contents = `---\n${content}---`

    // `---
    // author: waterboy@crosspolitic.com
    // date:
    // tags:
    //   title: '${data.title}'
    //   description: '${data.description}'
    //   url: '${data.url}'
    //   image: '${data.image}'
    // ---`

    fs.writeFile(fileName, contents, function (err) {
      if (err) {
        return console.log(err)
      }
      console.log(`\n${fileName} was saved!`)
    })
  } catch (error) {
    console.log(`\n FAILURE - ${url} could not be saved!`)
  }
}

const main = async () => {
  const minute = 59
  URLS.forEach((url, i) => {
    setTimeout(() => fetchAndWriteFile(url, minute - i), i * 500)
  })
  // fetchAndWriteFile(URL)
}

main()
