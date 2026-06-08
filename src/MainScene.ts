//Import necessary dependencies
import Phaser from 'phaser';

//Import ballsprite object
import { BallSprite } from './BallSprite';

export class MainScene extends Phaser.Scene {
    //create optional (just in case) beachBall variable
    private beachBall!: Phaser.Physics.Arcade.Sprite;
    private backgound!: Phaser.GameObjects.Image;

    constructor() {
        super({key:"main-scene"}); //scene identification string
    }

    create() {
        //Add background
        if(!this.sound.get("bouncing-beach-ball-song")) {
            const music = this.sound.add("bouncing-beach-ball-song", {
                loop: true,
                volume: 0.5,
            });

            music.play();
        }
        this.backgound = this.add.image(0,0, "summer-background").setOrigin(0,0);
        //Set bounce collisions and create a new BallSprite
        this.physics.world.setBoundsCollision(true, true, true, false); //Only fall offscreen (when the ball goes down)
        this.beachBall = new BallSprite(this, 100, 100, "beach-ball-blue");
    }
}