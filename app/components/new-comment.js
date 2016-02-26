import Ember from 'ember';

export default Ember.Component.extend({
  showCommentForm: false,
  actions: {
    showCommentForm(){
      this.set('showCommentForm', true);
    },
    saveComment(article) {
      var params = {
        article: article,
        commenter: this.get('commenter'),
        comment_text: this.get('comment_text')
      };
      this.set('showCommentForm', true);
      this.sendAction('saveComment', params);
    }
  }
});
