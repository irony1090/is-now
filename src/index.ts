import * as isNow from 'is_now';
// isNow.default.predict = ({diff, about, unit}) => {
//   console.log(`[PREDICT] diff: ${diff}, about: ${about}, unit: ${unit}`);
//   return Math.abs(diff) === about ? unit : `${about} ${unit}`
// }
isNow.default.predict = ({diff, about, unit}) => {
  return Math.abs(diff) === about ? `[${about}] millisconds` : `[${about}] ${unit}`
}
const first_result = isNow.default.about(Date.now()+250) // same isNow.about( Date.now() )
console.log('first_result is ', first_result) // 'first_result is after a moment'

// isNow.standard = new Date(0); // 1970-01-01T00:00:00.000Z
const second_result = isNow.default.about(Date.now()+120000) // same isNow.about( Date.now() )
console.log('second_result is ', second_result) // 'second_result is {N} year 
export default isNow;