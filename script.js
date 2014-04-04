$(document).ready(function() {
    $('#casestudies').each(function(){
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
                my: 'left top',
                at: 'right bottom',
                target: $('#casestudies a img'),
                adjust: {
                    y:-250
                }
            },
            style: {
                classes: 'qtip-green qtip-shadow'
            }
        });
    });
    
     $('#risk').each(function(){
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
                my: 'right top',
                at: 'left bottom',
                target: $('#risk a img'),
                adjust: {
                    y:-250
                }
            },
            style: {
                classes: 'qtip-green qtip-shadow'
            }
        });
    });
    
     $('#planning').each(function(){
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
                target: $('#planning a img'),
                adjust: {
                    y:200
                }
            },
            style: {
                classes: 'qtip-green qtip-shadow',
            }
        });
    });
    
     $('#networks').each(function(){
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
                my: 'right bottom',
                at: 'left top',
                target: $('#networks a img'),
                adjust: {
                    y:200
                }
            },
            style: {
                classes: 'qtip-green qtip-shadow'
            }
        });
    }); 
});