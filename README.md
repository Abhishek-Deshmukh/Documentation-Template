# Docusaurus + Mathjax

Intended to be use for Scientific Software Documentation.

Derived from [ open power quality's documentation ]( https://github.com/openpowerquality/docusaurus )

### Quick guide

To install: `cd website; npm install`

To run locally: `npm start`

To build: `npm run build`

## Writing math

For standalone formulas, you can use $$. For inline formulas, you must use \\() and \\).

## To do before getting started with documentation
- Add in the logo in website/img/favicon
- Update the website/siteConfig.js file
- Update the website/core/footer.js file
- Update the website/pages/en/\*.js

## Adding a new file
- Add it in webiste/sidebars.js
- Make the file in ./docs

### Friendly Advice
- Update the color scheme in siteConfig.js and website/static/css/custom.css
- Keep the documentation folder in the same repository as the actual code it makes it easier of the developer to update it directly.
