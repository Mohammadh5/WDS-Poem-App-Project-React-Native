# WDS Poem App - AI Coding Instructions

## Project Overview
WDS-Poem-App is an Expo-based React Native application built with TypeScript and file-based routing via expo-router. It's a cross-platform app (iOS, Android, Web) for poem-related functionality.

**Key Stack:**
- **Runtime:** Expo v54 + React Native 0.81.5 + React 19.1.0
- **Routing:** expo-router v6 (file-based, mirrors Next.js patterns)
- **Language:** TypeScript 5.9 (strict mode enabled)
- **Navigation:** React Navigation (bottom-tabs compatible)
- **Experiments:** React Compiler enabled, typed routes enabled

## Architecture Patterns

### File-Based Routing Structure
The `app/` directory is the routing root. Each `.tsx` file becomes a route:
- `app/index.tsx` = `/` (home)
- `app/_layout.tsx` = root layout wrapper
- Directory-based organization creates route segments

**Example:** `app/about.tsx` becomes `/about`, `app/poems/[id].tsx` becomes `/poems/:id`

### Layout System
- Use `<Stack>` from expo-router in `_layout.tsx` files for screen navigation
- Nested `_layout.tsx` files create hierarchical screens
- Reference: `app/_layout.tsx` shows minimal Stack setup

### Styling Conventions
- **StyleSheet API:** Use `StyleSheet.create()` from `react-native` (see `app/index.tsx`)
- **Colors:** Reference `app.json` for theme colors (e.g., `#25292e` dark background, `#E6F4FE` adaptive icon background)
- **Responsive Design:** Use `flex` and flexbox utilities from React Native
- **Platform-Specific:** Leverage Expo's platform detection when needed

## Development Workflows

### Starting the App
```bash
npm install          # Install dependencies
npm start            # Start dev server (prompts for platform)
npm run android      # Direct to Android emulator
npm run ios          # Direct to iOS simulator
npm run web          # Open web version
```

### Linting & Code Quality
```bash
npm run lint         # Run ESLint (uses expo/eslint-config)
```
- **Config:** `eslint.config.js` extends `eslint-config-expo` flat config
- **Strict TypeScript:** `tsconfig.json` has `"strict": true`

### Reset Project
```bash
npm run reset-project  # Moves starter code to `app-example/`, clears `app/`
```

## TypeScript & Path Aliases
- **Config:** `tsconfig.json` has `strict: true` enabled
- **Path Alias:** `@/*` maps to workspace root for clean imports
  - Use: `import Component from '@/components/MyComponent'`
  - **Do not** use relative paths `../../../` for cross-directory imports

## Key Expo Features Used
- **expo-router:** File-based routing (replaces manual navigation setup)
- **expo-font:** Typography loading (hook into splash screen lifecycle)
- **expo-splash-screen:** Customizable splash with image from `assets/images/splash-icon.png`
- **expo-status-bar:** Platform-aware status bar styling
- **expo-symbols, expo-vector-icons:** Icon libraries
- **react-native-reanimated:** Animation library for gestures (installed but not yet used)
- **expo-haptics:** Device feedback (haptic feedback)

## New Architecture
- **Enabled:** `app.json` has `"newArchEnabled": true` (Fabric renderer)
- Implications: Modern React Native features available; some third-party packages may require updates

## Critical Developer Notes
1. **Typed Routes:** Experiment enabled (`"typedRoutes": true`); expect full type safety in route navigation
2. **React Compiler:** Enabled; no memoization workarounds needed—compiler handles optimization
3. **Dark Mode:** `app.json` has `"userInterfaceStyle": "automatic"` and dark theme variants (splash screen dark background)
4. **Mobile First:** Portrait orientation by default; design mobile-first, then scale to tablet (iOS) and web
5. **Icon Assets:** Adaptive icons required for Android (three separate images)

## Common Tasks & Patterns

### Add a New Screen
1. Create `app/screenname.tsx` with default export component
2. Use `StyleSheet.create()` for styles
3. Import navigation hooks from `expo-router` if needed: `import { useRouter } from 'expo-router'`

### Update Theme/Colors
- Edit `app.json` under `expo.android.adaptiveIcon.backgroundColor` for Android
- Apply colors in `StyleSheet` (reference: `#25292e` dark, `#E6F4FE` light)

### Add Images
- Place in `assets/images/`
- Use `<Image>` from `expo-image` (preferred over `react-native` Image for better performance)

## Build & Deployment
- iOS builds: Requires Xcode + valid Apple Developer account
- Android builds: Requires Android Studio + signing keys
- Web builds: Output to `static/` via `expo.web.output` setting
- **Use Expo's CI/CD** for cloud builds unless local setup required

## When in Doubt
- Check `app.json` for platform-specific configs
- Consult Expo docs: https://docs.expo.dev/
- Refer to React Navigation docs for advanced routing: https://reactnavigation.org/
- TypeScript will catch type errors; trust strict mode
