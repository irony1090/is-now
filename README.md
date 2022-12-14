# irony isNow
### A library that expresses rough date or time   
# use
To install ironyIsNow, use yarn
```
$ yarn add @irony0901/is-now
```

# Index
* [Examples](#Examples)   
  * [get started](#getStarted)
  * [unit setting](#unitSetting)
  * [set standard date](#setStandardDate)
  * [create instance](#createInstance)
  * [predict](#predict)

# Examples
## getStarted
``` javascript
import {isNow} from '@irony0901/is-now';

/** 
 * The argument can also be a number type. 
 * Example) isNow.about( Date.now() + 60000 )
**/
const now = Date.now();
const future_afterMoment = isNow.about( new Date( now + 60000 ) );
const future_minute = isNow.about( now + 60001 );
const future_hour = isNow.about( now + 60001 * 60 );
const future_day = isNow.about( now + 60001 * 60 * 24 );
const future_month = isNow.about( now + 60001 * 60 * 24 * 30 );
const future_year = isNow.about( now + 60001 * 60 * 24 * 365 );

const past_justBefore = isNow.about( now - 60000 );
const past_minute = isNow.about( now - 60001 );
const past_hour = isNow.about( now - (60001 * 60) );
const past_day = isNow.about( now - (60001 * 60 * 24) );
const past_month = isNow.about( now - (60001 * 60 * 24 * 30) );
const past_year = isNow.about( now - (60001 * 60 * 24 * 365) );


console.log( future_afterMoment )   // 'after a moment'
console.log( future_minute )        // '1 minute later'
console.log( future_hour )          // '1 hour later'
console.log( future_day )           // '1 day later'
console.log( future_month )         // '1 month later'
console.log( future_year )          // '1 year later'

console.log( past_justBefore )      // 'just before'
console.log( past_minute )          // '1 minute ago'
console.log( past_hour )            // '1 hour ago'
console.log( past_day )             // '1 day ago'
console.log( past_month )           // '1 month ago'
console.log( past_year )            // '1 year ago'
setTimeout(() => {
  /**
   * The current time is initialized (Property named standard in the isNow class) 
   * at the time when the 'isNow' object is loaded.
  **/ 
  console.log('[setTimeout]', isNow.about( new Date( now + 60000 ) ) ) // '[setTimeout] after a moment'
}, 2000)

```  

## unitSetting
``` javascript
import {isNow} from '@irony0901/is-now';

isNow.unit.afterMoment = '?????? ???';
isNow.unit.minuteLater = '??? ???';
isNow.unit.hourLater = '?????? ???';
isNow.unit.dayLater = '??? ???';
isNow.unit.weekLater = '??? ???';
isNow.unit.monthLater = '??? ???';
isNow.unit.yearLater = '??? ???';

isNow.unit.justBefore = '?????? ???';
isNow.unit.minuteAgo = '??? ???';
isNow.unit.hourAgo = '?????? ???';
isNow.unit.dayAgo = '??? ???';
isNow.unit.weekAgo = '??? ???';
isNow.unit.monthAgo = '??? ???';
isNow.unit.yearAgo = '??? ???';

const now = Date.now();
const future_afterMoment = isNow.about( now + 60000 );
const future_minute = isNow.about( now + 60001 );
const future_hour = isNow.about( now + 60001 * 60 );
const future_day = isNow.about( now + 60001 * 60 * 24 );
const future_month = isNow.about( now + 60001 * 60 * 24 * 30 );
const future_year = isNow.about( now + 60001 * 60 * 24 * 365 );

const past_justBefore = isNow.about( now - 60000 );
const past_minute = isNow.about( now - 60001 );
const past_hour = isNow.about( now - (60001 * 60) );
const past_day = isNow.about( now - (60001 * 60 * 24) );
const past_month = isNow.about( now - (60001 * 60 * 24 * 30) );
const past_year = isNow.about( now - (60001 * 60 * 24 * 365) );

console.log( future_afterMoment )   // '?????? ???'
console.log( future_minute )        // '1 ??? ???'
console.log( future_hour )          // '1 ?????? ???'
console.log( future_day )           // '1 ??? ???'
console.log( future_month )         // '1 ??? ???'
console.log( future_year )          // '1 ??? ???'

console.log( past_justBefore )      // '?????? ???'
console.log( past_minute )          // '1 ??? ???'
console.log( past_hour )            // '1 ?????? ???'
console.log( past_day )             // '1 ??? ???'
console.log( past_month )           // '1 ??? ???'
console.log( past_year )            // '1 ??? ???'
```

## setStandardDate
``` javascript
import {isNow} from '@irony0901/is-now';

/**
 * The method named about
 * 
**/
const compareNowResult = isNow.about() // same isNow.about( Date.now() )
console.log('compareNowResult is ', compareNowResult) // 'compareNowResult is after a moment'

isNow.standard = new Date(0); // 1970-01-01T00:00:00.000Z
const compareModifiedResult = isNow.about()
console.log('compareModifiedResult is ', compareModifiedResult) // 'compareModifiedResult is ${N} year later'

```

## createInstance
``` javascript
import { isNow, createIsNow } from '@irony0901/is-now';

const isNow_ko = createIsNow();
isNow_ko.unit.afterMoment = '?????? ???';
isNow_ko.unit.minuteLater = '??? ???';
isNow_ko.unit.hourLater = '?????? ???';
isNow_ko.unit.dayLater = '??? ???';
isNow_ko.unit.weekLater = '??? ???';
isNow_ko.unit.monthLater = '??? ???';
isNow_ko.unit.yearLater = '??? ???';

isNow_ko.unit.justBefore = '?????? ???';
isNow_ko.unit.minuteAgo = '??? ???';
isNow_ko.unit.hourAgo = '?????? ???';
isNow_ko.unit.dayAgo = '??? ???';
isNow_ko.unit.weekAgo = '??? ???';
isNow_ko.unit.monthAgo = '??? ???';
isNow_ko.unit.yearAgo = '??? ???';

console.log('Ver_Eng', isNow.about())   // 'Ver_Eng after a moment'
console.log('Ver_Ko', isNow_ko.about()) // 'Ver_Ko ?????? ???'

```

## predict
A method that can modify the return result of the `'about'` method.   
The initialization form is as follows
```
({diff, about, unit}: ElapsedPredictArg) => 
  Math.abs(diff) === about ? unit : `${about} ${unit}`
```
### ElapsedPredictArg
* diff: number   
  The difference between the time at the time of the `'about'` method and the time of the [`IsNow.standard`](#setStandardDate) field.   
  Millisecond.   
  positive value - future   
  negative value - past
* about: number   
  Unconditionally positive value.   
  Value to be expressed according to the value of the field in [`IsNow.unit`](#unitSetting)
* unit: string   
  The value of one of the fields in [`IsNow.unit`](#unitSetting)   

``` javascript
import {isNow} from '@irony0901/is-now';

const now = Date.now();
isNow.predict = ({diff, about, unit}) => {
  console.log(`[PREDICT] diff: ${diff}, about: ${about}, unit: ${unit}`);
  return Math.abs(diff) === about ? unit : `${about} ${unit}`
}

console.log('[afterMoment]', isNow.about());
/** 
 * '[PREDICT] diff: 1, about: 1, unit: after a moment'
 * '[afterMoment] after a moment'
 **/

console.log('[minute]', isNow.about(  now + (12000 * 2) ) );
/** 
 * '[PREDICT] diff: 120007, about: 2, unit: minute later'
 * '[minute] 2 minute later'
 **/

isNow.predict = ({diff, about, unit}) => {
  return Math.abs(diff) === about ? `${unit}. [${about}] millisconds` : `[${about}] ${unit}`
}

console.log('[afterMoment]', isNow.about(now + 250));
/** 
 * '[afterMoment] after a moment. [250] milliscdonds'
 **/

console.log('[minute]', isNow.about(  now + (12000 * 2) ) );
/** 
 * '[minute] [2] minute later'
 **/
```