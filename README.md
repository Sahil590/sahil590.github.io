# Sahil Raja’s portfolio

A responsive, accessible Jekyll site using custom layouts and GitHub
Pages–supported plugins. No API keys, remote theme or client-side API calls
are needed. Project and contribution cards work without JavaScript.

## Run locally

Install Ruby and Bundler, then run from the repository root:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. To check the production build:

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

The generated `_site/` directory and local dependencies are not committed.
GitHub Pages can build this site directly from the publishing branch; no
custom build workflow is required. Keep any added plugins compatible with
the `github-pages` gem.

## Edit the content

- `_config.yml`: name, biography, social links, experience, education and interests.
- `_data/projects.yml`: featured personal repositories.
- `_data/contributions.yml`: repositories with public contributions.
- `_layouts/`, `_includes/` and `assets/css/main.scss`: layout and styling.

For each card, provide `name`, `repo` (`owner/name`), `url`, `description` and
`tags` (a YAML list). Contributions also use `contribution` (or `role`).
Optional fields are `language`, `quote` and `proof_url` (a merged PR link).
For example, append this structure to the relevant data file, replacing the
example values:

```yaml
- name: Example project
  repo: owner/repository
  url: https://github.com/owner/repository
  description: A short explanation of what the project does.
  contribution: Improved validation and documentation.
  tags: [Research software, Open source]
  language: Python
  proof_url: https://github.com/owner/repository/pull/123
```

Use British English and HTTPS for external links. Verify contributions before
adding them; the seeded entries link to merged PRs found using
`is:pr is:merged author:Sahil590 -user:Sahil590` on GitHub.
The original résumé project text remains in `_config.yml` for reference;
the featured project cards are now maintained in `_data/projects.yml`.

## Colour schemes and accessibility

The site follows the system colour scheme. The optional navigation toggle
saves an explicit choice in `localStorage`; clear the `colour-scheme` entry
to follow the system again. Storage restrictions do not prevent switching
schemes on the current page. Without JavaScript, the system preference still
works. Reduced-motion preferences disable transitions and smooth scrolling.
Typography uses a system font stack, with no external font requests.
