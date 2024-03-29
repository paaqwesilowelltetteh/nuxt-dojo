export default defineEventHandler(async (event) => {

    // //handle query params
    // const { name } = getQuery(event);

    // //Handle Post Request
    // const {age, skills} = await readBody(event);

    //making api call with api key
    const {data} = await $fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_a7MR7GkzS2EX1Zk928a6Oophm2xWerSH5KBZZ09V')
    //return response
    return  data;
})