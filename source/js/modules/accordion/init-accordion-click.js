const infoItem = document.querySelectorAll('[data-accordion="element"]');

export function initClickElementAccordion() {
  infoItem.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target.classList.contains('[data-accordion="button"]')) {
        return;
      }
      const buttons = el.querySelectorAll('[data-accordion="button"]');
      buttons.forEach((button) => {
        button.click();
      });
    });
  });
}
