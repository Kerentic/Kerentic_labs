const input = document.getElementById('text');
const direction = document.getElementById('direction');
const result = document.getElementById('result');
const swapButton = document.getElementById('swapDirection');
const copyImageButton = document.getElementById('copyImageButton');
const downloadImageButton = document.getElementById('downloadImageButton');

function updateResult() {
    const text = input.value.trim();

    result.textContent = text;

    const hasResult = text.length > 0;

    copyImageButton.disabled = !hasResult;
    downloadImageButton.disabled = !hasResult;

    if (direction.value === 'aurebesh') {
        result.classList.add('aurebesh-text');
    } else {
        result.classList.remove('aurebesh-text');
    }
}

input.addEventListener('input', updateResult);
direction.addEventListener('change', updateResult);

swapButton.addEventListener('click', () => {
    direction.value =
        direction.value === 'aurebesh'
            ? 'latin'
            : 'aurebesh';

    updateResult();
});

updateResult();