$(document).ready(function() {
  let expression = "";

  // Number and operator buttons
  $('.num, .op').click(function() {
    const value = $(this).text();
    expression += value;
    $('#display').val(expression);
    $(this).addClass('highlight');
    setTimeout(() => $(this).removeClass('highlight'), 200);
  });

  // Clear button
  $('#clear').click(function() {
    expression = "";
    $('#display').val("");
    $(this).toggleClass('highlight');
  });

  // Equals button
  $('#equals').click(function() {
    try {
      const result = eval(expression);
      $('#display').val(result);
      expression = result.toString();
    } catch (e) {
      $('#display').val("Error");
      expression = "";
    }
    $(this).addClass('highlight');
    setTimeout(() => $(this).removeClass('highlight'), 200);
  });
});
