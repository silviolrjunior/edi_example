import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('products', function(){
    this.route('product', { path:  '/:product_id'});
  });
  this.route('storages', function(){
    this.route('storage', { path:  '/:storage_id'});
    this.route('new');
  });
  this.route('shipments', function(){
    this.route('shipment', { path:  '/:shipment_id'});
  });
});


export default Router;
