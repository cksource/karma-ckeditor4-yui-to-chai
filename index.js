/**
 * @license Copyright (c) 2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

var path = require( 'path' );

function loadAsserts( files ) {
    files.unshift( {
        pattern: path.join( __dirname, 'src/asserts.js' ),
        included: true,
        served: true,
        watched: false,
        nocache: false
    } );
}

loadAsserts.$inject = [ 'config.files' ];

module.exports = {
    'framework:ckeditor4-yui-to-chai': [ 'factory', loadAsserts ]
};