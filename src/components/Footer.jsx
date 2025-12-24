import React from 'react'

const Footer = () => {
  return (
    
      <footer className="bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-4 py-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-3">Ecomm</h4>
              <div className="text-xs space-y-2">
                <p className="font-semibold">Contact Us</p>
                <p>Whatsapp: +1 202-918-2132</p>
                <p>Call Us: +1 202-918-2132</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-sm mb-2">Most Popular Categories</h5>
              <ul className="text-xs space-y-1">
                <li>Staples</li>
                <li>Beverages</li>
                <li>Personal Care</li>
                <li>Home Care</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-sm mb-2">Customer Services</h5>
              <ul className="text-xs space-y-1">
                <li>About Us</li>
                <li>Terms & Conditions</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-sm mb-2">Download App</h5>
              <div className="flex gap-2 flex-wrap">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-8" alt="App Store" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-8" alt="Google Play" />
              </div>
            </div>
          </div>
          <div className="text-center text-xs mt-6 pt-4 border-t border-gray-600">
            © 2022 All rights reserved. Ecomm Ltd.
          </div>
        </div>
      </footer>
  )
}

export default Footer
