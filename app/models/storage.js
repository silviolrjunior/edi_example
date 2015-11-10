import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  number: attr('string'),
  address: attr('string'),
  created_at: attr('string'),
  rule: attr('string')
});