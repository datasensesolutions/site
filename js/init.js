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
        $(document).ready(function () {
            Materialize.updateTextFields();
        });
        $(document).ready(function () {
            $('ul.tabs').tabs();
        });


    });
})(jQuery);
