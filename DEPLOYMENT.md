# Deployment Guide

This portfolio is now a static React/Vite app. It does not need Render, MongoDB Atlas, or a backend API.

## Vercel

Use these project settings:

- Framework Preset: `Vite`
- Root Directory: project root
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `client/dist`

The included `vercel.json` already points Vercel to the correct build output and keeps client-side routing working.

## Contact Form

The contact form submits to FormSubmit and sends email to:

`chenulrandiya10@gmail.com`

On the first real submission, FormSubmit may send a confirmation email to that inbox. Open that email and confirm the address once. After confirmation, form submissions should arrive normally.

## Local Testing

Run:

```bash
npm run dev
```

Then open the local Vite URL and test the contact form.
