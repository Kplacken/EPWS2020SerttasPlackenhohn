$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var truncated = Math.ceil((parseFloat($input.val()) - 0.1) * 100)/100;
        const runden = truncated.toFixed(1)
        var count = runden;
        count = count < 0.0 ? 0.0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        var truncated1 = Math.ceil((parseFloat($input.val()) + 0.1) * 100)/100;
        const runden1 = truncated1.toFixed(1)
        var count1 = runden1;
        $input.val(count1);
        $input.change();
        return false;
    });
    $('.wasserglas_07').click(function () {
        var $input = $(this).parent().find('input');
        var truncated1 = Math.ceil((parseFloat($input.val()) + 0.7) * 100)/100;
        const runden1 = truncated1.toFixed(1)
        var count1 = runden1;
        $input.val(count1);
        $input.change();
        return false;
    });
    $('.wasserglas_05').click(function () {
        var $input = $(this).parent().find('input');
        var truncated1 = Math.ceil((parseFloat($input.val()) + 0.5) * 100)/100;
        const runden1 = truncated1.toFixed(1)
        var count1 = runden1;
        $input.val(count1);
        $input.change();
        return false;
    });
    $('.wasserglas_03').click(function () {
        var $input = $(this).parent().find('input');
        var truncated1 = Math.ceil((parseFloat($input.val()) + 0.3) * 100)/100;
        const runden1 = truncated1.toFixed(1)
        var count1 = runden1;
        $input.val(count1);
        $input.change();
        return false;
    });
});