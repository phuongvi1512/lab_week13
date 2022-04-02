
const originalContainer = document.querySelector('.original-container');

originalContainer.addEventListener('click', (evt) => {
    const copiedTextDiv = `<div>${evt.target.outerHTML}</div> `;
    const copyContainer = document.querySelector('.copy-container');
    copyContainer.insertAdjacentHTML('afterbegin',copiedTextDiv);
});


const clearButton = document.querySelector('button')

function clearCopiedDiv() {
    const allCopies = document.querySelectorAll('.copy-container div')
    for (const copy of allCopies) {
        copy.remove()
    }
}
clearButton.addEventListener('click', clearCopiedDiv)
