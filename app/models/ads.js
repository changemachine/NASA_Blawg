import DS from 'ember-data';

export default DS.Model.extend({
  vendor: DS.attr(),
  image: DS.attr(),
  title: DS.attr()
});
