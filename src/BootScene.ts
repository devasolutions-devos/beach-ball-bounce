//Import necessary dependencies
import Phaser from "phaser";

//Import spritesheets from "assets" folder
import beachBallBluePng from "./assets/BeachBallBlue.png";
import beachBallGreenPng from "./assets/BeachBallGreen.png";
import beachBallRedPng from "./assets/BeachBallRed.png";

//Import background
import summerBackgroundPng from "./assets/SummerBackground.png";

//Import background music
import bouncingBeachBallSongOgg from "./assets/BouncingBeachBallSong.ogg";

export class BootScene extends Phaser.Scene {
    constructor() {
        super({key: "boot-scene"}); //scene identification string
    }

    preload() {
        //declare constant frames for the different balls
        const ballFrameSizes = {frameWidth: 64, frameHeight: 64};

        //load spritesheets
        this.load.spritesheet("beach-ball-blue", beachBallBluePng, ballFrameSizes);
        this.load.spritesheet("beach-ball-green", beachBallGreenPng, ballFrameSizes);
        this.load.spritesheet("beach-ball-red", beachBallRedPng, ballFrameSizes);

        //load background
        this.load.image("summer-background", summerBackgroundPng);

        //load audio
        this.load.audio("bouncing-beach-ball-song", bouncingBeachBallSongOgg);
    }

    create() {
        //Scene after booting assets
        this.scene.start("main-scene");
    }
}