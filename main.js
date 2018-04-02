$(document).ready(function() {
    $('.menu .browse')
        .popup({
            inline: true,
            hoverable: true,
            position: 'bottom center',
            delay: {
                show: 300,
                hide: 800
            }
        })
    ;

    // Pop up
    $('.menu .popup.menu>a').click(function () {
        $(this).addClass('teal active');
        $(this).siblings().removeClass('teal active');
    });

    $('.item.site').popup({
        inline     : true,
        hoverable  : true,
        position   : 'top center',
        delay: {
            show: 300,
            hide: 500
        }
    });

    search();
});

function search() {

    var appContent = [
        {
            title: 'Grader',
            url: '//app.sharedcare.io/grader/',
            description: 'Efficient excel editor',
        },
        {
            title: 'Maybe Coming Soon',
            url: '//app.sharedcare.io',
            description: 'A placeholder',
        }
    ];

    $('.ui.search').search({
        source : appContent,
        searchFields   : [
            'title',
            'description',
            'url'
        ],
        fullTextSearch: 'exact'
    });
}