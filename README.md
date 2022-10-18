<h1 align="center">
    Date
   <b>
        <a href="https://aftab.netlify.app"><img src="https://raw.githubusercontent.com/aftabmk/date-Formater/master/img/img.png" /></a><br>
    </b>
</h1>
<p align="center">This module is used to generate date and epoch with specific format like 04/07/1995. The aim of this package is to simplify the date-format to readily usable syntax with no further alteration.</p>

## Installing

Using npm:

```bash
$ npm install @aftabmk/date
```

Using bower:

```bash
$ bower install @aftabmk/date
```

Using yarn:

```bash
$ yarn add @aftabmk/date
```

Using pnpm:

```bash
$ pnpm add @aftabmk/date
```

## Documentation

## Functions
*getDate*
```js
const date : getDate(number,number,number,boolean,string)
```
*getDateNow*
```js
const dateNow : getDateNow(number,number,number,boolean,string)
```
*getEpoch*
```js
const epoch : getEpoch(string,string)
```
*getEpochNow*
```js
const epoch : getEpoch(null)
```
# getDate inputs
*Day(week ago)*
```js
const dateNow = getDate(7,0,0,true,'forwardSlash')
// current 10/05/2022
// result 03/05/2022
// logic day = 10-7 = 2
```
*Month(Quarter ago)*
```js
const dateNow = getDate(0,3,0,true,'forwardSlash')
// current 02/12/22
// result 02/9/22
// logic day = 12-3 = 9
```
*Year(decade ago)*
```js
const dateNow = getDate(0,0,10,true,'forwardSlash')
// current 02/12/22
// result 02/9/12
// logic day = 22-10 = 12
```
*True*
```js
const dateNow = getDate(0,0,0,true,'forwardSlash')
// result 01/01/22
```
*False*
```js
const dateNow = getDate(0,0,0,false,'forwardSlash')
// result 01/01/2022
```
# Examples of input symbols

*Ampersand(&)*
```js
const dateNow = getDate(0,0,0,false,'ampersand')
// result 01&01&2022
```
*Apostrophe(')*
```js
const dateNow = getDate(0,0,0,false,'apostrophe')
// result 01'01'2022
```
*Asterisk(*)*
```js
const dateNow = getDate(0,0,0,false,'asterisk')
// result 01*01*2022
```
*AtSign(@)*
```js
const dateNow = getDate(0,0,0,false,'atSign')
// result 01@01@2022
```
*Dot(.)*
```js
const dateNow = getDate(0,0,0,false,'dot')
// result 01.01.2022
```
*Dollar($)*
```js
const dateNow = getDate(0,0,0,false,'dollar')
// result 01$01$2022
``` 
*Hyphen(-)*
```js
const dateNow = getDate(0,0,0,false,'hyphen')
// result 01-01-2022
``` 
*UnderScore(_)*
```js
const dateNow = getDate(0,0,0,false,'underScore')
// result 01_01_2022
``` 
*Exclamation(!)*
```js
const dateNow = getDate(0,0,0,false,'exclamation')
// result 01!01!2022
```
*Hash(#)*
```js
const dateNow = getDate(0,0,0,false,'hash')
// result 01#01#2022
```
*Quotation(")*
```js
const dateNow = getDate(0,0,0,false,'quotation')
// result 01"01"2022
```
*ForwardSlash(/)*
```js
const dateNow = getDate(0,0,0,false,'forwardSlash')
// result 01/01/2022
```

# Starter Code
*getDate function*
```js
const { getDate } = require('@aftabmk/date');
const date = getDate(0,0,0,false,'forwardSlash')
// date now in the format dd/mm/yyyy
// result 01/01/2022
```
*getDateNow function*
```js
const { getDateNow } = require('@aftabmk/date');
const date = getDateNow(false,'forwardSlash')
// date now in the format dd/mm/yyyy
// result 01/01/2022(Today date)
```
*getEpoch function*
```js
const { getEpoch } = require('@aftabmk/date');
const date = getEpoch('14/07/2002','12:30')
// date format dd/mm/yyyy
// time format hh:mm
// result 1026630000
```
*getEpochNow function*
```js
const { getEpochNow } = require('@aftabmk/date');
const date = getEpochNow()
// no input
// result 1613889000000 in sec
```
