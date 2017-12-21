<?php

/**
 * Register the shortcodes used for rendering Microlink link previews
 *
 * @link       https://microlink.io/
 * @since      1.0.0
 *
 * @package    Microlinkjs
 * @subpackage Microlinkjs/includes
 */

class Microlinkjs_Shortcodes {

	/**
	 * Initialize the shortcodes
	 *
	 * @since    1.0.0
	 */
	public function __construct() {

		add_shortcode('microlink', array($this, 'shortcode_markup'));

	}

	public function shortcode_markup($atts, $content = '') {
		$href = isset($atts['href']) ? $atts['href'] : '';
		return "<a href='$href' data-microlinkwp-preview>$content</a>";
  }

}
