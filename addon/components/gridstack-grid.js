import Ember from 'ember';
import layout from '../templates/components/gridstack-grid';

const {
  run,
  $
} = Ember;

export default Ember.Component.extend({
  layout: layout,
  init() {
    console.log(" ---======== test -======== ");
    this._super(...arguments);
  },
  didInsertElement() {
    console.log(" ----- did insert element -- ");
    // run.later(function() {

      var grid = Ember.$('#grid-stack').gridstack({
        width: 6,
        cell_height: 270,
        vertical_margin: 18,
        horizontal_margin: 20,
        float: false,
        static_grid: true
      });
    // }, 100);
    this.set('grid',grid);
  }
});
