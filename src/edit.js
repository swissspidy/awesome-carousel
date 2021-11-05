import { BentoBaseCarousel } from '@bentoproject/base-carousel/react';
import '@bentoproject/base-carousel/styles.css';

import { createRef } from '@wordpress/element';
import { Button } from '@wordpress/components';

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
	const ref = createRef();

	const goToNextSlide = () => ref.current.next();
	const goToPreviousSlide = () => ref.current.prev();

	return (
		<div {...useBlockProps()}>
			<div className="awesome-carousel-wrapper">
				<BentoBaseCarousel ref={ref} autoAdvance={false} loop={false} snap={true}>
					<img src="https://source.unsplash.com/random/1200x800?1" width={1200} height={800} alt="" />
					<img src="https://source.unsplash.com/random/1200x800?2" width={1200} height={800} alt="" />
					<img src="https://source.unsplash.com/random/1200x800?3" width={1200} height={800} alt="" />
					<img src="https://source.unsplash.com/random/1200x800?4" width={1200} height={800} alt="" />
				</BentoBaseCarousel>
			</div>
			<div className="awesome-carousel-buttons">
<Button isSecondary onClick={goToPreviousSlide}>{'Previous'}</Button>
<Button isSecondary onClick={goToNextSlide}>{'Next'}</Button>
			</div>
		</div>
	);
}

