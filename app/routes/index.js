import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      article: this.store.findAll('article', {reload: true})
        .then(function(articles) {
          return articles.sortBy('posted').reverse();
        })
    });
  },
  actions: {

  }
});
