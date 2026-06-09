# Vercel Deployment Fix - Contact Form Issue

## Problem
The contact form on your deployed Vercel site was showing "Something went wrong. Please try again." because the frontend couldn't reach the backend API.

## Root Cause
The Vercel deployment was missing the `VITE_API_BASE_URL` environment variable, causing the frontend to either:
1. Use an incorrect API URL, or
2. Fail to connect to the Render backend

## Solution Applied

### 1. Created `.env.production` file
- Added `client/.env.production` with the correct backend URL
- This ensures local production builds also work correctly

### 2. Updated `vercel.json`
- Fixed build command: `cd client && npm run build`
- Fixed output directory: `client/dist`
- Added CORS headers for API routes (fallback)

### 3. Improved `api.js`
- Better URL handling (removes trailing slashes)
- Clearer comments about URL priority

## Next Steps - REQUIRED

### Option A: Set Environment Variable on Vercel (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `chenulrandiya-portfolio`
3. Go to **Settings** → **Environment Variables**
4. Click **Add Variable**
5. Add:
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: `https://portfolio-api-4imj.onrender.com`
   - **Environments**: Check **Production**, **Preview**, and **Development**
6. Click **Save**
7. **Redeploy** the project:
   - Go to **Deployments**
   - Click the **⋯** menu on the latest deployment
   - Select **Redeploy**
   - Or push a new commit to trigger automatic deployment

### Option B: Rely on vercel.json Rewrites (No Env Var Needed)

The updated `vercel.json` now includes:
- Correct build command and output directory
- API rewrites that forward `/api/*` to your Render backend
- CORS headers as a fallback

With this approach, you don't need to set the environment variable. The frontend will use the `/api` fallback path, and Vercel will rewrite those requests to your backend.

**However**, Option A (setting the env var) is more explicit and reliable.

## Testing the Fix

After redeploying:

1. Visit your site: https://chenulrandiya-portfolio.vercel.app/
2. Scroll to the contact form
3. Fill out the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message to verify the contact form is working correctly.
4. Click "Send Message"
5. You should see "Message sent successfully."

## Verifying Backend Connection

If you want to verify the backend is reachable:

1. Open browser developer tools (F12)
2. Go to **Network** tab
3. Submit the contact form
4. Look for a request to `/api/contact` or `https://portfolio-api-4imj.onrender.com/api/contact`
5. Check the response status (should be 201 Created)

## Additional Notes

### Backend CORS Configuration
Make sure your Render backend has the correct CORS settings:
- Go to Render Dashboard
- Find your `portfolio-api-4imj` service
- Go to **Environment**
- Ensure `CLIENT_URL` includes your Vercel URL:
  ```
  CLIENT_URL=https://chenulrandiya-portfolio.vercel.app
  ```
- If you update this, the backend will automatically redeploy

### MongoDB Connection
Ensure your MongoDB Atlas is accessible from Render:
- In MongoDB Atlas, go to **Network Access**
- Make sure `0.0.0.0/0` (Allow Access from Anywhere) is added, or add Render's IP addresses

## Troubleshooting

If the contact form still doesn't work after redeploying:

1. **Check Vercel Logs**
   - Go to Vercel Dashboard → Your Project → **Deployments**
   - Click on the latest deployment
   - Check **Function Logs** for any errors

2. **Check Render Logs**
   - Go to Render Dashboard → Your Service
   - Check **Logs** for any backend errors

3. **Test API Directly**
   - Try accessing: `https://portfolio-api-4imj.onrender.com/api/contact`
   - You should get a 400 error (missing required fields), which means the API is running

4. **Clear Browser Cache**
   - Sometimes the old JavaScript is cached
   - Do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Summary of Changes

Files modified:
- `client/.env.production` (created)
- `.gitignore` (updated to ignore `.env.production`)
- `vercel.json` (updated build config and added CORS headers)
- `client/src/utils/api.js` (improved URL handling)

These changes ensure that:
1. The frontend knows where to find the backend API
2. Vercel correctly builds and deploys the frontend
3. API requests are properly routed to the backend
4. CORS issues are minimized