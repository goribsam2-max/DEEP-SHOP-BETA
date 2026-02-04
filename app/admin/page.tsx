"use client";

import Link from "next/link";
import { storage, SiteSettings } from "../../lib/storage";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [settings, setSettings] = useState<SiteSettings>(storage.getSettings());

  useEffect(() => {
    setSettings(storage.getSettings());
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h3>অ্যাডমিন ড্যাশবোর্ড</h3>
        <p className="section-sub">সাইট কন্ট্রোল, অর্ডার, ইউজার এবং নোটিফিকেশন।</p>
        <div className="admin-nav">
          <Link href="/admin/orders">অর্ডার</Link>
          <Link href="/admin/users">ইউজার</Link>
          <Link href="/admin/notifications">নোটিফিকেশন</Link>
          <Link href="/admin/settings">সেটিংস</Link>
        </div>

        <div className="section">
          <div className="cards">
            <div className="card">
              <h4>সাইট নাম</h4>
              <p>{settings.name}</p>
            </div>
            <div className="card">
              <h4>লোকেশন</h4>
              <p>{settings.location}</p>
            </div>
            <div className="card">
              <h4>COD চার্জ</h4>
              <p>৳ {settings.codCharge}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
