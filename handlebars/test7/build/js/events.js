$(document).on("click", ".btnDelete", function() {
  return $(this).parents("tr").remove();
});
