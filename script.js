let mainDiv = document.createElement("h1");
mainDiv.setAttribute("class", "mainDiv");
document.body.append(mainDiv);

let data = setTimeout(() => {
  mainDiv.innerText = 10;
  setTimeout(() => {
    mainDiv.innerText = 9;
    setTimeout(() => {
      mainDiv.innerText = 8;
      setTimeout(() => {
        mainDiv.innerText = 7;
        setTimeout(() => {
          mainDiv.innerText = 6;
          setTimeout(() => {
            mainDiv.innerText = 5;
            setTimeout(() => {
              mainDiv.innerText = 4;
              setTimeout(() => {
                mainDiv.innerText = 3;
                setTimeout(() => {
                  mainDiv.innerText = 2;
                  setTimeout(() => {
                    mainDiv.innerText = 1;
                    setTimeout(() => {
                      mainDiv.innerText = "Happy Independence Day !!";
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
