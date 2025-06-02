# Jemiyet Web Package

Twitter/X benzeri sosyal network web uygulaması.

## 🛠️ Development Setup

### 1. Dependencies Kurulumu
```bash
cd packages/jemiyet/web
npm install
```

### 2. Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

### 4. Preview Build
```bash
npm run preview
```

## 📁 Klasör Yapısı

```
packages/jemiyet/web/
├── resources/
│   ├── js/
│   │   ├── Pages/Web/
│   │   │   └── Home.tsx          # Ana sayfa
│   │   ├── Layouts/
│   │   │   └── WebLayout.tsx     # Layout component
│   │   └── app.tsx               # Ana uygulama
│   ├── css/
│   │   └── app.css               # Tailwind CSS
│   └── lang/
│       ├── en/web.php            # İngilizce
│       └── tr/web.php            # Türkçe
├── src/
│   ├── Controllers/Web/          # Web controllers
│   ├── Services/                 # API wrapper servisler
│   └── WebServiceProvider.php    # Laravel service provider
├── routes/
│   └── web.php                   # Web routes
├── dist/                         # Build output
├── vite.config.ts                # Vite config
├── tailwind.config.js            # Tailwind config
├── tsconfig.json                 # TypeScript config
└── package.json                  # NPM dependencies
```

## 🚀 Build Commands

### Development
```bash
# Watch mode ile development
npm run dev

# Type checking
npx tsc --noEmit
```

### Production
```bash
# Production build
npm run build

# Build verification
npm run preview
```

### Linting
```bash
# ESLint (eğer eklerseniz)
npm run lint

# Prettier (eğer eklerseniz)
npm run format
```

## 🔧 Ana Projede Kullanım

### 1. Composer ile Yükle
```bash
cd /path/to/main/project
composer require jemiyet/web:dev-master
```

### 2. Assets Publish Et
```bash
php artisan vendor:publish --tag=web-pages
php artisan vendor:publish --tag=web-lang
```

### 3. Frontend Build
```bash
npm install
npm run dev  # veya npm run build
```

## 📱 URL'ler

- `jemiyet.com/home` - Ana sayfa
- `jemiyet.com/groups` - Gruplar
- `jemiyet.com/events` - Etkinlikler  
- `jemiyet.com/profile` - Profil

## 🎨 Özellikler

- ✅ Twitter/X benzeri dark theme
- ✅ Responsive design
- ✅ TypeScript support
- ✅ Tailwind CSS
- ✅ Inertia.js + React
- ✅ İngilizce/Türkçe dil desteği
- ✅ API wrapper servisleri

## 🔗 Dependencies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Inertia.js** - SPA framework
- **Tailwind CSS** - Styling
- **Vite** - Build tool 