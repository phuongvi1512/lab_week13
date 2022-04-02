
const originalContainer = document.querySelector('.original-container');

originalContainer.addEventListener('click', (evt) => {
    const copiedText = `<div>${evt.target.outerHTML}</div> `;
    const copyContainer = document.querySelector('.copy-container');
    copyContainer.insertAdjacentHTML('afterbegin',copiedText);
});
