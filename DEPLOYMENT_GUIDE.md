# 🚀 Deployment Guide - Cloudinary Image Upload Setup

## 🔧 **Environment Variables Setup**

Create a `.env.local` file in your project root with the following variables:

```env
# Database Configuration
MONGODB_URI=your_mongodb_connection_string_here

# Cloudinary Configuration (REQUIRED for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Email Configuration (Optional - for order notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password

# JWT Secret (for authentication)
JWT_SECRET=your_jwt_secret_key_here

# Next.js Configuration
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your_nextauth_secret_here

# Environment
NODE_ENV=production
```

## 📸 **Cloudinary Setup**

1. **Create Cloudinary Account:**
   - Go to [cloudinary.com](https://cloudinary.com)
   - Sign up for a free account
   - Get your credentials from the dashboard

2. **Get Your Cloudinary Credentials:**
   - Cloud Name: Found in your dashboard
   - API Key: Found in your dashboard
   - API Secret: Found in your dashboard

## 🛠️ **Deployment Platforms**

### **Vercel Deployment:**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all the variables from `.env.local`

### **Netlify Deployment:**
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add environment variables in Netlify dashboard:
   - Go to Site Settings → Environment Variables
   - Add all the variables from `.env.local`

### **Railway Deployment:**
1. Push your code to GitHub
2. Connect your repository to Railway
3. Add environment variables in Railway dashboard:
   - Go to Variables tab
   - Add all the variables from `.env.local`

## 🔍 **Testing Image Upload**

After deployment, test the image upload functionality:

1. **Go to Admin Panel:** `/admin`
2. **Try uploading an image** in the product creation form
3. **Check the console** for any errors
4. **Verify the image URL** is from Cloudinary (should start with `https://res.cloudinary.com/`)

**Note:** All image uploads now use Cloudinary exclusively - no local file storage is used.

## 🐛 **Common Issues & Solutions**

### **Issue: "Failed to fetch" error**
**Solution:** Check that all environment variables are set correctly in your deployment platform.

### **Issue: Images not uploading**
**Solution:** 
1. Verify Cloudinary credentials are correct
2. Check that `NODE_ENV=production` is set
3. Ensure the upload API route is working

### **Issue: Images showing as broken**
**Solution:** 
1. Check that Cloudinary URLs are being generated correctly
2. Verify the image URLs are accessible
3. Check CORS settings if needed

## 📋 **Pre-Deployment Checklist**

- [ ] All environment variables are set
- [ ] Cloudinary account is configured
- [ ] MongoDB connection string is valid
- [ ] Email configuration is set (if using email notifications)
- [ ] JWT secret is set
- [ ] NextAuth configuration is correct
- [ ] Image upload is tested locally

## 🔧 **Local Testing**

To test the production setup locally:

1. Create `.env.local` with production values
2. Set `NODE_ENV=production`
3. Run `npm run dev`
4. Test image upload in admin panel

## 📞 **Support**

If you encounter issues:
1. Check the browser console for errors
2. Check the deployment platform logs
3. Verify all environment variables are set correctly
4. Test the upload API endpoint directly

## 🎯 **Key Changes Made**

1. **Updated Upload Route:** Now uses Cloudinary exclusively for all environments
2. **Added Cloudinary Service:** Handles image uploads to Cloudinary
3. **Removed Local Storage:** No more local file storage - all uploads go to Cloudinary
4. **Error Handling:** Better error messages for upload failures
5. **Dynamic Configuration:** Added `export const dynamic = 'force-dynamic'` for proper server-side rendering 