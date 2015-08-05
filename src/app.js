var ParallaxLayer = cc.Layer.extend({
    
    bg1: null,
    bg2: null,
    bg3: null,
    bg4: null,
    bg5: null,

    speed: 5,

    ctor: function() {

        this._super();
        this.scheduleUpdate();

        var parallaxBackGround = function(resImage, y) {
            var layer = new cc.Layer();
            var bgTemp = new cc.Sprite(resImage);

            bgTemp.x = bgTemp.width/2;
            bgTemp.y = y;
            layer.addChild(bgTemp);

            var bgTemp1 = new cc.Sprite(resImage);

            bgTemp1.x = bgTemp1.width/2 + bgTemp1.width;
            bgTemp1.y = y;
            layer.addChild(bgTemp1);

            var bgTemp2 = new cc.Sprite(resImage);

            bgTemp2.x = bgTemp2.width/2 +  bgTemp2.width + bgTemp2.width;
            bgTemp2.y = y;
            layer.addChild(bgTemp2);

            return layer;
        }

        this.bg5 = parallaxBackGround("res/parallax1.png", 140);
        this.addChild(this.bg5);

        this.bg4 = parallaxBackGround("res/parallax2.png", 60);
        this.addChild(this.bg4);

        this.bg3 = parallaxBackGround("res/parallax3.png", 80);
        this.addChild(this.bg3);

        this.bg2 = parallaxBackGround("res/bushes.png", 30);
        this.addChild(this.bg2);

        this.bg1 = parallaxBackGround("res/ground.png", 0);
        this.addChild(this.bg1);

        return true;
    },

    update: function(dt) {
        
        var winSize = cc.director.getWinSize();

        this.bg5.x -= Math.ceil(this.speed * 0.1);
        if (this.bg5.x < -parseInt(winSize.width)) {
            this.bg5.x = 0;
        }

        this.bg4.x -= Math.ceil(this.speed * 0.1);
        if (this.bg4.x < -parseInt(winSize.width)) {
            this.bg4.x = 0;
        }

        this.bg3.x -= Math.ceil(this.speed * 0.1);
        if (this.bg3.x < -parseInt(winSize.width)) {
            this.bg3.x = 0;
        }

        this.bg2.x -= Math.ceil(this.speed * 0.1);
        if (this.bg2.x < -parseInt(winSize.width)) {
            this.bg2.x = 0;
        }

        this.bg1.x -= Math.ceil(this.speed * 0.1);
        if (this.bg1.x < -parseInt(winSize.width)) {
            this.bg1.x = 0;
        }
    }
});

var BirdLayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var size = cc.winSize;
        var bird = new cc.Sprite();

        var animation = new cc.Animation();

        for (var i = 1; i <= 4; i++) {
            animation.addSpriteFrameWithFile("res/bird_"+i+".png");
            // animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("res/bird_"+i+".png"));
        }

        animation.setDelayPerUnit(1/4);

        var action = cc.animate(animation);

        action.repeatForever();

        bird.runAction(action);

        this.addChild(bird);
        bird.x = size.width/2;
        bird.y = size.height/2;
    }
});

var ParallaxScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layerColor = new cc.LayerColor(cc.color(51, 204, 255), 800, 450);
        var layer = new ParallaxLayer();
        var layerBird = new BirdLayer();
        this.addChild(layerColor);
        this.addChild(layer);
        this.addChild(layerBird);
    }
});
