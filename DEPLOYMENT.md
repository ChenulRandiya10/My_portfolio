# Deployment Guide

This guide covers deploying the portfolio application to production using **Vercel** for the frontend and **Render** for the backend API, with **MongoDB Atlas** for data storage.

## Architecture Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    Vercel       │────▶│     Render      │────▶│  MongoDB Atlas  │
│  (Frontend)     │    │    (Backend)    │    │   (Database)    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

## Prerequisites

- Node.js 18+ installed locally
- MongoDB Atlas account (free tier available)
- Vercel account (free tier available)
- Render account (free tier available)
- Git repository pushed to GitHub/GitLab

---

## Step 1: MongoDB Atlas Setup

1. **Create a Cluster**
   - Go to [MongoDB Atlas](https://cloud.mongodb.com/)
   - Create a free cluster (M0 Sandbox)
   - Choose a region close to your target audience

2. **Create a Database User**
   - Go to **Database Access** → **Add New Database User**
   - Choose **Password** authentication
   - Set username and a strong password
   - Grant **Read and write to any database** permission

3. **Whitelist IP Addresses**
   - Go to **Network Access** → **Add IP Address**
   - For development: Add your current IP
   - For production (Render): Add `0.0.0.0/0` (allow from anywhere) or specific Render IPs
   - Note: Render's free tier requires `0.0.0.0/0` as IPs are dynamic

4. **Get Connection String**
   - Go to **Clusters** → **Connect** → **Connect your application**
   - Copy the connection string (looks like: `mongodb+srv://<username>:<password>@cluster.mongodb.net/`)
   - Replace `<password>` with your actual password
   - Add database name: `mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio?retryWrites=true&w=majority`

---

## Step 2: Backend Deployment (Render)

### Option A: Using render.yaml (Recommended)

1. **Prepare Environment Variables**
   - Copy `server/.env.example` to `server/.env`
   - Update the values:
     ```
     MONGO_URI=your_mongodb_atlas_connection_string
     CLIENT_URL=https://your-domain.vercel.app
     MESSAGES_ADMIN_PASSWORD=your_secure_password
     NODE_ENV=production
     ```

2. **Deploy to Render**
   - Push your code to GitHub
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click **New +** → **Blueprint**
   - Connect your GitHub repository
   - Render will automatically detect `render.yaml` and configure the service
   - Review the configuration and click **Apply**

3. **Set Environment Variables in Render Dashboard**
   - Go to your service → **Environment**
   - Add/update these variables:
     - `MONGO_URI`: Your MongoDB Atlas connection string
     - `CLIENT_URL`: Your Vercel frontend URL (e.g., `https://myportfolio.vercel.app`)
     - `MESSAGES_ADMIN_PASSWORD`: A strong password for admin access
   - Click **Save Changes**

4. **Verify Deployment**
   - Wait for the deployment to complete (check Logs tab)
   - Test the health check: `https://your-api.onrender.com/api/contact`
   - Should return: `{"error":"Name, email, and message are required."}` (400 error means API is working)

### Option B: Manual Deployment

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **New +** → **Web Service**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `portfolio-api`
   - **Region**: Choose closest to your audience
   - **Branch**: `main`
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free
5. Add Environment Variables (same as Step 3 above)
6. Click **Create Web Service**

---

## Step 3: Frontend Deployment (Vercel)

### Option A: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # From project root
   vercel
   ```

4. **Set Environment Variables**
   ```bash
   vercel env add VITE_API_BASE_URL production
   # Enter your Render backend URL (e.g., https://portfolio-api.onrender.com)
   ```

5. **Deploy with Production Flag**
   ```bash
   vercel --prod
   ```

### Option B: Using Vercel Dashboard

1. **Import Project**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click **Add New...** → **Project**
   - Import your GitHub repository

2. **Configure Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `client/dist`
   - **Install Command**: `npm install`

3. **Set Environment Variables**
   - Click **Environment Variables** → **Add Variable**
   - Add: `VITE_API_BASE_URL` = `https://your-api.onrender.com`
   - Click **Save**

4. **Deploy**
   - Click **Deploy**
   - Wait for build to complete

5. **Update CORS on Backend**
   - Go to Render dashboard
   - Update `CLIENT_URL` environment variable with your Vercel URL
   - Redeploy or wait for auto-redeploy

---

## Step 4: Post-Deployment Configuration

### Update vercel.json

After getting your Render backend URL, update `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "https://your-api.onrender.com/api/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/$1"
    }
  ]
}
```

### Update CORS Configuration

In Render dashboard, set `CLIENT_URL` to include your Vercel domain:
```
CLIENT_URL=https://your-domain.vercel.app,https://your-custom-domain.com
```

### Custom Domain (Optional)

**For Vercel Frontend:**
1. Go to Vercel Project → **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed

**For Render Backend:**
1. Custom domains require a paid Render plan
2. Alternatively, use the default `onrender.com` subdomain

---

## Environment Variables Reference

### Backend (Render)

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB Atlas connection string | `mongodb+srv://user:pass@cluster.mongodb.net/portfolio` |
| `PORT` | Server port (auto-set by Render) | `5005` |
| `CLIENT_URL` | Frontend URL(s) for CORS (comma-separated) | `https://myportfolio.vercel.app` |
| `MESSAGES_ADMIN_PASSWORD` | Admin dashboard password | `your_secure_password` |
| `NODE_ENV` | Environment | `production` |

### Frontend (Vercel)

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API URL | `https://portfolio-api.onrender.com` |

---

## MongoDB Atlas Compatibility

✅ **Fully Compatible** - The application uses Mongoose 8.x which fully supports MongoDB Atlas.

### Connection String Format
```
mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
```

### Required Atlas Features
- **Connection Method**: Vite (Node.js driver)
- **Authentication**: Username/Password
- **Network**: IP Whitelist or VPC Peering

### Recommended Atlas Settings
- **Cluster Tier**: M0 (Free) for development
- **Additional Storage**: Default is sufficient
- **Backup**: Not available on M0, consider upgrading for production

---

## Testing the Deployment

### 1. Test Contact Form
- Visit your Vercel frontend
- Fill out and submit the contact form
- Verify success message appears

### 2. Test Admin Dashboard
- Visit `https://your-domain.vercel.app/messages`
- Enter your admin password
- Verify messages are displayed

### 3. Test API Directly
```bash
# Test contact endpoint
curl -X POST https://your-api.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"This is a test message."}'

# Should return: {"success":true}
```

---

## Troubleshooting

### Frontend Issues

**API calls failing (404/500):**
- Check `VITE_API_BASE_URL` is set correctly in Vercel
- Verify Render backend is running (check logs)
- Ensure CORS is configured properly on backend

**Build failures:**
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Run `npm run build` locally to test

### Backend Issues

**MongoDB connection errors:**
- Verify connection string is correct
- Check IP whitelist includes Render's IPs (or `0.0.0.0/0`)
- Ensure database user has correct permissions

**CORS errors:**
- Update `CLIENT_URL` in Render to include your frontend domain
- Ensure no trailing slashes in URLs

**Port binding errors:**
- Render sets `PORT` automatically; don't hardcode it
- The app listens on `0.0.0.0` to accept external connections

### Common Errors

| Error | Solution |
|-------|----------|
| "MongoDB connection failed" | Check connection string and IP whitelist |
| "CORS policy blocked" | Update CLIENT_URL on Render |
| "Cannot find module" | Ensure rootDir is set to `server` on Render |
| "Build failed" on Vercel | Check that build command outputs to `client/dist` |

---

## Deployment Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created with correct permissions
- [ ] IP whitelist configured (0.0.0.0/0 for Render)
- [ ] Backend deployed to Render
- [ ] Backend environment variables set
- [ ] Backend health check passing
- [ ] Frontend deployed to Vercel
- [ ] Frontend environment variables set
- [ ] CORS configured with correct frontend URL
- [ ] Contact form tested and working
- [ ] Admin dashboard accessible
- [ ] Custom domain configured (optional)

---

## Alternative Deployment Options

### Single-Platform Deployment

If you prefer to host both frontend and backend on the same platform:

**Render (Full Stack):**
- Deploy backend as Web Service
- Deploy frontend as Static Site
- Set `VITE_API_BASE_URL` to backend URL

**Vercel (Full Stack):**
- Not recommended for this architecture as Vercel is optimized for frontend
- Backend would need to be serverless functions

### Docker Deployment

Create a `Dockerfile` for containerized deployment:

```dockerfile
# Backend Dockerfile (in server/)
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5005
CMD ["npm", "start"]
```

---

## Support

For issues specific to:
- **Vercel**: [Vercel Documentation](https://vercel.com/docs)
- **Render**: [Render Documentation](https://render.com/docs)
- **MongoDB Atlas**: [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)