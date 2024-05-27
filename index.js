function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, item => {
      result.push(callback(item));
    });
    return result;
  }
  
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue === undefined ? collection[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
  
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
      }
    } else if (typeof collection === 'object') {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        accumulator = callback(accumulator, collection[key], collection);
      }
    }
  
    return accumulator;
  }
  
  
  function myFind(collection, predicate) {
    for (let item of collection) {
      if (predicate(item)) {
        return item;
      }
    }
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, item => {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  function myFirst(collection, n = 1) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  }
  
  function myLast(collection, n = 1) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
  }
  
  function myKeys(collection) {
    return Object.keys(collection);
  }
  
  function myValues(collection) {
    return Object.values(collection);
  }
  
  