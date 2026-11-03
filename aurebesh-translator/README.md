# Aurebesh Translator

A web-based Aurebesh transliteration experiment created by **Kerentic Labs**, the experimental and creative technology division of **Kerentic Solutions**.

The project converts Latin text into a visual Aurebesh representation and allows users to export the result as an image.

> Kerentic Labs · Experiment 000

---

## Overview

Aurebesh Translator started as a small creative project to explore PHP, frontend development, typography, image rendering, and experimental user interfaces.

The application accepts Latin text and renders it using an Aurebesh typeface directly in the browser.

Users can then:

- Preview the result in real time.
- Copy the rendered result as an image.
- Download the result as a PNG.
- Switch between Jedi and Sith visual themes.
- Export branded Aurebesh images.

The project is intentionally lightweight and does not require a framework.

---

## Features

### Real-time Aurebesh rendering

Text entered by the user is immediately rendered using an Aurebesh web font.

```text
Latin text
    ↓
Aurebesh visual representation
```

### Character limit

Input is limited to **250 characters** to keep generated images readable and reasonably sized.

A character counter provides visual feedback as the user approaches the limit.

### Image export

The rendered Aurebesh output can be:

- Copied directly to the clipboard as a PNG image.
- Downloaded as a PNG file.

Generated images include:

- Automatic word wrapping.
- Dynamic canvas sizing.
- Centered Aurebesh text.
- Dark export background.
- Kerentic Labs signature rendered in Aurebesh.

### Jedi / Sith themes

The interface includes two visual modes.

**Sith / Dark**

- Dark cinematic interface.
- Dark background artwork.
- Light Kerentic branding.

**Jedi / Light**

- Bright interface.
- Light cinematic background.
- Dark Kerentic branding.

Theme preference is stored locally in the browser using `localStorage`.

### Kerentic branding

The application includes a reusable Kerentic-style header and footer with:

- Kerentic logo.
- Kerentic Labs project context.
- Theme toggle.
- Social links.
- Links back to the Kerentic ecosystem.

---

## Technology Stack

The project intentionally uses a simple stack without a web framework.

- **PHP 8.5+**
- **Composer**
- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **Canvas API**
- **Clipboard API**
- **Web Fonts / WOFF2**

Current development environment:

```text
PHP 8.5
Composer 2.10+
```

---

## Project Structure

```text
aurebesh-translator/
├── public/
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   │       ├── backgrounds/
│   │       └── themes/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   └── index.php
│
├── shared/
│   ├── header.php
│   └── footer.php
│
├── src/
│   └── AurebeshTranslator.php
│
├── composer.json
├── composer.lock
└── README.md
```

---

## Requirements

Before running the project locally, make sure you have:

```text
PHP >= 8.5
Composer >= 2
```

Verify your PHP installation:

```bash
php -v
```

Verify Composer:

```bash
composer --version
```

---

## Installation

Clone the Kerentic Labs repository:

```bash
git clone <KERENTIC_LABS_REPOSITORY_URL>
```

Enter the Aurebesh Translator directory:

```bash
cd Kerentic_labs/aurebesh-translator
```

Install Composer dependencies and generate the autoloader:

```bash
composer install
```

---

## Running Locally

From the root of the project, start PHP's development server:

```bash
php -S localhost:8000 -t public
```

Then open:

```text
http://localhost:8000
```

Stop the server with:

```text
Ctrl + C
```

---

## How It Works

The application currently treats Aurebesh primarily as a **visual writing system**.

The underlying text remains Latin text:

```text
May the Force be with you
```

The browser renders that text using the Aurebesh font:

```text
Latin characters
      ↓
FTAurebesh font
      ↓
Aurebesh glyphs
```

Because standard Unicode does not provide a universal Aurebesh character set, copying the underlying text alone would not preserve its visual appearance on other devices.

For this reason, the application focuses on exporting the rendered result as an image.

---

## Image Generation

PNG generation happens entirely in the browser using the HTML Canvas API.

The export pipeline is approximately:

```text
User input
    ↓
Aurebesh rendering
    ↓
Canvas
    ↓
Automatic wrapping
    ↓
Kerentic Labs signature
    ↓
PNG
```

No server-side image processing is currently required.

---

## Themes

The selected theme is stored locally:

```javascript
localStorage
```

This means the browser remembers whether the user selected Jedi or Sith mode between visits.

The themes affect the website interface only.

Generated Aurebesh images currently preserve the established dark export style regardless of the active interface theme.

---

## Aurebesh Font

The project uses a web-compatible Aurebesh typeface in WOFF2 format.

Font files are stored locally under:

```text
public/assets/fonts/
```

Third-party font files and related assets remain subject to their respective licenses and terms.

Before redistributing or deploying modified assets, review the license files included with those assets.

---

## Current Status

**Version:** `v0.1`

The current release focuses on the initial visual experience and export workflow.

Implemented:

- Latin → Aurebesh visual rendering.
- Real-time preview.
- 250-character input limit.
- Character counter.
- Responsive interface.
- Copy Image.
- Download PNG.
- Automatic image word wrapping.
- Branded image exports.
- Jedi and Sith themes.
- Persistent theme selection.
- Kerentic Labs branding.

---

## Roadmap

Potential future improvements include:

### v0.2 — Transliteration Engine

- Formal Aurebesh transliteration rules.
- Digraph handling.
- Improved character normalization.
- Automated tests.

Possible digraph support includes:

```text
ae
ch
eo
kh
ng
oo
sh
th
```

### v0.3 — Export Improvements

- SVG export.
- Optional transparent backgrounds.
- Export resolution controls.
- Jedi and Sith export styles.
- Additional image layouts.

### v0.4 — User Experience

- Improved accessibility.
- Keyboard shortcuts.
- Better mobile interaction.
- Shareable results.

### Future Research

Possible experimental extensions:

- Visual Aurebesh keyboard.
- Aurebesh recognition from images.
- Text extraction and transliteration.
- Additional fictional writing systems as separate Kerentic Labs experiments.

---

## Kerentic Labs

Kerentic Labs is an experimental space within **Kerentic Solutions** for exploring technologies, creative concepts, prototypes, research ideas, and internal tools.

Projects can begin as small experiments and evolve into standalone products when they demonstrate sufficient technical or commercial potential.

Aurebesh Translator is:

```text
Kerentic Labs
└── Experiment 000
    └── Aurebesh Translator
```

---

## Disclaimer

This is an **unofficial fan-made technology experiment**.

Aurebesh, Star Wars, and related names, symbols, characters, and intellectual property belong to their respective rights holders.

Kerentic Solutions and Kerentic Labs are not affiliated with, sponsored by, or endorsed by Lucasfilm Ltd., The Walt Disney Company, or their affiliates.

The project is intended as a software development, design, and creative technology experiment.

---

## License

The Kerentic project source code is currently maintained as proprietary software unless otherwise stated.

Third-party fonts, artwork, libraries, trademarks, and other assets may have separate licenses or usage restrictions.

Always refer to the corresponding license or terms included with each third-party asset.

---

## Kerentic Solutions

Built as part of **Kerentic Labs**.

**Kerentic Solutions**  
Research · Innovation · Technology

Querétaro, México.