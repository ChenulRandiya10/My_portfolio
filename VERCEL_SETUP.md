# Vercel Deployment Setup

## Configuration

### Vercel Dashboard Settings

**Root Directory**: `client`
- Go to Vercel Dashboard → Your Project → Settings → General
- Set "Root Directory" to `client`
- This tells Vercel to treat the `client` folder as the project root

### vercel.json Configuration

The `vercel.json` file is configured to work with the Root Directory set to `client`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

Since the Root Directory is `client`, the build commands run inside the `client` folder, so:
- Build command: `npm run build` (not `cd client && npm run build`)
- Output directory: `dist` (not `client/dist`)

### Environment Variables

Make sure to set these environment variables in Vercel:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: `https://portfolio-api-4imj.onrender.com`
   - **Environments**: Production, Preview, and Development

## API Configuration

The `vercel.json` includes rewrites that forward `/api/*` requests to your Render backend:

```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "https://portfolio-api-4imj.onrender.com/api/$1"
    }
  ]
}
```

## Deployment Steps

1. Push your changes to GitHub
2. Vercel will automatically deploy
3. Or manually redeploy: Go to Deployments → ⋯ → Redeploy

## Troubleshooting

If you see "cd: client: No such file or directory":
- Make sure Root Directory is set to `client` in Vercel settings
- Make sure `vercel.json` has `buildCommand: "npm run build"` (not `cd client && npm run build`)
- Make sure `vercel.json` has `outputDirectory: "dist"` (not `client/dist`)

## Backend CORS Configuration

Make sure your Render backend has the correct CORS settings:
- Go to Render Dashboard → Your Service → Environment
- Ensure `CLIENT_URL` includes your Vercel URL:
  ```
  CLIENT_URL=https://chenulrandiya-portfolio.vercel.app