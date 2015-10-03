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

		//Menu template
		var html = '<ul id="ulMenu">';

		for (var i = 0; i < menuItems.length; i++) {

			if(menuItems[i].items.length === 0) {
				html += '<li onmouseout="Controllers.mouseOut(this);" onmouseenter="Controllers.mouseIn(this);" onmouseover="Controllers.mouseIn(this);"><a href="' + menuItems[i].url + '" class="">' + menuItems[i].label + '</a><span class="icon-keyboard_arrow_down" id="arrow'+ menuItems[i].label +'"></span></li>';
			} else {
				html += '<li onmouseout="Controllers.mouseOut(this);" onmouseenter="Controllers.mouseIn(this);" onmouseover="Controllers.mouseIn(this);"><a href="' + menuItems[i].url + '" class="">' + menuItems[i].label + '</a><span class="icon-keyboard_arrow_down" id="arrow'+ menuItems[i].label +'" onclick="Controllers.toggle_visibility(\'subMenu'+ menuItems[i].label +'\', \'arrow' + menuItems[i].label + '\');"></span>';
				html += '<ul id="subMenu' + menuItems[i].label +  '">';

				for (var j = 0; j < menuItems[i].items.length; j++) {
					html += '<li><a href="' + menuItems[i].items[j].url + '">' + menuItems[i].items[j].label + '</a></li>';
				};

				html += '</ul></li>';
			}
		}

		html += '</ul>'

		//Creating the Menu
		document.getElementById("drawer").innerHTML = html;
	};

})();