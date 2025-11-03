Expo React Native Mobile App — Features & File Structure

This document describes the recommended folder structure, responsibilities, and feature implementation guidelines for a general mobile application built using:

• React Native — Core framework for cross-platform UI
• react-navigation/native-stack – Stack navigator for screens.
• react-navigation/native – Core library for navigation in React Native.
• Expo — Build, development, and deployment environment
• NativeWind — Utility-first styling for React Native components
• redux-toolkit — State management library for predictable, scalable global state.
• tanstack/react-query — Utility for fetching, caching, and managing server state with React.

✅ UI/UX design & branding

Primary (#FF385C): 
Secondary (#00A699):
Background (#FAF9F6): 
Card (#FFFFFF): 
Text (#222222): 
Subtitle & Muted (#6A6A6A, #717171): A set of medium grays used for secondary information, labels, icons, and less critical text. This creates a clear typographic hierarchy, helping users scan information efficiently.
Border (#DDDDDD): 
Font Family: The entire application interface uses the Inter sans-serif typeface. This font was chosen for its exceptional readability on screens of all sizes, from small mobile displays to larger desktop monitors. Its clean, neutral geometry is perfect for a data-centric application, ensuring that numbers, labels, and all text elements are consistently clear and legible.


This structure ensures a scalable, maintainable, and professional codebase for any type of mobile app.

✅ Project Structure Overview

project-root/
│
├─ app/                                   # Expo Router App Directory (Everything App-Related)
│  ├─ _layout.tsx                         # Root layout (Providers, Navigation, Theme)
│  ├─ (auth)/                             # Auth Route Group
│  │   ├─ login.tsx
│  │   └─ register.tsx
│  ├─ (main)/                             # Main App Route Group (Authenticated)
│  │   ├─ index.tsx                       # Home Screen
│  │   ├─ profile.tsx
│  │   ├─ settings.tsx
│  │   └─ notifications.tsx
│  ├─ onboarding.tsx                      # First-time user onboarding
│  └─ error.tsx                           # Global error boundary
│
│  ├─ components/                         # Reusable UI Components
│  │   ├─ ui/
│  │   │   ├─ Button.tsx
│  │   │   ├─ Card.tsx
│  │   │   └─ TextField.tsx
│  │   ├─ layout/
│  │   │   ├─ ScreenContainer.tsx
│  │   │   └─ Section.tsx
│  │   └─ feedback/
│  │       ├─ LoadingSpinner.tsx
│  │       └─ ToastMessage.tsx
│
│  ├─ hooks/                              # Custom Reusable Logic
│  │   ├─ useAuth.ts
│  │   ├─ useTheme.ts
│  │   ├─ useNetworkStatus.ts
│  │   └─ useQueryWithAuth.ts             # React Query + Auth wrapper
│
│  ├─ lib/                                # External Integrations & Config
│  │   ├─ httpClient.ts                   # Axios / Fetch instance (with auth interceptors)
│  │   ├─ analytics.ts                    # App analytics (e.g., Firebase, Mixpanel)
│  │   ├─ storage.ts                      # AsyncStorage / MMKV wrapper
│  │   └─ env.ts                          # Environment variable loader
│
│  ├─ store/                              # Redux Toolkit Global State
│  │   ├─ index.ts                        # Combined store
│  │   ├─ appSlice.ts                     # UI state (theme, modals, sidebar)
│  │   └─ userSlice.ts                    # User data (profile, tokens, preferences)
│
│  ├─ assets/                             # Static Media
│  │   ├─ images/     logo.png
│  │   ├─ fonts/      Inter-Regular.ttf, Inter-Bold.ttf
│  │   └─ icons/      app-icon.png
│
│  ├─ styles/                             # Global Styling & Theme
│  │   ├─ global.css                      # NativeWind entry point
│  │   └─ theme.ts                        # Design tokens (colors, spacing, radius)
│
│  ├─ constants/                          # Static App Config
│  │   ├─ colors.ts
│  │   ├─ text.ts                         # Localized strings
│  │   └─ routes.ts                       # Route name constants
│
│  └─ utils/                              # Pure Helper Functions
│      ├─ validation.ts
│      ├─ formatter.ts                    # Date, currency, phone
│      └─ logger.ts
│
├─ .env                                   # Environment variables
├─ app.config.js                          # Expo app configuration
├─ nativewind.config.js                   # NativeWind config
├─ jsconfig.json (or tsconfig.json)       # Path aliases (@/* → app/*)
├─ package.json
└─ README.md

📂 Folder Responsibilities
app/
Contains screens and navigation routes using Expo Router. Screens must handle UI and event handling; complex logic goes in hooks.
components/
Reusable UI components, including buttons, cards, text fields, and layout/feedback elements.
hooks/
Custom logic hooks reusable across screens, e.g., authentication, theme management, network status.
lib/
Integration and helper functions for API calls, storage, analytics, and environment management.
store/
Global app state management using preferred state library (Zustand, Recoil, Jotai).
assets/
Static assets such as images, fonts, and icons.
styles/
Global styles and NativeWind theme configuration.
constants/
Shared constants including colors, text strings, and route names.
utils/
Generic utility functions like validation, formatting, logging.
.env
Environment variables for API keys and app configuration.
🚀 Benefits of This Architecture
✔ Scalable structure suitable for apps of any size.
✔ Clear separation of concerns between UI, logic, and services.
✔ Reusable components and hooks improve developer efficiency.
✔ Easy onboarding for new developers.
✔ Supports maintainability and testing.
