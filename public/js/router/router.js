// Credits: https://gist.github.com/joakimbeng/7918297

var Router = {
    routes: {
        '/': {
            controller: function() {
                this.home = 'Get paid for giving a shit';
                this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non mauris vitae justo sollicitudin mollis. Nunc nec nisl sapien. Phasellus id sagittis metus. Integer at tristique est, sed cursus nibh. Suspendisse vulputate mi at ligula tristique, sed dapibus ex molestie. In a lectus in libero faucibus porta vel et est. Aenean non ex semper, ultrices diam sed, sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tincidunt felis vitae tortor volutpat, sit amet posuere nulla hendrerit. Praesent mollis risus sit amet fringilla suscipit. Curabitur lacinia urna et elementum eleifend. Proin a leo lacinia risus tempor euismod. Aenean pharetra enim tincidunt ipsum ullamcorper tempus. Maecenas eleifend ut risus sit amet dapibus. Nunc euismod eu magna ac lobortis.';
                this.img = 'images/background-image.jpg';
            },
            templateId: "home",
        },
        'underConstruction': {
            controller: function() {
                this.img = 'images/background-image.jpg';
                this.home = 'Under construction';
                this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non mauris vitae justo sollicitudin mollis. Nunc nec nisl sapien. Phasellus id sagittis metus. Integer at tristique est, sed cursus nibh. Suspendisse vulputate mi at ligula tristique, sed dapibus ex molestie. In a lectus in libero faucibus porta vel et est. Aenean non ex semper, ultrices diam sed, sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tincidunt felis vitae tortor volutpat, sit amet posuere nulla hendrerit. Praesent mollis risus sit amet fringilla suscipit. Curabitur lacinia urna et elementum eleifend. Proin a leo lacinia risus tempor euismod. Aenean pharetra enim tincidunt ipsum ullamcorper tempus. Maecenas eleifend ut risus sit amet dapibus. Nunc euismod eu magna ac lobortis.';
            },
            templateId: "home",
        }
    },
    current: null,
    // The route registering function:
    route: function (path, templateId, controller) {
        // Allow route(path, controller) for template less routes:
        if (typeof templateId === 'function') {
            controller = templateId;
            templateId = null;
        }
        this.routes[path] = {templateId: templateId, controller: controller};
    },
    
    router: function () {
        // Current route url (getting rid of '#' in hash as well):
        var url = location.hash.slice(1) || '/';
        var route = Router.routes[url];

        if (!route) {
            console.log('Not found');
            route = Router.routes['underConstruction'];            
        }

        // Initiate the controller
        if (route && !route.templateId) {
            return route.controller ? new route.controller : null;
        }
        // Clear existing observer:
        if (Router.current) {
            Object.unobserve(Router.current.controller, Router.current.render);
            Router.current = null;
        }
        
        // Getting div.view to render
        var el = document.getElementById('view');

        if (el && route && route.controller) {

        Router.current = {
            controller: new route.controller,
            template: tmpl(route.templateId),
            render: function () {
                //Close the menu if needed
                var close = document.getElementById('drawer-toggle');

                if (close.checked) {
                    close.checked = false;
                }
                //render under div.view
                el.innerHTML = this.template(this.controller);
            }
        };

        Router.current.render();
        Object.observe(Router.current.controller, Router.current.render.bind(Router.current));
        }
    },

    init: function () {
        // Listen on hash change:
        window.addEventListener('hashchange', this.router);
        // Listen on page load:
        window.addEventListener('load', this.router);
        // Expose the route register function:
        window.route = this.route;
    }
}

