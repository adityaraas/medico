# Medico

A static visual learning library with a course-catalog presentation, 19 medical subject collections, 14 foundation lessons, 114 subject concept lessons, 128 recall cards, 20 concept maps, five interactive mechanism diagrams and a 180-day study scaffold.

## Run locally

`python -m http.server 4173 --bind 127.0.0.1 --directory dist`

Open http://127.0.0.1:4173. No installation or build is needed. Source files in `dist` are the deployed assets.

## Content limits

This is a functional educational website with concise learning notes and broad syllabus checklists. It is not exhaustive coverage of all NMC competencies and is not a clinician-reviewed medical textbook or exam question bank. Source context, exam eligibility and clinical-use limitations are available in the website's Sources & content scope page. No payments, paid products or account synchronization are implemented. Progress uses explicitly device-local browser storage.

## Validation

`node --check dist/app.js`

`node --check dist/curriculum.js`

`node verify.cjs`

The verification exercises curriculum integrity, all lesson render paths and key state transitions using a lightweight DOM simulation. Local HTTP readiness is checked separately. No controllable browser was available in this session; responsive layout, actual browser interactions and a supported WebMCP runtime could not be visually validated. Optional WebMCP registration is feature-detected, and its action logic is verified in simulation only.
