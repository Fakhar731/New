# Database Setup Guide

## MongoDB Setup

### 1. Install MongoDB
- Download and install MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community)
- Or use MongoDB Atlas (cloud service)

### 2. Environment Variables
Create a `.env.local` file in the root directory with:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/ecommerce

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Upload
MAX_FILE_SIZE=10485760
```

### 3. Database Features

#### Product Model
- **Required Fields**: name, description, price, category, stock, images
- **Optional Fields**: brand, originalPrice, videos, featured, onSale, sku, weight, dimensions, colors, sizes, tags
- **Validation**: All required fields are validated
- **Indexes**: Optimized for search and filtering

#### API Endpoints
- `GET /api/products` - Get all products
- `POST /api/products` - Create new product
- `GET /api/products/[id]` - Get single product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### 4. Features

#### ✅ **Persistent Storage**
- Products saved in MongoDB database
- Survives page refreshes and server restarts
- Data persists across sessions

#### ✅ **Real-time Updates**
- Products immediately available after creation
- Updates reflected across all pages
- Proper error handling and feedback

#### ✅ **Validation**
- Server-side validation for all required fields
- Image requirement enforced
- Data integrity maintained

#### ✅ **Performance**
- Database indexes for fast queries
- Efficient filtering and sorting
- Optimized for large product catalogs

### 5. Usage

1. **Start MongoDB** service
2. **Set environment variables** in `.env.local`
3. **Run the application**: `npm run dev`
4. **Add products** via admin panel
5. **Products persist** after refresh and restart

### 6. Database Schema

```javascript
{
  name: String (required),
  description: String (required),
  price: Number (required),
  originalPrice: Number,
  category: String (required),
  brand: String,
  stock: Number (required),
  rating: Number,
  reviews: Number,
  images: [String] (required),
  videos: [String],
  featured: Boolean,
  onSale: Boolean,
  sku: String,
  weight: String,
  dimensions: String,
  colors: [String],
  sizes: [String],
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### 7. Troubleshooting

#### Connection Issues
- Ensure MongoDB is running
- Check MONGODB_URI in `.env.local`
- Verify network connectivity

#### Upload Issues
- Check file size limits
- Verify upload directory permissions
- Ensure proper file types

#### Performance Issues
- Monitor database indexes
- Check query optimization
- Consider pagination for large datasets 