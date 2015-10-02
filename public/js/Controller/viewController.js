var Controllers = {
	toggle_visibility: function (id, arrow) {

		var e = document.getElementById(id);
		var arrow = document.getElementById(arrow);

		if(e.style.display == 'block') {
			e.style.display = 'none';
			arrow.classList.remove('spin');
		} else {
		    e.style.display = 'block';
		    arrow.classList.add('spin');
		}
	}
}

