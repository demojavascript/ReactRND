$(document).ready(function() {
  $(document).on('click', '.btnDelete', function() {
    $(this).parents('tr').remove();
  });
});
