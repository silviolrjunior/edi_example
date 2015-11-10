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
    return this.store.findAll('product');
  },
  afterModel: function(products){
    var self = this;
    setInterval(function(){
      products = self.store.findAll('product');
    }, 3000);
  },
  actions: {
    delete: function(product) {
      var do_destroy = confirm("Are you sure you want to remove this product?");
      if(do_destroy){
        product.deleteRecord();
        product.save().then(() => {
          this.transitionTo('products');
          this.toast.success('Product delete with success!', 'Great');
        });
      }
    }
  }
});
