# Carter Feng

A buildless personal website for GitHub Pages, inspired by the printed cover of Annals of Mathematics.

## Preview

Run `python3 -m http.server 8000` from this folder, then open http://localhost:8000.

## Content

- `index.html`: default text-only homepage with the complete portfolio and a Designed version link.
- `designed.html`: editorial introduction, original portrait, contents rail, selected work, and Ross feature.
- `research.html`: all four independent research entries from the supplied résumé.
- `projects.html`: all four technical projects and the technical skills list.
- `education.html`: Seven Lakes, the Ross Mathematics Program, and Ross photographs.
- `activities.html`: STEMJUMP and Science Olympiad.
- `misc.html`: personal photographs.
- `style.css`: shared typography, paper texture, responsive layouts, and accessibility states.

The résumé and Carter’s follow-up provide biographical content, project details, Science Olympiad and mathematics results, certifications, and school leadership roles. The newer follow-up supplies the STEMJUMP figures (50+ members and more than $63,000 raised and donated) and the 2023 founding date. The Ross chalkboard photo shows Dhruv Goel, per Carter’s correction. The two other Ross photos show Vitaly Bergelson and Po Shen Loh, respectively. The paired portrait and trophy photo show Carter with his brother Bill Sun, per Carter’s correction. NCHS is left as supplied because its full name was not provided. Purple Comet has no year because none was supplied. No roles or results are inferred from photographs.

Fonts are self-hosted Bodoni Moda, PT Serif, and Jost under the SIL Open Font License; licenses are in `assets/fonts/`. The paper texture is procedural SVG noise. No build tools are required. `assets/section-progress.js` adds the active entry-number state on Projects and Research; page content remains readable without JavaScript.

All photographs are exact copies of the supplied source files. The original full-resolution rocks portrait is used on the homepage. An earlier generative posture edit was rejected because it changed facial details; no AI-edited photo is used or included in the site. Source images have not been recolored, resampled, or recompressed. CSS scales them for display.

Contact links include email, GitHub, and LinkedIn. The original résumé PDF and phone number are not included.

## Visual direction

The homepage follows Arjun Desikan’s information hierarchy: a large name, a strong introduction, a right-hand contents/current-work/contact rail, and two work highlights. The typography now closely follows the primary reference: solid black Bodoni Moda 700 headings, PT Serif body copy, and Jost labels. Carmine (#ad293c) supplies the inset page frame and masthead rule against warm paper (#f5f0eb). Inner-page navigation is centered above each title; the About page uses its contents rail. Section-title anchors are consistent across all pages. Photographs remain untouched.

References inspected: https://airjan-airlines.github.io/ (structure and border), https://maggieappleton.com/ (strong first-person introduction and browsable work), https://www.coricorinne.com/ (oversized serif typography and editorial photography).

The Ross Book Prize/review-session paragraph was removed at Carter’s request.

## Numbered entries

Projects and Research use 01–04 markers in a left-hand column, with metadata below each number. The entry nearest the viewport’s reading position is red (#c8102e); other numbers are gray. Scroll and resize checks are batched through requestAnimationFrame. Native anchor links and browser history restoration update the same state. The 160ms CSS color transition is shortened for reduced-motion preferences.

## Text version

The default `index.html` is the plain HTML version inspired by https://motherfuckingwebsite.com/. It uses browser-default HTML, with no CSS, JavaScript, web fonts, or embedded images. All existing research, projects, education, activities, results, and skills are included; photographs are available through ordinary links. The Designed version link opens `designed.html`, and the designed pages link back to the default text homepage. `text/index.html` remains available for existing `/text/` bookmarks and section links. Preview the default at http://localhost:8000/ and the designed homepage at http://localhost:8000/designed.html.
