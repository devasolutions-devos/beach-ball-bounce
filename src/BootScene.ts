import Phaser from "phaser";

import beachBallBluePng from "./assets/BeachBallBlue.png";
import beachBallGreenPng from "./assets/BeachBallGreen.png";
import beachBallRedPng from "./assets/BeachBallRed.png";

export class BootScene extends Phaser.Scene {
    constructor() {
        super({key: "boot-scene"});
    }

    preload() {
        const ballFrameSizes = {frameWidth: 64, frameHeight: 64};

        this.load.spritesheet("beach-ball-blue", beachBallBluePng, ballFrameSizes);
        this.load.spritesheet("beach-ball-green", beachBallGreenPng, ballFrameSizes);
        this.load.spritesheet("beach-ball-red", beachBallRedPng, ballFrameSizes);
    }

    create() {
        this.scene.launch("main-scene");
    }
}