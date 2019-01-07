export const camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase()
  }).replace(/\s+/g, '')
}

// obj,'1.2.3' -> multiIndex(obj,['1','2','3'])
export const getPath = (obj, is) => {
  return multiIndex(obj, is.split('.'))
}

// obj,['1','2','3'] -> ((obj['1'])['2'])['3']
export const multiIndex = (obj, is) => {
  return is.length ? multiIndex(obj[is[0]], is.slice(1)) : obj
}

export const isObject = (obj = {}) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export const contains = (val, search) => {
  if (!val) {
    return
    // stop code
  }
  let i
  if (isObject(val)) {
    const keys = Object.keys(val)
    i = keys.length
    while (i--) {
      if (contains(val[keys[i]], search)) {
        return true
      }
    }
  } else if (Array.isArray(val)) {
    i = val.length
    while (i--) {
      if (contains(val[i], search)) {
        return true
      }
    }
  } else if (val !== null && val !== undefined) {
    return val.toString().toLowerCase().indexOf(search) > -1
  }
}
