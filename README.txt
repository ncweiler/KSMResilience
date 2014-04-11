First off, take a deep breath! Everything is going to be OK.

Second, if you are really stuck, feel free to e-mail Nick (ncweiler@gmail.com) or John (jthompson1216@gmail.com), we promise we won't drop off the grid completely!

The KSM_Resilience directory consists of a few folders containing different parts of the exhibit:

    media - this contains all the videos, photographs and thumbnails for the different parts of the website. It is broken down by       section. WARNING: If you change the locations of these files (even renaming them or the folders that they are in), then you       have to go to every part pof the website where they are reference and make sure the path name is the same otherwise the           images will not load. 
    
        -Sections 1-4 ("1_casestudies", "2_risk", "3_planning" and "4_networks") contain the relevant images for all the thumbnails in those sections as well as the thumbnails on the main page that lead to those secions.
        -The Case studies have their own folders (1-1_cityunderwater, 1-2_buildingforthenextstorm, 1-                   3_culturesofEQresilience, and 1-4_surgingseas) which contain all of the photographs, stock images and videos for the relevant section.
        -Finally, home3.png and left_grey.png are the home and back arrow icon used in the header bar
        
        WARNING AGAIN: Be very careful about chaning the names or locations of these images. Don't do this unless you absolutely       have to and even then make sure to update all the links on the other pages.

    unused - fairly self-explanatory, this folder contains pages that are not currently in use for the exhibit but could                        potentially come in handy in the future
    
    .git - ignore this for now. It contains information for which files don't need to be updated when the directory is downloaded            from the git server.
    
The rest of the files in the main KSM_Resilience folder comprise the interactive exhibit. There are 3 types of files:
    
    .html - the structural backbone of the exhibit. The html files make up the individual pages of the website and each file corresponds to one of the pages. They contain all the text, as well as the links to other pages, videos and content that will be displayed in the exhibit.
    
    .css - stands for Cascading Style Sheet (style sheet being the important takeaway). These files contain all of the formatting options for the various elements that appear on the individual pages. Examples include size, position, font, back ground color, border and margin
    
    .js - javascript files aka "what let's you do the cool stuff". These files contain code that perform certain actions when certain conditions are fulfilled. For the website, they are only used to generate the tooltips on the mainpage and to redirect the website to the mainpage after you leave it idle for too long.
    
HTML
    
The html files are broken up into the various elements that make up each part of the page. They normally look like 