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

<main class="container">
    <header>
        <span class="eyebrow">Kerentic Labs · Experiment 001</span>
        <h1>Aurebesh Translator</h1>
        <p>Transliterate text between Latin characters and Aurebesh.</p>
    </header>

    <form method="POST">
        <label for="text">Input</label>

        <textarea
            id="text"
            name="text"
            placeholder="May the Force be with you..."
        ><?= htmlspecialchars($input, ENT_QUOTES, 'UTF-8') ?></textarea>

        <label for="direction">Direction</label>

        <select id="direction" name="direction">
            <option value="aurebesh" <?= $direction === 'aurebesh' ? 'selected' : '' ?>>
                Latin → Aurebesh
            </option>

            <option value="latin" <?= $direction === 'latin' ? 'selected' : '' ?>>
                Aurebesh → Latin
            </option>
        </select>

        <button type="submit">Convert</button>
    </form>

    <?php if ($output !== ''): ?>
        <section class="result">
            <h2>Result</h2>

            <div id="result">
                <?= htmlspecialchars($output, ENT_QUOTES, 'UTF-8') ?>
            </div>

            <button type="button" id="copyButton">
                Copy
            </button>
        </section>
    <?php endif; ?>
</main>

<script src="js/app.js"></script>

</body>
</html>