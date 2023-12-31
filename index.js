// Create the canvas
// var canvas = document.createElement("canvas");
// var ctx = canvas.getContext("2d");
// canvas.width = 1000;
// canvas.height = 1000;
// document.body.appendChild(canvas);



// // load images =======================================================
// // Background image
// var bgReady = false;
// var bgImage = new Image();
// bgImage.onload = function () {
//     bgReady = true;
// };
// bgImage.src = "images/backgroundspace.jpg";

// // Hero image
// var heroReady = false;
// var heroImage = new Image();
// heroImage.onload = function () {
//     heroReady = true;
// };
// heroImage.src = "images/hero.png";

// // Monster image
// var monsterReady = false;
// var monsterImage = new Image();
// monsterImage.onload = function () {
//     monsterReady = true;
// };
// monsterImage.src = "images/monster.png";

// // done load images =====================================================



// // Define objects and variables we need =================================
// // Game objects
// var hero = {
//     speed: 256, // movement in pixels per second
//     x: 0,  // where on the canvas are they?
//     y: 0  // where on the canvas are they?
// };
// var monster = {
// // for this version, the monster does not move, so just and x and y
//     x: 0,
//     y: 0
// };
// var monstersCaught = 0;
// // End define objects and variables we need =================================

// // Keyboard controls
// var keysDown = {}; //object were we properties when keys go down
//                 // and then delete them when the key goes up
// // so the object tells us if any key is down when that keycode
// // is down.  In our game loop, we will move the hero image if when
// // we go thru render, a key is down

// addEventListener("keydown", function (e) {
//     keysDown[e.keyCode] = true;
// }, false);

// addEventListener("keyup", function (e) {
//     delete keysDown[e.keyCode];
// }, false);

// // End keyboard controls =================================================

// // Define functions ======================================================

// // Update game objects
// var update = function (modifier) {

//     // adjust based  on keys
//     if (38 in keysDown && hero.y > 32+0) { //  holding up key
//         hero.y -= hero.speed * modifier;
//     }
//     if (40 in keysDown && hero.y < canvas.height - (64 + 0)) { //  holding down key
//         hero.y += hero.speed * modifier;
//     }
//     if (37 in keysDown && hero.x > (32+0)) { // holding left key
//         hero.x -= hero.speed * modifier;
//     }
//     if (39 in keysDown && hero.x < canvas.width - (64 + 0)) { // holding right key
//         hero.x += hero.speed * modifier;
//     }
    
    
//     // Are they touching?
//     if (
//         hero.x <= (monster.x + 32)
//         && monster.x <= (hero.x + 32)
//         && hero.y <= (monster.y + 32)
//         && monster.y <= (hero.y + 32)
//     ) {
//         ++monstersCaught;       // keep track of our “score”
//         reset();       // start a new cycle
//     }
// };


// // Draw everything in the main render function ===========================
// var render = function () {
//     if (bgReady) {
//         console.log('here2');
//         ctx.drawImage(bgImage, 0, 0);
//     }
//     if (heroReady) {
//         ctx.drawImage(heroImage, hero.x, hero.y);
//     }

//     if (monsterReady) {
//         ctx.drawImage(monsterImage, monster.x, monster.y);
//     }

//     // Score
//     ctx.fillStyle = "rgb(250, 250, 250)";
//     ctx.font = "24px Helvetica";
//     ctx.textAlign = "left";
//     ctx.textBaseline = "top";
//     ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);
// };


// // The main game loop
// var main = function () {
//     var now = Date.now();
//     var delta = now - then;
//     update(delta / 1000);
//     render();
//     then = now;
//     //  Request to do this again ASAP
//     requestAnimationFrame(main);
// };


// // Reset the game when the player catches a monster
// var reset = function () {
//     hero.x = (canvas.width / 2) - 16;
//     hero.y = (canvas.height / 2) - 16;

// //Place the monster somewhere on the screen randomly
// // but not in the hedges, Article in wrong, the 64 needs to be 
// // hedge 32 + hedge 32 + char 32 = 96
//     monster.x = 32 + (Math.random() * (canvas.width - 96));
//     monster.y = 32 + (Math.random() * (canvas.height - 96));
// };

// // End define functions =================================================== 


// // Let's play this game!
// var then = Date.now();
// reset();
// main();  // call the main game loop.


//=========================================================================

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 1000;
document.body.appendChild(canvas);

// load images ========================================================
// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/backgroundspace.jpg";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
};
heroImage.src = "images/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
    monsterReady = true;
};
monsterImage.src = "images/monster.png";

// done with load images ========================================================


// define objects and variables we need =========================================

// Game objects
var hero = {
    speed: 100, // movement in pixels per second
    x: 0,  // where on the canvas are they?
    y: 0  // where on the canvas are they?
};
var monster = {
// for this version, the monster does not move, so just and x and y
    x: 0,
    y: 0
};
var monstersCaught = 0;

// end define objects and variables we need =========================================

// keyboard control =============================================
// Handle keyboard controls
var keysDown = {}; //object were we properties when keys go down
                // and then delete them when the key goes up
// so the object tells us if any key is down when that keycode
// is down.  In our game loop, we will move the hero image if when
// we go thru render, a key is down

addEventListener("keydown", function (e) {
    
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
   
    delete keysDown[e.keyCode];
}, false);

// end keyboard control =============================================


// define functions ==============================================

// Update game objects
var update = function (modifier) {
   
   //  adjust based on keys
    if (38 in keysDown && hero.y > 32 + 0) { //  holding up key
    hero.y -= hero.speed * modifier;
    }
    if (40 in keysDown && hero.y < canvas.height - (64 + 0)) { //  holding down key
        hero.y += hero.speed * modifier;
    }
    if (37 in keysDown && hero.x > (32 + 0)) { // holding left key
        hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown && hero.x < canvas.width - (64 + 0)) { // holding right key
        hero.x += hero.speed * modifier;
    }

    // Are they touching?
    if (
        hero.x <= (monster.x + 32)
        && monster.x <= (hero.x + 32)
        && hero.y <= (monster.y + 32)
        && monster.y <= (hero.y + 32)
    ) {
        ++monstersCaught;       // keep track of our “score”
        reset();       // start a new cycle
    }
        
};

// Draw everything in the main render function
var render = function () {
    if (bgReady) {
 
        ctx.drawImage(bgImage, 0, 0);
    }
    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }

    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }
  
    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);

}

// The main game loop
var main = function () {
    var now = Date.now();
    var delta = now - then;
    update(delta / 1000);
    render();
    then = now;
    //  Request to do this again ASAP
    requestAnimationFrame(main);
};

// Reset the game when the player catches a monster
var reset = function () {
    hero.x = (canvas.width / 2) -16;
    hero.y = (canvas.height / 2) -16;

    //Place the monster somewhere on the screen randomly
    // but not in the hedges, Article in wrong, the 64 needs to be 
    //  hedge 32 + hedge 32 + char 32 = 96
    monster.x = 32 + (Math.random() * (canvas.width - 96));
    monster.y = 32 + (Math.random() * (canvas.height - 96));
};

// end of define functions ==============================================

// Let's play this game!  ===============
var then = Date.now();
reset();
main();  // call the main game loop.

