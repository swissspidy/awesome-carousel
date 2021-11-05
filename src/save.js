/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	return (
		<div {...useBlockProps.save()}>
			<div className="awesome-carousel-wrapper">
				<bento-base-carousel auto-advance="false" loop="false" snap="true">
					<img src="https://source.unsplash.com/random/1200x800?1" width={1200} height={800} alt="" />
					<img src="https://source.unsplash.com/random/1200x800?2" width={1200} height={800} alt="" />
					<img src="https://source.unsplash.com/random/1200x800?3" width={1200} height={800} alt="" />
					<img src="https://source.unsplash.com/random/1200x800?4" width={1200} height={800} alt="" />
				</bento-base-carousel>
			</div>
			<div className="awesome-carousel-buttons">
				<button className="awesome-carousel-prev">{'Previous'}</button>
				<button className="awesome-carousel-next">{'Next'}</button>
			</div>
		</div>
	);
}
