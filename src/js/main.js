const headerBtn = document.querySelectorAll(".nav__link");

for (let i=0; i<headerBtn.length; i++) {
  headerBtn[i].onclick = function() {
    let j = 0;

    while(j < headerBtn.length) {
      headerBtn[j++].className = "nav__link";
    };

    headerBtn[i].className = "nav__link is_active";
  };

};


AOS.init();