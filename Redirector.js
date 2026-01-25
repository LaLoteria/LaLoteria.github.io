const currentUrl = window.location.href;

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows/i.test(userAgent)) {
        return "WindowsComp";
    }
    
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
   if (/Macintosh/i.test(userAgent) && navigator.maxTouchPoints <= 1) {
        return "MacComp";
    return "unknown";
}

function ToAppStore(){
    const NewCurrentUrl = window.location.href;
console.log(NewCurrentUrl);
    if (currentUrl == NewCurrentUrl){
        window.location.href = "https://apps.apple.com/us/app/la-loteria/id1456692257";
    }
}
    

if (getMobileOperatingSystem() == "iOS") {
    try {window.location.href = "loteria://party"+ document.location.search;}
      catch(err) { }
      setTimeout(()=>{ToAppStore()},
      3000);
}

if (getMobileOperatingSystem() == "Android") {
    window.location.href = "loteria://party" + document.location.search;
    setTimeout(()=>{window.location.href = "https://play.google.com/store/apps/details/La_Loteria?id=com.HappyTimes.LaLoteriaA&hl=en_US";},
3000);
}


    if(getMobileOperatingSystem() == "WindowsComp"{
    const textElement = document.getElementById("WindowMax");
    textElement.innerText = "On a Windows Computer.";
       }

        if(getMobileOperatingSystem() == "MacComp"{
    const textElement = document.getElementById("WindowMax");
    textElement.innerText = "On a Mac Computer.";
       }

    
//window.onload = function() {
 //const textElement = document.getElementById("WindowMax");
    
    // 3. Change the text content
   // textElement.innerText = "now to see if this is a window computer or not";
//}


