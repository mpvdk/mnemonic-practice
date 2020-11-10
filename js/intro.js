// start

var canvas,
  canvas2,
  stage,
  exportRoot,
  exportRoot2,
  anim_container,
  anim_container2,
  dom_overlay_container,
  dom_overlay_container2,
  fnStartAnimation;

function init() {
  canvas2 = document.getElementById("canvas2");
  anim_container2 = document.getElementById("animation_container2");
  dom_overlay_container2 = document.getElementById("dom_overlay_container2");
  var comp2 = AdobeAn.getComposition("D05B4272070D6A4C9F4100E96717F2D9");
  var lib2 = comp2.getLibrary();
  exportRoot2 = new lib2.mnemonics();
  stage = new lib2.Stage(canvas2);
  createjs.Touch.enable(stage);
  stage.enableMouseOver();
  stage.addChild(exportRoot2);
  createjs.Ticker.setFPS(lib2.properties.fps);
  createjs.Ticker.addEventListener("tick", stage);

  AdobeAn.makeResponsive2(true, "both", false, 2, [
    canvas2,
    anim_container2,
    dom_overlay_container2,
  ]);

  canvas = document.getElementById("canvas");
  anim_container = document.getElementById("animation_container");
  dom_overlay_container = document.getElementById("dom_overlay_container");
  var comp = AdobeAn.getComposition("21B51ED2F03E4D429F3F1914FDDB0C34");
  var lib = comp.getLibrary();
  exportRoot = new lib.intro();
  stage = new lib.Stage(canvas);
  stage.enableMouseOver();
  createjs.Touch.enable(stage);
  stage.addChild(exportRoot);
  createjs.Ticker.setFPS(lib.properties.fps);
  createjs.Ticker.addEventListener("tick", stage);

  AdobeAn.makeResponsive(true, "both", false, 1, [
    canvas,
    anim_container,
    dom_overlay_container,
  ]);
}

// end

(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:

  (lib.yet = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag1B6QgYgKgRgQIAAg2IAoAAIAFAlQAIAFAOAFQANAEAPAAQAVAAALgJQALgJAAgOQAAgOgKgKQgLgIgZgJQgtgNgYgQQgXgTgBggQABgeAagUQAbgUAngBQAcABAZAIQAYAKARAOIAAA1IgmAAIgIgkQgGgEgNgDQgNgDgOAAQgUAAgMAJQgMAJABAOQAAANAMAJQAMAIAdAJQApALAXATQAWATgBAgQAAAhgZATQgaATgrAAQgeAAgYgKg"
      );
    this.shape.setTransform(246, 10.4);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgTgKgLQgKgKgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAATgLAPQgKAOgUAHQAXAIAKAPQAJAQAAAWIAAAOQAAAIAEAEQADAFAIABIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgJAAgSQAAgRgLgKQgLgLgUAAIgkAAg"
      );
    this.shape_1.setTransform(222.525, 10.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABJIBSAAIACgfIAnAAIAABGg"
      );
    this.shape_2.setTransform(198.125, 10.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhsCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBVAAQAuAAAZASQAZARAAAjQAAASgJAOQgKAOgSAHQAXAEAMAQQALAQAAAWQAAAkgYATQgYATgtAAgAgeBZIAuAAQAVAAALgJQAKgJAAgRQAAgTgJgKQgJgKgUAAIgyAAgAgegTIAkAAQAVAAALgJQALgIAAgRQAAgSgLgIQgMgJgWAAIgiAAg"
      );
    this.shape_3.setTransform(175.125, 10.4);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA2CAIAAgfIAcgFIAAgoIAFhxIgBAAIhFC9IghAAIhFi8IgBAAIAFBwIAAAoIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBDAAIBBC8IAAAAIBCi8IBeAAIAAAfIgbAGIAAC2IAbAFIAAAfg"
      );
    this.shape_4.setTransform(146.325, 10.4);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhJBrQgdgYAAgrIAAiEIgbgGIAAgfIAbAAIA0AAIAbAAIAAAfIgbAGIAACEQAAAZANANQAOANAXAAQAYAAANgNQAOgMAAgaIAAiEIgbgGIAAgfIBqAAIAAAfIgcAGIAACEQAAArgcAYQgcAXguAAQgtAAgcgXg"
      );
    this.shape_5.setTransform(115.775, 10.575);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA0CAIhmisIgBABIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIA0AAIBmCrIABAAIAAiGIgbgGIAAgfIBOAAIAcAAIAAAfIgcAGIAADag"
      );
    this.shape_6.setTransform(88.375, 10.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABJIBSAAIACgfIAnAAIAABGg"
      );
    this.shape_7.setTransform(53.625, 10.4);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA2CAIAAgfIAcgFIAAgoIAFhxIgBAAIhFC9IghAAIhFi8IgBAAIAFBwIAAAoIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBDAAIBBC8IAAAAIBCi8IBeAAIAAAfIgbAGIAAC2IAbAFIAAAfg"
      );
    this.shape_8.setTransform(25.625, 10.4);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhTBfQggglAAg4IAAgDQAAg4AfgkQAhgmAzAAQAzAAAhAmQAgAkAAA4IAAADQAAA4ggAlQghAlgzAAQgzAAggglgAgwhCQgQAZAAAoIAAADQAAAoAQAZQAQAZAgAAQAgAAARgZQAQgZAAgoIAAgDQAAgogRgZQgQgZggABQgggBgQAZg"
      );
    this.shape_9.setTransform(-4.05, 10.4);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag1B6QgYgKgRgQIAAg2IAoAAIAFAlQAIAFANAFQANAEAQAAQAVAAALgJQALgJAAgOQAAgOgLgKQgKgIgZgJQgugNgXgQQgYgTABggQgBgeAbgUQAagUAogBQAdABAYAIQAYAKARAOIAAA1IgnAAIgGgkQgHgEgNgDQgNgDgOAAQgVAAgKAJQgMAJAAAOQAAANAMAJQAMAIAdAJQAqALAWATQAVATAAAgQAAAhgaATQgaATgqAAQgdAAgZgKg"
      );
    this.shape_10.setTransform(-27.45, 10.4);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag1B6QgYgKgRgQIAAg2IAoAAIAFAlQAIAFAOAFQAMAEAQAAQAVAAALgJQALgJAAgOQAAgOgKgKQgLgIgZgJQgtgNgYgQQgXgTgBggQAAgeAbgUQAbgUAngBQAcABAZAIQAYAKARAOIAAA1IgmAAIgIgkQgGgEgNgDQgNgDgOAAQgUAAgMAJQgMAJAAAOQAAANANAJQAMAIAcAJQAqALAWATQAXATAAAgQAAAhgaATQgaATgrAAQgeAAgYgKg"
      );
    this.shape_11.setTransform(-58.1, 10.4);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#111A2C").s().p("AgQAwIAAhgIAiAAIAAAwIgNAwg");
    this.shape_12.setTransform(-73.05, 0.65);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABJIBSAAIACgfIAnAAIAABGg"
      );
    this.shape_13.setTransform(-89.125, 10.4);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgTgKgLQgKgKgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAATgLAPQgKAOgUAHQAXAIAKAPQAJAQAAAWIAAAOQAAAIAEAEQADAFAIABIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgJAAgSQAAgRgLgKQgLgLgUAAIgkAAg"
      );
    this.shape_14.setTransform(-112.475, 10.4);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABJIBSAAIACgfIAnAAIAABGg"
      );
    this.shape_15.setTransform(-136.875, 10.4);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAZCAIAAgfIAbgFIAAhHIhnAAIAABHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIBqAAIAAAfIgbAGIAABJIBnAAIAAhJIgbgGIAAgfIAbAAIAzAAIAcAAIAAAfIgcAGIAAC2IAcAFIAAAfg"
      );
    this.shape_16.setTransform(-162.075, 10.4);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAcgFIAAi0IgvAAIgDAdIgnAAIAAhEIDjAAIAABEIgnAAIgCgdIgwAAIAAC0IAcAFIAAAfg"
      );
    this.shape_17.setTransform(-197, 10.4);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABJIBSAAIACgfIAnAAIAABGg"
      );
    this.shape_18.setTransform(-220.975, 10.4);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag1CAIAAgfIAcgFIAAg5IhFh/IgVgEIAAgfIBgAAIAAAfIgUADIAnBUIAAAAIAohUIgVgDIAAgfIBhAAIAAAfIgWAEIhFCCIAAA2IAbAFIAAAfg"
      );
    this.shape_19.setTransform(-244.375, 10.4);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-258.7, -16.5, 517.4, 51.5);

  (lib.worry = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#EB5E55")
      .s()
      .p("AhDFVIAAh4ICHAAIAAB4gAhDBqIAAm+ICHAAIAAG+g");
    this.shape.setTransform(230.675, 3.175);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AkoFVIAAhSIBJgOIAAnpIhJgOIAAhSIBJAAIDpAAQB9AABRBQQBRBQAAB9IAABwQAAB9hRBQQhRBPh9AAgAhXDsIBaAAQBJAAAqgxQAqgyAAhQIAAhxQAAhPgqgyQgqgyhJAAIhaAAg"
      );
    this.shape_1.setTransform(184.45, 3.175);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ABdFVIAAhSIAvgIIgeheIjcAAIgeBeIAvAIIAABSIjoAAIAAhSIAxgHIDPpQICMAAIDOJQIAxAHIAABSgAhOA4ICcAAIhMjvIgCAAg"
      );
    this.shape_2.setTransform(117.65, 3.175);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AkjFVIAAhSIBJgOIAAnpIhJgOIAAhSIBJAAIDlAAQB5AABDAvQBEAvAABdQAAAvgZAmQgZAlgwASQA9ANAfArQAfArAAA5QAABhhBAzQhBAyh2AAgAhRDsIB9AAQA2AAAdgXQAcgYAAguQAAgzgYgaQgZgbg0AAIiHAAgAhRg2IBhAAQA3AAAdgXQAegWAAgrQAAgwgegWQgegXg7AAIhcAAg"
      );
    this.shape_3.setTransform(51.525, 3.175);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Aj/FVIAAhSIBIgOIAAnpIhIgOIAAhSIBIAAICJAAIBIAAIAABSIhIAOIAAHgIC/AAIAHhWIBpAAIAAC/g"
      );
    this.shape_4.setTransform(-31.8, 3.175);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AkNFVIAAhSIBIgOIAAnpIhIgOIAAhSIBIAAIHSAAIAAC7IhpAAIgGhSIjaAAIAACsIDmAAIAABoIjmAAIAADDIDcAAIAFhRIBpAAIAAC6g"
      );
    this.shape_5.setTransform(-91.75, 3.175);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AkNFVIAAhSIBIgOIAAnpIhIgOIAAhSIBIAAIHSAAIAAC7IhpAAIgHhSIjZAAIAACsIDnAAIAABoIjnAAIAADDIDcAAIAFhRIBpAAIAAC6g"
      );
    this.shape_6.setTransform(-153.05, 3.175);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AkOFVIAAhSIBIgOIAAnpIhIgOIAAhSIIeAAIAAC7IhqAAIgFhSIjeAAIAAC8IDuAAIAABpIjuAAIAAC7IBIAOIAABSg"
      );
    this.shape_7.setTransform(-212.2, 3.175);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-249.1, -65.3, 498.29999999999995, 130.6);

  (lib.worldrecords = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag7CIQgcgLgSgTIAAg7IAtAAIAGAoQAIAHAPAFQAPAEARAAQAYAAAMgJQAMgKAAgQQAAgQgLgKQgNgKgcgJQgygPgagTQgagUAAgjQAAgiAdgWQAegWAsgBQAfAAAbAKQAbAKATAQIAAA7IgrAAIgHgnQgIgFgOgEQgOgDgQAAQgXAAgMAKQgNAKAAAPQAAAPAOAJQAMAJAhALQAvANAYAUQAYAWAAAjQAAAkgdAVQgdAVgvAAQghAAgbgKg"
      );
    this.shape.setTransform(159.05, 1.325);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ah7COIAAgiIAegGIAAjLIgegGIAAgiIAeAAIBhAAQA0AAAiAhQAiAhAAA1IAAAuQAAA0giAhQgiAhg0AAgAgkBjIAlAAQAfAAARgVQASgVAAghIAAgvQAAghgSgUQgRgVgfAAIglAAg"
      );
    this.shape_1.setTransform(132.475, 1.325);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ABjCOQgcAAgMgPQgLgPAAgYIAAgQQAAgVgLgLQgLgMgUgBIguAAIAABLIAeAGIAAAiIh1AAIAAgiIAegGIAAjLIgegGIAAgiIAeAAIBhAAQAwAAAbAWQAcAWAAAnQAAAWgLAQQgMAPgWAJQAZAIALARQALARAAAaIAAAOQAAAKAEAFQADAFAJABIAHABIAAAigAgogQIAnAAQAYAAALgKQAMgKABgTQgBgTgMgMQgLgLgXAAIgoAAg"
      );
    this.shape_2.setTransform(105.4, 1.325);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhdBqQgjgpAAg/IAAgDQAAg+AjgpQAkgpA5AAQA5AAAkApQAkApAAA+IAAADQAAA/gkApQgjAog6AAQg5AAgkgogAg1hJQgSAbAAAtIAAADQAAAtASAcQASAbAjAAQAkAAASgbQASgcAAgtIAAgDQAAgtgTgbQgRgcgkAAQgjAAgSAcg"
      );
    this.shape_3.setTransform(77.4, 1.325);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhQBrQgkgoAAg+IAAgJQAAg+AkgnQAlgoA5AAQAhAAAaAMQAaAMASAUIAAA4IgrAAIgFgmQgJgJgNgEQgNgFgQAAQglAAgTAbQgVAbAAArIAAAJQAAArAUAbQAUAcAkAAQAQAAAOgFQAOgFAIgJIAFglIArAAIAAA4QgRAUgbAMQgaALghAAQg5AAglgng"
      );
    this.shape_4.setTransform(50, 1.325);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhvCOIAAgiIAdgGIAAjLIgdgGIAAgiIAdAAIDCAAIAABOIgrAAIgDgiIhbAAIAABHIBgAAIAAArIhgAAIAABSIBcAAIACgiIAsAAIAABNg"
      );
    this.shape_5.setTransform(24.1, 1.325);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ABjCOQgcAAgLgPQgMgPAAgYIAAgQQAAgVgLgLQgLgMgUgBIguAAIAABLIAfAGIAAAiIh2AAIAAgiIAegGIAAjLIgegGIAAgiIAeAAIBhAAQAwAAAbAWQAcAWAAAnQAAAWgMAQQgLAPgWAJQAZAIALARQALARAAAaIAAAOQAAAKAEAFQADAFAJABIAHABIAAAigAgogQIAoAAQAXAAAMgKQAMgKgBgTQABgTgMgMQgMgLgXAAIgoAAg"
      );
    this.shape_6.setTransform(-1.85, 1.325);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ah7COIAAgiIAegGIAAjLIgegGIAAgiIAeAAIBhAAQA0AAAiAhQAiAhAAA1IAAAuQAAA0giAhQgiAhg0AAgAgkBjIAlAAQAfAAARgVQASgVAAghIAAgvQAAghgSgUQgRgVgfAAIglAAg"
      );
    this.shape_7.setTransform(-39.625, 1.325);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhqCOIAAgiIAegGIAAjLIgegGIAAgiIAeAAIA5AAIAdAAIAAAiIgdAGIAADIIBQAAIACgkIAsAAIAABPg"
      );
    this.shape_8.setTransform(-64.75, 1.325);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ABjCOQgcAAgMgPQgLgPAAgYIAAgQQAAgVgLgLQgLgMgUgBIguAAIAABLIAfAGIAAAiIh2AAIAAgiIAegGIAAjLIgegGIAAgiIAeAAIBhAAQAwAAAbAWQAcAWAAAnQAAAWgMAQQgLAPgWAJQAZAIALARQALARAAAaIAAAOQAAAKAEAFQAEAFAIABIAHABIAAAigAgogQIAoAAQAWAAANgKQAMgKgBgTQABgTgMgMQgNgLgWAAIgoAAg"
      );
    this.shape_9.setTransform(-90.15, 1.325);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhdBqQgjgpAAg/IAAgDQAAg+AjgpQAkgpA5AAQA5AAAkApQAkApAAA+IAAADQAAA/gkApQgkAog5AAQg5AAgkgogAg1hJQgSAbAAAtIAAADQAAAtASAcQASAbAjAAQAjAAATgbQASgcAAgtIAAgDQAAgtgSgbQgTgcgjAAQgjAAgSAcg"
      );
    this.shape_10.setTransform(-118.15, 1.325);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AA1COIg1i6IAAAAIg0C6Ig1AAIg5j2IgYgDIAAgiIBpAAIAAAiIgaAFIAhCbIABAAIA1jCIApAAIA1DCIACAAIAgibIgagFIAAgiIBpAAIAAAiIgYADIg5D2g"
      );
    this.shape_11.setTransform(-151.6, 1.325);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f().s("#F6AE2D").ss(4, 1, 1).p("A6jAAMA1HAAA");
    this.shape_12.setTransform(0, 23.75);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-172.9, -28.3, 345.8, 56.7);

  (lib.usare = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ai3DnIAAg3IAxgKIAAlLIgxgJIAAg4IFvAAIAAB/IhHAAIgEg3IiWAAIAAB/IChAAIAABGIihAAIAAB/IAwAKIAAA3g"
      );
    this.shape.setTransform(126.175, 2.15);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#111A2C")
      .s()
      .p(
        "AiXCsQg5hDAAhlIAAgGQAAhlA5hDQA5hDBeAAQBdAAA6BDQA6BDAABlIAAAGQAABlg6BDQg6BChdAAQhdAAg6hCgAhXh4QgdAtAABIIAAAHQAABJAdAsQAdAtA6AAQA6AAAegtQAdgsAAhJIAAgHQAAhIgegsQgegtg5AAQg6AAgdAsg"
      );
    this.shape_1.setTransform(83.125, 2.125);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhfDnIAAg3IAygKIAAlEIhVAAIgEAzIhHAAIAAh7IGbAAIAAB7IhHAAIgEgzIhVAAIAAFEIAxAKIAAA3g"
      );
    this.shape_2.setTransform(22.25, 2.15);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhhDcQgsgRgegfIAAhgIBIAAIAKBBQAOALAYAIQAYAHAcAAQAnABAUgQQATgPAAgaQAAgbgTgQQgTgQgugPQhSgXgqghQgqggAAg5QAAg4AvgkQAwgkBIgBQA0ABAsAQQAsAQAeAbIAABeIhGAAIgMg/QgMgIgXgFQgXgGgaAAQgmAAgUAQQgVAQAAAZQAAAYAWAPQAVAPA1ARQBMAVAoAiQAnAjAAA5QAAA7gvAjQgvAihNAAQg1AAgtgSg"
      );
    this.shape_3.setTransform(-18.675, 2.15);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#111A2C")
      .s()
      .p(
        "AiXCsQg5hDAAhlIAAgGQAAhlA5hDQA5hDBeAAQBdAAA6BDQA6BDAABlIAAAGQAABlg6BDQg6BChdAAQhdAAg6hCgAhXh4QgdAtAABIIAAAHQAABJAdAsQAdAtA6AAQA6AAAegtQAdgsAAhJIAAgHQAAhIgegsQgegtg5AAQg6AAgdAsg"
      );
    this.shape_4.setTransform(-61.875, 2.125);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABiDnIAAg3IAygKIAAhIIAIjMIgCAAIh7FVIg9AAIh8lUIgBAAIAIDLIAABIIAxAKIAAA3Ii/AAIAAg3IAygKIAAlLIgygJIAAg4IAyAAIB4AAIB2FUIABAAIB2lUICrAAIAAA4IgxAJIAAFLIAxAKIAAA3g"
      );
    this.shape_5.setTransform(-115.4, 2.15);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-148.2, -44.8, 296.5, 89.69999999999999);

  (lib.Tween32 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhTFaIAAh1ICIAAIAAB1gAhTCYQABhBATgfQATgeA3grQAigbAUggQATgfAAgnQAAgrgWgYQgXgZgpAAQgjAAgYAVQgYAVgBAnIiFAAIgBgCQgBhaA9gwQA8gwBiAAQBoAAA8A1QA7A1AABcQAAA7giAzQgkAyg0AiQgdAWgJAWQgJAWAAAng"
      );
    this.shape.setTransform(118.2982, 2.675);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AB/FVIh9nBIgCAAIh9HBIh/AAIiMpQIg3gHIAAhSID7AAIAABSIg+ALIBOF1IADABIB/nTIBkAAICCHTIACgBIBOl1Ig+gLIAAhSID7AAIAABSIg5AHIiKJQg"
      );
    this.shape_1.setTransform(48.35, 3.175);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AjfD9QhVhiAAiWIAAgJQAAiVBVhjQBUhiCLAAQCJAABXBiQBVBjAACVIAAAJQAACWhVBiQhWBiiKAAQiKAAhVhigAiBiyQgqBCAABrIAAAKQAABsArBCQAqBCBWAAQBWAAArhCQAshCAAhsIAAgKQAAhqgshCQgshChVAAQhXAAgqBBg"
      );
    this.shape_2.setTransform(-31.675, 3.175);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "ABCFVIAAhSIBJgOIAAi7IkVAAIAAC7IBJAOIAABSIkbAAIAAhSIBJgOIAAnpIhJgOIAAhSIEbAAIAABSIhJAOIAADFIEVAAIAAjFIhJgOIAAhSIBJAAICIAAIBKAAIAABSIhKAOIAAHpIBKAOIAABSg"
      );
    this.shape_3.setTransform(-103.275, 3.175);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-142.8, -65.3, 285.70000000000005, 130.6);

  (lib.Tween31 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhTFaIAAh1ICIAAIAAB1gAhTCYQABhBATgfQATgeA3grQAigbAUggQATgfAAgnQAAgrgWgYQgXgZgpAAQgjAAgYAVQgYAVgBAnIiFAAIgBgCQgBhaA9gwQA8gwBiAAQBoAAA8A1QA7A1AABcQAAA7giAzQgkAyg0AiQgdAWgJAWQgJAWAAAng"
      );
    this.shape.setTransform(118.2982, 2.675);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AB/FVIh9nBIgCAAIh9HBIh/AAIiMpQIg3gHIAAhSID7AAIAABSIg+ALIBOF1IADABIB/nTIBkAAICCHTIACgBIBOl1Ig+gLIAAhSID7AAIAABSIg5AHIiKJQg"
      );
    this.shape_1.setTransform(48.35, 3.175);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AjfD9QhVhiAAiWIAAgJQAAiVBVhjQBUhiCLAAQCJAABXBiQBVBjAACVIAAAJQAACWhVBiQhWBiiKAAQiKAAhVhigAiBiyQgqBCAABrIAAAKQAABsArBCQAqBCBWAAQBWAAArhCQAshCAAhsIAAgKQAAhqgshCQgshChVAAQhXAAgqBBg"
      );
    this.shape_2.setTransform(-31.675, 3.175);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "ABCFVIAAhSIBJgOIAAi7IkVAAIAAC7IBJAOIAABSIkbAAIAAhSIBJgOIAAnpIhJgOIAAhSIEbAAIAABSIhJAOIAADFIEVAAIAAjFIhJgOIAAhSIBJAAICIAAIBKAAIAABSIhKAOIAAHpIBKAOIAABSg"
      );
    this.shape_3.setTransform(-103.275, 3.175);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-142.8, -65.3, 285.70000000000005, 130.6);

  (lib.Tween30 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AgyguIjRhAIgEgBIhRgYAjyCCIA4gGIAHgBIH9gyAkXCFIAZgCAk3CIIATgCAFZBJImIh2"
      );
    this.shape.setTransform(2.825, -0.25);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AAWCQIAAgBIAAgBQAOgSAHgTQAKgaACgdQgBA3gUAgIAAABQgGAIgFADQABgDgCgCgAgICUQgGgGgFgIIgGgLQgTgkgFgbQgFgYACgiIAAAAIAAgBIgBgXQgDg8AFgeQACgQAIgJQABgEACgBIADgBQAEgDAFgBIgBABIAAAEIgBAAQgMAEgGASQgIAXABAiIADAqIABARIACAnQABAXAFAQQAEANAJATIAPAgIAGAKIgBAAgAAACNIgMgXQgQgjgEgRQgFgQgBgYIgCgpIgEg1QgBgfAIgUQAFgMAFgEIADgCIAFAFQAJAHAKARQAXApAIAWQAZBGggBUQgGASgIAGIgHAGQgCADAAACIgBgDgAAugkQgLgogTgcQgIgNgPgSIgKgLIgCgCIAFABIAFACIAIAHIACAEIALAPIABAFIAQAgIAKAUQAHAVAEAYIgEgTg"
      );
    this.shape_1.setTransform(-31.7779, -0.375);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AkMB/QgFgEAGgJQAVgigDgzQgEgtgVgwIgKgUIgQgfIgBgFIAAgDQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAtA+AKBKQAGAlgHAeQgFASgJATQgBAEgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgDgBgAjoB9QgCgCgBgCQAAgEADgFQAUgugMhAIgIggIgHgVIgHgWIgKgfQgBgFACgBQACgBADAFIAKAYQAYBEAFAhQAJA7gWAsQgCADgCABIgBAAIgDgBgAibB7QgEgDADgJIANgpQAHgYABgTQAAgUgJgmQgFgVgGgMIgGgMQgCgEACgCQADgBADAEQAPAUAKAjQAKAggBAbQgBASgLAjIgJAaQgCAFgCADIgBABIgHABgAi9ByQgBgDACgEQAXhYgehVIgJgZIAAgDIABgBIACAAIABACQAMAeAFASQAYBOgUBPQgBAGgEAAQgEAAgBgEgAhjBhQgCgDAAgHQABgQAGgeQACgZgIgvQgDgQAAgIQABgGAEAAQADABABAEQAMAhAEAXQAFAfgFAcIgGAfQgBALgFABIgDAAQgEAAgCgFgAADBlQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBgCABgFIAEgbQACgQgDgdQgDgfABgOQAAgEADgBQAAAAABAAQABAAAAAAQAAABABAAQAAABAAAAIABAEQAAANAEAeIABAGQADAYgBAOQgBAOgEARQAAAEgDACIgCABIgCAAgAAsBhQgBgCABgGIAEgRIABgDQAEgcgDglIgBgUIAAgDIACAAIABACQAIAhABAVQABAfgHAZQgBAFgDABIgDABQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBgAghBeQgGgBAAgGIABgJQADgNAAgRIgCgeQgCgegCgIIgFgVIAAgEQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAABABAAQALAVAGAqQADAbAAAOQAAAOgEALQgBAFgCADQgCADgDAAIgCgBgACIBMQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgCACgDQAGgHAFgEQgJAGgFACQgDACgCgBQgDgCADgFQgHAGgGACQgEACgBgCQgBgBAAAAQAAAAAAgBQAAAAABgBQAAgBAAAAIAFgIIgCABQgDACgCgCIgBgDIAAgBIgKAHQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDgBABgEIAEgFQADgCACgDQgEAEgDgBQgDgCABgEIAEgFQgDgGAEgHQgCgIADgHQgGgDAAgHQABgGAGgDIgCAIIABAEIADACQAEADgCAJQABgDAEABQADABAAADQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAACgDADIgEAFIAGgFQAFgDACADQACADgDAFIABgBIAHgFIADAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIgCADIgFAFIAOgLQAEgCACACQABACgDADIgYAZIAegWQAEgEACADQACACgEADIgNAOIAbgSQAFgCACABQACADgFAFIgZAWIAagQQAHgDAAADQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgKALIAigVQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgQAUIAXgOQAEgDACABIADADQACABAFAAIAGABQACACACAFQACACAEAAIAIAAIAsgIQAEgBABACQABAAAAABQAAAAAAABQAAAAAAABQgBAAgBABIgEACIgqAHQgPADgGgHIgDgEIgIgCQgFAAgCgDQgMAJgLAEQgFADgDgCQgDgCACgGIAFgGQgLAIgJADQgEABgCgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgJAHgKAEIgDAAIgCAAg"
      );
    this.shape_2.setTransform(-0.385, -0.2265);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AinCaQgGgBgFgIIgFgKIgPggQgJgUgEgNQgFgQgCgXIgCgnIgBgQIgDgrQgBghAJgYQAFgRAMgFIABAAIABgEIAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAEACIACACIAJALQAQASAIAMQATAcALAoIAFAUQAHAigCAgQgCAdgLAaQgHAUgNASIgBABIABAAQABADgBACQgBADgFACQgIAEgFAAIgBAAgAjFiKQgGAEgFALQgIAVABAfIAFA1IACAoQABAZAEAQQAEARARAiIALAYIACADQAAgDADgDIAGgGQAIgGAHgRQAfhUgZhGQgIgXgYgpQgKgRgIgGIgGgFIgCACgAhxCHQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABgDAEgFQASgaAEgjQADgWgKgzIgHgjQgFgTgIgOIgMgTQgIgMgDgIQgBgEACgBQABAAAAAAQABAAAAAAQABAAAAABQABABAAAAQAXAfAJARIABACIAHAWIAGAVIAFAbQAKAwgFAdQgFAZgSAfIgCADQgEAFgDAAIgCgBgAhOCAIgBgBQgCgEAGgHQAMgOAEgYQABgLgBggIgCgkQgBgVgDgQQgDgNgIgVQgKgZgDgJQgCgEADgCIABgBIAEABIACAEQATApAFASQAIAeACBAIgBAmIAAAAIAAAEQgFAZgNANIgBACIgFADIgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAgaB2QgDgBAAgEIABgGQAahUgZhBIgKgWQgGgOgDgJQgBgHAEAAQACAAACAEIAHAOIAPAiQAWA8gQBIQgCAMgEAJQgDAIgEAAIgCgBgABJBtQgEgCADgIQANgegEg0QgDgbgFgQIgFgOQgCgIABgGQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAABQABABAAABQABAFAIAWQAGANADARIABAMQAGAxgNAlIgEAHQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBgACBBoQgDgBAAgEIACgGQAEgKACgRIACgVQABgXgBgQIgBgBIgBgFQAAgFgIgaQgDgKAAgFIABgCQAAgBABAAQAAAAAAAAQAAgBABAAQAAABABAAIABACQABAGADAJIAGAPQALAfgFA2QgCATgEALIgEAFIgEACIgBgBgAAUBoQgDgBAAgEIABgGQAFgPADgUIAAAAIAAgDQACgQAAgTQABgpgJgXIgJgWIgBgFQAAgEADABIAEACQAPAWAFAhQADAXgDAiQgDAlgGAUIgDAFQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAgACmBiQgCgDACgGQAGgTACgSIABgQQAAgYgJgiIAAgFQAAgBAAgBQABAAAAgBQABAAAAAAQABAAABAAQACAAABAEQALAlAAAbQgBAUgGAXIgDAMQgBAEgCABIgCABIgDgBgADQBdQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIACgFQAKgQAAgjQgBgfgDgNQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIACADQAEAPACAYQABAXgBALQgCATgIALIgDAEIgCABIgCgBg"
      );
    this.shape_3.setTransform(-14.7053, -0.0264);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-37.3, -15.4, 75.6, 30.8);

  (lib.Tween29 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AgyguIjRhAIgEgBIhRgYAjyCCIA4gGIAHgBIH9gyAkXCFIAZgCAk3CIIATgCAFZBJImIh2"
      );
    this.shape.setTransform(2.825, -0.25);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AkMB/QgFgEAGgJQAVgigDgzQgEgtgVgwIgKgUIgQgfIgBgFIAAgDQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAtA+AKBKQAGAlgHAeQgFASgJATQgBAEgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgDgBgAjoB9QgCgCgBgCQAAgEADgFQAUgugMhAIgIggIgHgVIgHgWIgKgfQgBgFACgBQACgBADAFIAKAYQAYBEAFAhQAJA7gWAsQgCADgCABIgBAAIgDgBgAibB7QgEgDADgJIANgpQAHgYABgTQAAgUgJgmQgFgVgGgMIgGgMQgCgEACgCQADgBADAEQAPAUAKAjQAKAggBAbQgBASgLAjIgJAaQgCAFgCADIgBABIgHABgAi9ByQgBgDACgEQAXhYgehVIgJgZIAAgDIABgBIACAAIABACQAMAeAFASQAYBOgUBPQgBAGgEAAQgEAAgBgEgAhjBhQgCgDAAgHQABgQAGgeQACgZgIgvQgDgQAAgIQABgGAEAAQADABABAEQAMAhAEAXQAFAfgFAcIgGAfQgBALgFABIgDAAQgEAAgCgFgAADBlQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBgCABgFIAEgbQACgQgDgdQgDgfABgOQAAgEADgBQAAAAABAAQABAAAAAAQAAABABAAQAAABAAAAIABAEQAAANAEAeIABAGQADAYgBAOQgBAOgEARQAAAEgDACIgCABIgCAAgAAsBhQgBgCABgGIAEgRIABgDQAEgcgDglIgBgUIAAgDIACAAIABACQAIAhABAVQABAfgHAZQgBAFgDABIgDABQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBgAghBeQgGgBAAgGIABgJQADgNAAgRIgCgeQgCgegCgIIgFgVIAAgEQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAABABAAQALAVAGAqQADAbAAAOQAAAOgEALQgBAFgCADQgCADgDAAIgCgBgACIBMQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgCACgDQAGgHAFgEQgJAGgFACQgDACgCgBQgDgCADgFQgHAGgGACQgEACgBgCQgBgBAAAAQAAAAAAgBQAAAAABgBQAAgBAAAAIAFgIIgCABQgDACgCgCIgBgDIAAgBIgKAHQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDgBABgEIAEgFQADgCACgDQgEAEgDgBQgDgCABgEIAEgFQgDgGAEgHQgCgIADgHQgGgDAAgHQABgGAGgDIgCAIIABAEIADACQAEADgCAJQABgDAEABQADABAAADQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAACgDADIgEAFIAGgFQAFgDACADQACADgDAFIABgBIAHgFIADAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIgCADIgFAFIAOgLQAEgCACACQABACgDADIgYAZIAegWQAEgEACADQACACgEADIgNAOIAbgSQAFgCACABQACADgFAFIgZAWIAagQQAHgDAAADQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgKALIAigVQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgQAUIAXgOQAEgDACABIADADQACABAFAAIAGABQACACACAFQACACAEAAIAIAAIAsgIQAEgBABACQABAAAAABQAAAAAAABQAAAAAAABQgBAAgBABIgEACIgqAHQgPADgGgHIgDgEIgIgCQgFAAgCgDQgMAJgLAEQgFADgDgCQgDgCACgGIAFgGQgLAIgJADQgEABgCgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgJAHgKAEIgDAAIgCAAg"
      );
    this.shape_1.setTransform(-0.385, -0.2265);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AinCaQgGgBgFgIIgFgKIgPggQgJgUgEgNQgFgQgCgXIgCgnIgBgQIgDgrQgBghAJgYQAFgRAMgFIABAAIABgEIAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAEACIACACIAJALQAQASAIAMQATAcALAoIAFAUQAHAigCAgQgCAdgLAaQgHAUgNASIgBABIABAAQABADgBACQgBADgFACQgIAEgFAAIgBAAgAjFiKQgGAEgFALQgIAVABAfIAFA1IACAoQABAZAEAQQAEARARAiIALAYIACADQAAgDADgDIAGgGQAIgGAHgRQAfhUgZhGQgIgXgYgpQgKgRgIgGIgGgFIgCACgAhxCHQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABgDAEgFQASgaAEgjQADgWgKgzIgHgjQgFgTgIgOIgMgTQgIgMgDgIQgBgEACgBQABAAAAAAQABAAAAAAQABAAAAABQABABAAAAQAXAfAJARIABACIAHAWIAGAVIAFAbQAKAwgFAdQgFAZgSAfIgCADQgEAFgDAAIgCgBgAhOCAIgBgBQgCgEAGgHQAMgOAEgYQABgLgBggIgCgkQgBgVgDgQQgDgNgIgVQgKgZgDgJQgCgEADgCIABgBIAEABIACAEQATApAFASQAIAeACBAIgBAmIAAAAIAAAEQgFAZgNANIgBACIgFADIgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAgaB2QgDgBAAgEIABgGQAahUgZhBIgKgWQgGgOgDgJQgBgHAEAAQACAAACAEIAHAOIAPAiQAWA8gQBIQgCAMgEAJQgDAIgEAAIgCgBgABJBtQgEgCADgIQANgegEg0QgDgbgFgQIgFgOQgCgIABgGQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAABQABABAAABQABAFAIAWQAGANADARIABAMQAGAxgNAlIgEAHQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBgACBBoQgDgBAAgEIACgGQAEgKACgRIACgVQABgXgBgQIgBgBIgBgFQAAgFgIgaQgDgKAAgFIABgCQAAgBABAAQAAAAAAAAQAAgBABAAQAAABABAAIABACQABAGADAJIAGAPQALAfgFA2QgCATgEALIgEAFIgEACIgBgBgAAUBoQgDgBAAgEIABgGQAFgPADgUIAAAAIAAgDQACgQAAgTQABgpgJgXIgJgWIgBgFQAAgEADABIAEACQAPAWAFAhQADAXgDAiQgDAlgGAUIgDAFQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAgACmBiQgCgDACgGQAGgTACgSIABgQQAAgYgJgiIAAgFQAAgBAAgBQABAAAAgBQABAAAAAAQABAAABAAQACAAABAEQALAlAAAbQgBAUgGAXIgDAMQgBAEgCABIgCABIgDgBgADQBdQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIACgFQAKgQAAgjQgBgfgDgNQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIACADQAEAPACAYQABAXgBALQgCATgIALIgDAEIgCABIgCgBg"
      );
    this.shape_2.setTransform(-14.7053, -0.0264);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AAWCQIAAgBIAAgBQAOgSAHgTQAKgaACgdQgBA3gUAgIAAABQgGAIgFADQABgDgCgCgAgICUQgGgGgFgIIgGgLQgTgkgFgbQgFgYACgiIAAAAIAAgBIgBgXQgDg8AFgeQACgQAIgJQABgEACgBIADgBQAEgDAFgBIgBABIAAAEIgBAAQgMAEgGASQgIAXABAiIADAqIABARIACAnQABAXAFAQQAEANAJATIAPAgIAGAKIgBAAgAAACNIgMgXQgQgjgEgRQgFgQgBgYIgCgpIgEg1QgBgfAIgUQAFgMAFgEIADgCIAFAFQAJAHAKARQAXApAIAWQAZBGggBUQgGASgIAGIgHAGQgCADAAACIgBgDgAAugkQgLgogTgcQgIgNgPgSIgKgLIgCgCIAFABIAFACIAIAHIACAEIALAPIABAFIAQAgIAKAUQAHAVAEAYIgEgTg"
      );
    this.shape_3.setTransform(-31.7779, -0.375);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-37.3, -15.4, 75.6, 30.8);

  (lib.Tween26 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AiNFVIAAhSIBJgOIAAngIh9AAIgGBNIhoAAIAAi2IJfAAIAAC2IhpAAIgFhNIh+AAIAAHgIBJAOIAABSg"
      );
    this.shape.setTransform(114.65, 3.175);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#48A9A6").s().p("AguCBIAAkBIBdAAIAAB+IghCDg");
    this.shape_1.setTransform(72.475, -22.875);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#48A9A6")
      .s()
      .p(
        "ACLFVIkTnKIgCAAIAAFqIBJAOIAABSIkbAAIAAhSIBJgOIAAnpIhJgOIAAhSIBJAAICJAAIESHKIADAAIAAlqIhJgOIAAhSIDRAAIBKAAIAABSIhKAOIAAJJg"
      );
    this.shape_2.setTransform(24.675, 3.175);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AjfD9QhVhiAAiWIAAgJQAAiVBVhjQBUhiCLAAQCJAABXBiQBVBjAACVIAAAJQAACWhVBiQhWBiiKAAQiKAAhVhigAiBiyQgqBCAABrIAAAKQAABsArBCQAqBCBWAAQBWAAArhCQAshCAAhsIAAgKQAAhqgshCQgshChVAAQhXAAgqBBg"
      );
    this.shape_3.setTransform(-46.675, 3.175);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AkoFVIAAhSIBJgOIAAnpIhJgOIAAhSIBJAAIDpAAQB9AABRBQQBRBQAAB9IAABwQAAB9hRBQQhRBPh9AAgAhXDsIBaAAQBJAAAqgxQAqgyAAhQIAAhxQAAhPgqgyQgqgyhJAAIhaAAg"
      );
    this.shape_4.setTransform(-114.55, 3.175);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-149, -65.3, 298, 130.6);

  (lib.Tween25 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AiNFVIAAhSIBJgOIAAngIh9AAIgGBNIhoAAIAAi2IJfAAIAAC2IhpAAIgFhNIh+AAIAAHgIBJAOIAABSg"
      );
    this.shape.setTransform(114.65, 3.175);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#48A9A6").s().p("AguCBIAAkBIBdAAIAAB+IghCDg");
    this.shape_1.setTransform(72.475, -22.875);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#48A9A6")
      .s()
      .p(
        "ACLFVIkTnKIgCAAIAAFqIBJAOIAABSIkbAAIAAhSIBJgOIAAnpIhJgOIAAhSIBJAAICJAAIESHKIADAAIAAlqIhJgOIAAhSIDRAAIBKAAIAABSIhKAOIAAJJg"
      );
    this.shape_2.setTransform(24.675, 3.175);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AjfD9QhVhiAAiWIAAgJQAAiVBVhjQBUhiCLAAQCJAABXBiQBVBjAACVIAAAJQAACWhVBiQhWBiiKAAQiKAAhVhigAiBiyQgqBCAABrIAAAKQAABsArBCQAqBCBWAAQBWAAArhCQAshCAAhsIAAgKQAAhqgshCQgshChVAAQhXAAgqBBg"
      );
    this.shape_3.setTransform(-46.675, 3.175);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AkoFVIAAhSIBJgOIAAnpIhJgOIAAhSIBJAAIDpAAQB9AABRBQQBRBQAAB9IAABwQAAB9hRBQQhRBPh9AAgAhXDsIBaAAQBJAAAqgxQAqgyAAhQIAAhxQAAhPgqgyQgqgyhJAAIhaAAg"
      );
    this.shape_4.setTransform(-114.55, 3.175);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-149, -65.3, 298, 130.6);

  (lib.Tween10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgTgKgKQgKgLgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAAUgLAOQgKAOgUAHQAXAIAKAPQAJAPAAAYIAAAMQAAAJAEAFQADAEAIABIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgKAAgRQAAgRgLgKQgLgLgUAAIgkAAg"
      );
    this.shape.setTransform(97.625, 1.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABJIBSAAIACgfIAnAAIAABGg"
      );
    this.shape_1.setTransform(72.225, 1.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAZCAIAAgfIAbgFIAAhHIhnAAIAABHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIBqAAIAAAfIgbAGIAABJIBnAAIAAhJIgbgGIAAgfIAbAAIAzAAIAcAAIAAAfIgcAGIAAC2IAcAFIAAAfg"
      );
    this.shape_2.setTransform(46.025, 1.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAcgFIAAi0IgwAAIgCAdIgnAAIAAhEIDjAAIAABEIgnAAIgCgdIgwAAIAAC0IAcAFIAAAfg"
      );
    this.shape_3.setTransform(18.9, 1.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhTBfQggglAAg4IAAgDQAAg4AfglQAggkA0gBQAzABAhAkQAgAlAAA4IAAADQAAA4ggAlQghAlgzgBQg0ABgfglgAgwhCQgQAZAAAoIAAADQAAApAQAYQAQAZAgAAQAgAAARgZQAQgYAAgpIAAgDQgBgogQgZQgQgYggAAQggAAgQAYg"
      );
    this.shape_4.setTransform(-6.85, 1.2);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhuCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQAvAAAeAeQAeAeAAAvIAAApQAAAwgeAeQgeAdgvAAgAggBZIAhAAQAcgBAPgSQAQgTAAgeIAAgqQAAgdgQgTQgPgTgcAAIghAAg"
      );
    this.shape_5.setTransform(-43.125, 1.2);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA0CAIhmirIgBAAIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIA0AAIBmCsIABgBIAAiGIgbgGIAAgfIBOAAIAcAAIAAAfIgcAGIAADag"
      );
    this.shape_6.setTransform(-69.975, 1.2);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_7.setTransform(-97.975, 1.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-112.9, -25.7, 225.9, 51.5);

  (lib.Tween9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgTgKgKQgKgLgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAAUgLAOQgKAOgUAHQAXAIAKAPQAJAPAAAYIAAAMQAAAJAEAFQADAEAIABIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgKAAgRQAAgRgLgKQgLgLgUAAIgkAAg"
      );
    this.shape.setTransform(97.625, 1.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABJIBSAAIACgfIAnAAIAABGg"
      );
    this.shape_1.setTransform(72.225, 1.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAZCAIAAgfIAbgFIAAhHIhnAAIAABHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIBqAAIAAAfIgbAGIAABJIBnAAIAAhJIgbgGIAAgfIAbAAIAzAAIAcAAIAAAfIgcAGIAAC2IAcAFIAAAfg"
      );
    this.shape_2.setTransform(46.025, 1.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAcgFIAAi0IgwAAIgCAdIgnAAIAAhEIDjAAIAABEIgnAAIgCgdIgwAAIAAC0IAcAFIAAAfg"
      );
    this.shape_3.setTransform(18.9, 1.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhTBfQggglAAg4IAAgDQAAg4AfglQAggkA0gBQAzABAhAkQAgAlAAA4IAAADQAAA4ggAlQghAlgzgBQg0ABgfglgAgwhCQgQAZAAAoIAAADQAAApAQAYQAQAZAgAAQAgAAARgZQAQgYAAgpIAAgDQgBgogQgZQgQgYggAAQggAAgQAYg"
      );
    this.shape_4.setTransform(-6.85, 1.2);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhuCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQAvAAAeAeQAeAeAAAvIAAApQAAAwgeAeQgeAdgvAAgAggBZIAhAAQAcgBAPgSQAQgTAAgeIAAgqQAAgdgQgTQgPgTgcAAIghAAg"
      );
    this.shape_5.setTransform(-43.125, 1.2);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA0CAIhmirIgBAAIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIA0AAIBmCsIABgBIAAiGIgbgGIAAgfIBOAAIAcAAIAAAfIgcAGIAADag"
      );
    this.shape_6.setTransform(-69.975, 1.2);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_7.setTransform(-97.975, 1.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-112.9, -25.7, 225.9, 51.5);

  (lib.Tween8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgfCCIAAgsIAzAAIAAAsgAgeA5QAAgZAHgLQAHgLAUgQQANgKAHgMQAIgMAAgOQAAgQgJgJQgIgKgPAAQgNAAgJAIQgJAIAAAPIgyAAIgBgBQAAgiAXgSQAWgSAlAAQAmAAAXAUQAWAUAAAiQAAAXgNATQgNASgUAMQgLAJgDAIQgDAIAAAPg"
      );
    this.shape.setTransform(242.2245, 1.025);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA0CAIhmirIgBAAIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIA0AAIBmCsIABgBIAAiGIgbgGIAAgfIBOAAIAcAAIAAAfIgcAGIAADag"
      );
    this.shape_1.setTransform(218.625, 1.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhTBfQggglAAg4IAAgDQAAg4AfglQAhgkAzgBQAzABAhAkQAgAlAAA4IAAADQAAA4ggAlQghAlgzgBQg0ABgfglgAgwhCQgQAZAAAoIAAADQAAApAQAYQAQAZAgAAQAgAAAQgZQAQgYABgpIAAgDQAAgogRgZQgRgYgfAAQggAAgQAYg"
      );
    this.shape_2.setTransform(190.9, 1.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#111A2C")
      .s()
      .p("Ag0CAIAAgfIAbgFIAAi2IgbgGIAAgfIBpAAIAAAfIgcAGIAAC2IAcAFIAAAfg");
    this.shape_3.setTransform(170.8, 1.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAbgFIAAi0IguAAIgDAdIgnAAIAAhEIDjAAIAABEIgnAAIgCgdIgvAAIAAC0IAbAFIAAAfg"
      );
    this.shape_4.setTransform(151.5, 1.2);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_5.setTransform(125.475, 1.2);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA2CAIAAgfIAcgFIAAgoIAFhxIgBAAIhFC9IghAAIhFi8IgBAAIAFBwIAAAoIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBDAAIBBC8IAAAAIBCi8IBeAAIAAAfIgbAGIAAC2IAbAFIAAAfg"
      );
    this.shape_6.setTransform(94.675, 1.2);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgTgKgKQgKgLgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAAUgLAOQgKAOgUAHQAXAIAKAPQAJAPAAAYIAAAMQAAAJAEAFQADAEAIABIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgKAAgRQAAgRgLgKQgLgLgUAAIgkAAg"
      );
    this.shape_7.setTransform(64.425, 1.2);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhTBfQggglAAg4IAAgDQAAg4AfglQAhgkAzgBQAzABAhAkQAgAlAAA4IAAADQAAA4ggAlQghAlgzgBQgzABggglgAgwhCQgQAZAAAoIAAADQAAApAQAYQAQAZAgAAQAgAAARgZQAQgYAAgpIAAgDQAAgogRgZQgQgYggAAQggAAgQAYg"
      );
    this.shape_8.setTransform(38.25, 1.2);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhlCAIAAgfIAbgFIAAi2IgbgGIAAgfIDLAAIAABGIgoAAIgCgfIhSAAIAABHIBYAAIAAAmIhYAAIAABHIAaAFIAAAfg"
      );
    this.shape_9.setTransform(13.375, 1.2);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA0CAIhmirIgBAAIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIA0AAIBmCsIABgBIAAiGIgbgGIAAgfIBOAAIAcAAIAAAfIgcAGIAADag"
      );
    this.shape_10.setTransform(-12.525, 1.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#111A2C")
      .s()
      .p("Ag0CAIAAgfIAbgFIAAi2IgbgGIAAgfIBpAAIAAAfIgbAGIAAC2IAbAFIAAAfg");
    this.shape_11.setTransform(-33.9, 1.2);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAcgFIAAi0IgwAAIgCAdIgnAAIAAhEIDjAAIAABEIgnAAIgCgdIgwAAIAAC0IAcAFIAAAfg"
      );
    this.shape_12.setTransform(-63, 1.2);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhHBgQghgkAAg4IAAgHQAAg4AhgkQAggkAzAAQAeABAYAKQAYALAPASIAAAyIgmAAIgFgiQgIgIgLgEQgMgEgPAAQghAAgSAYQgSAYAAAnIAAAIQAAAnASAZQASAZAggBQAPAAANgEQAMgFAHgHIAFgiIAmAAIAAAyQgPASgYALQgYALgegBQgyABghgkg"
      );
    this.shape_13.setTransform(-88.025, 1.2);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_14.setTransform(-113.375, 1.2);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgTgKgKQgKgLgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAAUgLAOQgKAOgUAHQAXAIAKAPQAJAPAAAYIAAAMQAAAJAEAFQADAEAIABIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgKAAgRQAAgRgLgKQgLgLgUAAIgkAAg"
      );
    this.shape_15.setTransform(-139.525, 1.2);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAbgFIAAi0IgvAAIgCAdIgnAAIAAhEIDjAAIAABEIgnAAIgDgdIguAAIAAC0IAbAFIAAAfg"
      );
    this.shape_16.setTransform(-165.1, 1.2);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag1B6QgZgJgQgSIAAg1IAoAAIAFAlQAIAGAOAEQANAEAPAAQAVAAALgJQALgJAAgOQAAgOgLgKQgKgIgZgJQgtgNgYgQQgYgTAAggQABgfAagTQAbgUAngBQAcABAZAIQAYAKARAPIAAA0IgmAAIgHgjQgHgFgNgDQgNgDgOAAQgUAAgMAJQgMAJABAOQAAANAMAJQAMAHAdAKQApAMAXASQAWAUgBAfQAAAhgaASQgZAUgrgBQgdABgZgKg"
      );
    this.shape_17.setTransform(-188.8, 1.2);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhsCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBVAAQAuAAAZASQAZARAAAjQAAASgJAOQgKAOgSAHQAXAEAMAQQALAQAAAWQAAAkgYATQgYATgtAAgAgeBZIAuAAQAVAAALgJQAKgJAAgRQAAgUgJgJQgJgKgUAAIgyAAgAgegTIAkAAQAVAAALgJQALgIAAgRQAAgRgLgJQgMgIgWgBIgiAAg"
      );
    this.shape_18.setTransform(-212.925, 1.2);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_19.setTransform(-238.775, 1.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-253.7, -25.7, 507.5, 51.5);

  (lib.Tween7 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgfCCIAAgsIAzAAIAAAsgAgeA5QAAgZAHgLQAHgLAUgQQANgKAHgMQAIgMAAgOQAAgQgJgJQgIgKgPAAQgNAAgJAIQgJAIAAAPIgyAAIgBgBQAAgiAXgSQAWgSAlAAQAmAAAXAUQAWAUAAAiQAAAXgNATQgNASgUAMQgLAJgDAIQgDAIAAAPg"
      );
    this.shape.setTransform(242.2245, 1.025);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA0CAIhmirIgBAAIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIA0AAIBmCsIABgBIAAiGIgbgGIAAgfIBOAAIAcAAIAAAfIgcAGIAADag"
      );
    this.shape_1.setTransform(218.625, 1.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhTBfQggglAAg4IAAgDQAAg4AfglQAhgkAzgBQAzABAhAkQAgAlAAA4IAAADQAAA4ggAlQghAlgzgBQg0ABgfglgAgwhCQgQAZAAAoIAAADQAAApAQAYQAQAZAgAAQAgAAAQgZQAQgYABgpIAAgDQAAgogRgZQgRgYgfAAQggAAgQAYg"
      );
    this.shape_2.setTransform(190.9, 1.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#111A2C")
      .s()
      .p("Ag0CAIAAgfIAbgFIAAi2IgbgGIAAgfIBpAAIAAAfIgcAGIAAC2IAcAFIAAAfg");
    this.shape_3.setTransform(170.8, 1.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAbgFIAAi0IguAAIgDAdIgnAAIAAhEIDjAAIAABEIgnAAIgCgdIgvAAIAAC0IAbAFIAAAfg"
      );
    this.shape_4.setTransform(151.5, 1.2);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_5.setTransform(125.475, 1.2);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA2CAIAAgfIAcgFIAAgoIAFhxIgBAAIhFC9IghAAIhFi8IgBAAIAFBwIAAAoIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBDAAIBBC8IAAAAIBCi8IBeAAIAAAfIgbAGIAAC2IAbAFIAAAfg"
      );
    this.shape_6.setTransform(94.675, 1.2);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgTgKgKQgKgLgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAAUgLAOQgKAOgUAHQAXAIAKAPQAJAPAAAYIAAAMQAAAJAEAFQADAEAIABIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgKAAgRQAAgRgLgKQgLgLgUAAIgkAAg"
      );
    this.shape_7.setTransform(64.425, 1.2);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhTBfQggglAAg4IAAgDQAAg4AfglQAhgkAzgBQAzABAhAkQAgAlAAA4IAAADQAAA4ggAlQghAlgzgBQgzABggglgAgwhCQgQAZAAAoIAAADQAAApAQAYQAQAZAgAAQAgAAARgZQAQgYAAgpIAAgDQAAgogRgZQgQgYggAAQggAAgQAYg"
      );
    this.shape_8.setTransform(38.25, 1.2);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhlCAIAAgfIAbgFIAAi2IgbgGIAAgfIDLAAIAABGIgoAAIgCgfIhSAAIAABHIBYAAIAAAmIhYAAIAABHIAaAFIAAAfg"
      );
    this.shape_9.setTransform(13.375, 1.2);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA0CAIhmirIgBAAIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIA0AAIBmCsIABgBIAAiGIgbgGIAAgfIBOAAIAcAAIAAAfIgcAGIAADag"
      );
    this.shape_10.setTransform(-12.525, 1.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#111A2C")
      .s()
      .p("Ag0CAIAAgfIAbgFIAAi2IgbgGIAAgfIBpAAIAAAfIgbAGIAAC2IAbAFIAAAfg");
    this.shape_11.setTransform(-33.9, 1.2);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAcgFIAAi0IgwAAIgCAdIgnAAIAAhEIDjAAIAABEIgnAAIgCgdIgwAAIAAC0IAcAFIAAAfg"
      );
    this.shape_12.setTransform(-63, 1.2);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhHBgQghgkAAg4IAAgHQAAg4AhgkQAggkAzAAQAeABAYAKQAYALAPASIAAAyIgmAAIgFgiQgIgIgLgEQgMgEgPAAQghAAgSAYQgSAYAAAnIAAAIQAAAnASAZQASAZAggBQAPAAANgEQAMgFAHgHIAFgiIAmAAIAAAyQgPASgYALQgYALgegBQgyABghgkg"
      );
    this.shape_13.setTransform(-88.025, 1.2);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_14.setTransform(-113.375, 1.2);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgTgKgKQgKgLgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAAUgLAOQgKAOgUAHQAXAIAKAPQAJAPAAAYIAAAMQAAAJAEAFQADAEAIABIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgKAAgRQAAgRgLgKQgLgLgUAAIgkAAg"
      );
    this.shape_15.setTransform(-139.525, 1.2);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAbgFIAAi0IgvAAIgCAdIgnAAIAAhEIDjAAIAABEIgnAAIgDgdIguAAIAAC0IAbAFIAAAfg"
      );
    this.shape_16.setTransform(-165.1, 1.2);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag1B6QgZgJgQgSIAAg1IAoAAIAFAlQAIAGAOAEQANAEAPAAQAVAAALgJQALgJAAgOQAAgOgLgKQgKgIgZgJQgtgNgYgQQgYgTAAggQABgfAagTQAbgUAngBQAcABAZAIQAYAKARAPIAAA0IgmAAIgHgjQgHgFgNgDQgNgDgOAAQgUAAgMAJQgMAJABAOQAAANAMAJQAMAHAdAKQApAMAXASQAWAUgBAfQAAAhgaASQgZAUgrgBQgdABgZgKg"
      );
    this.shape_17.setTransform(-188.8, 1.2);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhsCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBVAAQAuAAAZASQAZARAAAjQAAASgJAOQgKAOgSAHQAXAEAMAQQALAQAAAWQAAAkgYATQgYATgtAAgAgeBZIAuAAQAVAAALgJQAKgJAAgRQAAgUgJgJQgJgKgUAAIgyAAgAgegTIAkAAQAVAAALgJQALgIAAgRQAAgRgLgJQgMgIgWgBIgiAAg"
      );
    this.shape_18.setTransform(-212.925, 1.2);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_19.setTransform(-238.775, 1.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-253.7, -25.7, 507.5, 51.5);

  (lib.Tween6 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag1B6QgYgJgRgSIAAg1IAoAAIAFAlQAIAGAOAEQAMAEAQAAQAVAAALgJQALgJAAgOQAAgOgKgKQgLgIgZgJQgtgNgYgQQgXgTgBggQAAgfAbgTQAbgUAngBQAcABAZAIQAYAKARAPIAAA0IgmAAIgIgjQgGgFgNgDQgNgDgOAAQgUAAgMAJQgMAJAAAOQAAANANAJQAMAHAcAKQAqAMAWASQAXAUAAAfQAAAhgaASQgaAUgrgBQgeABgYgKg"
      );
    this.shape.setTransform(57.1, 1.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABJIBSAAIACgfIAnAAIAABGg"
      );
    this.shape_1.setTransform(32.975, 1.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AA2CAIAAgfIAcgFIAAgoIAFhxIgBAAIhFC9IghAAIhFi8IgBAAIAFBwIAAAoIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBDAAIBBC8IAAAAIBCi8IBeAAIAAAfIgbAGIAAC2IAbAFIAAAfg"
      );
    this.shape_2.setTransform(3.975, 1.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_3.setTransform(-26.975, 1.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AA0CAIhmirIgBAAIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIA0AAIBmCsIABgBIAAiGIgbgGIAAgfIBOAAIAcAAIAAAfIgcAGIAADag"
      );
    this.shape_4.setTransform(-54.625, 1.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-70.8, -25.7, 141.6, 51.5);

  (lib.Tween5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag1B6QgYgJgRgSIAAg1IAoAAIAFAlQAIAGAOAEQAMAEAQAAQAVAAALgJQALgJAAgOQAAgOgKgKQgLgIgZgJQgtgNgYgQQgXgTgBggQAAgfAbgTQAbgUAngBQAcABAZAIQAYAKARAPIAAA0IgmAAIgIgjQgGgFgNgDQgNgDgOAAQgUAAgMAJQgMAJAAAOQAAANANAJQAMAHAcAKQAqAMAWASQAXAUAAAfQAAAhgaASQgaAUgrgBQgeABgYgKg"
      );
    this.shape.setTransform(57.1, 1.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABJIBSAAIACgfIAnAAIAABGg"
      );
    this.shape_1.setTransform(32.975, 1.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AA2CAIAAgfIAcgFIAAgoIAFhxIgBAAIhFC9IghAAIhFi8IgBAAIAFBwIAAAoIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBDAAIBBC8IAAAAIBCi8IBeAAIAAAfIgbAGIAAC2IAbAFIAAAfg"
      );
    this.shape_2.setTransform(3.975, 1.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_3.setTransform(-26.975, 1.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AA0CAIhmirIgBAAIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIA0AAIBmCsIABgBIAAiGIgbgGIAAgfIBOAAIAcAAIAAAfIgcAGIAADag"
      );
    this.shape_4.setTransform(-54.625, 1.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-70.8, -25.7, 141.6, 51.5);

  (lib.Tween4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "Ag1B6QgZgJgQgSIAAg1IAoAAIAGAlQAHAGANAEQAOAEAPAAQAVAAALgJQALgJAAgOQAAgOgKgKQgLgIgZgJQgtgNgYgQQgXgTAAggQAAgfAagTQAbgUAngBQAdABAYAIQAYAKARAPIAAA0IgnAAIgHgjQgGgFgNgDQgNgDgOAAQgVAAgKAJQgNAJAAAOQAAANANAJQAMAHAcAKQAqAMAWASQAXAUAAAfQAAAhgaASQgbAUgqgBQgdABgZgKg"
      );
    this.shape.setTransform(83.05, 1.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgTgKgKQgKgLgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAAUgLAOQgKAOgUAHQAXAIAKAPQAJAPAAAYIAAAMQAAAJAEAFQADAEAIABIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgKAAgRQAAgRgLgKQgLgLgUAAIgkAAg"
      );
    this.shape_1.setTransform(58.575, 1.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABJIBSAAIACgfIAnAAIAABGg"
      );
    this.shape_2.setTransform(33.175, 1.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhsCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBVAAQAuAAAZASQAZARAAAjQAAASgJAOQgKAOgSAHQAXAEAMAQQALAQAAAWQAAAkgYATQgYATgtAAgAgeBZIAuAAQAVAAALgJQAKgJAAgRQAAgUgJgJQgJgKgUAAIgyAAgAgegTIAkAAQAVAAALgJQALgIAAgRQAAgRgLgJQgMgIgWgBIgiAAg"
      );
    this.shape_3.setTransform(9.175, 1.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AA2CAIAAgfIAcgFIAAgoIAFhxIgBAAIhFC9IghAAIhFi8IgBAAIAFBwIAAAoIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBDAAIBBC8IAAAAIBCi8IBeAAIAAAfIgbAGIAAC2IAbAFIAAAfg"
      );
    this.shape_4.setTransform(-20.625, 1.2);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhJBrQgdgYAAgrIAAiEIgbgGIAAgfIAbAAIA0AAIAbAAIAAAfIgbAGIAACEQAAAZANANQAOANAXAAQAYAAANgNQAOgMAAgaIAAiEIgbgGIAAgfIBqAAIAAAfIgcAGIAACEQAAArgcAYQgcAXguAAQgtAAgcgXg"
      );
    this.shape_5.setTransform(-52.175, 1.375);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AA0CAIhmirIgBAAIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIA0AAIBmCsIABgBIAAiGIgbgGIAAgfIBOAAIAcAAIAAAfIgcAGIAADag"
      );
    this.shape_6.setTransform(-80.575, 1.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-96.7, -25.7, 193.5, 51.5);

  (lib.Tween3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "Ag1B6QgZgJgQgSIAAg1IAoAAIAGAlQAHAGANAEQAOAEAPAAQAVAAALgJQALgJAAgOQAAgOgKgKQgLgIgZgJQgtgNgYgQQgXgTAAggQAAgfAagTQAbgUAngBQAdABAYAIQAYAKARAPIAAA0IgnAAIgHgjQgGgFgNgDQgNgDgOAAQgVAAgKAJQgNAJAAAOQAAANANAJQAMAHAcAKQAqAMAWASQAXAUAAAfQAAAhgaASQgbAUgqgBQgdABgZgKg"
      );
    this.shape.setTransform(83.05, 1.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgTgKgKQgKgLgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAAUgLAOQgKAOgUAHQAXAIAKAPQAJAPAAAYIAAAMQAAAJAEAFQADAEAIABIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgKAAgRQAAgRgLgKQgLgLgUAAIgkAAg"
      );
    this.shape_1.setTransform(58.575, 1.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABJIBSAAIACgfIAnAAIAABGg"
      );
    this.shape_2.setTransform(33.175, 1.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhsCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBVAAQAuAAAZASQAZARAAAjQAAASgJAOQgKAOgSAHQAXAEAMAQQALAQAAAWQAAAkgYATQgYATgtAAgAgeBZIAuAAQAVAAALgJQAKgJAAgRQAAgUgJgJQgJgKgUAAIgyAAgAgegTIAkAAQAVAAALgJQALgIAAgRQAAgRgLgJQgMgIgWgBIgiAAg"
      );
    this.shape_3.setTransform(9.175, 1.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AA2CAIAAgfIAcgFIAAgoIAFhxIgBAAIhFC9IghAAIhFi8IgBAAIAFBwIAAAoIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBDAAIBBC8IAAAAIBCi8IBeAAIAAAfIgbAGIAAC2IAbAFIAAAfg"
      );
    this.shape_4.setTransform(-20.625, 1.2);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhJBrQgdgYAAgrIAAiEIgbgGIAAgfIAbAAIA0AAIAbAAIAAAfIgbAGIAACEQAAAZANANQAOANAXAAQAYAAANgNQAOgMAAgaIAAiEIgbgGIAAgfIBqAAIAAAfIgcAGIAACEQAAArgcAYQgcAXguAAQgtAAgcgXg"
      );
    this.shape_5.setTransform(-52.175, 1.375);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AA0CAIhmirIgBAAIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIA0AAIBmCsIABgBIAAiGIgbgGIAAgfIBOAAIAcAAIAAAfIgcAGIAADag"
      );
    this.shape_6.setTransform(-80.575, 1.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-96.7, -25.7, 193.5, 51.5);

  (lib.Tween2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#48A9A6")
      .s()
      .p(
        "Ag1B6QgYgJgRgSIAAg1IAoAAIAFAlQAIAGAOAEQANAEAPAAQAVAAALgJQALgJAAgOQAAgOgKgKQgLgIgZgJQgtgNgYgQQgXgTgBggQABgfAagTQAbgUAngBQAcABAZAIQAYAKARAPIAAA0IgmAAIgIgjQgGgFgNgDQgNgDgOAAQgUAAgMAJQgMAJABAOQAAANAMAJQAMAHAdAKQApAMAWASQAXAUgBAfQAAAhgZASQgaAUgrgBQgeABgYgKg"
      );
    this.shape.setTransform(50.7, 1.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABJIBSAAIACgfIAnAAIAABGg"
      );
    this.shape_1.setTransform(26.575, 1.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#48A9A6")
      .s()
      .p(
        "Ag0CAIAAgfIAbgFIAAi0IgvAAIgCAdIgnAAIAAhEIDjAAIAABEIgnAAIgDgdIgvAAIAAC0IAcAFIAAAfg"
      );
    this.shape_2.setTransform(2.4, 1.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_3.setTransform(-23.625, 1.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhuCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQAvAAAeAeQAeAeAAAvIAAApQAAAwgeAeQgeAdgvAAgAggBZIAhAAQAcgBAPgSQAQgTAAgeIAAgqQAAgdgQgTQgPgTgcAAIghAAg"
      );
    this.shape_4.setTransform(-50.225, 1.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-64.4, -25.7, 128.8, 51.5);

  (lib.Tween1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#48A9A6")
      .s()
      .p(
        "Ag1B6QgYgJgRgSIAAg1IAoAAIAFAlQAIAGAOAEQANAEAPAAQAVAAALgJQALgJAAgOQAAgOgKgKQgLgIgZgJQgtgNgYgQQgXgTgBggQABgfAagTQAbgUAngBQAcABAZAIQAYAKARAPIAAA0IgmAAIgIgjQgGgFgNgDQgNgDgOAAQgUAAgMAJQgMAJABAOQAAANAMAJQAMAHAdAKQApAMAWASQAXAUgBAfQAAAhgZASQgaAUgrgBQgeABgYgKg"
      );
    this.shape.setTransform(50.7, 1.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABJIBSAAIACgfIAnAAIAABGg"
      );
    this.shape_1.setTransform(26.575, 1.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#48A9A6")
      .s()
      .p(
        "Ag0CAIAAgfIAbgFIAAi0IgvAAIgCAdIgnAAIAAhEIDjAAIAABEIgnAAIgDgdIgvAAIAAC0IAcAFIAAAfg"
      );
    this.shape_2.setTransform(2.4, 1.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_3.setTransform(-23.625, 1.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhuCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQAvAAAeAeQAeAeAAAvIAAApQAAAwgeAeQgeAdgvAAgAggBZIAhAAQAcgBAPgSQAQgTAAgeIAAgqQAAgdgQgTQgPgTgcAAIghAAg"
      );
    this.shape_4.setTransform(-50.225, 1.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-64.4, -25.7, 128.8, 51.5);

  (lib.Symbol9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhTFaIAAh1ICIAAIAAB1gAhTCYQABhBATgfQATgeA3grQAigbAUggQATgfAAgnQAAgrgWgYQgXgZgpAAQgjAAgYAVQgYAVgBAnIiFAAIgBgCQgBhaA9gwQA8gwBiAAQBoAAA8A1QA7A1AABcQAAA7giAzQgkAyg0AiQgdAWgJAWQgJAWAAAng"
      );
    this.shape.setTransform(118.2982, 2.675);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AB/FVIh9nBIgCAAIh9HBIh/AAIiMpQIg3gHIAAhSID7AAIAABSIg+ALIBOF1IADABIB/nTIBkAAICCHTIACgBIBOl1Ig+gLIAAhSID7AAIAABSIg5AHIiKJQg"
      );
    this.shape_1.setTransform(48.35, 3.175);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AjfD9QhVhiAAiWIAAgJQAAiVBVhjQBUhiCLAAQCJAABXBiQBVBjAACVIAAAJQAACWhVBiQhWBiiKAAQiKAAhVhigAiBiyQgqBCAABrIAAAKQAABsArBCQAqBCBWAAQBWAAArhCQAshCAAhsIAAgKQAAhqgshCQgshChVAAQhXAAgqBBg"
      );
    this.shape_2.setTransform(-31.675, 3.175);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ABCFVIAAhSIBJgOIAAi7IkVAAIAAC7IBJAOIAABSIkbAAIAAhSIBJgOIAAnpIhJgOIAAhSIEbAAIAABSIhJAOIAADFIEVAAIAAjFIhJgOIAAhSIBJAAICIAAIBKAAIAABSIhKAOIAAHpIBKAOIAABSg"
      );
    this.shape_3.setTransform(-103.275, 3.175);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-142.8, -65.3, 285.70000000000005, 130.6);

  (lib.Symbol6 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#111A2C")
      .s()
      .p(
        "AjUD1IAAg7IA0gKIAAlfIg0gKIAAg7IA0AAICnAAQBaAAA7A5QA5A6AABaIAABQQAABag5A5Qg7A5haAAgAg+CqIBAAAQA1AAAegkQAegkAAg5IAAhRQAAg5gegkQgegjg1AAIhAAAg"
      );
    this.shape.setTransform(172.45, 2.275);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABkD1IjFlJIgCAAIAAEEIA0AKIAAA7IjKAAIAAg7IAzgKIAAlfIgzgKIAAg7IAzAAIBjAAIDFFJIACAAIAAkEIg0gKIAAg7ICWAAIA0AAIAAA7Ig0AKIAAGkg"
      );
    this.shape_1.setTransform(122.85, 2.275);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABDD1IAAg7IAigGIgVhDIifAAIgVBDIAiAGIAAA7IinAAIAAg7IAjgFICVmpIBkAAICUGpIAjAFIAAA7gAg3AoIBvAAIg3irIgBAAg"
      );
    this.shape_2.setTransform(71.15, 2.275);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhnDqQgugTggggIAAhnIBMAAIALBGQAOAMAaAIQAZAIAfAAQAoAAAVgRQAWgQgBgcQABgcgVgRQgTgRgygQQhXgZgtgiQgtgiAAg9QAAg7AygmQA0gmBLgBQA5AAAuARQAvARAfAdIAABkIhKAAIgMhDQgNgIgZgGQgZgGgbAAQgnAAgXARQgWARAAAbQAAAZAXAQQAYAQA3ASQBRAWArAkQApAlAAA9QAAA/gyAkQgxAkhSAAQg6AAgvgSg"
      );
    this.shape_3.setTransform(26.05, 2.275);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#111A2C")
      .s()
      .p(
        "AiNDMQg2gtAAhSIAAj/Ig1gKIAAg8IA1AAIBiAAIA1AAIAAA8Ig1AKIAAD/QgBAwAbAYQAaAYAtAAQAtAAAbgYQAagXAAgxIAAj/Ig0gKIAAg8IDLAAIAAA8Ig0AKIAAD/QAABSg2AtQg4AthXAAQhYAAg1gtg"
      );
    this.shape_4.setTransform(-21.4, 2.625);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#111A2C")
      .s()
      .p(
        "AigC2Qg9hHAAhrIAAgHQgBhrA+hHQA9hGBjAAQBiAAA+BGQA+BHAABrIAAAHQAABrg+BHQg9BGhjAAQhjAAg9hGgAhdh/QgeAvAABNIAAAHQAABNAfAwQAeAvA+AAQA9AAAggvQAggwgBhNIAAgHQAAhNgfgvQgggwg9AAQg+AAgfAwg"
      );
    this.shape_5.setTransform(-71.9, 2.275);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAwD1IAAg7IA0gKIAAiHIjHAAIAACHIA0AKIAAA7IjKAAIAAg7IAzgKIAAlfIgzgKIAAg7IDKAAIAAA7Ig0AKIAACOIDHAAIAAiOIg0gKIAAg7IA0AAIBiAAIA0AAIAAA7Ig0AKIAAFfIA0AKIAAA7g"
      );
    this.shape_6.setTransform(-123.4, 2.275);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhlD1IAAg7IA0gKIAAlYIhaAAIgEA2IhLAAIAAiCIG1AAIAACCIhMAAIgEg2IhaAAIAAFYIA0AKIAAA7g"
      );
    this.shape_7.setTransform(-173.525, 2.275);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AjUD1IAAg7IA0gKIAAlfIg0gKIAAg7IA0AAICnAAQBaAAA7A5QA5A6AABaIAABQQAABag5A5Qg7A5haAAgAg+CqIBAAAQA1AAAegkQAegkAAg5IAAhRQAAg5gegkQgegjg1AAIhAAAg"
      );
    this.shape_8.setTransform(172.45, 2.275);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#48A9A6")
      .s()
      .p(
        "ABkD1IjFlJIgCAAIAAEEIA0AKIAAA7IjKAAIAAg7IAzgKIAAlfIgzgKIAAg7IAzAAIBjAAIDFFJIACAAIAAkEIg0gKIAAg7ICWAAIA0AAIAAA7Ig0AKIAAGkg"
      );
    this.shape_9.setTransform(122.85, 2.275);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#48A9A6")
      .s()
      .p(
        "ABDD1IAAg7IAigGIgVhDIifAAIgVBDIAiAGIAAA7IinAAIAAg7IAjgFICVmpIBkAAICUGpIAjAFIAAA7gAg3AoIBvAAIg3irIgBAAg"
      );
    this.shape_10.setTransform(71.15, 2.275);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhnDqQgugTggggIAAhnIBMAAIALBGQAOAMAaAIQAZAIAfAAQAoAAAVgRQAWgQgBgcQABgcgVgRQgTgRgygQQhXgZgtgiQgtgiAAg9QAAg7AygmQA0gmBLgBQA5AAAuARQAvARAfAdIAABkIhKAAIgMhDQgNgIgZgGQgZgGgbAAQgnAAgXARQgWARAAAbQAAAZAXAQQAYAQA3ASQBRAWArAkQApAlAAA9QAAA/gyAkQgxAkhSAAQg6AAgvgSg"
      );
    this.shape_11.setTransform(26.05, 2.275);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AiNDMQg2gtAAhSIAAj/Ig1gKIAAg8IA1AAIBiAAIA1AAIAAA8Ig1AKIAAD/QgBAwAbAYQAaAYAtAAQAtAAAbgYQAagXAAgxIAAj/Ig0gKIAAg8IDLAAIAAA8Ig0AKIAAD/QAABSg2AtQg4AthXAAQhYAAg1gtg"
      );
    this.shape_12.setTransform(-21.4, 2.625);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AigC2Qg9hHAAhrIAAgHQgBhrA+hHQA9hGBjAAQBiAAA+BGQA+BHAABrIAAAHQAABrg+BHQg9BGhjAAQhjAAg9hGgAhdh/QgeAvAABNIAAAHQAABNAfAwQAeAvA+AAQA9AAAggvQAggwgBhNIAAgHQAAhNgfgvQgggwg9AAQg+AAgfAwg"
      );
    this.shape_13.setTransform(-71.9, 2.275);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAwD1IAAg7IA0gKIAAiHIjHAAIAACHIA0AKIAAA7IjKAAIAAg7IAzgKIAAlfIgzgKIAAg7IDKAAIAAA7Ig0AKIAACOIDHAAIAAiOIg0gKIAAg7IA0AAIBiAAIA0AAIAAA7Ig0AKIAAFfIA0AKIAAA7g"
      );
    this.shape_14.setTransform(-123.4, 2.275);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhlD1IAAg7IA0gKIAAlYIhaAAIgEA2IhLAAIAAiCIG1AAIAACCIhMAAIgEg2IhaAAIAAFYIA0AKIAAA7g"
      );
    this.shape_15.setTransform(-173.525, 2.275);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .to(
          {
            state: [
              { t: this.shape_15 },
              { t: this.shape_14 },
              { t: this.shape_13 },
              { t: this.shape_12 },
              { t: this.shape_11 },
              { t: this.shape_10 },
              { t: this.shape_9 },
              { t: this.shape_8 },
            ],
          },
          19
        )
        .wait(20)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-198.8, -47.5, 397.70000000000005, 95);

  (lib.Symbol5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AinEZQg/hGAAiIIAAiVQAAiHA/hGQA9hHBqAAQBqAAA/BHQA+BGAACHIAACVQAACIg+BGQg+BGhqAAQhqAAg+hGgAhFjPQgYAlAABSIAACxQAABSAYAmQAYAlAuAAQAuAAAYglQAYgmAAhSIAAixQAAhRgZgmQgYgmguAAQguAAgXAmg"
      );
    this.shape.setTransform(26.125, 3.175);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhtFVIAHhFQAQiXA0h8QA0h+BbhqIjvAAIgFBEIhpAAIAAitIHhAAIAABpQhuCBgnBuQgpBvgRCdIgHBFg"
      );
    this.shape_1.setTransform(-26.975, 3.175);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-55.4, -65.3, 110.9, 130.6);

  (lib.Symbol4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgyB5IAAgdIAagFIAAg2IhAh4IgVgEIAAgdIBcAAIAAAdIgUADIAlBPIAAAAIAmhPIgUgDIAAgdIBcAAIAAAdIgVAEIhBB7IAAAzIAZAFIAAAdg"
      );
    this.shape.setTransform(120.925, 24.575);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABUB5QgYAAgKgNQgJgNAAgUIAAgOQAAgRgKgKQgJgLgRAAIgnAAIAABAIAaAFIAAAdIhkAAIAAgdIAagFIAAitIgagFIAAgdIAaAAIBSAAQApAAAXATQAYATAAAhQAAASgKAOQgKANgTAHQAWAHAJAOQAJAPAAAWIAAAMQAAAIADAFQAEAEAHABIAGABIAAAdgAgigNIAiAAQATAAAKgJQAKgJAAgQQAAgQgKgKQgKgKgTAAIgiAAg"
      );
    this.shape_1.setTransform(97.775, 24.575);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhOBaQgfgjAAg1IAAgDQAAg1AegjQAegiAxAAQAxAAAeAiQAfAjAAA1IAAADQAAA1gfAjQgeAigxAAQgwAAgegigAgtg+QgPAXAAAmIAAADQAAAmAPAXQAPAYAeAAQAeAAAQgYQAPgXAAgmIAAgDQAAgmgPgXQgQgYgeAAQgeAAgPAYg"
      );
    this.shape_2.setTransform(73.975, 24.575);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAzB5IAAgdIAagFIAAgmIAFhqIgBAAIhBCyIgfAAIhBiyIgBABIAEBpIAAAmIAbAFIAAAdIhkAAIAAgdIAZgFIAAitIgZgFIAAgdIAZAAIBAAAIA9CxIAAAAIA+ixIBZAAIAAAdIgZAFIAACtIAZAFIAAAdg"
      );
    this.shape_3.setTransform(46, 24.575);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhfB5IAAgdIAagFIAAitIgagFIAAgdIAaAAICkAAIAABCIglAAIgCgdIhNAAIAAA9IBSAAIAAAlIhSAAIAABFIBNAAIACgdIAlAAIAABCg"
      );
    this.shape_4.setTransform(18.75, 24.575);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAzB5IAAgdIAagFIAAgmIAFhqIgCAAIhACyIgfAAIhBiyIgBABIAFBpIAAAmIAaAFIAAAdIhkAAIAAgdIAZgFIAAitIgZgFIAAgdIAZAAIBAAAIA9CxIAAAAIA+ixIBZAAIAAAdIgaAFIAACtIAaAFIAAAdg"
      );
    this.shape_5.setTransform(-7.65, 24.575);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAzB5IAAgdIAagFIAAgmIAEhqIgBAAIhACyIggAAIhAiyIgBABIAFBpIAAAmIAZAFIAAAdIhkAAIAAgdIAagFIAAitIgagFIAAgdIAaAAIA/AAIA+CxIAAAAIA+ixIBZAAIAAAdIgaAFIAACtIAaAFIAAAdg"
      );
    this.shape_6.setTransform(-48, 24.575);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhOBaQgfgjAAg1IAAgDQAAg1AegjQAegiAxAAQAxAAAeAiQAfAjAAA1IAAADQAAA1gfAjQgeAigxAAQgwAAgegigAgtg+QgPAXAAAmIAAADQAAAmAPAXQAPAYAeAAQAeAAAQgYQAPgXAAgmIAAgDQAAgmgPgXQgQgYgeAAQgeAAgPAYg"
      );
    this.shape_7.setTransform(-76.075, 24.575);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABUB5QgYAAgKgNQgJgNAAgUIAAgOQAAgRgKgKQgJgLgRAAIgnAAIAABAIAaAFIAAAdIhkAAIAAgdIAagFIAAitIgagFIAAgdIAaAAIBSAAQApAAAXATQAYATAAAhQAAASgKAOQgKANgTAHQAWAHAJAOQAJAPAAAWIAAAMQAAAIADAFQAEAEAHABIAGABIAAAdgAgigNIAiAAQATAAAKgJQAKgJAAgQQAAgQgKgKQgKgKgTAAIgiAAg"
      );
    this.shape_8.setTransform(-99.725, 24.575);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhfB5IAAgdIAZgFIAAitIgZgFIAAgdIC/AAIAABCIglAAIgCgdIhOAAIAABDIBUAAIAAAkIhUAAIAABDIAZAFIAAAdg"
      );
    this.shape_9.setTransform(-122, 24.575);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhoB5IAAgdIAZgFIAAitIgZgFIAAgdIAZAAIBSAAQAtAAAcAcQAdAdAAAsIAAAnQAAAsgdAdQgcAcgtAAgAgeBUIAfAAQAaAAAPgSQAOgSAAgcIAAgnQAAgcgOgSQgPgSgaAAIgfAAg"
      );
    this.shape_10.setTransform(169.875, -22.275);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhfB5IAAgdIAagFIAAitIgagFIAAgdIAaAAICkAAIAABCIglAAIgCgdIhNAAIAAA9IBRAAIAAAlIhRAAIAABFIBOAAIABgdIAlAAIAABCg"
      );
    this.shape_11.setTransform(147.25, -22.275);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgxB5IAAgdIAagFIAAiqIgtAAIgCAbIglAAIAAhAIDXAAIAABAIglAAIgCgbIgtAAIAACqIAaAFIAAAdg"
      );
    this.shape_12.setTransform(125.325, -22.275);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#111A2C")
      .s()
      .p("AgxB5IAAgdIAagFIAAitIgagFIAAgdIBjAAIAAAdIgaAFIAACtIAaAFIAAAdg");
    this.shape_13.setTransform(108, -22.275);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhEBbQgegiAAg1IAAgHQAAg1AegiQAgghAvAAQAdAAAWAKQAXAKAOARIAAAwIgkAAIgFghQgHgHgLgEQgKgEgPAAQgfAAgRAXQgRAXAAAlIAAAHQAAAlARAXQARAXAeAAQAOAAAMgEQAMgEAGgHIAFghIAkAAIAAAwQgOARgXAKQgWAKgdAAQgvAAggghg"
      );
    this.shape_14.setTransform(90.85, -22.275);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhfB5IAAgdIAagFIAAitIgagFIAAgdIAaAAICkAAIAABCIglAAIgCgdIhMAAIAAA9IBRAAIAAAlIhRAAIAABFIBMAAIADgdIAlAAIAABCg"
      );
    this.shape_15.setTransform(68.9, -22.275);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABUB5QgYAAgKgNQgJgNAAgUIAAgOQAAgRgKgKQgJgLgRAAIgnAAIAABAIAaAFIAAAdIhkAAIAAgdIAagFIAAitIgagFIAAgdIAaAAIBSAAQApAAAXATQAYATAAAhQAAASgKAOQgKANgTAHQAWAHAJAOQAJAPAAAWIAAAMQAAAIADAFQAEAEAHABIAGABIAAAdgAgigNIAiAAQATAAAKgJQAKgJAAgQQAAgQgKgKQgKgKgTAAIgiAAg"
      );
    this.shape_16.setTransform(46.825, -22.275);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#48A9A6")
      .s()
      .p("AgxB5IAAgdIAagFIAAitIgagFIAAgdIBjAAIAAAdIgZAFIAACtIAZAFIAAAdg");
    this.shape_17.setTransform(20.75, -22.275);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhlB5IAAgdIAZgFIAAitIgZgFIAAgdIAZAAIBZAAQApAAAYAVQAYAWAAAiQAAAjgYAUQgYAVgpAAIgoAAIAAA2IAaAFIAAAdgAgbgDIAoAAQAUAAAKgLQALgLAAgRQAAgSgLgLQgKgMgUAAIgoAAg"
      );
    this.shape_18.setTransform(4.025, -22.275);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhfB5IAAgdIAZgFIAAitIgZgFIAAgdIC/AAIAABCIglAAIgCgdIhOAAIAABDIBTAAIAAAkIhTAAIAABDIAZAFIAAAdg"
      );
    this.shape_19.setTransform(-25.95, -22.275);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhOBaQgfgjAAg1IAAgDQAAg1AegjQAegiAxAAQAxAAAeAiQAfAjAAA1IAAADQAAA1gfAjQgeAigxAAQgwAAgegigAgtg+QgPAXAAAmIAAADQAAAmAPAXQAPAYAeAAQAeAAAQgYQAPgXAAgmIAAgDQAAgmgPgXQgQgYgeAAQgeAAgPAYg"
      );
    this.shape_20.setTransform(-48.475, -22.275);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AgyBzQgXgJgQgQIAAgzIAmAAIAFAjQAHAGANAEQAMAEAPAAQAUAAAKgJQALgIAAgNQAAgOgKgJQgKgIgYgIQgrgMgWgQQgWgRAAgeQAAgdAZgTQAZgTAlAAQAbAAAXAIQAXAJAQAOIAAAxIglAAIgGghQgGgEgMgDQgNgDgNAAQgTAAgLAJQgLAIAAANQAAAMAMAIQALAIAbAJQAoALAVARQAUATAAAdQAAAfgYASQgZASgoAAQgcAAgXgJg"
      );
    this.shape_21.setTransform(-78.875, -22.275);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AgxB5IAAgdIAagFIAAiqIgtAAIgCAbIglAAIAAhAIDXAAIAABAIglAAIgCgbIgtAAIAACqIAaAFIAAAdg"
      );
    this.shape_22.setTransform(-100.925, -22.275);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#48A9A6")
      .s()
      .p("AgxB5IAAgdIAagFIAAitIgagFIAAgdIBjAAIAAAdIgaAFIAACtIAaAFIAAAdg");
    this.shape_23.setTransform(-118.25, -22.275);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhFBcQgfghAAg1IAAgHQAAg2AegiQAfgiAvAAQAdAAAXAJQAYAJAPAPIAAAxIgjAAIgHghQgHgFgLgEQgLgDgOAAQgeAAgSAXQgSAYAAAmIAAAHQAAAlASAWQARAWAfAAQAPAAAJgCQAJgDAFgDIAAgpIgigDIAAgiIBTAAIAABdQgMALgWAKQgXAJgjAAQgwAAgeggg"
      );
    this.shape_24.setTransform(-135.725, -22.275);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#48A9A6")
      .s()
      .p("AgxB5IAAgdIAagFIAAitIgagFIAAgdIBjAAIAAAdIgZAFIAACtIAZAFIAAAdg");
    this.shape_25.setTransform(-152.5, -22.275);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhoB5IAAgdIAZgFIAAitIgZgFIAAgdIAZAAIBSAAQAtAAAcAcQAdAdAAAsIAAAnQAAAsgdAdQgcAcgtAAgAgeBUIAfAAQAaAAAPgSQAOgSAAgcIAAgnQAAgcgOgSQgPgSgaAAIgfAAg"
      );
    this.shape_26.setTransform(-170.325, -22.275);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-183.9, -47.8, 367.8, 95.69999999999999);

  (lib.Symbol3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AinEsQhBgzABheQgBg4AggqQAfgqA2gWQgwgWgbgoQgagnAAgzQAAhbA8gyQA7gyBhAAQBhAAA8AyQA8AyAABbQAAAzgbAnQgcAogvAWQA3AWAfAqQAgArgBA3QAABehAAzQhAAzhoAAQhmAAhBgzgAhEBIQgaAbAAAuQAAAvAaAbQAaAbAqAAQArAAAbgbQAagbAAgvQAAgugbgbQgbgcgqAAQgqAAgaAcgAg5jcQgWAZAAAqQAAAqAWAaQAVAZAkAAQAmAAAVgZQAVgaAAgqQAAgpgVgZQgXgagkAAQglAAgUAZg"
      );
    this.shape.setTransform(48.5, 3.175);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AgkFVIAAhSIBIgOIAAhDIkWAAIgGhDIEanDICKAAIAAGrIBNAAIAABbIhNAAIAABDIBJAOIAABSgAAWiLIiODiICcAAIAAj1IgDgBg"
      );
    this.shape_1.setTransform(-5.375, 3.175);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#F6AE2D")
      .s()
      .p("Ai2FVIAAhSIB0gOIAAnNIh1AAIAAhOID8guIAAJJIBzAOIAABSg");
    this.shape_2.setTransform(-53.075, 3.175);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-76.4, -65.3, 152.9, 130.6);

  (lib.Symbol2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AgtBpQgWgIgOgPIAAguIAjAAIAEAfQAHAGALADQAMAEANAAQASAAAKgHQAJgIAAgMQAAgNgJgIQgJgHgWgHQgngMgUgOQgUgQAAgbQAAgbAXgRQAWgRAjAAQAYAAAVAIQAVAHAOANIAAAtIghAAIgGgeQgGgEgLgCQgLgDgMAAQgRAAgKAIQgKAHAAAMQAAALAKAIQALAHAYAIQAlAKATAQQASAQAAAbQAAAdgWAQQgWAQglAAQgZAAgVgIg"
      );
    this.shape.setTransform(146.375, 1.025);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AgtBuIAAgaIAYgFIAAiaIgpAAIgBAZIgiAAIAAg7IDDAAIAAA7IgiAAIgBgZIgpAAIAACaIAYAFIAAAag"
      );
    this.shape_1.setTransform(126.275, 1.025);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AAtBuIhYiTIgBAAIAAB0IAYAFIAAAaIhbAAIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIAsAAIBYCTIABAAIAAh0IgYgEIAAgbIBEAAIAYAAIAAAbIgYAEIAAC8g"
      );
    this.shape_2.setTransform(104, 1.025);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhWBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAICWAAIAAA8IgiAAIgCgaIhGAAIAAA3IBKAAIAAAhIhKAAIAAA/IBHAAIABgaIAiAAIAAA8g"
      );
    this.shape_3.setTransform(81.675, 1.025);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AgWBuIhBi+IgSgCIAAgbIBQAAIAAAbIgQADIAnCDIACAMIABAAIACgMIAoiDIgRgDIAAgbIBQAAIAAAbIgSACIhBC+g"
      );
    this.shape_4.setTransform(61.05, 1.025);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhWBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAICWAAIAAA8IgiAAIgCgaIhGAAIAAA3IBKAAIAAAhIhKAAIAAA/IBHAAIABgaIAiAAIAAA8g"
      );
    this.shape_5.setTransform(39.725, 1.025);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhfBuIAAgaIAYgFIAAidIgYgEIAAgbIAYAAIBKAAQApAAAaAaQAaAZAAApIAAAjQAAApgaAaQgaAZgpAAgAgbBMIAcAAQAXAAAOgQQAOgQAAgaIAAgjQAAgagOgQQgOgQgXAAIgcAAg"
      );
    this.shape_6.setTransform(11.65, 1.025);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AAtBuIhYiTIgBAAIAAB0IAYAFIAAAaIhbAAIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIAsAAIBYCTIABAAIAAh0IgXgEIAAgbIBDAAIAYAAIAAAbIgYAEIAAC8g"
      );
    this.shape_7.setTransform(-10.65, 1.025);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AAeBuIAAgaIAQgDIgKgeIhHAAIgJAeIAPADIAAAaIhLAAIAAgaIAQgDIBDi+IAsAAIBDC+IAPADIAAAagAgYASIAxAAIgYhMIgBAAg"
      );
    this.shape_8.setTransform(-33.825, 1.025);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AgtBpQgWgIgOgPIAAguIAjAAIAEAfQAHAGALADQAMAEANAAQASAAAKgHQAJgIAAgMQAAgNgJgIQgJgHgWgHQgngMgUgOQgUgQAAgbQAAgbAXgRQAWgRAjAAQAYAAAVAIQAVAHAOANIAAAtIghAAIgGgeQgGgEgLgCQgLgDgMAAQgRAAgKAIQgKAHAAAMQAAALAKAIQALAHAYAIQAlAKATAQQASAQAAAbQAAAdgWAQQgWAQglAAQgZAAgVgIg"
      );
    this.shape_9.setTransform(-61.675, 1.025);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhWBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAICWAAIAAA8IgiAAIgCgaIhGAAIAAA3IBKAAIAAAhIhKAAIAAA/IBHAAIABgaIAiAAIAAA8g"
      );
    this.shape_10.setTransform(-81.575, 1.025);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AgtBuIAAgaIAYgFIAAiaIgpAAIgBAZIgiAAIAAg7IDDAAIAAA7IgiAAIgBgZIgpAAIAACaIAYAFIAAAag"
      );
    this.shape_11.setTransform(-101.575, 1.025);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AAeBuIAAgaIAQgDIgKgeIhHAAIgJAeIAPADIAAAaIhLAAIAAgaIAQgDIBDi+IAsAAIBDC+IAPADIAAAagAgYASIAxAAIgYhMIgBAAg"
      );
    this.shape_12.setTransform(-123.075, 1.025);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhfBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIBLAAQAoAAAaAaQAbAZAAApIAAAjQAAApgbAaQgaAZgoAAgAgcBMIAdAAQAYAAANgQQANgQAAgaIAAgjQAAgagNgQQgNgQgYAAIgdAAg"
      );
    this.shape_13.setTransform(-145.1, 1.025);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-157.6, -22.4, 315.2, 44.9);

  (lib.Symbol1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AgtBpQgWgIgOgPIAAguIAjAAIAEAfQAHAGALADQAMAEANAAQASAAAKgHQAJgIAAgMQAAgNgJgIQgJgHgWgHQgngMgUgOQgUgQAAgbQAAgbAXgRQAWgRAjAAQAYAAAVAIQAVAHAOANIAAAtIghAAIgGgeQgGgEgLgCQgLgDgMAAQgRAAgKAIQgKAHAAAMQAAALAKAIQALAHAYAIQAlAKATAQQASAQAAAbQAAAdgWAQQgWAQglAAQgZAAgVgIg"
      );
    this.shape.setTransform(139.225, 1.025);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhWBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAICWAAIAAA8IgiAAIgCgaIhGAAIAAA3IBKAAIAAAhIhKAAIAAA/IBHAAIABgaIAiAAIAAA8g"
      );
    this.shape_1.setTransform(119.325, 1.025);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#48A9A6")
      .s()
      .p(
        "Ag+BTQgcgfAAgwIAAgHQAAgwAcgeQAdgfArAAQAaAAAUAJQAVAJANAQIAAArIghAAIgEgdQgHgHgJgDQgKgEgNAAQgdAAgPAVQgPAVAAAhIAAAHQAAAhAPAVQAPAWAbAAQANAAALgEQAMgEAFgHIAEgdIAhAAIAAAsQgNAPgVAJQgUAJgaAAQgrAAgdgeg"
      );
    this.shape_2.setTransform(99.5, 1.025);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAeBuIAAgaIAQgDIgKgeIhHAAIgJAeIAPADIAAAaIhLAAIAAgaIAQgDIBDi+IAsAAIBDC+IAPADIAAAagAgYASIAxAAIgYhMIgBAAg"
      );
    this.shape_3.setTransform(78.575, 1.025);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhXBuIAAgaIAYgFIAAidIgYgEIAAgbICvAAIAAA8IgiAAIgCgaIhHAAIAAA9IBMAAIAAAhIhMAAIAAA8IAXAFIAAAag"
      );
    this.shape_4.setTransform(57.925, 1.025);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhfBuIAAgaIAYgFIAAidIgYgEIAAgbIAYAAIBKAAQAoAAAaAaQAbAZAAApIAAAjQAAApgbAaQgaAZgoAAgAgcBMIAdAAQAXAAAOgQQANgQAAgaIAAgjQAAgagNgQQgOgQgXAAIgdAAg"
      );
    this.shape_5.setTransform(29.8, 1.025);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAtBuIhYiTIgBAAIAAB0IAYAFIAAAaIhcAAIAAgaIAYgFIAAidIgYgEIAAgbIAYAAIAsAAIBYCTIABAAIAAh0IgYgEIAAgbIBEAAIAXAAIAAAbIgXAEIAAC8g"
      );
    this.shape_6.setTransform(7.5, 1.025);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAeBuIAAgaIAQgDIgKgeIhHAAIgJAeIAPADIAAAaIhLAAIAAgaIAQgDIBDi+IAsAAIBDC+IAPADIAAAagAgYASIAxAAIgYhMIgBAAg"
      );
    this.shape_7.setTransform(-15.675, 1.025);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AgtBpQgWgIgOgPIAAguIAjAAIAEAfQAHAGALADQAMAEANAAQASAAAKgHQAJgIAAgMQAAgNgJgIQgJgHgWgHQgngMgUgOQgUgQAAgbQAAgbAXgRQAWgRAjAAQAYAAAVAIQAVAHAOANIAAAtIghAAIgGgeQgGgEgLgCQgLgDgMAAQgRAAgKAIQgKAHAAAMQAAALAKAIQALAHAYAIQAlAKATAQQASAQAAAbQAAAdgWAQQgWAQglAAQgZAAgVgIg"
      );
    this.shape_8.setTransform(-43.525, 1.025);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhWBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAICWAAIAAA8IgiAAIgCgaIhGAAIAAA3IBKAAIAAAhIhKAAIAAA/IBHAAIABgaIAiAAIAAA8g"
      );
    this.shape_9.setTransform(-63.425, 1.025);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAvBuIAAgaIAYgFIAAgiIADhhIAAAAIg8CiIgcAAIg6ihIgCAAIAFBgIAAAiIAYAFIAAAaIhcAAIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIA6AAIA4ChIAAAAIA5ihIBRAAIAAAbIgYAEIAACdIAYAFIAAAag"
      );
    this.shape_10.setTransform(-87.55, 1.025);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAeBuIAAgaIAQgDIgKgeIhHAAIgJAeIAPADIAAAaIhLAAIAAgaIAQgDIBDi+IAsAAIBDC+IAPADIAAAagAgYASIAxAAIgYhMIgBAAg"
      );
    this.shape_11.setTransform(-113.275, 1.025);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAtBuIhYiTIgBAAIAAB0IAYAFIAAAaIhcAAIAAgaIAYgFIAAidIgYgEIAAgbIAYAAIAsAAIBYCTIABAAIAAh0IgYgEIAAgbIBEAAIAXAAIAAAbIgXAEIAAC8g"
      );
    this.shape_12.setTransform(-136.25, 1.025);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-150.4, -22.4, 300.9, 44.9);

  (lib.startbtn = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // arrow
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(255,255,255,0.4)")
      .s()
      .p("AsFtPIAAhOICCBOITTLwIC2BtIi2BrI1UMlg");
    this.shape.setTransform(0.025, 0);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // shade
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("rgba(17,26,44,0.02)")
      .s()
      .p("Egu3AZzMAAAgzlMBdvAAAMAAAAzlg");
    this.shape_1.setTransform(0, 24.5648, 1, 1.1484);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    // text
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AA+CZIh6jNIgCAAIAACiIAiAGIAAAlIh/AAIAAglIAggGIAAjbIgggGIAAglIAgAAIA9AAIB7DNIABAAIAAiiIghgGIAAglIBfAAIAgAAIAAAlIggAGIAAEGg"
      );
    this.shape_2.setTransform(242.7, 1.425);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhjBxQgngsAAhDIAAgDQAAhDAngsQAlgsA+AAQA9AAAoAsQAmAsgBBDIAAADQABBDgmAsQgnAsg+AAQg9AAgmgsgAg5hPQgTAdAAAwIAAAEQAAAwATAeQATAdAmAAQAnAAATgdQATgeAAgwIAAgEQAAgvgTgeQgUgdgmAAQgmAAgTAdg"
      );
    this.shape_3.setTransform(206.75, 1.425);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#EB5E55")
      .s()
      .p("Ag+CZIAAglIAhgGIAAjbIghgGIAAglIB9AAIAAAlIggAGIAADbIAgAGIAAAlg");
    this.shape_4.setTransform(180.025, 1.425);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag/CZIAAglIAhgGIAAjXIg4AAIgDAjIguAAIAAhSIEPAAIAABSIgvAAIgCgjIg5AAIAADXIAhAGIAAAlg"
      );
    this.shape_5.setTransform(154.125, 1.425);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhWBzQgngrABhDIAAgJQgBhDAngrQAngqA+AAQAjAAAdANQAcAMATAWIAAA8IguAAIgGgpQgJgJgOgFQgOgFgTAAQgmAAgWAdQgVAdAAAuIAAAKQgBAvAWAdQAVAdAnAAQARAAAQgFQAOgFAJgJIAGgpIAuAAIAAA8QgSAWgdANQgdAMgjAAQg9AAgogqg"
      );
    this.shape_6.setTransform(121.45, 1.425);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhYB/QgigcAAg0IAAieIgggGIAAglIAgAAIA+AAIAhAAIAAAlIghAGIAACeQAAAfAQAPQAQAPAcAAQAcAAARgPQAQgPAAgfIAAieIgggGIAAglIB+AAIAAAlIggAGIAACeQAAA0giAcQgiAcg3AAQg2AAgigcg"
      );
    this.shape_7.setTransform(87.625, 1.65);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AiECZIAAglIAhgGIAAjbIghgGIAAglIAhAAIBnAAQA5AAAkAkQAkAkAAA4IAAAxQAAA5gkAjQgkAkg5AAgAgmBqIAnAAQAhAAATgXQATgWAAgkIAAgyQAAgjgTgWQgTgXghAAIgnAAg"
      );
    this.shape_8.setTransform(52.15, 1.425);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhjBxQgmgsAAhDIAAgDQAAhDAmgsQAlgsA+AAQA+AAAmAsQAmAsAABDIAAADQAABDgmAsQgmAsg+AAQg9AAgmgsgAg5hPQgTAdAAAwIAAAEQAAAwATAeQAUAdAlAAQAnAAATgdQATgeABgwIAAgEQgBgvgTgeQgUgdgmAAQgmAAgTAdg"
      );
    this.shape_9.setTransform(18.5, 1.425);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ABqCZQgeAAgMgQQgMgRAAgZIAAgSQAAgWgMgMQgMgNgVgBIgyAAIAABRIAhAGIAAAlIh+AAIAAglIAggGIAAjbIgggGIAAglIAgAAIBoAAQA0AAAdAYQAeAYAAAqQAAAXgMARQgNARgYAJQAbAIAMATQAMASAAAcIAAAPQAAALAEAFQAEAGAJABIAHABIAAAlgAgrgRIArAAQAYAAANgLQANgLAAgVQAAgUgNgMQgMgNgZAAIgrAAg"
      );
    this.shape_10.setTransform(-15.35, 1.425);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag/CZIAAglIAhgGIAAjXIg4AAIgDAjIguAAIAAhSIEPAAIAABSIgvAAIgCgjIg5AAIAADXIAhAGIAAAlg"
      );
    this.shape_11.setTransform(-48.725, 1.425);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AA/CZIh7jNIgBAAIAACiIAgAGIAAAlIh+AAIAAglIAhgGIAAjbIghgGIAAglIAhAAIA9AAIB6DNIACAAIAAiiIghgGIAAglIBdAAIAhAAIAAAlIghAGIAAEGg"
      );
    this.shape_12.setTransform(-83.6, 1.425);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#EB5E55")
      .s()
      .p("Ag+CZIAAglIAhgGIAAjbIghgGIAAglIB9AAIAAAlIggAGIAADbIAgAGIAAAlg");
    this.shape_13.setTransform(-111.875, 1.425);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag/CZIAAglIAggGIAAhEIhRiZIgagEIAAglIBzAAIAAAlIgYAEIAvBkIAAAAIAwhkIgZgEIAAglIB0AAIAAAlIgaAEIhUCcIAABBIAiAGIAAAlg"
      );
    this.shape_14.setTransform(-152.6, 1.425);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AAqCZIAAglIAVgEIgNgqIhiAAIgOAqIAVAEIAAAlIhoAAIAAglIAWgDIBdkJIA+AAIBcEJIAWADIAAAlgAgiAZIBFAAIgjhrIAAAAg"
      );
    this.shape_15.setTransform(-186.7, 1.425);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhyCZIAAglIAhgGIAAjbIghgGIAAglIAhAAIA9AAIAgAAIAAAlIggAGIAADXIBVAAIADgnIAvAAIAABWg"
      );
    this.shape_16.setTransform(-218.675, 1.425);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AiACZIAAglIAggGIAAjbIgggGIAAglIAgAAIBwAAQA1AAAeAbQAeAbAAAsQAAAsgeAZQgeAbg1AAIgzAAIAABEIAhAGIAAAlgAgjgEIAzAAQAaAAANgOQANgOAAgWQAAgWgNgOQgNgPgaAAIgzAAg"
      );
    this.shape_17.setTransform(-249.025, 1.425);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-300, -165, 600, 379.2);

  (lib.replay = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // replay
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("rgba(0,0,0,0.298)")
      .ss(15, 1, 1)
      .p("Ag5JxIvJIgMgADgkhMAgLARwIshH1AoNI4IHUA5Ij+GL");
    this.shape.setTransform(0.025, 0.025);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(15, 1, 1)
      .p("AD/hWIiwm2IHVAgABPoMIO/HzMggbASiMAAPgkRIM7HL");
    this.shape_1.setTransform(0.375, 0.425);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(15, 1, 1)
      .p("AuWgzIgFwpIgBg1IBaA1IerRMMggTASiIAHt/AuWgzIjSmlAp2moIkgF1");
    this.shape_2.setTransform(-9.475, 0.3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 59)
        .to({ state: [{ t: this.shape_2 }] }, 60)
        .wait(61)
    );

    // background
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("rgba(218,231,231,0.008)")
      .s()
      .p("Egu3AZyMAAAgzjMBdvAAAMAAAAzjg");
    this.shape_3.setTransform(-7.65, -0.65);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#CCCCCC").s().p("Egu3AZyMAAAgzjMBdvAAAMAAAAzjg");
    this.shape_4.setTransform(-7.65, -0.65);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }] })
        .to({ state: [{ t: this.shape_4 }] }, 146)
        .wait(34)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-307.6, -165.6, 600, 330);

  (lib.progressball = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#999999")
      .s()
      .p(
        "AhSBSQgigiABgwQgBgvAigjQAjgiAvABQAwgBAiAiQAiAjAAAvQAAAwgiAiQgiAigwAAQgvAAgjgig"
      );

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(
    -11.6,
    -11.6,
    23.299999999999997,
    23.299999999999997
  );

  (lib.playBtn = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#CCCCCC").s().p("AifixIE/C0Ik/Cvg");
    this.shape.setTransform(0, 0.025);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-16, -17.8, 32.1, 35.7);

  (lib.pauseBtn = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("rgba(0,0,0,0.2)")
      .ss(10, 1, 1)
      .p("ABKh+IAAD9AhJh+IAAD9");
    this.shape.setTransform(0, 0.025);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-12.3, -17.6, 24.700000000000003, 35.3);

  (lib.namesandfaces = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgtBpQgWgIgOgPIAAguIAjAAIAEAfQAHAGALADQAMAEANAAQASAAAKgHQAJgIAAgMQAAgNgJgIQgJgHgWgHQgngMgUgOQgUgQAAgbQAAgbAXgRQAWgRAjAAQAYAAAVAIQAVAHAOANIAAAtIghAAIgGgeQgGgEgLgCQgLgDgMAAQgRAAgKAIQgKAHAAAMQAAALAKAIQALAHAYAIQAlAKATAQQASAQAAAbQAAAdgWAQQgWAQglAAQgZAAgVgIg"
      );
    this.shape.setTransform(97.525, 22.475);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhWBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAICWAAIAAA8IgiAAIgCgaIhGAAIAAA3IBKAAIAAAhIhKAAIAAA/IBHAAIABgaIAiAAIAAA8g"
      );
    this.shape_1.setTransform(77.625, 22.475);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgtBuIAAgaIAYgFIAAiaIgpAAIgBAZIgiAAIAAg7IDDAAIAAA7IgiAAIgBgZIgpAAIAACaIAYAFIAAAag"
      );
    this.shape_2.setTransform(57.625, 22.475);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag/BcQgYgUAAglIAAhyIgYgFIAAgbIAYAAIAsAAIAXAAIAAAbIgXAFIAAByQAAAVAMALQALALAUAAQAUAAAMgLQAMgKAAgWIAAhyIgXgFIAAgbIBbAAIAAAbIgYAFIAAByQAAAlgYAUQgZAUgnAAQgnAAgYgUg"
      );
    this.shape_3.setTransform(35.575, 22.625);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAtBuIhYiTIgBAAIAAB0IAYAFIAAAaIhbAAIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIAsAAIBYCTIABAAIAAh0IgXgEIAAgbIBDAAIAYAAIAAAbIgYAEIAAC8g"
      );
    this.shape_4.setTransform(11.95, 22.475);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#111A2C")
      .s()
      .p("AgsBuIAAgaIAXgFIAAidIgXgEIAAgbIBaAAIAAAbIgYAEIAACdIAYAFIAAAag");
    this.shape_5.setTransform(-5.55, 22.475);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAvBuIAAgaIAXgFIAAgiIAEhhIgBAAIg6CiIgdAAIg7ihIAAAAIADBgIAAAiIAYAFIAAAaIhbAAIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIA6AAIA4ChIAAAAIA5ihIBRAAIAAAbIgXAEIAACdIAXAFIAAAag"
      );
    this.shape_6.setTransform(-25.5, 22.475);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0BfQgVgQAAgdIABgBIAqgCQAAAPAIAIQAJAIANAAQAPAAAHgLQAHgLAAgSQAAgTgHgLQgIgLgPAAQgMAAgHAEQgHAFgDAIIgngDIANh6IB+AAIAAAzIgcAAIgDgPIg7AAIgGAzQAGgFAJgDQAIgDAKAAQAgAAARATQASATAAAjQAAAggUAVQgTAVgjAAQgeAAgWgRg"
      );
    this.shape_7.setTransform(-55.9256, 22.625);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAtBuIhYiTIgBAAIAAB0IAYAFIAAAaIhcAAIAAgaIAYgFIAAidIgYgEIAAgbIAYAAIAsAAIBYCTIABAAIAAh0IgYgEIAAgbIBEAAIAXAAIAAAbIgXAEIAAC8g"
      );
    this.shape_8.setTransform(-83.75, 22.475);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#111A2C")
      .s()
      .p("AgtBuIAAgaIAYgFIAAidIgYgEIAAgbIBbAAIAAAbIgYAEIAACdIAYAFIAAAag");
    this.shape_9.setTransform(-101.25, 22.475);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhfBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIBLAAQApAAAaAaQAaAZAAApIAAAjQAAApgaAaQgaAZgpAAgAgbBMIAcAAQAXAAAOgQQAOgQAAgaIAAgjQAAgagOgQQgOgQgXAAIgcAAg"
      );
    this.shape_10.setTransform(237.2, -20.425);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhWBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAICWAAIAAA8IgiAAIgCgaIhGAAIAAA3IBKAAIAAAhIhKAAIAAA/IBHAAIABgaIAiAAIAAA8g"
      );
    this.shape_11.setTransform(216.525, -20.425);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhTBuIAAgXIBqiiIhFAAIgDAbIgiAAIADg9ICeAAIAAAWIhrCjIBMAAIADgaIAiAAIgEA8g"
      );
    this.shape_12.setTransform(197.9, -20.425);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#111A2C")
      .s()
      .p("AgsBuIAAgaIAXgFIAAidIgXgEIAAgbIBaAAIAAAbIgYAEIAACdIAYAFIAAAag");
    this.shape_13.setTransform(183, -20.425);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABMBuQgVAAgJgLQgJgMAAgTIAAgMQAAgQgIgJQgJgJgPgBIgkAAIAAA6IAYAFIAAAaIhbAAIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIBLAAQAlAAAWARQAVARAAAeQAAARgJAMQgJANgRAGQATAGAJANQAIAOAAAUIAAALQAAAHADAEQADAEAHABIAFABIAAAagAgfgMIAfAAQARAAAKgIQAJgIAAgPQAAgOgJgJQgJgJgSAAIgfAAg"
      );
    this.shape_14.setTransform(167.075, -20.425);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhIBSQgbggAAgwIAAgDQAAgwAbggQAcgfAsAAQAsAAAcAfQAcAgAAAwIAAADQAAAwgcAgQgcAfgsAAQgsAAgcgfgAgpg5QgNAWAAAiIAAADQgBAjAOAVQAOAVAbAAQAbAAAPgVQAOgVAAgjIAAgDQAAgigOgVQgOgWgcAAQgbAAgOAVg"
      );
    this.shape_15.setTransform(145.4, -20.425);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAvBuIAAgaIAYgFIAAgiIADhhIgBAAIg6CiIgdAAIg6ihIgBAAIADBgIAAAiIAYAFIAAAaIhbAAIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIA6AAIA4ChIAAAAIA5ihIBRAAIAAAbIgXAEIAACdIAXAFIAAAag"
      );
    this.shape_16.setTransform(119.85, -20.425);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhWBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAICWAAIAAA8IgiAAIgCgaIhGAAIAAA3IBKAAIAAAhIhKAAIAAA/IBHAAIABgaIAiAAIAAA8g"
      );
    this.shape_17.setTransform(94.975, -20.425);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAvBuIAAgaIAYgFIAAgiIADhhIAAAAIg8CiIgcAAIg6ihIgCAAIAFBgIAAAiIAYAFIAAAaIhcAAIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIA6AAIA4ChIAAAAIA5ihIBRAAIAAAbIgYAEIAACdIAYAFIAAAag"
      );
    this.shape_18.setTransform(70.85, -20.425);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AgtBpQgWgIgOgPIAAguIAjAAIAEAfQAHAGALADQAMAEANAAQASAAAKgHQAJgIAAgMQAAgNgJgIQgJgHgWgHQgngMgUgOQgUgQAAgbQAAgbAXgRQAWgRAjAAQAYAAAVAIQAVAHAOANIAAAtIghAAIgGgeQgGgEgLgCQgLgDgMAAQgRAAgKAIQgKAHAAAMQAAALAKAIQALAHAYAIQAlAKATAQQASAQAAAbQAAAdgWAQQgWAQglAAQgZAAgVgIg"
      );
    this.shape_19.setTransform(39.475, -20.425);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhWBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAICWAAIAAA8IgiAAIgCgaIhGAAIAAA3IBKAAIAAAhIhKAAIAAA/IBHAAIABgaIAiAAIAAA8g"
      );
    this.shape_20.setTransform(19.575, -20.425);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#48A9A6")
      .s()
      .p(
        "Ag9BTQgcgfAAgwIAAgHQAAgwAcgeQAcgfAsAAQAZAAAVAJQAUAJAOAQIAAArIgiAAIgEgdQgGgHgKgDQgKgEgOAAQgcAAgPAVQgPAVAAAhIAAAHQAAAhAPAVQAPAWAbAAQANAAAMgEQALgEAFgHIAEgdIAiAAIAAAsQgOAPgUAJQgVAJgZAAQgsAAgcgeg"
      );
    this.shape_21.setTransform(-0.25, -20.425);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAeBuIAAgaIAQgDIgKgeIhHAAIgJAeIAPADIAAAaIhLAAIAAgaIAQgDIBDi+IAsAAIBDC+IAPADIAAAagAgYASIAxAAIgYhMIgBAAg"
      );
    this.shape_22.setTransform(-21.175, -20.425);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhXBuIAAgaIAYgFIAAidIgYgEIAAgbICvAAIAAA8IgiAAIgCgaIhHAAIAAA9IBMAAIAAAhIhMAAIAAA8IAXAFIAAAag"
      );
    this.shape_23.setTransform(-41.825, -20.425);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhfBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIBLAAQAoAAAaAaQAbAZAAApIAAAjQAAApgbAaQgaAZgoAAgAgcBMIAdAAQAYAAANgQQANgQAAgaIAAgjQAAgagNgQQgNgQgYAAIgdAAg"
      );
    this.shape_24.setTransform(-69.95, -20.425);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAtBuIhYiTIgBAAIAAB0IAYAFIAAAaIhcAAIAAgaIAYgFIAAidIgYgEIAAgbIAYAAIAsAAIBYCTIABAAIAAh0IgXgEIAAgbIBDAAIAXAAIAAAbIgXAEIAAC8g"
      );
    this.shape_25.setTransform(-92.25, -20.425);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAeBuIAAgaIAQgDIgKgeIhHAAIgJAeIAPADIAAAaIhLAAIAAgaIAQgDIBDi+IAsAAIBDC+IAPADIAAAagAgYASIAxAAIgYhMIgBAAg"
      );
    this.shape_26.setTransform(-115.425, -20.425);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AgtBpQgWgIgOgPIAAguIAjAAIAEAfQAHAGALADQAMAEANAAQASAAAKgHQAJgIAAgMQAAgNgJgIQgJgHgWgHQgngMgUgOQgUgQAAgbQAAgbAXgRQAWgRAjAAQAYAAAVAIQAVAHAOANIAAAtIghAAIgGgeQgGgEgLgCQgLgDgMAAQgRAAgKAIQgKAHAAAMQAAALAKAIQALAHAYAIQAlAKATAQQASAQAAAbQAAAdgWAQQgWAQglAAQgZAAgVgIg"
      );
    this.shape_27.setTransform(-143.275, -20.425);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhWBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAICWAAIAAA8IgiAAIgCgaIhGAAIAAA3IBKAAIAAAhIhKAAIAAA/IBHAAIABgaIAiAAIAAA8g"
      );
    this.shape_28.setTransform(-163.175, -20.425);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAvBuIAAgaIAXgFIAAgiIAFhhIgBAAIg8CiIgcAAIg7ihIgBAAIAFBgIAAAiIAXAFIAAAaIhbAAIAAgaIAYgFIAAidIgYgEIAAgbIAYAAIA5AAIA4ChIAAAAIA5ihIBRAAIAAAbIgYAEIAACdIAYAFIAAAag"
      );
    this.shape_29.setTransform(-187.3, -20.425);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAeBuIAAgaIAQgDIgKgeIhHAAIgJAeIAPADIAAAaIhLAAIAAgaIAQgDIBDi+IAsAAIBDC+IAPADIAAAagAgYASIAxAAIgYhMIgBAAg"
      );
    this.shape_30.setTransform(-213.025, -20.425);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AAtBuIhYiTIgBAAIAAB0IAYAFIAAAaIhbAAIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIAsAAIBYCTIABAAIAAh0IgXgEIAAgbIBDAAIAYAAIAAAbIgYAEIAAC8g"
      );
    this.shape_31.setTransform(-236, -20.425);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-250.2, -43.9, 500.4, 87.8);

  (lib.mostof = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ai2DnIAAg3IAxgKIAAlLIgxgJIAAg4IAxAAIE7AAIAAB/IhHAAIgEg3IiTAAIAAB0ICbAAIAABGIibAAIAACEICUAAIAEg4IBHAAIAAB/g"
      );
    this.shape.setTransform(97.225, 2.15);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#111A2C")
      .s()
      .p(
        "ACgDnQgtAAgSgZQgTgYAAgnIAAgaQAAgigRgSQgTgUghgBIhKAAIAAB6IAxAKIAAA3Ii/AAIAAg3IAxgKIAAlLIgxgJIAAg4IAxAAICeAAQBOAAAtAkQAtAkAABAQAAAigTAaQgTAagkAOQApANASAcQARAcAAApIAAAYQABAPAGAJQAGAIAOACIALABIAAA4gAhBgbIBAAAQAlAAAUgQQATgQAAggQAAgegTgTQgTgSglAAIhBAAg"
      );
    this.shape_1.setTransform(55.05, 2.15);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA/DnIAAg3IAhgHIgVg/IiVAAIgUA/IAgAHIAAA3IidAAIAAg3IAggGICNmQIBeAAICLGQIAiAGIAAA3gAg0AmIBpAAIg0iiIgBAAg"
      );
    this.shape_2.setTransform(9.15, 2.15);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhhDcQgsgRgegfIAAhgIBIAAIAKBBQAOALAYAIQAYAHAcAAQAnABAUgQQATgPAAgaQAAgbgTgQQgTgQgugPQhSgXgqghQgqggAAg5QAAg4AvgkQAwgkBIgBQA0ABAsAQQAsAQAeAbIAABeIhGAAIgMg/QgMgIgXgFQgXgGgaAAQgmAAgUAQQgVAQAAAZQAAAYAWAPQAVAPA1ARQBMAVAoAiQAnAjAAA5QAAA7gvAjQgvAihNAAQg1AAgtgSg"
      );
    this.shape_3.setTransform(-49.225, 2.15);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#111A2C")
      .s()
      .p(
        "AiFDAQg0gqAAhOIAAjwIgwgJIAAg4IAwAAIBdAAIAyAAIAAA4IgyAJIAADwQAAAuAZAXQAYAWArAAQArAAAYgWQAagXAAguIAAjwIgygJIAAg4IDAAAIAAA4IgyAJIAADwQAABOgzAqQg0AqhSAAQhTAAgygqg"
      );
    this.shape_4.setTransform(-93.95, 2.475);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-120.7, -44.8, 241.5, 89.69999999999999);

  (lib.bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#DAE7E7").s().p("Egs7ACWIAAkrMBZ3AAAIAAErg");
    this.shape.setTransform(-0.75, 11.25, 1.043, 1);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-300.7, -3.7, 600, 30);

  (lib._105 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AiiEnQhDg0AChaIABgCICDgGQAAAtAaAaQAaAZAqAAQAuAAAXgiQAXgiAAg3QAAg7gYgjQgYgjgwAAQgnAAgUAOQgVAOgJAZIh5gIIAnl7IGIAAIAACbIhUAAIgMguIi3AAIgTCeQATgOAagJQAbgJAggBQBigBA2A9QA2A8AABsQAABjg7BBQg8BBhuAAQheAAhDgzg"
      );
    this.shape.setTransform(48.9205, 3.675);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AinEZQg/hGAAiIIAAiVQAAiHA/hGQA9hHBqAAQBqAAA/BHQA+BGAACHIAACVQAACIg+BGQg+BGhqAAQhqAAg+hGgAhFjPQgYAlAABSIAACxQAABSAYAmQAYAlAuAAQAuAAAYglQAYgmAAhSIAAixQAAhRgZgmQgYgmguAAQguAAgXAmg"
      );
    this.shape_1.setTransform(-4.225, 3.175);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#48A9A6")
      .s()
      .p("Ai2FVIAAhSIB0gOIAAnNIh1AAIAAhOID8guIAAJJIBzAOIAABSg");
    this.shape_2.setTransform(-52.925, 3.175);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-76.3, -65.3, 152.6, 130.6);

  (lib.stage3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // thousand
    this.instance = new lib.Symbol6("synched", 0);
    this.instance.setTransform(507.75, 220.5);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(174)
        .to({ _off: false }, 0)
        .to({ x: 264, startPosition: 1 }, 1)
        .to({ x: 20.25 }, 1)
        .to({ x: 42.75, startPosition: 2 }, 1)
        .to({ x: 57.75, startPosition: 0 }, 1)
        .wait(66)
        .to({ startPosition: 27 }, 0)
        .to({ _off: true }, 1)
        .wait(73)
        .to({ _off: false, startPosition: 23 }, 0)
        .wait(59)
        .to({ startPosition: 4 }, 0)
        .to({ _off: true }, 1)
        .wait(549)
    );

    // _70
    this.instance_1 = new lib.Symbol5("synched", 0);
    this.instance_1.setTransform(0, 210, 5.0536, 5.0536);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(149)
        .to({ _off: false }, 0)
        .to({ scaleX: 1, scaleY: 1 }, 2)
        .wait(23)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .to({ x: -230 }, 1)
        .to({ x: -210 }, 1)
        .wait(1)
        .to({ x: -202.5, y: 213 }, 0)
        .wait(66)
        .to({ startPosition: 0 }, 0)
        .to({ _off: true }, 1)
        .wait(73)
        .to({ _off: false }, 0)
        .wait(59)
        .to({ startPosition: 0 }, 0)
        .to({ _off: true }, 1)
        .wait(549)
    );

    // pi
    this.instance_2 = new lib.Symbol4("synched", 0);
    this.instance_2.setTransform(-240, 70, 1, 1, 62.9591, 0, 0, -240, -40.3);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(134)
        .to({ _off: false }, 0)
        .wait(1)
        .to(
          { regX: -230, regY: -20.4, rotation: 18.7114, x: -230, y: 89.95 },
          0
        )
        .wait(1)
        .to({ regX: 0, regY: 0, rotation: 0, x: 0, y: 95.35 }, 0)
        .wait(1)
        .to({ y: 102.85 }, 0)
        .wait(1)
        .to({ y: 110.35 }, 0)
        .wait(6)
        .to({ startPosition: 0 }, 0)
        .wait(100)
        .to({ startPosition: 0 }, 0)
        .to({ _off: true }, 1)
        .wait(73)
        .to({ _off: false }, 0)
        .wait(59)
        .to({ startPosition: 0 }, 0)
        .to({ _off: true }, 1)
        .wait(549)
    );

    // _148
    this.instance_3 = new lib.Symbol3("synched", 0);
    this.instance_3.setTransform(0, 210, 5.0536, 5.0536);
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(80)
        .to({ _off: false }, 0)
        .to({ scaleX: 0.9156, scaleY: 0.9156 }, 3)
        .wait(1)
        .to({ regY: 0.1, scaleX: 0.8502, scaleY: 0.8502, y: 210.05 }, 0)
        .wait(1)
        .to({ regY: 0, scaleX: 1, scaleY: 1, y: 210 }, 0)
        .wait(49)
        .to({ startPosition: 0 }, 0)
        .wait(15)
        .to({ startPosition: 0 }, 0)
        .to({ scaleX: 0.1531, scaleY: 0.1531 }, 2)
        .to({ _off: true }, 1)
        .wait(775)
    );

    // dates_events
    this.instance_4 = new lib.Symbol2("synched", 0);
    this.instance_4.setTransform(-336.7, 94.6, 1, 1, 0, -90, 90, -212.3, 0.8);
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(62)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ rotation: 74.9993, skewX: 0, skewY: 0, x: -337, y: 89.25 }, 0)
        .wait(1)
        .to({ rotation: 53.8899, x: -330.25, y: 85.9 }, 0)
        .wait(1)
        .to({ rotation: 30.9441, x: -324.5, y: 70.6 }, 0)
        .wait(1)
        .to({ regX: 0, regY: 0, rotation: 0, x: -107, y: 81.75 }, 0)
        .wait(1)
        .to({ y: 74.25 }, 0)
        .wait(1)
        .to({ y: 88.5 }, 0)
        .wait(11)
        .to({ startPosition: 0 }, 0)
        .wait(55)
        .to({ regX: -153, regY: 11.5, x: -260, y: 100 }, 0)
        .wait(1)
        .to({ regX: -153.1, rotation: -16.6445, x: -258.65, y: 95.6 }, 0)
        .wait(1)
        .to(
          { regX: -173, regY: -18.5, rotation: -40.4774, x: -319.35, y: 50.8 },
          0
        )
        .to({ _off: true }, 1)
        .wait(790)
    );

    // memorized_in
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgtBpQgWgIgOgPIAAguIAjAAIAEAfQAHAGALADQAMAEANAAQASAAAKgHQAJgIAAgMQAAgNgJgIQgJgHgWgHQgngMgUgOQgUgQAAgbQAAgbAXgRQAWgRAjAAQAYAAAVAIQAVAHAOANIAAAtIghAAIgGgeQgGgEgLgCQgLgDgMAAQgRAAgKAIQgKAHAAAMQAAALAKAIQALAHAYAIQAlAKATAQQASAQAAAbQAAAdgWAQQgWAQglAAQgZAAgVgIg"
      );
    this.shape.setTransform(96.925, 132.625);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhWBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAICWAAIAAA8IgiAAIgCgaIhGAAIAAA3IBKAAIAAAhIhKAAIAAA/IBHAAIABgaIAiAAIAAA8g"
      );
    this.shape_1.setTransform(77.025, 132.625);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgtBuIAAgaIAYgFIAAiaIgpAAIgBAZIgiAAIAAg7IDDAAIAAA7IgiAAIgBgZIgpAAIAACaIAYAFIAAAag"
      );
    this.shape_2.setTransform(57.025, 132.625);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag/BcQgYgUAAglIAAhyIgYgFIAAgbIAYAAIAsAAIAXAAIAAAbIgXAFIAAByQAAAVAMALQALALAUAAQAUAAAMgLQAMgKAAgWIAAhyIgXgFIAAgbIBbAAIAAAbIgYAFIAAByQAAAlgYAUQgZAUgnAAQgnAAgYgUg"
      );
    this.shape_3.setTransform(34.975, 132.775);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAtBuIhYiTIgBAAIAAB0IAYAFIAAAaIhcAAIAAgaIAYgFIAAidIgYgEIAAgbIAYAAIAsAAIBYCTIABAAIAAh0IgYgEIAAgbIBEAAIAXAAIAAAbIgXAEIAAC8g"
      );
    this.shape_4.setTransform(11.35, 132.625);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#111A2C")
      .s()
      .p("AgtBuIAAgaIAYgFIAAidIgYgEIAAgbIBaAAIAAAbIgXAEIAACdIAXAFIAAAag");
    this.shape_5.setTransform(-6.15, 132.625);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAvBuIAAgaIAXgFIAAgiIAFhhIgBAAIg8CiIgcAAIg7ihIgBAAIAFBgIAAAiIAXAFIAAAaIhbAAIAAgaIAYgFIAAidIgYgEIAAgbIAYAAIA5AAIA4ChIAAAAIA5ihIBRAAIAAAbIgYAEIAACdIAYAFIAAAag"
      );
    this.shape_6.setTransform(-26.1, 132.625);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0BfQgVgQAAgdIABgBIAqgCQAAAPAIAIQAJAIANAAQAPAAAHgLQAHgLAAgSQAAgTgHgLQgIgLgPAAQgMAAgHAEQgHAFgDAIIgngDIANh6IB+AAIAAAzIgcAAIgDgPIg7AAIgGAzQAGgFAJgDQAIgDAKAAQAgAAARATQASATAAAjQAAAggUAVQgTAVgjAAQgeAAgWgRg"
      );
    this.shape_7.setTransform(-56.5256, 132.775);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAtBuIhYiTIgBAAIAAB0IAYAFIAAAaIhbAAIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIAsAAIBYCTIABAAIAAh0IgXgEIAAgbIBDAAIAYAAIAAAbIgYAEIAAC8g"
      );
    this.shape_8.setTransform(-84.35, 132.625);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#111A2C")
      .s()
      .p("AgsBuIAAgaIAXgFIAAidIgXgEIAAgbIBaAAIAAAbIgYAEIAACdIAYAFIAAAag");
    this.shape_9.setTransform(-101.85, 132.625);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhfBuIAAgaIAYgFIAAidIgYgEIAAgbIAYAAIBKAAQApAAAZAaQAbAZAAApIAAAjQAAApgbAaQgZAZgpAAgAgbBMIAcAAQAXAAAOgQQANgQAAgaIAAgjQAAgagNgQQgOgQgXAAIgcAAg"
      );
    this.shape_10.setTransform(236.45, 89.725);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhWBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAICWAAIAAA8IgiAAIgCgaIhGAAIAAA3IBKAAIAAAhIhKAAIAAA/IBHAAIABgaIAiAAIAAA8g"
      );
    this.shape_11.setTransform(215.775, 89.725);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhTBuIAAgXIBriiIhFAAIgEAbIghAAIACg9ICeAAIAAAWIhrCjIBMAAIAEgaIAhAAIgEA8g"
      );
    this.shape_12.setTransform(197.15, 89.725);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#111A2C")
      .s()
      .p("AgtBuIAAgaIAYgFIAAidIgYgEIAAgbIBbAAIAAAbIgYAEIAACdIAYAFIAAAag");
    this.shape_13.setTransform(182.25, 89.725);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABMBuQgVAAgJgLQgJgMAAgTIAAgMQAAgQgIgJQgJgJgPgBIgkAAIAAA6IAYAFIAAAaIhbAAIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIBLAAQAlAAAWARQAVARAAAeQAAARgJAMQgJANgRAGQATAGAJANQAIAOAAAUIAAALQAAAHADAEQADAEAHABIAFABIAAAagAgfgMIAfAAQARAAAKgIQAJgIAAgPQAAgOgJgJQgJgJgSAAIgfAAg"
      );
    this.shape_14.setTransform(166.325, 89.725);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhHBSQgcggAAgwIAAgDQAAgwAcggQAbgfAsAAQAsAAAcAfQAcAgAAAwIAAADQAAAwgcAgQgcAfgsAAQgsAAgbgfgAgpg5QgNAWAAAiIAAADQAAAjANAVQAOAVAbAAQAcAAAOgVQAOgVAAgjIAAgDQAAgigPgVQgOgWgbAAQgbAAgOAVg"
      );
    this.shape_15.setTransform(144.65, 89.725);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAvBuIAAgaIAYgFIAAgiIADhhIgBAAIg7CiIgcAAIg6ihIgBAAIADBgIAAAiIAZAFIAAAaIhcAAIAAgaIAXgFIAAidIgXgEIAAgbIAXAAIA6AAIA4ChIAAAAIA5ihIBRAAIAAAbIgXAEIAACdIAXAFIAAAag"
      );
    this.shape_16.setTransform(119.1, 89.725);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhWBuIAAgaIAXgFIAAidIgXgEIAAgbIAXAAICWAAIAAA8IgiAAIgCgaIhGAAIAAA3IBKAAIAAAhIhKAAIAAA/IBHAAIABgaIAiAAIAAA8g"
      );
    this.shape_17.setTransform(94.225, 89.725);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAvBuIAAgaIAXgFIAAgiIAFhhIgBAAIg8CiIgcAAIg7ihIgBAAIAFBgIAAAiIAXAFIAAAaIhbAAIAAgaIAYgFIAAidIgYgEIAAgbIAYAAIA5AAIA4ChIAAAAIA5ihIBRAAIAAAbIgYAEIAACdIAYAFIAAAag"
      );
    this.shape_18.setTransform(70.1, 89.725);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgNByQgXgCgRgKIgOgsIAhgKIANAcQAIAEAMAAQALAAAOgEQARgGAHgJQAHgKgEgMQgDgMgLgFQgLgFgYAAQgoABgXgJQgYgJgIgZQgIgaARgXQARgWAhgLQAYgHAVABQAWABARAIIANArIgfAKIgOgbQgHgCgLABQgLAAgMAEQgRAFgHALQgIAKAEALQADALAMAEQAMAEAaAAQAmgBAXAKQAXAKAIAZQAIAcgRAWQgQAWgjALQgVAGgTAAIgHAAg"
      );
    this.shape_19.setTransform(90.8769, 26.9566);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag6BqIAVgMIguiWIgYADIgIgaIAXgHICPgsIASA6IghAKIgJgZIhDAVIARA1IBGgVIAJAgIhGAVIASA8IBEgVIgGgaIAggKIASA6IimAzg"
      );
    this.shape_20.setTransform(71.775, 32.7);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAFBlIAUgLIgsiTIgmALIAFAYIggAKIgSg4IC7g6IASA5IghAKIgJgXIgnAMIAuCTIAYgCIAHAZIhXAbg"
      );
    this.shape_21.setTransform(50.3, 37.8);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgNB4QgdgMgLgkIghhtIgYADIgIgaIAWgHIArgNIAWgHIAIAaIgVALIAiBtQAGAVANAHQAPAHATgGQAUgGAIgOQAJgNgHgVIghhtIgYACIgIgaIBXgaIAIAZIgVAMIAhBtQALAjgSAbQgRAagmALQgTAGgQAAQgRAAgOgGg"
      );
    this.shape_22.setTransform(29.5719, 43.8125);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhHBxIAVgLIguiXIgYADIgIgaIAXgHIAqgMICABzIABgBIgihvIgZADIgHgaIBAgUIAXgGIAIAZIgVALIA3C0IgqANIiAhzIgBABIAjBvIAXgDIAHAaIhWAag"
      );
    this.shape_23.setTransform(7.825, 51.875);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#111A2C")
      .s()
      .p("AgSBdIAUgLIgtiWIgYACIgIgZIBWgbIAIAaIgUALIAtCXIAZgDIAHAZIhWAbg");
    this.shape_24.setTransform(-7.7, 56.975);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhqB4IAUgLIguiWIgYACIgIgZIAXgHIA3gRIBkCKIABAAIAHirIBOgYIAIAaIgWALIAuCXIAZgDIAHAZIhXAbIgIgaIAWgLIgKghIgZhdIgBAAIgJCsIgcAJIhniKIgBABIAhBaIAKAiIAYgDIAHAZIhXAbg"
      );
    this.shape_25.setTransform(-26.8, 62.825);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgVBzQgZgKgIgcIAAgBIAogOQAEAOAKAFQAKAFANgDQAPgFAEgNQAEgMgFgRQgGgSgLgJQgLgJgOAFQgMAEgFAGQgFAGgBAJIglAJIgYh5IB4glIAPAxIgaAIIgIgNIg4ARIAJAyQAEgGAIgFQAHgGAKgDQAdgJAXANQAWAOALAhQAJAegMAaQgMAagjAKQgOAFgNAAQgOAAgNgFg"
      );
    this.shape_26.setTransform(-55.9571, 71.0564);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhHBxIAVgLIguiXIgYADIgIgaIAXgHIAqgMICABzIABgBIgihvIgZADIgHgaIBAgUIAXgGIAIAZIgVALIA3C0IgqANIiAhzIgBABIAjBvIAXgDIAHAaIhWAag"
      );
    this.shape_27.setTransform(-83.625, 79.825);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#111A2C")
      .s()
      .p("AgSBdIAUgLIgtiWIgYACIgIgZIBWgbIAJAaIgVALIAtCXIAYgDIAIAZIhXAbg");
    this.shape_28.setTransform(-99.25, 84.925);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag3BhIAVgLIguiXIgYADIgIgaIAXgHIBIgWQAmgLAgARQAhARAMAmIAKAjQAMAmgRAgQgSAhgmALIheAdgAgJhTIgcAJIAsCQIAcgJQAWgGAJgUQAIgTgIgYIgKgjQgIgYgRgMQgMgHgNAAQgHAAgIADg"
      );
    this.shape_29.setTransform(210.6441, -53.682);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag6BqIAVgMIguiWIgYADIgIgaIAXgHICPgsIASA6IghAKIgJgZIhDAVIARA1IBGgVIAJAgIhGAVIASA8IBEgVIgGgaIAggKIASA6IimAzg"
      );
    this.shape_30.setTransform(191.975, -48.75);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag2BrIA2i6IhCAUIAFAbIggAJIgPg7ICWguIAHAVIg2C8IBIgXIgEgaIAggKIAOA7IicAwg"
      );
    this.shape_31.setTransform(174.175, -43.25);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#111A2C")
      .s()
      .p("AgSBdIAUgLIgtiWIgYACIgIgZIBWgbIAJAaIgVALIAtCXIAYgDIAIAZIhXAbg");
    this.shape_32.setTransform(159.95, -38.975);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhFBhIAVgLIguiWIgYACIgIgZIAWgHIBJgWQAigLAaAKQAZAKAJAdQAFAQgFAPQgFAOgOAMQAUAAANAKQAMALAFASIAEALQACAHADADQAFACAGgBIAFgBIAIAaIgWAGQgUAHgMgJQgMgJgFgRIgEgMQgFgQgKgGQgLgGgPAEIgiALIARA4IAXgDIAIAZIhXAbgAgVhTIgeAJIASA8IAdgJQARgFAGgKQAHgLgEgOQgEgOgMgGQgGgDgGAAQgHAAgIADg"
      );
    this.shape_33.setTransform(144.675, -33.1314);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgtBjQgjgWgOgvIgBgDQgOgtARgmQAQgnArgNQAqgNAkAXQAkAWAOAuIABADQAOAtgRAnQgRAmgrANQgQAFgPAAQgYAAgXgOgAgWhLQgbAIgHAZQgHAYAKAgIABADQAKAiAUAQQATAQAagIQAagIAHgYQAIgZgKggIgBgEQgKgggUgRQgNgKgPAAQgIAAgJACg"
      );
    this.shape_34.setTransform(123.97, -27.9466);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhqB4IAVgLIguiWIgZACIgIgZIAXgHIA3gRIBkCKIABAAIAHirIBOgYIAIAaIgWALIAuCXIAZgDIAIAZIhYAbIgIgaIAWgLIgKghIgZhdIgBAAIgJCsIgcAJIhniKIAAABIAgBaIAKAiIAYgDIAHAZIhXAbg"
      );
    this.shape_35.setTransform(99.55, -20.525);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag6BpIAVgLIguiWIgYADIgIgaIAXgHICPgsIASA6IghAKIgJgZIhDAVIARA1IBGgVIAJAgIhGAVIASA8IBEgVIgGgaIAggKIASA6IimAzg"
      );
    this.shape_36.setTransform(75.725, -13.3);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhqB4IAVgLIguiWIgZACIgIgZIAXgHIA3gRIBkCKIABAAIAHirIBOgYIAIAaIgWALIAuCXIAZgDIAIAZIhYAbIgIgaIAWgLIgLghIgYhdIgBAAIgJCsIgcAJIhniKIAAABIAgBaIAKAiIAYgDIAHAZIhXAbg"
      );
    this.shape_37.setTransform(52.65, -6.275);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgIBzIgegiIAagWIAXAUQAIAAALgFQAMgFAKgJQAOgMACgLQACgMgIgKQgIgJgMAAQgMAAgVAJQgkARgaACQgZABgSgVQgRgTAGgcQAGgbAagXQATgRAVgIQAVgHASAAIAdAjIgZAVIgXgTQgHABgKAFQgKAFgJAIQgOAMgDAMQgCAMAIAJQAHAJANgBQAMgCAZgKQAhgQAZAAQAZAAASAVQASAUgGAcQgGAbgcAYQgUARgWAHQgQAGgQAAIgIgBg"
      );
    this.shape_38.setTransform(-8.1646, -126.4718);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgLB4IAOgTIhmh3IgVAMIgRgUIASgPIByhiIAmAtIgaAWIgRgSIg2AuIAkAqIA4gxIAXAaIg4AwIAoAwIA2gvIgQgVIAZgVIAoAtIiEBxg"
      );
    this.shape_39.setTransform(-23.375, -113.475);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAoBvIAPgTIhlh1IgeAZIAOAUIgZAWIgmgsICUiAIAmAtIgaAWIgRgSIgeAaIBkB1IAVgLIARAUIhFA7g"
      );
    this.shape_40.setTransform(-40.525, -102.15);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgTBrIhLhXIgVALIgRgUIASgOIAhgdIASgPIARAUIgPATIBKBWQAPARAPAAQAQAAAQgNQAQgNABgQQACgQgOgQIhLhXIgUAMIgRgUIBEg7IARAUIgPASIBLBYQAZAbgGAfQgFAfgeAaQgeAaggAAIgCAAQgeAAgWgbg"
      );
    this.shape_41.setTransform(-57.5746, -88.2733);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgVCJIAPgTIhoh3IgUALIgRgTIARgPIAigdICjA2IABgBIhMhYIgVAMIgRgUIAzgsIARgQIARAUIgOATIB7COIghAdIijg2IgBABIBLBYIAVgMIARAUIhEA8g"
      );
    this.shape_42.setTransform(-74.025, -70.65);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#111A2C")
      .s()
      .p("AAUBdIAPgTIhnh3IgUAMIgRgUIBFg7IARAUIgPATIBmB3IAVgMIARAUIhFA7g");
    this.shape_43.setTransform(-86.375, -59.225);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgyCZIAQgTIhoh3IgVALIgRgTIASgPIAsgmICTBWIAAAAIg9ifIA9g1IARATIgPATIBnB4IAVgMIARAUIhFA7IgRgUIAPgTIgXgZIg9hNIAAABIA+ChIgXATIiVhVIgBABIBCBGIAXAbIAUgMIARAUIhEA7g"
      );
    this.shape_44.setTransform(-101.5, -46.2);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgPBhIAAgBIAdgdQAKALAMABQALAAALgIQAMgKgCgNQgBgOgMgNQgMgPgOgDQgNgDgNAJQgIAJgCAIQgCAIADAIIgfAXIhGhkIBghTIAfAmIgUASIgMgJIgtAnIAdAqQABgIAFgHQAFgIAHgGQAYgWAZAEQAaAEAXAaQAVAXAAAdQgCAcgbAYQgXATgbACIgDABQgaAAgQgWg"
      );
    this.shape_45.setTransform(-125.25, -27.3954);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgVCJIAPgTIhoh3IgUALIgRgTIARgQIAigcICjA1IABAAIhMhZIgVANIgRgVIAzgrIARgQIARAUIgOATIB7COIghAdIijg2IgBAAIBLBZIAVgLIARATIhEA8g"
      );
    this.shape_46.setTransform(-146.575, -8.3);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#111A2C")
      .s()
      .p("AAUBdIAPgTIhnh3IgUAMIgRgUIBFg7IARAUIgPATIBmB3IAVgMIARAUIhFA7g");
    this.shape_47.setTransform(-158.925, 3.125);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAABsIAPgTIhnh3IgUAMIgRgUIARgQIA6gxQAegaAkACQAlADAaAeIAYAcQAaAfgDAjQgDAlgfAaIhLBBgAgehMIgWATIBiBzIAXgTQASgPgBgWQAAgUgRgTIgYgcQgQgUgVgDIgIAAQgPAAgPAMg"
      );
    this.shape_48.setTransform(67.6903, -248.1358);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgLB4IAOgTIhmh3IgVAMIgRgUIASgPIByhiIAmAtIgaAWIgRgSIg2AuIAkAqIA4gxIAXAaIg4AwIAoAwIA2gvIgQgVIAZgVIAoAtIiEBxg"
      );
    this.shape_49.setTransform(53.825, -236.425);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgGB3IgZjBIg1AuIAPAWIgaAVIglgvIB4hnIANAQIAaDDIA6gyIgOgXIAZgVIAlAvIh9Brg"
      );
    this.shape_50.setTransform(39.725, -224.125);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#111A2C")
      .s()
      .p("AAUBdIAPgTIhnh3IgUAMIgRgUIBFg7IARAUIgPATIBmB3IAVgMIARAUIhFA7g");
    this.shape_51.setTransform(28.425, -214.625);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgUBtIAPgTIhnh3IgVAMIgRgUIASgQIA5gxQAcgYAbgBQAbgBAUAXQALAMABAQQABAOgJASQAUgJAPAFQAPAEANAPIAHAJQAFAFAFABQAEACAGgEIAFgDIARAUIgRAOQgRAOgOgDQgOgDgMgOIgJgIQgKgNgMgBQgNgBgMAKIgaAWIAkAsIAVgMIARAUIhDA8gAgxhMIgYAUIApAwIAXgUQAOgMACgMQACgMgKgLQgJgLgMgBIgCgBQgMAAgNAMg"
      );
    this.shape_52.setTransform(16.35, -202.2521);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAABtQgqgGggglIgCgCQgfglAAgpQgBgqAjgdQAhgdApAGQAqAGAfAkIACADQAhAlgBApQAAAqgjAdQgbAYghAAIgNgBgAgzg7QgVASADAZQAEAZAWAaIACACQAYAbAYAHQAXAHAVgSQAWgSgDgZQgEgZgWgaIgCgDQgXgagYgHQgHgCgHAAQgRAAgPANg"
      );
    this.shape_53.setTransform(-0.05, -190.0674);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgyCaIAPgTIhnh5IgVANIgRgUIASgPIAsglICTBVIABgBIg+ifIA9g0IARAUIgPASIBnB4IAVgLIASATIhGA7IgRgUIAPgTIgXgaIg9hMIAAABIA9ChIgWATIiVhUIgBAAIBCBHIAXAaIATgMIASAUIhEA7g"
      );
    this.shape_54.setTransform(-19.4, -173.4);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgLB4IAOgTIhmh3IgVAMIgRgUIASgPIByhiIAmAtIgaAWIgRgSIg2AuIAkAqIA4gxIAXAaIg4AwIAoAwIA2gvIgQgVIAZgVIAoAtIiEBxg"
      );
    this.shape_55.setTransform(-38.275, -157.175);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgxCaIAOgTIhnh5IgVANIgQgUIARgPIAsglICTBVIABgBIg+ifIA9g0IARAUIgPASIBoB4IAUgLIASATIhGA7IgSgUIAQgTIgXgaIg8hMIgBABIA9ChIgWATIiWhUIAAAAIBCBHIAXAaIATgMIASAUIhEA7g"
      );
    this.shape_56.setTransform(-56.55, -141.45);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to(
          {
            state: [
              { t: this.shape_18 },
              { t: this.shape_17 },
              { t: this.shape_16 },
              { t: this.shape_15 },
              { t: this.shape_14 },
              { t: this.shape_13 },
              { t: this.shape_12 },
              { t: this.shape_11 },
              { t: this.shape_10 },
              { t: this.shape_9 },
              { t: this.shape_8 },
              { t: this.shape_7 },
              { t: this.shape_6 },
              { t: this.shape_5 },
              { t: this.shape_4 },
              { t: this.shape_3 },
              { t: this.shape_2 },
              { t: this.shape_1 },
              { t: this.shape },
            ],
          },
          65
        )
        .to(
          {
            state: [
              { t: this.shape_18 },
              { t: this.shape_17 },
              { t: this.shape_16 },
              { t: this.shape_15 },
              { t: this.shape_14 },
              { t: this.shape_13 },
              { t: this.shape_12 },
              { t: this.shape_11 },
              { t: this.shape_10 },
              { t: this.shape_9 },
              { t: this.shape_8 },
              { t: this.shape_7 },
              { t: this.shape_6 },
              { t: this.shape_5 },
              { t: this.shape_4 },
              { t: this.shape_3 },
              { t: this.shape_2 },
              { t: this.shape_1 },
              { t: this.shape },
            ],
          },
          14
        )
        .to(
          {
            state: [
              { t: this.shape_18 },
              { t: this.shape_17 },
              { t: this.shape_16 },
              { t: this.shape_15 },
              { t: this.shape_14 },
              { t: this.shape_13 },
              { t: this.shape_12 },
              { t: this.shape_11 },
              { t: this.shape_10 },
              { t: this.shape_9 },
              { t: this.shape_8 },
              { t: this.shape_7 },
              { t: this.shape_6 },
              { t: this.shape_5 },
              { t: this.shape_4 },
              { t: this.shape_3 },
              { t: this.shape_2 },
              { t: this.shape_1 },
              { t: this.shape },
            ],
          },
          55
        )
        .to(
          {
            state: [
              { t: this.shape_37 },
              { t: this.shape_36 },
              { t: this.shape_35 },
              { t: this.shape_34 },
              { t: this.shape_33 },
              { t: this.shape_32 },
              { t: this.shape_31 },
              { t: this.shape_30 },
              { t: this.shape_29 },
              { t: this.shape_28 },
              { t: this.shape_27 },
              { t: this.shape_26 },
              { t: this.shape_25 },
              { t: this.shape_24 },
              { t: this.shape_23 },
              { t: this.shape_22 },
              { t: this.shape_21 },
              { t: this.shape_20 },
              { t: this.shape_19 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_56 },
              { t: this.shape_55 },
              { t: this.shape_54 },
              { t: this.shape_53 },
              { t: this.shape_52 },
              { t: this.shape_51 },
              { t: this.shape_50 },
              { t: this.shape_49 },
              { t: this.shape_48 },
              { t: this.shape_47 },
              { t: this.shape_46 },
              { t: this.shape_45 },
              { t: this.shape_44 },
              { t: this.shape_43 },
              { t: this.shape_42 },
              { t: this.shape_41 },
              { t: this.shape_40 },
              { t: this.shape_39 },
              { t: this.shape_38 },
            ],
          },
          1
        )
        .to({ state: [] }, 1)
        .to({ state: [] }, 644)
        .wait(146)
    );

    // _105
    this.instance_5 = new lib._105("synched", 0);
    this.instance_5.setTransform(0, 210, 5.0536, 5.0536);
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(11)
        .to({ _off: false }, 0)
        .to({ scaleX: 0.7867, scaleY: 0.7864 }, 3)
        .wait(1)
        .to({ scaleX: 0.9174, scaleY: 0.9173, y: 209.95 }, 0)
        .wait(1)
        .to({ scaleX: 1, scaleY: 1, y: 210 }, 0)
        .wait(46)
        .to({ startPosition: 0 }, 0)
        .wait(17)
        .to({ startPosition: 0 }, 0)
        .to({ scaleX: 0.1531, scaleY: 0.1531 }, 3)
        .to({ _off: true }, 1)
        .wait(844)
    );

    // names_faces
    this.instance_6 = new lib.Symbol1("synched", 0);
    this.instance_6.setTransform(-99.6, 88.9);
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(65)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ rotation: -22.6905, x: -125.35, y: 4.35 }, 0)
        .wait(1)
        .to(
          { regX: -0.1, regY: 0.1, rotation: -52.434, x: -188.9, y: -74.05 },
          0
        )
        .wait(1)
        .to(
          {
            regX: -240.4,
            regY: 1.1,
            rotation: 0,
            skewX: 90,
            skewY: -90,
            x: -316.2,
            y: 128.85,
          },
          0
        )
        .wait(11)
        .to({ startPosition: 0 }, 0)
        .wait(55)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to(
          { regX: -240.3, skewX: 49.796, skewY: -130.204, x: -284.4, y: 135.8 },
          0
        )
        .to({ _off: true }, 1)
        .wait(791)
    );

    // names_faces_memorized
    this.instance_7 = new lib.namesandfaces("synched", 0);
    this.instance_7.setTransform(-295, 70, 1, 1, 90, 0, 0, -250, -40.3);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(1)
        .to({ rotation: 59.2943, x: -282.75, y: 80.1 }, 0)
        .wait(1)
        .to({ regY: -40.2, rotation: 30.2155, x: -253.05, y: 68.8 }, 0)
        .wait(1)
        .to({ regX: 0, regY: 0, rotation: 0, x: 0, y: 95.3 }, 0)
        .wait(1)
        .to({ y: 102.8 }, 0)
        .wait(1)
        .to({ y: 110.3 }, 0)
        .wait(6)
        .to({ startPosition: 0 }, 0)
        .wait(50)
        .to({ startPosition: 0 }, 0)
        .to({ _off: true }, 4)
        .wait(862)
    );

    // title
    this.instance_8 = new lib.worldrecords("synched", 0);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(11)
        .to({ startPosition: 0 }, 0)
        .wait(51)
        .to({ startPosition: 0 }, 0)
        .wait(156)
        .to({ startPosition: 0 }, 0)
        .wait(26)
        .to({ startPosition: 0 }, 0)
        .to({ _off: true }, 1)
        .wait(73)
        .to({ _off: false }, 0)
        .wait(59)
        .to({ startPosition: 0 }, 0)
        .to({ _off: true }, 1)
        .wait(549)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(
    -552.9,
    -276.2,
    1259.5,
    846.4000000000001
  );

  (lib.stage1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // abstract_information
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#111A2C")
      .s()
      .p(
        "AgfCCIAAgsIAzAAIAAAsgAgeA5QAAgZAHgLQAHgLAUgQQANgKAHgMQAIgMAAgOQAAgQgJgJQgIgKgPAAQgNAAgJAIQgJAIAAAPIgyAAIgBgBQAAgiAXgSQAWgSAlAAQAmAAAXAUQAWAUAAAiQAAAXgNATQgNASgUAMQgLAJgDAIQgDAIAAAPg"
      );
    this.shape.setTransform(794.2245, 226.025);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA0CAIhmirIgBAAIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIA0AAIBmCsIABgBIAAiGIgbgGIAAgfIBOAAIAcAAIAAAfIgcAGIAADag"
      );
    this.shape_1.setTransform(770.625, 226.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhTBfQggglAAg4IAAgDQAAg4AgglQAfgkA0gBQA0ABAfAkQAhAlAAA4IAAADQAAA4ghAlQgfAlg0gBQg0ABgfglgAgwhCQgQAZAAAoIAAADQAAApARAYQAQAZAfAAQAgAAAQgZQAQgYAAgpIAAgDQAAgogQgZQgQgYggAAQggAAgQAYg"
      );
    this.shape_2.setTransform(742.9, 226.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#111A2C")
      .s()
      .p("Ag0CAIAAgfIAcgFIAAi2IgcgGIAAgfIBpAAIAAAfIgcAGIAAC2IAcAFIAAAfg");
    this.shape_3.setTransform(722.8, 226.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAbgFIAAi0IgvAAIgCAdIgnAAIAAhEIDjAAIAABEIgnAAIgDgdIgvAAIAAC0IAcAFIAAAfg"
      );
    this.shape_4.setTransform(703.5, 226.2);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_5.setTransform(677.475, 226.2);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA2CAIAAgfIAcgFIAAgoIAFhwIgBAAIhFC8IghAAIhFi8IgBAAIAFBwIAAAoIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBDAAIBBC8IAAAAIBCi8IBeAAIAAAfIgbAGIAAC2IAbAFIAAAfg"
      );
    this.shape_6.setTransform(646.675, 226.2);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgTgKgKQgKgLgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAAUgLAOQgKAOgUAHQAXAIAKAPQAJAPAAAXIAAANQAAAJAEAFQADAEAIABIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgKAAgRQAAgRgLgKQgLgLgUAAIgkAAg"
      );
    this.shape_7.setTransform(616.425, 226.2);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhTBfQggglAAg4IAAgDQAAg4AfglQAhgkAzgBQA0ABAfAkQAhAlAAA4IAAADQAAA4ghAlQgfAlg0gBQg0ABgfglgAgwhCQgQAZAAAoIAAADQAAApAQAYQAQAZAgAAQAgAAAQgZQAQgYABgpIAAgDQgBgogQgZQgRgYgfAAQggAAgQAYg"
      );
    this.shape_8.setTransform(590.25, 226.2);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhlCAIAAgfIAbgFIAAi2IgbgGIAAgfIDLAAIAABGIgoAAIgCgfIhSAAIAABHIBYAAIAAAmIhYAAIAABHIAaAFIAAAfg"
      );
    this.shape_9.setTransform(565.375, 226.2);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA0CAIhmirIgBAAIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIA0AAIBmCsIABgBIAAiGIgbgGIAAgfIBOAAIAcAAIAAAfIgcAGIAADag"
      );
    this.shape_10.setTransform(539.475, 226.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#111A2C")
      .s()
      .p("Ag0CAIAAgfIAbgFIAAi2IgbgGIAAgfIBpAAIAAAfIgcAGIAAC2IAcAFIAAAfg");
    this.shape_11.setTransform(518.1, 226.2);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAbgFIAAi0IguAAIgDAdIgnAAIAAhEIDjAAIAABEIgnAAIgCgdIgvAAIAAC0IAbAFIAAAfg"
      );
    this.shape_12.setTransform(489, 226.2);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhHBgQghgkAAg4IAAgHQAAg4AhgkQAggkAzAAQAeABAYAKQAYALAPASIAAAyIgmAAIgFgiQgIgIgLgEQgMgEgPAAQghAAgSAYQgSAYAAAnIAAAIQAAAnASAZQASAZAggBQAPAAANgEQAMgFAHgHIAFgiIAmAAIAAAyQgPASgYALQgYALgegBQgyABghgkg"
      );
    this.shape_13.setTransform(463.975, 226.2);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_14.setTransform(438.625, 226.2);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgTgKgKQgKgLgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAAUgLAOQgKAOgUAHQAXAIAKAPQAJAPAAAXIAAANQAAAJAEAFQADAEAIABIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgKAAgRQAAgRgLgKQgLgLgUAAIgkAAg"
      );
    this.shape_15.setTransform(412.475, 226.2);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAcgFIAAi0IgwAAIgCAdIgnAAIAAhEIDjAAIAABEIgnAAIgDgdIgvAAIAAC0IAcAFIAAAfg"
      );
    this.shape_16.setTransform(386.9, 226.2);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag1B6QgZgJgQgSIAAg1IAoAAIAGAlQAHAGAOAEQAMAEAQAAQAVAAALgJQALgJAAgOQAAgOgKgKQgLgIgZgJQgugNgXgQQgYgTAAggQAAgfAbgTQAagUAogBQAcABAZAIQAYAKARAPIAAA0IgnAAIgHgjQgGgFgNgDQgNgDgOAAQgVAAgLAJQgLAJgBAOQAAANANAJQAMAHAcAKQArAMAVASQAXAUAAAfQAAAhgaASQgaAUgrgBQgeABgYgKg"
      );
    this.shape_17.setTransform(363.2, 226.2);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhsCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBVAAQAuAAAZASQAZARAAAjQAAASgJAOQgKAOgSAHQAXAEAMAQQALAQAAAWQAAAkgYATQgYATgtAAgAgeBZIAuAAQAVAAALgJQAKgJAAgRQAAgUgJgJQgJgKgUAAIgyAAgAgegTIAkAAQAVAAALgJQALgIAAgRQAAgRgLgJQgMgIgWgBIgiAAg"
      );
    this.shape_18.setTransform(339.075, 226.2);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_19.setTransform(313.225, 226.2);

    this.instance = new lib.Tween7("synched", 0);
    this.instance.setTransform(552, 225);
    this.instance._off = true;

    this.instance_1 = new lib.Tween8("synched", 0);
    this.instance_1.setTransform(0, 225);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .to({ state: [{ t: this.instance }] }, 96)
        .to({ state: [{ t: this.instance_1 }] }, 5)
        .to({ state: [{ t: this.instance_1 }] }, 32)
        .to({ state: [] }, 1)
        .wait(29)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(96)
        .to({ _off: false }, 0)
        .to({ _off: true, x: 0 }, 5)
        .wait(62)
    );

    // and_other
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgOQgKgNAAgVIAAgPQAAgTgKgKQgKgLgSgBIgpAAIAABEIAcAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAAUgLAOQgKAOgUAHQAXAIAKAPQAJAPAAAYIAAAMQAAAJAEAFQADAEAIABIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgKAAgRQAAgRgLgKQgLgKgUAAIgkAAg"
      );
    this.shape_20.setTransform(-322.375, 175.7);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAICuAAIAABGIgoAAIgCgeIhRAAIAABAIBWAAIAAAmIhWAAIAABKIBSAAIACgfIAnAAIAABGg"
      );
    this.shape_21.setTransform(-347.775, 175.7);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAZCAIAAgfIAbgFIAAhHIhnAAIAABHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIBqAAIAAAfIgbAGIAABJIBnAAIAAhJIgbgGIAAgfIAbAAIAzAAIAcAAIAAAfIgcAGIAAC2IAcAFIAAAfg"
      );
    this.shape_22.setTransform(-373.975, 175.7);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAbgFIAAizIguAAIgDAcIgnAAIAAhEIDjAAIAABEIgnAAIgCgcIgvAAIAACzIAbAFIAAAfg"
      );
    this.shape_23.setTransform(-401.1, 175.7);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhTBfQggglAAg4IAAgDQAAg4AfglQAhglAzAAQA0AAAfAlQAhAlAAA4IAAADQAAA4ghAlQgfAkg0AAQg0AAgfgkgAgwhCQgQAYAAAoIAAAEQAAAoAQAZQARAZAfAAQAgAAAQgZQAQgZABgoIAAgEQAAgngRgZQgRgYgfAAQggAAgQAYg"
      );
    this.shape_24.setTransform(-426.85, 175.7);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhuCAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIBXAAQAvAAAeAeQAeAeAAAvIAAApQAAAvgeAfQgeAdgvAAgAggBZIAhAAQAcgBAPgSQAQgSAAgfIAAgqQAAgdgQgTQgPgSgcAAIghAAg"
      );
    this.shape_25.setTransform(-463.125, 175.7);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA0CAIhmirIgBAAIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi2IgbgGIAAgfIAbAAIA0AAIBmCsIABgBIAAiGIgbgGIAAgfIBOAAIAcAAIAAAfIgcAGIAADag"
      );
    this.shape_26.setTransform(-489.975, 175.7);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgDIBOjdIA0AAIBNDdIASADIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_27.setTransform(-517.975, 175.7);

    this.instance_2 = new lib.Tween9("synched", 0);
    this.instance_2.setTransform(-420, 174.5);
    this.instance_2._off = true;

    this.instance_3 = new lib.Tween10("synched", 0);
    this.instance_3.setTransform(0, 174.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
          ],
        })
        .to({ state: [{ t: this.instance_2 }] }, 96)
        .to({ state: [{ t: this.instance_3 }] }, 5)
        .to({ state: [{ t: this.instance_3 }] }, 32)
        .to({ state: [] }, 1)
        .wait(29)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(96)
        .to({ _off: false }, 0)
        .to({ _off: true, x: 0 }, 5)
        .wait(62)
    );

    // Layer_2_copy_copy (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p("EgqLADIIAAmPMBUXAAAIAAGPg");
    var mask_graphics_133 = new cjs.Graphics().p("EgqLADIIAAmPMBUXAAAIAAGPg");

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: 0, y: 110 })
        .wait(133)
        .to({ graphics: mask_graphics_133, x: 0, y: 110 })
        .wait(1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(29)
    );

    // dates
    this.instance_4 = new lib.Tween1("synched", 0);
    this.instance_4.setTransform(200, 144.5);
    this.instance_4._off = true;

    this.instance_5 = new lib.Tween2("synched", 0);
    this.instance_5.setTransform(197, 107);

    var maskedShapeInstanceList = [this.instance_4, this.instance_5];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance_4 }] }, 36)
        .to({ state: [{ t: this.instance_5 }] }, 5)
        .to({ state: [{ t: this.instance_5 }] }, 92)
        .to({ state: [] }, 1)
        .wait(29)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(36)
        .to({ _off: false }, 0)
        .to({ _off: true, x: 197, y: 107 }, 5)
        .wait(122)
    );

    // Layer_2_copy (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    var mask_1_graphics_0 = new cjs.Graphics().p("EgqLADIIAAmPMBUXAAAIAAGPg");
    var mask_1_graphics_133 = new cjs.Graphics().p("EgqLADIIAAmPMBUXAAAIAAGPg");

    this.timeline.addTween(
      cjs.Tween.get(mask_1)
        .to({ graphics: mask_1_graphics_0, x: 0, y: 110 })
        .wait(133)
        .to({ graphics: mask_1_graphics_133, x: 0, y: 110 })
        .wait(1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(29)
    );

    // numbers
    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "Ag1B6QgZgJgQgRIAAg2IAoAAIAGAkQAHAGANAFQAOAEAPAAQAVAAALgJQALgIAAgPQAAgPgKgIQgLgKgZgHQgtgNgYgSQgXgSAAgfQAAggAagTQAbgUAnAAQAdgBAYAKQAYAIARAPIAAA1IgnAAIgHgkQgGgDgNgDQgNgEgOAAQgVAAgKAJQgNAJAAAOQAAANANAIQAMAJAcAJQAqALAWATQAXATAAAgQAAAggaAUQgbASgqAAQgdAAgZgJg"
      );
    this.shape_28.setTransform(83.05, 145.7);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "ABZCAQgZAAgLgOQgKgNAAgWIAAgOQAAgSgKgMQgKgKgSgBIgpAAIAABEIAcAFIAAAfIhqAAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAATgLAOQgKAPgUAIQAXAGAKAQQAJAPAAAYIAAAMQAAAJAEAEQADAGAIAAIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgJAAgRQAAgSgLgKQgLgLgUABIgkAAg"
      );
    this.shape_29.setTransform(58.575, 145.7);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAICuAAIAABGIgoAAIgCgeIhRAAIAABAIBWAAIAAAmIhWAAIAABJIBSAAIACgeIAnAAIAABGg"
      );
    this.shape_30.setTransform(33.175, 145.7);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhsCAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIBVAAQAuAAAZARQAZASAAAjQAAASgJAOQgKAOgSAHQAXAEAMAQQALAQAAAVQAAAlgYATQgYATgtAAgAgeBYIAuAAQAVAAALgIQAKgJAAgSQAAgTgJgJQgJgKgUAAIgyAAgAgegUIAkAAQAVAAALgIQALgJAAgQQAAgRgLgJQgMgJgWABIgiAAg"
      );
    this.shape_31.setTransform(9.175, 145.7);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AA2CAIAAgfIAcgFIAAgpIAFhvIgBAAIhFC8IghAAIhFi8IgBABIAFBuIAAApIAcAFIAAAfIhqAAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIBDAAIBBC7IAAAAIBCi7IBeAAIAAAfIgbAFIAAC3IAbAFIAAAfg"
      );
    this.shape_32.setTransform(-20.625, 145.7);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhJBrQgdgYAAgrIAAiEIgbgGIAAgfIAbAAIA0AAIAbAAIAAAfIgbAGIAACEQAAAZANANQAOANAXAAQAYAAANgNQAOgMAAgaIAAiEIgbgGIAAgfIBqAAIAAAfIgcAGIAACEQAAArgcAYQgcAXguAAQgtAAgcgXg"
      );
    this.shape_33.setTransform(-52.175, 145.875);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AA0CAIhmisIgBABIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIA0AAIBmCrIABAAIAAiHIgbgFIAAgfIBOAAIAcAAIAAAfIgcAFIAADbg"
      );
    this.shape_34.setTransform(-80.575, 145.7);

    this.instance_6 = new lib.Tween3("synched", 0);
    this.instance_6.setTransform(0, 144.5);
    this.instance_6._off = true;

    this.instance_7 = new lib.Tween4("synched", 0);
    this.instance_7.setTransform(0, 108.5);

    var maskedShapeInstanceList = [
      this.shape_28,
      this.shape_29,
      this.shape_30,
      this.shape_31,
      this.shape_32,
      this.shape_33,
      this.shape_34,
      this.instance_6,
      this.instance_7,
    ];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
          ],
        })
        .to({ state: [{ t: this.instance_6 }] }, 56)
        .to({ state: [{ t: this.instance_7 }] }, 5)
        .to({ state: [{ t: this.instance_7 }] }, 72)
        .to({ state: [] }, 1)
        .wait(29)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(56)
        .to({ _off: false }, 0)
        .to({ _off: true, y: 108.5 }, 5)
        .wait(102)
    );

    // Layer_2 (mask)
    var mask_2 = new cjs.Shape();
    mask_2._off = true;
    var mask_2_graphics_0 = new cjs.Graphics().p("EgqLADIIAAmPMBUXAAAIAAGPg");
    var mask_2_graphics_133 = new cjs.Graphics().p("EgqLADIIAAmPMBUXAAAIAAGPg");

    this.timeline.addTween(
      cjs.Tween.get(mask_2)
        .to({ graphics: mask_2_graphics_0, x: 0, y: 110 })
        .wait(133)
        .to({ graphics: mask_2_graphics_133, x: 0, y: 110 })
        .wait(1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(29)
    );

    // names
    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag1B6QgZgJgQgRIAAg2IAoAAIAFAkQAIAGAOAFQANAEAPAAQAVAAALgJQALgIAAgPQAAgPgLgIQgKgKgZgHQgtgNgYgSQgYgSAAgfQABggAagTQAbgUAnAAQAcgBAZAKQAYAIARAPIAAA1IgmAAIgHgkQgHgDgNgDQgNgEgOAAQgUAAgMAJQgMAJABAOQAAANAMAIQAMAJAdAJQApALAXATQAWATgBAgQAAAggaAUQgZASgrAAQgdAAgZgJg"
      );
    this.shape_35.setTransform(-142.9, 145.7);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAICuAAIAABGIgoAAIgCgeIhRAAIAABAIBWAAIAAAmIhWAAIAABJIBSAAIACgeIAnAAIAABGg"
      );
    this.shape_36.setTransform(-167.025, 145.7);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AA2CAIAAgfIAcgFIAAgpIAFhvIgBAAIhFC8IghAAIhFi8IgBABIAFBuIAAApIAcAFIAAAfIhqAAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIBDAAIBBC7IAAAAIBCi7IBeAAIAAAfIgbAFIAAC3IAbAFIAAAfg"
      );
    this.shape_37.setTransform(-196.025, 145.7);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgCIBOjeIA0AAIBNDeIASACIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_38.setTransform(-226.975, 145.7);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AA0CAIhmisIgBABIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIA0AAIBmCrIABAAIAAiHIgbgFIAAgfIBOAAIAcAAIAAAfIgcAFIAADbg"
      );
    this.shape_39.setTransform(-254.625, 145.7);

    this.instance_8 = new lib.Tween5("synched", 0);
    this.instance_8.setTransform(-200, 144.5);
    this.instance_8._off = true;

    this.instance_9 = new lib.Tween6("synched", 0);
    this.instance_9.setTransform(-200, 108.5);

    var maskedShapeInstanceList = [
      this.shape_35,
      this.shape_36,
      this.shape_37,
      this.shape_38,
      this.shape_39,
      this.instance_8,
      this.instance_9,
    ];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
    }

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
          ],
        })
        .to({ state: [{ t: this.instance_8 }] }, 76)
        .to({ state: [{ t: this.instance_9 }] }, 5)
        .to({ state: [{ t: this.instance_9 }] }, 52)
        .to({ state: [] }, 1)
        .wait(29)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(76)
        .to({ _off: false }, 0)
        .to({ _off: true, y: 108.5 }, 5)
        .wait(82)
    );

    // terrible_remembering
    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgCIBOjeIA0AAIBNDeIASACIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_40.setTransform(-198.725, -2.55);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABIIBSAAIACgeIAnAAIAABGg"
      );
    this.shape_41.setTransform(-147.925, -2.55);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgSgKgMQgKgKgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAATgLAOQgKAPgUAIQAXAGAKAQQAJAQAAAWIAAAOQAAAIAEAEQADAGAIAAIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgKAAgQQAAgSgLgKQgLgLgUAAIgkAAg"
      );
    this.shape_42.setTransform(-172.275, -2.55);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag1CAIAAgfIAcgFIAAg5IhFh/IgVgEIAAgfIBgAAIAAAfIgUADIAnBUIAAAAIAohUIgVgDIAAgfIBhAAIAAAfIgWAEIhFCCIAAA2IAbAFIAAAfg"
      );
    this.shape_43.setTransform(-112.975, -2.55);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhTBfQggglAAg4IAAgDQAAg4AggkQAfglA0AAQA0AAAfAlQAhAkAAA4IAAADQAAA4ghAlQgfAlg0AAQg0AAgfglgAgwhCQgQAZAAAoIAAADQAAAoARAZQAQAZAfAAQAgAAAQgZQARgZgBgoIAAgDQAAgogQgZQgQgZggAAQggAAgQAZg"
      );
    this.shape_44.setTransform(-86.9, -2.55);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhJBrQgdgYAAgrIAAiEIgbgGIAAgfIAbAAIA0AAIAbAAIAAAfIgbAGIAACEQAAAZANANQAOANAXAAQAYAAANgNQAOgMAAgaIAAiEIgbgGIAAgfIBqAAIAAAfIgcAGIAACEQAAArgcAYQgcAXguAAQgtAAgcgXg"
      );
    this.shape_45.setTransform(-59.575, -2.375);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAbgFIAAi0IgvAAIgCAeIgnAAIAAhFIDjAAIAABFIgnAAIgDgeIgvAAIAAC0IAcAFIAAAfg"
      );
    this.shape_46.setTransform(-23.15, -2.55);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABIIBSAAIACgeIAnAAIAABGg"
      );
    this.shape_47.setTransform(-147.925, -2.55);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgSgKgMQgKgKgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAATgLAOQgKAPgUAIQAXAGAKAQQAJAQAAAWIAAAOQAAAIAEAEQADAGAIAAIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgKAAgQQAAgSgLgKQgLgLgUAAIgkAAg"
      );
    this.shape_48.setTransform(-172.275, -2.55);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgNQgKgOAAgVIAAgPQAAgSgKgMQgKgKgSAAIgpAAIAABDIAcAFIAAAfIhqAAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAATgLAOQgKAPgUAIQAXAGAKAQQAJAQAAAWIAAAOQAAAIAEAEQADAGAIAAIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgKAAgQQAAgSgLgKQgLgLgUAAIgkAAg"
      );
    this.shape_49.setTransform(-172.275, -2.55);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#111A2C")
      .s()
      .p("Ag0CAIAAgfIAcgFIAAi3IgcgFIAAgfIBpAAIAAAfIgcAFIAAC3IAcAFIAAAfg");
    this.shape_50.setTransform(71.65, -2.55);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhsCAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIBVAAQAuAAAZASQAZARAAAjQAAASgJAOQgKAOgSAHQAXAEAMAQQALAQAAAVQAAAlgYATQgYATgtAAgAgeBYIAuAAQAVAAALgIQAKgJAAgSQAAgSgJgKQgJgKgUAAIgyAAgAgegTIAkAAQAVAAALgJQALgIAAgRQAAgSgLgIQgMgJgWAAIgiAAg"
      );
    this.shape_51.setTransform(90.875, -2.55);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhfCAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIAzAAIAbAAIAAAfIgbAFIAACzIBHAAIADggIAnAAIAABIg"
      );
    this.shape_52.setTransform(114.375, -2.55);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAICuAAIAABGIgoAAIgCgfIhRAAIAABBIBWAAIAAAnIhWAAIAABIIBSAAIACgeIAnAAIAABGg"
      );
    this.shape_53.setTransform(-147.925, -2.55);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#111A2C")
      .s()
      .p(
        "AAjCAIAAgfIASgDIgLgjIhSAAIgMAjIASADIAAAfIhXAAIAAgfIASgCIBOjeIA0AAIBNDeIASACIAAAfgAgcAVIA5AAIgchZIgBAAg"
      );
    this.shape_54.setTransform(-198.725, -2.55);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#111A2C")
      .s()
      .p(
        "Ag0CAIAAgfIAbgFIAAi0IgvAAIgCAeIgnAAIAAhFIDjAAIAABFIgnAAIgDgeIgvAAIAAC0IAcAFIAAAfg"
      );
    this.shape_55.setTransform(-23.15, -2.55);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgOQgKgNAAgWIAAgOQAAgSgKgMQgKgKgSgBIgpAAIAABEIAcAFIAAAfIhqAAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAATgLAOQgKAPgUAIQAXAGAKAQQAJAPAAAYIAAAMQAAAJAEAEQADAGAIAAIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgJAAgRQAAgSgLgKQgLgLgUABIgkAAg"
      );
    this.shape_56.setTransform(-130.125, 44.9);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAICuAAIAABGIgoAAIgCgeIhRAAIAABAIBWAAIAAAmIhWAAIAABJIBSAAIACgeIAnAAIAABGg"
      );
    this.shape_57.setTransform(-105.775, 44.9);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA2CAIAAgfIAcgFIAAgpIAFhvIgBAAIhFC8IghAAIhFi8IgBABIAFBuIAAApIAcAFIAAAfIhqAAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIBDAAIBBC7IAAAAIBCi7IBeAAIAAAfIgbAFIAAC3IAbAFIAAAfg"
      );
    this.shape_58.setTransform(-75.875, 44.9);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAICuAAIAABGIgoAAIgCgeIhRAAIAABAIBWAAIAAAmIhWAAIAABJIBSAAIACgeIAnAAIAABGg"
      );
    this.shape_59.setTransform(-105.775, 44.9);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA2CAIAAgfIAcgFIAAgpIAFhvIgBAAIhFC8IghAAIhFi8IgBABIAFBuIAAApIAcAFIAAAfIhqAAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIBDAAIBBC7IAAAAIBCi7IBeAAIAAAfIgbAFIAAC3IAbAFIAAAfg"
      );
    this.shape_60.setTransform(-75.875, 44.9);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhsCAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIBVAAQAuAAAZARQAZASAAAjQAAASgJAOQgKAOgSAHQAXAEAMAQQALAQAAAVQAAAlgYATQgYATgtAAgAgeBYIAuAAQAVAAALgIQAKgJAAgSQAAgTgJgJQgJgKgUAAIgyAAgAgegUIAkAAQAVAAALgIQALgJAAgQQAAgRgLgJQgMgJgWABIgiAAg"
      );
    this.shape_61.setTransform(12.825, 44.9);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhkCAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAICuAAIAABGIgoAAIgCgeIhRAAIAABAIBWAAIAAAmIhWAAIAABJIBSAAIACgeIAnAAIAABGg"
      );
    this.shape_62.setTransform(-105.775, 44.9);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f("#111A2C")
      .s()
      .p(
        "ABZCAQgZAAgLgOQgKgNAAgWIAAgOQAAgSgKgMQgKgKgSgBIgpAAIAABEIAcAFIAAAfIhqAAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIBXAAQArAAAZAUQAZAUAAAjQAAATgLAOQgKAPgUAIQAXAGAKAQQAJAPAAAYIAAAMQAAAJAEAEQADAGAIAAIAGABIAAAfgAgkgOIAkAAQAUAAALgJQALgJAAgRQAAgSgLgKQgLgLgUABIgkAAg"
      );
    this.shape_63.setTransform(-130.125, 44.9);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#111A2C")
      .s()
      .p("Ag0CAIAAgfIAbgFIAAi3IgbgFIAAgfIBpAAIAAAfIgcAFIAAC3IAcAFIAAAfg");
    this.shape_64.setTransform(81.7, 44.9);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA0CAIhmisIgBABIAACHIAbAFIAAAfIhqAAIAAgfIAbgFIAAi3IgbgFIAAgfIAbAAIA0AAIBmCrIABAAIAAiHIgbgFIAAgfIBOAAIAcAAIAAAfIgcAFIAADbg"
      );
    this.shape_65.setTransform(103.075, 44.9);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#111A2C")
      .s()
      .p(
        "AhJBhQghgjAAg4IAAgHQAAg6AggjQAgglAzABQAeAAAZAJQAZAKAQAQIAAAzIgmAAIgHgiQgHgGgLgDQgMgEgPAAQghAAgSAZQgTAZAAAnIAAAIQAAAoASAXQATAXAhABQAQAAAJgEQAKgCAFgDIAAgsIgkgCIAAgkIBYAAIAABhQgNANgYAKQgYAKgkgBQgzAAgggig"
      );
    this.shape_66.setTransform(129.325, 44.9);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.shape_40, p: { x: -198.725 } }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_40, p: { x: -198.725 } },
              { t: this.shape_42, p: { x: -172.275 } },
              { t: this.shape_41, p: { x: -147.925 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_40, p: { x: -198.725 } },
              { t: this.shape_42, p: { x: -172.275 } },
              { t: this.shape_41, p: { x: -147.925 } },
              { t: this.shape_43 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_40, p: { x: -198.725 } },
              { t: this.shape_42, p: { x: -172.275 } },
              { t: this.shape_41, p: { x: -147.925 } },
              { t: this.shape_43 },
              { t: this.shape_44 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_40, p: { x: -198.725 } },
              { t: this.shape_42, p: { x: -172.275 } },
              { t: this.shape_41, p: { x: -147.925 } },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_40, p: { x: -198.725 } },
              { t: this.shape_42, p: { x: -172.275 } },
              { t: this.shape_41, p: { x: -147.925 } },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_46, p: { x: -23.15 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_40, p: { x: -198.725 } },
              { t: this.shape_42, p: { x: -172.275 } },
              { t: this.shape_47, p: { x: -147.925 } },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_46, p: { x: -23.15 } },
              { t: this.shape_41, p: { x: 1.025 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_40, p: { x: -198.725 } },
              { t: this.shape_48, p: { x: -172.275 } },
              { t: this.shape_47, p: { x: -147.925 } },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_46, p: { x: -23.15 } },
              { t: this.shape_41, p: { x: 1.025 } },
              { t: this.shape_42, p: { x: 26.425 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_40, p: { x: -198.725 } },
              { t: this.shape_49 },
              { t: this.shape_47, p: { x: -147.925 } },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_46, p: { x: -23.15 } },
              { t: this.shape_41, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_40, p: { x: -198.725 } },
              { t: this.shape_49 },
              { t: this.shape_47, p: { x: -147.925 } },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_46, p: { x: -23.15 } },
              { t: this.shape_41, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_40, p: { x: -198.725 } },
              { t: this.shape_49 },
              { t: this.shape_47, p: { x: -147.925 } },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_46, p: { x: -23.15 } },
              { t: this.shape_41, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_40, p: { x: -198.725 } },
              { t: this.shape_49 },
              { t: this.shape_47, p: { x: -147.925 } },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_46, p: { x: -23.15 } },
              { t: this.shape_41, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_40, p: { x: -198.725 } },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_46, p: { x: -23.15 } },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_46, p: { x: -23.15 } },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_55 },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
              { t: this.shape_46, p: { x: 198.6 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_55 },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
              { t: this.shape_46, p: { x: 198.6 } },
              { t: this.shape_56, p: { x: -130.125 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_55 },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
              { t: this.shape_46, p: { x: 198.6 } },
              { t: this.shape_56, p: { x: -130.125 } },
              { t: this.shape_57, p: { x: -105.775 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_55 },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
              { t: this.shape_46, p: { x: 198.6 } },
              { t: this.shape_56, p: { x: -130.125 } },
              { t: this.shape_57, p: { x: -105.775 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_55 },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
              { t: this.shape_46, p: { x: 198.6 } },
              { t: this.shape_56, p: { x: -130.125 } },
              { t: this.shape_57, p: { x: -105.775 } },
              { t: this.shape_58, p: { x: -75.875 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_55 },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
              { t: this.shape_46, p: { x: 198.6 } },
              { t: this.shape_56, p: { x: -130.125 } },
              { t: this.shape_59, p: { x: -105.775 } },
              { t: this.shape_58, p: { x: -75.875 } },
              { t: this.shape_57, p: { x: -46.875 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_55 },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
              { t: this.shape_46, p: { x: 198.6 } },
              { t: this.shape_56, p: { x: -130.125 } },
              { t: this.shape_59, p: { x: -105.775 } },
              { t: this.shape_60 },
              { t: this.shape_57, p: { x: -46.875 } },
              { t: this.shape_58, p: { x: -16.975 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_55 },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
              { t: this.shape_46, p: { x: 198.6 } },
              { t: this.shape_56, p: { x: -130.125 } },
              { t: this.shape_59, p: { x: -105.775 } },
              { t: this.shape_60 },
              { t: this.shape_57, p: { x: -46.875 } },
              { t: this.shape_58, p: { x: -16.975 } },
              { t: this.shape_61 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_55 },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
              { t: this.shape_46, p: { x: 198.6 } },
              { t: this.shape_56, p: { x: -130.125 } },
              { t: this.shape_62 },
              { t: this.shape_60 },
              { t: this.shape_59, p: { x: -46.875 } },
              { t: this.shape_58, p: { x: -16.975 } },
              { t: this.shape_61 },
              { t: this.shape_57, p: { x: 36.825 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_55 },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
              { t: this.shape_46, p: { x: 198.6 } },
              { t: this.shape_63 },
              { t: this.shape_62 },
              { t: this.shape_60 },
              { t: this.shape_59, p: { x: -46.875 } },
              { t: this.shape_58, p: { x: -16.975 } },
              { t: this.shape_61 },
              { t: this.shape_57, p: { x: 36.825 } },
              { t: this.shape_56, p: { x: 62.225 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_55 },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
              { t: this.shape_46, p: { x: 198.6 } },
              { t: this.shape_63 },
              { t: this.shape_62 },
              { t: this.shape_60 },
              { t: this.shape_59, p: { x: -46.875 } },
              { t: this.shape_58, p: { x: -16.975 } },
              { t: this.shape_61 },
              { t: this.shape_57, p: { x: 36.825 } },
              { t: this.shape_56, p: { x: 62.225 } },
              { t: this.shape_64 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_55 },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
              { t: this.shape_46, p: { x: 198.6 } },
              { t: this.shape_63 },
              { t: this.shape_62 },
              { t: this.shape_60 },
              { t: this.shape_59, p: { x: -46.875 } },
              { t: this.shape_58, p: { x: -16.975 } },
              { t: this.shape_61 },
              { t: this.shape_57, p: { x: 36.825 } },
              { t: this.shape_56, p: { x: 62.225 } },
              { t: this.shape_64 },
              { t: this.shape_65 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_55 },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
              { t: this.shape_46, p: { x: 198.6 } },
              { t: this.shape_63 },
              { t: this.shape_62 },
              { t: this.shape_60 },
              { t: this.shape_59, p: { x: -46.875 } },
              { t: this.shape_58, p: { x: -16.975 } },
              { t: this.shape_61 },
              { t: this.shape_57, p: { x: 36.825 } },
              { t: this.shape_56, p: { x: 62.225 } },
              { t: this.shape_64 },
              { t: this.shape_65 },
              { t: this.shape_66 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_49 },
              { t: this.shape_53 },
              { t: this.shape_43 },
              { t: this.shape_44 },
              { t: this.shape_45 },
              { t: this.shape_55 },
              { t: this.shape_47, p: { x: 1.025 } },
              { t: this.shape_48, p: { x: 26.425 } },
              { t: this.shape_42, p: { x: 52.175 } },
              { t: this.shape_50 },
              { t: this.shape_51 },
              { t: this.shape_52 },
              { t: this.shape_41, p: { x: 136.975 } },
              { t: this.shape_40, p: { x: 172.575 } },
              { t: this.shape_46, p: { x: 198.6 } },
              { t: this.shape_63 },
              { t: this.shape_62 },
              { t: this.shape_60 },
              { t: this.shape_59, p: { x: -46.875 } },
              { t: this.shape_58, p: { x: -16.975 } },
              { t: this.shape_61 },
              { t: this.shape_57, p: { x: 36.825 } },
              { t: this.shape_56, p: { x: 62.225 } },
              { t: this.shape_64 },
              { t: this.shape_65 },
              { t: this.shape_66 },
            ],
          },
          106
        )
        .to({ state: [] }, 1)
        .wait(29)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-532.9, -29.4, 1338.6999999999998, 280.2);

  (lib.slider = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // bar
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("rgba(0,0,0,0.2)")
      .ss(10, 1, 1)
      .p("Egp0AAAMBTpAAA");
    this.shape.setTransform(-23.2, 2.95);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // container
    this.bar = new lib.bar();
    this.bar.name = "bar";
    this.bar.setTransform(-22.8, -18.3, 0.9194, 1.6714, 0, 0, 0, -0.4, -0.2);
    this.bar.alpha = 0.1016;

    this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(
    -298.9,
    -24.2,
    551.5999999999999,
    50.099999999999994
  );

  (lib.playpausebtn = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    this.isSingleFrame = false;
    // timeline functions:
    this.frame_0 = function () {
      if (this.isSingleFrame) {
        return;
      }
      if (this.totalFrames == 1) {
        this.isSingleFrame = true;
      }
      this.playButton.visible = false;
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

    // pause_btn
    this.pauseButton = new lib.pauseBtn();
    this.pauseButton.name = "pauseButton";
    this.pauseButton.setTransform(34.65, 2.5);
    new cjs.ButtonHelper(this.pauseButton, 0, 1, 1);

    this.timeline.addTween(cjs.Tween.get(this.pauseButton).wait(1));

    // play_btn
    this.playButton = new lib.playBtn();
    this.playButton.name = "playButton";
    this.playButton.setTransform(37.45, 2.65);
    new cjs.ButtonHelper(this.playButton, 0, 1, 1);

    this.timeline.addTween(cjs.Tween.get(this.playButton).wait(1));

    // background
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(236,242,242,0.098)")
      .s()
      .p("AkcEBIAAoBII5AAIAAIBg");
    this.shape.setTransform(36.175, 0.975);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(7.7, -24.7, 57, 51.4);

  (lib.dontworry = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // world_records
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#48A9A6")
      .s()
      .p("AgbBqIAAgzIA3AAIAAAzgAgbg2IAAgzIA3AAIAAAzg");
    this.shape.setTransform(170.975, 326.65);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#48A9A6")
      .s()
      .p(
        "Ag7CIQgcgLgRgTIAAg7IArAAIAGAoQAKAHAOAFQAPAEARAAQAXAAAMgJQANgKAAgQQAAgQgMgKQgLgKgcgJQgzgPgagTQgagUAAgjQAAgiAdgWQAdgWAtgBQAgAAAbAKQAbAKASAQIAAA7IgrAAIgHgnQgIgFgOgEQgOgDgQAAQgXAAgNAKQgMAKAAAPQAAAPANAJQANAJAgALQAwANAYAUQAYAWAAAjQAAAkgdAVQgdAVgvAAQghAAgbgKg"
      );
    this.shape_1.setTransform(154.6, 322.975);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#48A9A6")
      .s()
      .p(
        "Ah7COIAAgiIAegGIAAjLIgegGIAAgiIAeAAIBhAAQA0AAAiAhQAiAhAAA1IAAAuQAAA0giAhQgiAhg0AAgAgkBjIAlAAQAfAAARgVQASgVAAghIAAgvQAAghgSgUQgRgVgfAAIglAAg"
      );
    this.shape_2.setTransform(128.025, 322.975);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#48A9A6")
      .s()
      .p(
        "ABiCOQgbAAgLgPQgMgPAAgYIAAgQQAAgVgLgLQgLgMgUgBIguAAIAABLIAfAGIAAAiIh2AAIAAgiIAegGIAAjLIgegGIAAgiIAeAAIBhAAQAwAAAcAWQAbAWAAAnQAAAWgMAQQgLAPgWAJQAZAIALARQALARAAAaIAAAOQAAAKAEAFQADAFAJABIAHABIAAAigAgogQIAnAAQAYAAAMgKQALgKAAgTQAAgTgLgMQgMgLgXAAIgoAAg"
      );
    this.shape_3.setTransform(100.95, 322.975);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhcBqQgkgpAAg/IAAgDQAAg+AkgpQAjgpA5AAQA5AAAkApQAkApAAA+IAAADQAAA/gkApQgkAog5AAQg5AAgjgogAg1hJQgSAbAAAtIAAADQAAAtASAcQASAbAjAAQAkAAASgbQASgcAAgtIAAgDQAAgtgTgbQgRgcgkAAQgkAAgRAcg"
      );
    this.shape_4.setTransform(72.95, 322.975);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhPBrQglgoAAg+IAAgJQAAg+AlgnQAkgoA4AAQAiAAAaAMQAbAMARAUIAAA4IgqAAIgHgmQgHgJgNgEQgNgFgRAAQglAAgUAbQgUAbAAArIAAAJQAAArAUAbQAUAcAjAAQARAAAOgFQAOgFAHgJIAHglIAqAAIAAA4QgRAUgbAMQgaALgiAAQg4AAgkgng"
      );
    this.shape_5.setTransform(45.55, 322.975);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhwCOIAAgiIAfgGIAAjLIgfgGIAAgiIAfAAIDBAAIAABOIgsAAIgCgiIhaAAIAABHIBfAAIAAArIhfAAIAABSIBaAAIADgiIArAAIAABNg"
      );
    this.shape_6.setTransform(19.65, 322.975);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#48A9A6")
      .s()
      .p(
        "ABiCOQgbAAgMgPQgLgPAAgYIAAgQQAAgVgLgLQgLgMgUgBIguAAIAABLIAeAGIAAAiIh1AAIAAgiIAegGIAAjLIgegGIAAgiIAeAAIBhAAQAwAAAcAWQAbAWAAAnQAAAWgLAQQgMAPgWAJQAZAIALARQALARAAAaIAAAOQAAAKAEAFQADAFAJABIAHABIAAAigAgogQIAnAAQAXAAAMgKQANgKAAgTQAAgTgNgMQgMgLgWAAIgoAAg"
      );
    this.shape_7.setTransform(-6.3, 322.975);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#48A9A6")
      .s()
      .p(
        "Ah7COIAAgiIAegGIAAjLIgegGIAAgiIAeAAIBhAAQA0AAAiAhQAiAhAAA1IAAAuQAAA0giAhQgiAhg0AAgAgkBjIAlAAQAfAAARgVQASgVAAghIAAgvQAAghgSgUQgRgVgfAAIglAAg"
      );
    this.shape_8.setTransform(-44.075, 322.975);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhqCOIAAgiIAegGIAAjLIgegGIAAgiIAeAAIA5AAIAeAAIAAAiIgeAGIAADIIBPAAIAEgkIArAAIAABPg"
      );
    this.shape_9.setTransform(-69.2, 322.975);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#48A9A6")
      .s()
      .p(
        "ABiCOQgbAAgMgPQgLgPAAgYIAAgQQAAgVgLgLQgLgMgUgBIguAAIAABLIAeAGIAAAiIh1AAIAAgiIAegGIAAjLIgegGIAAgiIAeAAIBhAAQAwAAAcAWQAbAWAAAnQAAAWgLAQQgMAPgWAJQAZAIALARQALARAAAaIAAAOQAAAKAEAFQAEAFAIABIAHABIAAAigAgogQIAnAAQAXAAAMgKQANgKAAgTQAAgTgNgMQgMgLgWAAIgoAAg"
      );
    this.shape_10.setTransform(-94.6, 322.975);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhcBqQgkgpAAg/IAAgDQAAg+AkgpQAjgpA5AAQA5AAAkApQAkApAAA+IAAADQAAA/gkApQgjAog6AAQg5AAgjgogAg1hJQgSAbAAAtIAAADQAAAtASAcQASAbAjAAQAjAAATgbQASgcAAgtIAAgDQAAgtgTgbQgRgcgkAAQgjAAgSAcg"
      );
    this.shape_11.setTransform(-122.6, 322.975);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AA1COIg0i6IgBAAIgzC6Ig1AAIg7j2IgXgDIAAgiIBpAAIAAAiIgaAFIAgCbIABAAIA2jCIApAAIA2DCIABAAIAhibIgagFIAAgiIBoAAIAAAiIgXADIg7D2g"
      );
    this.shape_12.setTransform(-156.05, 322.975);

    this.instance = new lib.worldrecords("synched", 0);
    this.instance.setTransform(0, 321.65);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .to(
          {
            state: [
              { t: this.shape_12 },
              { t: this.shape_11 },
              { t: this.shape_10 },
              { t: this.shape_9 },
              { t: this.shape_8 },
              { t: this.shape_7 },
              { t: this.shape_6 },
              { t: this.shape_5 },
              { t: this.shape_4 },
              { t: this.shape_3 },
              { t: this.shape_2 },
              { t: this.shape_1 },
              { t: this.shape },
            ],
          },
          29
        )
        .to({ state: [{ t: this.instance }] }, 80)
        .to({ state: [{ t: this.instance }] }, 79)
        .to({ state: [] }, 1)
        .wait(2)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(109)
        .to({ _off: false }, 0)
        .to({ y: -125.7 }, 79)
        .to({ _off: true }, 1)
        .wait(2)
    );

    // yet
    this.instance_1 = new lib.yet("synched", 0);
    this.instance_1.setTransform(0, 176.5);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(109)
        .to({ _off: false }, 0)
        .to({ y: -270.85 }, 79)
        .to({ _off: true }, 1)
        .wait(2)
    );

    // us_are
    this.instance_2 = new lib.mostof("synched", 0);
    this.instance_2.setTransform(425, 0);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(59)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ x: 386.45 }, 0)
        .wait(1)
        .to({ x: 347.85 }, 0)
        .wait(1)
        .to({ x: 309.3 }, 0)
        .wait(1)
        .to({ x: 270.7 }, 0)
        .wait(1)
        .to({ regX: -113.2, scaleX: 0.8978, scaleY: 1.3378, x: 39.9 }, 0)
        .wait(1)
        .to({ regX: -124.4, scaleX: 0.7338, scaleY: 1.5608, x: 30.05 }, 0)
        .wait(1)
        .to({ regX: 0, scaleX: 1, scaleY: 1, x: 155 }, 0)
        .wait(43)
        .to({ startPosition: 0 }, 0)
        .to({ y: -447.35 }, 79)
        .to({ _off: true }, 1)
        .wait(2)
    );

    // most_of
    this.instance_3 = new lib.usare("synched", 0);
    this.instance_3.setTransform(-457.5, 0);
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(59)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ x: -410.35 }, 0)
        .wait(1)
        .to({ x: -363.2 }, 0)
        .wait(1)
        .to({ x: -316.05 }, 0)
        .wait(1)
        .to({ x: -268.95 }, 0)
        .wait(1)
        .to({ regX: 141.8, scaleX: 0.8964, scaleY: 1.3378, x: 10 }, 0)
        .wait(1)
        .to({ regX: 147.7, scaleX: 0.8112, scaleY: 1.5608, x: 20.1 }, 0)
        .wait(1)
        .to({ regX: 0, scaleX: 1, scaleY: 1, x: -127.5 }, 0)
        .wait(43)
        .to({ startPosition: 0 }, 0)
        .to({ y: -447.35 }, 79)
        .to({ _off: true }, 1)
        .wait(2)
    );

    // dont
    this.instance_4 = new lib.Tween25("synched", 0);
    this.instance_4.setTransform(0, -210);
    this.instance_4._off = true;

    this.instance_5 = new lib.Tween26("synched", 0);
    this.instance_5.setTransform(0, -35);
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(29)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ y: -101.65 }, 0)
        .wait(1)
        .to({ y: -48.35 }, 0)
        .wait(1)
        .to({ regY: -0.1, scaleX: 1.0738, scaleY: 0.6639, y: -21 }, 0)
        .wait(1)
        .to({ scaleX: 1.275, scaleY: 0.3681, y: -13 }, 0)
        .to({ _off: true }, 1)
        .wait(157)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(34)
        .to({ _off: false }, 0)
        .wait(25)
        .to({ startPosition: 0 }, 0)
        .to({ scaleX: 0.0518, x: 30 }, 5)
        .to({ _off: true }, 1)
        .wait(126)
    );

    // worry
    this.instance_6 = new lib.worry("synched", 0);
    this.instance_6.setTransform(0, 0, 4.0435, 4.0435);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .to({ scaleX: 1, scaleY: 1 }, 2)
        .wait(27)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ y: 25 }, 0)
        .wait(1)
        .to({ y: 35 }, 0)
        .wait(1)
        .to({ y: 52 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ y: 45 }, 0)
        .wait(25)
        .to({ startPosition: 0 }, 0)
        .to({ scaleX: 0.0518, x: 30 }, 5)
        .to({ _off: true }, 1)
        .wait(126)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(
    -1007.4,
    -497.8,
    2015.1,
    847.9000000000001
  );

  (lib.canon = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // cluster3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#111A2C")
      .s()
      .p(
        "AA9B6IgGgDIAAgBQgFgEgCgHQgBgHADgHIADgEQAEgDAKgBIAAgCQAJACAFAHQAGAHgCAJQgCAGgFAEQgGAFgGAAIgFgBgAhDBWQgLgCgEgJQgEgJAEgHIABgCIADgFQAEgDAJgBIAAgCIAMAGQAEAEACAEIABAEQACALgMAIIgFADIgDAAIgDAAgAg+hTQgEgBgEgDQgEgDgCgFQgDgKAGgIQAGgIAKABIAAgCQAPAFADAKIAAABQABAFgBAFIgCAEQgFAGgHADIgEABg"
      );
    this.shape.setTransform(-100.3089, 51.52);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhnBUQgDgDgCgFQgCgHAEgIIAFgGQADgCAJgBIAAgCQAJAEAEADQAGAFAAAHQABAJgJAHIgHAEIgFABQgHAAgGgGgAAhBPQgDgDgJgEIAAACQgJABgEACIgDAEQgCgCgBgDQgCgHADgIIAFgGQAEgCAJgBIAAgCQAJAEADADQAGAFABAHQAAAGgEAGIgDgCgABTBDQgGgBgEgFQgFgFAAgGQgBgGADgGIADgEQADgDALgBIAAgCQAKAAAHAIQAGAFAAAIQAAAFgFAFQgGAJgKAAIgGgBgAhRAIQgFgCgDgEQgEgEAAgGQgBgEACgEIACgFIADgDQAGgFAHABIAAgCQAGACAFADQAFAEACAHQACAGgDAGQgDAFgGADQgFADgFAAIgFgBgAgOg3QgDgDgCgFQABgFgBgFIAAgBIABgEIAFgGQAEgCAJgBIAAgCIADACIAIAFQAGAFABAHQAAAJgJAHIgHAEIgDABQgHAAgGgGg"
      );
    this.shape_1.setTransform(-102.3114, 48.2048);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AgQBnQgFgFAAgHQgBgEABgEQgFABgFgCIgBgBQgJgFgDgJQgDgKAGgIQAGgKALACIAAgCQAIADAEAEQAGAGABAHQAAAFgCADIgBAFIAGgBIAAgCQAGABAFAFQADADACAEIABAFQABAHgEAHQgFAGgHABIgCAAQgJAAgFgFgAheAuQgHgEgCgIQgBgJAGgHQAGgHAJABIAAgCQALACAFAIIACAHQACAHgEAGIgEAFIgDACIgCABIgBABIgBAAIgBAAIgEABQgGAAgFgEgABHAkQgDgCgCgGQgCgGAEgIIABgCIAEgEQADgDAJgBIAAgCQAJAEAEADIACADQAEAEAAAGQABAIgJAIIgHAEIgFAAQgHAAgGgGgAAfAQIgMgGIAAACQgKABgDADIgEAEIgBACIgBgDQAAgHACgHIADgEQAEgCAKgBIAAgCQAJACAFAGQAGAHgCAJIgBADQgCgEgDgDgAhIgXQgMgCgDgMQgCgHACgGQACgFADgDQADgCALgBIAAgCIABAAQAHADAEADQAHAGgBAKQgBAJgIAGIgFACIgDABIgCAAIgDAAgABDhHIgCgBQgFgEgCgHQgBgJAGgHQAGgHAJABIAAgCQAPADADAOQADAKgJAIQgDADgFABIgFAAQgFAAgFgDg"
      );
    this.shape_2.setTransform(-108.7637, 55.1882);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhZB1QgGgFgBgIIACgIQACgFADgCQACgCAEgBIAEgBIABAAIABAAIABAAIAAgBIACAAIAHADIAGAFQAGAIgDAIQgBAFgGAFIgBAAQgEAEgCAAIgFABQgGAAgGgGgABDgFQgHgEgCgIQgBgJAGgHIACgCIACABQAHAFAIgDQAFgBADgDQAFAFABAHQADAKgJAIQgDADgFABIgFABQgFAAgFgEgAATgWIgFgJQgBgFADgIQACgEADgCQADgDAKgBIAAgCQAJADAFAGQAHAIgDAIIgFAJIgIAFIgGABQgHAAgHgGgAgfgzQgDgEgCgFQgCgFADgIQACgFADgCQADgCAKgBIAAgCQAHACAFAEQAFAFABAHQABAEgCAFQgDgDgHgCIAAACQgGgBgGAFIgEADIgCAFIgDgCgABDhTIAHgEQAJgHgBgJQAAgHgGgFIgIgFIACAAIAAgCQAQAEADAMQABAGgDAGQgDAGgFADQgFADgEAAIgDgBg"
      );
    this.shape_3.setTransform(-108.7728, 51.5141);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to(
          {
            state: [
              { t: this.shape_3 },
              { t: this.shape_2 },
              { t: this.shape_1 },
              { t: this.shape },
            ],
          },
          94
        )
        .to(
          {
            state: [
              { t: this.shape_3 },
              { t: this.shape_2 },
              { t: this.shape_1 },
              { t: this.shape },
            ],
          },
          113
        )
        .to({ state: [] }, 1)
        .wait(63)
    );

    // cluster1
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AgxCEQgGgFgBgIIACgIQACgFADgCQADgDAKgBIAAgCQAJADAGAGQAGAIgDAIQgBAFgGAFQgFAEgCAAIgFABQgGAAgGgGgAB3BmQgFgFgBgHIABgIQACgFADgCQAEgEAKgBIAAgBQAIACAGAGQAHAIgDAIQgCAGgFAEQgFAEgDABIgEAAQgGAAgHgGgAAhgCIgIgDQgFgEgCgGQgDgJAGgIQAHgIAJABIAAgCQAIACAGAGQAGAHgCAIQAAAFgEAFIgIAFIgCABIgEABgAiKgnQgFgBgDgEQgEgFgBgHQAAgHADgFIAEgEQAGgFAGACIAAgDQAQAFADAMQABAGgDAGQgDAGgFADQgFACgFAAIgFgBgAgyhnQgDgCgCgGQgCgGAEgIIAFgGQADgDAJgBIAAgCQAJAEAEADQAGAFAAAIQABAIgJAIIgHAEIgFAAQgHAAgGgGg"
      );
    this.shape_4.setTransform(-84.0808, 1.4391);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#333333")
      .s()
      .p(
        "AicBUQgFgFAAgGQgBgHADgGIAEgEQADgDAKgBIAAgBQAHAAAFAFQAGAGAAAHQABAHgEAGQgFAGgHACIgDAAQgJAAgFgGgAgJAvQgDgCgCgGQgCgGAEgIIAFgGQADgDAIgBIAAgCQAJAEAEADIABACQAFAEAAAHQABAGgGAGIgDAEIgHAEIgFAAQgGAAgGgGgACKAtQgCAAgDgDQgIgGgBgJIACgIIAFgHQADgDAKgBIAAgCQAPAFADALQADAMgLAIQgGAEgFAAIgFgBgABEgxQgMAAgHgKQgGgLAIgKQAFgHAIAAIADABIAAgDIAIACIAFADQAHAFABAGQADAKgHAHQgGAHgIAAIgCAAg"
      );
    this.shape_5.setTransform(-82.2644, 2.5382);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ABgCOQgHgFgBgIQgCgJAGgHQAGgHAJABIAAgCQAQAEADANQACAKgJAIQgDADgEABIgGABQgFAAgFgDgAgfAdIgCgCQAGgGAAgHQgBgGgEgFIADgDQADgBAJgBIAAAAIAAgCIAHADIAGADQAFAFAAAHQABAJgIAHIgHAEIgFABQgHAAgGgGgAAUglQgFgFgBgHIABgIQACgFADgCQAEgEAKgBIAAgBQAIACAGAGQAHAIgDAIQgCAGgFAEQgFAEgDABIgEABQgHAAgGgHgAh3gzQgDgDgCgFQgCgHADgIIAFgGQAEgCAJgBIAAgCQAJAEADADQAGAFABAHQAAAJgJAHIgHAEIgEABQgHAAgGgGgAgkhpIgHgDQgGgDgBgHQgEgJAGgIQAGgIAKABIAAgCQARAFACAMQABAHgEAGQgEAGgHADQgCABgDAAgAANhpIgFgCQgGgFgCgIQAAgIADgGIADgEQAGgFAHABIAAgCQAQAFACALQADANgLAHIgFADIgJgCIAAACIgCAAg"
      );
    this.shape_6.setTransform(-77.1092, 4.3667);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AASBTQgEgEgDgHIgBgGIACgGQACgGACgCQADgDALgBIAAgCQAHACAGAFQAGAGAAAIIgCAGQgEAJgIADIgHABQgFAAgFgDgAggAbQgIgEgDgCQgDgEgBgEQgCgFADgHIADgFQADgFAMgBIAAgCQAJADAFAFQAGAGgCAJQgBAKgMAFIgFABgAAXgxIAAACIgBAAIgEgCQgFgFgCgHQgBgIADgGIABgCIAHgFIAJgCIAAgBQAJABAFAHQAGAHgCAJQgBAFgGAGQgGAEgGABIgGgEg"
      );
    this.shape_7.setTransform(-81.1694, 8.8181);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AASBTQgEgEgDgHIgBgGIACgGQACgGACgCQADgDALgBIAAgCQAHACAGAFQAGAGAAAIIgCAGQgEAJgIADIgHABQgFAAgFgDgAggAbQgIgEgDgCQgDgEgBgEQgCgFADgHIADgFQADgFAMgBIAAgCQAJADAFAFQAGAGgCAJQgBAKgMAFIgFABgAAXgxIAAACIgFgCQgFgFgCgHQgBgIADgGIABgCIAIgFIAIgCIAAgBQAJABAFAHQAGAHgCAJQgBAFgGAGQgGAEgGABIgGgEg"
      );
    this.shape_8.setTransform(-119.4694, 11.7681);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#333333")
      .s()
      .p(
        "AicBUQgFgFAAgGQgBgHADgGIAEgEQADgDAKgBIAAgBQAHAAAFAFQAGAGAAAHQABAHgEAGQgFAGgHACIgDAAQgJAAgFgGgAgJAvQgDgCgCgGQgCgGAEgIIAFgGQADgDAIgBIAAgCQAJAEAEADIABACQAFAEAAAHQABAGgGAHIgDADIgHAEIgFAAQgGAAgGgGgACKAtQgCAAgDgDQgIgGgBgJIACgIIAFgHQADgDAKgBIAAgCQAPAFADALQADAMgLAIQgGAEgFAAIgFgBgABEgxQgMAAgHgKQgGgLAIgKQAFgHAIABIADAAIAAgDQAEABAEACIAFACQAHAFABAGQADAKgHAHQgGAHgIAAIgCAAg"
      );
    this.shape_9.setTransform(-120.5644, 5.4882);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ABgCOQgHgFgBgIQgCgJAGgHQAGgHAJABIAAgCQAQAEADANQACAKgJAIQgDADgEABIgGABQgFAAgFgDgAgfAdIgBgCQAFgGAAgHQgBgGgEgFIADgDQADgBAJgBIAAgCIAHADIAGADQAFAFAAAHQABAJgIAHIgHAEIgFABQgHAAgGgGgAAUglQgFgFgBgHIABgIQACgFADgCQAEgEAKgBIAAgBQAIACAGAGQAHAIgDAIQgCAGgFAEQgFAEgDABIgEABQgHAAgGgHgAh3gzQgDgDgCgFQgCgHADgIIAFgGQAEgCAJgBIAAgCQAJAEADADQAGAFABAHQAAAJgJAHIgHAEIgEABQgHAAgGgGgAgkhpIgHgDQgGgDgBgHQgEgJAGgIQAGgIAKABIAAgCQARAFACAMQABAHgEAGQgEAGgHADQgCABgDAAgAAPhrIAAACIgCAAIgFgCQgGgFgCgIQAAgIADgGIADgEQAGgFAHABIAAgCQAQAFACALQADANgLAHIgFADQgEgCgFAAg"
      );
    this.shape_10.setTransform(-115.4092, 7.3167);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AgxCEQgGgFgBgIIACgIQACgFADgCQADgDAKgBIAAgCQAJADAGAGQAGAIgDAIQgBAFgGAFQgFAEgCAAIgFABQgGAAgGgGgAB3BmQgFgFgBgHIABgIQACgFADgCQAEgEAKgBIAAgBQAIACAGAGQAHAIgDAIQgCAGgFAEQgFAEgDABIgEAAQgGAAgHgGgAAhgCIgIgDQgFgEgCgGQgDgJAGgIQAHgIAJABIAAgCQAIACAGAGQAGAHgCAIQgBAGgDAEIgIAFIgCABIgEABgAiKgnQgFgBgDgEQgEgFgBgHQAAgHADgFIAEgEQAGgFAGACIAAgDQAQAFADAMQABAGgDAGQgDAGgFADQgFACgFAAIgFgBgAgyhnQgDgCgCgGQgCgGAEgIIAFgGQADgDAJgBIAAgCQAJAEAEADQAGAFAAAIQABAIgJAIIgHAEIgFAAQgHAAgGgGg"
      );
    this.shape_11.setTransform(-122.3808, 4.3891);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to(
          {
            state: [
              { t: this.shape_7 },
              { t: this.shape_6 },
              { t: this.shape_5 },
              { t: this.shape_4 },
            ],
          },
          69
        )
        .to(
          {
            state: [
              { t: this.shape_11 },
              { t: this.shape_10 },
              { t: this.shape_9 },
              { t: this.shape_8 },
            ],
          },
          25
        )
        .to(
          {
            state: [
              { t: this.shape_11 },
              { t: this.shape_10 },
              { t: this.shape_9 },
              { t: this.shape_8 },
            ],
          },
          113
        )
        .to({ state: [] }, 1)
        .wait(63)
    );

    // cluster2
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#111A2C")
      .s()
      .p(
        "AiNBMQgDgCgCgGQgCgGADgIIAFgGQAEgDAJgBIAAgCQAJAEADADQAGAFABAIQAAAIgJAIIgHAEIgEABQgHAAgGgHgAB1AaIgEgEQgFgIADgIQAAgEAEgDQAGgGAJABIAAgBIAAgBIAHADIAHAFIAAABQAGAIgDAIIgEAHIgIAGIgGABQgGAAgGgFgAgmAeQgFgCgDgEQgEgFgBgGQAAgHADgGIAEgCQAGgFAGABIAAgCQAQAEADALQABAGgDAGQgDAGgFADQgFADgFAAIgFgBgAg2gyQgHgJAEgKQABgEADgCQAGgGAIACIAAgDQAJADAGAGQAGAIgDAIQAAADgEAFQgGAFgDABIgGACQgIAAgGgJg"
      );
    this.shape_12.setTransform(-48.4114, -1.8952);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ACPCYIgHgDQgEgDgDgIIgBgGIACgFQABgGADgDQADgCALgCIAAgCQAKADAEAGQAGAHgCAIQgBAKgMAGIgFABgAiuAVQgFgFgBgHIABgIQACgFADgBQAEgEAKgBIAAgCQAIADAGAGQAHAHgDAIQgCAFgFAFQgFAEgDABIgEAAQgHAAgGgGgABcATQgJgDgCgEIgDgGIgBgGIABgFQABgFAEgEQADgCAKgBIAAgCQAJABAFAHQAFAFAAAGIAAADQgBAIgIAFIgFADIgFABgACVhDQgFgEgBgIIABgIQACgFADgCQAEgEAKAAIAAgCQAIACAGAGQAHAJgDAHQgCAGgFAEQgFAFgDAAIgEABQgHAAgGgHgACXhxIgIgDQgFgEgBgFQgDgIAEgIIABgCQAHgIAJABIAAgBQAJABAFAHQAGAHgBAHQgBAJgJAGIgEABIgFABg"
      );
    this.shape_13.setTransform(-58.3526, 2.9);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AjICYQgDgDgCgFQgCgHADgIIAFgGQAEgCAJgBIAAgCQAJAEADADQAGAFABAHQAAAJgJAHIgHAEIgEABQgHAAgGgGgACJAmQgEgBgDgDQgEgFgBgGQgBgEABgEIABgDIABgCIADgEQAEgDAKgBIAAgCQAJACAGAHQAGAJgDAIIgEAHIAAAAIgCACQgGAFgHAAIgGgCgABWATIgEgGQgBgCAAgDQgBgHADgFIAEgEIAfATIgDAGQgFAGgHACIgDAAQgJAAgFgGgABkgMIAAgBQAHAAAFAFQAGAGAAAGQgWgPAEgBgACuggIgBAAIAGgCIAIgFIAEgHQADgJgGgIIAAAAIAAgCQAKACAFAHQAGAHgDAJIgFAIIgIAGIgGABQgHAAgGgHgAAzhDIgEgEQgFgIACgIQABgEADgEQAGgGAJABIAAgCQAKADAFAHQAGAIgDAIIgFAHIgIAGIgGABQgGAAgFgFgABQh+IgEgEQgFgIADgIQAAgEAEgEIAEgDQgDAHACAIQACAFAFAEIAIAEIAEABIAEgBIAEgCIgCADIgIAGIgGABQgGAAgGgFg"
      );
    this.shape_14.setTransform(-52.814, 4.5548);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#48A9A6")
      .s()
      .p(
        "ABwBNIgEAGQgGAFgDABQgLAEgJgLQgHgJAEgKQABgEADgCIAAAAIACgBIAAAAQAFgEAHABIAAgDQAJADAGAGQAGAIgDAIIAAABIAAAAIAqAcIgqgbgAgpAUQgHgEgCgIIAAgDQAIgFABgHIAAgEQAFgDAGABQgLgFgBgNQgCgJAGgHQAFgIAKABIAAgCQAQAHACAJQABADgBAIQgBAHgDAEQgDAEgGACIgDAAIAmAZIAIAFIgBADIgIgEIgegTIgEADQgDAGABAHQAAADACACQgDADgFABIgFABQgFAAgFgEgAiJAQIgIgEQgFgEgCgFQgDgJAGgIQAHgIAJACIAAgCQAIABAGAHQAGAHgCAHQgBAKgNAGIgEABgABIhDIAAACIgFgDQgFgEgBgFQgDgKAFgIQAHgIAJACIAAgCQAJABAFAHQAGAHgBAIQgCAKgMAGIgEABIgIgEg"
      );
    this.shape_15.setTransform(-42.6529, 3.975);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ACPCYIgHgDQgEgDgDgIIgBgGIACgFQABgGADgDQADgCALgCIAAgCQAKADAEAGQAGAHgCAIQgBAKgMAGIgFABgAiuAVQgFgFgBgHIABgIQACgFADgCQAEgDAKgBIAAgCQAIADAGAGQAHAHgDAIQgCAFgFAFQgFAEgDABIgEAAQgHAAgGgGgABcATQgJgDgCgEIgDgGIgBgGIABgFQABgFAEgEQADgCAKgBIAAgCQAJABAFAHQAFAFAAAGIAAADQgBAIgIAFIgFADIgFABgACVhDQgFgEgBgIIABgIQACgFADgCQAEgEAKAAIAAgCQAIACAGAGQAHAJgDAHQgCAGgFAEQgFAFgDAAIgEABQgHAAgGgHgACXhxIgIgDQgFgEgBgFQgDgIAEgHIABgDQAHgIAJABIAAgBQAJABAFAHQAGAHgBAHQgBAJgJAGIgEABIgFABg"
      );
    this.shape_16.setTransform(-61.3526, 27.2);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AjICYQgDgDgCgFQgCgHADgIIAFgGQAEgCAJgBIAAgCQAJAEADADQAGAFABAHQAAAJgJAHIgHAEIgEABQgHAAgGgGgACJAmQgEgBgDgDQgEgFgBgGQgBgEABgEIABgDIABgCIADgEQAEgDAKgBIAAgCQAJACAGAHQAGAJgDAIIgEAHIAAAAIgCACQgGAFgHAAIgGgCgABWATIgEgGQgBgCAAgDQgBgHADgFIAEgEIAfATIgDAGQgFAGgHACIgDAAQgJAAgFgGgABkgMIAAgBQAHAAAFAFQAGAGAAAGQgWgPAEgBgACuggIgBAAIAGgCIAIgFIAEgHQADgJgGgIIAAAAIAAgCQAKACAFAHQAGAHgDAJIgFAIIgIAGIgGABQgHAAgGgHgAAzhDIgEgEQgFgIACgIQABgEADgEQAGgGAJABIAAgCQAKADAFAHQAGAIgDAIIgFAHIgIAGIgGABQgGAAgFgFgABQh+IgEgEQgFgIADgIQAAgEAEgEIAEgDQgDAHACAIQACAFAFAEQAFADADABIAEABIAEgBIAEgCIgCADIgIAGIgGABQgGAAgGgFg"
      );
    this.shape_17.setTransform(-44.014, 56.8548);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ACPCYIgHgDQgEgDgDgIIgBgFIACgGQABgGADgDQADgCALgBIAAgDQAKADAEAGQAGAGgCAJQgBAKgMAGIgFABgAiuAVQgFgFgBgHIABgIQACgEADgDQAEgDAKgBIAAgCQAIADAGAGQAHAHgDAIQgCAFgFAFQgFAEgDABIgEAAQgHAAgGgGgABcATQgJgDgCgEIgDgGIgBgGIABgFQABgFAEgEQADgCAKgBIAAgCQAJACAFAGQAFAFAAAGIAAADQgBAHgIAGIgFADIgFABgACVhDQgFgEgBgIIABgIQACgFADgCQAEgDAKgBIAAgCQAIACAGAHQAHAIgDAHQgCAGgFAEQgFAFgDAAIgEABQgHAAgGgHgACXhxQgDAAgFgDQgFgEgBgFQgDgIAEgIIABgCQAHgIAJABIAAgBQAJABAFAHQAGAGgBAIQgBAJgJAFIgEACIgFABg"
      );
    this.shape_18.setTransform(-49.5526, 55.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to(
          {
            state: [
              { t: this.shape_15, p: { x: -42.6529, y: 3.975 } },
              { t: this.shape_14, p: { x: -52.814, y: 4.5548 } },
              { t: this.shape_13 },
              { t: this.shape_12, p: { x: -48.4114, y: -1.8952 } },
            ],
          },
          44
        )
        .to(
          {
            state: [
              { t: this.shape_12, p: { x: -51.4114, y: 22.4048 } },
              { t: this.shape_16 },
              { t: this.shape_14, p: { x: -55.814, y: 28.8548 } },
              { t: this.shape_15, p: { x: -45.6529, y: 28.275 } },
            ],
          },
          25
        )
        .to(
          {
            state: [
              { t: this.shape_18 },
              { t: this.shape_17 },
              { t: this.shape_15, p: { x: -33.8529, y: 56.275 } },
              { t: this.shape_12, p: { x: -39.6114, y: 50.4048 } },
            ],
          },
          25
        )
        .to(
          {
            state: [
              { t: this.shape_18 },
              { t: this.shape_17 },
              { t: this.shape_15, p: { x: -33.8529, y: 56.275 } },
              { t: this.shape_12, p: { x: -39.6114, y: 50.4048 } },
            ],
          },
          113
        )
        .to({ state: [] }, 1)
        .wait(63)
    );

    // Layer_1
    this.instance = new lib.Tween29("synched", 0);
    this.instance.setTransform(67.5, 0);

    this.instance_1 = new lib.Tween30("synched", 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 29)
        .to({ state: [{ t: this.instance_1 }] }, 178)
        .to({ state: [] }, 1)
        .to({ state: [] }, 43)
        .wait(20)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance).to({ _off: true, x: 0 }, 29).wait(242)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-137.5, -15.4, 243.3, 88.10000000000001);

  (lib.Symbol10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // confetti
    this.instance = new lib.canon("synched", 0);
    this.instance.setTransform(280.45, -98.4, 1, 1, 0, 0, 0, 0.3, -0.1);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(29)
        .to({ _off: false }, 0)
        .wait(111)
        .to({ startPosition: 111 }, 0)
        .to({ _off: true }, 1)
        .wait(111)
    );

    // mnemonics
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AgrBjQgUgHgNgOIAAgsIAgAAIAEAeQAHAFALADQAKAEANAAQARAAAJgHQAJgHAAgMQAAgMgJgIQgIgHgVgGQglgLgTgOQgTgPAAgZQAAgaAWgQQAVgQAhAAQAXAAATAHQAUAHAOANIAAAqIggAAIgFgcQgGgEgKgCQgKgDgMAAQgQAAgKAHQgJAIAAALQAAALAKAGQAJAHAYAIQAiAJASAPQASAQAAAaQAAAagVAQQgWAPgiAAQgYAAgUgIg"
      );
    this.shape.setTransform(84.925, 0.975);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "Ag6BOQgbgdAAgtIAAgGQAAguAbgdQAagdAqAAQAYAAATAJQAUAIANAPIAAApIgfAAIgFgcQgGgGgJgEQgKgDgMAAQgbAAgOAUQgPATAAAgIAAAHQAAAfAPAUQAOAUAaAAQAMAAALgDQAKgEAFgGIAFgcIAfAAIAAApQgNAPgTAJQgUAIgYAAQgpAAgbgdg"
      );
    this.shape_1.setTransform(66.075, 0.975);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#F6AE2D")
      .s()
      .p("AgqBoIAAgZIAWgEIAAiVIgWgEIAAgZIBVAAIAAAZIgWAEIAACVIAWAEIAAAZg");
    this.shape_2.setTransform(51.675, 0.975);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AAqBoIhSiLIgBAAIAABuIAWAEIAAAZIhXAAIAAgZIAXgEIAAiVIgXgEIAAgZIAXAAIAqAAIBTCLIAAAAIAAhuIgVgEIAAgZIBAAAIAVAAIAAAZIgVAEIAACyg"
      );
    this.shape_3.setTransform(35.35, 0.975);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhEBNQgZgeAAgtIAAgDQAAgtAZgeQAageAqAAQAqAAAbAeQAaAeAAAtIAAADQAAAtgaAeQgaAegrAAQgqAAgagegAgmg2QgNAUgBAhIAAADQABAgANAVQANAUAZAAQAbAAAMgUQAOgVAAggIAAgDQAAgggOgUQgNgVgaAAQgZAAgNAUg"
      );
    this.shape_4.setTransform(13.55, 0.975);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AAsBoIAAgZIAXgEIAAghIAEhbIgBAAIg4CZIgbAAIg4iZIgBABIAEBaIAAAhIAXAEIAAAZIhXAAIAAgZIAWgEIAAiVIgWgEIAAgZIAWAAIA3AAIA1CYIAAAAIA2iYIBNAAIAAAZIgXAEIAACVIAXAEIAAAZg"
      );
    this.shape_5.setTransform(-10.625, 0.975);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AhSBoIAAgZIAXgEIAAiVIgXgEIAAgZIAXAAICOAAIAAA5IghAAIgBgZIhDAAIAAA0IBGAAIAAAgIhGAAIAAA7IBDAAIACgZIAgAAIAAA5g"
      );
    this.shape_6.setTransform(-34.2, 0.975);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AAqBoIhSiLIgBAAIAABuIAWAEIAAAZIhWAAIAAgZIAVgEIAAiVIgVgEIAAgZIAVAAIArAAIBTCLIAAAAIAAhuIgVgEIAAgZIBAAAIAVAAIAAAZIgVAEIAACyg"
      );
    this.shape_7.setTransform(-54.45, 0.975);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AAsBoIAAgZIAXgEIAAghIAEhbIgBAAIg4CZIgbAAIg4iZIgBABIAEBaIAAAhIAXAEIAAAZIhXAAIAAgZIAWgEIAAiVIgWgEIAAgZIAWAAIA3AAIA1CYIAAAAIA2iYIBNAAIAAAZIgXAEIAACVIAXAEIAAAZg"
      );
    this.shape_8.setTransform(-79.625, 0.975);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AhXDHQgogQgbgcIAAhXIBBAAIAJA7QANALAVAGQAVAHAaAAQAjAAARgOQATgOgBgYQABgXgSgPQgQgPgqgMQhLgWgmgdQgmgdAAg0QABgyArggQAqghBCgBQAuAAAoAPQAoAPAbAYIAABWIg/AAIgLg6QgLgGgVgGQgVgFgXAAQgiAAgTAOQgSAPgBAXQABAVATAOQAUAOAvAOQBFAUAkAeQAkAgAAAzQgBA1gqAgQgqAfhGgBQgwABgogQg"
      );
    this.shape_9.setTransform(169.9, 1.95);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#48A9A6")
      .s()
      .p(
        "Ah1CdQg2g7ABhbIAAgNQAAhbA1g6QA1g7BTAAQAxAAAnASQAnARAaAdIAABTIg/AAIgJg4QgMgMgSgHQgUgHgZAAQg1AAgeAoQgdAnAAA/IAAAOQAAA/AdAoQAdAoA1ABQAYgBAVgHQAVgHAKgMIAJg4IA/AAIAABTQgaAdgnARQgnARgxAAQhSAAg2g5g"
      );
    this.shape_10.setTransform(132.15, 1.95);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#48A9A6")
      .s()
      .p("AhVDQIAAgxIAsgJIAAkqIgsgJIAAgzICrAAIAAAzIgsAJIAAEqIAsAJIAAAxg");
    this.shape_11.setTransform(103.325, 1.95);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#48A9A6")
      .s()
      .p(
        "ABVDQIinkYIgCABIAADdIAtAJIAAAxIitAAIAAgxIAsgJIAAkqIgsgJIAAgzIAsAAIBUAAICnEYIACAAIAAjcIgtgJIAAgzICAAAIAtAAIAAAzIgtAJIAAFkg"
      );
    this.shape_12.setTransform(70.675, 1.95);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AiICaQg0g7AAhcIAAgFQAAhbA0g9QA0g7BUgBQBUABA1A7QA0A9AABbIAAAFQAABcg0A7Qg1A9hUgBQhUABg0g9gAhOhsQgaAoAABBIAAAGQAABCAaAoQAaAoA0ABQA0gBAbgoQAbgoAAhCIAAgGQAAhBgbgoQgbgog0AAQg1AAgZAog"
      );
    this.shape_13.setTransform(27.075, 1.95);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#48A9A6")
      .s()
      .p(
        "ABYDQIAAgxIAtgJIAAhCIAIi3IgBgBIhxE0Ig3AAIhukyIgCAAIAIC2IAABCIAtAJIAAAxIiuAAIAAgxIAtgJIAAkqIgtgJIAAgzIAtAAIBtAAIBqEzIABAAIBrkzICaAAIAAAzIgtAJIAAEqIAtAJIAAAxg"
      );
    this.shape_14.setTransform(-21.25, 1.95);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#48A9A6")
      .s()
      .p(
        "AikDQIAAgxIAsgJIAAkqIgsgJIAAgzIAsAAIEdAAIAABzIhAAAIgFgyIiEAAIAABpICMAAIAAA/IiMAAIAAB3ICGAAIAEgxIA/AAIAABxg"
      );
    this.shape_15.setTransform(-68.4, 1.95);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#48A9A6")
      .s()
      .p(
        "ABVDQIinkYIgCABIAADdIAtAJIAAAxIitAAIAAgxIAsgJIAAkqIgsgJIAAgzIAsAAIBUAAICnEYIACAAIAAjcIgtgJIAAgzICAAAIAtAAIAAAzIgtAJIAAFkg"
      );
    this.shape_16.setTransform(-108.875, 1.95);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#48A9A6")
      .s()
      .p(
        "ABYDQIAAgxIAtgJIAAhCIAIi3IgCgBIhvE0Ig4AAIhvkyIgBAAIAIC2IAABCIAtAJIAAAxIiuAAIAAgxIAtgJIAAkqIgtgJIAAgzIAtAAIBtAAIBqEzIABAAIBrkzICbAAIAAAzIgtAJIAAEqIAtAJIAAAxg"
      );
    this.shape_17.setTransform(-159.3, 1.95);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AiGExQg9gYgpgrIAAiGIBjAAIAOBbQATAQAhALQAhAKAoAAQA1AAAcgWQAbgVAAgkQAAglgagXQgagWhBgUQhyghg6gsQg7gtAAhPQAAhOBCgxQBCgyBkgBQBJAAA8AXQA9AWApAlIAACDIhgAAIgRhYQgQgKgggIQgggIgkAAQg0AAgdAWQgdAWAAAkQAAAgAfAVQAdAVBJAXQBqAeA3AvQA3AwAABPQAABShBAwQhBAvhrAAQhLAAg9gYg"
      );
    this.shape_18.setTransform(260.475, 2.975);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ai0DwQhShZAAiMIAAgVQAAiLBShZQBRhaCBAAQBKAAA8AbQA8AbAnAtIAAB+IhfAAIgOhWQgSgSgdgLQgdgLgnAAQhSAAguA8QgtA9AABhIAAAWQAABiAtA8QAtA+BQAAQAnAAAfgLQAfgLARgTIAOhVIBfAAIAAB+QgnAtg8AbQg8AahKAAQiAAAhShZg"
      );
    this.shape_19.setTransform(202.65, 2.95);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#EB5E55")
      .s()
      .p("AiEFAIAAhNIBFgNIAAnKIhFgOIAAhNIEJAAIAABNIhFAOIAAHKIBFANIAABNg");
    this.shape_20.setTransform(158.35, 2.95);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ACDFAIkCmuIgCABIAAFTIBEANIAABNIkJAAIAAhNIBEgNIAAnKIhEgOIAAhNIBEAAICBAAIEBGuIADAAIAAlTIhFgOIAAhNIDEAAIBFAAIAABNIhFAOIAAIkg"
      );
    this.shape_21.setTransform(108.35, 2.95);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AjRDuQhQhcAAiNIAAgJQAAiLBPhdQBQhcCBAAQCCAABRBcQBQBdAACLIAAAJQAACNhQBcQhRBbiBAAQiCAAhPhbgAh5imQgnA9AABlIAAAJQAABlAnA+QAoA+BRAAQBQAAApg+QApg+AAhlIAAgJQAAhkgpg+Qgqg+hQAAQhQAAgoA+g"
      );
    this.shape_22.setTransform(41.5, 2.95);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ACIFAIAAhNIBEgNIAAhkIANkbIgDAAIisHZIhUAAIirnXIgDAAIAMEZIAABkIBFANIAABNIkJAAIAAhNIBEgNIAAnKIhEgOIAAhNIBEAAICnAAICjHWIADAAICjnWIDtAAIAABNIhEAOIAAHKIBEANIAABNg"
      );
    this.shape_23.setTransform(-32.65, 2.95);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Aj8FAIAAhNIBEgNIAAnKIhEgOIAAhNIBEAAIG0AAIAACvIhiAAIgGhMIjMAAIAAChIDYAAIAABiIjYAAIAAC3IDOAAIAGhNIBhAAIAACvg"
      );
    this.shape_24.setTransform(-104.925, 2.95);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ACDFAIkCmuIgCABIAAFTIBEANIAABNIkJAAIAAhNIBEgNIAAnKIhEgOIAAhNIBEAAICBAAIEBGuIADAAIAAlTIhFgOIAAhNIDEAAIBFAAIAABNIhFAOIAAIkg"
      );
    this.shape_25.setTransform(-167.05, 2.95);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ACIFAIAAhNIBEgNIAAhkIAMkbIgCAAIirHZIhWAAIiqnXIgDAAIAMEZIAABkIBFANIAABNIkJAAIAAhNIBEgNIAAnKIhEgOIAAhNIBEAAICoAAICjHWIABAAICknWIDtAAIAABNIhEAOIAAHKIBEANIAABNg"
      );
    this.shape_26.setTransform(-244.4, 2.95);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AieFmQhIgcgwgyIAAidIB1AAIAQBrQAXASAnAMQAnANAvAAQA+AAAggZQAggaAAgrQAAgrgegaQgfgbhMgXQiGgnhFg0QhFg1AAhcQAAhcBOg6QBNg7B2gBQBWAABHAaQBHAbAxArIAACaIhxAAIgUhmQgUgNglgKQgmgIgqgBQg9AAgiAaQgiAaAAAqQAAAmAjAZQAkAYBVAbQB9AkBBA3QBAA5AABcQAABhhNA4QhMA4h9AAQhZAAhIgdg"
      );
    this.shape_27.setTransform(306.425, 3.5);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AjUEaQhghpAAikIAAgYQAAikBghqQBghpCXAAQBYAABGAgQBGAfAuA1IAACUIhwAAIgPhkQgXgWghgNQgigNguAAQhhAAg1BHQg1BIAAByIAAAaQAABzA0BHQA1BIBfAAQAtAAAlgNQAlgNAUgWIAPhkIBwAAIAACVQgtA1hGAfQhHAfhYAAQiWAAhhhpg"
      );
    this.shape_28.setTransform(238.375, 3.475);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#F6AE2D")
      .s()
      .p("AibF4IAAhaIBRgQIAAobIhRgPIAAhbIE3AAIAABbIhRAPIAAIbIBRAQIAABag");
    this.shape_29.setTransform(186.325, 3.475);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "ACZF4Ikvn5IgDAAIAAGPIBRAQIAABaIk4AAIAAhaIBQgQIAAobIhQgPIAAhbIBQAAICXAAIEwH5IACAAIAAmPIhQgPIAAhbIDnAAIBRAAIAABbIhRAPIAAKFg"
      );
    this.shape_30.setTransform(127.5, 3.475);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "Aj2EXQhehsAAilIAAgLQAAikBdhtQBehsCYAAQCZAABfBsQBeBtAACkIAAALQAAClheBsQhfBsiYAAQiYAAhehsgAiOjEQgvBIAAB2IAAAMQAAB3AvBIQAvBJBfAAQBfAAAwhJQAwhIAAh3IAAgMQAAh1gxhIQgwhJhfAAQhfAAguBIg"
      );
    this.shape_31.setTransform(48.825, 3.475);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "ACgF4IAAhaIBQgQIAAh2IAOlLIgDgBIjJIsIhlAAIjIoqIgDABIAOFJIAAB2IBRAQIAABaIk4AAIAAhaIBQgQIAAobIhQgPIAAhbIBQAAIDFAAIDAIpIACAAIDBopIEXAAIAABbIhRAPIAAIbIBRAQIAABag"
      );
    this.shape_32.setTransform(-38.325, 3.475);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "AkpF4IAAhaIBQgQIAAobIhQgPIAAhbIBQAAIICAAIAADOIh0AAIgHhaIjwAAIAAC9ID+AAIAABzIj+AAIAADXIDyAAIAHhZIBzAAIAADNg"
      );
    this.shape_33.setTransform(-123.375, 3.475);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "ACaF4Ikwn5IgCAAIAAGPIBQAQIAABaIk4AAIAAhaIBRgQIAAobIhRgPIAAhbIBRAAICXAAIEuH5IAEAAIAAmPIhRgPIAAhbIDnAAIBQAAIAABbIhQAPIAAKFg"
      );
    this.shape_34.setTransform(-196.45, 3.475);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#F6AE2D")
      .s()
      .p(
        "ACgF4IAAhaIBQgQIAAh2IAOlLIgDgBIjJIsIhlAAIjIoqIgDABIAOFJIAAB2IBRAQIAABaIk4AAIAAhaIBQgQIAAobIhQgPIAAhbIBQAAIDFAAIDAIpIACAAIDBopIEXAAIAABbIhRAPIAAIbIBRAQIAABag"
      );
    this.shape_35.setTransform(-287.425, 3.475);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ai6GmQhVgig4g7IAAi5ICJAAIATB+QAbAWAuAPQAtAOA4AAQBJAAAmgeQAmgeAAgyQAAgzgkgfQgkgfhagbQidguhRg+QhRg+AAhtQAAhsBbhEQBbhFCKgBQBlAABUAfQBUAfA5AzIAAC2IiFAAIgXh6QgXgPgsgLQgtgLgxAAQhJAAgnAfQgoAfAAAxQAAAtAqAdQApAcBlAhQCTAoBMBCQBLBDAABtQAAByhaBBQhaBCiTAAQhoAAhVghg"
      );
    this.shape_36.setTransform(360.475, 4.125);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Aj5FMQhyh7AAjCIAAgdQAAjBBxh8QByh8CxAAQBoAABSAmQBTAlA2A+IAACuIiEAAIgSh1QgbgbgngPQgogPg2AAQhzAAg9BUQhABUABCHIAAAeQgBCHA/BUQA+BVBwAAQA0AAAsgPQArgQAYgaIASh2ICEAAIAACwQg1A9hTAmQhTAlhoAAQiwAAhyh8g"
      );
    this.shape_37.setTransform(280.45, 4.1);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#EB5E55")
      .s()
      .p("Ai2G7IAAhrIBfgSIAAp6IhfgTIAAhrIFtAAIAABrIheATIAAJ6IBeASIAABrg");
    this.shape_38.setTransform(219.175, 4.075);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AC0G7IlkpTIgEAAIAAHWIBgASIAABrIlvAAIAAhrIBegSIAAp6IhegTIAAhrIBeAAICxAAIFlJTIADAAIAAnVIhegTIAAhrIEQAAIBeAAIAABrIheATIAAL3g"
      );
    this.shape_39.setTransform(150, 4.075);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AkhFIQhwh/AAjCIAAgNQABjCBuh/QBuh/C0gBQCyABBwB/QBvB/AADCIAAANQAADChvB/QhvB/izABQizgBhuh/gAiojnQg3BVAACLIAAAOQAACLA4BWQA3BVBwAAQBwAAA4hVQA4hWABiLIAAgOQAAiKg6hWQg5hVhuAAQhxAAg3BVg"
      );
    this.shape_40.setTransform(57.45, 4.1);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AC8G7IAAhrIBegSIAAiLIARmGIgDgBIjuKPIh2AAIjrqMIgEAAIARGEIAACLIBfASIAABrIlvAAIAAhrIBfgSIAAp6IhfgTIAAhrIBfAAIDnAAIDhKMIAEAAIDiqMIFIAAIAABrIhfATIAAJ6IBfASIAABrg"
      );
    this.shape_41.setTransform(-45.15, 4.075);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AldG7IAAhrIBegSIAAp6IhegTIAAhrIBeAAIJcAAIAADzIiIAAIgIhqIkaAAIAADfIEqAAIAACIIkqAAIAAD9IEcAAIAIhqICHAAIAADyg"
      );
    this.shape_42.setTransform(-145.175, 4.075);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AC0G7IlkpTIgEAAIAAHWIBgASIAABrIlvAAIAAhrIBegSIAAp6IhegTIAAhrIBeAAICxAAIFlJTIADAAIAAnVIhegTIAAhrIEQAAIBeAAIAABrIheATIAAL3g"
      );
    this.shape_43.setTransform(-231.15, 4.075);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AC8G7IAAhrIBfgSIAAiLIARmGIgEgBIjtKPIh2AAIjtqMIgDAAIARGEIAACLIBfASIAABrIlvAAIAAhrIBegSIAAp6IhegTIAAhrIBeAAIDoAAIDiKMIACAAIDkqMIFHAAIAABrIhfATIAAJ6IBfASIAABrg"
      );
    this.shape_44.setTransform(-338.15, 4.075);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to(
          {
            state: [
              { t: this.shape_8 },
              { t: this.shape_7 },
              { t: this.shape_6 },
              { t: this.shape_5 },
              { t: this.shape_4 },
              { t: this.shape_3 },
              { t: this.shape_2 },
              { t: this.shape_1 },
              { t: this.shape },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_17 },
              { t: this.shape_16 },
              { t: this.shape_15 },
              { t: this.shape_14 },
              { t: this.shape_13 },
              { t: this.shape_12 },
              { t: this.shape_11 },
              { t: this.shape_10 },
              { t: this.shape_9 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_26 },
              { t: this.shape_25 },
              { t: this.shape_24 },
              { t: this.shape_23 },
              { t: this.shape_22 },
              { t: this.shape_21 },
              { t: this.shape_20 },
              { t: this.shape_19 },
              { t: this.shape_18 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_35 },
              { t: this.shape_34 },
              { t: this.shape_33 },
              { t: this.shape_32 },
              { t: this.shape_31 },
              { t: this.shape_30 },
              { t: this.shape_29 },
              { t: this.shape_28 },
              { t: this.shape_27 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_44 },
              { t: this.shape_43 },
              { t: this.shape_42 },
              { t: this.shape_41 },
              { t: this.shape_40 },
              { t: this.shape_39 },
              { t: this.shape_38 },
              { t: this.shape_37 },
              { t: this.shape_36 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_26 },
              { t: this.shape_25 },
              { t: this.shape_24 },
              { t: this.shape_23 },
              { t: this.shape_22 },
              { t: this.shape_21 },
              { t: this.shape_20 },
              { t: this.shape_19 },
              { t: this.shape_18 },
            ],
          },
          15
        )
        .to(
          {
            state: [
              { t: this.shape_26 },
              { t: this.shape_25 },
              { t: this.shape_24 },
              { t: this.shape_23 },
              { t: this.shape_22 },
              { t: this.shape_21 },
              { t: this.shape_20 },
              { t: this.shape_19 },
              { t: this.shape_18 },
            ],
          },
          120
        )
        .to({ state: [] }, 1)
        .to(
          {
            state: [
              { t: this.shape_26 },
              { t: this.shape_25 },
              { t: this.shape_24 },
              { t: this.shape_23 },
              { t: this.shape_22 },
              { t: this.shape_21 },
              { t: this.shape_20 },
              { t: this.shape_19 },
              { t: this.shape_18 },
            ],
          },
          97
        )
        .wait(14)
    );

    // Layer_15
    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ABvBgQgIgJgLgBQgKgCgEgOIgBgBIgFgUQgHgTgXgJQgNgFgcgCQgXgBgJAEQgGACgPANIgUAVIgCAEQgHAKACAIQABAFgCAGQgEAGgFAAQgDAAgBgDQgCgDACgCQg4gCg2AJQgEABgCgDQgDgBgCgEQgCgHABgJIACgPIACgMIABgKIACgLIADgOQAGgWAPgXQAPgVAMgIQAEgDAEAAQAFgBACAFIAOgGIAngSIARgFQANgDALAAQANABAlgDQAggCATADQAVAEAbAPIATALIAbAPQAZAMATAfQAMAUAMAlQADAIgDAEQgCAEgEAAQgFAAgCgEIgPgbQgCACgCAFIgDAHQgEALgIgCQgEgBgDgHIgHgLQgNAbgJAfQgFALgFAAIAAAAQgFAAgGgHg"
      );
    this.shape_45.setTransform(118.2675, -21.8255);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ABxB0QgEgBgFgIQgHgKgKgEQgKgEgCgNIAAgCIgBgVQgEgTgVgOQgMgHgbgHQgXgFgKACQgFACgRAKQgRALgHAGIgDADQgIAJAAAIQABAFgEAGQgEAFgFgBQgDAAgBgEQgBgDACgCQg3gLg2gBQgEAAgCgDQgDgBgBgFQgBgHACgIIAGgPIAEgLIADgJIADgLIAGgNQAJgVAUgUQASgTANgFQAFgDAEABQAEAAACAFIAPgDIApgKIASgDQANgBALADQAMADAlAEQAgADASAHQAUAIAYATIARAOIAYAUQAXAQAMAhQAJAWAFAnQABAJgDADQgDADgEAAQgEgBgCgEIgKgdQgDABgDAEIgEAHQgFAKgHgDQgFgCgCgIQgCgJgCgCQgRAYgPAcQgGAKgFAAIgBAAg"
      );
    this.shape_46.setTransform(138.1694, -28.0849);
    this.shape_46._off = true;

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ABxB0QgEgBgFgIQgHgKgKgEQgKgEgCgNIAAgCIgBgVQgEgTgVgOQgMgHgbgHQgXgFgKACQgFACgRAKQgRALgHAGIgDADQgIAJAAAIQABAFgEAGQgEAFgFgBQgDAAgBgEQgBgDACgCQg3gLg2gBQgEAAgCgDQgDgBgBgFQgBgHACgIIAGgPIAEgLIADgJIADgLIAGgNQAJgVAUgUQASgTANgFQAFgDAEABQAEAAACAFIAPgDIApgKIASgDQANgBALADQAMADAlAEQAgADASAHQAUAIAYATIARAOIAYAUQAXAQAMAhQAJAWAFAnQABAJgDADQgDADgEAAQgEgBgCgEIgKgdQgDABgDAEQgCAFgCACQgFAKgHgDQgFgCgCgIQgCgJgCgCQgRAYgPAcQgGAKgFAAIgBAAg"
      );
    this.shape_47.setTransform(135.1694, -45.0849);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_45 }] })
        .to({ state: [{ t: this.shape_46 }] }, 1)
        .to({ state: [{ t: this.shape_47 }] }, 1)
        .to({ state: [{ t: this.shape_46 }] }, 1)
        .to({ state: [{ t: this.shape_46 }] }, 1)
        .to({ state: [{ t: this.shape_46 }] }, 1)
        .to({ state: [] }, 1)
        .to({ state: [] }, 57)
        .wait(189)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.shape_46)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(1)
        .to({ _off: false, x: 203.1694, y: -89.0849 }, 0)
        .wait(1)
        .to({ x: 251.1694, y: -129.0849 }, 0)
        .wait(1)
        .to({ x: 381.1694, y: -169.0849 }, 0)
        .to({ _off: true }, 1)
        .wait(246)
    );

    // Layer_14
    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AgRDAQgFgBAAgGIgFABIgUAAQgqgCgnAEIgFAAIgHgBIgBAAQgBAEgDgBQgEAAAAgHQAAgJADgSQAGgYAHgSIAEgJQAPgeAjghIA7g2QAXgYALgWIACgEQANgagGgaQgCgLAFgDQADgBAFADQAMAIAKAKQAPglAIgjQABgFADgBQAEgCAFAHIAQAWIAMgcQACgEADgBQADAAAEAFQAOAXAKAYQAEANAAAFIgBAKIgBACQAAAjgOAiQgFANgIANIgCAGQgMAWgYAZIgvAoQgTAQgLAOIgDAEQgPAUgFAWQgCAMAAAOQAAAGgCACQgBAFgEAAIgBgBgAifiJIAAgBIAAAAIABABIAAAAIgBABg"
      );
    this.shape_48.setTransform(124.375, -0.9937);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AgRDAQgFgBAAgGIgFABIgUAAQgqgCgnAEIgFAAIgHgBIAAAAQgCAEgDgBQgEAAAAgHQAAgJADgSQAGgYAHgSIAEgJQAPgeAjghIA7g2QAXgYALgWIACgEQANgbgGgZQgCgLAFgDQADgBAFADQAMAIAKAKQAPglAIgjQABgFADgBQAEgCAFAHIAQAWIAMgcQACgEADgBQADAAAEAFQAOAXAKAYQAEANAAAFIgBAKIgBACQAAAjgOAiQgFANgIANIgCAGQgMAWgYAZIgvAoQgTAQgLAOIgDAEQgPAUgFAWQgCAMAAAOQAAAGgCACQgBAFgEAAIgBgBgAifiJIAAgBIAAAAIABABIAAAAIgBABg"
      );
    this.shape_49.setTransform(144.375, -0.9937);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AIANhQgFgBAAgGIgFABIgUAAQgqgCgnAEIgFAAIgHgBIAAAAIgDADIAAguQAFgRAFgNIAEgJQAPgeAjghIA7g3QAYgYALgWIACgEQANgbgGgZQgCgLAFgDQADgBAFADQAMAIAKAKQAPglAIgjQABgFADgBQAEgCAFAHIAQAWIAMgcQACgEADgBQADAAAEAFQAOAXAKAYQAEANAAAFIgBAKIgBACQAAAjgOAiQgFANgIANIgCAGQgMAXgYAZIgvAoQgTAQgLAOIgDAEQgQAUgFAWQgCAMAAAOQAAAGgCACQgBAFgEAAIgBgBgAgZHPQgEAAAAgHQAAgJADgSIADgMIAAAuIgBAAIgBAAgAqxtgIAAgBIAAAAIABABIAAAAIgBABg"
      );
    this.shape_50.setTransform(255.375, 80.7083);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AJ4RWQgFgBAAgGIgFABIgUAAQgqgCgnAEIgFAAIgHgBIAAAAIgDADIAAguQAFgRAFgNIAEgJQAPgeAjghIA7g3QAYgYALgWIACgEQANgbgGgZQgCgLAFgDQADgBAFADQAMAIAKAKQAPglAIgjQABgFADgBQAEgCAFAHIAQAWIAMgcQACgEADgBQADAAAEAFQAOAXAKAYQAEANAAAFIgBAKIgBACQAAAjgOAiQgFANgIANIgCAGQgMAXgYAZIgvAoQgTAQgLAOIgDAEQgQAUgFAWQgCAMAAAOQAAAGgCACQgBAFgEAAIgBgBgAiRH8QgEAAAAgHQAAgJADgSIADgMIAAAuIgCAAgAspxVIAAgBIAAAAIABABIAAAAIgBABg"
      );
    this.shape_51.setTransform(267.375, 105.2083);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AkLWCQgFgBAAgGIgFABIgUAAQgqgCgnAEIgFAAIgHgBIAAAAIgDADIAAguIABgEICLAAIgEAOQgCAMAAAOQAAAGgCACQgBAFgEAAIgBgBgAV/VOQAEgOAFgMIAEgJQAPgeAjghIA7g3QAYgYALgWIACgEQANgbgGgZQgCgLAFgDQADgBAFADQAMAIAKAKQAPglAIgjQABgFADgBQAEgCAFAHIAQAWIAMgcQACgEADgBQADAAAEAFQAOAXAKAYQAEANAAAFIgBAKIgBACQAAAjgOAiQgFANgIANIgCAGQgMAXgYAZIgvAoQgTAQgLAOIgDAEQgLANgGAPgALyMoQgEAAAAgHQAAgJADgSIADgMIAAAuIgCAAgA6t2BIAAgBIAAAAIABABIAAAAIgBABg"
      );
    this.shape_52.setTransform(357.375, 135.2083);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_48 }] })
        .to({ state: [{ t: this.shape_49, p: { x: 144.375, y: -0.9937 } }] }, 1)
        .to({ state: [{ t: this.shape_49, p: { x: 202.375, y: 8.0063 } }] }, 1)
        .to({ state: [{ t: this.shape_50 }] }, 1)
        .to({ state: [{ t: this.shape_51 }] }, 1)
        .to({ state: [{ t: this.shape_52 }] }, 1)
        .to({ state: [] }, 1)
        .to({ state: [] }, 57)
        .wait(189)
    );

    // Layer_13
    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AgfA+QgCgBgCgGQgCgGgGgEQgHgFAAgDQAAgFAIgCIAEgBIAigMIgTgLIgEgDIgBgCQAAgCACgCIACgCIAXgUIADgDIABAAQAGgBAEAHQADAJADABQAMgVAEgLIACgGQADgDACAAIABgHIADgCQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQADACgBAFQgIA3AHA0QAAAHgCACIgFACIgHAAIgLgBIgTgCQgHAAgXADQgGAAgBgBg"
      );
    this.shape_53.setTransform(122.4143, 33.1667);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AgfA+QgCgBgCgGQgCgGgGgEQgHgFAAgDQAAgFAIgCIAEgBIAigMIgTgLIgEgDIgBgCIABgBIABgDIACgCIAXgUIADgDIABAAQAGgBAEAHQADAJADABQAMgVAEgLIACgGQADgDACAAIABgHIADgCQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQADACgBAFQgEAcAAAbQAAAaADAaQAAAHgCACIgFACIgHAAIgLgBIgTgCQgHAAgXADQgGAAgBgBg"
      );
    this.shape_54.setTransform(142.4143, 33.1667);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AA5BwQgBgBgDgGQgCgGgGgEQgHgFAAgDQAAgFAJgCIADgBIAigMIgTgLIgDgDIgBgCIAAgCIBLAAQAAAbADAaQAAAHgBACIgGACIgHAAIgLgBIgSgCQgIAAgYADQgFAAgCgBgAiKgyIACgDIACgCIAWgUIAFgDIABAAQAFgBAEAHQAEAJADABQAMgVADgLIADgGQADgDACAAIABgHIACgCQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQACACgBAFQgEAcAAAbg"
      );
    this.shape_55.setTransform(153.4875, 38.1667);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AA5BwQgBgBgDgGQgCgGgGgEQgHgFAAgDQAAgFAIgCIAEgBIAigMIgTgLIgEgDIAAgCIAAgCIBLAAQAAAbADAaQAAAHgBACIgGACIgHAAIgLgBIgSgCQgIAAgYADQgGAAgBgBgAiKgyIABgDIACgCIAXgUIAEgDIABAAQAGgBAEAHQADAJADABQANgVADgLIACgGQAEgDACAAIABgHIACgCQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQADACgBAFQgEAbAAAcg"
      );
    this.shape_56.setTransform(218.5, 117.1667);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AA5BwQgBgBgDgGQgCgGgGgEQgHgFAAgDQAAgFAIgCIAEgBIAigMIgTgLIgEgDIgBgCIABgCIBLAAQAAAbADAaQAAAHgBACIgGACIgHAAIgLgBIgSgCQgJAAgXADQgGAAgBgBgAiKgyIABgDIACgCIAXgUIAEgDIABAAQAGgBAEAHQADAJADABQANgVADgLIACgGQAEgDACAAIABgHIACgCQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQADACgBAFQgEAbAAAcg"
      );
    this.shape_57.setTransform(398.5, 206.1667);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_53 }] })
        .to({ state: [{ t: this.shape_54 }] }, 1)
        .to({ state: [{ t: this.shape_55 }] }, 1)
        .to({ state: [{ t: this.shape_56, p: { y: 117.1667 } }] }, 1)
        .to({ state: [{ t: this.shape_56, p: { y: 146.1667 } }] }, 1)
        .to({ state: [{ t: this.shape_57 }] }, 1)
        .to({ state: [] }, 1)
        .to({ state: [] }, 57)
        .wait(189)
    );

    // Layer_12
    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag2A/QgGAAgCgCQgDgEABgGIAEhfQgHABgEgEQgCgDABgDQAAgEADgBQADgCAHAAIAEgCIADACIAFAAIADAAIAjAAIAPACIAQACIAWgEQANgCAIABQAGACACADQACADgCAFQgFAVgFAKQgDAHgDAAQgFABgFgGQgGgIgBAAQgQAMgKAGQALAGAJAKQAEAFgBADQgCADgEACIghAMQAEAFACAFQACAGgDAFQgDAFgLABg"
      );
    this.shape_58.setTransform(115.545, 31.45);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag2A/QgGAAgCgCQgDgEABgGIAEhfQgHABgEgEQgCgDABgDQAAgEADgBQADgCAHAAIAEgCIADACIAFAAIADAAIAjAAIAPACIAQACIAWgEQANgCAIABQAGACACADQACADgCAFQgFAVgFAKQgDAHgDAAQgFABgFgGQgGgIgBAAQgQAMgKAGQALAGAJAKIADAFIAAADQgCADgEACIghAMQAEAFACAFQACAGgDAFQgDAFgLABg"
      );
    this.shape_59.setTransform(135.545, 31.45);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag2A/QgGAAgCgCQgDgEABgGIAEhfQgHABgEgEQgCgDABgDQAAgEADgBQADgCAHAAIAEgCIADACIAFAAIADAAIAjAAIAPACIAQACIAWgEQANgCAIABQAGACACADQACADgCAFQgFAVgFAKQgDAHgDAAQgFABgFgGQgGgIgBAAQgQAMgKAGQALAGAJAKIADAFIgWAAIAAANIgRAHQAEAFACAFQACAGgDAFQgDAFgLABg"
      );
    this.shape_60.setTransform(135.545, 31.45);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag2A/QgGAAgCgDQgDgCABgIIAEheQgHACgEgGQgCgCABgDQAAgDADgCQADgCAHAAIAEgBIADABIAFABIADAAIAjgBIAPACIAQABIAWgCQANgCAIABQAGABACADQACADgCAFQgFAVgFAKQgDAHgDAAQgFACgFgHQgGgHgBgBQgQAMgKAGQALAGAJAKIADAFIgWAAIAAAOIgRAHQAEAEACAFQACAGgDAFQgDAGgLAAg"
      );
    this.shape_61.setTransform(200.545, 110.45);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag2A/QgGgBgCgCQgDgCABgIIAEheQgHACgEgGQgCgCABgDQAAgDADgCQADgCAHAAIAEgBIADABIAFABIADAAIAjgBIAPACIAQABIAWgCQANgCAIABQAGABACADQACADgCAFQgFAVgFAKQgDAHgDAAQgFACgFgHQgGgHgBgBQgQAMgKAGQALAGAJALIADAEIgWAAIAAAOIgRAHQAEAFACAEQACAHgDAEQgDAGgLAAg"
      );
    this.shape_62.setTransform(380.545, 199.45);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_58 }] })
        .to({ state: [{ t: this.shape_59 }] }, 1)
        .to({ state: [{ t: this.shape_60, p: { x: 135.545, y: 31.45 } }] }, 1)
        .to({ state: [{ t: this.shape_61 }] }, 1)
        .to({ state: [{ t: this.shape_60, p: { x: 200.545, y: 139.45 } }] }, 1)
        .to({ state: [{ t: this.shape_62 }] }, 1)
        .to({ state: [] }, 1)
        .to({ state: [] }, 57)
        .wait(189)
    );

    // Layer_8
    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AjLAAIBdFWIB4AAICHpZIA0gBIAGhRIj5ACIAABPIBAAPIhNF5IgfhLIhXhxIgVAYIgFAgIALAU"
      );
    this.shape_63.setTransform(73.75, 5.575);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhuFWIhdlWIAMAUIgMgUIAGggIAUgYIBXBxIAeBLIBOl5IhAgPIAAhPID6gCIgHBRIg0ABIiIJZg"
      );
    this.shape_64.setTransform(73.75, 5.575);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p("AifFKIB4AMIDApJIAzADIAPhPIj5gWIgHBOIA+AVIhxFwIgYhNIhLh5IgXAWIgIAfg");
    this.shape_65.setTransform(86.425, 6.525);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#EB5E55")
      .s()
      .p("AifFKIg7ldIAIgfIAXgWIBLB5IAYBNIBxlwIg+gVIAHhOID5AWIgPBPIgzgDIjAJJg");
    this.shape_66.setTransform(86.425, 6.525);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AACDZICXnMIAzADIAPhPIj5gWIgHBOIA+AVIhxFwIgYhNIhLh5IgXAWIgIAfIA7FdIByAMAjagTIAJAW"
      );
    this.shape_67.setTransform(86.425, 6.5);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AifFKIg7ldIAIgfIAXgWIBLB5IAYBNIBmlOIALgiIg+gVIAHhOIBbAJICeANIgPBPIgzgDIjAJJg"
      );
    this.shape_68.setTransform(80.425, 61.525);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AACDZICXnMIAzAEIAPhPIj5gWIgHBOIA+AVIhxFwIgYhOIhLh4IgXAVIgIAgIAJAVAjagSIA7FcIByAM"
      );
    this.shape_69.setTransform(89.425, 113.45);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AifFKIg7ldIAIgfIAXgWIBLB5IAYBNIBmlOIALgiIg+gVIAHhOIBcAJICdANIgPBPIgzgDIjAJJg"
      );
    this.shape_70.setTransform(83.425, 168.475);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AACDZICXnMIAzAEIAPhPIj5gWIgHBOIA+AUIhxFxIgYhOIhLh5IgXAWIgIAgIAJAVAjagSIA7FcIByAM"
      );
    this.shape_71.setTransform(120.425, 161.45);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AACDZICXnMIAzADIAPhPIj5gWIgHBOIA+AVIhxFwIgYhNIhLh5IgXAWIgIAfIAJAVAjagTIA7FdIByAL"
      );
    this.shape_72.setTransform(120.425, 221.45);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_64 }, { t: this.shape_63 }] })
        .to({ state: [{ t: this.shape_66 }, { t: this.shape_65 }] }, 1)
        .to({ state: [{ t: this.shape_68 }, { t: this.shape_67 }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_70, p: { x: 83.425, y: 168.475 } },
              { t: this.shape_69 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_70, p: { x: 114.425, y: 216.475 } },
              { t: this.shape_71 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_70, p: { x: 114.425, y: 276.475 } },
              { t: this.shape_72 },
            ],
          },
          1
        )
        .to({ state: [] }, 1)
        .to({ state: [] }, 57)
        .wait(189)
    );

    // Layer_7
    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AiDFTIg9hqIBIglIgZgkIgZAAIAdglICBnNIBgADIBtGFIhVh2IgYAVIgDAqIgPgNIghheIh/G/g"
      );
    this.shape_73.setTransform(44.925, 3.275);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AiDFTIg9hqIBIglIgZgkIgZAAIAdglICBnNIBgADIBtGFIhVh2IgYAVIgDAqIgPgNIghheIh/G/g"
      );
    this.shape_74.setTransform(44.925, 3.275);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AAzlRIAhABIBtGFIhVh2IgYAVIgDAqIgPgNIghheIh/G/IglAAIg9hqIBIglIgZgkIgZAAIAdglIBmls"
      );
    this.shape_75.setTransform(47.925, 0.3875);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AiDFTIgSgfIgrhLIBIglIgZgkIgZAAIAdglICBnNIBgADIBtGFIhVh2IgYAVIgDAqIgPgNIghheIhbFBIgkB+g"
      );
    this.shape_76.setTransform(58.925, -54.725);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AAzlRIAhABIBtGFIhVh2IgYAUIgDArIgPgOIghheIh/HAIglAAIg9hqIBIglIgZgkIgZAAIAdgmIBmlr"
      );
    this.shape_77.setTransform(105.925, -100.6);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AhmlXIAfgKIDlFOIh3hVIgQAaIAKAqIgSgIIg9hOIAZHRIgjAMIhchRIA4g7IgjgZIgZAIIAQgtIgWl5"
      );
    this.shape_78.setTransform(138.3, -228.55);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhQFLIhBg5IA4g7IgjgaIgZAJIAQgtIgcneIBdgcIDlFNIh3hVIgQAbIAKApIgSgHIg9hPIASFOIAHCDIgjAMg"
      );
    this.shape_79.setTransform(130.55, -284.125);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_74, p: { x: 44.925, y: 3.275 } },
            { t: this.shape_73, p: { x: 44.925, y: 3.275 } },
          ],
        })
        .to(
          {
            state: [
              { t: this.shape_74, p: { x: 47.925, y: 0.275 } },
              { t: this.shape_73, p: { x: 47.925, y: 0.275 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_76, p: { x: 58.925, y: -54.725 } },
              { t: this.shape_75, p: { x: 47.925, y: 0.3875 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_76, p: { x: 116.925, y: -155.725 } },
              { t: this.shape_77 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_76, p: { x: 135.925, y: -234.725 } },
              { t: this.shape_75, p: { x: 124.925, y: -179.6 } },
            ],
          },
          1
        )
        .to({ state: [{ t: this.shape_79 }, { t: this.shape_78 }] }, 1)
        .to({ state: [] }, 1)
        .to({ state: [] }, 57)
        .wait(189)
    );

    // Layer_6
    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p("AiLlSIgGBNIA1ALICSJNIBJgCIg6hrIBNggIgTgkIgkAAIAdgnIhLlvIA/gMIAChPg");
    this.shape_80.setTransform(18.175, 3.275);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics
      .f("#EB5E55")
      .s()
      .p("Ahcj6Ig1gLIAGhNID5ADIgCBPIg/AMIBLFvIgdAnIAkAAIATAkIhNAgIA6BrIhJACg");
    this.shape_81.setTransform(18.175, 3.275);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "ABulAIAAgPIhIgBAhJlRIhCgBIgGBNIA1ALIBAD/ABlDZIAtgTIgTgkIgkAAIAdgnIgbiDAAcDuIAaBlIBJgCIg6hr"
      );
    this.shape_82.setTransform(18.175, 3.275);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag6FZIgNlSIgLkMIgygWIAQg0IAGgWIBqAXIBGAQIBDAPIgSBMIhAgBIgBDeIAACZIgkAgIAiAHIAJAhIACAGIghAHIgoAIIgHABIAiB1g"
      );
    this.shape_83.setTransform(22.475, 3.075);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "ABulAIAAgPIgWAAIgygBABlDZIAtgTIgTgkIgkAAIAdgnIgbiDAAdDuIAZBlIBJgCIg6hrAhJlRIhCgBIgGBNIA1ALIAvC9IARBC"
      );
    this.shape_84.setTransform(4.175, -64.725);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag6FZIgNlSIgDhCIgIjKIgygWIAQg0IAGgWIBqAXIAxAMIAWAEIBCAPIgSBMIhAgBIgBDeIAACZIgkAgIAiAHIAKAhIABAGIghAHIgnAIIgIABIAiB1g"
      );
    this.shape_85.setTransform(8.475, -64.925);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_81 }, { t: this.shape_80 }] })
        .to({ state: [{ t: this.shape_83 }, { t: this.shape_82 }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_85, p: { x: 8.475, y: -64.925 } },
              { t: this.shape_84, p: { x: 4.175, y: -64.725 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_85, p: { x: -2.525, y: -112.925 } },
              { t: this.shape_84, p: { x: -6.825, y: -112.725 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_85, p: { x: -2.525, y: -216.925 } },
              { t: this.shape_84, p: { x: -6.825, y: -216.725 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_85, p: { x: -2.525, y: -266.925 } },
              { t: this.shape_84, p: { x: -6.825, y: -266.725 } },
            ],
          },
          1
        )
        .to({ state: [] }, 1)
        .to({ state: [] }, 57)
        .wait(189)
    );

    // Layer_10
    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AiJFXQgIgCgBgGQAAgFAKgDQAbgIAagPIgTgMIgEgFQgBgDADgFIAHgJQAOgUAMgHIAAAAIABgBQACgCAJgBQAagBAXgMQAXgMAQgUQAOgTAJgaQAHgUAFgfQAYiNgihkQgWhCgrgQQgLgEgSgBIgdgDQgegFgHABQgJABgEgBIgHgFQgXgQgagFQgHgCgBgBQgCgDAAgGQACgXAHgSIgigMQgFgBAAgDQAAgFAIABIANADQAegLAzgEQBCgFAoAJQAnAKAuAgQAiAXAWAaQAaAdAQAmQASAnAKA0QAPBHgDA7IgDAdQgHA/gbBLQgGARgFAHQgEAGgDABIgCAAIgKASQgGAKgLALIgVASQghAbgRAJQgnAVhGAEIgSAAQgrAAgcgIgAjJlDQAAAAgBAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAAAAIAAAAIABAAIAAABg"
      );
    this.shape_86.setTransform(-22.725, 3.3374);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhPFeQg3gLgegRQgIgEABgFQABgFAKgBQAcgCAdgIIgQgRIgDgFQAAgDAEgEIAJgIQASgQANgEIAAAAIABgBQADgCAJABQAZAGAagHQAZgGATgRQASgPAPgXQALgSAMgdQA4iDgLhqQgHhFgngZQgKgHgRgFIgcgJQgcgMgGgBQgJgBgDgCIgGgGQgUgVgYgKQgGgEgBgCQgBgCABgHQAIgVALgRIgfgTQgFgCABgDQABgFAHADIANAGQAggEAxAIQBCAJAkASQAlATAmAqQAcAeAQAdQASAjAIAoQAIAqgCA1QgCBIgQA6IgJAcQgVA8grBCQgJAPgHAGQgFAFgEAAIgCAAIgOAQQgIAIgNAIIgYANQgmATgTAFQgUAGgaAAQgdAAgkgHgAkJlNQAAAAAAAAQgBgBAAAAQAAAAABAAQAAAAAAAAIAAgBIAAAAIABABIAAABg"
      );
    this.shape_87.setTransform(-16.3466, 4.353);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AiHH1QgSgCgIgCQgHgDgBgDIgBgDIgVgEQgLgEgMgHIgXgQQgigagNgOQgeghgUhEQgQg1ACgjQgBgJAGgCQAFgBAFAJQAOAYAVAVIAIgUIADgGQACgBAGACIALAEQAWAJAKAKIAAAAIABAAQADACAEAIQAGAZARAUQASAUAXAKQAWAKAbADQAVABAggCQCOgLBZg6QA7glAEgvQACgMgDgRIgFgeQgCgegCgGQgDgJAAgDIACgIQAKgcgCgaQABgHABgBQABgDAHgBQAWgDAVACIACgkQAAgFADAAQAFgBAAAIIABAMQASAbAQAwQAVA/ABApQAAApgUA0QgOAngTAcQgXAgggAZQgiAbgwAVQhCAgg7AMIgcAFQgfAEgjAAQgkAAgngEgAlHn3QAAAAgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAIAAAAIAAAAIABAAIAAABg"
      );
    this.shape_88.setTransform(-10.1316, 21.3);

    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AiHKLQgSgCgIgCQgHgDgBgDIgBgCIgVgGQgLgDgMgHIgXgRQgigZgNgOQgeghgUhEQgQg1ACgjQgBgJAGgBQAFgCAFAKQAOAXAVAWIAIgWIADgEQACgCAGACIALAEQAWAJAKAJIAAABIABAAQADABAEAJQAGAZARAUQASAUAXAKQAWAKAbACQAVABAggCQCOgKBZg6QA7glAEgvQACgLgDgSIgFgdQgCgfgCgGQgDgJAAgEIACgHQAKgbgCgbQABgGABgCQABgCAHgCQAWgDAVACIACgkQAAgGADAAQAFgBAAAIIABANQASAbAQAwQAVA/ABAoQAAAqgUA1QgOAmgTAcQgXAgggAZQgiAagwAXQhCAfg7ANIgcAEQgfAEgjAAQgkAAgngEgAlHqNQAAAAgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAIAAAAIAAAAIABAAIAAABg"
      );
    this.shape_89.setTransform(-7.1316, 81.3);

    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AiHQqQgSgBgIgDQgHgDgBgDIgBgDIgVgFQgLgDgMgIIgXgQQgigYgNgPQgegigUhDQgQg1ACgjQgBgJAGgBQAFgCAFAKQAOAXAVAWIAIgWIADgEQACgCAGACIALAEQAWAJAKAJIAAABIABAAQADABAEAJQAGAZARAUQASAUAXAKQAWAKAbACQAVABAggCQCOgKBZg5QA7gmAEgvQACgMgDgRIgFgdQgCgfgCgGQgDgJAAgEIACgHQAKgcgCgZQABgIABgBQABgCAHgCQAWgDAVACIACglQAAgEADgBQAFgBAAAHIABAPQASAaAQAwQAVA/ABAoQAAAqgUA1QgOAmgTAcQgXAgggAZQgiAagwAXQhCAfg7ANIgcAEQgfAEgjAAQgkAAgngEgAjPwsQAAAAgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAIAAAAIAAAAIABAAIAAABg"
      );
    this.shape_90.setTransform(-19.1316, 122.8);

    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AiHVWQgSgCgIgCQgHgDgBgDIgBgCIgVgGQgLgDgMgHIgXgRQgigZgNgOQgeghgUhEQgQg1ACgjQgBgJAGgBQAFgCAFAJQAOAYAVAVIAIgVIADgEQACgCAGACIALAEQAWAJAKAJIAAABIABAAQADABAEAJQAGAZARAUQASAUAXAKQAWAKAbADQAVAAAggBQCOgLBZg6QA7glAEgvQACgLgDgSIgFgeQgCgegCgGQgDgJAAgDIACgIQAKgbgCgbQABgGABgCQABgDAHgBQAWgDAVACIACgkQAAgGADAAQAFgBAAAIIABANQASAbAQAwQAVA/ABAoQAAAqgUA1QgOAmgTAcQgXAgggAZQgiAbgwAWQhCAgg7AMIgcAEQgfAEgjAAQgkAAgngEgAjP1YQAAAAgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAIAAAAIAAAAIABAAIAAABg"
      );
    this.shape_91.setTransform(-19.1316, 152.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_86 }] })
        .to({ state: [{ t: this.shape_87 }] }, 1)
        .to({ state: [{ t: this.shape_88 }] }, 1)
        .to({ state: [{ t: this.shape_89 }] }, 1)
        .to({ state: [{ t: this.shape_90 }] }, 1)
        .to({ state: [{ t: this.shape_91 }] }, 1)
        .to({ state: [] }, 1)
        .to({ state: [] }, 57)
        .wait(189)
    );

    // Layer_9
    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ABsFfQgUgEgRgHQgNgFgRgJIgdgQIgfgOQgSgJgMgJQgfgXghg+QgVgmgLgZQgPgkgFggQgEgcADgkIAHhCIAIg5QAGgfAKgXQAEgKAIgMQAHgTALgVIADgEQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQAUghAagcQAYgaAWgKIAOgGQAGgDACADQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAeAGAIAOQAEAIgBAOIgDAXIAnAGQAFABAEADQAEADgBAEQgBACgHADQg4APgnBHQgIAQgHARIgEAbQgFAZgBAMIgCAXIgBACIAAABQgEAlAFAjIgBAEIADAWQAFABgBAJQgCATAHASIAEAIQACADgCACQANAgAVAeQAQAXAOAIQALAHARADIAdAEQAVADAZAFQAJABACAGQABAFgHAGQgQAOgRAIQALAGAEAEQAHAIgFAIQgBAEgKAFIgpASIAUAXQADADgBADQgBAEgGAAIgCAAg"
      );
    this.shape_92.setTransform(-46.3576, 4.9466);

    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics
      .f("#EB5E55")
      .s()
      .p(
        "ABsFfQgUgEgRgHQgNgFgRgJIgdgQIgfgOQgSgJgMgJQgfgXghg+QgVgmgLgZQgPgkgFggQgEgcADgkIAHhCIAIg5QAGgfAKgXQAEgKAIgMQAHgTALgVIADgEQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQAUghAagcQAYgaAWgKIAOgGQAGgDACADQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAeAGAIAOQAEAIgBAOIgDAXIAnAGQAFABAEADQAEADgBAEQgBACgHADQg4APgnBHQgIAQgHARIgEAbQgFAZgBAMIgCAXIgBACIAAABQgEAlAFAjIgBAEIADAWQAFABgBAJQgBATAGASIAEAIQACADgCACQANAgAVAeQAQAXAOAIQALAHARADIAdAEQAVADAZAFQAJABACAGQABAFgHAGQgQAOgRAIQALAGAEAEQAHAIgFAIQgBAEgKAFIgpASIAUAXQADADgBADQgBAEgGAAIgCAAg"
      );
    this.shape_93.setTransform(-42.3576, 1.9466);

    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AjpDdQgEAAgJgHIgggfIgOAbQgBAEgDABQgEABgDgJQgEgUAAgRQgBgOADgUIADghIABgiQABgVAEgOQAJglAsg2QAcgiATgUQAbgbAbgRQAZgOAjgMIBAgTIA3gOQAfgHAZABQALAAANADQAVgBAYACIAEABQABAAABABQAAAAAAABQABAAAAABQAAABgBAAQAmAGAkANQAhAMASARIAMALQAEAFgBACQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQAGAegKANQgGAHgNAEIgXAGIAKAnQABAFgBAFQgBAEgEAAQgDABgFgGQgkguhQgIQgTgDgSABIgaAGQgZAFgMAEIgWAHIgCAAIgBAAQgjAKgfASIgEACIgTAKQABAFgJADQgSAGgOANIgGAFQgCAEgCgBQgZAYgUAfQgOAYgDAQQgCANAEARIAHAcQAGAVAEAZQADAJgFAEQgEACgIgDQgUgKgNgNQgBANgDAFQgEAIgIAAIgCAAg"
      );
    this.shape_94.setTransform(-55.2442, -46.422);

    this.shape_95 = new cjs.Shape();
    this.shape_95.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AjpDdQgEAAgJgHIgggfIgOAbQgBAEgDABQgEABgDgJQgEgUAAgRQgBgOADgUIADghIABgiQABgVAEgOQAJglAsg2QAcgiATgUQAbgbAbgRQAZgOAjgMIBAgTIA3gOQAfgHAZABQALAAANADQAVgBAYACIAEABQABAAABABQAAAAAAABQABAAAAABQAAABgBAAQAmAGAkANQAhAMASARIAMALQAEAFgBACQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAGAegKANQgGAHgNAEIgXAGIAKAnQABAFgBAFQgBAEgEAAQgDABgFgGQgkguhQgIQgTgDgSABIgaAGQgZAFgMAEIgWAHIgCAAIgBAAQgjAKgfASIgEACIgTAKQABAFgJADQgSAGgOANIgGAFQgCAEgCgBQgZAYgUAfQgOAYgDAQQgCANAEARIAHAcQAGAVAEAZQADAJgFAEQgEACgIgDQgUgKgNgNQgBANgDAFQgEAIgIAAIgCAAg"
      );
    this.shape_95.setTransform(-136.2442, -222.422);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_92 }] })
        .to({ state: [{ t: this.shape_93 }] }, 1)
        .to(
          { state: [{ t: this.shape_94, p: { x: -55.2442, y: -46.422 } }] },
          1
        )
        .to(
          { state: [{ t: this.shape_94, p: { x: -103.2442, y: -110.422 } }] },
          1
        )
        .to(
          { state: [{ t: this.shape_94, p: { x: -136.2442, y: -182.422 } }] },
          1
        )
        .to({ state: [{ t: this.shape_95 }] }, 1)
        .to({ state: [] }, 1)
        .to({ state: [] }, 57)
        .wait(189)
    );

    // Layer_5
    this.shape_96 = new cjs.Shape();
    this.shape_96.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AiPlUIAHBSIA/ARIAEDGIgvgCIA1BrIgDCzIhKAUIAABRIEZABIADhNIhJgXIgEnhIBMgWIAAhSg"
      );
    this.shape_96.setTransform(-80.175, 2.75);

    this.shape_97 = new cjs.Shape();
    this.shape_97.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AiMFVIAAhQIBKgUIADizIg1hrIAvACIgEjGIg/gRIgHhSIEegCIAABSIhMAXIAEHgIBJAXIgDBNg"
      );
    this.shape_97.setTransform(-80.175, 2.75);

    this.shape_98 = new cjs.Shape();
    this.shape_98.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "Ag7lVIhTABIABAOAhagsIgagBIAHANABEgLIAAjjIBLgWIAAhSIglAAAA9FXIBRAAIABgNAhDAzIAFALIgDCzIhKAUIAABRIAkAA"
      );
    this.shape_98.setTransform(-80.25, 2.75);

    this.shape_99 = new cjs.Shape();
    this.shape_99.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhmFWIgHhDIBHgbIgQizIgLgSIg3hSIAMgBIAkgDIgZjEIhBgKIgQhRIAmgEID2gcIACAMIAHBFIhJAeIAcDoIACAQIAaDlIBMAPIAFBOIgjADIj0AZg"
      );
    this.shape_99.setTransform(-80.375, 2.725);

    this.shape_100 = new cjs.Shape();
    this.shape_100.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AhagsIgagBIAHANAg7lVIhTABIABAOABEgLIAAjjIBLgWIAAhSIglAAACPFLIgBAMIgdAAAhDAzIAFALIgDCzIhKAUIAAAQIAABBIAMAA"
      );
    this.shape_100.setTransform(-80.25, 2.75);

    this.shape_101 = new cjs.Shape();
    this.shape_101.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AhtETIBHgbIgQizIhChkIAwgEIgZjEIhBgKIgDgQIgNhBIEcggIAJBRIgLAFIgeAMIggANIAcDpIACAPIAaDlIBMAPIAFBOIkXAcg"
      );
    this.shape_101.setTransform(-76.375, 62.725);

    this.shape_102 = new cjs.Shape();
    this.shape_102.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "ABEgLIAAjjIBLgWIAAhSIgkAAAg7lVIhTABIABAOAhDAzIAFAKIgDC0IhKAUIAAAQIAABAIAMAAAhZgsIgbgBIAHANACPFLIgBAMIgdAA"
      );
    this.shape_102.setTransform(-107.25, 110.7);

    this.shape_103 = new cjs.Shape();
    this.shape_103.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "ABEgKIAAjjIBLgWIAAhTIgkABAhagsIgagBIAHANAhDA0IAFAKIgDCzIhKAUIAAAQIAABBIAMAAACPFLIgBAMIgdAAAg7lUIhTAAIABAO"
      );
    this.shape_103.setTransform(-188.25, 145.7);

    this.shape_104 = new cjs.Shape();
    this.shape_104.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "ABEgKIAAjjIBLgWIAAhTIgkAAAg7lUIhTAAIABAOAhDA0IAFAKIgDCzIhKAUIAAAQIAABBIAMAAAhagsIgagBIAHANACPFLIgBAMIgdAA"
      );
    this.shape_104.setTransform(-188.25, 205.7);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_97 }, { t: this.shape_96 }] })
        .to({ state: [{ t: this.shape_99 }, { t: this.shape_98 }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_101, p: { x: -76.375, y: 62.725 } },
              { t: this.shape_100 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_101, p: { x: -103.375, y: 170.675 } },
              { t: this.shape_102 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_101, p: { x: -184.375, y: 205.675 } },
              { t: this.shape_103 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_101, p: { x: -184.375, y: 265.675 } },
              { t: this.shape_104 },
            ],
          },
          1
        )
        .to({ state: [] }, 1)
        .to({ state: [] }, 57)
        .wait(189)
    );

    // Layer_4
    this.shape_105 = new cjs.Shape();
    this.shape_105.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AinhcIgCDFIhJAZIAABIIEdAIIgEhMIhFgSIAAi6IERgLIg7hiIiQgGIhHBDIg2hbIgSBMIgZgag"
      );
    this.shape_105.setTransform(-114.625, 18.875);

    this.shape_106 = new cjs.Shape();
    this.shape_106.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AjyDKIAAhIIBJgZIACjFIAnhDIAZAaIAShMIA2BbIBHhDICQAGIA7BiIkRALIAAC6IBFASIAEBMg"
      );
    this.shape_106.setTransform(-114.625, 18.875);

    this.shape_107 = new cjs.Shape();
    this.shape_107.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "ADEhRIAKAAIg7hiIiQgGIg7A3AgLDRIAQABIgDhMIhGgSIAAgNAhaibIggg2IgTBMIgZgaIgmBDIgBAR"
      );
    this.shape_107.setTransform(-110.8625, 18.875);

    this.shape_108 = new cjs.Shape();
    this.shape_108.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AkFClIALhIIBMgMIAhjCIAKgMIAggpIAGgHIAVAdIARgqIANgeIAVA3IARArIAMgIIAdgTIAYgRIAQgLIAqAJIBkAUIANAgIAeBKIjwgdIgggEIgWCPIgHApIAEACIAMAEIAyAXIgEAkIgEAng"
      );
    this.shape_108.setTransform(-114.425, 22);

    this.shape_109 = new cjs.Shape();
    this.shape_109.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "ADEhRIAKAAIg7hiIiQgGIg7A3AgLDRIAQABIgDhMIgmgKAhaibIggg2IgTBMIgZgaIgmBDIgBAR"
      );
    this.shape_109.setTransform(-110.8625, 18.875);

    this.shape_110 = new cjs.Shape();
    this.shape_110.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AkFClIALhIIBMgNIAhjBIAKgMIAggoIAGgIIAVAdIARgqIANgeIAWA3IAQArIAMgIIAdgTIAYgRIAQgLIAqAJIBkAUIANAgIAHAQIAXA6IjwgcIgggFIgWCPIgHApIAEACIAMAEIAyAXIgEAkIgEAng"
      );
    this.shape_110.setTransform(-138.425, 41);

    this.shape_111 = new cjs.Shape();
    this.shape_111.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "ADFhRIAIAAIg6hiIiQgGIg7A3AhbiaIgfg3IgTBMIgZgaIgmBDIAAASAgMDRIARABIgDhMIgmgK"
      );
    this.shape_111.setTransform(-245.85, 97.875);

    this.shape_112 = new cjs.Shape();
    this.shape_112.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AkFClIALhIIBMgMIAhjCIAKgMIAggpIAGgIIAVAeIARgqIANgeIAWA3IAQArIAMgIIAdgTIAYgRIAQgLIAqAIIBkAVIANAgIAHAQIAXA5IjwgcIgggDIgWCOIgHApIAEACIAMAEIAyAXIgEAkIgEAng"
      );
    this.shape_112.setTransform(-273.425, 120);

    this.shape_113 = new cjs.Shape();
    this.shape_113.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AhaiaIggg3IgTBMIgZgaIgmBDIAAASADFhRIAJAAIg7hiIiQgGIg7A3AgMDRIARABIgDhMIgmgK"
      );
    this.shape_113.setTransform(-286.85, 111.875);

    this.shape_114 = new cjs.Shape();
    this.shape_114.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AkFClIALhHIBMgOIAhjBIAKgNIAggnIAGgJIAVAdIARgoIANgfIAWA3IAQAqIAMgIIAdgTIAYgQIAQgLIAqAIIBkAVIANAgIAHAQIAXA6IjwgcIgggFIgWCPIgHApIAEABIAMAGIAyAVIgEAlIgEAng"
      );
    this.shape_114.setTransform(-314.425, 134);

    this.shape_115 = new cjs.Shape();
    this.shape_115.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AkFClIALhIIBMgMIAhjCIAKgMIAggpIAGgIIAVAeIARgqIANgeIAWA3IAQAqIAMgHIAdgUIAYgQIAQgLIAqAIIBkAVIANAgIAHAQIAXA5IjwgcIgggDIgWCOIgHApIAEABIAMAFIAyAWIgEAlIgEAng"
      );
    this.shape_115.setTransform(-434.425, 164);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_106 }, { t: this.shape_105 }] })
        .to({ state: [{ t: this.shape_108 }, { t: this.shape_107 }] }, 1)
        .to({ state: [{ t: this.shape_110 }, { t: this.shape_109 }] }, 1)
        .to({ state: [{ t: this.shape_112 }, { t: this.shape_111 }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_114 },
              { t: this.shape_113, p: { x: -286.85, y: 111.875 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_115 },
              { t: this.shape_113, p: { x: -406.85, y: 141.875 } },
            ],
          },
          1
        )
        .to({ state: [] }, 1)
        .to({ state: [] }, 57)
        .wait(189)
    );

    // Layer_3
    this.shape_116 = new cjs.Shape();
    this.shape_116.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AiLi8QADAhgGAuIBQASIAAEYIAjhGIAWAZIAUhLIA0BZIBGg8IhFAAIAEjDIAxgbIAXg8g"
      );
    this.shape_116.setTransform(-133.05, -21.375);

    this.shape_117 = new cjs.Shape();
    this.shape_117.graphics
      .f("#EB5E55")
      .s()
      .p(
        "Ag+hbIhRgSQAHgugDghIEaAEIgWA8IgyAbIgDDDIBEAAIhFA8Ig0hZIgVBLIgVgZIgjBGg"
      );
    this.shape_117.setTransform(-133.05, -21.375);

    this.shape_118 = new cjs.Shape();
    this.shape_118.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AiLiIQgCAMgBAOIAoAJAg+gZIAADVIAjhGIAWAZIAQg+AAgBgIAAADACLitIAFgNIhKgBABzB0IAHgH"
      );
    this.shape_118.setTransform(-133.05, -21.25);

    this.shape_119 = new cjs.Shape();
    this.shape_119.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AgDCiIgdhcIAAgDIgnh9Ig4AEIgbACIAAgDQgIgrgLgeIAHgCIDwhHIAXgHIgEBAIglAnIgCABIAWBMIAhBvIBBgUIgxBOIhEg9IgCgCIgGgGIABAPIACA/IgcgSIgIAuIgFAfg"
      );
    this.shape_119.setTransform(-126.575, -18.375);

    this.shape_120 = new cjs.Shape();
    this.shape_120.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p("AhngZIAAAEIABDRIAkhGIAVAZIARg+AgHBgIAAADABjitIAFgNIhKgBABLB0IAHgH");
    this.shape_120.setTransform(-129.0625, -21.25);

    this.shape_121 = new cjs.Shape();
    this.shape_121.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AgDCiIgchcIgBgDIgnh9Ig4AEIgbACIAAgDQgIgrgLgeIAHgCIDwhHIAXgHIgEBAIglAnIgCABIAWBMIAhBvIBBgUIgxBOIhDg9IgDgCIgGgGIABAPIABA6IABAFIgBgBIAAgEIAAAEIgbgRIgIAuIgFAfg"
      );
    this.shape_121.setTransform(-144.575, -38.375);

    this.shape_122 = new cjs.Shape();
    this.shape_122.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "ADbCFIAIAKIADgKACqCFIABA3IAbg3AgbisIAFgOIhJgBAjkCFIgBiCIAAgYIAAgEAipCFIAPg0AjICFIAHgPIANAPAgzBzIAIgGAiGBgIABAD"
      );
    this.shape_122.setTransform(-208.4125, -69.25);

    this.shape_123 = new cjs.Shape();
    this.shape_123.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AAACuIgDgMIgchcIgBgDIgnh9Ig4AEIgbACIAAgDQgIgrgLgeIAHgCIDwhHIAXgHIgEBAIglAnIgCABIAWBMIAhBvIBBgUIgxBOIhDg9IgDgCIgGgGIABAPIACA6IAAAFIgcgSIgHAqIgBAEIgFAfg"
      );
    this.shape_123.setTransform(-236.575, -86.375);

    this.shape_124 = new cjs.Shape();
    this.shape_124.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "AjlCFIAAiCIAAgYIAAgEAiGBgIABACAgzBzIAIgGADaCFIAJAKIADgKACqCFIAAA3IAcg3AgbisIAFgOIhJgBAjJCFIAIgPIAMAPAipCFIAOg0"
      );
    this.shape_124.setTransform(-240.4, -111.25);

    this.shape_125 = new cjs.Shape();
    this.shape_125.graphics
      .f("#EB5E55")
      .s()
      .p(
        "AAACuIgDgMIgchcIgBgDIgnh9Ig4AEIgbACIAAgDQgIgrgLgeIAHgCIDahBIAWgGIAXgHIAAANIgEAzIglAnIgCABIAWBMIAhBvIBBgUIgxBOIhDg9IgDgCIgGgGIABAPIACA6IAAAFIgcgSIgHAqIgBAEIgFAfg"
      );
    this.shape_125.setTransform(-268.575, -128.375);

    this.shape_126 = new cjs.Shape();
    this.shape_126.graphics
      .f()
      .s("#EB5E55")
      .ss(1, 1, 1)
      .p(
        "ADaCFIAJAKIADgKACqCFIAAA3IAcg3AgbisIAFgOIhJgBAjlCFIAAiCIAAgYIAAgEAjJCFIAIgPIAMAPAipCFIAOg0AiGBgIABACAgzB0IAIgH"
      );
    this.shape_126.setTransform(-292.4, -168.25);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_117 }, { t: this.shape_116 }] })
        .to({ state: [{ t: this.shape_119 }, { t: this.shape_118 }] }, 1)
        .to({ state: [{ t: this.shape_121 }, { t: this.shape_120 }] }, 1)
        .to({ state: [{ t: this.shape_123 }, { t: this.shape_122 }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_125, p: { x: -268.575, y: -128.375 } },
              { t: this.shape_124 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_125, p: { x: -320.575, y: -185.375 } },
              { t: this.shape_126 },
            ],
          },
          1
        )
        .to({ state: [] }, 1)
        .to({ state: [] }, 57)
        .wait(189)
    );

    // how
    this.instance_1 = new lib.Symbol9("synched", 0);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1).to({ _off: true }, 1).wait(251)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-460.6, -319.5, 989, 630.2);

  // stage content:
  (lib.intro = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    this.actionFrames = [0, 780];
    // timeline functions:
    this.frame_0 = function () {
      this.stop();

      let anim = this;
      let totalFrames = this.totalFrames;
      let slider = this.slider;
      let startBtn = this.startBtn;
      let playPauseBtn = this.playPauseBtn;
      let isPlaying = false;

      startBtn.on("click", startAnim.bind(this));
      function startAnim() {
        this.play();
        isPlaying = true;
      }

      playPauseBtn.on("click", playPauseAnim.bind(this));
      function playPauseAnim() {
        if (isPlaying) {
          this.paused = true;
          isPlaying = false;
          playPauseBtn.playButton.visible = true;
          playPauseBtn.pauseButton.visible = false;
        } else {
          this.paused = false;
          isPlaying = true;
          playPauseBtn.playButton.visible = false;
          playPauseBtn.pauseButton.visible = true;
        }
      }

      slider.on("pressmove", function (e) {
        let pos = e.stageX / 600;
        let frame = pos * totalFrames;
        frame = Math.round(frame);
        anim.gotoAndPlay(frame);
      });
      slider.on("click", function (e) {
        let pos = e.stageX / 600;
        let frame = pos * totalFrames;
        frame = Math.round(frame);
        anim.gotoAndPlay(frame);
      });
    };
    this.frame_780 = function () {
      this.stop();

      this.replayBtn.addEventListener("click", replay.bind(this));

      function replay() {
        this.gotoAndPlay(2);
      }
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(780)
        .call(this.frame_780)
        .wait(1)
    );

    // progress_ball
    this.instance = new lib.progressball("synched", 0);
    this.instance.setTransform(22.7, 356.1);

    this.timeline.addTween(
      cjs.Tween.get(this.instance).to({ x: 532.7 }, 780).wait(1)
    );

    // slider
    this.slider = new lib.slider();
    this.slider.name = "slider";
    this.slider.setTransform(300, 353.5);

    this.timeline.addTween(cjs.Tween.get(this.slider).wait(781));

    // replay_btn
    this.replayBtn = new lib.replay();
    this.replayBtn.name = "replayBtn";
    this.replayBtn.setTransform(300.6, 164.85, 1, 1, 0, 0, 0, -7.7, -0.7);
    this.replayBtn.alpha = 0.3984;
    this.replayBtn._off = true;
    new cjs.ButtonHelper(this.replayBtn, 0, 1, 2, false, new lib.replay(), 3);

    this.timeline.addTween(
      cjs.Tween.get(this.replayBtn).wait(780).to({ _off: false }, 0).wait(1)
    );

    // stage_4_final
    this.instance_1 = new lib.Tween31("synched", 0);
    this.instance_1.setTransform(740.2, 165.25);
    this.instance_1._off = true;

    this.instance_2 = new lib.Tween32("synched", 0);
    this.instance_2.setTransform(300, 165);

    this.instance_3 = new lib.Symbol10("synched", 0);
    this.instance_3.setTransform(300, 165);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance_1 }] }, 569)
        .to({ state: [{ t: this.instance_2 }] }, 59)
        .to({ state: [{ t: this.instance_3 }] }, 12)
        .wait(141)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(569)
        .to({ _off: false }, 0)
        .to({ _off: true, x: 300, y: 165 }, 59)
        .wait(153)
    );

    // stage_3_records
    this.instance_4 = new lib.stage3("synched", 0);
    this.instance_4.setTransform(299.5, 34.1);
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(324)
        .to({ _off: false }, 0)
        .wait(245)
        .to({ startPosition: 318 }, 0)
        .to({ x: -248, startPosition: 57 }, 60)
        .to({ _off: true }, 1)
        .wait(151)
    );

    // stage_2
    this.instance_5 = new lib.dontworry("synched", 0);
    this.instance_5.setTransform(300, 165);
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(135)
        .to({ _off: false }, 0)
        .to({ _off: true }, 189)
        .wait(457)
    );

    // stage_1
    this.instance_6 = new lib.stage1("synched", 0);
    this.instance_6.setTransform(303.5, 54.1);
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(1)
        .to({ _off: false }, 0)
        .wait(134)
        .to({ startPosition: 99 }, 0)
        .to(
          {
            regX: -3.1,
            regY: 115.5,
            scaleX: 0.016,
            scaleY: 0.016,
            x: 300,
            y: 170,
            startPosition: 104,
          },
          2
        )
        .to({ _off: true }, 1)
        .wait(643)
    );

    // play_pause_btn
    this.playPauseBtn = new lib.playpausebtn();
    this.playPauseBtn.name = "playPauseBtn";
    this.playPauseBtn.setTransform(547.15, 356.2, 0.8122, 0.8122);
    this.playPauseBtn._off = true;
    new cjs.ButtonHelper(this.playPauseBtn, 0, 1, 1);

    this.timeline.addTween(
      cjs.Tween.get(this.playPauseBtn)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ _off: true }, 779)
        .wait(1)
    );

    // start_btn
    this.startBtn = new lib.startbtn();
    this.startBtn.name = "startBtn";
    this.startBtn.setTransform(300, 165);
    new cjs.ButtonHelper(this.startBtn, 0, 1, 1);

    this.timeline.addTween(
      cjs.Tween.get(this.startBtn).to({ _off: true }, 1).wait(780)
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(-407.4, -137.2, 1715.1, 741.5);
  // library properties:
  lib.properties = {
    id: "21B51ED2F03E4D429F3F1914FDDB0C34",
    width: 600,
    height: 380,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["21B51ED2F03E4D429F3F1914FDDB0C34"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth * 0.95,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + "px";
        container.style.height = h * sRatio + "px";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused) {
        stageChild.syncStreamSounds();
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
