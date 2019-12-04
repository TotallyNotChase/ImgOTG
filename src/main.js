angle=0;
chrome.runtime.onMessage.addListener(
    function(request) {
      if (request == "rotate_clock"){
        document.getElementsByTagName("img")[0].style.transform = "rotate("+((angle+=90)%360)+"deg)";
      }
      else if (request == "rotate_anticlock"){
        document.getElementsByTagName("img")[0].style.transform = "rotate("+((angle-=90)%360)+"deg)";
      }
    });
