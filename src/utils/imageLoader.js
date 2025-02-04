// Image loader utility
export const getImageUrl = (path) => {
  try {
    // Remove the public prefix if it exists
    const cleanPath = path.replace('public/', '');
    return cleanPath;
  } catch (error) {
    console.error('Error processing image path:', error);
    return path;
  }
};

// Image error handler
export const handleImageError = (event, fallbackImage = '/images/fallback-image.png') => {
  console.error('Image failed to load:', event.target.src);
  event.target.src = fallbackImage;
};

// Preload critical images
export const preloadImages = (images) => {
  images.forEach(src => {
    const img = new Image();
    img.src = typeof src === 'string' ? getImageUrl(src) : getImageUrl(src.url);
    img.onerror = () => console.error('Failed to preload image:', src);
  });
};

// Get optimized image size
export const getOptimizedImageUrl = (path, width = 800) => {
  const cleanPath = getImageUrl(path);
  // If using a CDN or image optimization service, modify the URL here
  return `${cleanPath}?w=${width}&q=75`;
}; 