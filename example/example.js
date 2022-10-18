const { setCookie } = require('../function/setCookie')
const { filterCookie } = require('../function/filterCookie')

const cookie = setCookie('aftab','-',7,20)
const bool = filterCookie('aftab',7,cookie)

console.log({cookie},{bool})