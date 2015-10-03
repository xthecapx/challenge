//Handles DOM Events

var Controllers = {
  eachMenu: null,
  el: null,
  overlay: null,
	toggle_visibility: function (id, arrow) {

		var el = document.getElementById(id);
		var arrow = document.getElementById(arrow)

    //Spin if clicked
		if(el.style.display == 'block') {
			el.style.display = 'none';
			arrow.classList.remove('spin');
		} else {
        el.style.display = 'block';
        arrow.classList.add('spin');
		}
	},

  mouseIn: function (el) {
    //Add class .overDesktop to target <a>
    if (el.target !== el.currentTarget) {
      el.target.classList.add('overDesktop');
    }
    el.stopPropagation();
    //Show the overlay only for desktop version
    if(window.innerWidth >= 768) {
      Controllers.overlay.checked = true;
    } 
  },

  mouseOut: function(el) {
    //Remove class to firts <a> if user leave <li class="parrent">
    el.target.firstChild.classList.remove('overDesktop');
    //Close the overlay only for desktop version
    if(window.innerWidth >= 768) {
      Controllers.overlay.checked = false;
    }

  },

  listeners: function() {

    //Add EventListener to each parent <li> in the menu,
    //needed to get the over class while navigate in the sub menu
    for (var i = 0; i < this.eachMenu.length; i++) {
      this.eachMenu[i].addEventListener('mouseleave', this.mouseOut, false);
      this.eachMenu[i].addEventListener('mouseover', this.mouseIn, false);
    };

  }
}

