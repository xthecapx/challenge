    route('/', 'home', function () {
        this.home = 'Get paid for giving a shit';
        this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non mauris vitae justo sollicitudin mollis. Nunc nec nisl sapien. Phasellus id sagittis metus. Integer at tristique est, sed cursus nibh. Suspendisse vulputate mi at ligula tristique, sed dapibus ex molestie. In a lectus in libero faucibus porta vel et est. Aenean non ex semper, ultrices diam sed, sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tincidunt felis vitae tortor volutpat, sit amet posuere nulla hendrerit. Praesent mollis risus sit amet fringilla suscipit. Curabitur lacinia urna et elementum eleifend. Proin a leo lacinia risus tempor euismod. Aenean pharetra enim tincidunt ipsum ullamcorper tempus. Maecenas eleifend ut risus sit amet dapibus. Nunc euismod eu magna ac lobortis.';
        this.img = 'images/background-image.jpg';
    });
    
    route('/work', 'work', function () {
    	this.greeting = 'Hello world!';
    	this.moreText = 'Work';
    });

    route('/about', 'about', function () {
    	this.heading = 'I\'m page two!';
    });

    