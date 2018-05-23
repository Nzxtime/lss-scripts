// ==UserScript==
// @name         Shibe Background
// @version      0.1
// @description  SHIBES!
// @author       Battlebozz
// @include      *://www.leitstellenspiel.de/
// @include      *://www.leitstellenspiel.de/*
// @include      *://www.missionchief.com/*
// @include      *://www.missionchief.com/
// @include      *://www.meldkamerspel.com/*
// @include      *://www.meldkamerspel.com/
// @grant        none
// ==/UserScript==

(function shibewallpaper() {
    function pruefeObEinsatzseiteOffen() {
        return !!window.location.href.match(/https:\/\/www\.[a-z]+\.[a-z]+\/missions\/[0-9]+$/g) || !!window.location.href.match(/https:\/\/www\.[a-z]+\.[a-z]+\/patient\/[0-9]+$/g);
    }



    if(pruefeObEinsatzseiteOffen()){
        console.log("THE DOGGOS");
        let backgrounds = ["https://i.redd.it/754c5snwaiyy.jpg", "https://i.ytimg.com/vi/utC8unlYEks/hqdefault.jpg", "https://thumbs.gfycat.com/DependentSpiritedAmurminnow-max-1mb.gif", "https://stmed.net/sites/default/files/shiba-inu-wallpapers-25624-618345.jpg"
                          ,"https://wallpapercave.com/wp/J3vYrmp.jpg, http://buzzerg.com/wp-content/uploads/8589130575190-shibe-doge-wallpaper-hd.jpg", "https://i.imgur.com/7WzUREW.png", "https://images8.alphacoders.com/367/367162.jpg"
                          ,"http://longwallpapers.com/Desktop-Wallpaper/doge-wallpapers-high-quality-For-Desktop-Wallpaper.jpg", "http://www.coolwallpapers.me/download/841/Shibe_Moon.jpg"
                          ,"https://www.desktopbackground.org/p/2014/12/18/873030_dog-shiba-inu-wallpaper-dog-hd-wallpaper-shiba-inu-hd-wallpapers_2560x1600_h.jpg"];
        let random = Math.floor(Math.random() * backgrounds.length);
//        let randomURL = "\"url('" + backgrounds[random] + "')\"";


        $('#iframe-inside-container').css('background-image', 'url("' + backgrounds[random] + '")');
    }
})();
