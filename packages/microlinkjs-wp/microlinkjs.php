<?php

/**
 * @link              https://microlink.io/
 * @since             1.0.0
 * @package           Microlinkjs
 *
 * @wordpress-plugin
 * Plugin Name:       Microlinkjs
 * Plugin URI:        https://microlink.js.org/
 * Description:       Convert your links into beautiful previews with our [microlink] shortcode
 * Version:           1.0.0
 * Author:            Microlink
 * Author URI:        https://microlink.io/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       microlinkjs
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Current plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'PLUGIN_NAME_VERSION', '1.0.0' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-microlinkjs.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_microlinkjs() {

	$plugin = new Microlinkjs();
	$plugin->run();

}
run_microlinkjs();
