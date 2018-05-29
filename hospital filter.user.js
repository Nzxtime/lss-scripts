(function ($) {
    'use strict';
    function filter() {
        $('.col-md-9 tbody > tr').each(function () {
            var el = $(this);
            var beds = parseInt(el.find('td:nth-child(3)').text().trim());
            var duty = el.find('td:nth-child(4)').text().trim();
            console.log(duty);
            var maxDuty = "40";
            var elegible = ((el.find(':nth-child(4)').text()
                    .trim().indexOf('%') === -1) ? el.find(
                        'td:nth-child(4)').text() : el.find(
                        ':nth-child(5)').text()).trim() === "Ja";

            if (beds < 1 || !elegible || (!(duty.charAt(0) <= maxDuty.charAt(0)) && !(duty === "Ja"))) {
                el.hide();
            } else {
                el.show();
            }
        });
    }

    var sprechwunsch = $('#h2_sprechwunsch');
    if (sprechwunsch.length > 0 && sprechwunsch.parent().text().indexOf("Krankenhaus") > 0) {
        filter();
    }

})();
