function setCookie(name,symbol,key,repeat)
{
    const date = new Date() 
    const secret = date.getTime()*key
    const hex = secret.toString(2)
    const string = hex+"O"
    const join = name+symbol+ string.repeat(repeat) +'1010 '+ date
    return join  
}
module.exports = { setCookie }















