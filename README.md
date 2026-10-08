# react-tokens-a11y

A small showcase of **accessible React components** built on **design tokens**. It is meant as a
reference for how to build common UI patterns that work with keyboard, screen readers, zoom, dark
mode, high contrast and reduced motion, without relying on a UI library.

Built with React 19, TypeScript, Vite and plain CSS.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run lint     # oxlint, including jsx-a11y rules
npm run build    # type-check and production build
```

In development, [axe-core](https://github.com/dequelabs/axe-core) runs after load and logs any
violation to the browser console.

## Components

| Component | Accessibility highlights |
| --- | --- |
| `Button` | Variants and sizes, 44px minimum target, `aria-busy` loading state, disabled styling |
| `ClickableCard` | Whole card clickable through a `::after` pseudo-element on a single real link; one tab stop, heading inside the link |
| `Badge` | Status conveyed by text and icon, never color alone |
| `Switch` | `button` with `role="switch"` and `aria-checked`, visible On/Off text |
| `TextField` | Explicit label, hint and error linked with `aria-describedby`, `aria-invalid` |
| `Modal` | Native `<dialog>`: focus trap, Escape, focus returned to the trigger |
| `Tabs` | WAI-ARIA tabs pattern, roving tabindex, arrow keys / Home / End, constant panel height |
| `Accordion` | Heading + button with `aria-expanded` / `aria-controls`, constant width |
| `Alert` | `role="alert"` for urgent messages, `role="status"` for the rest |
| `CookieBanner` | Non-modal landmark, accept / reject / customize, live announcement, saved in `localStorage`, reopenable from the footer |
| `SkipLink` | Visible on focus, jumps to `<main>` |

## Accessibility foundations

- **Design tokens** (CSS custom properties) for colors, spacing and typography.
- **Rem-based type** on a system font stack, so text follows the user's browser settings.
- **Color contrast** checked for light and dark themes, plus `prefers-contrast: more`.
- **Visible focus** with a global `:focus-visible` style that also works in forced-colors mode.
- **Forced colors** (Windows high contrast) rules in each component.
- **Reduced motion** respected, except the loading spinner, which is the only progress cue.
- **Landmarks and headings**: header, main, footer, one `h1`, `h2` per section, page title set.
- **Reflow**: no horizontal scroll at 320px.
- **Layout stability**: tabs and accordion keep a constant size when their content changes.

## Project structure

```
src/
├─ styles/                 global CSS (reset, base, utilities) and tokens/
├─ components/<Name>/      <Name>.tsx, <Name>.css, index.ts (one folder per component)
├─ components/index.ts     barrel file: import { Button } from './components'
├─ sections/               demo page sections
├─ lib/                    cx() class helper, shared types, email validation, cookie consent storage
├─ App.tsx / App.css       page shell
└─ main.tsx                entry point, loads global styles first
```

Each component imports its own CSS, so styles live next to the code that uses them.

## Verification done

- `oxlint` with the `jsx-a11y` plugin: no warnings.
- axe-core (WCAG 2.0/2.1/2.2 A and AA, best practices) in light, dark and forced-colors modes: no violations.
- Manual keyboard checks for tabs, dialog, accordion, form errors and the cookie banner.

## Known limitations

- No testing with real screen readers (NVDA, JAWS, VoiceOver) yet.
- The cookie banner stores the choice but does not actually block any scripts.
- Demo content is placeholder text; the card image comes from picsum.photos.
