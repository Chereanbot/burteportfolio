import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import toast, { Toaster } from 'react-hot-toast';

// Initialize EmailJS with your public key
emailjs.init("VY47YKva6wfVAgHuY");

const ContactForm = () => {
  const [formState, setFormState] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const form = useRef();

  // Real-time validation
  const validateField = (name, value) => {
    switch (name) {
      case 'from_name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'from_email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'phone':
        return value && !/^\+?[\d\s-]{10,}$/.test(value) ? 'Please enter a valid phone number' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time field validation
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Check if form can be submitted
  useEffect(() => {
    const hasRequiredFields = formState.from_name && formState.from_email && formState.message;
    const hasNoErrors = Object.values(errors).every(error => !error);
    setCanSubmit(hasRequiredFields && hasNoErrors);
  }, [formState, errors]);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    try {
      const templateParams = {
        from_name: formState.from_name,
        from_email: formState.from_email,
        phone: formState.phone || "Not provided",
        message: formState.message,
        to_name: "Cherinet",
        reply_to: formState.from_email
      };

      console.log('Attempting to send main email with params:', templateParams);

      const mainResult = await emailjs.send(
        'service_4esg85g',
        'template_vcsemji',
        templateParams,
        'VY47YKva6wfVAgHuY'
      );

      console.log('Main email response:', mainResult);

      if (mainResult.text === 'OK') {
        console.log('Sending auto-reply email...');
        const autoReplyResult = await emailjs.send(
          'service_4esg85g',
          'template_3mobb2n',
          templateParams,
          'VY47YKva6wfVAgHuY'
        );

        console.log('Auto-reply email response:', autoReplyResult);

        setFormState({
          from_name: "",
          from_email: "",
          phone: "",
          message: ""
        });
        
        // First success message - Immediate personal acknowledgment
        toast.success(`Thank you for reaching out, ${formState.from_name}! 🌟`, {
          duration: 4000,
          position: 'top-center',
          style: {
            background: 'rgba(0, 0, 0, 0.9)',
            color: '#fff',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(0, 255, 255, 0.3)',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 4px 12px rgba(0, 255, 255, 0.2)',
            fontSize: '14px',
            fontWeight: '500',
            marginTop: '20px'
          },
          icon: '👋'
        });

        // Second success message - Professional response time
        setTimeout(() => {
          toast.success("Your message is important to me! I'll respond within 24 hours with personalized feedback. 📬", {
            duration: 5000,
            position: 'top-center',
            style: {
              background: 'rgba(0, 0, 0, 0.9)',
              color: '#fff',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(0, 255, 255, 0.3)',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 12px rgba(0, 255, 255, 0.2)',
              fontSize: '14px',
              fontWeight: '500',
              marginTop: '20px'
            },
            icon: '⭐'
          });
        }, 1500);

        // Third success message - Building excitement
        setTimeout(() => {
          toast.success("Let's create something extraordinary together! Your vision, my expertise. 🚀", {
            duration: 5000,
            position: 'top-center',
            style: {
              background: 'rgba(0, 0, 0, 0.9)',
              color: '#fff',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(0, 255, 255, 0.3)',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 12px rgba(0, 255, 255, 0.2)',
              fontSize: '14px',
              fontWeight: '500',
              marginTop: '20px'
            },
            icon: '💫'
          });
        }, 3000);

        // Fourth success message - Call to action
        setTimeout(() => {
          toast.success("Meanwhile, feel free to explore my portfolio for more inspiration! ✨", {
            duration: 5000,
            position: 'top-center',
            style: {
              background: 'rgba(0, 0, 0, 0.9)',
              color: '#fff',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(0, 255, 255, 0.3)',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 12px rgba(0, 255, 255, 0.2)',
              fontSize: '14px',
              fontWeight: '500',
              marginTop: '20px'
            },
            icon: '🎨'
          });
        }, 4500);
      } else {
        throw new Error('Failed to send main email');
      }
    } catch (error) {
      console.error("Failed to send email. Full error details:", error);
      toast.error('Failed to send message. Please try again.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: 'rgba(0, 0, 0, 0.9)',
          color: '#fff',
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(255, 0, 0, 0.3)',
          borderRadius: '8px',
          padding: '16px',
          boxShadow: '0 4px 12px rgba(255, 0, 0, 0.2)',
          fontSize: '14px',
          fontWeight: '500',
          marginTop: '20px'
        },
        icon: '❌'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full relative"
    >
      <Toaster
        toastOptions={{
          className: '',
          style: {
            maxWidth: '400px',
          },
        }}
        containerStyle={{
          position: 'relative',
          zIndex: 50,
          top: 0
        }}
      />
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
        {/* Name Input */}
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <input
            type="text"
            name="from_name"
            value={formState.from_name}
            onChange={handleChange}
            onBlur={(e) => handleChange(e)}
            required
            className={`w-full h-12 rounded-lg bg-black/40 backdrop-blur-sm px-4 border ${
              errors.from_name ? 'border-red-500/50' : 'border-cyan/20'
            } focus:border-cyan/60 outline-none transition-all duration-300 text-white`}
            placeholder="Your Name *"
          />
          {errors.from_name && (
            <span className="text-xs text-red-500 mt-1">{errors.from_name}</span>
          )}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.div>

        {/* Email Input */}
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <input
            type="email"
            name="from_email"
            value={formState.from_email}
            onChange={handleChange}
            onBlur={(e) => handleChange(e)}
            required
            className={`w-full h-12 rounded-lg bg-black/40 backdrop-blur-sm px-4 border ${
              errors.from_email ? 'border-red-500/50' : 'border-cyan/20'
            } focus:border-cyan/60 outline-none transition-all duration-300 text-white`}
            placeholder="Your Email *"
          />
          {errors.from_email && (
            <span className="text-xs text-red-500 mt-1">{errors.from_email}</span>
          )}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.div>

        {/* Phone Input */}
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <input
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            onBlur={(e) => handleChange(e)}
            className={`w-full h-12 rounded-lg bg-black/40 backdrop-blur-sm px-4 border ${
              errors.phone ? 'border-red-500/50' : 'border-cyan/20'
            } focus:border-cyan/60 outline-none transition-all duration-300 text-white`}
            placeholder="Your Phone Number (optional)"
          />
          {errors.phone && (
            <span className="text-xs text-red-500 mt-1">{errors.phone}</span>
          )}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.div>

        {/* Message Input */}
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            onBlur={(e) => handleChange(e)}
            required
            rows="6"
            className={`w-full rounded-lg bg-black/40 backdrop-blur-sm p-4 border ${
              errors.message ? 'border-red-500/50' : 'border-cyan/20'
            } focus:border-cyan/60 outline-none transition-all duration-300 text-white resize-none`}
            placeholder="Your Message *"
          />
          {errors.message && (
            <span className="text-xs text-red-500 mt-1">{errors.message}</span>
          )}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={!canSubmit || loading}
          className={`relative w-full h-12 rounded-lg ${
            canSubmit 
              ? 'bg-gradient-to-r from-cyan via-blue-400 to-cyan cursor-pointer' 
              : 'bg-gray-600/50 cursor-not-allowed'
          } border-none text-white font-bold text-lg overflow-hidden group disabled:opacity-50`}
          whileHover={canSubmit ? { scale: 1.02 } : {}}
          whileTap={canSubmit ? { scale: 0.98 } : {}}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {loading ? (
              <>
                <span className="animate-spin">⚡</span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </span>
          {canSubmit && (
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/50 via-blue-400/50 to-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
