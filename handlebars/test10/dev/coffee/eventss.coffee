$(document).ready ->
  $(document).on 'click', '.btnDelete', ->
    $(this).parents('tr').remove()
    return
  return