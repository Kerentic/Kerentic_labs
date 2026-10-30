<?php

declare(strict_types=1);

require_once __DIR__ . '/../vendor/autoload.php';
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
        <span class="eyebrow">
            Kerentic Labs · Experiment 001
        </span>

        <h1>Aurebesh Translator</h1>

        <p>
            Transliterate text between Latin characters and Aurebesh.
        </p>
    </header>

    <form id="translatorForm">
        <label for="text">
            Input
        </label>

        <textarea
            id="text"
            name="text"
            maxlength="250"
            placeholder="May the Force be with you..."
        ></textarea>

        <div class="character-counter">
            <span id="characterCount">0</span>/250
        </div>

        <div class="conversion-field">
            <label for="direction">Conversion</label>

            <select id="direction" name="direction">
                <option value="aurebesh">
                    Latin → Aurebesh
                </option>
            </select>
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

<?php require __DIR__ . '/../shared/footer.php'; ?>

<script src="js/app.js"></script>

</body>
</html>