/* function goTelegram() {
    location.href = "/telegram.html";
}
document.querySelector("#item1");
onclick(goTelegram)


function goTwitter() {
    location.href = "/twitter.html";
}
document.querySelector("#item2");
onclick(goTwitter)


function goInstagram() {
    location.href = "/instagram.html";
}
document.querySelector("#item3");
onclick(goInstagram)


function goYoutube() {
    location.href = "/youtube.html";
}
document.querySelector("#item4");
onclick(goYoutube) */


 function buttonClicked(element) {
    var key = ".html";
    var name = element.id;
    var link = name.concat(key);
    // window.alert(link);
    location.href = link;
   // print(link);
} 


/* function buttonClicked(element) {
    var key = ".html";
    var name = element.id;
    var link = name.concat(key);
    window.alert(5 + 6)
}
*/
