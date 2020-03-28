const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

// Alert Message
setTimeout(function() {
  $('#message').fadeOut('slow');
}, 3000);