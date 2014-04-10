// Javascript that contains scripts for the hover over tool tips on the main page. The first line in each section ($('#casestudies'), $('#risk'), etc.) refers to which thumbnail on the main page the block of code controls the tool tip for. Each of the 4 code blocks is associated with one of the thumbnails on the splash page, and when the mouse hovers over that thumbnail, these blocks cause the associated tooltip (see comments on index.html) to display.

// The tool tips are created using a free, open source, third party plug-in called Q-tip. Hopefully, you shouldn't have to mess too much with this but all of the documentation and examples of how to use this can be found online at http://qtip2.com/.

// If you need to edit the text of the tooltips, that is done on index.html. The code blocks here control the behavior of the tooltips themselves. Some useful qualities include:

// hide:{ fixed: true} this causes the tooltips to remain on screen if moused over, to turn off behavior set true to false
// hide:{delay: (number)} this sets how long the tooltips stay displayed if the mouse leaves the thumbnail, change the number as you please

//position
// my: determines where the arrow on the tool tip is (eg. left top, middle right, top left, etc.)
// at: determines where the tool tip is in relation to the thumbnail

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