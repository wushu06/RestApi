<?php
/*
Plugin Name: Rest Apli
Plugin URI: https://wordpress.org/plugins/health-check/
Description: test apli
Version: 0.1.0
Author: The Health Check Team
Author URI: http://tbb
Text Domain: health-check
Domain Path: /languages
*/

function restapi_scripts(){
	if(!is_admin()){
		//if(is_user_logged_in() && current_user_can('edit_others_posts' )){
		wp_enqueue_script('restapi_script', plugin_dir_url(__FILE__).'js/restapi.ajax.js', array(jquery), '0.1', true );
		wp_localize_script('restapi_script', 'WPsettings',array(
				'root' => esc_url_raw(rest_url()),
				'nonce' => wp_create_nonce('wp_rest'),
				'current_ID' => get_the_ID()
			) );
		//}	
	}
}
add_action('wp_enqueue_scripts', 'restapi_scripts' );