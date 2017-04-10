function resetAllField() {
	form = document.getElementById("inputBox").value = "";		//One Method
	$("#outputBox").val('');									//Second Method
}

function compress() {
	var inputText = document.getElementById('inputBox').value;
	var reqSend = {};
	reqSend.value = 001;
	reqSend.data = inputText;
	console.log(inputText);
	$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:3000/compress',
		data: JSON.stringify(reqSend),
		contentType: 'application/json',
		type: "POST",
        success: function(respGet) {
            console.log("Success");
			console.log(JSON.stringify(respGet));
			document.getElementById("outputBox").value = respGet.data;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('Error: ' + errorThrown);
        }
    });
});
}