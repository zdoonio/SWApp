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
        border: false
    },

    defaults: {
        textAlign: 'left',
        bodyPadding: 15
    },

    items: [{
        title: 'Planety',
        // glyph: 85
    }, {
        title: 'Rasy',
        // glyph: 85
    }, {
        title: 'Postaci',
        // glyph: 117
    }, {
        title: 'Statki',
        // glyph: 42
    }, {
        title: 'Pojazdy',
        // glyph: 42
    }, {
        title: 'Filmy',
        // glyph: 42
    }],

    listeners: {
        render: function() {
            this.items.each(function(panel){
                // Added tabclick event for tabpanel
                panel.tab.on('click', function(){
                    var window = Ext.widget('window',{
                        title: this.title,
                        width: 500,
                        height: 500,
                        layout: 'fit',
                        minWidth: 300,
                        minHeight: 300,
                        collapsible: true,
                        maximizable: true,
                        ghost: false,
                        items: [{
                            xtype: 'tab'
                        }]
                    });

                    window.show();
                });
            });
        }
    },

    setCollapsed: function(collapsed) {
        this[collapsed ? 'collapse' : 'expand']();
    }
});