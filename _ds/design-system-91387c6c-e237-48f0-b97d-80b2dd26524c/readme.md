# お山のリトリート うずまの — Design System

A design system for **お山のリトリート うずまの**, a small women-only fasting retreat in the mountains of Doshi Village (道志村), Yamanashi. One party per day. The brand's character: quiet and balanced, but with a person in it. This is not a polished hospitality service — it is closer to being invited into a satoyama farmhouse. The owner runs it alone; traces of her hands stay visible. Guests do not *receive a service*, they *spend time in relation to the host*. Negative space, mincho and low saturation are kept; unpeopled perfection, rigid grids and anonymous beauty are not the brand.

## Sources given

- `uploads/hinuihitohi.jp_.png` — a full-page screenshot of **https://hinuihitohi.jp/** (a whole-house rental inn in Shimane), supplied as the **tone reference**, not as content to copy. Its design philosophy underpins this system: mincho only, a very short colour list, generous leading, asymmetric layouts with photography bled to the page edge. **It is deliberately departed from in two ways: type is set larger and more readable (16px body, no atmospheric micro-type), and latin labels are rationed to two or three per page instead of every section.**
- A written brand brief (colours, typography, spacing, logo description, required components, and an explicit "do not" list), reproduced in the foundations below.
- No codebase, Figma file, photography, or font binaries were supplied.

## Index

| File | What it is |
| --- | --- |
| `styles.css` | The one stylesheet consumers link. `@import` lines only. |
| `tokens/colors.css` | Base palette + semantic aliases. |
| `tokens/typography.css` | Families, sizes, leading, tracking, measure. |
| `tokens/spacing.css` | Space scale, section padding, motif sizes, radii. |
| `tokens/motion.css` | Durations, easing, hover opacity. |
| `tokens/fonts.css` | Google Fonts request (Zen Old Mincho 400, EB Garamond 400). |
| `tokens/base.css` | Element resets — body type, headings at 400, link states. |
| `guidelines/*.card.html` | Foundation specimen cards (Colors / Type / Spacing / Brand). |
| `components/` | Reusable primitives — see below. |
| `ui_kits/website/` | Click-through recreation of the retreat's site. |
| `assets/` | `logo-mark.svg`, `logo-lockup.svg`. |
| `SKILL.md` | Agent-skill entry point. |

## Components

Grouped by concern; each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a card HTML per directory.

**`components/brand/`**
- **LogoMark** — the hairline circle with its sprouting curve, optional wordmark.
- **CircleMotif** — a photograph cropped to a circle, ring traced by the sprout curve. Sizes S 96 / M 168 / L 260. **Two or three per page at most** — more and the site starts to look like a brand site rather than a house.
- **Signature** — the owner's handwritten signature image, used once per page.
- **VerticalLead** — the one `writing-mode: vertical-rl` lead paragraph per page.

**`components/layout/`**
- **SectionHeading** — Japanese heading, with an **optional** small latin label (ABOUT / STAY); most headings go without.
- **PhotoCaption** — a rectangular, uncropped photograph with its one-line caption.
- **NewsList** — date + title text rows, hairline-separated. No thumbnails.
- **FullBleedHero** — full-screen photograph, pale veil, mark knocked out white at centre.
- **TextImageSplit** — asymmetric text column + photograph bled to the page edge.
- **PriceRow** — hairline-separated rate line.

**`components/core/`**
- **Button** — two variants only: accent fill and hairline outline.
- **Note** — requests and cautions at 15px (near body size), optionally on a warm or cool tinted field.

### Intentional additions
Beyond the components the brief names, three were added because the brief requires their behaviour but did not list them:
- **LogoMark** — the hero and footer both need the mark; keeping it in one place stops it being redrawn.
- **VerticalLead** — the brief asks for "one vertical-writing lead pattern"; a component is the only way to keep it to one.
- **UnevenPhotos** (inside the website kit, not a system primitive) — enforces the "never match the sizes of neighbouring photos" rule.

---

## Content fundamentals

**Language.** Japanese first, always. Latin text appears only as section labels, figures, dates, and the romanised name — never as a sentence.

**Voice.** One person speaking, softly and plainly: 「わたしがひとりで、料理も掃除もしています」「どうぞ気軽に入ってきてください」. Plain 丁寧語 — です・ます — never 敬語 piled high, never 〜しましょう! cheer. It admits limits out loud (「手が足りないので、行き届かないこともあります」) — that honesty *is* the hospitality. 「私たちのこと」 survives as a section title, but the sentences under it are first-person singular.

> 道志村の山のなかに、一日ひと組の小さなリトリートがあります。沢の音のほかには、なにも聞こえません。

**Sentence shape.** Short. One idea per sentence, often ending on a noun or a quiet verb. Lines break at about 30 characters. Paragraphs are two or three sentences at most.

**What copy never does.** No exclamation marks. No emoji. No superlatives (最高, 極上, 癒やし系). No bold for emphasis — emphasis is a new line or more space. No "〜しませんか？" marketing questions. No english marketing words (リトリート is the one borrowed word in the brand, and it is in the name).

**Labels.** Latin section labels are a small set of single words, uppercased in the component: `ABOUT` `STAY` `PRICE` `ACCESS` `RESERVE` `SCHEDULE`. Never phrases.

**Numbers.** Figures are set in EB Garamond with comma separators (`68,000`), the unit 円 in mincho. Dates are `2026.11.14 — 11.16`. Times are `15:00`.

**Small print.** Opens with 「※ 」, 12px, muted-light, factual: 「※ 妊娠中・通院中の方はご予約前にご相談ください。」

---

## Visual foundations

**Colour.** Nine values, all low-saturation, listed in `tokens/colors.css`. Two near-whites alternate down the page (`--ground` #F7F5F0, a faintly yellow 生成り, is the field; `--surface` #FFFFFF the alternate section). Two pale tints (`--tint-warm` #EEEBE6, `--tint-cool` #EBEEED) back information blocks and alternate with each other. Ink is #121212 — never pure black. One accent, #7A8A6E, a settled mountain green, used for the single page CTA and nothing else. **Text on the accent stays #121212; it is never knocked out to white.** No gradients, no colour washes, no coloured text.

**Type.** Zen Old Mincho 400 for Japanese, EB Garamond 400 for latin. **Weight 400 is the only weight loaded**, so bold is impossible by accident. Hierarchy is made with size and space: H1 26 / H2 22 / H3 18 / body 16 / small 15 / caption 13 / label 12. Body is 16px / 1.9 / 0.03em; headings track at 0.07em; latin labels at 0.16em. Japanese stays modest — 22px is a big heading here — but **readability beats atmosphere: nothing is shrunk for mood.** Latin labels appear on two or three headings per page, never on all of them. One vertical-writing lead per page, 2.4 leading, 0.12em tracking.

**Layout.** No centred fixed-width container, and **no fully symmetrical layout** — column tracks are uneven (0.8fr / 1.5fr rather than 1fr / 1fr), and paired elements are offset. Text columns are capped at `--measure-jp` (30em ≈ 30 Japanese characters) and sit left; photographs run off the opposite page edge. Sections alternate `--ground` / `--surface` and are padded `8vw` top and bottom on desktop (≈114px at 1440), 65px on mobile. The header is sticky, 62px tall, with a single hairline beneath; nothing else is fixed.

**Imagery.** Documentary, available-light, warm-to-neutral — valley, water, tatami, bowls, hands at work. No grain filter, no duotone, no vignette. **Photographs stay rectangular and uncropped**, and each carries a one-line 13px caption beneath it. When two sit together their sizes are deliberately unequal — a large one beside a small one, offset vertically; matched pairs read as a corporate grid. The hero is a single full-screen photograph under a 22% ink veil (`--overlay-photo`), the only overlay in the system, with the mark in white at centre. `CircleMotif` — the one round crop — appears two or three times per page at most. **No photography was supplied**; every image area currently renders as a pale tint field labelled `PHOTOGRAPH`.

**Borders, cards, shadows.** One hairline, `1px solid var(--line)` #DCDAD5, does all the separating: price rows, form fields, the header rule, the circle ring. **There are no cards** — content sits directly on the field, separated by space and hairlines. No shadows (inner or outer), no protection gradients, no blur, no glass. Transparency is used exactly twice: the hero veil and hover opacity.

**Radii.** `0` everywhere — buttons included. The only curve in the system is `CircleMotif` (50%). No capsules, no rounded cards.

**Motion.** Fades only. Photographs and sections fade in on scroll over 900ms on `cubic-bezier(0.22,0.61,0.36,1)`. Interactive elements transition opacity over 200ms. No transforms, no scale, no bounce, no parallax, no scroll-jacking.

**Hover / press.** Hover is a drop to `--hover-opacity` 0.62 — on links, buttons, nav items, images alike. There is no colour change, no underline-on-hover, no background fill. Press has no state of its own (no shrink, no darken); the fade is the whole feedback. Focus shows the browser's own ring — it is not suppressed. Hit targets stay ≥44px.

**Disabled.** Opacity 0.38, hairline border retained, no fill.

---

## Iconography

**There are no icons.** The brief forbids them, and the reference tone carries none. What stands in:

- **Typographic arrows.** The only recurring glyph is an arrow set in EB Garamond inside the two button variants.
- **The hairline rule** does what a chevron or divider icon would do elsewhere.
- **CircleMotif** does what a section icon would do: a photographic fragment, not a pictogram. Pictograms of any kind are forbidden.
- **The signature image** is the only hand-drawn thing on the site, and it is a photograph of handwriting, not an illustration.
- **No icon font, no sprite, no SVG icon set, no CDN icon library, and no emoji.** If a future need arises (e.g. a social link), set it as a word — `INSTAGRAM` — not a glyph.

Unicode characters are used sparingly and only as punctuation: 「※」 to open a note, 「／」 as an inline separator, 「—」 as an en-rule in date ranges.

### Brand assets

- `assets/logo-mark.svg` — the circle-and-sprout mark, stroke 1.2, `currentColor`.
- `assets/logo-lockup.svg` — mark + 「うずまの」 + `OYAMA NO RETREAT`.

The mark was **drawn to the written specification in the brief** ("a circle enclosing a single curve like a sprout growing, hairline stroke") because no logo file was supplied. Treat it as a provisional rendering to be replaced with the real artwork — see Caveats.

## Caveats

- **Fonts are substituted from Google Fonts.** No binaries were supplied; Zen Old Mincho and EB Garamond are requested by name from `fonts.googleapis.com` in `tokens/fonts.css`. Swap in self-hosted files and `@font-face` rules if licensing or offline use requires it.
- **The logo is provisional** — drawn from the brief's description, not from supplied artwork.
- **No photography.** Image areas render as pale tint fields. Every image component takes a `src`.
- **No signature scan.** `Signature` renders a ruled placeholder until a PNG/SVG of the owner's handwriting is supplied.
