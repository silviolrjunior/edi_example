import Ember from 'ember';

export default Ember.Route.extend({
  init: function(){
    this._super();
    var self = this;
    Ember.$(window).load(function(){
      var posts = Ember.$('table tbody tr').length;
      setInterval(function(){
        var nro_posts = Ember.$('table tbody tr').length;
        if(nro_posts > posts){
          self.toast.info('New Product Created!', 'Info');
          posts = nro_posts;
        }
      }, 1000);
    });
  },
  model: function() {
    return Ember.RSVP.hash({
      storage: this.store.createRecord('storage'),
      shipment: this.store.createRecord('shipment'),
      product: this.store.createRecord('product')
    });
  },
  afterModel: function(products){
    setInterval(function(){
      xml = this.currentModel;
      shipment = xml.match(/<Shipment>([^.*]+\/g)<\/Shipment>/)
      shipment_id = shipment.match(/<id>([^.*]+\/g)<\/id>/)
      shipment_delivery_date = shipment.match(/<delivery_date>([^.*]+\/g)<\/delivery_date>/)
      product = shipment.match(/<product>([^.*]+\/g)<\/product>/)
      product_value = product.match(/<value>([^.*]+\/g)<\/value>/)
    }, 3000);
  }
});
