/**
 * Vite / TS tooling: side-effect CSS imports from the package need ambient modules.
 * Copy these declarations into `src/vite-env.d.ts` (or `global.d.ts`) if your bundler
 * reports “Cannot find module …css”.
 */
declare module '@davide03memoli/arcade-ui/dist/arcade-ui.css'
declare module '@davide03memoli/arcade-ui/dist/arcade-ui.min.css'
declare module '@davide03memoli/arcade-ui/themes/phosphor-green'
declare module '@davide03memoli/arcade-ui/themes/amber-crt'
declare module '@davide03memoli/arcade-ui/themes/magenta-wave'
declare module '@davide03memoli/arcade-ui/themes/ice-blue'
