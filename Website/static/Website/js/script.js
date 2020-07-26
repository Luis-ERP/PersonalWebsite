$(function () {
    'use strict';
    var view = $(window).height();
    $('.container-fluid')
        .height(view)
        .scrollie({
            scrollOffset: -50,
            scrollingInView: function (elem) {
                var bgColor = elem.data('background');
                $('body').css('background-color', bgColor);
            }
        });
});
