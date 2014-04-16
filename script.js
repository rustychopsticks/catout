var score = 0
$(document).ready(function() {
	level_1()
});

function replacecat() {
	$('#cat').remove()
	$('#catstart')[0].innerHTML = '<img src="cat.jpg" height="70" width="90" id="cat" style="position:absolute; top:250px">'
}

function updatescore() {
	score += 1
	var newHTML = '<h1>'+score+'</h1>'
	$('#topwell')[0].innerHTML = newHTML
}

function level_1() { 
	$("#r").click(function() {
		// initialise
		$('#instr').remove()
		$('#topwell').css('margin-left','50%').css('width','40px').css('height','30px').css('text-align', 'center').css('color','red')
		$('#top').append('<div class="span1" id="score"></div>')
		$('#score').css('height','30px')
		$('#r').remove()
		$('#btnholder')[0].innerHTML = '<div class="btn btn-large btn-info disabled" id="r2">Right</div>'
		$("#cat").animate({left: "+=1000"}, 2000)
		setTimeout(function() {
			alert('CAT OUT')
			replacecat()
			updatescore()
			level_2()
		}, 2505)
	})
}

function level_2() {
	var click = 0
	$('#r2').show()
	$('#r2').removeClass('disabled')
	$("#r2").click(function() {
		$("#cat").animate({left: "+=200"}, 500)
		click += 1
		if (click == 5) {
			$('#r2').addClass('disabled')
			setTimeout(function() {
				$('#r2').remove()
				alert('CAT OUT')
				replacecat()
				updatescore()
				level_3()
			}, 1000)
		}
	})
}

function level_3() {
	$('#btnholder')[0].innerHTML = '<div class="btn btn-large btn-warning" id="l3" >Left</div><div class="btn btn-large btn-info" id="r3">Right</div>'
	$('#btnholder').css('margin-left','47%')
	var limit = 0
	var clicks = 0
	$('#l3').click(function() {
		if ((limit > 0) && (limit <= 6)) {
			$("#cat").animate({left: "-=200"}, 500)
			limit -= 1
			clicks += 1
		}
	})
	$('#r3').click(function() {
		if ((limit >= 0) && (limit < 6)) {
			$("#cat").animate({left: "+=200"}, 500)
			limit += 1
			clicks += 1
			if (limit == 5) {
				if (clicks > 12) {
					$('#l3').addClass('disabled')
					$('#r3').addClass('disabled')
					$('#cat').remove()
					updatescore()
					level_4()
				}
				else {
					$('#l3').addClass('disabled')
					$('#r3').addClass('disabled')
					$('#cat').remove()
					alert("The cat didn't get enough exercise and died!\nGame over!\nPress retry to start over.")
					$('#restart').show()
					$('#restart').click(function() {
						location.reload()
					})
				}				
			}
		}
	})	
}

function level_4() {
	alert('level4')


}


