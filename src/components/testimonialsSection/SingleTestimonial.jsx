const SingleTestimonial = ({ testimonial }) => {
  return (
    <div className="bg-gradient-to-br from-black/60 via-black/40 to-cyan/5 backdrop-blur-sm p-6 rounded-xl hover:scale-105 transition-all duration-300 flex flex-col gap-4 border border-cyan/20 hover:border-cyan/40 group h-full shadow-lg shadow-cyan/5">
      {/* Top Decoration */}
      <div className="flex justify-between items-center">
        {/* Quote Icon */}
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue-400 to-cyan text-3xl group-hover:scale-110 transition-all duration-300">❝</div>
        {/* Rating Stars */}
        <div className="flex gap-1">
          {"★★★★★".split("").map((star, i) => (
            <span key={i} className="text-gradient-gold text-sm">{star}</span>
          ))}
        </div>
      </div>
      
      {/* Testimonial Text */}
      <div className="space-y-2">
        <p className="text-gray-300 font-body text-sm leading-relaxed line-clamp-4">
          <span className="text-cyan font-medium">{testimonial.text.split(' ').slice(0, 3).join(' ')} </span>
          {testimonial.text.split(' ').slice(3).join(' ')}
        </p>
      </div>
      
      {/* Author Info */}
      <div className="mt-auto pt-4 border-t border-cyan/10">
        <div className="flex items-center gap-3">
          {testimonial.image && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan via-blue-400 to-cyan rounded-full animate-pulse opacity-20"></div>
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-cyan/20 group-hover:border-cyan/40 transition-all duration-300 relative z-10"
              />
            </div>
          )}
          <div>
            <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400 font-semibold text-sm group-hover:from-blue-400 group-hover:to-cyan transition-all duration-300">
              {testimonial.author}
            </h4>
            <p className="text-cyan/80 text-xs">
              <span className="text-gray-400">at </span>
              {testimonial.position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial; 