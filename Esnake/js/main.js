window.onload = function() {

    // add eventListener for tizenhwkey
    document.addEventListener("tizenhwkey", function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });
    
    var body = document.querySelector("body");

    body.addEventListener("click", function() {
    	if (!game.gstarted) {
            game.eraseCanvas();
            game.startGame();
          } else {
            game.togglePause();
          }
    });
    
};