const currentUrl = window.location.href;

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }
    
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

function TestPage(){
    const NewCurrentUrl = window.location.href;
console.log(NewCurrentUrl);
    if (currentUrl == NewCurrentUrl){
        window.location.href = "https://apps.apple.com/us/app/la-loteria/id1456692257";
    }
}
    

if (getMobileOperatingSystem() == "iOS") {
    try {window.location.href = "loteria://party"+ document.location.search;}
      catch(err) { }
      setTimeout(()=>{TestPage()},
      3000);
}

if (getMobileOperatingSystem() == "Android") {
    window.location.href = "loteria://party" + document.location.search;
    setTimeout(()=>{window.location.href = "https://play.google.com/store/apps/details/La_Loteria?id=com.HappyTimes.LaLoteriaA&hl=en_US";},
3000);
}
