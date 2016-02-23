import Ember from 'ember';

export default Ember.Component.extend({
  addNewMsg: false,
  actions: {
    msgFormShow() {
      this.set('addNewMsg', true);
    },
    saveMsg() {
    var details = {
      author: this.get('author') || null,
      subject: this.get('subject') || null,
      msg: this.get('msg') || null

    };
    this.set('addNewMsg', false);
    this.sendAction('saveMsg', details);
  }
}
});
