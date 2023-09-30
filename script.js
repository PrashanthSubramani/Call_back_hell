var timmer = document.createElement("div");

setTimeout(() => {
  timmer.textContent = "Count : 10";
  setTimeout(() => {
    timmer.textContent = "Count : 9";
    setTimeout(() => {
      timmer.textContent = "Count : 8";
      setTimeout(() => {
        timmer.textContent = "Count : 7";
        setTimeout(() => {
          timmer.textContent = "Count : 6";
          setTimeout(() => {
            timmer.textContent = "Count : 5";
            setTimeout(() => {
              timmer.textContent = "Count : 4";
              setTimeout(() => {
                timmer.textContent = "Count : 3";
                setTimeout(() => {
                  timmer.textContent = "Count : 2";
                  setTimeout(() => {
                    timmer.textContent = "Count : 1";
                    setTimeout(() => {
                      timmer.textContent = "Happy Independence day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

timmer.classList.add('counter');
document.body.append(timmer);