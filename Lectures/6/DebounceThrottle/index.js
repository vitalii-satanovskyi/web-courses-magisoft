console.log('it works');

function debounce(f, t) {
    return function (args) {
      let previousCall = this.lastCall;
      this.lastCall = Date.now();
      if (previousCall && ((this.lastCall - previousCall) <= t)) {
        clearTimeout(this.lastCallTimer);
      }
      this.lastCallTimer = setTimeout(() => f(args), t);
    }
  }

  function debounce1(f, t) {
    let timer;
    return function(args) {
        if(timer) {
            clearTimeout(timer);
        }
        setTimeout(() => f(args), t);
    }
  }

  function throttle (callback, limit) {

    var wait = false;
    return function () {
      if (!wait) {
  
        callback.apply(null, arguments);
        wait = true;
        setTimeout(function () {
          wait = false;
        }, limit);
      }
    }
  }

  const input = document.querySelector('input');

  const fn = () => console.log('search API call');

  const debFn = debounce(fn, 1000);
  input.addEventListener('input', debFn);


  const body = document.querySelector('body');
  const fn1 = () => console.log('scrolled');

  const trFn = throttle(fn1, 1000);

  window.addEventListener('scroll', trFn);
