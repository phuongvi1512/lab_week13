
const originalContainer = document.querySelector('.original-container');

originalContainer.addEventListener('click', (evt) => {
    const copiedTextDiv = `<div>${evt.target.outerHTML}</div> `;
    const copyContainer = document.querySelector('.copy-container');
    copyContainer.insertAdjacentHTML('afterbegin',copiedTextDiv);
});


const clearButton = document.querySelector('button')

clearButton.addEventListener('click', () => {
    const childDivcopyContainer = document.querySelector('.copy-container div')
    function removeDiv(div) {
        div.remove()
    }
    removeDiv(childDivcopyContainer)
});

