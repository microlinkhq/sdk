<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://microlink.io/
 * @since      1.0.0
 *
 * @package    Microlinkjs
 * @subpackage Microlinkjs/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Microlinkjs
 * @subpackage Microlinkjs/admin
 * @author     Microlink <hello@microlink.io>
 */
class Microlinkjs_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the menu item for settings page in WP `Settings` menu
	 *
	 * @since    1.0.0
	 */
	public function admin_menu_item() {
		 add_options_page( 'Microlinkjs Settings', 'Microlinkjs', 'manage_options', 'microlinkjs-settings', array($this, 'settings_page') );
	}


	/**
	 * Register the options page for `microlinkjs_settings_page`
	 *
	 * @since    1.0.0
	 */
	public function register_settings() {
		 register_setting( 'microlinkjs-settings', 'microlink_api_key' );
	}

	/**
	 * Register the options page for `microlinkjs_settings_page`
	 *
	 * @since    1.0.0
	 */
	public function settings_page() {
	?>
	<div class="wrap">
		<h1><?php _e('Microlinkjs Settings', $this->plugin_name);?></h1>
		<p>Global settings applied to all instances of the <code>[microlink/]</code> shortcode.</p>
		<form method="post" action="options.php">
		<?php
			settings_fields( 'microlinkjs-settings' );
			do_settings_sections( 'microlinkjs-settings' );
		?>
			<table class="form-table">
				<tr valign="top">
					<th scope="row"><?php _e('API Key', $this->plugin_name);?></th>
					<td>
						<input type="text" name="microlink_api_key" value="<?php echo esc_attr( get_option('microlink_api_key') ); ?>" />
					</td>
				</tr>
		 	</table>
			<?php submit_button(); ?>
		</form>
	</div>
	<?php
	}


}
