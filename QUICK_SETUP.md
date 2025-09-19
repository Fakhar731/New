# Quick Database Setup Guide

## Step 1: Install MongoDB
1. Download MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Install it on your system
3. Start the MongoDB service

## Step 2: Create Environment File
Create a file called `.env.local` in the root directory with:

```env
MONGODB_URI=mongodb://localhost:27017/ecommerce
```

## Step 3: Test Database Connection
1. Start your development server: `npm run dev`
2. Visit: `http://localhost:3000/api/test-db`
3. You should see: `{"success":true,"message":"Database connection successful"}`

## Step 4: Test Environment Variables
Visit: `http://localhost:3000/api/test-env`
You should see: `{"success":true,"mongoUri":"Set","nodeEnv":"development"}`

## Step 5: Test Product Creation
1. Go to admin panel: `http://localhost:3000/admin`
2. Try to add a product
3. Check browser console for debug logs

## Troubleshooting

### If database connection fails:
- Make sure MongoDB is running
- Check if port 27017 is available
- Try: `mongodb://127.0.0.1:27017/ecommerce`

### If environment variables are not set:
- Make sure `.env.local` file exists in root directory
- Restart the development server after creating the file

### If product creation fails:
- Check browser console for error messages
- Check server console for API logs
- Make sure all required fields are filled

## Alternative: Use MongoDB Atlas (Cloud)
If local MongoDB doesn't work, you can use MongoDB Atlas:

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Replace `MONGODB_URI` in `.env.local` with your Atlas connection string 