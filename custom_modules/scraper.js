import cheerio from "cheerio"
import axios from "axios"

const url = "https://www.mygov.in/covid-19"
const dic = {}
var total = 0
const states = []
const count = []
const covi = async () => {
    await axios(url)
        .then(response => {

            const html = response.data
            const $ = cheerio.load(html)
            total = $('.t_case .icount').text()
            $('.st_name', html).each(function () {
                states.push($(this).text())
            })
            $('.st_number', html).each(function () {
                count.push($(this).text())
            })
            for (let i = 0; i < states.length; i++) {
                dic[states[i]] = count[i]
            }
        })
        .catch(err => {
            console.log(err)
        })
}

const allInfo = async () => {
    await covi()
    console.log(`Total number of cases in India: ${total}`)
    for (let i = 0; i < states.length; i++) {
        console.log(`Total number of cases in ${Object.keys(dic)[i]} - ${dic[states[i]]}`)
    }
}

const stateWise = async (state) => {
    await covi()
    console.log(`Total number of cases in ${state} - ${dic[state]}`)
}

const scraper = {
    allInfo: allInfo,
    stateWise: stateWise
}

export default scraper