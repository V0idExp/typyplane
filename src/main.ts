import 'phaser';

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'TypyPlane',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },

    parent: 'game',
    backgroundColor: '#000000',
};

export const initGame = () => new Phaser.Game(gameConfig);
