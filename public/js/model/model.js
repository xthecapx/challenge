//Model get the json Data and build the Menu

var Model = (function() {
return {
	xmlhttp: null,
	url: null,

	fetch: function(url) {
		var self = this;
		this.xmlhttp = new XMLHttpRequest();
		this.url = url;

		this.xmlhttp.onreadystatechange = function() {
			if (self.xmlhttp.readyState == 4 && self.xmlhttp.status == 200) {
				var menuItems = JSON.parse(self.xmlhttp.responseText);
				self.createMenu(menuItems.items);
			}
		}

		this.xmlhttp.open("GET", this.url, true);
		this.xmlhttp.send();
	},

	createMenu: function(menuItems) {
		//Menu template
		var html = '<ul id="ulMenu">';

		for (var i = 0; i < menuItems.length; i++) {

			if(menuItems[i].items.length === 0) {

				//Parent, handles events with eventsListener
				html += '<li class="parent">';
				html += '<a href="' + menuItems[i].url + '">' + menuItems[i].label + '</a>';
				html += '<span class="icon-keyboard_arrow_down" id="arrow'+ menuItems[i].label;
				html += '"></span>';
				html += '</li>';
			} else {
				html += '<li class="parent">';
				html += '<a href="' + menuItems[i].url + '">' + menuItems[i].label + '</a>';
				html += '<span class="icon-keyboard_arrow_down" id="arrow'+ menuItems[i].label;

				//Arrow mobile menu, handles events with inline HTML
				html += '"onclick="Controllers.toggle_visibility(\'subMenu'+ menuItems[i].label +'\', \'arrow' + menuItems[i].label + '\');">';
				html += '</span>';

				//Building submenu
				html += '<ul id="subMenu' + menuItems[i].label +  '">';
				for (var j = 0; j < menuItems[i].items.length; j++) {
					html += '<li><a href="' + menuItems[i].items[j].url + '">' + menuItems[i].items[j].label + '</a></li>';
				};
				html += '</ul></li>';
			}
		}
		html += '</ul>';
		html += '<footer>&#169; 2014 Huge. All Rights Reserved.</footer>';

		//Creating the Menu
		document.getElementById("drawer").innerHTML = html;
		Controllers.eachMenu = document.querySelectorAll('li.parent');
		Controllers.overlay = document.getElementById('drawer-toggle');
		Controllers.listeners();
	}

}
})();