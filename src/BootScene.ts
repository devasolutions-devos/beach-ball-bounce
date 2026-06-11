//Copyright (C) 2026 Mariano Hurtado de Mendoza Carranza (devasolutions-devos)
//Apache-2.0 license

//Import necessary dependencies
import Phaser from "phaser";

//Import spritesheets from "assets" folder
import beachBallBluePng from "./assets/BeachBallBlue.png";
import beachBallGreenPng from "./assets/BeachBallGreen.png";
import beachBallRedPng from "./assets/BeachBallRed.png";

//Import buttons
import playButtonPng from "./assets/PlayButton.png";
import controlsButtonPng from "./assets/ControlsButton.png";

//Import fonts
import unkemptRegularTtf from "./assets/Unkempt/Unkempt-Regular.ttf";
import unkemptBoldTtf from "./assets/Unkempt/Unkempt-Bold.ttf";

//Import background
import summerBackgroundPng from "./assets/SummerBackground.png";

//Import title
import beachBallBounceTitlePng from "./assets/BeachBallBounceTitle.png";

//Import background music
import bouncingBeachBallSongOgg from "./assets/BouncingBeachBallSong.ogg";
import preludeOgg from "./assets/Prelude.ogg";

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

        //load buttons
        this.load.image("play-button", playButtonPng);
        this.textures.get("play-button").setFilter(Phaser.Textures.FilterMode.LINEAR);

        this.load.image("controls-button", controlsButtonPng);
        this.textures.get("play-button").setFilter(Phaser.Textures.FilterMode.LINEAR);

        //load fonts
        this.load.font("Unkempt Regular", unkemptRegularTtf);
        this.load.font("Unkempt Bold", unkemptBoldTtf);

        //load background
        this.load.image("summer-background", summerBackgroundPng);

        //load title
        this.load.image("beach-ball-bounce-title", beachBallBounceTitlePng);
        this.textures.get("beach-ball-bounce-title").setFilter(Phaser.Textures.FilterMode.LINEAR);

        //load audio
        this.load.audio("bouncing-beach-ball-song", bouncingBeachBallSongOgg);
        this.load.audio("prelude", preludeOgg);
    }

    create() {
        //Scene after booting assets
        this.scene.start("menu-scene");
    }
}
