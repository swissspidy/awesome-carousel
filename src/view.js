(async () => {
	await window.customElements.whenDefined('bento-base-carousel');

	const carousels = document.querySelectorAll(
			'.wp-block-create-block-awesome-carousel'
	);

	for (const carousel of carousels) {
		const bentoComponent = carousel.querySelector('bento-base-carousel');
		const api = await bentoComponent.getApi();

		carousel
				.querySelector('.awesome-carousel-prev')
				.addEventListener('click', () => {
					api.prev();
				});
		carousel
				.querySelector('.awesome-carousel-next')
				.addEventListener('click', () => {
					api.next();
				});
	}
})();
