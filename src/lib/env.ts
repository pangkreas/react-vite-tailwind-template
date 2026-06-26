type AppEnv = {
  appName: string
  apiBaseUrl: string
  isDevelopment: boolean
  isProduction: boolean
  mode: string
}

function readEnvValue(key: keyof ImportMetaEnv, fallback: string) {
  const value = import.meta.env[key]

  return typeof value === 'string' && value.length > 0 ? value : fallback
}

export const env: AppEnv = {
  appName: readEnvValue('VITE_APP_NAME', 'React Enterprise Starter'),
  apiBaseUrl: readEnvValue('VITE_API_BASE_URL', '/api'),
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  mode: import.meta.env.MODE,
}
