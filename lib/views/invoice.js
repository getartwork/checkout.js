// Generated by CoffeeScript 1.10.0
var Events, Invoice, View, crowdcontrol,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

crowdcontrol = require('crowdcontrol');

Events = crowdcontrol.Events;

View = crowdcontrol.view.View;

Invoice = (function(superClass) {
  var obj;

  extend(Invoice, superClass);

  function Invoice() {
    return Invoice.__super__.constructor.apply(this, arguments);
  }

  Invoice.prototype.tag = 'invoice';

  Invoice.prototype.html = require('../../templates/invoice.jade');

  Invoice.prototype.client = null;

  Invoice.prototype.config = null;

  Invoice.prototype.hide = false;

  Invoice.prototype.renderCurrency = require('../utils/currency').renderUICurrencyFromJSON;

  Invoice.prototype.events = (
    obj = {},
    obj["" + Events.Invoice.Hide] = function() {
      return this.setHide(true);
    },
    obj["" + Events.Invoice.Show] = function() {
      return this.setHide(false);
    },
    obj
  );

  Invoice.prototype.setHide = function(state) {
    this.hide = state;
    return this.update();
  };

  Invoice.prototype.js = function(opts) {
    this.client = opts.client;
    return this.config = opts.config;
  };

  Invoice.prototype.subtotal = function() {
    var i, item, items, len, subtotal;
    items = this.model.items;
    subtotal = -this.model.discount || 0;
    for (i = 0, len = items.length; i < len; i++) {
      item = items[i];
      subtotal += item.price * item.quantity;
    }
    this.model.subtotal = subtotal;
    return subtotal;
  };

  Invoice.prototype.shipping = function() {
    var items, shippingRate;
    items = this.model.items;
    shippingRate = this.model.shippingRate || 0;
    return this.model.shipping = shippingRate;
  };

  Invoice.prototype.taxRate = function() {
    return (this.model.taxRate || 0) * 100;
  };

  Invoice.prototype.tax = function() {
    return this.model.tax = Math.ceil((this.model.taxRate || 0) * this.subtotal());
  };

  Invoice.prototype.total = function() {
    var total;
    total = this.subtotal() + this.shipping() + this.tax();
    this.model.total = total;
    return total;
  };

  return Invoice;

})(View);

Invoice.register();

module.exports = Invoice;

//# sourceMappingURL=invoice.js.map