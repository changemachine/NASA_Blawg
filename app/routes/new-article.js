import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    saveArticle(params) {
      console.log("save 2 "+params);

      var route = this;
      var newArticle = this.store.createRecord('article', params);
      newArticle.save().then(function() {
        route.transitionTo('index');
      });
    }
  }
});
