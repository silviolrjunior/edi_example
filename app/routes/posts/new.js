import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post');
  },
  actions: {
    save: function() {
      var post = this.currentModel;
      var self = this;
      post.save().then(function(){
        Ember.$.ajax({
          type: "POST",
          data: "<?xml version=1.0?>" + 
          "<title>" + post.get('title') + "</title>" +
          "<message>" + post.get('message') + "</message>",
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
        self.transitionTo('posts');
      });
    }    
  }
});