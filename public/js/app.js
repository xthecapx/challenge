    route('/', 'home', function () {
        this.home = 'This is the home';
    });
    
    route('/work', 'work', function () {
    	this.greeting = 'Hello world!';
    	this.moreText = 'Work';
    });

    route('/about', 'about', function () {
    	this.heading = 'I\'m page two!';
    });