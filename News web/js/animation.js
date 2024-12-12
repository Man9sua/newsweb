// Adding fade-in animation for text, button, and snow elements
document.addEventListener('DOMContentLoaded', () => {
	const heroContent = document.querySelector('.hero-content');
	const buttonStart = document.querySelector('.button-start');
	const snowCanvas = document.querySelector('.snow');

	// Set initial opacity and transition
	heroContent.style.opacity = '0';
	heroContent.style.transition = 'opacity 2s ease';

	buttonStart.style.opacity = '0';
	buttonStart.style.transition = 'opacity 2s ease';

	snowCanvas.style.opacity = '0';
	snowCanvas.style.transition = 'opacity 2s ease';

	// Trigger animations
	setTimeout(() => {
			heroContent.style.opacity = '1';
			buttonStart.style.opacity = '1';
			snowCanvas.style.opacity = '1';
	}, 300); // Delay for better effect
});
