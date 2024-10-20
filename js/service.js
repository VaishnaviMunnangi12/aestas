let i = 2;

$(document).ready(function () {
    $('.itemDot').click(function () {
        var dataTab = $(this).data("tab");
        $('.itemDot').removeClass('active');
        $(this).addClass('active');
        $('.CirItem').removeClass('active');
        $('.CirItem' + dataTab).addClass('active');
        i = dataTab;
    });

    // Auto switch every 2 seconds
    setInterval(function () {
        var dataTab = $('.itemDot.active').data("tab");
        if (dataTab > 5 || i > 5) { // Adjusted to 5
            dataTab = 1;
            i = 1;
        }
        $('.itemDot').removeClass('active');
        $('[data-tab="' + i + '"]').addClass('active');
        $('.CirItem').removeClass('active');
        $('.CirItem' + i).addClass('active');
        i++;
    }, 2000);
});
