# Kerentic Labs

**Kerentic Labs** is the experimental and creative technology space of **Kerentic Solutions**.

It is used to explore ideas, prototypes, internal tools, technical experiments, and research projects before deciding whether they should evolve into standalone products or dedicated repositories.

Kerentic Labs is intentionally lightweight: projects can begin small, iterate quickly, and grow only when they prove useful, technically interesting, or strategically valuable.

---

## Purpose

Kerentic Labs exists to experiment with technologies and ideas across areas such as:

- Artificial Intelligence
- Web technologies
- Automation
- Cloud infrastructure
- Developer tooling
- IoT
- Aerospace
- Data processing
- Creative technology
- Internal productivity tools
- Research prototypes

The objective is not to turn every experiment into a commercial product.

Instead, Labs provides a space to:

- Learn new technologies.
- Validate technical ideas.
- Build internal tools.
- Explore unconventional concepts.
- Create portfolio projects.
- Identify ideas worth developing further.

---

## Repository Structure

This repository is organized as a **monorepo**.

Each experiment lives inside its own directory:

```text
Kerentic_labs/
├── aurebesh-translator/
├── dnd_campaign/
└── README.md
```

Small experiments remain inside this repository.

If a project becomes sufficiently large, independent, or commercially relevant, it can later be promoted into its own dedicated repository.

Conceptually:

```text
Idea
  ↓
Kerentic Labs experiment
  ↓
Prototype
  ↓
Validated project
  ↓
Standalone Kerentic product
```

---

## Projects

### Experiment 000 — Aurebesh Translator

A web-based Aurebesh transliteration experiment built with PHP, JavaScript, Canvas API, and custom web fonts.

Features include:

- Latin → Aurebesh visual rendering.
- Real-time preview.
- Jedi and Sith interface themes.
- Copy result as image.
- PNG export.
- Character limits and responsive UI.
- Kerentic Labs branding.

Directory:

```text
aurebesh-translator/
```

Status:

**Active — v0.1**

---


## Project Classification

Projects inside Kerentic Labs can generally fall into one of these categories:

### Experiment

Small technical or creative exploration.

```text
Experiment 00X
```

Examples:

- Aurebesh Translator
- UI concepts
- API experiments
- automation prototypes

### Internal Tool

Software created primarily for Kerentic Solutions.

Examples:

- document conversion tools
- internal dashboards
- productivity utilities
- automation systems

### Research Prototype

Projects created to investigate a technology or technical hypothesis.

Examples:

- AI experiments
- IoT systems
- computer vision
- aerospace-related research
- data processing prototypes

---

## Technology Philosophy

Kerentic Labs projects should prioritize:

- simplicity;
- experimentation;
- understandable architecture;
- documentation;
- security;
- portability;
- learning value.

Frameworks and infrastructure should only be introduced when they provide clear value.

A small experiment does not need production-scale architecture on day one.

---

## Development Principles

Projects should ideally include:

- a clear README;
- defined scope;
- a simple roadmap;
- meaningful Git history;
- consistent naming;
- basic security practices;
- documented dependencies;
- appropriate licensing information.

Projects should remain isolated enough that one experiment does not unnecessarily affect another.

---

## Current Focus

Kerentic Labs is currently being used to establish a repeatable workflow for turning ideas into working experiments.

The initial focus includes:

```text
Creative experiments
        +
Internal Kerentic tools
        +
PHP / web development practice
        +
Reusable Kerentic branding
```

Future experiments may expand into areas such as:

```text
AI
IoT
Cloud
Automation
Aerospace
Energy
Biotechnology
Developer Tools
```

---

## Running Projects

Each project contains its own setup and execution instructions.

For example:

```bash
cd aurebesh-translator
composer install
php -S localhost:8000 -t public
```

Always refer to the project's own README for requirements and configuration.

---

## Naming Convention

New experiments should generally follow a consistent directory naming convention:

```text
lowercase-kebab-case
```

Examples:

```text
aurebesh-translator
document-converter
image-processing-lab
iot-sensor-dashboard
```

Where useful, projects can also receive an experiment number:

```text
Experiment 000 — Aurebesh Translator
Experiment 001 — ...
Experiment 002 — ...
```

---

## From Lab to Product

A project should be considered for promotion outside Kerentic Labs when it begins requiring:

- independent releases;
- dedicated CI/CD;
- separate issue tracking;
- its own deployment lifecycle;
- independent branding;
- commercial development;
- significant team ownership.

At that point, it can be moved into a standalone Kerentic repository.

---

## Disclaimer

Some Kerentic Labs projects may explore fictional universes, third-party technologies, APIs, datasets, fonts, artwork, or other external intellectual property.

Each project should clearly document its own licensing, attribution, and affiliation status where relevant.

Kerentic Labs experiments should not imply sponsorship, partnership, or endorsement by third parties unless such a relationship actually exists.

---

## Kerentic Solutions

Kerentic Solutions is a technology company founded in Querétaro, México, focused on building technology, research capabilities, and innovative solutions with long-term global ambitions.

Kerentic Labs serves as its environment for experimentation, learning, prototyping, and technological exploration.

**Kerentic Solutions**  
Research · Innovation · Technology

Querétaro, México.