(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });

   
})(jQuery);




// chart js

const branchSalesCtx = document.getElementById('branchSalesChart').getContext('2d');
new Chart(branchSalesCtx, {
    type: 'bar',
    data: {
        labels: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'],
        datasets: [{
            label: 'Sales',
            data: [5000, 3800, 4200, 3900, 4500],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
});

const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['March 18', 'March 19', 'March 20', 'March 21', 'March 22', 'March 23'],
        datasets: [{
            label: 'Revenue',
            data: [12000, 13500, 14000, 14500, 15000, 15500],
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: false
        }]
    }
});