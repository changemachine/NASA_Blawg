import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rental: this.store.findAll('rental'),
      announcements: this.store.findAll('announcements')
  });
  },
  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },
    saveMsg(details) {
      var newMsg = this.store.createRecord('announcements', details);
      newMsg.save();
      this.transitionTo('index');
    },
    destroyMsg(message) {
      message.destroyRecord();
      this.transitionTo('index');
    }
  }
});
