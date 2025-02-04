// Image loader utility
export const getImageUrl = (path) => {
  try {
    // First try to get the image from the public folder
    const publicUrl = new URL(`/public${path}`, import.meta.url).href;
    return publicUrl;
  } catch (error) {
    // Fallback to direct path
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
    img.src = typeof src === 'string' ? src : src.url;
  });
};

// Get optimized image size
export const getOptimizedImageUrl = (path, width = 800) => {
  // If using a CDN or image optimization service, modify the URL here
  return `${path}?w=${width}&q=75`;
}; 