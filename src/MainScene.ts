//Import necessary dependencies
import Phaser from 'phaser';

//Import ballsprite object
import { BallSprite } from './BallSprite';

export class MainScene extends Phaser.Scene {
    //create optional (just in case) beachBall variable
    private beachBall!: Phaser.Physics.Arcade.Sprite;
    private _score: number;
    private scoreLabelText!: Phaser.GameObjects.Text;
    private scoreText!: Phaser.GameObjects.Text;

    constructor() {
        super({key:"main-scene"}); //scene identification string
        this._score = 0;
    }

    create() {
        //Create increase-score event
        this.events.on("increase-score", () => {
            this.scoreText.setText((++this.score).toString());
        });

        //Get and play music
        if(!this.sound.get("bouncing-beach-ball-song")) {
            const music = this.sound.add("bouncing-beach-ball-song", {
                loop: true,
                volume: 0.4,
            });
            
            music.play();
        }

        //Add background
        this.add.image(0,0, "summer-background").setOrigin(0,0);
        
        //Set bounce collisions and create a new BallSprite
        this.physics.world.setBoundsCollision(true, true, true, false); //Only fall offscreen (when the ball goes down)
        this.beachBall = new BallSprite(this, Phaser.Math.Between(100, 700), 100, "beach-ball-blue");
        
        this.scoreLabelText = this.add.text(0,0,"Score:", {
            fontFamily: "Unkempt Bold",
            fontSize: "32px",
            color: "#fbc697",
        })

        this.scoreText = this.add.text(this.scoreLabelText.width + 20, 0, this.score.toString(), {
            fontFamily: "Unkempt Regular",
            fontSize: "32px",
            color: "#ffedd7",
        })

        this.add.container(20,20, [this.scoreLabelText,this.scoreText]);
    }

    set score(s: number) {
        this._score = s;
    }

    get score(): number {
        return this._score;
    }
}