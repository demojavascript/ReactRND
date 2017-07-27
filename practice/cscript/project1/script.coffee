Notes = 
	init:(names = [])->
		if names.length > 0
			_table = document.createElement("table")
			_head  = document.createElement("thead")
			_body  = document.createElement("tbody")
			_tr    = document.createElement("tr")
			_col1  = document.createElement("td")
			_col1.appendChild document.createTextNode "S.No"
			_col2  = document.createElement("td")
			_col2.appendChild document.createTextNode "Name"
			_col3  = document.createElement("td")
			_col3.appendChild document.createTextNode "Action"
			_tr.append _col1, _col2, _col3
			_head.append _tr
			_table.append _head
			for val,key in names
				_tri = document.createElement('tr')
				_col1  = document.createElement("td")
				_col1.appendChild document.createTextNode "#{key+1}"
				_col2  = document.createElement("td")
				_col2.appendChild document.createTextNode "#{val}"
				_col3  = document.createElement("td")
				_edit = document.createElement('button')
				_edit.setAttribute "class", "edit"
				_edit.appendChild document.createTextNode 'Edit'
				_edit.addEventListener "click", @_editRow
				_remove = document.createElement('button')
				_remove.setAttribute "class", "afasdf"
				_remove.appendChild document.createTextNode 'Remove'
				_remove.addEventListener "click", @_removeRow
				_col3.append _remove, _edit
				_tri.append _col1, _col2, _col3
				_tri.setAttribute "id", "id#{key+1}"
				_body.appendChild _tri
			_table.append _body
			$("#notes").append _table
		else
			$("#notes").append "<p>Empty...</p>"
		false
	_removeRow:(event)->
		$(event.target).parents('tr').remove()
		false
	_editRow:(event)->
		Popup._remove()
		#console.log $(event.target).parents('tr').find('td:eq(1)').text()
		Popup.init($(event.target).parents('tr').find('td:eq(1)').text(), $(event.target).parents('tr').attr("id"))
		false	

Notes.init(['1111', '222'])

Popup = 
	init:(name, index)->
		_modal = document.createElement('div')
		_modal.setAttribute "class", "modal"
		_modal.setAttribute "data-row", "#{index}"
		_name  = document.createElement 'input'
		_name.type = 'text'
		_name.value = name
		_modal.append _name
		_btnSubmit = document.createElement 'button'
		_btnSubmit.appendChild document.createTextNode "Save"
		_btnSubmit.addEventListener "click", @_saveModal 
		_modal.appendChild _btnSubmit
		_btnClose = document.createElement 'button'
		_btnClose.appendChild document.createTextNode "Close"
		_btnClose.addEventListener "click", @_removeModal 
		_modal.appendChild _btnClose, _btnSubmit
		$('body').append _modal
		false
	_removeModal:(event)->
		$('.modal').remove()
		false
	_remove:()->
		$('.modal').remove()
		false	
	_saveModal:(event)->
		$("#notes table").find("#"+$(event.target).parents('.modal').attr('data-row')).find("td:eq(1)").text $(event.target).parents('.modal').find('input').val()
		$('.modal').remove()
		false