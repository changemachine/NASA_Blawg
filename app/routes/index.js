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
    // saveArticle(details) {
    //   var newArticle = this.store.createRecord('article', details);
    //   newArticle.save();
    //   this.transitionTo('index');
    // },
    // destroyArticle(article) {
    //   article.destroyRecord();
    //   this.transitionTo('index');
    // }
    //
  }
});
