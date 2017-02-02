/* jshint node: true */
'use strict';

module.exports = {
  name: 'demo-addon-1',
  included: function(app) {
    // this._super.included(app);

    app.import(app.bowerDirectory + '/gridstack/dist/gridstack.css');
    app.import(app.bowerDirectory + '/gridstack/dist/gridstack-extra.css');
    app.import(app.bowerDirectory + '/jquery/dist/jquery.js');
    app.import(app.bowerDirectory + '/jquery-ui/jquery-ui.js');
    app.import(app.bowerDirectory + '/lodash/dist/lodash.js');
    app.import(app.bowerDirectory + '/gridstack/dist/gridstack.js');
  }
};
