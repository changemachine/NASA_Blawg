import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveArticle() {
        var params = {
          author: this.get('author'),
          image: this.get('image'),
          posted: Date.now(),
          story: this.get('story'),
          title: this.get('title'),
          tags: this.get('tags')
        };
        console.log("PARAMS " + params.posted);
        this.sendAction('saveArticle', params);
      }
  }
});
