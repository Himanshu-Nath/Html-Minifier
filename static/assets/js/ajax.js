$(window).ready( function() {
  $(".alertBox").hide();
  $('.alertBoxSuccess').hide();
});

function resetAllField() {
	form = document.getElementById("inputBox").value = "";		//One Method
	$("#outputBox").val('');									//Second Method
	$(".alertBox").hide();
	$('.alertBoxSuccess').hide();
}

function compress() {
	var inputText = document.getElementById('inputBox').value;
	if(inputText.length != 0){
		var reqSend = {};
		reqSend.value = 001;
		reqSend.data = inputText;
		$(document).ready(function() {
			$.ajax({
				url: 'http://localhost:3000/compress',
				data: JSON.stringify(reqSend),
				contentType: 'application/json',
				type: "POST",
				success: function(respGet) {
					$('.alertBoxSuccess').show();
					document.getElementById("outputBox").value = respGet.data;
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log('Error: ' + errorThrown);
				}
			});
		});
	} else {
		$('.alertBox').show();
	}
}

function uncompress() {
	var type = document.getElementById('uncompressionType').value;
	var inputText = document.getElementById('inputBox').value;
	if(inputText.length != 0){
		var reqSend = {};
		reqSend.value = 001;
		reqSend.data = inputText;
		reqSend.type = type;
		$(document).ready(function() {
			$.ajax({
				url: 'http://localhost:3000/uncompress',
				data: JSON.stringify(reqSend),
				contentType: 'application/json',
				type: "POST",
				success: function(respGet) {
					$('.alertBoxSuccess').show();
					document.getElementById("outputBox").value = respGet.data;
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log('Error: ' + errorThrown);
				}
			});
		});
	} else {
		$('.alertBox').show();
	}
}