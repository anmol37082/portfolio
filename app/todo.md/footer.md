Footer Section (Advanced & Professional)

The footer is the final touch of your portfolio — it gives navigation, social proof, and contact info in one place. In an advanced MERN stack portfolio, the footer can also include smooth scroll, social links, and a back-to-top button.

🔹 Key Elements of Footer

Quick Links / Navigation

Home | About | Skills | Projects | Experience | Contact

Use smooth scroll when clicked

Social Media Icons

GitHub, LinkedIn, Email, Twitter/X, Instagram

Add hover animations and clickable links

Contact Info (Optional)

Email and phone for direct contact

Copyright & Disclaimer

Example:

© 2025 Anmol Singh. All rights reserved.

Back to Top Button

Smooth scrolls to top of the page

Use subtle animation on hover

🔹 React + Tailwind Example
<footer className="bg-gray-900 text-white py-6 relative">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

    {/* Quick Links */}
    <div className="mb-4 md:mb-0">
      <a href="#home" className="mx-2 hover:text-cyan-400">Home</a>
      <a href="#about" className="mx-2 hover:text-cyan-400">About</a>
      <a href="#projects" className="mx-2 hover:text-cyan-400">Projects</a>
      <a href="#contact" className="mx-2 hover:text-cyan-400">Contact</a>
    </div>

    {/* Social Icons */}
    <div className="flex mb-4 md:mb-0">
      <a href="https://github.com/anmol37082" className="mx-2 hover:text-cyan-400">
        <i className="fab fa-github fa-lg"></i>
      </a>
      <a href="https://linkedin.com" className="mx-2 hover:text-cyan-400">
        <i className="fab fa-linkedin fa-lg"></i>
      </a>
      <a href="mailto:singanmol714@gmail.com" className="mx-2 hover:text-cyan-400">
        <i className="fas fa-envelope fa-lg"></i>
      </a>
    </div>

    {/* Copyright */}
    <p className="text-sm">© 2025 Anmol Singh. All rights reserved.</p>
  </div>

  {/* Back to Top */}
  <a href="#home" className="absolute bottom-4 right-4 p-2 bg-cyan-500 rounded-full hover:bg-cyan-400 transition">
    <i className="fas fa-arrow-up text-white"></i>
  </a>
</footer>

🔹 Design Tips

Keep dark & minimal to contrast main content

Add hover effects on icons and links

Make it responsive (stack vertically on mobile)

Include smooth scroll for Back to Top button