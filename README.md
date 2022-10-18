<h1 align="center">
    Cookie generator
   <b>
        <a href="https://aftab.netlify.app"><img src="https://raw.githubusercontent.com/aftabmk/Cookie/master/image/cookie.jpg" /></a><br>
    </b>
</h1>
<p align="center">This package is used to create dynamic cookie value and authenticate the created cookie to prevent external tampering.This is simple and plain way to create advanced binaary based cookie with no effort.It primarly targeted for beginner coders.</p>

## Installing

Using npm:

```bash
$ npm i @aftabmk/cookie
```

Using bower:

```bash
$ bower install @aftabmk/cookie
```

Using yarn:

```bash
$ yarn add @aftabmk/cookie
```

Using pnpm:

```bash
$ pnpm add @aftabmk/cookie
```

## Documentation

## Functions
*setCookie*
```ts
const cookie : setCookie(String,String,Number,Number)
```
*filterCookie*
```ts
const bool : filterCookie(String,Number,String)
```

# Example
# setCookie inputs
*Name*
```js
const cookie = setCookie('kizhissery','-',7,5)
/*{
    cookie:'kizhissery-101010000.........
    here input is Kizhissery
}*/
```
*Symbol*
```js
const cookie = setCookie('kizhissery','=',7,20)
/*{
    cookie:'kizhissery-101010000.........
    here input is Kizhissery
}*/
```
*Key*
```js
const cookie = setCookie('aftab','-',7,20)
/*{
    cookie:'kizhissery-101010000.........
    here secret key is 7, it can be any +ve integer Only, decimal and -ve integer will not function
}*/
```
*Repeat*
```js
const cookie = setCookie('aftab','-',7,5)
/*{
    cookie:'kizhissery-101010000.........
    here length of cookie detemined length here it is 5
    cookie:'kizhissery-101010000.........*4
    here length of cookie detemined length here it is 20, if you need bigger cookie value , should be more than 5 and less than 20 for optimal result
}*/
```
*result*
```js
const cookie = setCookie(name,symbol,key,length)
/*{
    cookie:'kizhissery-101010000.........
    here length of cookie detemined length here it is 5
    cookie:'kizhissery-101010000.........*4
    here length of cookie detemined length here it is 20, if you need bigger cookie value , should be more than 5 and less than 20 for optimal result
}*/
```
# filterCookie inputs

*result*
```js
const filter = filterCookie(name,key,cookie)
/*{
    cookie is the the derived value of the above function "setCookie" which is passed to filter function.
    Note the name and key of setCookie must match the inputs of filterCookie.
}*/
```

# Starter Code
*example 1*
```js
const { setCookie , filterCookie } = require('@aftabmk/cookie')

const cookie = setCookie('aftab','=',30,5)
const filter = filterCookie('aftab',30,cookie)

console.log({cookie},{filter})
```
*example 2*
```js
// imports
const express = require("express");
const cookieParser = require('cookie-parser')
const { setCookie , filterCookie } = require('@aftabmk/cookie');
//setting up express
app.use(ex.json())
app.use(ex.urlencoded({ extended: true }))
//auth
function Auth(req, res, next)
{
    if(!req.headers.cookie) return res.status(403).send('403 access forbidden')
    if(filterCookie('user',77,req.headers.cookie))
    // name was set to user and key to 77 at setCookie function
    // filterCookie return true
    // so it will lead to next() , if authentication fails it will send 403 to unauthorised api/json scrapper
    // for true return /api route and access the data from those route
        {
            next();return
        }
        else
        {
            res.status(401).send([{'status':401,'description':'Invalid certificate'}]);
        }
}
// the user in front end redirect to setCookie end point to initialise setCookie function to set cookie inside cookie-parser option
app.get(`/setCookie`, async (req, res) => 
{ try 
    { 
        return res.status(202)
        .cookieParser( setCookie('user','=',77,20) , cookieOptions)
        // here name is user , symbol is '=' , secret key = 77 and length = 20
        // cookieOption { sameSite: 'strict', path: '/', expires: new Date(Date.now() + 900000), httpOnly: true }
        // IMPORTANT htmlonly to true
        .send('User cookie is  set') 
    } 
    catch (err) 
    { 
        return res.status(500).json({ err: err.toString() }) 
    } })

// Express router import whereapi are stored hence we introduce Auth middleware , to prevent unwanted scrapers
app.use('/api',Auth,api)


app.listen(port, () => { console.log(`running on port http://localhost:5000`) })
```