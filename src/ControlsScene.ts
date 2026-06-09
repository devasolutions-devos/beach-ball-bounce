import Phaser from "phaser";

export class ControlsScene extends Phaser.Scene {
    constructor(){
        super({key: "controls-scene"});
    }

    create() {
        
        this.add.image(0,0,"summer-background").setOrigin(0,0);

        const controlsString = "Left-click on the ball to make them bounce!\n" +
            "The more bounces the higher your score!\n" +
            "You have 1 ball so don't let it fall!\n";
        
        const controlsText = this.add.text(30, 30, controlsString,  {
            fontFamily: "Unkempt Regular",
            fontSize: "32px",
            color: "#ffedd7"
        }).setStroke("#3b132b", 4).setPadding(16);

        const playButton = this.add.image(this.scale.width / 2, controlsText.y + controlsText.height + 50 , "play-button");
        
        this.initializeButton(playButton, "main-scene");

        const backText = this.add.text(this.scale.width / 2, this.scale.height - 30, "<- Back",{
            fontFamily: "Unkempt Bold",
            fontSize: "40px",
            color: "#fbc697"
        }).setStroke("#3b132b", 6).setOrigin(0.5,0.5);
        
        this.initializeButton(backText, "menu-scene");
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