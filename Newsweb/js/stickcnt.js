document.addEventListener("DOMContentLoaded", function() {
	const buttons = document.querySelectorAll("nav button");
	const indicator = document.querySelector(".indicator");

	// Устанавливаем начальную позицию полоски под первой кнопкой
	const setActiveButton = (button) => {
			// Удаляем класс активной кнопки
			buttons.forEach(btn => btn.classList.remove("active"));
			button.classList.add("active");

			// Перемещаем полоску под активную кнопку и уменьшаем ширину на 25%
			const buttonWidth = button.offsetWidth;
			const reducedWidth = buttonWidth * 0.75; // Уменьшаем ширину на 25%

			// Устанавливаем новую ширину и позицию полоски
			indicator.style.width = `${reducedWidth}px`;
			indicator.style.left = `${button.offsetLeft + (buttonWidth - reducedWidth) / 2}px`;
	};

	// При клике на кнопку обновляем активное состояние
	buttons.forEach(button => {
			button.addEventListener("click", () => setActiveButton(button));
	});

	// Устанавливаем активную кнопку по умолчанию
	setActiveButton(buttons[0]);

	// Переключаем активную кнопку на кнопку с id "contactBtn"
	const contactButton = document.getElementById("contactBtn");
	if (contactButton) {
			setActiveButton(contactButton);
	}
});
