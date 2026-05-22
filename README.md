# CharleneSlimp.com

A lean static personal and professional website for Charlene Slimp. The site is built with plain HTML, one global CSS file, and a small vanilla JavaScript file. There is no framework, CMS, package manager, or build step.

## File Structure

```text
/
  index.html
  about.html
  research.html
  selected-work.html
  current-focus.html
  cv.html
  contact.html
  README.md
  AGENTS.md

/assets/
  css/main.css
  js/main.js
  pdfs/
  images/

/essays/
  essay-template.html

/work/
  case-study-template.html
```

## Editing Pages

Open any `.html` file in a text editor and edit the text between the existing HTML tags. The main pages share the same header, navigation, main content area, and footer structure.

Use `essays/essay-template.html` as a starting point for a new essay. Duplicate the file, rename it with a short lowercase filename such as `accessibility-and-ai.html`, then update the title, date, summary, and article body.

Use `work/case-study-template.html` as a starting point for selected work. Duplicate the file, rename it, and update the project overview, role, context, approach, outcomes, and notes.

Site-wide styles live in `assets/css/main.css`. Keep changes small and test on a phone-width screen after editing.

Minimal JavaScript lives in `assets/js/main.js`. It currently updates the footer year and prevents the unwired contact form from submitting anywhere.

## Contact Form

The contact form is intentionally static and not connected to a backend. It includes a honeypot field for future spam prevention, but no messages are sent yet.

When ready, connect the form through a static-friendly provider such as Netlify Forms, Formspree, Basin, or a serverless function. Do not publish a plain email address on the site.

## Local Preview

Open `index.html` directly in a browser. No local server is required.

If preferred, you can also run a simple local server from the project folder:

```sh
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploying To Cloudflare Pages

1. Create a new Git repository and push these files.
2. In Cloudflare Pages, choose "Create a project" and connect the repository.
3. Set the framework preset to "None" or "Static HTML".
4. Leave the build command blank.
5. Set the output directory to `/` or leave it blank, depending on the Cloudflare interface.
6. Deploy, then connect `CharleneSlimp.com` in the custom domains section.

## Deploying To Netlify

1. Create a new Git repository and push these files.
2. In Netlify, choose "Add new site" and connect the repository.
3. Leave the build command blank.
4. Set the publish directory to `/`.
5. Deploy, then add `CharleneSlimp.com` under domain settings.

## Maintenance Notes

- Keep pages lightweight and hand-editable.
- Avoid analytics, trackers, popups, newsletter prompts, and sales language.
- Preserve semantic HTML and clear heading order.
- Keep link text descriptive.
- Maintain strong color contrast.
- Do not expose a plain email address.
