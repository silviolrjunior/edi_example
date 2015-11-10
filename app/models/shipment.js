import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  delivery_date: attr('date'),
  storage_number: attr('string'),
  created_at: attr('string'),
  storage_id: attr('string')
});