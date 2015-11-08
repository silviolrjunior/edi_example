import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('post');
  },
  afterModel: function(posts){
    posts.forEach(function(post){
      if(post.get('isNew')){
        post.destroyRecord();
      }
    });
  }
});
