# React JSX smoke (`jsx: "react-jsx"`)

Used only by `npm run smoke:react-jsx` (packed tarball + TypeScript).

- **`src/App.tsx`** — positive compile: imports `@davide03memoli/arcade-ui/react` and mixes native Arcade attributes with thin wrappers from `wrappers.tsx`.
- **`src/negative/bad-intensity.tsx`** — **must fail** `tsc`: invalid `data-arc-glitch-intensity` is rejected once augmentation runs. Delete the `import '@davide03memoli/arcade-ui/react'` line and the same literal **silently passes**, illustrating why the entry exists.

See the root README section **TypeScript + React (JSX)** for when to prefer augmentation vs wrappers.
