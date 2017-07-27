$(document).ready ->
	
	$(".sel").change ->
		console.log($(this).val());
		false

	$("input[type='checkbox']").change ->
		console.log(23);
		if $(this).prop('checked') 
			console.log('check 1 '+$(this).val() );
		else
			console.log('uncheck 1');	

	$(".btn1").click ->
		if $('.inputxt').val().length < 1
			console.log('error:');
		else if $('.inputxt').val().length == 2
			console.log('error:2');
		else	
			console.log('success:');

	###	objInterval = setInterval ( =>
	    	console.log('100 -1');
	    ), 2000;	
	$('.btn1').on "click", (e) ->

		$('body').css
					'color':'green'
		$('body').prepend('<div class="div2"></div>');
		console.log($(".inputxt").val());
		$(".inputxt").addClass 'ads'
		$(".inputxt").css
						'color':'red'
		getName();
		return

	$('.btn2').on "click", (e) ->
		clearInterval(objInterval);
		setTimeout ( =>
	    	console.log(11);
	    ), 1000;
		$('.div2').remove();
		return


	$(document).on "click", ".list-item", ->
		return###
	return


getName = ->
	console.log('checking for name....');
	return 'abc';