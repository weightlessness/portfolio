import _ from "lodash"

const objectToArray = (object:Object):Array<any>|null => {
  return _.values(object)
  // if(typeof object === 'object' && object !== null) return Object.keys(object).map(key => object[key])
  // return null
}

export default objectToArray;