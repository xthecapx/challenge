(function () {
	var xmlhttp = new XMLHttpRequest();
	var url = 'nav.json';

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var menuItems = JSON.parse(xmlhttp.responseText);
	        createMenu(menuItems.items);
	    }
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function createMenu(menuItems) {
		
		var html = '<ul>';

		for (var i = 0; i < menuItems.length; i++) {

			if(menuItems[i].items.length === 0) {
				html += '<li><a href="' + menuItems[i].url + '">' + menuItems[i].label + '</a></li>';
			} else {
				html += '<li><a href="' + menuItems[i].url + '">' + menuItems[i].label + '</a>';
				html += '<ul>';
					
				for (var j = 0; j < menuItems[i].items.length; j++) {
					html += '<li><a href="' + menuItems[i].items[j].url + '">' + menuItems[i].items[j].label + '</a></li>';
				};
				
				html += '</ul></li>';
			}
		}

		html += '</ul>'

		document.getElementById("drawer").innerHTML = html;
	};

})();