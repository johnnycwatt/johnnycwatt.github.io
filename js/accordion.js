// accordion.js

document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Close all accordion items
            accordionButtons.forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
                btn.nextElementSibling.style.maxHeight = null;
            });

            // Toggle the clicked accordion item
            if (!isExpanded) {
                button.setAttribute('aria-expanded', 'true');
                const content = button.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
