
    $(document).ready(function(){
        $("li a").click(function(event){
            $('#wrapper_main-menu_navigation  li').removeClass();
            $(this).parent().addClass('wrapper_main-menu_active');
            event.preventDefault();

        });

       /* Accordion*/

        function close_accordion_section() {
            jQuery('.accordion .accordion-section-title').removeClass('active');
            jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
        }

        jQuery('.accordion-section-title').click(function(e) {
            // Grab current anchor value
            var currentAttrValue = jQuery(this).attr('href');

            if(jQuery(e.target).is('.active')) {
                close_accordion_section();
            }else {
                close_accordion_section();

                // Add active class to section title
                jQuery(this).addClass('active');
                // Open up the hidden content panel
                jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
            }

            e.preventDefault();
        });
        

    });


