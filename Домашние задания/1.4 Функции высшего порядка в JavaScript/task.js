// Задача №1
function cachingDecoratorNew(func) {
  let cache = [];

  return function wrapper(...args) {
    const hash = md5(args);
    
    const obj = cache.find(item => item.hash === hash);
    if (obj) {
      console.log("Из кеша: " + obj.value);
      return "Из кеша: " + obj.value;
    }

    const result = func(...args);
    cache.push({ hash: hash, value: result });

    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}


// Задача №2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let isFirstCall = true;

  function wrapper(...args) {
    wrapper.allCount++;

    if (isFirstCall) {
      func(...args);
      wrapper.count++;
      isFirstCall = false;
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}

