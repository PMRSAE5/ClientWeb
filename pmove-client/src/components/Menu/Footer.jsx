import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Section gauche : Logo et nom */}
        <div className="mb-4 md:mb-0">
          <a href="/" className="text-2xl font-bold text-white">
            MonSite
          </a>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} MonSite PMove. Tous droits réservés.
          </p>
        </div>
        
        {/* Section centrale : Navigation */}
        <div className="flex space-x-6">
          <a href="/about" className="hover:text-gray-400">À propos</a>
          <a href="/services" className="hover:text-gray-400">Services</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>
        
        {/* Section droite : Réseaux sociaux */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.494v-9.294H9.69v-3.622h3.13V8.413c0-3.1 1.894-4.787 4.659-4.787 1.325 0 2.462.1 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.308h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.676V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.374 4.482A13.949 13.949 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616v.062a4.919 4.919 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.923 4.923 0 0 0 4.598 3.417 9.868 9.868 0 0 1-6.102 2.104c-.396 0-.79-.023-1.174-.067A13.953 13.953 0 0 0 7.548 21c9.054 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.241 1.307 3.608.058 1.266.07 1.645.07 4.851 0 3.205-.012 3.585-.07 4.851-.062 1.366-.332 2.633-1.307 3.608-.975.975-2.241 1.245-3.608 1.307-1.266.058-1.645.07-4.85.07-3.205 0-3.585-.012-4.851-.07-1.366-.062-2.633-.332-3.608-1.307-.975-.975-1.245-2.241-1.307-3.608C2.175 15.585 2.163 15.205 2.163 12c0-3.205.012-3.585.07-4.851.062-1.366.332-2.633 1.307-3.608C4.515 2.495 5.781 2.225 7.147 2.163 8.413 2.105 8.793 2.163 12 2.163m0-2.163C8.735 0 8.332.013 7.053.072 5.775.132 4.508.332 3.515 1.325 2.523 2.317 2.323 3.585 2.263 4.861 2.205 6.141 2.163 6.543 2.163 12c0 5.457.042 5.859.1 7.139.06 1.276.26 2.544 1.253 3.537.993.993 2.261 1.193 3.537 1.253C8.333 23.987 8.735 24 12 24c3.266 0 3.668-.013 4.947-.072 1.276-.06 2.544-.26 3.537-1.253.993-.993 1.193-2.261 1.253-3.537.058-1.28.1-1.682.1-7.139 0-5.457-.042-5.859-.1-7.139-.06-1.276-.26-2.544-1.253-3.537C19.491.332 18.223.132 16.947.072 15.668.013 15.265 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.998 3.998 0 1 1 0-7.996 3.998 3.998 0 0 1 0 7.996zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer ;
