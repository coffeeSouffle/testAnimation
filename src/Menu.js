var MenuLayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var animatelabel = new cc.LabelTTF("定格動畫", "Arial", 32);
        var animatebtn = new cc.MenuItemLabel(animatelabel, this.getAnimation, this);
        var TSlabel = new cc.LabelTTF("BoringBird", "Arial", 32);
        var TSbtn = new cc.MenuItemLabel(TSlabel, this.goBoringBird, this);
        var menu = new cc.Menu(TSbtn, animatebtn);

        menu.alignItemsVertically();

        this.addChild(menu);
    },

    getAnimation: function() {
        cc.director.runScene(new ParallaxScene());
    },

    goBoringBird: function() {
        cc.director.runScene(new BBScene());
    }
});