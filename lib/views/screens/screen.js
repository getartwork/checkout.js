// Generated by CoffeeScript 1.10.0
var Events, FormView, Screen, crowdcontrol,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

crowdcontrol = require('crowdcontrol');

Events = crowdcontrol.Events;

FormView = crowdcontrol.view.form.FormView;

Screen = (function(superClass) {
  extend(Screen, superClass);

  function Screen() {
    return Screen.__super__.constructor.apply(this, arguments);
  }

  Screen.prototype.tag = 'screen';

  Screen.prototype.title = 'Untitled';

  Screen.prototype.showConfirm = true;

  Screen.prototype.showBack = true;

  Screen.prototype.showInvoice = true;

  Screen.prototype.index = 0;

  Screen.prototype.total = 1;

  Screen.prototype.style = '';

  Screen.prototype.screenManagerObs = null;

  Screen.prototype.js = function(opts) {
    var ref, width;
    this.total = (ref = opts.total) != null ? ref : 1;
    width = 100 / this.total;
    this.on('updated', (function(_this) {
      return function() {
        return $(_this.root).css('width', width + "%");
      };
    })(this));
    this.screenManagerObs = opts.screenManagerObs;
    this.client = opts.client;
    return Screen.__super__.js.apply(this, arguments);
  };

  Screen.prototype.show = function() {};

  Screen.prototype._submit = function() {
    return this.screenManagerObs.trigger(Events.Screen.Next);
  };

  return Screen;

})(FormView);

module.exports = Screen;

//# sourceMappingURL=screen.js.map