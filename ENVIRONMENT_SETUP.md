# Environment Setup for Vercel Deployment

## Required Environment Variables

Add these environment variables in your Vercel dashboard:

### Database Configuration
```
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database?retryWrites=true&w=majority
```

### Cloudinary Configuration (for image uploads)
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### Email Configuration (for notifications)
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### JWT Secret (for authentication)
```
JWT_SECRET=your-super-secret-jwt-key-here
```

### NextAuth Configuration
```
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your-nextauth-secret-key
```

## How to Set Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add each variable with the correct name and value
5. Make sure to set them for Production, Preview, and Development environments

## MongoDB Atlas Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Create a database user with read/write permissions
4. Get your connection string
5. Replace the placeholder values in MONGODB_URI

## Cloudinary Setup

1. Create a Cloudinary account
2. Get your cloud name, API key, and API secret
3. Add them to your environment variables

## Email Setup (Gmail)

1. Enable 2-factor authentication on your Gmail account
2. Generate an app password
3. Use the app password in EMAIL_PASS

## Common Issues and Solutions

### 500 Errors on API Routes
- Check if MONGODB_URI is correctly set
- Ensure MongoDB Atlas IP whitelist includes Vercel's IPs (0.0.0.0/0)
- Verify database user has correct permissions

### 404 Errors on Static Pages
- Ensure all page routes exist in your app directory
- Check for typos in navigation links
- Verify Next.js routing is working correctly

### Image Upload Issues
- Verify Cloudinary credentials are correct
- Check if CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET are set
- Ensure NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is set

### Authentication Issues
- Verify JWT_SECRET is set and secure
- Check NEXTAUTH_URL matches your production URL
- Ensure NEXTAUTH_SECRET is set

## Testing Your Setup

1. Deploy to Vercel
2. Check the deployment logs for any errors
3. Test the main functionality:
   - Product listing
   - User authentication
   - Image uploads
   - Admin dashboard

## Security Notes

- Never commit environment variables to your repository
- Use strong, unique secrets for JWT_SECRET and NEXTAUTH_SECRET
- Regularly rotate your API keys and secrets
- Monitor your application logs for any security issues 