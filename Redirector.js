const currentUrl = window.location.href;




function getMobileOperatingSystem() {
    const ua = navigator.userAgent;

    if (/iPhone|iPad|iPod/i.test(ua)) {
        return "iOS";
    } else if (/Android/i.test(ua)) {
        return "Android";
    } else if (/Win/i.test(ua)) {
        return "WindowsComp";
    } else if (/Mac/i.test(ua)) {
        // Note: Newer iPads sometimes identify as Macintosh; 
        // common fix is to check for touch support.
        return (navigator.maxTouchPoints > 0) ? "iPad" : "Mac Computer";
    } else {
        return "Other/Unknown";
    }
}

window.onload = function() {
    // 1. Get the detected device type
    const detectedDevice = getDeviceType();
    
    // 2. Find the element by its ID
    const textElement = document.getElementById("heading");
    
    // 3. Change the text content
    textElement.innerText = detectedDevice;
};








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

//if(getMobileOperatingSystem() == "WindowsComp"{
//    console.log("using window computer");
  //  document.getElementById("heading").innerHTML = "<em>Updated with HTML</em>";

}







