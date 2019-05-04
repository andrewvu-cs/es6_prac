//EXPORTS & IMPORTS

//example1
//person.js file
const person = {
    name: 'Max'
}
export default person
//app.js 
//You can choose the name  of the import on export default
import person from './person.js'
import prs from './person.js'

//example 2
//utility.js
export const clean = () => {...}
export const baseData = 10;
//app.js

import{baseData} from './utility.js'
import{clean} from './utility.js'
//OR
import{baseData,clean} from './utility.js'
//Have to used the exact name unless
import{something as thing} from './utility.js'
import * as allThings from './utility.js'

