# Docusaurus + Mathjax

Intended to be use for Scientific Software Documentation.

Derived from [ open power quality's documentation ]( https://github.com/openpowerquality/docusaurus )

### Quick guide

1. Fork it: button on top right of the screen.

2. Rename and clone with: `git clone [url of your fork]`

3. To install: `cd website; npm install`

4. To run locally: `npm start`

5. To build: `npm run build`

## Writing math

For standalone formulas, you can use $$. For inline formulas, you must use \\() and \\).

## To do before getting started with documentation
- Add in the logo in website/img/favicon
- Update the website/siteConfig.js file
- Update the website/core/footer.js file
- Update the website/pages/en/\*.js

## Adding a new file
- Add it in website/sidebars.js
- Make the file in ./docs

### Friendly Advice and other things
- To enable search feature checkout [this](https://docusaurus.io/docs/en/search) out.
- Update the color scheme in siteConfig.js and website/static/css/custom.css. We don't want all the documentations to look the same now, do we :)
- Keep the documentation folder in the same repository as the actual code it makes it easier of the developer to update it directly. Use [submodules](https://github.blog/2016-02-01-working-with-submodules) for better version control.
