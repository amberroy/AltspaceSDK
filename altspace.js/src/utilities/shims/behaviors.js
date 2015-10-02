/**
 * @author gavanwilhite / http://gavanwilhite.com
 */

THREE.Scene.prototype.updateBehaviors = function () {

    var now = performance.now();
    var lastNow = this.__lastNow || now;

    var deltaTime = now - lastNow;

    var self = this;
    this.traverse(function (object3d) {

        if (object3d === self) return;

        object3d.updateBehaviors(deltaTime);

    });

    this.__lastNow = now;

}

THREE.Object3D.prototype.updateBehaviors = function (deltaTime) {

    var hasBehaviors = this.behaviors && Array.isArray(this.behaviors);

    if (!hasBehaviors) return;

    var toInit = [];
    var toUpdate = this.behaviors.slice();// prevent mutation of the behavior list during this loop

    for (var i = 0, max = this.behaviors.length; i < max; i++) {

        var behavior = this.behaviors[i];
        if (!behavior.__isInitialized) toInit.push(behavior);

    }

    //Awake
    for (var i = 0, max = toInit.length; i < max; i++) {

        var behavior = toInit[i];
        try {

            if (behavior.awake) behavior.awake.call(behavior, this);

        } catch (e) {

            (console.error || console.log).call(console, e.stack || e);

        }

    }

    //Start
    for (var i = 0, max = toInit.length; i < max; i++) {

        var behavior = toInit[i];
        try {

            if (behavior.start) behavior.start.call(behavior);

        } catch (e) {

            (console.error || console.log).call(console, e.stack || e);

        }
        behavior.__isInitialized = true;

    }

    //Update
    for (var i = 0, max = toUpdate.length; i < max; i++) {

        var behavior = toUpdate[i];
        try {

            if (behavior.update) behavior.update.call(behavior, deltaTime);

        } catch (e) {

            (console.error || console.log).call(console, e.stack || e);

        }

    }

}