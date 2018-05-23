// ==UserScript==
// @name         uncheckAll
// @version      1.0
// @description  Entfernt alle ausgewählten Fahrzeuge mit einem Button-Klick und setzt den Zähler der AAO's vom Module AAO-Zähler des LSS-Managers 
// @author       Battlebozz
// @include      *://www.leitstellenspiel.de/
// @include      *://www.leitstellenspiel.de/*
// @include      *://www.missionchief.com/*
// @include      *://www.missionchief.com/
// @include      *://www.meldkamerspel.com/*
// @include      *://www.meldkamerspel.com/
// @grant        none
// ==/UserScript==

(function () {
    console.log('uncheckAll successfully loaded!');

    function uncheckAll() {
        $('input:checkbox').removeAttr('checked');

        if ($('.aaoZaehler').length) {
            $('.aaoZaehler').replaceWith(' <span class="aaoZaehler">0</span>');
        }
    }

    $('#mission-aao-group').after('<button id="uncheckAll" class="btn  btn-default btn-xs" type="button">Uncheck All</button>');
    $('#uncheckAll').click(uncheckAll);
})();
