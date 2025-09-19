# Product Media Upload Features

## Overview
The admin panel now supports multiple image and video uploads for products. This feature allows administrators to upload multiple images and videos for each product with a user-friendly interface.

## Features

### Image Upload
- **Multiple Selection**: Upload multiple images at once
- **Supported Formats**: JPEG, PNG, WebP, GIF
- **File Size Limit**: 10MB per file
- **Preview**: Thumbnail preview of uploaded images
- **Remove**: Individual image removal with hover delete button

### Video Upload
- **Multiple Selection**: Upload multiple videos at once
- **Supported Formats**: MP4, WebM, OGG, MOV
- **File Size Limit**: 10MB per file
- **Preview**: Video player with controls for uploaded videos
- **Remove**: Individual video removal with hover delete button

### Upload Interface
- **Separate Sections**: Dedicated upload areas for images and videos
- **Drag & Drop**: Visual feedback with dashed borders
- **Progress Indicator**: Real-time upload progress bar
- **Error Handling**: Toast notifications for upload success/failure
- **File Validation**: Automatic file type and size validation

## Technical Implementation

### API Endpoint
- **Route**: `/api/upload`
- **Method**: POST
- **File Storage**: Local storage in `public/uploads/`
- **Security**: File type and size validation

### State Management
- **Images Array**: `newProduct.images[]`
- **Videos Array**: `newProduct.videos[]`
- **Upload State**: Loading indicators and progress tracking

### File Handling
- **Unique Naming**: Timestamp + random string to prevent conflicts
- **Directory Creation**: Automatic creation of uploads directory
- **Error Recovery**: Graceful handling of upload failures

## Usage

1. **Navigate to Admin Panel**: Go to `/admin`
2. **Add New Product**: Click "Add Product" button
3. **Upload Media**: 
   - Click "Upload Images" to add product images
   - Click "Upload Videos" to add product videos
4. **Multiple Files**: Hold Ctrl/Cmd to select multiple files
5. **Preview**: See uploaded media in separate sections
6. **Remove**: Hover over media and click the X button to remove
7. **Save Product**: Complete the form and save the product

## File Structure
```
public/
  uploads/          # Uploaded files directory
    [timestamp]-[random].jpg
    [timestamp]-[random].mp4
    ...
```

## Security Features
- File type validation
- File size limits (10MB)
- Unique file naming
- Error handling and user feedback
- Upload progress tracking

## Browser Compatibility
- Modern browsers with File API support
- Multiple file selection
- Drag and drop (planned future enhancement) 