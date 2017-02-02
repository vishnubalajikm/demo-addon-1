import Ember from 'ember';
import layout from '../templates/components/gridstack-item';

export default Ember.Component.extend({
  init() {
    console.log(" ---======== test item-======== ");
    this._super(...arguments);
  },
  layout: layout,
  tagName: 'div',
  attributeBindings: ['x:data-gs-x','y:data-gs-x','width:data-gs-width','height:data-gs-height'],
});
