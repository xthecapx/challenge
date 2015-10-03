var App = (function() {
    return {
        Start: function (){
            Router.init();
            Model.fetch('nav.json');
        }
    }
}());

(function () {
    App.Start();
})();