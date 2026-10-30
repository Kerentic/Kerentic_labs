const input = document.getElementById('text');
const result = document.getElementById('result');
const copyImageButton = document.getElementById('copyImageButton');
const downloadImageButton = document.getElementById('downloadImageButton');
const characterCount = document.getElementById('characterCount');
const characterCounter = document.querySelector('.character-counter');
const themeToggle = document.getElementById('themeToggle');

const maxCharacters = 250;

const savedTheme =
    localStorage.getItem('aurebesh-theme') || 'dark';

function setTheme(theme) {
    document.body.dataset.theme = theme;

    localStorage.setItem(
        'aurebesh-theme',
        theme
    );

    const isLight = theme === 'light';

    themeToggle.setAttribute(
        'aria-label',
        isLight
            ? 'Switch to Sith theme'
            : 'Switch to Jedi theme'
    );
}

setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme =
        document.body.dataset.theme || 'dark';

    setTheme(
        currentTheme === 'dark'
            ? 'light'
            : 'dark'
    );
});

function updateResult() {
    const text = input.value.trim();
    const currentLength = input.value.length;

    result.textContent = text;
    characterCount.textContent = currentLength;

    const hasResult = text.length > 0;

    copyImageButton.disabled = !hasResult;
    downloadImageButton.disabled = !hasResult;

    result.classList.add('aurebesh-text');

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

    const fontFamily = '"FTAurebesh"';
    const fontSize = 42;
    const lineHeight = fontSize * 1.5;

    const padding = 40;
    const maxCanvasWidth = 1200;
    const contentWidth = maxCanvasWidth - (padding * 2);

    const signature = 'Kerentic Labs · Aurebesh Translator';
    const signatureFontSize = 12;
    const signatureAreaHeight = 48;
    const signatureSafetyMargin = 80;

    await document.fonts.load(`${fontSize}px "FTAurebesh"`);
    await document.fonts.load(`${signatureFontSize}px "FTAurebesh"`);

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
        return null;
    }

    context.font = `${fontSize}px ${fontFamily}`;

    const words = text.split(/\s+/);
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
        longestLineWidth = Math.max(
            longestLineWidth,
            context.measureText(line).width
        );
    }

    context.font = `${signatureFontSize}px "FTAurebesh"`;

    const signatureWidth =
        context.measureText(signature).width;

    context.font = `${fontSize}px ${fontFamily}`;

    const requiredContentWidth = Math.max(
        longestLineWidth,
        signatureWidth + signatureSafetyMargin
    );

    canvas.width = Math.ceil(
        Math.min(
            requiredContentWidth + (padding * 2),
            maxCanvasWidth
        )
    );

    canvas.height = Math.ceil(
        (lines.length * lineHeight)
        + (padding * 2)
        + signatureAreaHeight
    );

    context.fillStyle = '#0b0d12';

    context.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    context.font = `${fontSize}px ${fontFamily}`;
    context.fillStyle = '#ffffff';
    context.textBaseline = 'top';
    context.textAlign = 'left';

    lines.forEach((line, index) => {
        const y =
            padding + (index * lineHeight);

        const metrics =
            context.measureText(line);

        const visualWidth =
            metrics.actualBoundingBoxLeft
            + metrics.actualBoundingBoxRight;

        const x =
            (canvas.width - visualWidth) / 2
            + metrics.actualBoundingBoxLeft;

        context.fillText(line, x, y);
    });

    const dividerY =
        canvas.height - signatureAreaHeight;

    const dividerWidth =
        canvas.width * 0.7;

    const dividerStart =
        (canvas.width - dividerWidth) / 2;

    context.strokeStyle = '#222936';
    context.lineWidth = 1;

    context.beginPath();
    context.moveTo(dividerStart, dividerY);

    context.lineTo(
        dividerStart + dividerWidth,
        dividerY
    );

    context.stroke();

    context.font =
        `${signatureFontSize}px "FTAurebesh"`;

    const availableSignatureWidth =
        canvas.width - (padding * 2);

    const measuredSignatureWidth =
        context.measureText(signature).width;

    if (
        measuredSignatureWidth
        > availableSignatureWidth
    ) {
        const scale =
            availableSignatureWidth
            / measuredSignatureWidth;

        const adjustedSize = Math.max(
            10,
            Math.floor(
                signatureFontSize * scale
            )
        );

        context.font =
            `${adjustedSize}px "FTAurebesh"`;
    }

    context.fillStyle = '#6f7888';
    context.textBaseline = 'middle';
    context.textAlign = 'center';

    context.fillText(
        signature,
        canvas.width / 2,
        dividerY + (signatureAreaHeight / 2)
    );

    context.textAlign = 'start';
    context.textBaseline = 'alphabetic';

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

downloadImageButton.addEventListener(
    'click',
    async () => {
        const canvas =
            await createResultCanvas();

        if (!canvas) {
            return;
        }

        const link =
            document.createElement('a');

        link.download =
            'kerentic-aurebesh.png';

        link.href =
            canvas.toDataURL('image/png');

        link.click();
    }
);

copyImageButton.addEventListener(
    'click',
    async () => {
        const canvas =
            await createResultCanvas();

        if (!canvas) {
            return;
        }

        try {
            const blob =
                await canvasToBlob(canvas);

            if (!blob) {
                throw new Error(
                    'Unable to generate image.'
                );
            }

            await navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': blob
                })
            ]);

            const originalText =
                copyImageButton.textContent;

            copyImageButton.textContent =
                'Copied';

            setTimeout(() => {
                copyImageButton.textContent =
                    originalText;
            }, 1500);
        } catch (error) {
            console.error(
                'Unable to copy image:',
                error
            );

            const originalText =
                copyImageButton.textContent;

            copyImageButton.textContent =
                'Copy failed';

            setTimeout(() => {
                copyImageButton.textContent =
                    originalText;
            }, 1800);
        }
    }
);

updateResult();