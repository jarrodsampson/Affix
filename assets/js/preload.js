var preload = function(game){var loadingBar = "";var mainMusicSound = "";};

preload.prototype = {
    preload: function(){

        this.game.load.baseURL = 'assets/';
        this.game.load.crossOrigin = 'anonymous';

        this.game.load.image('background', 'backgrounds/main.jpg');
        this.game.load.image('arena', 'backgrounds/starfield.png');
        this.game.load.image('backButton', 'game/backButton.png');


        this.game.load.spritesheet('kaboom', 'game/explode.png', 128, 128);
        this.game.load.image('rock', 'game/asteroid1.png');

        // game levels
        this.game.load.text('levels', 'levels/levels.json');

        // sound assets
        this.game.load.image('soundIcon', 'game/soundIcon.png');
        this.game.load.image('soundIconDisabled', 'game/soundIconDisabled.png');

        // game explosions
        this.game.load.audio('explosion', ['audio/explosion.mp3']);

        // music jukebox
        this.game.load.audio('mainSound', ['audio/AffinityNorm.mp3']);
        this.game.load.audio('playSong', ['audio/AffinityFast.mp3']);

        this.game.load.image('trophy', 'game/trophy.png');

        // player ship
        this.game.load.image('ship', 'game/ship.png');
        this.game.load.image('bullet', 'game/lazer.png');
        this.game.load.image('healthLife', 'game/heart.png');

        this.game.load.audio('healthpacksound', ['audio/healthcollect.mp3']);
        this.game.load.audio('timesupsound', ['audio/timesup.mp3']);
        this.game.load.audio('nextLevelSound', ['audio/nextlevel.mp3']);
        this.game.load.audio('livesLost', ['audio/warning.mp3']);


    },
    create: function(){

        mainMusicSound = this.game.add.audio('mainSound');
        mainMusicSound.volume = 0;
        this.game.add.tween(mainMusicSound).to({volume:0.3}, 10500, null, true);
        mainMusicSound.play('', 0, 1, true);
        mainMusicSound.onLoop.add(this.playMainMusic, this);


        var brandText = this.game.add.text(w/2, h/2 - 50, 'Planlodge Games', { font: '65px Dancing Script', fill: '#ffffff' });
        brandText.anchor.setTo(0.5,0.5);
        brandText.alpha = 0;

        // Adding the fading animations to the stars and rocks
        this.game.add.tween(brandText).to({
            alpha: 1
        }, 1000, Phaser.Easing.Linear.None, true, 0, 0, true);


        this.game.time.events.add(Phaser.Timer.SECOND * 3,function () {this.game.state.start("GameTitle"); }, this);
    },
    playMainMusic: function() {
        mainMusicSound.play('', 0, 1, true);
    }
};