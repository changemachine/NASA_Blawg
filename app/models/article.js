import DS from 'ember-data';

export default DS.Model.extend({
  author:     DS.attr(),
  image:      DS.attr(),
  posted:     DS.attr(),
  story:      DS.attr(),
  title:      DS.attr(),
  tags:       DS.attr()
});
