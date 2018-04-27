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

    // Menu
    $('.menu .menu>a').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    // Pop up
    $('.menu .popup.menu>a').click(function () {
        $(this).addClass('teal');
        $(this).siblings().removeClass('teal');
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

    // Sidebar
    $('.ui.sidebar')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('attach events', '.menu .ui.browse.item')
    ;

    // Accordion
    $('.ui.accordion')
        .accordion()
    ;

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
            title: 'Gallery App',
            url: '//gallery-app.sharedcare.io',
            description: 'A react app',
        }
    ];

    var siteContent = [
        {
            title: 'Home',
            url: '//sharedcare.io',
            description: 'Homepage of sharedcare.io',
        },
        {
            title: 'Profile',
            url: '//sharedcare.io/profile/',
            description: 'Profile page',
        },
        {
            title: 'Gallery',
            url: '//sharedcare.io/gallery/',
            description: 'Gallery page',
        },
        {
            title: 'Log',
            url: '//sharedcare.io/log/',
            description: 'Log page',
        },
        {
            title: 'Resume',
            url: '//sharedcare.io/pdf/Resume.pdf',
            description: 'My resume pdf file',
        },
        {
            title: 'Sitemap',
            url: '//sharedcare.io/sitemap.html',
            description: 'Site Map page for user',
        },
        {
            title: 'Sitemap.xml',
            url: '//sharedcare.io/sitemap.xml',
            description: 'XML site map for search bot',
        },
        {
            title: 'Home - Image Captioning',
            url: '//sharedcare.io/ImageCaptioning/',
            description: 'A deep learning project',
        },
        {
            title: 'Proposal - Image Captioning',
            url: '//sharedcare.io/ImageCaptioning/proposal/',
            description: 'The proposal of Image Captioning',
        },
        {
            title: 'SharedApp',
            url: '//app.sharedcare.io',
            description: 'Homepage of SharedApp',
        },
        {
            title: 'Grader | SharedApp',
            url: '//app.sharedcare.io/grader/',
            description: 'An efficient excel editor',
        },
        {
            title: 'Blog',
            url: '//blog.sharedcare.io',
            description: 'Homepage of blog',
        }
    ];

    $('.ui.search.app').search({
        source : appContent,
        searchFields   : [
            'title',
            'description',
            'url'
        ],
        fullTextSearch: 'exact'
    });

    $('.ui.search.site').search({
        source : siteContent,
        searchFields   : [
            'title',
            'description',
            'url'
        ],
        fullTextSearch: 'exact'
    });

}
