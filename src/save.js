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
	// These would come from the block attributes.
	const images = [
		'https://images.unsplash.com/photo-1632746976199-ccd0dd828368?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
		'https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
		'https://images.unsplash.com/photo-1539081034274-b9991e9829d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
		'https://images.unsplash.com/photo-1505299916137-b69793a66907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
	];

	return (
		<div {...useBlockProps.save()}>
			<div className="awesome-carousel-wrapper">
				<bento-base-carousel auto-advance="false" loop="false" snap="true">
					{images.map((image) => {
						return (
								<img key={image} src={image} width={1200} height={800} alt="" />
						)
					})}
				</bento-base-carousel>
			</div>
			<div className="awesome-carousel-buttons">
				<button className="awesome-carousel-prev">{'Previous'}</button>
				<button className="awesome-carousel-next">{'Next'}</button>
			</div>
		</div>
	);
}
