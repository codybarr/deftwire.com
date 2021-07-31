const axios = require('axios')
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const URLS = [
  'https://sharylattkisson.com/2021/07/read-cdc-74-who-got-covid-19-in-a-recent-analysis-had-been-fully-vaccinated/',
  'https://fee.org/articles/despite-delta-alarmism-us-covid-deaths-are-at-lowest-level-since-march-2020-harvard-and-stanford-professors-explain/?fbclid=IwAR0KIq8XcErhhaK-qVLh_cvUY-Rv2w5D5D3jQSBz1jZedgO5PBrAXRiWNUY',
  'https://www.nbcnews.com/news/olympics/u-s-swimmer-michael-andrew-goes-maskless-behind-scenes-olympics-n1275463?cid=sm_npd_nn_fb_ma&fbclid=IwAR0lRq0izn4EFm1ffBfoC8kLgf8j193IukYKI8GP8TWoJD7I8epcrPbtkSo',
  'https://thebahnsengroup.com/the-dc-today/thursday-july-29-2021/?utm_source=the-dc-today-social&utm_medium=social&utm_campaign=the_dc_today&fbclid=IwAR0W74hxOj6th5LwsGOrePG7r8k5Lby1j1iCR61bTCVYXLhJmM5zk8liQlk',
  'https://thetexan.news/gov-abbott-signs-order-to-prohibit-covid-19-business-restrictions-restrict-vaccine-passports/?utm_content=buffer6dd52&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer',
  'https://www.nbcnews.com/politics/white-house/biden-announce-new-steps-tackle-covid-pandemic-n1275412',
  'https://www.theblaze.com/news/capitol-police-arrest-mask-mandate-reactions-republicans',
  'https://answersingenesis.org/culture/disney-debuts-first-ever-lgbt-love-song/?utm_source=facebook-kh&utm_medium=social&utm_campaign=blog20210726&fbclid=IwAR1FVfpiG4mcK-AIyaWawboAc5DabD6KO4sIaYhkmzNWJdod_pTzzelJ-14',
  'https://bariweiss.substack.com/p/med-schools-are-now-denying-biological?fbclid=IwAR0dTV88XPdL_9KlYUk12tQ4Ut9W3a-6wRrNcJOUaJdTYKyfosTQv29QR-U',
  'https://www.dailywire.com/news/rep-jim-jordan-pelosi-threw-me-off-jan-6-commission-after-i-pressed-about-her-role-in-security-breakdown',
  'https://justthenews.com/government/white-house/biden-says-white-house-exploring-vaccine-mandate-all-federal-employees?utm_medium=social_media&utm_source=mail_social_icon&utm_campaign=social_icons',
  'https://pinonpost.com/cease-and-desist-notice-sent-to-lanl-over-face-mask-vaccine-testing-mandates/',
  'https://profootballtalk.nbcsports.com/2021/07/25/steelers-unvaccinated-players-will-wear-yellow-wristbands/',
  'https://www.nytimes.com/2021/07/27/health/cdc-masks-indoors-delta-variant.html?smtyp=cur&smid=fb-nytimes&fbclid=IwAR1WNRVPfN8LS8TXJDnjMTif9w1yfWrKT2ZXkDXLfxkg5C-EiZMSRKHi5v8',
  'https://redstate.com/smoosieq/2021/07/26/three-st-louis-county-municipalities-will-not-enforce-reimposed-mask-mandate-n416873',
  'https://thehill.com/changing-america/well-being/prevention-cures/564803-rand-paul-sends-official-criminal-referral-on?fbclid=IwAR1rHJbtjv2OlEjwBG754qhu3QDGQ3HLInTvDtLHXz1vsXvnPDmJxf5R-Dk',
  'https://www.latimes.com/california/story/2021-07-23/appeal-court-rules-in-favor-of-private-school-families',
  'https://news.yahoo.com/antibodies-sinovacs-covid-19-shot-142748493.html?soc_src=social-sh&soc_trk=ma',
  'https://www.nytimes.com/2021/07/26/health/health-care-workers-vaccine-requirement.html?smtyp=cur&smid=fb-nytimes',
  'https://dailycaller.com/2021/07/25/tim-scott-wont-run-after-2022-2024-presidential-race/',
  'https://nypost.com/2021/07/24/larry-elder-leads-in-crowded-california-gov-recall-race/',
  'https://www.krem.com/mobile/article/news/health/coronavirus/fauci-cdc-face-masks-more-guidance/507-9bb4218c-d148-4a67-b1f1-83627d2eb878?fbclid=IwAR3qE7aecER3Xfq5YkTrgcSC18tWK2AX4nnSjfSw9-I2VknIViLOIU5ZiTE',
  'https://www.nbcnews.com/politics/white-house/vaccine-mandates-more-likely-once-fda-grants-full-approvals-health-n1274288?cid=sm_npd_nn_fb_ma&fbclid=IwAR0y3dd5K2SDZDPcIg91DpYZlbqaJS6KOeD5CeE5M_apINO5iInm0fXP2G0',
  'https://www.teenvogue.com/story/high-school-musical-the-musical-the-series-disney-first-lgbtq-love-song?fbclid=IwAR17wHOZTdShS_VUaevjqec6BkzJyjiAxOhMPzPBGu765d-3u6dW7vorSDQ',
  'https://www.christianpost.com/news/2-christian-students-win-fight-over-universitys-covid-vaccine-mandate.html?fbclid=IwAR1n4l4-jDOj2YaukIJUX2BC0zgPtd-ZXkcbGZW4x7WipqMOQgTPHbjqbEo',
  'https://www.theblaze.com/news/minnesota-vikings-coach-loses-job-over-vaccine?utm_source=dlvr.it&utm_medium=facebook&fbclid=IwAR2N7HB-v00sJX5qRMQ6Oua3HLmJ-L7W2-9fX2uagEoBLlCQs91rCWKbpuk',
  'https://www.foxnews.com/health/cdc-labs-covid-tests-differentiate-flu?fbclid=IwAR38Vtkv5bK1l_ISDH0B5kvD1Ctvz4EA_wEVXwPh_5qunvFEOCP5si3i7t8',
  'https://www.theblaze.com/op-ed/horowitz-data-from-india-continues-to-blow-up-the-delta-fear-narrative?fbclid=IwAR1ov68H0FAaSSpV86O_hmLyom93uW4ywZAdplcxo2J_V6QlNLgzdzGd2CQ',
  'https://www.telegraph.co.uk/politics/2021/07/23/covid-could-spread-flatulence-say-ministers/',
  'https://www.cnn.com/2021/07/24/us/hillsong-church-stephen-harmon-covid-vaccine/index.html?utm_term=link&utm_medium=social&utm_source=fbCNN&utm_content=2021-07-24T17%3A35%3A35&fbclid=IwAR0250nvitmTPcqPlpPQK-6Ll-bjPuChkO_2_c3D3pRLkG91QQSMvfDIh6c',
  'https://www.theblaze.com/news/michigan-county-officials-covid-relief-bonuses?xrs=RebelMouse_fb&ts=1626995121&fbclid=IwAR3vS2L9npEiSuGGgD7k_HFvsmg48268ZAznHFRE5s6UzaTo6ffbRx5EK7Q',
  'https://www.foxnews.com/politics/michigan-whitmer-stripped-emergency-powers?cmpid=fb_fnc&fbclid=IwAR3JhvpwcpVRU_2Fy7hj9jaoicEIOUVWNEHnlGEamKyLKLesWHkJ2Y_kb6c',
  'https://thehill.com/policy/healthcare/564637-illinois-becomes-one-of-the-first-midwest-states-to-legalize-over-the',
  'https://blog.acton.org/archives/122057-chinese-community-party-denies-bail-to-4-apple-daily-staffers-arrests-8th-pro-democracy-newspaper-executive.html?fbclid=IwAR2ClHmAV21fsK43eMUIE_NfxcLpT2rc0P4Myxdx-Wc-l7cB7643GinW6h0',
  'https://www.washingtonpost.com/nation/2021/07/21/judge-arkansas-abortion-ban/?fbclid=IwAR1u0fyoSMC1ny9nUOVfyNuahNt1REMDIocwc_5k_SYUDIpKMoiRnq7v0tQ',
  'https://www.reuters.com/world/us/pennsylvania-decertifies-countys-voting-machines-after-2020-audit-2021-07-21/',
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
