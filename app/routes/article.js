import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.article_id);
  },
  actions: {
    edit(article, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          article.set(key,params[key]);
        }
      });
      article.save();
      this.transitionTo('article', params.article_id);
    },
    saveComment(params) {
      var route = this;
      var article = params.article;
      var newComment = this.store.createRecord('comment', params);
      article.get('comments').addObject(newComment);
      newComment.save().then(function() {
        route.transitionTo('article', params.article_id);
      });
    },
    destroyArticle(article) {
      var route = this;
      article.destroyRecord().then(
        function(){
          route.transitionTo('index');
        }
      );
    }
  }
});
