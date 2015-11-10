import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  description: attr('string'),
  value: attr('string'),
  created_at: attr('string'),
  shipment_id: attr('string')
});