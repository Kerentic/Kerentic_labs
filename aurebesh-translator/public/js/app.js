const copyButton = document.getElementById('copyButton');
const result = document.getElementById('result');

if (copyButton && result) {
    copyButton.addEventListener('click', async () => {z 
        await navigator.clipboard.writeText(result.textContent.trim());

        copyButton.textContent = 'Copied';

        setTimeout(() => {
            copyButton.textContent = 'Copy';
        }, 1500);
    });
}