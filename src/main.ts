//Import necessary dependencies 
import Phaser from 'phaser';

//Import scenes the game needs to run
import { MainScene } from './MainScene';
import { BootScene } from './BootScene';
import { MenuScene } from './MenuScene';
import { ControlsScene } from './ControlsScene';
import { CreditsScene } from './CreditsScene';

//Establish configuration object
const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'main', //main div object on index.html
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300, x: 0 },
            debug: false,
        },
      },
    scene: [BootScene, MenuScene, ControlsScene, MainScene, CreditsScene], //include scenes
};

new Phaser.Game(config); //run game