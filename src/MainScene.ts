//Import necessary dependencies
import Phaser from 'phaser';

//Import ballsprite object
import { BallSprite } from './BallSprite';

export class MainScene extends Phaser.Scene {

    private _score!: number;
    private scoreLabelText!: Phaser.GameObjects.Text;
    private scoreText!: Phaser.GameObjects.Text;
    private _lives!: number;
    private balls: string[];

    constructor() {
        super({key:"main-scene"}); //scene identification string

        //initialize texture array to spawn balls
        this.balls = ["beach-ball-blue", "beach-ball-green", "beach-ball-red"]
    }

    create() {
        //initialize score and lives
        this.score = 0;
        this.lives = 3;

        //Reset and initialize events
        this.events.removeAllListeners("increase-score"); //Reset events to restart gameplay

        this.events.on("increase-score", () => {
            this.score += 1;
            this.scoreText.setText((this.score).toString());
        });

        //Get music
        let music = this.sound.get("bouncing-beach-ball-song")

        //Play music
        if(!music) {
            music = this.sound.add("bouncing-beach-ball-song", {
                loop: true,
                volume: 0.25,
            });
            
            music.play();
        }

        if(!music.isPlaying) {
            music.play();
        }

        //Add background
        this.add.image(0,0, "summer-background").setOrigin(0,0);
        
        //Set bounce collisions and create a new BallSprite
        this.physics.world.setBoundsCollision(true, true, true, false); //Only fall offscreen (when the ball goes down)

        //Start ball spawning
        let ballIndex = 0
        new BallSprite(this, Phaser.Math.Between(100, 700), 100, this.balls[ballIndex]);
        ballIndex++;

        //Add event to spawn balls over time
        this.time.addEvent({
            delay: Phaser.Math.Between(7000, 11000),
            loop: true,
            callback: () => {
                const texture = this.balls[ballIndex % this.balls.length];
                ballIndex++;
                new BallSprite(this, Phaser.Math.Between(100, 700), 100, texture);
            },
            repeat: 1,
        })
        
        //Create "Score:" Label
        this.scoreLabelText = this.add.text(0,0,"Score:", {
            fontFamily: "Unkempt Bold",
            fontSize: "32px",
            color: "#fbc697",
        })
        
        //Create numerical score text
        this.scoreText = this.add.text(this.scoreLabelText.width + 20, 0, this.score.toString(), {
            fontFamily: "Unkempt Regular",
            fontSize: "32px",
            color: "#ffedd7",
        })

        //add stroke for presence
        this.scoreLabelText.setStroke("#3b132b", 6);
        this.scoreText.setStroke("#3b132b", 4);

        //Combine scorelabel and text in its container
        this.add.container(20,20, [this.scoreLabelText,this.scoreText]);
    }

    update() {
        //Check if lives are 0 and restart the game
        if(this.lives <= 0) {
            this.sound.stopAll();
            this.scene.start("menu-scene");
        }
    }

    //Score Set and Get
    set score(s: number) {
        this._score = s;
    }

    get score(): number {
        return this._score;
    }

    //Lives Set and Get
    set lives(l: number) {
        this._lives = l
    }

    get lives(): number {
        return this._lives;
    }
}