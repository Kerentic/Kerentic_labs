<?php

declare(strict_types=1);

require_once __DIR__ . '/../vendor/autoload.php';

use Kerentic\Aurebesh\AurebeshTranslator;

$translator = new AurebeshTranslator();

$input = $_POST['text'] ?? '';
$direction = $_POST['direction'] ?? 'aurebesh';
$output = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $output = $direction === 'latin'
        ? $translator->toLatin($input)
        : $translator->toAurebesh($input);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aurebesh Translator | Kerentic Labs</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
<?php require __DIR__ . '/../shared/header.php'; ?>
<main class="container">
    <header>
        <span class="eyebrow">Kerentic Labs · Experiment 001</span>
        <h1>Aurebesh Translator</h1>
        <p>Transliterate text between Latin characters and Aurebesh.</p>
    </header>

    <form id="translatorForm">
    <label for="text">Input</label>

    <textarea
        id="text"
        name="text"
        placeholder="May the Force be with you..."
    ><?= htmlspecialchars($input, ENT_QUOTES, 'UTF-8') ?></textarea>

    <div class="direction-row">
        <div class="direction-field">
            <label for="direction">Direction</label>

            <select id="direction" name="direction">
                <option value="aurebesh">
                    Latin → Aurebesh
                </option>

                <option value="latin">
                    Aurebesh → Latin
                </option>
            </select>
        </div>

        <button
            type="button"
            id="swapDirection"
            class="swap-button"
            aria-label="Swap translation direction"
        >
            ⇄
        </button>
    </div>
</form>



        <section class="result">
            <div class="result-header">
                <h2>Result</h2>
            </div>

            <div
                id="result"
                class="result-output"
                aria-live="polite"
            ></div>

            <div class="result-actions">
                <button
                    type="button"
                    id="copyImageButton"
                    disabled
                >
                    Copy Image
                </button>

                <button
                    type="button"
                    id="downloadImageButton"
                    disabled
                >
                    Download PNG
                </button>
            </div>
        </section>
</main>

<script src="js/app.js"></script>
<?php require __DIR__ . '/../shared/footer.php'; ?>
</body>
</html>