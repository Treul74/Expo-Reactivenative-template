# Expo React Native Mobile App Template

A production-ready, scalable React Native mobile application template built with Expo, featuring a modern architecture, comprehensive color system, and best practices for cross-platform development.

## 🚀 Features

- **Expo Router** - File-based routing with nested navigation
- **NativeWind** - Utility-first styling with Tailwind CSS
- **Redux Toolkit** - Predictable state management
- **TanStack Query** - Server state management with caching
- **TypeScript** - Full type safety
- **Custom Color System** - Centralized color palette with easy access
- **Tab Navigation** - Pre-configured bottom tab navigation with active state styling
- **Authentication Flow** - Auth route group structure
- **Organized Structure** - Scalable folder architecture

## 📋 Tech Stack

- **React Native** - Cross-platform UI framework
- **Expo** - Build, development, and deployment environment
- **Expo Router** - File-based navigation system
- **NativeWind** - Tailwind CSS for React Native
- **Redux Toolkit** - Global state management
- **TanStack React Query** - Data fetching and caching
- **React Navigation** - Navigation library
- **TypeScript** - Type-safe development

## 🎨 Color System

The app includes a comprehensive color palette defined in `app/constants/colors.ts`:

- **Primary** (#FF385C) - Main accent color
- **Secondary** (#00A699) - Complementary accent
- **Background** (#FAF9F6) - Main app background
- **Card** (#FFFFFF) - Card and elevated surfaces
- **Text** (#222222) - Primary text color
- **Subtitle** (#6A6A6A) - Secondary text
- **Muted** (#717171) - Tertiary text and inactive states
- **Border** (#DDDDDD) - Borders and dividers

Colors are also available as Tailwind classes via NativeWind configuration.

## 📁 Project Structure

```
app/
├── (auth)/              # Authentication routes
├── (main)/              # Authenticated main app routes
├── (tabs)/              # Tab navigation screens
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── layout/         # Layout components
│   └── feedback/       # Loading, toasts, etc.
├── hooks/              # Custom React hooks
├── lib/                # External integrations
├── store/              # Redux store and slices
├── constants/          # App constants (colors, routes, text)
├── styles/             # Global styles and theme
└── utils/              # Helper functions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (optional, can use npx)

- create expo project and replace the app.json
  projectid=
  owener=

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd expo_template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npx expo start
```

4. Run on your preferred platform:
```bash
# iOS Simulator
npm run ios

# Android Emulator
npm run android

# Web
npm run web
```

## 📱 Usage

### Using Colors

```typescript
import { colors } from '@/constants/colors';

// In React Native components
<View style={{ backgroundColor: colors.primary }}>
  <Text style={{ color: colors.text }}>Hello</Text>
</View>

// With NativeWind (Tailwind classes)
<View className="bg-primary">
  <Text className="text-text">Hello</Text>
</View>
```

### Navigation

The app uses Expo Router for file-based routing. Navigate using:

```typescript
import { router } from 'expo-router';

router.push('/profile');
router.replace('/login');
```

### State Management

Redux Toolkit slices are located in `app/store/`. Use hooks:

```typescript
import { useAppDispatch, useAppSelector } from '@/store';

const dispatch = useAppDispatch();
const user = useAppSelector((state) => state.user);
```

### Data Fetching

Use TanStack Query for server state:

```typescript
import { useQuery } from '@tanstack/react-query';

const { data, isLoading } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
});
```

## 🎯 Key Features

- ✅ Scalable folder structure
- ✅ Type-safe color system
- ✅ Pre-configured navigation
- ✅ State management setup
- ✅ Server state management
- ✅ Reusable components
- ✅ Custom hooks
- ✅ Utility functions
- ✅ Environment configuration
- ✅ Linting and code quality

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
API_URL=your_api_url
API_KEY=your_api_key
```

## 🔧 Configuration

### NativeWind

Tailwind configuration is in `tailwind.config.js`. Colors are automatically available as Tailwind classes.

### Expo Config

App configuration is in `app.json`. Update app name, bundle ID, and other settings here.

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a template repository. Feel free to fork and customize for your needs.

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [TanStack Query Documentation](https://tanstack.com/query/latest)

---

Built with ❤️ using Expo and React Native
