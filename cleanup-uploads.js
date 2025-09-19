const fs = require('fs')
const path = require('path')

// Clean up local uploads directory
const uploadsDir = path.join(__dirname, 'public', 'uploads')

if (fs.existsSync(uploadsDir)) {
  console.log('🧹 Cleaning up local uploads directory...')
  
  const files = fs.readdirSync(uploadsDir)
  console.log(`Found ${files.length} files in uploads directory`)
  
  // Remove all files in uploads directory
  files.forEach(file => {
    const filePath = path.join(uploadsDir, file)
    fs.unlinkSync(filePath)
    console.log(`Deleted: ${file}`)
  })
  
  // Remove the uploads directory itself
  fs.rmdirSync(uploadsDir)
  console.log('✅ Local uploads directory cleaned up successfully!')
  console.log('📸 All future uploads will use Cloudinary exclusively.')
} else {
  console.log('✅ No local uploads directory found.')
}

console.log('\n🚀 Your app is now configured to use Cloudinary for all image uploads!')
console.log('📋 Make sure to set your Cloudinary environment variables:')
console.log('   - CLOUDINARY_CLOUD_NAME')
console.log('   - CLOUDINARY_API_KEY') 
console.log('   - CLOUDINARY_API_SECRET') 