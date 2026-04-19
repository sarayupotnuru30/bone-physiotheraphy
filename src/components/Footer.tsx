// import { Link } from "react-router-dom";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { services } from "@/data/services";
// import logo from "@/assets/logo.png";

// export function Footer() {
//   return (
//     <footer className="border-t border-border bg-medical-light">
//       <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
//         <div className="grid gap-10 lg:grid-cols-4">
//           <div>
//             <Link to="/" className="flex items-center" aria-label="Bone Physiotherapy Clinic">
//               <img src={logo} alt="Bone Physiotherapy Clinic logo" className="h-24 w-auto" />
//             </Link>
//             <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
//               Restoring movement, relieving pain, and helping you live better with expert physiotherapy and orthopaedic care.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-heading text-sm font-semibold text-foreground">Quick Links</h4>
//             <ul className="mt-4 space-y-2 text-sm">
//               <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
//               <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
//               <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
//               <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-heading text-sm font-semibold text-foreground">Featured Services</h4>
//             <ul className="mt-4 space-y-2 text-sm">
//               {services.slice(0, 5).map((s) => (
//                 <li key={s.slug}>
//                   <Link to={`/services/${s.slug}`} className="text-muted-foreground hover:text-primary">
//                     {s.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-heading text-sm font-semibold text-foreground">Contact</h4>
//             <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
//               <li className="flex items-start gap-2">
//                 <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
//                 <span>Beside Lucid Diagnostics, Plot No: 26-113, Balram Nagar, Safilguda, Secunderabad – 500047</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
//                 <a href="tel:+919390370782" className="hover:text-primary">+91 93903 70782</a>
//               </li>
//               <li className="flex items-start gap-2">
//                 <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
//                 <a href="mailto:bonephysiotherapy@gmail.com" className="hover:text-primary break-all">bonephysiotherapy@gmail.com</a>
//               </li>
//               <li className="pt-1 text-xs">Mon – Sat: 9:30 AM – 8:30 PM</li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
//           © {new Date().getFullYear()} Bone Physiotherapy. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }











import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-medical-light">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center" aria-label="Bone Physiotherapy Clinic">
              <img src={logo} alt="Bone Physiotherapy Clinic logo" className="h-24 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Restoring movement, relieving pain, and helping you live better with expert physiotherapy and orthopaedic care.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">Featured Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-muted-foreground hover:text-primary">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Beside Lucid Diagnostics, Plot No: 26-113, Balram Nagar, Safilguda, Secunderabad – 500047</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+919390370782" className="hover:text-primary">+91 93903 70782</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:bonephysiotherapy@gmail.com" className="hover:text-primary break-all">bonephysiotherapy@gmail.com</a>
              </li>
              <li className="pt-1 text-xs">Mon – Sat: 9:30 AM – 8:30 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col items-center gap-4 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Bone Physiotherapy. All rights reserved.</p>
          
          <div className="flex justify-center items-center gap-1">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline font-medium"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}