$(document).ready(function() {
    var isDragging = false; 
    var offsetX, offsetY; 

    function makeFootnoteDraggable($footnote) {
        var $dot = $footnote.find('.draggable-dot');

        $dot.on('mousedown', function(event) {
            isDragging = true;
            offsetX = event.clientX - $footnote.position().left;
            offsetY = event.clientY - $footnote.position().top;

            $(document).on('mousemove', function(event) {
                if (isDragging) {
                    $footnote.css({
                        top: event.clientY - offsetY,
                        left: event.clientX - offsetX,
                        position: 'absolute' 
                    });
                }
            });
        });

        $(document).on('mouseup', function() {
            isDragging = false; 
        });
    }

    $('.bigfoot-footnote').each(function() {
        var $footnote = $(this);
        makeFootnoteDraggable($footnote); 
    });

    $('.footnote-link').on('click', function(event) {
        event.preventDefault(); 
        var footnoteId = $(this).attr('href'); 
        $(footnoteId).toggle(); 
    });
});