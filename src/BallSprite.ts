//Copyright (C) 2026 Mariano Hurtado de Mendoza Carranza (devasolutions-devos)
//Apache-2.0 license

//import necessary dependencies
import Phaser from "phaser";
import type { MainScene } from "./MainScene";

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
        let canClick = true; //canClick serves as a flag to not spam clicks

        //Use a vectorized logic for more realism and excitement
        this.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
            //Check if you can't click so cancel
            if (!canClick) {
                return;
            }

            //set flag to cannot click
            canClick = false;

            //Use a vectorized logic for more realism and excitement
            //Get components
            const i = this.x - pointer.worldX;
            const j = this.y - pointer.worldY;

            //calculate magnitude
            const v = Math.sqrt(i*i + j*j);

            //set velocity with each component
            this.setVelocity((i / v) * 300, (j / v) * 300);
            
            //emit increase-score event on MainScene
            (this.scene as MainScene).events.emit("increase-score");

            //enable click after 100ms
            this.scene.time.delayedCall(100, () => {
                canClick = true;
            })
        })

    }

    protected preUpdate(time: number, delta: number): void {
        super.preUpdate(time, delta);

        //Include dynamic rotation
        this.rotation += this.body!.velocity.x * 0.00025;

        //Get scene height
        const height = this.scene.scale.height;

        //Destroy ball and reduce balls when the ball falls down.
        if(this.y > height) {
            (this.scene as MainScene).lives--;
            this.destroy();
        }
    }
}
