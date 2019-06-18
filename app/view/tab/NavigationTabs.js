/**
 * This example shows navigation tabs docked to the side.
 */
Ext.define('SWApp.view.tab.NavigationTabs', {
    extend: 'Ext.tab.Panel',
    xtype: 'navigation-tabs',
    alias: 'SWApp.SideNavTab',

    otherContent: [{
        type: 'Styles',
        path: 'SWApp.view.tab.NavigationTabs'
    }],

    height: 1200,
    width: 800,

    ui: 'navigation',
    tabPosition: 'left',
    tabRotation: 0,
    tabBar: {
        // layout: {
        //     pack: 'center'
        // },
        border: false
    },

    defaults: {
        textAlign: 'left',
        bodyPadding: 15
    },

    items: [{
        title: 'Home',
        glyph: 72
    }, {
        title: 'Rasy',
        glyph: 85
    }, {
        title: 'Postaci',
        glyph: 117
    }, {
        title: 'Statki',
        glyph: 42
    }, {
        title: 'Pojazdy',
        glyph: 42
    }, {
        title: 'Filmy',
        glyph: 42
    }],

    setCollapsed: function(collapsed) {
        this[collapsed ? 'collapse' : 'expand']();
    }
});