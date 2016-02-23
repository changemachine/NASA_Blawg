import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  msg: DS.attr(),
  subject: DS.attr()
});
