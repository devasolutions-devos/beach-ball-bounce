import Phaser from "phaser";

export class BallSprite extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        super(scene, x, y, texture);
        this.scene.add.existing(this);
    }
}