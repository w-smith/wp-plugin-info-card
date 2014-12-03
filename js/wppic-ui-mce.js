/**
 * Plugin Name: WP Plugin Info Card by b*web
 * Plugin URI: http://b-website.com/
 * Author: Brice CAPOBIANCO - b*web
 */	
(function() {
	tinymce.PluginManager.add('wppic_mce_button', function( editor, url ) {
		editor.addButton( 'wppic_mce_button', {
			icon: 'wppic-icon',
			onclick: function() {
				editor.windowManager.open( {
					title: editor.getLang('wppic_tinymce_plugin.title'),
					body: [
						{
							type: 'listbox',
							name: 'type',
							label: editor.getLang('wppic_tinymce_plugin.type'),
							'values': [
								{text: editor.getLang('wppic_tinymce_plugin.plugin'), value: 'plugin'},
								{text: editor.getLang('wppic_tinymce_plugin.theme'), value: 'theme'},
							]
						},
						{
							type: 'textbox',
							name: 'slug',
							required: true,
							label: editor.getLang('wppic_tinymce_plugin.slug'),
							value: ''
						},
						{
							type: 'textbox',
							name: 'image',
							classes : 'wppic-media', //necessary to call the media library
							label: editor.getLang('wppic_tinymce_plugin.image'),
							value: '',							
						},
						{
							type: 'listbox',
							name: 'align',
							label: editor.getLang('wppic_tinymce_plugin.align'),
							'values': [
								{text: editor.getLang('wppic_tinymce_plugin.default'), value: ''},
								{text: editor.getLang('wppic_tinymce_plugin.center'), value: 'center'},
								{text: editor.getLang('wppic_tinymce_plugin.left'), value: 'left'},
								{text: editor.getLang('wppic_tinymce_plugin.right'), value: 'right'}
							]
						},
						{
							type: 'textbox',
							name: 'containerid',
							label: editor.getLang('wppic_tinymce_plugin.containerid'),
							value: ''
						},
						{
							type: 'textbox',
							name: 'margin',
							label: editor.getLang('wppic_tinymce_plugin.margin'),
							value: ''
						},
						{
							type: 'listbox',
							name: 'clear',
							label: editor.getLang('wppic_tinymce_plugin.clear'),
							'values': [
								{text: editor.getLang('wppic_tinymce_plugin.default'), value: ''},
								{text: editor.getLang('wppic_tinymce_plugin.before'), value: 'before'},
								{text: editor.getLang('wppic_tinymce_plugin.after'), value: 'after'}
							]
						},
						{
							type: 'textbox',
							name: 'expiration',
							label: editor.getLang('wppic_tinymce_plugin.expiration'),
							value: ''
						},
						{
							type: 'listbox',
							name: 'ajax',
							label: editor.getLang('wppic_tinymce_plugin.ajax'),
							'values': [
								{text: editor.getLang('wppic_tinymce_plugin.default'), value: ''},
								{text: editor.getLang('wppic_tinymce_plugin.no'), value: 'no'},
								{text: editor.getLang('wppic_tinymce_plugin.yes'), value: 'yes'}
							]
						},
						{
							type: 'textbox',
							name: 'custom',
							label: editor.getLang('wppic_tinymce_plugin.custom'),
							value: ''
						},
					],
					onsubmit: function( e ) {
						if(e.data.type != ''){
							e.data.type = 'type="' + e.data.type + '" ';
						}
						if(e.data.slug != ''){
							e.data.slug = 'slug="' + e.data.slug + '" ';
						} else {
							editor.windowManager.alert(editor.getLang('wppic_tinymce_plugin.emptyslug'));
							e.stopPropagation();
                            e.preventDefault();
						}
						if(e.data.image != ''){
							e.data.image = 'image="' + e.data.image + '" ';
						}
						if(e.data.align != ''){
							e.data.align = 'align="' + e.data.align + '" ';
						}
						if(e.data.containerid != ''){
							e.data.containerid = 'containerid="' + e.data.containerid + '" ';
						}
						if(e.data.margin != ''){
							e.data.margin = 'margin="' + e.data.margin + '" ';
						}
						if(e.data.clear != ''){
							e.data.clear = 'clear="' + e.data.clear + '" ';
						}
						if(e.data.expiration != ''){
							e.data.expiration = 'expiration="' + e.data.expiration + '" ';
						}
						if(e.data.ajax != ''){
							e.data.ajax = 'ajax="' + e.data.ajax + '" ';
						}
						if(e.data.custom != ''){
							e.data.custom = 'custom="' + e.data.custom + '" ';
						}
						
						if(e.data.slug != ''){
							editor.insertContent( 
								'[wp-pic '
									+ e.data.type
									+ e.data.slug
									+ e.data.image
									+ e.data.align
									+ e.data.containerid
									+ e.data.margin
									+ e.data.clear
									+ e.data.expiration
									+ e.data.ajax
									+ e.data.custom
								+ ']'
							);
						};
					}
				});
			}
		});
	});
})();