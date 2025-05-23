$(document).ready(function() {
    // Form validation
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        let isValid = true;

        // Validate name
        if ($('#name').val().trim() === '') {
            $('#name-error').text('Please enter your name').show();
            isValid = false;
        } else {
            $('#name-error').hide();
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test($('#email').val().trim())) {
            $('#email-error').text('Please enter a valid email').show();
            isValid = false;
        } else {
            $('#email-error').hide();
        }

        // Validate message
        if ($('#message').val().trim() === '') {
            $('#message-error').text('Please enter your message').show();
            isValid = false;
        } else {
            $('#message-error').hide();
        }

        // If valid, submit form
        if (isValid) {
            this.submit();
        }
    });

    // Clear errors on input
    $('input, textarea').on('input', function() {
        const errorId = $(this).attr('id') + '-error';
        $('#' + errorId).hide();
    });
});