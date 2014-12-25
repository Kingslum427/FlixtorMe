$.fn.scrollTo = function( target, options, callback ){
    if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
    var settings = $.extend({
        scrollTarget  : target,
        offsetTop     : 105,
        duration      : 200,
        easing        : 'swing'
    }, options);
    return this.each(function(){
        var scrollPane = $(this);
        var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
        var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
        scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
            if (typeof callback == 'function') { callback.call(this); }
        });
    });
};

// MOVIES SPECIFIC KEYS
Mousetrap.bind('backspace', function() {
    if( $('#video-container-trailer').is(':visible') ) {
        closeTrailerOverlay();
    }
    else {
        closeMovieDetail();
    }
});

Mousetrap.bind('tab', function() {
    if( location.pathname.split('/').slice(-1)[0] == "torrents.html" ) {
        $(".menuMovies").click();
    }
    else {
        $(".selected").next().click();
    }
});

Mousetrap.bind(['enter', 'space'], function() {
    if( $('#content-overlay').is(':visible') ) {
        $('#content-overlay').find('#btnPlay').click();
    }
    else {
        $('#movieContainer').find('.on').click();
    }
});

Mousetrap.bind('right', function() {
    $(".on").parent().next(".element").find('.shadow').mouseover();
    $('#movies').scrollTo('.on');
});

Mousetrap.bind('left', function() {
    $(".on").parent().prev(".element").find('.shadow').mouseover();
    $('#movies').scrollTo('.on');
});

Mousetrap.bind('q', function() {
    if( $(".current").next(".btn-quality").length > 0 ) {
        $(".current").next(".btn-quality").click();
    }
    else {
        $(".btn-quality")[0].click();
    }

});

Mousetrap.bind('t', function() {
    if( $('#content-overlay').is(':visible') ) {
        $('#content-overlay').find('#btnTrailer').click();
    }
});

Mousetrap.bind('b', function() {
    if( $('#content-overlay').is(':visible') ) {
        $('#content-overlay').find('#btnBuy').click();
    }
});