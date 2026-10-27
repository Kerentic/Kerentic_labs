const input = document.getElementById('text');
const direction = document.getElementById('direction');
const result = document.getElementById('result');
const swapButton = document.getElementById('swapDirection');
const copyImageButton = document.getElementById('copyImageButton');
const downloadImageButton = document.getElementById('downloadImageButton');
const characterCount = document.getElementById('characterCount');
const characterCounter = document.querySelector('.character-counter');

const maxCharacters = 250;

function updateResult() {
    const text = input.value.trim();
    const currentLength = input.value.length;

    result.textContent = text;
    characterCount.textContent = currentLength;

    const hasResult = text.length > 0;

    copyImageButton.disabled = !hasResult;
    downloadImageButton.disabled = !hasResult;

    if (direction.value === 'aurebesh') {
        result.classList.add('aurebesh-text');
    } else {
        result.classList.remove('aurebesh-text');
    }

    characterCounter.classList.toggle(
        'is-near-limit',
        currentLength >= 200 && currentLength < maxCharacters
    );

    characterCounter.classList.toggle(
        'is-at-limit',
        currentLength >= maxCharacters
    );
}

async function createResultCanvas() {
    const text = result.textContent.trim();

    if (!text) {
        return null;
    }

    const isAurebesh = direction.value === 'aurebesh';

    const fontFamily = isAurebesh
        ? '"FTAurebesh"'
        : 'Arial, sans-serif';

    const fontSize = isAurebesh ? 42 : 36;
    const lineHeight = fontSize * 1.5;
    const padding = 40;
    const maxCanvasWidth = 1200;
    const contentWidth = maxCanvasWidth - (padding * 2);

    if (isAurebesh) {
        await document.fonts.load(`${fontSize}px "FTAurebesh"`);
    }

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
        return null;
    }

    context.font = `${fontSize}px ${fontFamily}`;

    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
        const testLine = currentLine
            ? `${currentLine} ${word}`
            : word;

        const testWidth = context.measureText(testLine).width;

        if (testWidth > contentWidth && currentLine) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    }

    if (currentLine) {
        lines.push(currentLine);
    }

    let longestLineWidth = 0;

    for (const line of lines) {
        const lineWidth = context.measureText(line).width;

        if (lineWidth > longestLineWidth) {
            longestLineWidth = lineWidth;
        }
    }

    canvas.width = Math.ceil(
        Math.min(longestLineWidth + (padding * 2), maxCanvasWidth)
    );

    canvas.height = Math.ceil(
        (lines.length * lineHeight) + (padding * 2)
    );

    context.fillStyle = '#0b0d12';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.font = `${fontSize}px ${fontFamily}`;
    context.fillStyle = '#ffffff';
    context.textBaseline = 'top';

    lines.forEach((line, index) => {
        const y = padding + (index * lineHeight);

        context.fillText(line, padding, y);
    });

    return canvas;
}

function canvasToBlob(canvas) {
    return new Promise((resolve) => {
        canvas.toBlob(
            (blob) => resolve(blob),
            'image/png'
        );
    });
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

downloadImageButton.addEventListener('click', async () => {
    const canvas = await createResultCanvas();

    if (!canvas) {
        return;
    }

    const link = document.createElement('a');

    link.download = 'kerentic-aurebesh.png';
    link.href = canvas.toDataURL('image/png');

    link.click();
});

copyImageButton.addEventListener('click', async () => {
    const canvas = await createResultCanvas();

    if (!canvas) {
        return;
    }

    try {
        const blob = await canvasToBlob(canvas);

        if (!blob) {
            throw new Error('Unable to generate image.');
        }

        await navigator.clipboard.write([
            new ClipboardItem({
                'image/png': blob
            })
        ]);

        const originalText = copyImageButton.textContent;

        copyImageButton.textContent = 'Copied';

        setTimeout(() => {
            copyImageButton.textContent = originalText;
        }, 1500);
    } catch (error) {
        console.error('Unable to copy image:', error);

        const originalText = copyImageButton.textContent;

        copyImageButton.textContent = 'Copy failed';

        setTimeout(() => {
            copyImageButton.textContent = originalText;
        }, 1800);
    }
});

updateResult();