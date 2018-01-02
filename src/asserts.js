/**
 * @license Copyright (c) 2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* global chai, CKEDITOR */
/* eslint-env browser */
/* eslint no-var: 0, object-shorthand: 0 */

( function( window, chai ) {
	'use strict';

	var assert = chai.assert;

	function compareNativeElements( assert, expected, actual, msg ) {
		if ( expected instanceof CKEDITOR.dom.node && actual instanceof CKEDITOR.dom.node ) {
			assert( actual.$, expected.$, msg );
		} else {
			assert( actual, expected, msg );
		}
	}

	function htmlCollectionToArray( htmlCollection ) {
		if ( htmlCollection instanceof HTMLCollection ) {
			return Array.prototype.slice.call( htmlCollection );
		}
		return htmlCollection;
	}

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

		isArray: assert.isArray,

		isFunction: assert.isFunction,

		isNumberInRange: function( expected, min, max, message ) {
			assert.isNumber( expected, 'Expected value should be number type.' );
			assert.isNumber( min, 'Min value should be number type.' );
			assert.isNumber( max, 'Max value should be number type.' );

			assert.isAbove( max, min, 'Min value is greater or equal than max.' );
			assert.isAbove( expected, min, message );
			assert.isBelow( expected, max, message );
		},

		isMatching: function( expected, actual, msg ) {
			assert.match( actual, expected, msg );
		},

		fail: function( msg ) {
			assert.fail( null, null, msg );
		},

		isInstanceOf: function( type, actual, msg ) {
			assert.instanceOf( actual, type, msg );
		},

		throwsError: function( type, fn, msg ) {
			assert.throws( fn, type, msg );
		},

		areEqual: function( expected, actual, msg ) {
			compareNativeElements( assert.equal, expected, actual, msg );
		},

		areNotEqual: function( expected, actual, msg ) {
			compareNativeElements( assert.notEqual, expected, actual, msg );
		},

		areSame: function( expected, actual, msg ) {
			compareNativeElements( assert.equal, expected, actual, msg );
		},

		areNotSame: function( expected, actual, msg ) {
			compareNativeElements( assert.notEqual, expected, actual, msg );
		}
	};

	window.arrayAssert = {
		itemsAreSame: function( expected, actual, msg ) {
			assert.deepEqual( actual, expected, msg );
		},

		itemsAreEqual: function( expected, actual, msg ) {
			// Some unit tests passes HTMLCollection instead of an array. It worked with YUI, however Chai
			// does a strict checking so we need to convert HTMLCollection to array.
			assert.sameDeepOrderedMembers( htmlCollectionToArray( actual ), expected, msg );
		},

		isEmpty: function( actual, msg ) {
			assert.isEmpty( actual, msg );
		}
	};

	window.objectAssert = {
		areEqual: function( expected, actual, msg ) {
			assert.deepEqual( actual, expected, msg );
		}
	};
} ( window, chai ) );
