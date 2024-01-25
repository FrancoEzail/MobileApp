import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'footStats.app',
  appName: 'footStats',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
