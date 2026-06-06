import Phaser from 'phaser';
import { MainScene } from './MainScene';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'main',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300, x: 0 },
            debug: false,
        },
      },
    pixelArt: true,
    scene: [MainScene],
};

new Phaser.Game(config);