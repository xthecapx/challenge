var App = (function() {
    return {
        Start: function (){
            console.log('App Starting!');
            Router.init();
            Model.fetch('nav.json');
        }
    }
}());

(function () {
    App.Start();
})();