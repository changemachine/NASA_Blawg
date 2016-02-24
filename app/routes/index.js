import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      article: this.store.findAll('article'),
      ads: this.store.findAll('ads')
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
