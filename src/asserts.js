/**
 * @license Copyright (c) 2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* global chai */
/* eslint-env browser */
/* eslint no-var: 0, object-shorthand: 0 */

( function( window, chai ) {
	'use strict';

	var assert = chai.assert;

	// TODO Can be done in more automatic way.
	window.assert = {

		isString: assert.isString,

		isNumber: assert.isNumber,

		isTrue: assert.isTrue,

		isObject: assert.isObject,

		isNull: assert.isNull,

		isNotNull: assert.isNotNull,

		isFalse: assert.isFalse,

		isUndefined: assert.isUndefined,

		fail: function( msg ) {
			assert.fail( null, null, msg );
		},

		isInstanceOf: function( type, actual, msg ) {
			assert.instanceOf( actual, type, msg );
		},

		throwsError: function( type, fn, msg ) {
			assert.throws( fn, type, msg );
		},

		areSame: function( expected, actual, msg ) {
			assert.equal( actual, expected, msg );
		},

		areNotSame: function( expected, actual, msg ) {
			assert.notEqual( actual, expected, msg );
		}
	};

	window.arrayAssert = {
		itemsAreSame: function( expected, actual, msg ) {
			assert.deepEqual( actual, expected, msg );
		},

		itemsAreEqual: function( expected, actual, msg ) {
			assert.deepEqual( actual, expected, msg );
		}
	};

	window.objectAssert = {
		areEqual: function( expected, actual, msg ) {
			assert.deepEqual( actual, expected, msg );
		}
	};
} ( window, chai ) );
