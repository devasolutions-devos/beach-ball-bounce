//Import necessary dependencies 
import Phaser from 'phaser';

//Import scenes the game needs to run
import { MainScene } from './MainScene';
import { BootScene } from './BootScene';

//Establish configuration object
const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 600,
    height: 400,
    parent: 'main', //main div object on index.html
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300, x: 0 },
            debug: false,
        },
      },
    pixelArt: true, //include pixel art graphics for them not to looked blur
    scene: [BootScene, MainScene], //include scenes
};

new Phaser.Game(config); //run game