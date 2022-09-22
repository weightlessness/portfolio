const stringToHash = (s) => {
  for (var i = 0, h = 9; i < s.length; ) //need var due to global scope of 'H'
    h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9)
  return h ^ (h >>> 9)
}

export default stringToHash
