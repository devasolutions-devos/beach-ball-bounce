//import necessary dependencies
import Phaser from "phaser";

export class BallSprite extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        super(scene, x, y, texture);

        //Add object and its physics to the scene
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        //Make this ball interactive on clicks
        this.setInteractive();
        
        //Enable world bounds collision for wall bounces
        //Set wall bounce to 0.8
        this.setCollideWorldBounds(true);
        this.setBounce(0.8);

        //Set collisions to down false (let the ball fall offscreen)
        this.body!.checkCollision.down = false;
        
        //Add click bounce logic
        //Use a vectorized logic for more realism and excitement
        this.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
            const dx = this.x - pointer.worldX;
            const dy = this.y - pointer.worldY;

            const length = Math.sqrt(dx*dx + dy*dy);

            this.setVelocity((dx / length) * 300, (dy / length) * 300);
        })

        

    }

    protected preUpdate(time: number, delta: number): void {
        super.preUpdate(time, delta);

        //Include dynamic rotation
        this.rotation += this.body!.velocity.x * 0.0005;

        const height = this.scene.scale.height;

        //Destroy ball when the ball falls down.
        if(this.y >= height + 50) {
            this.destroy();
        }
    }
}