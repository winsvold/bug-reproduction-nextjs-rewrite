# Next.js - rewrite to public-folder not working in production with basepath and i18n

Minimal reproduction of problem with rewrite not working as expected in production mode.

## Recreate

### Works in development

* run `next dev`
* Go to http://localhost:3000/basepath/cms
* Cms is mounted


### Dosen't work in production

* run `next build` & `next start`
* Go to http://localhost:3000/basepath/cms
* 404 - Cms is not mounted
