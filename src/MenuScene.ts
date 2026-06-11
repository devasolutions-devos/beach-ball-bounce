//Copyright (C) 2026 Mariano Hurtado de Mendoza Carranza (devasolutions-devos)
//Apache-2.0 license

//Import necessary dependencies
import Phaser from "phaser";

//Create menu scene
export class MenuScene extends Phaser.Scene {
    constructor() {
        super({key: "menu-scene"}); //Set scene id
    }

    create() {
        //add background image
        this.add.image(0,0,"summer-background").setOrigin(0,0);
        
        //add title image
        this.add.image(this.scale.width / 2, this.scale.height / 4, "beach-ball-bounce-title");

        //create play button
        const playButton = this.add.image(this.scale.width / 2, this.scale.height / 2 + 40, "play-button");

        //create controls button
        const controlsButton = this.add.image(this.scale.width / 2, playButton.y + playButton.height + 20, "controls-button");
        
        //create credits button
        const creditsText = this.add.text(this.scale.width / 2, this.scale.height - 40, "Credits", {
            fontFamily: "Unkempt Regular",
            fontSize: "32px",
            color: "#f6a8b3",
        }).setStroke("#3b132b", 4).setOrigin(0.5,0.5);

        //initialize buttons
        this.initializeButton(playButton, "main-scene");
        this.initializeButton(controlsButton, "controls-scene");
        this.initializeButton(creditsText, "credits-scene");
        
        //get music
        let music = this.sound.get("prelude")

        //play music
        if(!music) {
            music = this.sound.add("prelude", {
                loop: true,
                volume: 0.25,
            });
            
            music.play();
        }

        if(!music.isPlaying) {
            music.play();
        }
    }

    private initializeButton(button: Phaser.GameObjects.GameObject, sceneId: string): void {
        //set button as interactive
        button.setInteractive();

        //change scene on pointer
        button.on("pointerdown", () => {
            this.scene.start(sceneId);
            if(button instanceof Phaser.GameObjects.Image && //another ocp violation, but its to stop music
                (button as Phaser.GameObjects.Image).texture.key == "play-button"
            ) {
                this.sound.stopAll();
            }
        });
    }
}
