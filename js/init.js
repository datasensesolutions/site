(function ($) {
    'use strict';
    $(function () {
        $('.datepicker').pickadate({selectYears: 20});
        $('.button-collapse').sideNav();
        $('.collapsible').collapsible({
            accordion : false
        });
        $('.parallax').parallax();
        $('.modal-trigger').leanModal();
        $('ul.tabs').tabs();
        $('select').material_select();
        $(document).ready(function () {
            Materialize.updateTextFields();
        });
        $(document).ready(function () {
            $('ul.tabs').tabs();
        });


    });
})(jQuery);
