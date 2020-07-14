var canvas, backgroundImg;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var player1, player2, player3, player4, players;

var hurdles = [];

function preload(){
    
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    for (var j = 35; j <=width; j=j+50){
        hurdles.push(new Hurdle(j,75,50,50));
    }
}

function draw(){
    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        game.play();

        for (var i = 0; i < hurdles.length; i++) {
            hurdles[i].display();
        }
    }
}



