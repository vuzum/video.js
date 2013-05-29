/**
 * @fileoverview Exports for Video.js.
 * Exports are publically available variables.
 * All other variables (including function names) will probably
 * be renamed by closure compiler.
 */

/**
 * vjs (internal only) = videojs = _V_ (external only)
 *
 * vjs is the same as the goog var in Closure Library. It holds all variables
 * used in Video.js development. Closure compiler will rename all variables,
 * including class prototype functions, except those specifcally
 * exported (eports.js). Don't assume any function you can use in Video.js
 * development will be available on window.videojs for use with other js.
 *
 * For example, vjs.trim is an internal function and will be renamed by compiler
 * to something like 'a.b', or actually more likely 'a' removing it from
 * a parent object.
 *
 * videojs is a var that helps bridge bewteen internal and external development.
 * Avoid using it over vjs when developing the Video.js core.
 *
 * _V_ is only external. It's just cute and short(er). Like jQuery === $.
 * Also because it's nice having a different var for internal (vjs) vs.
 * external (_V_) because it makes it clearer what context we're in.
 */
goog.exportSymbol('videojs', vjs);
goog.exportSymbol('_V_', vjs);

goog.exportSymbol('videojs.options', vjs.options);

// Allow external components to use global cache
goog.exportSymbol('videojs.cache', vjs.cache);

// goog.exportSymbol('videojs.CoreObject', vjs.CoreObject);
// goog.exportProperty(vjs.CoreObject, 'create', vjs.CoreObject.create);

goog.exportSymbol('videojs.Component', vjs.Component);
goog.exportProperty(vjs.Component.prototype, 'dispose', vjs.Component.prototype.dispose);
goog.exportProperty(vjs.Component.prototype, 'createEl', vjs.Component.prototype.createEl);
goog.exportProperty(vjs.Component.prototype, 'el', vjs.Component.prototype.el);
goog.exportProperty(vjs.Component.prototype, 'addChild', vjs.Component.prototype.addChild);
goog.exportProperty(vjs.Component.prototype, 'children', vjs.Component.prototype.children);
goog.exportProperty(vjs.Component.prototype, 'on', vjs.Component.prototype.on);
goog.exportProperty(vjs.Component.prototype, 'off', vjs.Component.prototype.off);
goog.exportProperty(vjs.Component.prototype, 'one', vjs.Component.prototype.one);
goog.exportProperty(vjs.Component.prototype, 'trigger', vjs.Component.prototype.trigger);
goog.exportProperty(vjs.Component.prototype, 'triggerReady', vjs.Component.prototype.triggerReady);
goog.exportProperty(vjs.Component.prototype, 'show', vjs.Component.prototype.show);
goog.exportProperty(vjs.Component.prototype, 'hide', vjs.Component.prototype.hide);
goog.exportProperty(vjs.Component.prototype, 'width', vjs.Component.prototype.width);
goog.exportProperty(vjs.Component.prototype, 'height', vjs.Component.prototype.height);
goog.exportProperty(vjs.Component.prototype, 'dimensions', vjs.Component.prototype.dimensions);
goog.exportProperty(vjs.Component.prototype, 'ready', vjs.Component.prototype.ready);

goog.exportSymbol('videojs.Player', vjs.Player);
goog.exportProperty(vjs.Player.prototype, 'dispose', vjs.Player.prototype.dispose);

goog.exportSymbol('videojs.MediaLoader', vjs.MediaLoader);
goog.exportSymbol('videojs.TextTrackDisplay', vjs.TextTrackDisplay);

goog.exportSymbol('videojs.ControlBar', vjs.ControlBar);

goog.exportSymbol('videojs.MediaTechController', vjs.MediaTechController);
goog.exportProperty(vjs.MediaTechController.prototype.features, 'progressEvents', vjs.MediaTechController.prototype.features.progressEvents);
goog.exportProperty(vjs.MediaTechController.prototype.features, 'timeupdateEvents', vjs.MediaTechController.prototype.features.timeupdateEvents);

goog.exportSymbol('videojs.Html5', vjs.Html5);
goog.exportProperty(vjs.Html5, 'Events', vjs.Html5.Events);
goog.exportProperty(vjs.Html5, 'isSupported', vjs.Html5.isSupported);
goog.exportProperty(vjs.Html5, 'canPlaySource', vjs.Html5.canPlaySource);

// Export non-standard HTML5 video API methods.
// Standard method names already protected by default externs.
goog.exportProperty(vjs.Html5.prototype, 'setCurrentTime', vjs.Html5.prototype.setCurrentTime);
goog.exportProperty(vjs.Html5.prototype, 'setVolume', vjs.Html5.prototype.setVolume);
goog.exportProperty(vjs.Html5.prototype, 'setMuted', vjs.Html5.prototype.setMuted);
goog.exportProperty(vjs.Html5.prototype, 'setPreload', vjs.Html5.prototype.setPreload);
goog.exportProperty(vjs.Html5.prototype, 'setAutoplay', vjs.Html5.prototype.setAutoplay);
goog.exportProperty(vjs.Html5.prototype, 'setLoop', vjs.Html5.prototype.setLoop);

goog.exportSymbol('videojs.Flash', vjs.Flash);
goog.exportProperty(vjs.Flash, 'isSupported', vjs.Flash.isSupported);
goog.exportProperty(vjs.Flash, 'canPlaySource', vjs.Flash.canPlaySource);
goog.exportProperty(vjs.Flash, 'onReady', vjs.Flash['onReady']);

goog.exportSymbol('videojs.autoSetup', vjs.autoSetup);

goog.exportSymbol('videojs.plugin', vjs.plugin);

goog.exportSymbol('videojs.createTimeRange', vjs.createTimeRange);
