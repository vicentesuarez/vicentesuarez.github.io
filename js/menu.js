/**
 * Created by phpdev on 9/11/16.
 */
function Menu(closeButton) {

    this.container = O('container');
    this.content = O('content');
    this.mask = O('mask');
    this.menu = O('menu');

    closeButton.onclick = function(event) {
        event.preventDefault();

    }

    this.mask.onclick = function (event) {
        event.preventDefault();
    }
    
    function open() {
        this.con
    }
}