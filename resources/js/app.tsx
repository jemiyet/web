import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import '../css/app.css';

createInertiaApp({
    title: (title) => `${title} - Jemiyet`,
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true }) as Record<string, any>;
        
        const pagePath = `./Pages/${name}.tsx`;
        
        if (pages[pagePath]) {
            return pages[pagePath];
        }
        
        console.log('Available pages:', Object.keys(pages));
        console.log('Looking for:', pagePath);
        
        return pages['./Pages/Web/Home.tsx'] || { default: () => <div>Page not found: {name}</div> };
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#29d',
    },
}); 