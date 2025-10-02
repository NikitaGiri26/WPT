$(document).ready(function() {
  // Add class
  $('#add').click(function() {
    $('#heading').addClass('highlight');
  });

  // Remove class
  $('#remove').click(function() {
    $('#heading').removeClass('highlight');
  });

  // Toggle class
  $('#toggle').click(function() {
    $('#heading').toggleClass('highlight');
  });
});
