(function () {
    var poller = new window.massrel.Poller({
        limit: 5, // slice to 5 with processData()
        frequency: 15 // update every 15 seconds
    }, function () {
        
        // run some fun CSS3 animation magic!
        setTimeout(function () {
            $('.fade').addClass('animation rotateLeft');
        }, 15000);
        
        
        var bandArray = this.processData();

        $('.bands').fadeOut(function () {
            $(this).children().remove();
            for (i = 0; i < bandArray.length; i++) {
                $('.bands').append('<li class="fade"><span>' + bandArray[i].name + '</span> <span class="right"><span class="red">' + numberWithCommas(bandArray[i].count) + '</span> <small>Mentions</small></span></li>');
            }
        }).fadeIn();
    });

    // return a number with the correct comma delimited formatting
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    poller.start();
}())
