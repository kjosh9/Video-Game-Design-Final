/////////////////////////////////////////////////////////////////
//  Checkpoint 2 of final project
//  Joshua Knestaut
//  Date: 12/12/2015
//
//
//  I was a little ambitious to think that I could write a few
//  levels by myself in the amount of time. I only wrote one
//  and then a psuedo level just for the boss fight.
//


angleMode = "radians";

//stars
var StarsOBJ = function(x,y,b){

    this.x = x;
    this.y = y;
    this.bright = b;

};

var mountains = [[],[],[],[]];

var a = 500;
for (var i=0; i<=3; i++) {
    for (var j=0; j<=40; j++) {
        mountains[i][j] = map(noise(a),0,1,0,400-i*50);
        a += 0.05;
    }
}

var barOBJ = function(x,y){
    this.x = x;
    this.y = y;

};

var heartOBJ = function(x,y){
    this.x = x;
    this.y = y;
};

var tilemap1 = [
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                 e    ",
    "                      ",
    "   b                  ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "   b                  ",
    "                      ",
    "               e      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "         e            ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "   b                  ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "   b                  ",
    "                      ",
    "                  e   ",
    "                      ",
    "                      ",
    "                      ",
    "               e      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                   e  ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                e     ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "         e            ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                e     ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "           e          ",
    "                      ",
    "                      ",
    "                      ",
    "               e      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "     b                ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                e     ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "               e      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "         e            ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                e     ",
    "                      ",
    "                      ",
    "                      ",
    "    b                 ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "           e          ",
    "                      ",
    "                      ",
    "                      ",
    "               e      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                e     ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "     b         e      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",];

var tilemap2 = [
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                 e    ",
    "                      ",
    "   b                  ",
    "                      ",
    "                e     ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "   b                  ",
    "                      ",
    "               e      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "         e            ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "   b                  ",
    "           e          ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "   b                  ",
    "                      ",
    "                  e   ",
    "                      ",
    "                      ",
    "                      ",
    "               e      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "              e       ",
    "                      ",
    "                   e  ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                e     ",
    "                      ",
    "      b               ",
    "                      ",
    "                      ",
    "                      ",
    "         e            ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                e     ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "           e          ",
    "                      ",
    "                      ",
    "                      ",
    "               e      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "     b                ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                e     ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "               e      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "         e            ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                e     ",
    "                      ",
    "                      ",
    "                      ",
    "    b                 ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "           e          ",
    "                      ",
    "                      ",
    "                      ",
    "               e      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                e     ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",
    "     b         e      ",
    "                      ",
    "                      ",
    "                      ",
    "                      ",];

var barriers = [];

//space plane that flies across planet
var FighterOBJ = function(x,y){

    this.position = new PVector(x,y);
    this.velocity = new PVector(0,-1);

};

//planet
var PlanetOBJ = function(x,y){
    this.x = x;
    this.y = y;
};

//start screen
var StartSOBJ = function(){

  this.up = true;

};

//options/menu screen
var OptionsSOBJ = function(){

  this.up = true;
  this.select = 1;
  this.active_change = false;
  this.inpt = new PVector(0,0);

};

//the player
var PlayerOBJ = function(x,y){
    this.position = new PVector(x,y);
    this.jump = 0;
    this.aim = new PVector(1,0);
    this.walking  = 0;
    this.walingCount = 0;
    this.locate = new PVector(x,y);

    this.respawn = 0;
    this.respawnCount = new PVector(0,0);

    //players shots
    this.shots = [];

};

var color0;
var color1;
var color2;
var color3;
var color4;

var rows;
var upshot;

color0 = color(255,255,255);
color1 = color(0,0,0);
color2 = color(240, 102, 9);
color3 = color(253,210,157);
color4 = color(71, 71, 71);
color4 = color(64, 63, 63);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//pixels for the main character
rows = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,9,9,9,9,9,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,9,9,9,9,9,1,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,9,9,9,9,9,9,1,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,9,9,9,9,9,1,3,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,9,1,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,9,9,1,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,9,9,9,1,4,4,4,4,4,4,4,4,4,4,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,9,1,1,1,1,1,4,4,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,1,9,9,9,9,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,9,1,1,1,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,9,1,0,0,1,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,1,0,0,0,1,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,1,0,0,0,1,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,1,1,0,0,1,9,9,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,9,9,1,0,1,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
upshot = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,9,9,9,9,9,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,9,9,9,9,9,1,3,3,1,0,0,0,0,0,0,0,0,0,1,4,1,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,9,9,9,9,9,9,1,3,3,1,0,0,0,0,0,0,0,0,1,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,9,9,9,9,9,1,3,3,3,1,0,0,0,0,0,0,0,1,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,9,1,3,3,1,0,0,0,0,0,1,4,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,9,9,1,3,1,0,0,0,0,0,1,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,9,9,9,1,0,0,0,0,0,1,4,1,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,9,9,1,0,0,0,0,1,4,4,4,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,9,1,0,0,0,1,9,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,4,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,3,1,0,0,1,1,9,4,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,1,1,1,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,1,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,9,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,9,1,1,1,2,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,9,1,0,0,1,2,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,1,0,0,0,1,2,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,9,1,0,0,0,1,2,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,1,1,0,0,1,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,1,1,1,0,1,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//the explosion for the space craft
var explosionOBJ = function(x,y,i){
    this.position = new PVector(random(-10,10), random(-10,10));
    this.size = (6*i);
    this.count = 0;
    this.c1 = random(200,255);
    this.c2 = random(0,200);
    this.i = i;
};

//the shooting enemy
var enemyOBJ = function(x,y){
    this.position = new PVector(x,y);
    this.active = 0;
    this.dead = 0;
    this.shots = [];
    this.direction = new PVector(0,1);
    this.explosion = [];
    this.explosionCount = 0;
    this.isDead = 0;
};

var gooOBJ = function(x,y){

    //vectors for the physics
    this.position = new PVector(x,y);
    this.velocity = new PVector(random(-3,3),random(-3,3));
    this.acceleration = new PVector(0, 0.03);
    this.count = 0;


};

var bubbleOBJ = function(x, y){
    this.position = new PVector(x,y);
    this.direction = new PVector(0,-5);

    this.state = 0;
    this.squish = new PVector(-2,80);

    this.goo = [];

    this.isDead = 0;
};

//the bullets or shots
var shotOBJ = function(x,y,Rx,Ry,z){

    this.position = new PVector(x,y);
    this.angle = 0;
    this.direction = new PVector(Rx, Ry);
    this.active = 1;

    this.enemy = z;
};

//the first map
var mapOBJ = function(){
    this.position = new PVector(0,0);
};

var map2OBJ = function(){
    this.position = new PVector(0,0);
};

var craterOBJ = function(x,y,size){
    this.x = x;
    this.y = y;
    this.size = size;
};

var bubShots = function(x,y,dx,dy){
    this.position = new PVector(x,y);
    this.direction = new PVector(dx,dy);

    this.active = 0;
    this.goo = [];
    this.gooCount = 0;
    this.state = 0;


};

var BubbleBoss = function(x,y){

    this.position = new PVector(x,y);
    this.direction = new PVector(0,1);
    this.accel = new PVector(0,0.05);
    this.state = 0;
    this.slamSample = 0;

    this.bubbles = [];
    this.goo = [];
    this.lives= 10;

    for(j = 0; j < 3; j++){

        this.bubbles.push(new bubShots(0,0,0,0));

    }

};

var Boss = new BubbleBoss(300,100);

var craters = [];

//fill array with all craters
for(i = 0; i < 25; i++){
    craters[i] = new craterOBJ(300*i, random(300, 380), random(5,8));
}

//drawing the crater
craterOBJ.prototype.draw = function() {

    stroke(0, 0, 0);
    fill(16, 43, 115,90);
    ellipse(this.x, this.y, 20*this.size, 4*this.size);
    noFill();
    bezier(this.x+(10*this.size), this.y, this.x+(10*this.size)+5 , this.y+15, this.x+(this.size*10)+30, this.y+20, this.x+(this.size*10)+30, this.y+20);
    bezier(this.x-(10*this.size), this.y, this.x-(10*this.size)-5 , this.y+15, this.x-(this.size*10)-30, this.y+20, this.x-(this.size*10)-30, this.y+20);



    /*kills my program
    noStroke();
    for(i =0; i < 80; i++){
        fill(0,0,0,(10+(i/50)));
        ellipse(this.x, this.y, 20*this.size - (2.5*i), 4*this.size - (i/2));
    }
    stroke(0, 0, 0);
    */
};

//array of shooting enemies
var enemies = [];
//enemies.push(new enemyOBJ(300,300));

//counter to determine length between shots
var lastShot = 0;

//score variable
var score = 0;

//lives you have left
var hearts = [new heartOBJ(280, 13), new heartOBJ(310, 13), new heartOBJ(340, 13), new heartOBJ(370, 13)];

//array of all stars
var stars = [];

var keyArray = [];

//first map of game
var map1 = new mapOBJ();
var map2 = new map2OBJ();


var bubbleEnemy = [];

var ranger = new PlayerOBJ(50, 300);


//initiate stars randomly
for(var i = 0; i < 100; i++){
    stars.push(new StarsOBJ(random(-50,400), random(-50,400), random(30,60)));
}

var planet = new PlanetOBJ(550, 620);

// two variables to control movement of
// planet, title, and stars
var j = 0;
var k = 0;
var l = 0;
var m = 0;

//state for fsm
var state = 1;

var bubbleCount = 0;

// difficulty option`
var difficulty = ["Easy", "Normal", "Hard", "Extreme"];
var diff_index = 1;

// planet color option
var planet_color = ["Green", "Blue", "Purple", "Red"];
var color_index = 1;

//start screen
var StartScreen = new StartSOBJ();

//options screen
var OptionsScreen = new OptionsSOBJ();

//space fighter
var fighter = new FighterOBJ(450, 200);

var initTilemap1 = function() {

    for (var i = 0; i < tilemap1.length; i++) {

        for (var j = 0; j < tilemap1[j].length; j++) {

            switch (tilemap1[i][j]) {

                case 'b': bubbleEnemy.push(new bubbleOBJ(i*20, 320));

                    break;

                case 'e': enemies.push(new enemyOBJ(i*20, 400-j*20));

                    break;
            }
        }
    }
};

var initTilemap2 = function() {

    for (var i = 0; i < tilemap2.length; i++) {

        for (var j = 0; j < tilemap2[j].length; j++) {

            switch (tilemap2[i][j]) {

                case 'b': bubbleEnemy.push(new bubbleOBJ(i*20, 320));

                    break;

                case 'e': enemies.push(new enemyOBJ(i*20, 400-j*20));

                    break;
            }
        }
    }
};


heartOBJ.prototype.draw = function() {
    ellipse(this.x, this.y, 15, 15);
};

//fighter plane drawing
FighterOBJ.prototype.draw = function() {

  pushMatrix();

  //turn 45 degrees
  rotate(PI/4);
  translate(this.position.x, this.position.y);

  //flame trail
  fill(255, 255, 0, 100);
  triangle(5, 20, 10, 20, 7.5, 40);
  triangle(-10, 20, -5, 20, -7.5, 40);

  //fighter body
  noStroke();
  fill(77, 77,77);
  ellipse(0, 0, 20, 20);
  rect(5, 0, 5, 20);
  rect(-10, 0, 5, 20);

  popMatrix();

};

//fighter plane movement
FighterOBJ.prototype.move = function(){

    this.position.add(this.velocity);
    if(this.position.y < -200){
        this.position.y = 300;
    }
};

StarsOBJ.prototype.draw = function(j) {

    pushMatrix();

    //a star is just a small square
    //rotated 45 degrees
    translate(this.x + (j/10), this.y + (j/10));
    rotate(PI/4);

    fill(255, 255, 255);
    rect(-1, -1, 2, 2);

    //control brightness of all stars
    for(var i = 0; i < this.bright; i++){
        fill(255, 255, 255, 2);
        ellipse(0,0,2*(i/10), 2*(i/10));
    }


    popMatrix();
};

PlanetOBJ.prototype.draw = function(j) {

    pushMatrix();

    //variable j moves the planet
    translate(this.x+j, this.y+j);

    //switch controlling color
    switch(color_index){
        case 0:
            //Green
            //planet
            fill(51, 135, 38);
            ellipse(0, 0, 350+2.5*k, 350+2.5*k);

            //planet hue
            for(var i = 0; i < 40; i++){
                fill(51, 135, 38, 10);
                ellipse(0, 0, 350+(2*i)+4*k, 350+(2*i)+4*k);
            }
            break;

        case 1:
            //Blue
            //planet
            fill(46, 107, 230);
            ellipse(0, 0, 350+2.5*k, 350+2.5*k);

            //planet hue
            for(var i = 0; i < 40; i++){
                fill(46+i, 107+i, 230+i, 10);
                ellipse(0, 0, 350+(2*i)+4*k, 350+(2*i)+4*k);
            }
            break;

        case 2:
            //purple
            //planet
            fill(178, 46, 230);
            ellipse(0, 0, 350+2.5*k, 350+2.5*k);

            //planet hue
            for(var i = 0; i < 40; i++){
                fill(178+i, 46+i, 230+i, 10);
                ellipse(0, 0, 350+(2*i)+4*k, 350+(2*i)+4*k);
            }
            break;


        case 3:
            //Red
            //planet
            fill(196, 27, 8);
            ellipse(0, 0, 350+2.5*k, 350+2.5*k);

            //planet hue
            for(var i = 0; i < 40; i++){
                fill(196+i, 27+i, 8+i, 10);
                ellipse(0, 0, 350+(2*i)+4*k, 350+(2*i)+4*k);
            }
            break;
    }

    popMatrix();
};

//simple drawing of start screen
StartSOBJ.prototype.draw = function(l){

    noStroke();

    if(l > 3){
        fill(255, 255, 0);
        textSize(45);

        text("Space Conquest", 30, 100);

        textSize(20);
        text("Press space to continue", 90, 200);

    }

    textSize(20);
    fill(255, 255, 0);
    text("Created by Joshua Knestaut", 10, 380);

};

//display all text for start screen
OptionsSOBJ.prototype.draw = function(){

    fill(255, 255, 0);
    textSize(45);

    text("Space Conquest", 30, 100);

    textSize(20);

    //option is enlarged when option is chosen

    //display difficulty option
    if(this.select === 1){
        textSize(25);
    }
    text("Difficulty: ", 50, 200);
    textSize(20);
    text(difficulty[diff_index], 200, 201);
    //text(diff_index, 300, 200);

    //display option 2
    if(this.select === 2){
        textSize(25);
    }
    text("Planet Color: ", 50, 250);
    textSize(20);
    text(planet_color[color_index], 200, 250);

    //display option 3
    if(this.select === 3){
        textSize(25);
    }


    text("Use keypad to chose options", 10, 150);
    text("Press space to continue", 10, 380);

};

//interface with keys
OptionsSOBJ.prototype.update = function(){

    if(this.active_change === false){

        //will change options menu
        // based on last pressed
        // key
        switch(this.select){

            case 1: //option 1

                if(this.inpt.y === 1){//option change
                    this.select = 2;
                }

                //difficulty change
                if(((this.inpt.x + diff_index)>=0)&&((this.inpt.x + diff_index)<4)){
                    diff_index += this.inpt.x;
                }

                break;

            case 2: // option 2

                if(this.inpt.y === -1){
                    this.select+=this.inpt.y;//option change
                }

                //color change
                if(((this.inpt.x + color_index)>=0)&&((this.inpt.x + color_index)<4)){
                    color_index += this.inpt.x;
                }


                break;



        }

        //reset inputs
        this.inpt.x = 0;
        this.inpt.y = 0;
    }

        // this will select the most
        // recent key
    if(keyArray[UP] === 1){
        this.inpt.y = -1;
        this.inpt.x = 0;
        this.active_change = true;
    }
    else if(keyArray[DOWN] === 1){
        this.inpt.y = 1;
        this.inpt.x = 0;
        this.active_change = true;
    }
    else if(keyArray[RIGHT] === 1){
        this.inpt.y = 0;
        this.inpt.x = 1;
        this.active_change = true;
        //background(255, 0, 0);
    }
    else if(keyArray[LEFT] === 1){
        this.inpt.y = 0;
        this.inpt.x = -1;
        this.active_change = true;
        //background(255,255,0);
    }
    else{
        //if all keys are released,
        //then the options will change
        this.active_change = false;
    }


};

BubbleBoss.prototype.draw = function() {
    if(this.state !== 5){
        noStroke();


        fill(222, 62, 190, 150);
        if(color_index === 2 || color_index === 3){
            fill(7, 168, 39,150);
        }

        ellipse(this.position.x, this.position.y, 120, 120);

        //eyes
        fill(255, 255, 255);
        ellipse(this.position.x+20, this.position.y-20, 10, 9);
        ellipse(this.position.x-20, this.position.y-20, 10, 9);

        fill(0, 0, 0);
        ellipse(this.position.x+20, this.position.y-20, 2,2);
        ellipse(this.position.x-20, this.position.y-20, 2,2);

        //eyebrows
        fill(0, 0, 0);
        stroke(0, 0, 0);
        line(this.position.x+15, this.position.y-24, this.position.x+24, this.position.y-28);
        line(this.position.x-15, this.position.y-24, this.position.x-24, this.position.y-28);

        //crown
        noStroke();
        fill(255, 255, 0);
        rect(this.position.x-15, this.position.y-65, 30, 10);
        triangle(this.position.x+15, this.position.y-65, this.position.x+20, this.position.y-80, this.position.x+5, this.position.y-65);
        triangle(this.position.x-10, this.position.y-65, this.position.x, this.position.y-80, this.position.x+10, this.position.y-65);
        triangle(this.position.x-15, this.position.y-65, this.position.x-20, this.position.y-80, this.position.x-5, this.position.y-65);
    }
};

var N;
BubbleBoss.prototype.move = function(){

    switch(this.state){

        case 0:

            if(this.position.x > ranger.position.x){
                if(this.position.x > 0){
                    this.position.x -= 2;
                }
            }
            else if(this.position.x < ranger.position.x){
                if(this.position.x < 400){
                    this.position.x += 2;
                }
            }

            if(ranger.position.x < this.position.x+60 && ranger.position.x > this.position.x-60){
                this.slamSample++;
            }
            else{
                this.slamSample--;
            }

            if(this.slamSample > 60){
                this.state = 1;
                this.slamSample = 0;
            }

            break;

        case 1:


            if(this.position.y <= 300){
                this.position.add(this.direction);
                this.direction.add(this.accel);

            }
            else{
                this.state = 2;
                this.direction.y = 0.5;
            }

            break;

        case 2:

            if(this.position.y >= 100){

                this.position.y--;
            }
            else {
                this.state = 3;
            }

            break;

        case 3:

            var dx;
            var dy;
            for(i = 0; i < this.bubbles.length; i++){
                    dx = -this.position.x + ranger.position.x;
                    dy = -this.position.y + ranger.position.y;

                    this.bubbles[i].position.x = this.position.x;
                    this.bubbles[i].position.y = this.position.y;
                    this.bubbles[i].direction.x = dx;
                    this.bubbles[i].direction.y = dy;
                    this.bubbles[i].active = 1;
            }

            this.state = 4;
            bubbleCount = 0;

            break;

        case 4:

            this.slamSample++;
            if(this.slamSample > 180){
                this.slamSample = 0;
                this.state = 0;
            }

            break;

        case 5:

            for(i = 0; i < this.goo.length; i++){
                this.goo[i].draw();
                this.goo[i].move();
            }

            break;

    }
    this.collisionCheck();

};

var V;
BubbleBoss.prototype.collisionCheck = function(){


    for(V = 0; V < ranger.shots.length; V++){

        if((dist(this.position.x, this.position.y, ranger.shots[V].position.x, ranger.shots[V].position.y) < 60)){
            ranger.shots[V].active = false;
            this.lives--;
            if(this.lives < 1){
                for(i = 0; i < 1000; i++){
                    this.goo.push(new gooOBJ(this.position.x, this.position.y));
                    this.state = 5;
                }
            }
        }
    }

};

var M;
bubShots.prototype.draw = function() {

    switch (this.state){

        case 0:
            fill(222, 62, 190, 100);
            noStroke();
            this.direction.normalize();
            this.direction.mult(5);
            ellipse(this.position.x, this.position.y, 50,50);
            this.position.add(this.direction);
            if(this.position.y > 380){
                this.state = 1;
            }
            break;

        case 1:

            for(M = 0; M < 20; M++){
                this.goo.push(new gooOBJ(this.position.x, this.position.y));
            }
            this.state = 2;

            break;

        case 2:
            for(M = 0; M < this.goo.length; M++){
                this.goo[M].draw();
                this.goo[M].move();
            }
            this.gooCount++;
            if(this.gooCount > 60){
                this.state = 0;
                this.gooCount = 0;
                this.active = 0;
            }
    }

};

//drawing for the first map
var P;
mapOBJ.prototype.draw = function() {

    translate(this.position.x, this.position.y);

    fill(255, 0, 0);
    //rect(4000, 200, 60, 200);
    noFill();


    noStroke();
    /*
    for(i = 0; i < barriers.length; i++)  {
        barriers[i].draw();
    }*/


    for(i = 0; i < 50; i++){
        fill(56, 85, 173, 4);
        rect(-100,300-i,10200,150+i);
    }

    for(i = 0; i < craters.length; i++){

        craters[i].draw();

    }


    for(i = 0; i < bubbleEnemy.length; i++){
        bubbleEnemy[i].draw();
        bubbleEnemy[i].move();
    }

    //drawing all enemies and shots

    for(i = 0; i < enemies.length; i++){
        if((enemies[i].dead === 0)||(enemies[i].explosionCount < 3000)){
            enemies[i].update();
            for(j = 0; j < enemies[i].shots.length; j++){
                if(enemies[i].shots[j].active === 1){
                    enemies[i].shots[j].update();
                    enemies[i].shots[j].draw();
                }
                else{
                    //remove shot from array if inactive
                    enemies[i].shots.splice(j,1);
                    j--;
                }
            }
            enemies[i].draw();
        }
        //remove enemy from array if dead
        else{
            enemies.splice(i, 1);
            i--;
        }
    }

    //drawing hole to go to next level
    noFill();
    //ellipse(300, 350, 150, 30);
    noStroke();
    for(i = 0; i < 30; i++){
        fill(0,0,0,i*15);
        ellipse(10000,350, 300-(i*5), 60-(i));
    }

    //text("lastshot", 200, 200);
    //text(lastShot, 280, 200);

    fill(89, 87, 87);
    strokeWeight(2);
    stroke(0, 0, 0);
    rect(4000,0,20,20);
    for(P = 0; P < 14; P++){
        rect(3990,0+20*P, 30,20);

    }
    fill(125, 121, 121);
    for(P = 0; P < 20; P++){
        rect(4030+P*30, 380, 30, 20);
        rect(4030+P*30, 360, 30, 20);
        rect(4030+P*30, 340, 30, 20);
        rect(4030+P*30, 320, 30, 20);
        rect(4030+P*30, 300, 30, 20);
        rect(4030+P*30, 280, 30, 20);
    }
    quad(4000,400,4000,400,3990,280,4000,280);

    strokeWeight(1);

};

map2OBJ.prototype.draw = function() {

    translate(this.position.x, this.position.y);


    fill(89, 87, 87);
    strokeWeight(2);
    stroke(0, 0, 0);
    rect(4000,0,20,20);
    for(P = 0; P < 14; P++){
        rect(3990,0+20*P, 30,20);

    }
    fill(125, 121, 121);
    for(P = 0; P < 20; P++){
        rect(0+P*30, 380, 30, 20);
        rect(0+P*30, 360, 30, 20);
        rect(0+P*30, 340, 30, 20);
        rect(0+P*30, 320, 30, 20);
        rect(0+P*30, 300, 30, 20);
        rect(0+P*30, 280, 30, 20);
    }

    strokeWeight(1);
};

var Z;
var Y;
PlayerOBJ.prototype.collisioncheck = function(){

    //fill(0, 43, 255, 100);
    //stroke(255, 0, 0);
    //rect(this.position.x-12, this.position.y, 30, 70);

    switch(state){

        case 4:
            //detects being hit by the bubble enemies
            for(Z = 0; Z < bubbleEnemy.length; Z++){
                if(dist(bubbleEnemy[Z].position.x-6.5, bubbleEnemy[Z].position.y, this.position.x, this.position.y) < 42  ){
                    if(bubbleEnemy[Z].isDead === 0){
                        if(ranger.respawn === 0){
                            hearts.pop();
                        }
                        ranger.respawn = 1;
                        this.active = 0;
                    }
                }
            }

            //collision detection from enemy ships
            for(Z = 0; Z < enemies.length; Z++){

                for(Y=0; Y < enemies[Z].shots.length; Y++){
                    if(enemies[Z].isDead === 0){
                        if( (enemies[Z].shots[Y].position.x > this.position.x) && (enemies[Z].shots[Y].position.x < this.position.x + 30) && (enemies[Z].shots[Y].position.y < this.position.y + 70) && (enemies[Z].shots[Y].position.y > this.position.y))  {
                            //background(255, 0, 0);

                            enemies[Z].shots[Y].active = false;

                            if(ranger.respawn === 0){
                                hearts.pop();
                            }
                            ranger.respawn = 1;
                            this.active = 0;
                        }
                    }

                }

            }

            break;

        case 6:

            if(dist(this.position.x+6, this.position.y+15,Boss.position.x, Boss.position.y) < 60){
                if(ranger.respawn === 0){
                    hearts.pop();
                }
                ranger.respawn = 1;
                this.active = 0;
            }
            for(Z = 0; Z < Boss.bubbles.length; Z++){
                if(Boss.bubbles[Z].active === 1){
                    if(dist(this.position.x+6, this.position.y+15, Boss.bubbles[Z].position.x, Boss.bubbles[Z].position.y) < 15){
                        if(ranger.respawn === 0){
                            hearts.pop();
                        }
                        ranger.respawn = 1;
                        this.active = 0;
                    }
                }
            }
            break;
    }

};

//players controls
PlayerOBJ.prototype.move = function(){

    this.collisioncheck();

    //jump key
    if((keyArray[87] === 1) &&(this.jump === 0 )){
        this.jump = 6.5;
    }
    //crouch key
    if(keyArray[83] === 1){

    }
    //right key
    if(keyArray[68] === 1){
        this.locate.x++;

        if(state !== 6 || this.position.x < 380){
            this.position.x+=2;
        }

        if(state === 4){
            map1.position.x-=2;
            map2.position.x-=2;
        }
        this.aim.x = 1;
    }

    //left key
    if((keyArray[65] === 1)&& (this.locate.x > 0)){
        if(this.position.x > 2){

            if(state === 4){
                map1.position.x+=2;
                map2.position.x+=2;
            }

            if(state !== 6 || this.position.x > 0){
                this.position.x-=2;
            }
        }
        this.locate.x--;
        this.aim.x = -1;
    }

    //shoot up
    if(keyArray[UP] === 1){
        this.aim.y = -1;
    }
    //shoot down
    else if(keyArray[DOWN] === 1){
        this.aim.y = 1;
    }
    else{
        //change aiming direction
        //back to regular
        this.aim.y = 0;
    }



    //shoot key
    if(keyArray[32] === 1){
        if(lastShot > 50){
            lastShot = 0;
            this.shots.push(new shotOBJ(this.position.x, this.position.y+40,this.aim.x ,this.aim.y, 0));
        }

    }
    this.position.y -= this.jump;
    if(this.position.y < 300){
        this.jump -= 0.1;
    }
    else{
        this.jump = 0;
    }

};

//player drawying
//responds to input keys
PlayerOBJ.prototype.draw = function() {


    pushMatrix();

    noStroke();

    translate(this.position.x, this.position.y);



    //making it flashy when hit by laser bullet
    if((this.respawn === 1)&&(this.respawnCount.x > 4)){
        if (this.respawnCount.x > 8){
            this.respawnCount.x = 0;
            this.respawnCount.y++;
        }
        //flash about 20 times
        if(this.respawnCount.y > 20){
            this.respawnCount.y = 0;
            this.respawn = 0;
        }
    }
    else{
        //when the player is moving right
        if(this.aim.y === 0){
            for (var i=0 ;i <rows.length;i++) {
                for (var j=0;j<rows[i].length;j++) {
                    switch(rows[i][j]){

                        case 9:
                            fill(color0);
                            if(this.aim.x === 1){
                                rect(j*2 - 50,i*2-30,2,2);
                            }
                            else{
                                rect((1-j*2+50),i*2-31,2,2);
                            }


                            break;

                        case 1:
                            fill(color1);
                            if(this.aim.x === 1){
                                rect(j*2 - 50,i*2-30,2,2);
                            }
                            else{
                                rect((1-j*2+50),i*2-30,2,2);
                            }
                            break;

                        case 2:
                            fill(color2);
                            if(this.aim.x === 1){
                                rect(j*2 - 50,i*2-30,2,2);
                            }
                            else{
                                rect((1-j*2+50),i*2-30,2,2);
                            }
                            break;

                        case 3:
                            fill(color3);
                            if(this.aim.x === 1){
                                rect(j*2 - 50,i*2-30,2,2);
                            }
                            else{
                                rect((1-j*2+50),i*2-30,2,2);
                            }
                            break;

                        case 4:
                            fill(color4);
                            if(this.aim.x === 1){
                                rect(j*2 - 50,i*2-30,2,2);
                            }
                            else{
                                rect((1-j*2+50),i*2-30,2,2);
                            }
                            break;


                    }
                }
            }

        }

        //this is for when the player is moving left
        else if(this.aim.y === -1){
             for (var i=0;i<upshot.length;i++) {
                for (var j=0;j<upshot[i].length;j++) {
                    switch(upshot[i][j]){

                        case 9:
                            fill(color0);
                            if(this.aim.x === 1){
                                rect(j*2 - 50,i*2-30,2,2);
                            }
                            else{
                                rect((1-j*2+50),i*2-31,2,2);
                            }


                            break;

                        case 1:
                            fill(color1);
                            if(this.aim.x === 1){
                                rect(j*2 - 50,i*2-30,2,2);
                            }
                            else{
                                rect((1-j*2+50),i*2-30,2,2);
                            }
                            break;

                        case 2:
                            fill(color2);
                            if(this.aim.x === 1){
                                rect(j*2 - 50,i*2-30,2,2);
                            }
                            else{
                                rect((1-j*2+50),i*2-30,2,2);
                            }
                            break;

                        case 3:
                            fill(color3);
                            if(this.aim.x === 1){
                                rect(j*2 - 50,i*2-30,2,2);
                            }
                            else{
                                rect((1-j*2+50),i*2-30,2,2);
                            }
                            break;

                        case 4:
                            fill(color4);
                            if(this.aim.x === 1){
                                rect(j*2 - 50,i*2-30,2,2);
                            }
                            else{
                                rect((1-j*2+50),i*2-30,2,2);
                            }
                            break;


                    }
                }
            }
        }
    }
    this.respawnCount.x++;

    popMatrix();
};

//collision check between the player shots and the bubbles
var Q;
bubbleOBJ.prototype.collisioncheck = function(){

    for( Q = 0; Q < ranger.shots.length; Q++){
        if(ranger.shots[Q].active === 1){
            if(dist(ranger.shots[Q].position.x, ranger.shots[Q].position.y, this.position.x, this.position.y) < 40){
                this.state = 2;
                this.isDead = 1;
                ranger.shots[Q].active = false;
                score++;
            }
        }
    }

};

//drawing the bubble enemy and its goo
bubbleOBJ.prototype.draw = function() {

    fill(222, 62, 190, 200);
    if(color_index === 2 || color_index === 3){
            fill(7, 168, 39,150);
    }
    noStroke();

    if(this.isDead === 0){
        this.collisioncheck();
    }

    switch(this.state){

        case 0:
            ellipse(this.position.x, this.position.y, 80, 80);

            break;

        case 1:


            ellipse(this.position.x, this.position.y, 80, this.squish.y);

            this.position.y -= this.squish.x/2;

            this.squish.y += this.squish.x;
            if(this.squish.y <= 40){
                this.squish.x *= -1;
            }
            if((this.squish.y >= 80)&&(this.squish.x === 2)){
                this.state = 0;
                this.squish.x = -2;
            }



            break;

        case 3:

            for( var j = 0; j < 30; j++){
                this.goo[j].draw();
                this.goo[j].move();
            }

            break;

    }
};

//the goo for the enemy once it is shot
gooOBJ.prototype.draw = function() {

    //no lines
    noStroke();
    fill(222, 62, 190, 150);
    if(color_index === 2 || color_index === 3){
            fill(7, 168, 39,150);
    }

    ellipse(this.position.x, this.position.y, 10, 10);
    stroke(0,0,0);
};

gooOBJ.prototype.move = function() {

    //change position by adding velocity
    this.position.add(this.velocity);

    //drag place upon the pieces in the x range
    this.velocity.x *= 0.99;

    //add gravitational acceleration until terminal velocity
    if(this.velocity.y < 2){
        this.velocity.add(this.acceleration);
    }

};

//the movement for the bubble
bubbleOBJ.prototype.move = function(){

    if(ranger.position.x + 300 > this.position.x){

        if(this.position.x < ranger.position.x){
            this.direction.x = 1;
        }
        else if(this.position.x > ranger.position.x){
            this.direction.x = -1;
        }
        else if(this.position.x === ranger.position.x){
            this.direction.x = 0;
        }


    }

    switch (this.state){


        //in the bouncing state
        case 0:

            this.direction.y += 0.098;
            this.position.add(this.direction);
            if(this.position.y >= 320 ){
                this.state = 1;
                this.direction.y = -5;
            }

            break;

        case 2:


            //initialize all pieces
            for( var j = 0; j < 30; j++){
                this.goo.push(new gooOBJ(this.position.x, this.position.y));
            }
            this.state = 3;

            break;

        case 3:

            break;


    }

};

var shot;
enemyOBJ.prototype.update = function(){

    //activate within a certain range of the player
    if((this.active === 0)&&((this.position.x - ranger.position.x) < 300)){
        this.active = 1;
    }

    //make the ship move up and down
    this.position.y += this.direction.y;

    if(this.position.y < 50){
        this.direction.y = 1;
    }
    else if(this.position.y > 200){
        this.direction.y = -1;
    }
    ////////////////////////////////////


    //if it is within range and not dead, shoot at player
    if((this.active === 1)&&(this.dead === 0)){
        shot = floor(random(0,200/diff_index));

        //text("shot =  ", 100, 100);
        //text(shot, 130, 100);
        if(shot === 1){
            //background(255, 0, 0);
            var x = ranger.position.x - this.position.x;
            var y = ranger.locate.y+40 - this.position.y;
            this.shots.push(new shotOBJ(this.position.x, this.position.y, x, y, 1));
        }
    }

    if(this.isDead === 0){
    this.collisionCheck();
    }
};

//this is for when the ships are shot
explosionOBJ.prototype.draw = function() {

    fill(this.c1,this.c2,0, 100 - 2*this.count);

    if(this.count < 50){
        noStroke();
        ellipse(this.position.x, this.position.y, this.size, this.size);
        this.count++;
    }

};

var L;
var K;
enemyOBJ.prototype.collisionCheck = function(){

    //fill(255, 0, 0, 100);
    //ellipse(this.position.x, this.position.y, 30, 30);

    for(L = 0; L < ranger.shots.length; L++){
        if(ranger.shots[L].active === 1){

            if((dist(this.position.x, this.position.y, ranger.shots[L].position.x, ranger.shots[L].position.y) < 15)&& (dist(ranger.position.x, ranger.position.y, this.position.x, this.position.y) < 600)){
                this.dead = 1;
                this.isDead = 1;
                score++;
                ranger.shots[L].active = false;

                for( var K = 0; K < 10; K++){
                    this.explosion.push(new explosionOBJ(this.position.x, this.position.y, K));
                    //background(255, 255, 0);
                }
            }
        }
    }

};


//the bullet tracking
shotOBJ.prototype.update = function() {

    this.angle = atan(this.direction.y/this.direction.x)+80.1;

    this.direction.normalize();
    this.direction.mult(4);
    this.position.add(this.direction);


        //check if the bullet is getting too far away
    if((this.position.x> ranger.position.x+400)&&(this.enemy === 0)){
            this.active = 0;
    }

};

shotOBJ.prototype.draw = function() {

    pushMatrix();

    translate(this.position.x, this.position.y);
    fill(240, 0, 0);
    rotate(this.angle);
    noStroke();

    rect(-2.5, -5, 5, 10);

    popMatrix();
};

var R;
enemyOBJ.prototype.draw = function() {

    pushMatrix();
    translate(this.position.x, this.position.y);
    stroke(0, 0, 0);
    fill(173, 171, 173);
    strokeWeight(1);
    if(this.dead === 0){
        ellipse(0, 0, 30, 15);
        ellipse(0, -5, 15, 10);
        quad(3,-4,1,-15,-1,-15,-3,-4);
        ellipse(0, -15, 5, 5);
    }

    if((this.dead === 1) && (this.explosionCount < 2000)){

        textSize(20);
        //text(, -10, -10);

        for(R = 0; R < this.explosion.length; R++){
            if(this.explosionCount > 20*this.explosion[R].i){
                this.explosion[R].draw();

            }
            this.explosionCount++;
        }
    }

    popMatrix();


};

mouseClicked = function(){

    switch(state){
        case 1:
            //state = 2;
            break;
        case 2:
            //state = 3;
            //initTilemap();
            break;
    }

};

initTilemap1();

var keyPressed = function(){
    keyArray[keyCode] = 1;
};

var keyReleased = function(){
    keyArray[keyCode] = 0;
};

var i;

//defines next state in fsm
var next_state = 2;
var last_state = 1;
var init = 0;
var finalCount = 0;

var draw = function() {


    //finite state machine to control game
    switch(state){

            //here, we will wait for space to be released
        case 0:
            if(keyArray[32] === 0 && last_state === 1){
                state = next_state;
            }
            else if(keyArray[32] === 0){
                state = 1;
            }

            break;

        case 1:// title menu
            //space
            background(0, 0, 0);
            init = 0;

            //display all stars
            for( var i = 0; i < 70; i++){
                stars[i].draw(j);
            }

            planet.draw(j,k);

            //control movement of planet
            if(j > -200){
                j-=2;
            }
            //controls planes and title
            else{

                fighter.draw();
                fighter.move();
                if((l > 0) && (m < 5)){
                    l--;
                }
                else if (l === 0){
                    l=6;
                    m++;
                }
            }

            StartScreen.draw(l);

            if(keyArray[32] === 1){
                    state = 0   ;
            }

            break;

        case 2://options menu

            background(0, 0, 0);

            next_state = 3;

            //display all stars
            for( var i = 0; i < 70; i++){
                stars[i].draw(j);
            }

            planet.draw(j,k);

            if(j > -200){
                j-=2;
            }
            else{

                fighter.draw();
                fighter.move();
            }


            OptionsScreen.update();
            OptionsScreen.draw();

            text("Your goal is to destroy as many", 15, 280);
            text("aliens as  possible. Get to the", 15, 300);
            text("end of the stage to kill the ", 15, 320);
            text("alien king!", 15, 340);

            if(keyArray[32] === 1){
                    state = 0;
            }

            break;

        //state to show directions
        case 3:

           background(0, 0, 0);

            for( var i = 0; i < 70; i++){
                stars[i].draw(j);
            }

            planet.draw(j,k);

            if(j > -200){
                j-=2;
            }
            else{

                fighter.draw();
                fighter.move();
            }

            //display the directions

            textSize(40);
            fill(255,255,0);

            text("DIRECTIONS", 80,50);
            textSize(20);
            text("Kill enemies and get to the other", 40, 100);
            text("end of the map", 40, 120);

            text("Controls", 40, 160);
            text("[W] - Jump", 40, 190);
            text("[A] - move left", 40, 220);
            text("[D] - move right", 40, 250);
            text("[SPACE] - fire", 40, 280);
            text("[UP] - aims upward", 40, 310);
            text("Press space to begin", 40, 350);
            if(keyArray[32] === 1){
                state = 4;
            }

            //switching up variables depending on difficulty
            if(init === 0){
                switch(diff_index){

                    case 0:

                        Boss.accel.y = 0.025;

                        break;

                    case 1:

                        Boss.accel.y = 0.05;

                        break;

                    case 2:

                        Boss.accel.y = 0.06;

                        break;

                    case 3:

                        Boss.accel.y = 0.8;

                        break;
                }
                init = 1;
            }

            /*should i decide to include the planet fade in
            */

            break;


        case 4://game state level 1

            background(0, 0, 0);

            // mountains
            var x;

            noStroke();
            for (x = 0; x <= 2; x++) {
                for (var y = 0; y <= 40; y++) {

                    switch(color_index){
                        case 0: fill(0, 200+x, 0+x);
                            break;
                        case 3: fill(200+x, 0+x, 0);
                            break;
                        case 1: fill(0 + x*5, 200+x*10, 200);
                            break;
                        case 2: fill(175+x, 50, 217+x*-5);

                    }
                    quad(y*10,mountains[x][y]+x*55,(y+1)*10,mountains[x][y+1]+(x)*55,(y+1)*10,4000,y*10,4000);
                }
            }
            map1.draw();
            lastShot++;

                //drawing the rangers shots
            for(i = 0; i < ranger.shots.length; i++){
                if(ranger.shots[i].active === 1){
                        ranger.shots[i].update();
                        ranger.shots[i].draw();
                }
                else{
                    ranger.shots.splice(i,1);
                    i--;
                }
            }


            //drawing your character
            //character shots are in map
            ranger.move();
            ranger.draw();


            fill(143, 143, 143);
            stroke(0, 0, 0);
            strokeWeight(2);
            for(i = 0; i < 20; i++){
               rect(4000,0+20*i, 30,20);
            }

            pushMatrix();
            translate(ranger.position.x-50,0);
            //display game info
            fill(255,0,0);
            textSize(20);

            text("SCORE: ", 5, 20);
            text(score, 130, 20);
            text("LIVES: ", 150, 20);

            for(i = 0; i < hearts.length; i++){
                hearts[i].draw();
            }
            popMatrix();

            if(hearts.length === 0){
                state = 7;
            }

            if(ranger.position.x > 4000){
                state = 5;
            }


            break;


        case 5:

            ranger.position.x = 0;

            //initialize all the new stuff
            //initTilemap2();
            state = 6;


            break;

        case 6:

            background(0, 0, 0);

            noStroke();
            for (x = 0; x <= 2; x++) {
                for (var y = 0; y <= 40; y++) {
                    switch(color_index){
                        case 0: fill(0, 200+x, 0+x);
                            break;
                        case 3: fill(200+x, 0+x, 0);
                            break;
                        case 1: fill(0 + x*5, 200+x*10, 200);
                            break;
                        case 2: fill(175+x, 50, 217+x*-5);

                    }
                    quad(y*10,mountains[x][y]+x*55,(y+1)*10,mountains[x][y+1]+(x)*55,(y+1)*10,4000,y*10,4000);
                }
            }

            strokeWeight(2);
            stroke(0, 0, 0);
            rect(4000,0,20,20);
            for(P = 0; P < 14; P++){
                rect(3990,0+20*P, 30,20);

            }
            fill(125, 121, 121);
            for(P = 0; P < 20; P++){
                rect(0+P*30, 380, 30, 20);
                rect(0+P*30, 360, 30, 20);
                rect(0+P*30, 340, 30, 20);
                rect(0+P*30, 320, 30, 20);
                rect(0+P*30, 300, 30, 20);
                rect(0+P*30, 280, 30, 20);
            }

            Boss.draw();
            Boss.move();


            lastShot++;

            //drawing your character
            //character shots are in map
            ranger.move();
            ranger.draw();

            //drawing the rangers shots
            for(i = 0; i < ranger.shots.length; i++){
                if(ranger.shots[i].active === 1){
                        ranger.shots[i].update();
                        ranger.shots[i].draw();
                }
                else{
                    ranger.shots.splice(i,1);
                    i--;
                }
            }

            /*fill(143, 143, 143);
            //stroke(0, 0, 0);
            strokeWeight(2);
            for(i = 0; i < 20; i++){
               rect(0,0+20*i, 30,20);
            }*/

            for(i = 0; i < Boss.bubbles.length; i++){
                if((bubbleCount > 60*i) && (Boss.bubbles[i].active === 1)){
                    Boss.bubbles[i].draw();

                }
            }

            bubbleCount++;

            //display score and player info
            pushMatrix();
            //translate(ranger.position.x-50,0);
            //display game info
            fill(255,0,0);
            textSize(20);


            text("SCORE: ", 5, 20);
            text(score, 130, 20);
            text("LIVES: ", 150, 20);

            text("BOSS:", 20, 40);
            fill(255, 0, 0);
            noStroke();
            for(i = 0; i < Boss.lives; i++){
                rect(83+20*i, 25, 20, 18);
            }
            if(Boss.lives < 1){
                finalCount++;
            }
            if(finalCount > 360 && Boss.lives < 1){
                state = 8;
            }
            if(hearts.length === 0){
                state = 7;
            }

            for(i = 0; i < hearts.length; i++){
                hearts[i].draw();
            }
            popMatrix();


            break;


        case 7:

            fill(201, 237, 81);
            stroke(0, 0, 0);
            strokeWeight(3);
            textSize(50);
            text("YOU LOSE", 60, 200);
            textSize(15);
            //text("Press spacebar to go back to options menu", 30, 250);
            //if(keyArray[32] === 1){
                //state = 0;
                //var hearts = [new heartOBJ(280, 13), new heartOBJ(310, 13), new heartOBJ(340, 13), new heartOBJ(370, 13)];

            //}


            //Boss.draw();
            //Boss.move();


            break;

            //win screen
        case 8:


            strokeWeight(3);
            fill(201, 237, 81);
            stroke(0, 0, 0);
            textSize(50);
            text("You Win!", 75, 200);
            textSize(15);
            //text("Press spacebar to go back to options menu", 20, 250);
            //if(keyArray[32] === 1){
             //   state = 0;
            //}


            Boss.draw();
            Boss.move();


            break;

    }
};
