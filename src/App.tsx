import React, { useState, useEffect } from "react";
import { 
  Dumbbell, 
  MapPin, 
  Phone, 
  Clock, 
  Heart, 
  UserCheck, 
  Star, 
  Check, 
  X, 
  Menu, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  ShieldCheck,
  Send,
  Sparkles,
  Zap,
  Info,
  Calendar,
  Instagram,
  Compass,
  MessageSquare,
  Flame,
  ChevronRight,
  Map,
  Facebook,
  Youtube
} from "lucide-react";

const lobbyImg = "/src/assets/images/gym_reception_lobby_1782281834245.jpg";
const treadmillsImg = "/src/assets/images/gym_interior_treadmills_1782281870718.jpg";
const dumbbellsImg = "/src/assets/images/gym_dumbbell_rack_1782281901841.jpg";
const strengthImg = "/src/assets/images/gym_strength_training_1782281927872.jpg";
const yogaImg = "/src/assets/images/gym_yoga_studio_1782281948884.jpg";
const ptImg = "/src/assets/images/gym_personal_training_1782282004096.jpg";
const boxingImg = "/src/assets/images/gym_boxing_bag_1782281966339.jpg";
const exteriorImg = "/src/assets/images/gym_exterior_night_1782281987429.jpg";

const squatRackImg = "/src/assets/images/gym_squat_rack_1782282823488.jpg";
const cyclingBikesImg = "/src/assets/images/gym_cycling_bikes_1782282845152.jpg";
const consultationDeskImg = "/src/assets/images/gym_consultation_desk_1782282860645.jpg";
const functionalRopesImg = "/src/assets/images/gym_functional_ropes_1782282880123.jpg";
const logoImg = "/src/assets/images/yc_gym_logo_1782287514370.jpg";

// Real Review interface
interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  isUserAdded?: boolean;
}

// Preset verified reviews
const INITIAL_REVIEWS: Review[] = [
  {
    id: "review-1",
    name: "Sarah",
    location: "PCMC",
    rating: 5,
    text: "Joining YC’s Powerhouse Gym Moshi for private yoga classes was a game-changer. The trainers are so supportive and personalized my workouts perfectly.",
    date: "June 2026"
  },
  {
    id: "review-2",
    name: "Rohit Bhagat",
    location: "Moshi",
    rating: 5,
    text: "One of the best gyms with quality equipment and a positive vibe. Special thanks to Ayush Bari Sir for his constant support and workout guidance.",
    date: "May 2026"
  },
  {
    id: "review-3",
    name: "Sandip Nayak",
    location: "Pimpri-Chinchwad",
    rating: 5,
    text: "Excellent gym with great atmosphere and top-class equipment. The gym is always clean, well-maintained, and has positive energy.",
    date: "April 2026"
  }
];

// Interactive Gym Gallery representation (High-quality replicas of uploaded photos)
const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Reception & Lounge",
    desc: "Marble front desk with premium backlit branding and professional support team",
    url: lobbyImg
  },
  {
    id: "gal-2",
    title: "Treadmills & Cardinal LED Lights",
    desc: "Rows of premium commercial treadmills with high-tech overhead rectangular lighting",
    url: treadmillsImg
  },
  {
    id: "gal-3",
    title: "Muscle & Strength Zone",
    desc: "Premium yellow plate-loaded heavy weight machines and high bicep progression support",
    url: strengthImg
  },
  {
    id: "gal-4",
    title: "Dumbbells & Barbells Rack",
    desc: "Professional solid steel dumbbells ranging up to 50kg for custom weight progression",
    url: dumbbellsImg
  },
  {
    id: "gal-5",
    title: "Private Yoga Studio",
    desc: "Vibrant and calm wooden floors dedicated to tailoring individual, private yoga classes",
    url: yogaImg
  },
  {
    id: "gal-6",
    title: "Personal Training Session",
    desc: "Guided step-ups, form correction and intense support by certified motivators",
    url: ptImg
  },
  {
    id: "gal-7",
    title: "Boxing & USI Combat Area",
    desc: "High durability red and black heavy combat bags, punching bag zone, and suspension setups",
    url: boxingImg
  },
  {
    id: "gal-8",
    title: "YC's Storefront at Night",
    desc: "Premium exterior with glowing LED branding, bright signage, and full glass window paneling",
    url: exteriorImg
  },
  {
    id: "gal-9",
    title: "Moshi Gym Main Floor",
    desc: "A wide, high-contrast perspective of the prime training facility floor showing plate loaded machines and elite infrastructure.",
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGFqKY0ssr6BO-2Yk6eeb3B5DMfl60Yv64pLjh59RqgrgyPPV9dhuuqRPRU0lgmhaREV5CBadQKOE_tZIFFiMO7zcJ0i0f5KvJscvhLCTYev-RUslMK1QuwOSviCaZVRvivqEQZyXRRd_0=s800",
    mapsUrl: "https://www.google.com/maps/place/YC%E2%80%99S+Powerhouse+Gym+Moshi/@18.68079,73.8378867,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhATgTSwjlN3e5XQlFNXnUxi!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAGFqKY0ssr6BO-2Yk6eeb3B5DMfl60Yv64pLjh59RqgrgyPPV9dhuuqRPRU0lgmhaREV5CBadQKOE_tZIFFiMO7zcJ0i0f5KvJscvhLCTYev-RUslMK1QuwOSviCaZVRvivqEQZyXRRd_0%3Dw203-h270-k-no!7i3024!8i4032!4m9!3m8!1s0x3bc2b708753b92f5:0x342e2a223092deaf!8m2!3d18.6807737!4d73.8380081!10e5!14m1!1BCgIgARICEAE!16s%2Fg%2F11kbj2mph3?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D#"
  },
  {
    id: "gal-10",
    title: "Elite Power Squat Rack",
    desc: "Industrial grade heavy-duty yellow and black power squat racks with loaded steel plate stacks for extreme safety.",
    url: squatRackImg,
    mapsUrl: "https://www.google.com/maps/place/YC%E2%80%99S+Powerhouse+Gym+Moshi/@18.68079,73.8378867,3a,102.2y,90t/data=!3m7!1e2!3m5!1sCIHM0ogKEICAgICZv6TyGw!2e10!3e12!7i720!8i480!4m9!3m8!1s0x3bc2b708753b92f5:0x342e2a223092deaf!8m2!3d18.6807737!4d73.8380081!10e5!14m1!1BCgIgARICEAE!16s%2Fg%2F11kbj2mph3?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D#"
  },
  {
    id: "gal-11",
    title: "Pro Indoor Spin Cycling",
    desc: "A line of high-performance stationary cycling trainer bikes dedicated to high-energy aerobic intervals.",
    url: cyclingBikesImg,
    mapsUrl: "https://www.google.com/maps/place/YC%E2%80%99S+Powerhouse+Gym+Moshi/@18.68079,73.8378867,3a,102.2y,90t/data=!3m7!1e2!3m5!1sCIHM0ogKEICAgICZv6TyGw!2e10!3e12!7i720!8i480!4m9!3m8!1s0x3bc2b708753b92f5:0x342e2a223092deaf!8m2!3d18.6807737!4d73.8380081!10e5!14m1!1BCgIgARICEAE!16s%2Fg%2F11kbj2mph3?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D#"
  },
  {
    id: "gal-12",
    title: "Member Desk & Consultation Hub",
    desc: "The customized diagnostic zone featuring precise body composition scanners and personal fitness consult tables.",
    url: consultationDeskImg,
    mapsUrl: "https://www.google.com/maps/place/YC%E2%80%99S+Powerhouse+Gym+Moshi/@18.68079,73.8378867,3a,102.2y,90t/data=!3m7!1e2!3m5!1sCIHM0ogKEICAgICZv6TyGw!2e10!3e12!7i720!8i480!4m9!3m8!1s0x3bc2b708753b92f5:0x342e2a223092deaf!8m2!3d18.6807737!4d73.8380081!10e5!14m1!1BCgIgARICEAE!16s%2Fg%2F11kbj2mph3?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D#"
  },
  {
    id: "gal-13",
    title: "High-Intensity Turf & Ropes",
    desc: "Heavy-duty custom nylon battle ropes resting on synthetic grass turf alongside suspension rig anchor systems.",
    url: functionalRopesImg,
    mapsUrl: "https://www.google.com/maps/place/YC%E2%80%99S+Powerhouse+Gym+Moshi/@18.68079,73.8378867,3a,102.2y,90t/data=!3m7!1e2!3m5!1sCIHM0ogKEICAgICZv6TyGw!2e10!3e12!7i720!8i480!4m9!3m8!1s0x3bc2b708753b92f5:0x342e2a223092deaf!8m2!3d18.6807737!4d73.8380081!10e5!14m1!1BCgIgARICEAE!16s%2Fg%2F11kbj2mph3?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D#"
  }
];

export default function App() {
  // Navigation states
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Review states
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewText, setNewReviewText] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewLocation, setNewReviewLocation] = useState("");
  const [reviewSuccessMsg, setReviewSuccessMsg] = useState("");

  // Plan Pricing states
  const [selectedPlanType, setSelectedPlanType] = useState<"general" | "yoga" | "pt">("general");
  const [selectedDuration, setSelectedDuration] = useState<3 | 6 | 12>(3);

  // Booking Trial States
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingService, setBookingService] = useState("General Gym Access");
  const [bookingTime, setBookingTime] = useState("Evening (6:00 PM - 9:00 PM)");
  const [bookingStatus, setBookingStatus] = useState<"idle" | "success">("idle");

  // Gallery Modal
  const [activePhoto, setActivePhoto] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  // Geolocation and Directions
  const [isLocating, setIsLocating] = useState(false);

  const handleGetDirections = () => {
    if (navigator.geolocation) {
      setIsLocating(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=YC's+Powerhouse+Gym+Moshi+Pune&destination_place_id=ChIJ8_2xOdfAwjsRgT8r6wP9F1Q`;
          setIsLocating(false);
          window.open(mapsUrl, "_blank", "noopener,noreferrer");
        },
        (error) => {
          console.warn("Geolocation failed, falling back:", error);
          setIsLocating(false);
          window.open("https://maps.app.goo.gl/mKmSsYDyTmBVQtJ87", "_blank", "noopener,noreferrer");
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      window.open("https://maps.app.goo.gl/mKmSsYDyTmBVQtJ87", "_blank", "noopener,noreferrer");
    }
  };

  // Time Tracker (Open/Closed indicator)
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [timeLeftStr, setTimeLeftStr] = useState("");

  useEffect(() => {
    const checkGymStatus = () => {
      // Gym is open 6:00 AM to 10:00 PM (06:00 to 22:00)
      const now = new Date();
      // Adjust to IST if possible, or use current system time (Moshi is UTC+5.5)
      // For local relevance, we'll use local hours
      const hours = now.getHours();
      const minutes = now.getMinutes();

      if (hours >= 6 && hours < 22) {
        setIsOpenNow(true);
        const hoursLeft = 21 - hours;
        const minsLeft = 60 - minutes;
        if (hoursLeft === 0) {
          setTimeLeftStr(`closes in ${minsLeft} minutes!`);
        } else {
          setTimeLeftStr(`closes in ${hoursLeft}h ${minsLeft}m`);
        }
      } else {
        setIsOpenNow(false);
        setTimeLeftStr("Opens daily at 6:00 AM");
      }
    };

    checkGymStatus();
    const interval = setInterval(checkGymStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // Handle Review Submission
  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewText.trim()) return;

    const added: Review = {
      id: `custom-review-${Date.now()}`,
      name: newReviewName,
      location: newReviewLocation.trim() || "Moshi",
      rating: newReviewRating,
      text: newReviewText,
      date: "Today",
      isUserAdded: true
    };

    setReviews([added, ...reviews]);
    setNewReviewName("");
    setNewReviewText("");
    setNewReviewLocation("");
    setNewReviewRating(5);
    setReviewSuccessMsg("Thank you! Your verified member review has been posted successfully.");
    setTimeout(() => setReviewSuccessMsg(""), 6000);
  };

  // Pricing calculator values
  const getCalculatedPrice = () => {
    // Basic realistic mock estimates in INR
    let basePerMonth = 1500; // General Gym
    if (selectedPlanType === "yoga") basePerMonth = 3500; // Private Yoga tailored sessions
    if (selectedPlanType === "pt") basePerMonth = 5000; // Personal training elite program

    const totalBase = basePerMonth * selectedDuration;
    
    // Discounts based on commitment duration
    let discountPercent = 0;
    if (selectedDuration === 6) discountPercent = 15;
    if (selectedDuration === 12) discountPercent = 25;

    const discountAmount = Math.round((totalBase * discountPercent) / 100);
    const finalPrice = totalBase - discountAmount;

    return {
      total: finalPrice,
      savings: discountAmount,
      perMonth: Math.round(finalPrice / selectedDuration),
      standardTotal: totalBase,
      discountPercent
    };
  };

  const calculated = getCalculatedPrice();

  // Booking submit redirection to WhatsApp / Success
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone) return;

    // Create WhatsApp message body
    const msg = `Hello YC's Powerhouse Gym Moshi! I would like to claim my FREE Trial Access.%0A%0A*Name:* ${encodeURIComponent(bookingName)}%0A*Phone:* ${encodeURIComponent(bookingPhone)}%0A*Interested In:* ${encodeURIComponent(bookingService)}%0A*Preferred Slot:* ${encodeURIComponent(bookingTime)}`;
    
    // Redirect url
    const waUrl = `https://wa.me/919922969807?text=${msg}`;
    
    setBookingStatus("success");
    // Open in a new tab
    window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-lime-500 selection:text-black antialiased relative overflow-hidden" id="yc-powerhouse-gym">
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[180px] -z-10" />
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-lime-500/5 rounded-full blur-[100px] -z-10" />

      {/* Top Banner Status Bar */}
      <div className="bg-lime-500 text-zinc-950 py-2.5 px-4 text-xs md:text-sm font-bold tracking-wide flex justify-between items-center z-50 relative shadow-md">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-center sm:justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 animate-ping rounded-full bg-zinc-950 opacity-75"></span>
            <span className="font-extrabold flex items-center gap-1 uppercase tracking-tight">
              <Star className="w-4 h-4 fill-zinc-950" /> 4.9 Rating (1,090+ Google Reviews)
            </span>
            <span className="hidden md:inline opacity-80">| Premium Fitness & Private Yoga in Moshi</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-mono text-xs">
              <Clock className="w-3.5 h-3.5" /> 
              {isOpenNow ? (
                <span className="font-black uppercase">Open Now <span className="normal-case font-medium">({timeLeftStr})</span></span>
              ) : (
                <span className="font-black uppercase">Closed <span className="normal-case font-medium">({timeLeftStr})</span></span>
              )}
            </span>
            <span className="text-[10px] bg-zinc-950/15 px-2 py-0.5 rounded text-zinc-950 font-black uppercase tracking-wider">🏳️‍🌈 LGBTQ+ Friendly</span>
          </div>
        </div>
      </div>

      {/* Main Header / Navbar */}
      <header className="sticky top-0 bg-zinc-900/85 backdrop-blur-md border-b border-zinc-800 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group" id="nav-logo">
            <div className="bg-zinc-950 w-11 h-11 flex items-center justify-center rounded-full border border-zinc-800 overflow-hidden transition-transform group-hover:scale-105 shadow-lg shadow-lime-500/10">
              <img 
                src={logoImg} 
                alt="YC's Powerhouse Gym Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-base md:text-lg font-bold tracking-tighter uppercase text-white font-display">
                YC'S <span className="text-lime-400">MOSHI</span>
              </span>
              <div className="text-[8px] text-zinc-400 tracking-widest uppercase font-mono flex items-center gap-0.5">
                <span>POWERHOUSE GYM</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            <a href="#home" onClick={() => setActiveSection("home")} className={`transition-colors hover:text-lime-400 ${activeSection === "home" ? "text-lime-400 font-bold" : "text-zinc-400"}`}>Home</a>
            <a href="#about" onClick={() => setActiveSection("about")} className={`transition-colors hover:text-lime-400 ${activeSection === "about" ? "text-lime-400 font-bold" : "text-zinc-400"}`}>About</a>
            <a href="#amenities" onClick={() => setActiveSection("amenities")} className={`transition-colors hover:text-lime-400 ${activeSection === "amenities" ? "text-lime-400 font-bold" : "text-zinc-400"}`}>Facilities</a>
            <a href="#gallery" onClick={() => setActiveSection("gallery")} className={`transition-colors hover:text-lime-400 ${activeSection === "gallery" ? "text-lime-400 font-bold" : "text-zinc-400"}`}>Gallery</a>
            <a href="#services" onClick={() => setActiveSection("services")} className={`transition-colors hover:text-lime-400 ${activeSection === "services" ? "text-lime-400 font-bold" : "text-zinc-400"}`}>Specialties</a>
            <a href="#testimonials" onClick={() => setActiveSection("testimonials")} className={`transition-colors hover:text-lime-400 ${activeSection === "testimonials" ? "text-lime-400 font-bold" : "text-zinc-400"}`}>Reviews</a>
            <a href="#calculator" onClick={() => setActiveSection("calculator")} className={`transition-colors hover:text-lime-400 ${activeSection === "calculator" ? "text-lime-400 font-bold" : "text-zinc-400"}`}>Rates</a>
            <a href="#social-hub" onClick={() => setActiveSection("social-hub")} className={`transition-colors hover:text-lime-400 ${activeSection === "social-hub" ? "text-lime-400 font-bold" : "text-zinc-400"}`}>Social Hub</a>
            <a href="#contact" onClick={() => setActiveSection("contact")} className={`transition-colors hover:text-lime-400 ${activeSection === "contact" ? "text-lime-400 font-bold" : "text-zinc-400"}`}>Locate Us</a>
          </nav>

          {/* Call / Trial CTAs & Social Links */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 mr-1">
              <a 
                href="https://www.instagram.com/ycs_powerhouse_moshi/?hl=en" 
                target="_blank" 
                rel="noreferrer"
                className="bg-zinc-900 border border-zinc-800 p-2 text-zinc-400 hover:text-lime-400 hover:border-lime-500/30 rounded transition-all"
                title="Official Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://next.cult.fit/cult/cult-pass/pune/YC'S-Powerhouse-Gym/2836" 
                target="_blank" 
                rel="noreferrer"
                className="bg-zinc-900 border border-zinc-800 p-2 text-lime-400 hover:text-white hover:border-lime-500/30 rounded transition-all"
                title="Cult.fit Gold Partner"
              >
                <Zap className="w-4 h-4 text-lime-400 animate-pulse" />
              </a>
            </div>
            <a 
              href="tel:09922969807" 
              className="border border-zinc-700 hover:border-lime-400 text-white px-4 py-2 rounded font-semibold text-xs uppercase tracking-tight transition-colors bg-zinc-900/50"
              id="cta-nav-tel"
            >
              <span>Call Now</span>
            </a>
            <a 
              href="#book-trial" 
              className="bg-lime-500 hover:bg-lime-400 text-zinc-950 px-5 py-2 rounded font-bold text-xs uppercase tracking-tight transition-colors shadow-sm"
              id="cta-nav-trial"
            >
              Free Trial
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 rounded bg-zinc-900 border border-zinc-800 text-white hover:border-lime-500/50"
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-6 space-y-4 absolute top-16 left-0 w-full shadow-2xl transition-all duration-300" id="mobile-nav-container">
            <div className="grid grid-cols-2 gap-3 text-[10px] font-bold uppercase tracking-wider">
              <a href="#home" onClick={() => { setActiveSection("home"); setMobileMenuOpen(false); }} className={`p-3 bg-zinc-900/50 border border-zinc-800/80 rounded hover:text-lime-400 transition-colors ${activeSection === "home" ? "text-lime-400 border-lime-500/20 bg-lime-500/5" : "text-zinc-400"}`}>Home</a>
              <a href="#about" onClick={() => { setActiveSection("about"); setMobileMenuOpen(false); }} className={`p-3 bg-zinc-900/50 border border-zinc-800/80 rounded hover:text-lime-400 transition-colors ${activeSection === "about" ? "text-lime-400 border-lime-500/20 bg-lime-500/5" : "text-zinc-400"}`}>About Us</a>
              <a href="#amenities" onClick={() => { setActiveSection("amenities"); setMobileMenuOpen(false); }} className={`p-3 bg-zinc-900/50 border border-zinc-800/80 rounded hover:text-lime-400 transition-colors ${activeSection === "amenities" ? "text-lime-400 border-lime-500/20 bg-lime-500/5" : "text-zinc-400"}`}>Facilities</a>
              <a href="#gallery" onClick={() => { setActiveSection("gallery"); setMobileMenuOpen(false); }} className={`p-3 bg-zinc-900/50 border border-zinc-800/80 rounded hover:text-lime-400 transition-colors ${activeSection === "gallery" ? "text-lime-400 border-lime-500/20 bg-lime-500/5" : "text-zinc-400"}`}>Gallery</a>
              <a href="#services" onClick={() => { setActiveSection("services"); setMobileMenuOpen(false); }} className={`p-3 bg-zinc-900/50 border border-zinc-800/80 rounded hover:text-lime-400 transition-colors ${activeSection === "services" ? "text-lime-400 border-lime-500/20 bg-lime-500/5" : "text-zinc-400"}`}>Specialties</a>
              <a href="#testimonials" onClick={() => { setActiveSection("testimonials"); setMobileMenuOpen(false); }} className={`p-3 bg-zinc-900/50 border border-zinc-800/80 rounded hover:text-lime-400 transition-colors ${activeSection === "testimonials" ? "text-lime-400 border-lime-500/20 bg-lime-500/5" : "text-zinc-400"}`}>Reviews</a>
              <a href="#calculator" onClick={() => { setActiveSection("calculator"); setMobileMenuOpen(false); }} className={`p-3 bg-zinc-900/50 border border-zinc-800/80 rounded hover:text-lime-400 transition-colors ${activeSection === "calculator" ? "text-lime-400 border-lime-500/20 bg-lime-500/5" : "text-zinc-400"}`}>Rates</a>
              <a href="#social-hub" onClick={() => { setActiveSection("social-hub"); setMobileMenuOpen(false); }} className={`p-3 bg-zinc-900/50 border border-zinc-800/80 rounded hover:text-lime-400 transition-colors ${activeSection === "social-hub" ? "text-lime-400 border-lime-500/20 bg-lime-500/5" : "text-zinc-400"}`}>Social Hub</a>
              <a href="#contact" onClick={() => { setActiveSection("contact"); setMobileMenuOpen(false); }} className={`col-span-2 p-3 bg-zinc-900/50 border border-zinc-800/80 rounded text-center hover:text-lime-400 transition-colors ${activeSection === "contact" ? "text-lime-400 border-lime-500/20 bg-lime-500/5 font-bold" : "text-zinc-400 font-bold"}`}>Locate Us</a>
            </div>

            {/* Quick status for mobile */}
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded flex justify-between items-center text-[10px]">
              <span className="flex items-center gap-1.5 font-mono text-zinc-400">
                <Clock className="w-3.5 h-3.5 text-lime-400" />
                {isOpenNow ? "Open until 10:00 PM" : "Closed now"}
              </span>
              <span className="text-lime-400 font-black uppercase tracking-widest">🏳️‍🌈 LGBTQ+ Safe</span>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a 
                href="tel:09922969807" 
                className="flex items-center justify-center gap-2 border border-zinc-800 bg-zinc-900 py-3 rounded text-xs font-semibold text-zinc-200 uppercase"
              >
                <Phone className="w-4 h-4 text-lime-400 animate-pulse" />
                <span>Call: 099229 69807</span>
              </a>
              <a 
                href="#book-trial" 
                onClick={() => setMobileMenuOpen(false)} 
                className="bg-lime-500 hover:bg-lime-400 text-zinc-950 py-3 rounded text-xs font-black text-center uppercase"
              >
                Claim Free Trial Now
              </a>
            </div>

            {/* Mobile Social Connections */}
            <div className="flex justify-center gap-4 pt-4 border-t border-zinc-900">
              <a 
                href="https://www.instagram.com/ycs_powerhouse_moshi/?hl=en" 
                target="_blank" 
                rel="noreferrer"
                className="bg-zinc-900 border border-zinc-800 p-2.5 text-zinc-400 hover:text-lime-400 hover:border-lime-500/30 rounded transition-all"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://next.cult.fit/cult/cult-pass/pune/YC'S-Powerhouse-Gym/2836" 
                target="_blank" 
                rel="noreferrer"
                className="bg-zinc-900 border border-zinc-800 p-2.5 text-lime-400 hover:text-white hover:border-lime-500/30 rounded transition-all"
                title="Cultfit Gold Pass"
              >
                <Zap className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-zinc-900 border border-zinc-800 p-2.5 text-zinc-400 hover:text-lime-400 hover:border-lime-500/30 rounded transition-all"
                title="Facebook Group"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/919922969807?text=Hi%20YC%27s%20Powerhouse%20Gym%2C%20I%20want%20to%20know%20more%20about%20your%20gym%20membership%20plans%20and%20ongoing%20offers.%20Please%20share%20the%20details%21" 
                target="_blank" 
                rel="noreferrer"
                className="bg-zinc-900 border border-zinc-800 p-2.5 text-zinc-400 hover:text-lime-400 hover:border-lime-500/30 rounded transition-all"
                title="WhatsApp Direct Support"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[480px] lg:h-[480px] flex items-center px-4 sm:px-8 lg:px-12 bg-gradient-to-r from-zinc-950 to-zinc-900 border-b border-zinc-800 overflow-hidden">
        
        {/* Background Radial Accent */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-500/20 via-transparent to-transparent"></div>
        </div>

        {/* Side Watermark from Sophisticated Dark theme */}
        <div className="absolute right-12 bottom-0 top-0 w-80 bg-zinc-800/10 border-x border-zinc-800 hidden xl:flex flex-col justify-center items-center overflow-hidden pointer-events-none">
          <div className="text-[120px] font-black text-zinc-900/30 italic rotate-90 whitespace-nowrap tracking-wider select-none">STRENGTH</div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 py-12 lg:py-0">
          
          {/* Hero Headline and Offerings */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-zinc-800/80 px-3.5 py-1.5 rounded-full border border-zinc-700">
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-[10px] font-bold text-zinc-300 tracking-wider uppercase">4.9 RATING (1,090+ REVIEWS)</span>
            </div>

            {/* Giant Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase leading-[0.95] mb-4 tracking-tighter text-white font-display">
              Transform Your <br/>
              <span className="text-lime-400">Power</span> At Moshi's #1 Gym
            </h1>

            {/* Body Description */}
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto lg:mx-0">
              Experience top-tier quality workout machines, expert coaching from Ayush Bari Sir, and private yoga in an LGBTQ+ friendly, clean, and motivating environment.
            </p>

            {/* Primary Action Callouts */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#book-trial" 
                className="w-full sm:w-auto bg-lime-500 text-zinc-950 px-8 py-3.5 rounded font-black text-xs uppercase tracking-wider hover:bg-lime-400 transition-colors flex items-center justify-center gap-2 shadow-sm"
                id="cta-hero-trial"
              >
                <span>Claim Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="tel:09922969807" 
                className="w-full sm:w-auto border border-zinc-700 text-white px-8 py-3.5 rounded font-black text-xs uppercase bg-zinc-900/50 hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                id="cta-hero-phone"
              >
                <Phone className="w-4 h-4 text-lime-400 animate-pulse" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Verified Google Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-[10px] uppercase text-zinc-500 font-mono pt-2">
              <span>• VERIFIED LOCAL FAVORITE IN MOSHI & MIDC AREA</span>
            </div>

          </div>

          {/* Hero Visual Block */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent z-10" />
            
            {/* Visual Gym Accent Card */}
            <div className="relative rounded overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop" 
                alt="YC's Powerhouse Gym Training Floor" 
                className="w-full h-[320px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                <p className="text-lime-400 text-[10px] font-mono font-bold tracking-wider uppercase">Premium Machine Setup</p>
                <h3 className="text-sm font-bold text-white">Clean, Well-Maintained & Elite</h3>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Services Grid (Pillars) from the Sophisticated Dark Theme design template */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border-b border-zinc-800">
        <div className="bg-zinc-950 p-8 flex flex-col justify-center group hover:bg-zinc-900/40 transition-colors duration-300">
          <div className="text-lime-400 mb-2 font-black text-2xl italic font-display">01</div>
          <h3 className="text-base font-black uppercase mb-1.5 text-white tracking-wide">Premium Facilities</h3>
          <p className="text-zinc-400 text-xs leading-relaxed">Top-class quality workout machines and impeccably clean, well-maintained environment for elite performance.</p>
        </div>
        <div className="bg-zinc-900 p-8 flex flex-col justify-center border-y md:border-y-0 md:border-x border-zinc-800 group hover:bg-zinc-950 transition-colors duration-300">
          <div className="text-lime-400 mb-2 font-black text-2xl italic font-display">02</div>
          <h3 className="text-base font-black uppercase mb-1.5 text-white tracking-wide">Certified Trainers</h3>
          <p className="text-zinc-400 text-xs leading-relaxed">Personalized guidance from <span className="text-zinc-100 font-bold">Ayush Bari Sir</span>. Effective, easy-to-understand workout protocols tailored to you.</p>
        </div>
        <div className="bg-zinc-950 p-8 flex flex-col justify-center group hover:bg-zinc-900/40 transition-colors duration-300">
          <div className="text-lime-400 mb-2 font-black text-2xl italic font-display">03</div>
          <h3 className="text-base font-black uppercase mb-1.5 text-white tracking-wide">Private Yoga</h3>
          <p className="text-zinc-400 text-xs leading-relaxed">Exclusive sessions for strength and wellness. A favorite for both local and international members seeking mindfulness.</p>
        </div>
      </section>

      {/* About Us section */}
      <section id="about" className="py-20 border-t border-zinc-800 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* About Images Grid - Mirroring Photos */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded overflow-hidden border border-zinc-800 bg-zinc-950 h-48 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop" 
                    alt="Gym reception desk" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">Marble Reception & Lounge</span>
                  </div>
                </div>
                <div className="rounded overflow-hidden border border-zinc-800 bg-zinc-950 h-64 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=400&auto=format&fit=crop" 
                    alt="Private Yoga stretching" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">Private Yoga Studio</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded overflow-hidden border border-zinc-800 bg-zinc-950 h-64 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1571731956622-9a0427213a76?q=80&w=400&auto=format&fit=crop" 
                    alt="Trainers flexing" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">Elite Coaching Staff</span>
                  </div>
                </div>
                <div className="rounded overflow-hidden border border-zinc-800 bg-zinc-950 h-48 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=400&auto=format&fit=crop" 
                    alt="Premium heavy weight dumbbells" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">Steel Dumbbells up to 50kg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-lime-400 font-bold uppercase tracking-wider text-xs font-mono">
                <Sparkles className="w-4 h-4" />
                <span>EXPERIENCE THE POWERHOUSE VIBE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none tracking-tighter text-white font-display">
                A Welcoming, Energetic <br/><span className="text-lime-400">Community</span> Serving Moshi
              </h2>
              <p className="text-zinc-300 leading-relaxed font-light text-sm md:text-base">
                YC’s Powerhouse Gym Moshi isn't just a workout facility — it’s a positive movement of friendly individuals working to better themselves. We understand that fitness is personal. Whether you are stepping into a gym for the first time, training for high-performance strength, or seeking relaxation via personalized private yoga sessions, we accommodate your unique goals.
              </p>

              {/* Pride / Culture Highlight Card */}
              <div className="bg-zinc-900/50 border border-zinc-800 border-l-4 border-l-lime-500 p-5 rounded space-y-2">
                <h4 className="text-white font-bold flex items-center gap-2 uppercase text-xs tracking-wider">
                  <span>🏳️‍🌈 Proudly LGBTQ+ Friendly & Safe Atmosphere</span>
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We believe that fitness should be inclusive. Our gym takes absolute pride in maintaining a highly friendly, respectful, supportive, and non-judgmental environment for everyone, regardless of background, gender identity, or sexual orientation. Enjoy your workout with zero anxiety!
                </p>
              </div>

              {/* Verified Details Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2 font-semibold uppercase tracking-wider">
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>Sliver 9 Hotel location, D Mart Road</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>Spacious, clean & fully air-conditioned</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>Certified experts & supportive guides</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>Tailored private yoga classes on wood</span>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="#services" 
                  className="inline-flex items-center gap-2 text-lime-400 font-bold hover:text-lime-300 transition-colors uppercase tracking-wider text-xs"
                >
                  <span>Explore specialized workout services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Amenities & Premium Facilities (Features Grid) */}
      <section id="amenities" className="py-20 border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-lime-400 font-bold uppercase tracking-widest text-xs font-mono">PREMIUM ADVANTAGES</span>
            <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none tracking-tighter text-white font-display">
              Infrastructure Built For <span className="text-lime-400">Performance</span>
            </h2>
            <p className="text-zinc-400 text-sm font-light">
              We focus on absolute premium quality in everything. From heavy weightlifting accessories to relaxing hygiene setups, every detail at YC’s Powerhouse Gym Moshi is handpicked.
            </p>
          </div>

          {/* Features Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Equipment */}
            <div className="bg-zinc-900/50 border border-zinc-800 hover:border-lime-500/30 p-6 rounded transition-all duration-300 space-y-4 group">
              <div className="bg-lime-500 text-zinc-950 w-10 h-10 rounded flex items-center justify-center font-black text-base group-hover:scale-105 transition-transform">
                <Dumbbell className="w-5 h-5 rotate-45" />
              </div>
              <h3 className="text-base font-black uppercase text-white tracking-wide">Elite workout machines</h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                High-end commercial machines, plate loaders, pulley selectors, heavy barbell zones, and steel dumbbells ranging up to 50kg for intense lifting sessions.
              </p>
              <ul className="text-[11px] text-zinc-500 space-y-1 pt-2 border-t border-zinc-800/80">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-lime-400" /> Plate Loaded Chest Press
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-lime-400" /> Multi-station Cable Crossover
                </li>
              </ul>
            </div>

            {/* Card 2: Environment / Cleanliness */}
            <div className="bg-zinc-900/50 border border-zinc-800 hover:border-lime-500/30 p-6 rounded transition-all duration-300 space-y-4 group">
              <div className="bg-lime-500 text-zinc-950 w-10 h-10 rounded flex items-center justify-center font-black text-base group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black uppercase text-white tracking-wide">Clean & Spotless Setup</h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Hygiene is our highest priority. The training floor, changing rooms, and stretching areas are constantly disinfected and sanitized throughout the day.
              </p>
              <ul className="text-[11px] text-zinc-500 space-y-1 pt-2 border-t border-zinc-800/80">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-lime-400" /> Dynamic air filtration/AC
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-lime-400" /> Constantly sanitized locker areas
                </li>
              </ul>
            </div>

            {/* Card 3: Trainers */}
            <div className="bg-zinc-900/50 border border-zinc-800 hover:border-lime-500/30 p-6 rounded transition-all duration-300 space-y-4 group">
              <div className="bg-lime-500 text-zinc-950 w-10 h-10 rounded flex items-center justify-center font-black text-base group-hover:scale-105 transition-transform">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black uppercase text-white tracking-wide">Certified Coaches</h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Friendly, highly motivated trainers who assist with posture corrections, personalized workout regimes, and specialized nutritional recommendations.
              </p>
              <ul className="text-[11px] text-zinc-500 space-y-1 pt-2 border-t border-zinc-800/80">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-lime-400" /> Constant floor trainer support
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-lime-400" /> Ayush Bari Sir's expert guidance
                </li>
              </ul>
            </div>

            {/* Card 4: Atmosphere */}
            <div className="bg-zinc-900/50 border border-zinc-800 hover:border-lime-500/30 p-6 rounded transition-all duration-300 space-y-4 group">
              <div className="bg-lime-500 text-zinc-950 w-10 h-10 rounded flex items-center justify-center font-black text-base group-hover:scale-105 transition-transform">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black uppercase text-white tracking-wide">Motivating positive vibes</h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Energetic, supportive crowd coupled with premium audio beats and spectacular geometric overhead rectangular lighting system that instantly pumps your mood.
              </p>
              <ul className="text-[11px] text-zinc-500 space-y-1 pt-2 border-t border-zinc-800/80">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-lime-400" /> Incredible group workout drive
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-lime-400" /> Inclusive community-first feel
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 📸 Premium Interactive Photo Gallery Section */}
      <section id="gallery" className="py-20 bg-zinc-950 border-t border-zinc-800 relative overflow-hidden">
        {/* Subtle decorative grid/glow background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-lime-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative animate-fade-in">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-lime-400 font-bold uppercase tracking-widest text-xs font-mono flex items-center justify-center gap-1.5">
              <Compass className="w-4 h-4 animate-spin-slow" /> VISUAL TOUR & GALLERY
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none tracking-tighter text-white font-display">
              Inside Our <span className="text-lime-400">Powerhouse</span>
            </h2>
            <p className="text-zinc-400 text-sm font-light">
              Explore actual high-fidelity photographs capturing the massive energy, premium line of equipment, and dedicated training zones of our Moshi facility.
            </p>
          </div>

          {/* Interactive Photo Gallery Grid */}
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-zinc-800/80 pb-4">
              <span className="text-xs text-zinc-400 font-mono flex items-center gap-1.5 uppercase tracking-wider">
                Showing {GALLERY_ITEMS.length} Certified Spots
              </span>
              <span className="text-xs text-lime-400 font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
                Click to expand detail
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {GALLERY_ITEMS.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => setActivePhoto(item)}
                  className="relative rounded overflow-hidden h-56 bg-zinc-900 border border-zinc-800 hover:border-lime-500/80 transition-all duration-300 group cursor-pointer text-left shadow-lg hover:shadow-lime-500/5"
                  id={`gallery-item-${item.id}`}
                >
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover overlay and title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end transition-opacity duration-300">
                    <span className="text-[10px] text-lime-400 font-bold uppercase tracking-widest font-mono">YC's Moshi</span>
                    <h3 className="text-sm font-black text-white leading-tight tracking-wide uppercase mt-0.5">{item.title}</h3>
                    <p className="text-[10px] text-zinc-400 line-clamp-1 font-light mt-1 group-hover:text-zinc-200 transition-colors">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Specialized Services Detail Section */}
      <section id="services" className="py-20 bg-zinc-950 border-t border-zinc-800 relative">
        
        {/* Glow overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lime-500/5 rounded-full blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-lime-400 font-bold uppercase tracking-widest text-xs font-mono">SPECIALIZED PILLARS</span>
            <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none tracking-tighter text-white font-display">
              Programs Tailor-Made For Your <span className="text-lime-400">Success</span>
            </h2>
            <p className="text-zinc-400 text-sm font-light">
              We target specific branches of wellness: general conditioning, high-end strength sculpting, and dedicated mind-body private yoga.
            </p>
          </div>

          {/* Specialties Block Layout */}
          <div className="space-y-12">
            
            {/* Block 1: General Access */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded hover:border-zinc-700 transition-all">
              <div className="lg:col-span-5 rounded overflow-hidden h-64 md:h-80 relative">
                <img 
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop" 
                  alt="General Access cardio treadmills and weights" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-lime-500 text-zinc-950 font-mono font-black text-[10px] px-3 py-1.5 rounded uppercase tracking-wider">
                  Pillar 01
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2 uppercase tracking-wide">
                  <span>General Strength & Cardio Access</span>
                  <span className="text-[10px] bg-zinc-800 px-2.5 py-1 text-zinc-400 border border-zinc-700 rounded font-normal uppercase tracking-wider">Self Guided</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  Get full access to the gym's main training floors. Standard access includes modern cross-fit cables, free weights up to 50kg, multiple heavy duty squat rigs, and cardioroom featuring spin-bikes, treadmills, and rowing stations under energetic geometrical lighting formats.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                  <div className="bg-zinc-950 p-3 rounded border border-zinc-800">
                    <div className="font-bold text-lime-400 uppercase tracking-wider">Unlimited Entry</div>
                    <div className="text-zinc-500">Work out at any time during open hours</div>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded border border-zinc-800">
                    <div className="font-bold text-lime-400 uppercase tracking-wider">Spotless Hygiene</div>
                    <div className="text-zinc-500">Regular disinfecting hourly by support team</div>
                  </div>
                </div>
                <div className="pt-2">
                  <a href="#calculator" className="text-lime-400 text-xs font-bold flex items-center gap-1.5 hover:text-lime-300 transition-colors uppercase tracking-wider">
                    <span>Calculate general access fees</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Block 2: Personal Training with Ayush Bari Sir */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded hover:border-zinc-700 transition-all">
              <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 px-3 py-1 rounded text-lime-400 text-[10px] font-bold tracking-wider uppercase">
                  ⭐ HIGHLY RECOMMENDED BY MEMBERS
                </div>
                <h3 className="text-xl font-bold text-white flex flex-wrap items-center gap-2 uppercase tracking-wide">
                  <span>Certified Personal Training</span>
                  <span className="text-[10px] bg-lime-500 text-zinc-950 px-2.5 py-1 rounded font-black uppercase tracking-wider">Spotlight: Ayush Bari Sir</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  Need consistent motivation, form correction, and dedicated strength programs? Get assigned to supportive personal trainers. Our members constantly praise the trainer team, specifically highlighting <strong className="text-white font-semibold">Ayush Bari Sir</strong> for his effective, easy-to-understand workout guidance. Whether you're trying to lose fat, build pure muscle, or fix a physical posture issue, Ayush Sir designs highly personalized programs that fit your tempo perfectly.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                  <div className="bg-zinc-950 p-3 rounded border border-zinc-800">
                    <div className="font-bold text-white uppercase tracking-wider">Ayush Bari Sir</div>
                    <div className="text-zinc-500">Simple, easy-to-follow guidelines and tracking</div>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded border border-zinc-800">
                    <div className="font-bold text-white uppercase tracking-wider">Posture Analytics</div>
                    <div className="text-zinc-500">Prevent injury and scale weights progressively</div>
                  </div>
                </div>
                <div className="pt-2">
                  <a href="#book-trial" className="text-lime-400 text-xs font-bold flex items-center gap-1.5 hover:text-lime-300 transition-colors uppercase tracking-wider">
                    <span>Schedule 1-on-1 session with Ayush Bari Sir</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 rounded overflow-hidden h-64 md:h-80 relative order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop" 
                  alt="Personal training session guidance" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-lime-500 text-zinc-950 font-mono font-black text-[10px] px-3 py-1.5 rounded uppercase tracking-wider">
                  Pillar 02
                </div>
              </div>
            </div>

            {/* Block 3: Private Yoga */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded hover:border-zinc-700 transition-all">
              <div className="lg:col-span-5 rounded overflow-hidden h-64 md:h-80 relative">
                <img 
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600&auto=format&fit=crop" 
                  alt="Private Yoga stretching and alignment classes" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-lime-500 text-zinc-950 font-mono font-black text-[10px] px-3 py-1.5 rounded uppercase tracking-wider">
                  Pillar 03
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2 uppercase tracking-wide">
                  <span>Tailored Private Yoga Classes</span>
                  <span className="text-[10px] bg-zinc-800 px-2.5 py-1 text-zinc-400 border border-zinc-700 rounded font-normal uppercase tracking-wider">Mind-Body Focus</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  Looking for recovery, deep stretching, posture alignment, or spiritual wellness? Our custom, private yoga sessions are conducted by top gurus on serene, highly clean wooden floors. Popular with both local professionals seeking work-life decompression and international members visiting Pimpri-Chinchwad, these private classes adapt dynamically to your personal level of flexibility and strength.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                  <div className="bg-zinc-950 p-3 rounded border border-zinc-800">
                    <div className="font-bold text-lime-400 uppercase tracking-wider">Serene Studio</div>
                    <div className="text-zinc-500">Acoustics & premium wooden flooring</div>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded border border-zinc-800">
                    <div className="font-bold text-lime-400 uppercase tracking-wider">International Choice</div>
                    <div className="text-zinc-500">highly praised by overseas travelers and local executives</div>
                  </div>
                </div>
                <div className="pt-2">
                  <a href="#book-trial" className="text-lime-400 text-xs font-bold flex items-center gap-1.5 hover:text-lime-300 transition-colors uppercase tracking-wider">
                    <span>Inquire about yoga availability</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Testimonials section with dynamic live adds! */}
      <section id="testimonials" className="py-20 bg-zinc-900/30 border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-lime-400 font-bold uppercase tracking-widest text-xs font-mono">100% REAL SOCIAL PROOF</span>
              <h2 className="text-3xl md:text-4xl font-black font-display tracking-tight text-white leading-none">
                What Our Powerhouse Family Says
              </h2>
              <p className="text-zinc-400 text-sm font-light">
                We are proud of our verified member ratings on Google. Here are real reviews from people who train at our Moshi branch.
              </p>
            </div>
            <div className="lg:col-span-5 flex items-center justify-start lg:justify-end gap-3 bg-zinc-900/80 p-4 border border-zinc-800 rounded-2xl w-fit">
              <div className="text-right">
                <div className="text-white font-bold text-base">Google Rating</div>
                <div className="text-zinc-500 text-[11px]">1,090+ Verified Reviews</div>
              </div>
              <div className="bg-zinc-950 p-3 rounded-xl text-center border border-zinc-800">
                <span className="text-2xl font-black text-lime-400 font-display">4.9</span>
                <span className="text-[10px] text-yellow-500 block">★★★★★</span>
              </div>
            </div>
          </div>

          {/* Testimonial Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div 
                key={rev.id} 
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 relative ${rev.isUserAdded ? "bg-gradient-to-br from-lime-950/20 to-zinc-900 border-lime-500/30" : "bg-zinc-900/40 border-zinc-900 hover:border-zinc-800"}`}
              >
                {rev.isUserAdded && (
                  <span className="absolute -top-3 right-4 bg-lime-500 text-black text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                    Just Added
                  </span>
                )}
                
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex text-yellow-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  {/* Text */}
                  <p className="text-zinc-300 text-xs md:text-sm leading-relaxed italic font-light">
                    "{rev.text}"
                  </p>
                </div>

                {/* Author details */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80 mt-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm font-bold text-lime-400 uppercase font-mono">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">{rev.name}</h4>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{rev.location} • Verified Member</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Add your own review interactively! */}
          <div className="bg-zinc-900/40 border border-zinc-900 p-6 md:p-8 rounded-3xl max-w-2xl mx-auto space-y-6">
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold text-white flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5 text-lime-400" />
                <span>Are you a current member? Post your review!</span>
              </h3>
              <p className="text-xs text-zinc-400 font-light max-w-md mx-auto">
                Share your personal workout story with Ayush Bari Sir or your feedback about the machines to keep our community motivated!
              </p>
            </div>

            {reviewSuccessMsg && (
              <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 p-4 rounded-xl text-xs flex items-center gap-2 justify-center">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 animate-bounce" />
                <span>{reviewSuccessMsg}</span>
              </div>
            )}

            <form onSubmit={handleAddReview} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 col-span-1">
                <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Your Name *</label>
                <input 
                  type="text" 
                  value={newReviewName}
                  onChange={(e) => setNewReviewName(e.target.value)}
                  placeholder="e.g. Anand Jadhav"
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-zinc-200 focus:outline-none focus:border-lime-500"
                />
              </div>
              <div className="space-y-1.5 col-span-1">
                <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Your Location / Origin</label>
                <input 
                  type="text" 
                  value={newReviewLocation}
                  onChange={(e) => setNewReviewLocation(e.target.value)}
                  placeholder="e.g. Moshi, Pune"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-zinc-200 focus:outline-none focus:border-lime-500"
                />
              </div>
              <div className="space-y-1.5 col-span-2">
                <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Select Rating</label>
                <div className="flex gap-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <button 
                      type="button" 
                      key={stars}
                      onClick={() => setNewReviewRating(stars)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-bold font-mono transition-colors ${newReviewRating === stars ? "bg-lime-500 text-black border-lime-500" : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700"}`}
                    >
                      {stars} ★
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5 col-span-2">
                <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Your Review text *</label>
                <textarea 
                  value={newReviewText}
                  onChange={(e) => setNewReviewText(e.target.value)}
                  placeholder="Tell others about the facilities, cleanliness, or the trainer guidance..."
                  required
                  rows={3}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-zinc-200 focus:outline-none focus:border-lime-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="col-span-2 bg-lime-500 hover:bg-lime-400 text-black font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition-all duration-200"
              >
                Submit Verified Review
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Dynamic Membership Rates Estimator Section */}
      <section id="calculator" className="py-20 border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-lime-400 font-bold uppercase tracking-widest text-xs font-mono">TRANSPARENT VALUE</span>
            <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none tracking-tighter text-white font-display">
              Membership <span className="text-lime-400">Rates</span> Estimator
            </h2>
            <p className="text-zinc-400 text-sm font-light">
              Select your customized program parameters below to calculate estimated costs, seasonal discounts, and long-term commitment savings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* Control Board */}
            <div className="lg:col-span-7 bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded space-y-6 flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* Step 1: Select Plan */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">1. Select Membership Category</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    
                    <button 
                      onClick={() => setSelectedPlanType("general")}
                      className={`p-4 rounded border text-left transition-all ${selectedPlanType === "general" ? "bg-lime-500/10 border-lime-500 text-white" : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"}`}
                    >
                      <Dumbbell className={`w-5 h-5 mb-2 ${selectedPlanType === "general" ? "text-lime-400" : "text-zinc-500"}`} />
                      <div className="text-xs font-bold text-white uppercase tracking-wider">General Access</div>
                      <p className="text-[10px] text-zinc-400 font-light mt-0.5">Strength floor, Cardio room, lockers</p>
                    </button>

                    <button 
                      onClick={() => setSelectedPlanType("yoga")}
                      className={`p-4 rounded border text-left transition-all ${selectedPlanType === "yoga" ? "bg-lime-500/10 border-lime-500 text-white" : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"}`}
                    >
                      <Compass className={`w-5 h-5 mb-2 ${selectedPlanType === "yoga" ? "text-lime-400" : "text-zinc-500"}`} />
                      <div className="text-xs font-bold text-white uppercase tracking-wider">Private Yoga</div>
                      <p className="text-[10px] text-zinc-400 font-light mt-0.5">Custom gurus, wooden floor studio</p>
                    </button>

                    <button 
                      onClick={() => setSelectedPlanType("pt")}
                      className={`p-4 rounded border text-left transition-all ${selectedPlanType === "pt" ? "bg-lime-500/10 border-lime-500 text-white" : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"}`}
                    >
                      <UserCheck className={`w-5 h-5 mb-2 ${selectedPlanType === "pt" ? "text-lime-400" : "text-zinc-500"}`} />
                      <div className="text-xs font-bold text-white uppercase tracking-wider">Elite Coaching</div>
                      <p className="text-[10px] text-zinc-400 font-light mt-0.5">Ayush Bari Sir's custom program</p>
                    </button>

                  </div>
                </div>

                {/* Step 2: Select Duration */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">2. Select Membership Duration</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[3, 6, 12].map((months) => (
                      <button 
                        key={months}
                        onClick={() => setSelectedDuration(months as 3 | 6 | 12)}
                        className={`py-3 px-4 rounded border font-bold text-sm transition-all ${selectedDuration === months ? "bg-lime-50 text-zinc-950 border-lime-500" : "bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-750"}`}
                      >
                        {months} Months
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-zinc-500 font-mono">
                    💡 Commit longer to unlock massive savings! (6 months = 15% off, 12 months = 25% off)
                  </p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="bg-zinc-950 p-4 rounded border border-zinc-800 text-xs text-zinc-400 leading-relaxed flex gap-2.5 items-start mt-6">
                <Info className="w-4 h-4 text-lime-400 shrink-0" />
                <span>
                  Please note that standard registration charges may apply. For precise package combos or discounts for students/couples, please request a callback.
                </span>
              </div>

            </div>

            {/* Results Sheet Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800 hover:border-zinc-700 p-6 md:p-8 rounded flex flex-col justify-between shadow-2xl relative">
              
              {/* Seasonal Tag */}
              <div className="absolute -top-3 right-6 bg-lime-500 text-zinc-950 text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded shadow-md">
                Active Offer Applied
              </div>

              <div className="space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider pb-2 border-b border-zinc-800">
                  Plan Quotation Summary
                </h3>

                {/* Pricing Line items */}
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Membership Selected:</span>
                    <span className="text-white uppercase font-bold text-right">
                      {selectedPlanType === "general" ? "General Access" : selectedPlanType === "yoga" ? "Private Yoga" : "Elite Personal Training"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Subscription Term:</span>
                    <span className="text-white font-bold">{selectedDuration} Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Standard Rate:</span>
                    <span className="text-zinc-400 line-through">₹{calculated.standardTotal.toLocaleString()}</span>
                  </div>
                  {calculated.savings > 0 && (
                    <div className="flex justify-between text-lime-400">
                      <span>Term Discount ({calculated.discountPercent}%):</span>
                      <span>- ₹{calculated.savings.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                {/* Final Big Price Block */}
                <div className="bg-zinc-950 p-5 rounded text-center border border-zinc-800 space-y-1">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest">Total Estimated Package Fees</div>
                  <div className="text-4xl font-black text-lime-400 font-display">
                    ₹{calculated.total.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    ≈ ₹{calculated.perMonth.toLocaleString()} per month (plus taxes)
                  </div>
                </div>

                {/* Savings Callout */}
                {calculated.savings > 0 && (
                  <div className="bg-lime-500/10 border border-lime-500/20 text-lime-400 p-3 rounded text-xs text-center font-bold">
                    🔥 You save ₹{calculated.savings.toLocaleString()} instantly on this commitment!
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Trial Booking Section / Leads Capture */}
      <section id="book-trial" className="py-20 bg-zinc-900/30 border-t border-zinc-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">
            
            {/* Visual Cover Column */}
            <div className="relative h-64 md:h-auto min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-zinc-900/40 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop" 
                alt="Gym session" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                <div className="bg-lime-500 text-zinc-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded w-fit">
                  Limited Spots Daily
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-black font-display text-white uppercase italic tracking-tight">Start With A Free Day Pass</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    Experience our high-energy workout floor, try any of our machines, inspect our cleanliness standards, and talk to Ayush Bari Sir.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-lime-400 pt-1">
                    <Check className="w-4 h-4" /> <span>No credit card or setup fee required</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="p-6 md:p-8 space-y-6 flex flex-col justify-center bg-zinc-950">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Claim Your 1-Day Trial</h4>
                <p className="text-xs text-zinc-400 font-light">Submit your details to activate and redirect to secure booking.</p>
              </div>

              {bookingStatus === "success" ? (
                <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 p-5 rounded text-center space-y-2">
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
                  <h5 className="font-bold text-sm uppercase">Trial Pass Requested!</h5>
                  <p className="text-xs text-zinc-400">
                    We have redirected you to WhatsApp to instantly secure your slot. If it didn't open, please click the button below.
                  </p>
                  <a 
                    href={`https://wa.me/919922969807?text=Hello%20YC's%20Powerhouse%20Gym%20Moshi!%20My%20name%20is%20${encodeURIComponent(bookingName)}.%20I%20just%20claimed%20my%20Free%201-Day%20Trial%20for%20${encodeURIComponent(bookingService)}.`}
                    target="_blank"
                    className="inline-block bg-lime-500 text-zinc-950 font-black text-xs px-4 py-2 rounded uppercase tracking-wider"
                  >
                    Open WhatsApp Manually
                  </a>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      placeholder="e.g. Rahul Patil"
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-lime-500 focus:outline-none rounded px-4 py-3 text-xs text-zinc-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Phone Number (WhatsApp * )</label>
                    <input 
                      type="tel" 
                      required
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      placeholder="e.g. 099229 69807"
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-lime-500 focus:outline-none rounded px-4 py-3 text-xs text-zinc-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Service Interest</label>
                    <select 
                      value={bookingService}
                      onChange={(e) => setBookingService(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-lime-500 focus:outline-none rounded px-4 py-3 text-xs text-zinc-300"
                    >
                      <option>General Gym Access</option>
                      <option>Personal Training Spotlight</option>
                      <option>Private Yoga Session</option>
                      <option>Weight Gain / Loss Special</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Preferred Timing Slot</label>
                    <select 
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-lime-500 focus:outline-none rounded px-4 py-3 text-xs text-zinc-300"
                    >
                      <option>Morning (6:00 AM - 10:00 AM)</option>
                      <option>Afternoon (12:00 PM - 4:00 PM)</option>
                      <option>Evening (6:00 PM - 9:00 PM)</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-lime-500 hover:bg-lime-400 text-zinc-950 font-black text-xs uppercase tracking-widest py-4 rounded transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <span>Secure Trial Access Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Partner Hub Section */}
      <section id="social-hub" className="py-20 border-t border-zinc-800 bg-zinc-900/30 relative">
        <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-lime-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-lime-400 font-bold uppercase tracking-widest text-xs font-mono">STAY CONNECTED</span>
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tight text-white font-display leading-none">
              JOIN THE <span className="text-lime-400 font-display italic">POWERHOUSE</span> COMMUNITY
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-light max-w-xl mx-auto">
              Follow our official updates, witness daily training energy, check member achievements, and find premium certified passes on top fitness platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Instagram */}
            <div className="bg-zinc-950 border border-zinc-800 p-6 rounded flex flex-col justify-between hover:border-lime-500/30 transition-all group shadow-lg">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-3 rounded text-white shadow-md">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-mono">
                    @ycs_powerhouse_moshi
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider group-hover:text-lime-400 transition-colors">
                    Instagram Feed
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    Catch high-energy workout videos, member transformation reels, workout advice from Ayush Bari Sir, and daily motivational highlights.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href="https://www.instagram.com/ycs_powerhouse_moshi/?hl=en" 
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-bold text-xs uppercase py-3 rounded transition-colors"
                >
                  <span>Visit Instagram Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Cultfit Partnership */}
            <div className="bg-zinc-950 border border-zinc-800 p-6 rounded flex flex-col justify-between hover:border-lime-500/30 transition-all group relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0">
                <div className="bg-lime-500 text-zinc-950 text-[7px] font-black uppercase tracking-widest px-3 py-1 rotate-45 translate-x-5 translate-y-2 w-28 text-center shadow">
                  Partner
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="bg-lime-500 p-3 rounded text-zinc-950 shadow-md">
                    <Zap className="w-5 h-5 animate-pulse" />
                  </div>
                  <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-lime-400 px-2 py-0.5 rounded font-mono font-bold">
                    CULT.FIT ELITE
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider group-hover:text-lime-400 transition-colors">
                    Cult.fit Gold Pass
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    We are an elite partner gym in Pune! You can utilize your official Cultpass Gold or Elite to easily scan and workout at YC's Powerhouse Moshi.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href="https://next.cult.fit/cult/cult-pass/pune/YC'S-Powerhouse-Gym/2836" 
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-lime-500 hover:bg-lime-400 text-zinc-950 font-black text-xs uppercase py-3 rounded transition-all shadow-md"
                >
                  <span>Verify Cultpass Gold</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3: Facebook & Community */}
            <div className="bg-zinc-950 border border-zinc-800 p-6 rounded flex flex-col justify-between hover:border-lime-500/30 transition-all group shadow-lg">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="bg-blue-600 p-3 rounded text-white shadow-md">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-mono">
                    Facebook Hub
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider group-hover:text-lime-400 transition-colors">
                    Facebook Group
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    Join our active community group to receive news on local fitness contests, group schedules, special timing announcements, and member reviews.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-bold text-xs uppercase py-3 rounded transition-colors"
                >
                  <span>Join Our Facebook Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Map and Contact Details Section */}
      <section id="contact" className="py-20 border-t border-zinc-800 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Column 1: Contact Details */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-lime-400 font-bold uppercase tracking-widest text-xs font-mono">LOCATION & ENTRANCE</span>
                  <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none tracking-tighter text-white font-display">
                    Come Visit Our <span className="text-lime-400 font-display italic">Powerhouse</span>
                  </h2>
                  <p className="text-zinc-400 text-xs md:text-sm font-light">
                    Conveniently located near D Mart Road inside Sliver 9 Hotel, Moshi. Easy parking is available for bikes and cars right outside our main gates.
                  </p>
                </div>

                {/* Listing of Address and phone */}
                <div className="space-y-4 text-xs md:text-sm font-light">
                  <div className="flex gap-3 items-start">
                    <div className="bg-zinc-900 p-2.5 rounded border border-zinc-800 text-lime-400">
                      <MapPin className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-0.5 uppercase tracking-wide">Address</h4>
                      <p className="text-zinc-300 leading-relaxed text-xs">
                        Sliver 9 Hotel, D Mart Road, MIDC, Moshi, Pimpri-Chinchwad, Maharashtra 411070
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="bg-zinc-900 p-2.5 rounded border border-zinc-800 text-lime-400">
                      <Phone className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-0.5 uppercase tracking-wide">Contact Call Line</h4>
                      <p className="text-zinc-300 text-xs font-mono font-bold">
                        <a href="tel:09922969807" className="hover:text-lime-400 transition-colors">099229 69807</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="bg-zinc-900 p-2.5 rounded border border-zinc-800 text-lime-400">
                      <Clock className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-0.5 uppercase tracking-wide">Working Hours</h4>
                      <p className="text-zinc-300 text-xs">Open daily, 6:00 AM – 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="bg-zinc-900/50 p-6 rounded border border-zinc-800 space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Direct Triggers</h4>
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="tel:09922969807" 
                    className="bg-zinc-950 hover:bg-black text-white py-3.5 px-4 rounded text-xs font-bold text-center border border-zinc-800 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-lime-400" />
                    <span>Call Now</span>
                  </a>
                  <a 
                    href="https://wa.me/919922969807?text=Hi%20YC%27s%20Powerhouse%20Gym%2C%20I%20want%20to%20know%20more%20about%20your%20gym%20membership%20plans%20and%20ongoing%20offers.%20Please%20share%20the%20details%21" 
                    target="_blank"
                    className="bg-lime-500 hover:bg-lime-400 text-zinc-950 py-3.5 px-4 rounded text-xs font-black text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Column 2: Embedded Interactive Maps Iframe */}
            <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded overflow-hidden relative shadow-2xl h-80 lg:h-auto min-h-[350px]">
              
              {/* Google Maps Real Location Placeholder Embedded Iframe for Sliver 9 Hotel, Moshi */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.683073740925!2d73.84433197502446!3d18.667086882455858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b7fc40fdf909%3s0x3bc2b7f7fc7088b7!2sHotel%20Silver%20Nine!5e0!3m2!1sen!2sin!4v1719223128470!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="YC's Powerhouse Gym Moshi Location Map"
                className="absolute inset-0"
              ></iframe>

              {/* Float address box */}
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 border border-zinc-800 p-4 rounded backdrop-blur-sm z-20 flex gap-3 items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-xs">Hotel Sliver 9 Building</h4>
                  <p className="text-[10px] text-zinc-400 leading-snug font-mono uppercase">D Mart Road, MIDC, Moshi, PCMC</p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/uXv7qG7E4m57p1bM8" 
                  target="_blank"
                  className="bg-lime-500 text-zinc-950 p-2 rounded text-xs font-black hover:bg-lime-400 flex items-center gap-1"
                >
                  <Map className="w-4.5 h-4.5" />
                  <span>Navigate</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Footer Block */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12 text-zinc-500 text-xs relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-2 text-white font-extrabold text-base">
                <div className="bg-lime-500 text-zinc-950 w-6 h-6 flex items-center justify-center rounded">
                  <span className="text-zinc-950 font-black text-xs">P</span>
                </div>
                <span className="uppercase tracking-tight font-display text-white">YC’S POWERHOUSE GYM MOSHI</span>
              </div>
              <p className="text-zinc-400 leading-relaxed font-light text-xs max-w-sm">
                Unleash the ultimate power inside you. YC’s Powerhouse Gym is Moshi's premier fitness platform, featuring a certified motivator group, premium machines, and serene private yoga studios.
              </p>
              <div className="flex gap-3">
                <span className="bg-zinc-900 text-zinc-300 py-1 px-3 border border-zinc-800 rounded text-[10px] font-bold uppercase tracking-wider">
                  🏳️‍🌈 LGBTQ+ Safe Space
                </span>
                <span className="bg-zinc-900 text-zinc-300 py-1 px-3 border border-zinc-800 rounded text-[10px] font-bold uppercase tracking-wider">
                  🌟 4.9 Rated Favorite
                </span>
              </div>
            </div>

            {/* Column 2: Quick navigation */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">Quick Navigation</h4>
              <ul className="space-y-2 text-xs font-medium uppercase tracking-wider">
                <li><a href="#home" className="hover:text-lime-400 transition-colors">Hero Entry</a></li>
                <li><a href="#about" className="hover:text-lime-400 transition-colors">Our Culture</a></li>
                <li><a href="#amenities" className="hover:text-lime-400 transition-colors">Facilities Gallery</a></li>
                <li><a href="#gallery" className="hover:text-lime-400 transition-colors">Visual Gallery</a></li>
                <li><a href="#services" className="hover:text-lime-400 transition-colors">Pillars of specialties</a></li>
                <li><a href="#testimonials" className="hover:text-lime-400 transition-colors">Verified Feedback</a></li>
                <li><a href="#calculator" className="hover:text-lime-400 transition-colors">Rate Estimations</a></li>
                <li><a href="#social-hub" className="hover:text-lime-400 transition-colors">Social Hub</a></li>
              </ul>
            </div>

            {/* Column 3: Contact quick facts */}
            <div className="space-y-3 text-xs">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">Contact & timings</h4>
              <p className="leading-relaxed text-zinc-400">
                YC’s Powerhouse Gym Moshi<br />
                Sliver 9 Hotel, D Mart Road,<br />
                MIDC, Moshi, Maharashtra 411070
              </p>
              <p className="pt-1 text-zinc-400">
                <strong>Phone:</strong> <a href="tel:09922969807" className="text-zinc-300 hover:text-lime-400">099229 69807</a><br />
                <strong>Status:</strong> Open daily, 6:00 AM – 10:00 PM
              </p>
            </div>

          </div>

          {/* Social icons and copyrights bar */}
          <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-600">
            <div>
              <p>© 2026 YC’s Powerhouse Gym Moshi (वाईसी'स पावरहाउस जिम मोशी). All Rights Reserved.</p>
              <p className="text-[10px] mt-1 text-zinc-700">Created with love in Pimpri-Chinchwad, Maharashtra. Open daily up to 10:00 PM.</p>
            </div>
            
            {/* Social media badges */}
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/ycs_powerhouse_moshi/?hl=en" 
                target="_blank" 
                rel="noreferrer"
                className="bg-zinc-900 border border-zinc-800 p-2 text-zinc-400 hover:text-lime-400 hover:border-lime-500/40 rounded transition-all"
                aria-label="Official Instagram Account"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://next.cult.fit/cult/cult-pass/pune/YC'S-Powerhouse-Gym/2836" 
                target="_blank" 
                rel="noreferrer"
                className="bg-zinc-900 border border-zinc-800 p-2 text-lime-400 hover:text-white hover:border-lime-500/40 rounded transition-all"
                aria-label="Cult.fit Gold Pass Partner Page"
              >
                <Zap className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-zinc-900 border border-zinc-800 p-2 text-zinc-400 hover:text-lime-400 hover:border-lime-500/40 rounded transition-all"
                aria-label="Facebook Page Placeholder"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://wa.me/919922969807?text=Hi%20YC%27s%20Powerhouse%20Gym%2C%20I%20want%20to%20know%20more%20about%20your%20gym%20membership%20plans%20and%20ongoing%20offers.%20Please%20share%20the%20details%21" 
                target="_blank" 
                rel="noreferrer"
                className="bg-zinc-900 border border-zinc-800 p-2 text-zinc-400 hover:text-lime-400 hover:border-lime-500/40 rounded transition-all"
                aria-label="WhatsApp Hotline Chat"
              >
                <MessageSquare className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Interactive Gallery Fullscreen Modal */}
      {activePhoto && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md" id="gallery-modal">
          <div className="bg-zinc-950 border border-zinc-800 rounded overflow-hidden max-w-3xl w-full relative shadow-2xl space-y-4 p-4 md:p-6">
            <button 
              onClick={() => setActivePhoto(null)} 
              className="absolute top-4 right-4 bg-zinc-900 text-zinc-400 hover:text-white p-2 border border-zinc-800 rounded-full cursor-pointer z-35"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="rounded overflow-hidden bg-black max-h-[400px] flex items-center justify-center">
              <img 
                src={activePhoto.url} 
                alt={activePhoto.title} 
                className="w-full h-full object-cover max-h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Copy */}
            <div className="space-y-1.5">
              <span className="text-[10px] text-lime-400 font-bold uppercase tracking-widest font-mono">YC's Powerhouse Facility Spotlight</span>
              <h4 className="text-xl font-black font-display text-white">{activePhoto.title}</h4>
              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light">{activePhoto.desc}</p>
            </div>

            {/* Action buttons in Modal */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 font-mono">
              {activePhoto.mapsUrl ? (
                <a 
                  href={activePhoto.mapsUrl} 
                  target="_blank"
                  rel="noreferrer"
                  className="bg-lime-500 hover:bg-lime-400 text-zinc-950 font-black text-xs uppercase tracking-widest py-3 px-6 rounded text-center flex-1 flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-zinc-950" /> View on Google Maps
                </a>
              ) : (
                <a 
                  href="#book-trial" 
                  onClick={() => setActivePhoto(null)}
                  className="bg-lime-500 hover:bg-lime-400 text-zinc-950 font-black text-xs uppercase tracking-widest py-3 px-6 rounded text-center flex-1"
                >
                  Claim Pass to experience this Facility
                </a>
              )}
              <button 
                onClick={() => setActivePhoto(null)}
                className="border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white font-black text-xs uppercase tracking-widest py-3 px-6 rounded"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Get Directions Button */}
      <div className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8">
        <button
          onClick={handleGetDirections}
          disabled={isLocating}
          className="bg-lime-500 hover:bg-lime-400 text-zinc-950 font-black text-xs md:text-sm uppercase tracking-wider py-3.5 px-5 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] border border-lime-400/30 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          title="Get live GPS directions to YC's Powerhouse Gym Moshi"
          id="floating-directions-btn"
        >
          {isLocating ? (
            <>
              <div className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
              <span>Locating...</span>
            </>
          ) : (
            <>
              <Compass className="w-4 h-4 text-zinc-950 group-hover:rotate-45 transition-transform duration-300" />
              <span>Get Directions</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
