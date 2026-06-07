//Import necessary dependencies
import Phaser from 'phaser';

//Import ballsprite object
import { BallSprite } from './BallSprite';

export class MainScene extends Phaser.Scene {
    //create optional (just in case) beachBall variable
    private beachBall!: Phaser.Physics.Arcade.Sprite;

    constructor() {
        super({key:"main-scene"}); //scene identification string
    }

    create() {
        //Set bounce collisions and create a new BallSprite
        this.physics.world.setBoundsCollision(true, true, true, false); //Only fall offscreen (when the ball goes down)
        this.beachBall = new BallSprite(this, 100, 100, "beach-ball-blue");
    }
}