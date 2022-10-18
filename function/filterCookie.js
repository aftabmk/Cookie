function filterCookie(name,number,cookie)
{
    const split = cookie.substring(name.length + 1).split('O')[0]    
    const parse = parseInt(split,2)     
    const boolean = parse % number == 0
    return boolean      
}

module.exports = { filterCookie }














