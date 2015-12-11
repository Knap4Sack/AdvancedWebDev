function putDownloadButton() {

	var url = window.content.location.href;
	if(url.match(/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/))
	{
		console.log(url);
		if(!content.document.getElementById('form1')){
			content.document.body.style.background = 'red';
			// console.log(document.getElementsByClassName('yt-uix-button-subscription-container'));
			var newSpan = content.document.createElement('span');
			newSpan.innerHTML = 
			"<form action = 'http://youtubular.herokuapp.com' type = 'submit' method = 'get' target='_blank' value = 'success' id = 'form1'>" +
			"<input type='hidden' name='type' value=" + url + " />" +
			"<input style = 'padding-top: 10px;' type = 'submit' value = 'Download Video'></input>";
			content.document.getElementsByClassName('yt-uix-button-subscription-container')[0].appendChild(newSpan);
		}
	}
}