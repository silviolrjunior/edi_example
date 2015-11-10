import Ember from 'ember';

export default Ember.Route.extend({
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
