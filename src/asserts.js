/**
 * @license Copyright (c) 2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

( function( window ) {
    'use strict';

    window.assert = {
        isInstanceOf: function( type, actual, msg ) {
            assert.instanceOf( actual, type, msg );
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
} )( window );