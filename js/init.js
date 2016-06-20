(function ($) {
    'use strict';
    $(function () {

        $('.button-collapse').sideNav();
        $('.collapsible').collapsible({
            accordion : false
        });
        $('.parallax').parallax();
        $('.modal-trigger').leanModal();
        $('ul.tabs').tabs();
        $('.tabs-wrapper .row').pushpin({ top: $('.tabs-wrapper').offset().top });
        $('select').material_select();
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });
        $(document).ready(function () {
            Materialize.updateTextFields();
        });
        $(document).ready(function () {
            $('ul.tabs').tabs();
        });


    });
})(jQuery);
