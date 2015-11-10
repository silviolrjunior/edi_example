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
          self.toast.info('New Storage Created!', 'Info');
          posts = nro_posts;
        }
      }, 1000);
    });
  },
  model: function() {
    return this.store.findAll('storage');
  },
  afterModel: function(storages){
    var self = this;
    setInterval(function(){
      storages = self.store.findAll('storage');
    }, 3000);
  },
  actions: {
    delete: function(storage) {
      var do_destroy = confirm("Are you sure you want to remove this storage?");
      if(do_destroy){
        storage.deleteRecord();
        storage.save().then(() => {
          this.transitionTo('storages');
          this.toast.success('Storage delete with success!', 'Great');
        });
      }
    }
  }
});
