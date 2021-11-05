<?php
/**
 * Plugin Name:       Awesome Carousel
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Pascal Birchler
 * License:           Apache License 2.0
 * License URI:       https://www.apache.org/licenses/LICENSE-2.0
 * Text Domain:       awesome-carousel
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_awesome_carousel_block_init() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'create_block_awesome_carousel_render_block',
		)
	);
}

add_action( 'init', 'create_block_awesome_carousel_block_init' );

/**
 * Render callback for the carousel block.
 *
 * @param array  $attributes Block attributes.
 * @param string $content Block content.
 *
 * @return string Block content.
 */
function create_block_awesome_carousel_render_block( $attributes, $content ) {
	if ( ! is_admin() ) {
		wp_enqueue_script( 'awesome-carousel-view' );
		wp_enqueue_style( 'bento-base-carousel' );
	}

	return $content;
}

/**
 * Registers the scripts and styles for Bento components.
 *
 * @return void
 */
function create_block_awesome_carousel_register_assets() {
	wp_register_script( 'bento-runtime', 'https://cdn.ampproject.org/bento.js', array(), false, true );
	wp_register_script( 'bento-base-carousel', 'https://cdn.ampproject.org/v0/bento-base-carousel-1.0.js', array( 'bento-runtime' ), false, true );
	wp_register_style( 'bento-base-carousel', 'https://cdn.ampproject.org/v0/bento-base-carousel-1.0.css', array() );

	wp_register_script( 'awesome-carousel-view', plugin_dir_url( __FILE__ ) . 'build/view.js', array( 'bento-base-carousel' ) );
}

add_action( 'init', 'create_block_awesome_carousel_register_assets' );
