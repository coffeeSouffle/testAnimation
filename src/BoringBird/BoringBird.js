var BBLayer = cc.Layer.extend({

    downSpeed: 10,

    upSpeed: 10,

    bird: null,

    ctor: function() {
        this._super();
        this.init();
        this.flyUp();
    },

    init: function() {
        this._super();

        var size = cc.director.getWinSize();

        cc.spriteFrameCache.addSpriteFrames(res.bird_plist);
        this.spriteSheet = new cc.SpriteBatchNode(res.bird_png);
        this.addChild(this.spriteSheet);

        var animFrames = [];
        var frame = cc.spriteFrameCache.getSpriteFrame("bird_dance_09.png");
        animFrames.push(frame);
        var frame = cc.spriteFrameCache.getSpriteFrame("bird_dance_10.png");
        animFrames.push(frame);
        var frame = cc.spriteFrameCache.getSpriteFrame("bird_dance_11.png");
        animFrames.push(frame);
        var frame = cc.spriteFrameCache.getSpriteFrame("bird_dance_12.png");
        animFrames.push(frame);

        var animation = new cc.Animation(animFrames, 1/4);
        this.runningAction = new cc.RepeatForever(new cc.Animate(animation));
        this.bird = new cc.Sprite("#bird_dance_09.png");
        this.bird.attr({x:size.width/2, y:size.height/2});
        this.bird.runAction(this.runningAction);
        this.spriteSheet.addChild(this.bird);

        this.schedule(this.flyDown, 1, cc.REPEAT_FOREVER, 1);
    },

    flyDown: function() {
        if (this.bird.y >= 75) {
            this.bird.y = this.bird.y - this.downSpeed;
        } else {
            this.showFail();
        }
        cc.log(this.bird.y);
    },

    flyUp: function() {

        if ( 'mouse' in cc.sys.capabilities ) {
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseDown: function(event) {

                    var pos = event.getLocation();
                    var target = event.getCurrentTarget();

                    if (event.getButton() === cc.EventMouse.BUTTON_LEFT) {
                        if (target.bird.y >= 75) {
                            target.bird.y = target.bird.y + target.upSpeed;
                        }
                        cc.log(target.bird.y);
                    }
                }
            }, this);
        }

        return true;
    },

    showFail: function() {
        var size = cc.director.getWinSize();
        var gameOver = new cc.LabelTTF("Game Over", "Arial", 60);
        gameOver.x = size.width/2;
        gameOver.y = size.height/2;

        this.addChild(gameOver);
    }
});