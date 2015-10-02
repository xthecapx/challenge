var App = (function() {
    return {
        Start: function (){
            console.log('App Starting!');
            Router.init();
        }
    }
}());

(function () {
    App.Start();
})();