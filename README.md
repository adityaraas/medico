# Medico

## Topic-by-topic MBBS years

Open `http://127.0.0.1:4173/#mbbs`, or choose **MBBS years** in the main navigation. The year pathway is also linked from the home page and each relevant subject collection.

| Year / phase | Main subject collections | Topic pages |
| --- | --- | --- |
| First year / Phase I | Anatomy (18), Physiology (18), Biochemistry (16) | 52 |
| Second year / Phase II | Pathology (18), Pharmacology (18), Microbiology (18) | 54 |
| Third year / Phase III Part I | Community Medicine (16), Forensic Medicine (12), Ophthalmology (12), ENT (12) | 52 |

The 158 original topic pages contain a three-part explanation, two memory points, an answered recall question, a practical study task, contextual glossary entries, related concept lessons, and source-reading links where available. Browse year → subject → topic, search the topic text, filter by subject or completion, and move through a subject using previous/next links. Year pages also link longitudinal clinical, communication, ethics, and community learning. Original 128 concept lessons and the 180-day plan remain separate, so their existing IDs and progress keep working.

Phase allocation was checked against the [NMC CBME 2024 curriculum, revised 12 September 2024](https://nmc.org.in/storage/cms/rules-regulation-nmc/YTW423v3EsCFdtPv3I5qZkaNNhuXfub42UZITDRM.pdf), PDF pages 30–32 and 46, via the [current NMC regulations directory](https://nmc.org.in/page/rules-regulations-rules-regulations-nmc) on 10 October 2026. The topic grouping and sequence are editorial: they cover major topic areas, not every official competency. Batch-specific university schedules may differ. Phase III Part II is the separate final professional phase; its existing subject collections can still be browsed through Explore subjects. The source notes and scope are visible in the app.

Notes, last-read topic, and completion use `medico-mbbs-v1` in browser localStorage. Completion is self-assessment rather than skill certification. Invalid saved IDs are ignored; notes are escaped, length-limited, and retained in memory with a visible message when persistent storage fails. No existing progress key is overwritten.

Implementation: `dist/mbbs-curriculum.js` and `dist/mbbs-ui.js`. Run `node verify-mbbs.cjs` to check all 158 pages, all year/subject routes, invalid routes, previous/next links, full-text topic search, subject/status filters, reset, saved state restoration, escaping, malformed state, and storage failure. All six verification suites pass, and the server returns the new assets with HTTP 200. Browser visual QA remains unavailable because no browser or app surface is connected.

## Class 10 starting explanations

Every one of the 128 concept lessons now starts with three plain-language teaching steps, a concrete example, a topic-specific memory point, a common misunderstanding, and recall answers with explanations. Foundation review links support learners who need prerequisite concepts. Technical overview notes and source reading are available in expandable sections after the beginner explanation. Flashcard answers also include the beginner reasoning and memory point.

Open `http://127.0.0.1:4173/#words` for 582 searchable glossary entries, including related terms and abbreviations. Each lesson has its own searchable selection matched from its content. Matching uses word boundaries and normalizes dash variants. Source-question solutions include matching definitions after the solution is revealed; textbook readers link to the guide in a separate tab. Original textbooks and question explanations retain their source wording, so the glossary is support for core vocabulary, not a claim to explain every specialist word in all imported material.

The original additions are in `dist/beginner-lessons.js`, `dist/medical-words.js`, and `dist/beginner-ui.js`. Existing subject references remain available; the word guide links to MedlinePlus medical-language learning and OpenStax anatomy and physiology. These simplified educational additions have not received clinician editorial review.

Run `node verify-beginner.cjs` for all lesson coverage, actual HTML script loading order, contextual matching, global and lesson search, empty results, escaping, and question-solution vocabulary gating. This check and the four existing verification suites pass. The local server returns the new assets successfully. Visual browser QA could not be performed because the connected browser inventory is empty.

A static visual learning library with a course-catalog presentation, 19 medical subject collections, 14 foundation lessons, 114 subject concept lessons, 128 recall cards, 20 concept maps, five interactive mechanism diagrams and a 180-day study scaffold.

## Run locally

`python -m http.server 4173 --bind 127.0.0.1 --directory dist`

Open http://127.0.0.1:4173. No installation or build is needed. Source files in `dist` are the deployed assets.

## Content limits

The overview lessons are supplemented by nine complete source textbooks and a searchable in-site reader. It is not exhaustive coverage of all NMC competencies and is not a clinician-reviewed medical textbook or exam question bank. Source context, exam eligibility and clinical-use limitations are available in the website's Sources & content scope page. No payments, paid products or account synchronization are implemented. Progress uses explicitly device-local browser storage.

## Validation

`node --check dist/app.js`

`node --check dist/curriculum.js`

`node verify.cjs`

The verification exercises curriculum integrity, all lesson render paths and key state transitions using a lightweight DOM simulation. Local HTTP readiness is checked separately. No controllable browser was available in this session; responsive layout, actual browser interactions and a supported WebMCP runtime could not be visually validated. Optional WebMCP registration is feature-detected, and its action logic is verified in simulation only.

## Internet reference library

Open #resources for 10 study materials: four labeled diagrams, one NCI surgical-team photograph and five original source-linked teaching flows. Filter by subject, material type or text. Each material includes structures, a recall prompt and links to related lessons. All 19 subject pages and foundations include a curated external reading reference. Relevant lesson dialogs and the visual atlas also expose the imported material.

Downloaded assets, authors, original URLs and individual licenses are recorded in dist/images/internet/manifest.json; attribution also appears in the UI and Sources page. Imported files are unmodified. CC BY-SA images retain their license. Text summaries and flows are original concise notes based on the cited NIH/CDC references, not copied textbook chapters. External references require a network connection.

Wikimedia returned HTTP 429 for additional requested diagrams; the import stopped and those unavailable files are not referenced by the application. Browser visual QA was unavailable; DOM regression checks cover the new routes, filters, escaping, lesson integration and reference coverage.

## In-depth textbook study

Open http://127.0.0.1:4173/#study for nine complete openly licensed textbooks from Virginia Tech and Open RN: cell biology and metabolism; neuroscience; cardiovascular pathophysiology; pulmonary physiology; pulmonary pathophysiology; microbiology, pharmacology and immunology; nursing pharmacology; health alterations; and mental health/community nursing. The imports contain 5,480 PDF pages and 792 indexed section headings, including their original diagrams, tables, references and learning activities. The original PDFs are retained unchanged. Nursing texts are labeled separately from pre-clinical medical texts; specialist subject coverage remains incomplete.

Search scans the locally extracted text of every selected book and links to exact PDF pages. The reader offers original PDF pages, a chapter browser, page navigation, a text fallback and device-local saved reading positions. Sixty lessons link directly to source chapters. Fifty-nine lessons also expose mechanism explanations, reasoning traps and retrieval exercises; all twenty subject collections now expose their study guides.

Source URLs, authors, licenses, file hashes, page counts and chapter destinations are in `dist/textbooks/manifest.json`. Virginia Tech titles use CC BY-NC-SA 4.0 except the microbiology title (CC BY 4.0); Open RN books use CC BY 4.0. Attribution and license links are visible in the reader and Sources page. Search indexes retain each book’s license. This deployment includes roughly 360 MB of source PDFs; indexes are fetched lazily and a PDF is requested when its reader opens.

To reproduce imports, run `powershell -File scripts/import-textbooks.ps1`, then `python scripts/index-textbooks.py` (requires pypdf). Existing indexed metadata is preserved during re-import. Run `node verify-textbooks.cjs` to verify all original PDF hashes, page indexes, chapter mappings, actual search results, reader text, boundary handling and failure recovery. These checks and `node verify.cjs` pass in DOM simulation. Browser layout and native PDF embedding still require visual validation in a real browser.

## Detailed programme and study workspaces

The complete programme is in STUDY_PLAN.md and implemented in #plan. All 180 days now include five specific timed blocks, bounded reading assignments where a chapter is mapped, spaced retrieval, written practice and a local session journal. Choose 60, 120 or 180 minutes per day. All 20 subject collections expose their own study programme; all 128 lessons expose narrative explanation, reading assignments, reasoning exercises and saved notes. Flashcard answers explain the reasoning, the catalog offers a continuation dashboard, and My library includes journal entries and a plain-text export. Atlas, textbooks, image references and sources explain how to use their content in a study session.

Task and note persistence uses medico-workbook-v1 in browser localStorage. The journal is device-local; Download study journal exports a separate text copy. Spaced retrieval uses learning days exactly one, seven and twenty-one days before the selected session. Run node verify-workbook.cjs to exercise all sessions at all three time budgets, all lesson workspaces, subject sequences, saved notes, task checks, reading bounds, escaping and review intervals. The workbook check and existing curriculum/textbook checks pass. No browser is exposed to automation, so visual layout and native PDF embedding remain unverified.

## Source question practice

Open #pyq for the complete MedMCQA validation split: 4,183 source records, comprising 2,843 classified medical questions, 1,318 Dental and 22 unclassified records. No Orthopedics-classified records are supplied. The source contains 2,206 nonempty explanations (1,849 of at least 200 characters); 1,977 have no explanation. This is not an exhaustive, year-verified archive of every NEET PG paper. The source authors identify this as their NEET PG development split; the site preserves that provenance and labels the coverage limits.

Each question follows Try yourself → Hint → Detailed solution. An answer must be recorded before the hint; the hint must be opened before the source key and available explanation can be revealed. Hints are original reasoning guidance, not source answer disclosures. Missing and brief rationales are marked explicitly. Subject/text filters, substantial-explanation filtering, incorrect-answer review, bookmarks, saved reflections and retry are supported. Retrying preserves bookmarks and notes. Questions are loaded lazily; progress stays on this device in medico-pyq-progress-v1.

Sources, counts, normalization, licensing and the file hash are recorded in dist/pyq/manifest.json. The original source README, Apache 2.0 license and upstream MIT license are retained beside the questions. Reproduce the import with python scripts/import-pyq.py. Run node verify-pyq.cjs to validate every question render, source hash, answer staging, filters, saved notes, escaping and load failure recovery. Existing workbook, curriculum and textbook checks also pass; browser visual validation is unavailable.
# medico
