import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('storage');
  },
  actions: {
    save: function() {
      var storage = this.currentModel;
      var self = this;
      storage.save().then(function(){
        Ember.$.ajax({
          type: "POST",
          data: "<?xml version=1.0?>" + 
          "<number>" + storage.get('number') + "</number>" +
          "<address>" + storage.get('address') + "</address>",
          url: "http://localhost:3000/xml",
          dataType: "xml",
          success: function(xml){
            console.log(xml, 'xml');
          },
          error : function (xhr, ajaxOptions, thrownError){  
            console.log(xhr.status);          
            console.log(thrownError);
          } 
        });
        self.transitionTo('storages');
        self.toast.success('Storage created with success!', 'Great');
      });
    }    
  }
});