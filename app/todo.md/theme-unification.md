# Theme Unification Plan

## Information Gathered
- **Header**: Currently dark theme with blue/purple accents (#48cae4, gradients with black/gray). Logo and nav use white text, dark background.
- **HeroSection**: Colorful gradients including purple, pink, teal, yellow, red. Background uses #667eea, #764ba2, #f093fb (pink). Needs adjustment to remove pink and unify to blue/purple.
- **About**: Light theme with blue/purple accents. Background is light gray (#f8f9fa to #e9ecef). Text is dark. Needs to switch to dark background with light text.

## Plan
- Update `Header.module.css` to ensure gradients use consistent blue/purple (#667eea, #764ba2, #48cae4, #023e8a).
- Update `HeroSection.module.css` to change gradientBg from including pink to pure blue/purple gradients. Adjust accent colors to match.
- Update `About.module.css` to change background to dark gradient (e.g., linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)), set text to white/light, and ensure all accents are blue/purple.
- No changes needed to JS files as theme is CSS-based.

## Dependent Files to be edited
- `app/components/Header.module.css`
- `app/components/HeroSection.module.css`
- `app/components/About.module.css`

## Followup steps
- Run the development server to test visual changes.
- Check responsiveness on different screen sizes.
- Verify color contrast for accessibility.
