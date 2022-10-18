const { setCookie } = require('../function/setCookie')
const { filterCookie } = require('../function/filterCookie')

const cookie = setCookie('kizhissery','-',7,5)
const bool = filterCookie('aftab',7,cookie)

// console.log({cookie},{bool})

console.log({cookie})