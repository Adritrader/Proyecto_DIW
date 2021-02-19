$(document).ready(main);

var contador = 1;

function main() {
    $('.menu_bar').click(function () {
        $('div').toggle();

        if (contador == 1) {
            $('div').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('div').animate({
                left: '-100%'
            });
        }

    });

};