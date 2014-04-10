//Script that generates tooltip for the Quincunx on page 2-2_riskmapping, see splash_tooltip.js for more info

$(document).ready(function() {   
     $('.qc_frame').each(function(){
        $(this).qtip({
            content: $(this).next('.tooltiptext'),
            show: {
              solo:true  
            },
            hide: {
                fixed: true,
                delay: 300
            },  
            position: {
                my: 'left bottom',
                at: 'right top',
                target: $('.qc_frame iframe'),
                adjust: {
                    y:200
                }
            },
            style: {
                classes: 'qtip-green qtip-shadow',
            }
        });
    });
    
});