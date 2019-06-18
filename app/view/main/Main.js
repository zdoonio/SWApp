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