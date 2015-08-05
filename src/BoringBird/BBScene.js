var BBScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layerColor = new cc.LayerColor(cc.color(51, 204, 255), 800, 450);
        var layer = new ParallaxLayer();
        var bblayer = new BBLayer();
        this.addChild(layerColor);
        this.addChild(layer);
        this.addChild(bblayer);
    }
});
