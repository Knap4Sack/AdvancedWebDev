var url = window.location.href;
console.log(url.match(/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/));
if(url.match(/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/))
{
	if(!document.getElementById('form1')){
		document.body.style.background = 'red';
		var span = document.createElement('span');
		span.innerHTML = 
		"<form action = 'http://youtubular.herokuapp.com' type = 'submit' method = 'get' target='_blank' value = 'success' id = 'form1'>" +
		"<input type='hidden' name='type' value=" + url + " />" +
		"<input style = 'padding-top: 10px;' type = 'submit' value = 'Download Video'></input>";
		document.getElementsByClassName('yt-uix-button-subscription-container')[0].appendChild(span);
	}
}
