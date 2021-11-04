import { BentoBaseCarousel } from '@bentoproject/base-carousel/react';
import '@bentoproject/base-carousel/styles.css';

import { createRef } from '@wordpress/element';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const images = [
			'https://images.unsplash.com/photo-1632746976199-ccd0dd828368?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1539081034274-b9991e9829d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1505299916137-b69793a66907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
	];

	const ref = createRef();

	return (
		<div {...useBlockProps()}>
			<div className="awesome-carousel-wrapper">
				<BentoBaseCarousel ref={ref} autoAdvance={false} loop={false} snap={true}>
					{images.map((image) => {
						return (
								<img key={image} src={image} width={1200} height={800} alt="" />
						)
					})}
				</BentoBaseCarousel>
			</div>
		</div>
	);
}
