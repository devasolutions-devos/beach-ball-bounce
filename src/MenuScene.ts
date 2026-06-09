import Phaser from "phaser";

export class MenuScene extends Phaser.Scene {
    constructor() {
        super({key: "menu-scene"});
    }

    create() {
        this.add.image(0,0,"summer-background").setOrigin(0,0);
        
        this.add.image(this.scale.width / 2, this.scale.height / 4, "beach-ball-bounce-title");

        const playButton = this.add.image(this.scale.width / 2, this.scale.height / 2 + 40, "play-button");

        const controlsButton = this.add.image(this.scale.width / 2, playButton.y + playButton.height + 20, "controls-button");
        
        const creditsText = this.add.text(this.scale.width / 2, this.scale.height - 40, "Credits", {
            fontFamily: "Unkempt Regular",
            fontSize: "32px",
            color: "#f6a8b3",
        }).setStroke("#3b132b", 4).setOrigin(0.5,0.5);

        this.initializeButton(playButton, "main-scene");
        this.initializeButton(controlsButton, "controls-scene");
        this.initializeButton(creditsText, "credits-scene");

        let music = this.sound.get("prelude")

        //Get and play music
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
        button.setInteractive();

        button.on("pointerdown", () => {
            this.scene.start(sceneId);
            if(button instanceof Phaser.GameObjects.Image &&
                (button as Phaser.GameObjects.Image).texture.key == "play-button"
            ) {
                this.sound.stopAll();
            }
        });
    }
}