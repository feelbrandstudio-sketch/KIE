import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          aboutKie: path.resolve(__dirname, 'about-kie.html'),
          aboutUs: path.resolve(__dirname, 'aboutus.html'),
          contactUs: path.resolve(__dirname, 'contact-us.html'),
          downloads: path.resolve(__dirname, 'downloads.html'),
          esteemedExhibitor: path.resolve(__dirname, 'esteemed-exhibitor.html'),
          exhibitionVenue: path.resolve(__dirname, 'exhibition-venue.html'),
          exhibitorProfile: path.resolve(__dirname, 'exhibitor-profile.html'),
          exhibitorRegistration: path.resolve(__dirname, 'exhibitor-registration.html'),
          gallery: path.resolve(__dirname, 'gallery.html'),
          industryStatistics: path.resolve(__dirname, 'industry-statistics.html'),
          stallCharges: path.resolve(__dirname, 'stall-charges-shell-scheme-guide.html'),
          supportingAssociations: path.resolve(__dirname, 'supporting-associations.html'),
          visitorInfo: path.resolve(__dirname, 'visitor-Info.html'),
          visitorProfile: path.resolve(__dirname, 'visitor-profile.html'),
          visitorRegistration: path.resolve(__dirname, 'visitor-registration.html'),
          whyExhibit: path.resolve(__dirname, 'why-exhibit.html'),
          whyKolhapur: path.resolve(__dirname, 'why-kolhapur.html'),
          whyVisit: path.resolve(__dirname, 'why-visit.html'),
          admin: path.resolve(__dirname, 'admin.html'),
        }
      }
    }
  };
});
