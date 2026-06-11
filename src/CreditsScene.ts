//Copyright (C) 2026 Mariano Hurtado de Mendoza Carranza (devasolutions-devos)
//Apache-2.0 license

//Import necessary dependencies
import Phaser from "phaser";

//Create cretids scene
export class CreditsScene extends Phaser.Scene {
    constructor(){
        super({key: "credits-scene"}); //Set scene id
    }

    create() {
        
        //Add background image
        this.add.image(0,0,"summer-background").setOrigin(0,0);

        //create credits string
        const creditsString = "I'm dot4 creator of casa4studio and devasolutions-devos on github\n\n" +
            "Made with Phaser v4.1.0 created by Richard Davey (@photonstorm)\n\n" +
            "Beach Ball 64x64 made by ph0nsy.itch.io\n\n" +
            "Comfy Summer 2026 Background\nmade by dot4 @ casa4studio.itch.io\n\n" +
            "Prelude and Bouncing Beach Ball (Original Beach Ball Bounce Soundtrack)\n made by dot4 @ casa4studio.itch.io\n\n" +
            "This game code is available on\ngithub.com/devasolutions-devos/beach-ball-bounce\nunder the Apache 2.0 License\n\n" +
            "Thank you Macrow for the opportunity in this Game Jam :)!";
        
        //create credits text with credits string
        const creditsText = this.add.text(0, 0, creditsString,  {
            fontFamily: "Unkempt Regular",
            fontSize: "24px",
            color: "#ffedd7"
        }).setStroke("#3b132b", 4).setPadding(16);

        //create back button
        const backText = this.add.text(this.scale.width / 2, creditsText.y + creditsText.height + 10, "<- Back",{
            fontFamily: "Unkempt Bold",
            fontSize: "40px",
            color: "#fbc697"
        }).setStroke("#3b132b", 6).setOrigin(0.5,0.5);
        
        //initializeButton
        this.initializeButton(backText, "menu-scene");
    }

    private initializeButton(button: Phaser.GameObjects.GameObject, sceneId: string): void {
        //set interactive
        button.setInteractive();

        //start scene on click
        button.on("pointerdown", () => {
            this.scene.start(sceneId);
        });
    }
}
