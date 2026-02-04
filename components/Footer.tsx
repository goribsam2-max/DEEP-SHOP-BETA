"use client";

import { useEffect, useState } from "react";
import { storage, SiteSettings } from "../lib/storage";

export default function Footer() {
  const [settings, setSettings] = useState<SiteSettings>(storage.getSettings());

  useEffect(() => {
    setSettings(storage.getSettings());
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>{settings.name}</h4>
          <p>{settings.location}</p>
        </div>
        <div>
          <h4>যোগাযোগ</h4>
          <p>📞 {settings.paymentNumber}</p>
          <p>📧 support@vibegadgets.com</p>
        </div>
        <div>
          <h4>পেমেন্ট</h4>
          <p>COD চার্জ: ৳ {settings.codCharge}</p>
          <p>বিকাশ/নগদ নাম্বার: {settings.paymentNumber}</p>
        </div>
      </div>
      <small>© ২০২৪ {settings.name}. সর্বস্বত্ব সংরক্ষিত।</small>
    </footer>
  );
}
