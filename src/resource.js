var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    ground_png: "res/ground.png",
    bushes_png: "res/bushes.png",
    parallax1_png: "res/parallax1.png",
    parallax2_png: "res/parallax2.png",
    parallax3_png: "res/parallax3.png",
    bird_png: "res/bird.png",
    bird_plist: "res/bird.plist"
};

var g_resources = [
    res.bird_png,
    res.bird_plist
];

for (var i in res) {
    g_resources.push(res[i]);
}