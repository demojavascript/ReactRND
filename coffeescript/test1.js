// Generated by CoffeeScript 1.12.5
(function() {
  var getName;

  $(document).ready(function() {
    $(".sel").change(function() {
      console.log($(this).val());
      return false;
    });
    $("input[type='checkbox']").change(function() {
      console.log(23);
      if ($(this).prop('checked')) {
        return console.log('check 1 ' + $(this).val());
      } else {
        return console.log('uncheck 1');
      }
    });
    $(".btn1").click(function() {
      if ($('.inputxt').val().length < 1) {
        return console.log('error:');
      } else if ($('.inputxt').val().length === 2) {
        return console.log('error:2');
      } else {
        return console.log('success:');
      }
    });

    /*	objInterval = setInterval ( =>
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
    		return
     */
  });

  getName = function() {
    console.log('checking for name....');
    return 'abc';
  };

}).call(this);
