/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SWApp.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'SWApp.view.main.MainController',
        'SWApp.view.main.MainModel'
    ],

    style: 'background-color: #c3c8ce;',
    html: '<img src="https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"  height=auto style="position: absolute; top: 0; left: 100px; height: 100%; width: 100%; overflow: hidden;" />',

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    items: [
        Ext.create('SWApp.SideNavTab'),

    ],

    layout: {
        type: 'border'
    },

    initComponent : function() {
        this.callParent();
    }

});