/**
 * @license Copyright (c) 2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

const path = require( 'path' );

/**
 * Adds `src/asserts.js` and `chai.js` file paths to files array which results
 * in Karma including them in the test context.
 *
 * @param {Array} files Array of files loaded by Karma.
 * @returns {undefined} undefined
 */
function loadAsserts( files ) {
	files.unshift( {
		pattern: path.join( __dirname, 'src/asserts.js' ),
		included: true,
		served: true,
		watched: false,
		nocache: false
	} );
	files.unshift( {
		pattern: require.resolve( 'chai/chai.js' ),
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
