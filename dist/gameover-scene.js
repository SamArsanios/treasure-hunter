var GameoverScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function () {
        Phaser.Scene.call(this, { key: "GameoverScene" });
    },
    init: function () { },
    preload: function () { },
    create: function () {
        this.add.text(640, 300, "GAME OVER").setOrigin(0.5);
    },
    update: function () { }
});