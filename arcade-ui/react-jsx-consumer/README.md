# React JSX smoke (`jsx: "react-jsx"`)

Used by `npm run smoke:react-jsx` (packed tarball + TypeScript).

Verifies **React 18 and React 19** with matching `@types/react`, strict options, and real package resolution.

| Path | Role |
|------|------|
| `src/vite-env.d.ts` | Ambient `*.css` / theme imports (Vite-style) |
| `src/main.tsx` | Bootstrap: side-effect CSS + `initGlitch(document)` + theme class |
| `src/useArcadeAudio.ts` | Typed singleton hook |
| `src/GlitchSurface.tsx` | `useEffect` + ref scoped `initGlitch` |
| `src/App.tsx` | Positive fixture composing the above |
| `src/negative/bad-intensity.tsx` | Must fail `tsc` when augmentation is loaded |

See README § **TypeScript + React (JSX)** for the official snippets.
