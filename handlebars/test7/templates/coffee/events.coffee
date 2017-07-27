$(document).on "click", ".btnDelete", ->
	$(this).parents("tr").remove();
