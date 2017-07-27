// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_blockquote
 * @copyright  2013 Damyon Wiese  <damyon@moodle.com>
 * @copyright  2017 The University of Southern Queensland
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_blockquote-button
 */

/**
 * Atto text editor blockquote plugin.
 *
 * @namespace M.atto_blockquote
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

Y.namespace('M.atto_blockquote').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function() {
        this.addButton({
            buttonName: 'blockquote',
            callback: this._changeStyle,
            icon: 'icon',
            iconComponent: 'atto_blockquote',

            // Watch the following tags and add/remove highlighting as appropriate:
            tags: 'blockquote'
        });
    },

    /**
     * Add a blockquote element.
     *
     * @method _changeStyle
     * @private
     */
    _changeStyle: function() {
        document.execCommand('formatBlock', false, '<blockquote>');

        // Mark as updated
        this.markUpdated();
    }
});
