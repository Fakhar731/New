const mongoose = require('mongoose')

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test')
    console.log('✅ Connected to MongoDB')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    process.exit(1)
  }
}

// Generate unique SKU
const generateSKU = () => {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2, 8)
  return `SKU-${timestamp}-${random}`.toUpperCase()
}

// Fix products with empty SKUs
const fixEmptySKUs = async () => {
  try {
    const Product = mongoose.model('Product', new mongoose.Schema({
      sku: String
    }))

    // Find products with empty or missing SKUs
    const productsWithEmptySKU = await Product.find({
      $or: [
        { sku: { $exists: false } },
        { sku: null },
        { sku: '' },
        { sku: { $regex: /^\s*$/ } } // Only whitespace
      ]
    })

    console.log(`Found ${productsWithEmptySKU.length} products with empty SKUs`)

    if (productsWithEmptySKU.length === 0) {
      console.log('✅ No products with empty SKUs found')
      return
    }

    // Update each product with a unique SKU
    for (const product of productsWithEmptySKU) {
      const newSKU = generateSKU()
      await Product.findByIdAndUpdate(product._id, { sku: newSKU })
      console.log(`✅ Updated product ${product._id} with SKU: ${newSKU}`)
    }

    console.log('✅ All products have been updated with unique SKUs')

  } catch (error) {
    console.error('❌ Error fixing SKUs:', error)
  }
}

// Main execution
const main = async () => {
  console.log('🔧 Starting SKU fix process...')
  
  await connectDB()
  await fixEmptySKUs()
  
  console.log('✅ SKU fix process completed')
  process.exit(0)
}

main().catch(console.error) 