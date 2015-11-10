import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('shipment');
  },
  afterModel: function(shipments){
    var self = this;
    setInterval(function(){
      shipments = self.store.findAll('shipment');
    }, 3000);
  },
  actions: {
    delete: function(shipment) {
      var do_destroy = confirm("Are you sure you want to remove this shipment?");
      if(do_destroy){
        shipment.deleteRecord();
        shipment.save().then(() => {
          this.transitionTo('shipments');
          this.toast.success('Shipment delete with success!', 'Great');
        });
      }
    }
  }
});
