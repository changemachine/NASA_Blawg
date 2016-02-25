import Ember from 'ember';

export default Ember.Component.extend(
  {
  model(params) {
    return this.store.findRecord('article', params.article_id);
  },
  editArticleForm: false,
  actions: {
    editArticleForm() {
      this.set('editArticleForm', true);
    },
    editArticle(article) {
      var params = {
        author: this.get('author'),
        image: this.get('image'),
        posted: Date.now(),
        story: this.get('story'),
        title: this.get('title'),
        tags: this.get('tags'),
      };
      this.set('editArticleForm', false);
      this.sendAction('edit', article, params);
    }
  }
});
