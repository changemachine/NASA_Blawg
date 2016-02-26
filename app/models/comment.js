import DS from 'ember-data';

export default DS.Model.extend({
  article_id: DS.belongsTo('article', { async: true }),
  comment_text: DS.attr(),
  commenter: DS.attr()
});
