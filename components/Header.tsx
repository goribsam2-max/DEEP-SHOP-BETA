"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { storage, SiteSettings } from "../lib/storage";

export default function Header() {
  const [settings, setSettings] = useState<SiteSettings>(storage.getSettings());

  useEffect(() => {
    setSettings(storage.getSettings());
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <h1>{settings.name}</h1>
          <span>{settings.location}</span>
        </div>
        <nav className="nav">
          <Link href="/">হোম</Link>
          <Link href="/shop">শপ</Link>
          <Link href="/features">ফিচার</Link>
          <Link href="/offers">অফার</Link>
          <Link href="/orders">আমার অর্ডার</Link>
          <Link href="/admin">অ্যাডমিন</Link>
        </nav>
        <div className="nav-actions">
          <Link href="/auth/login">লগইন</Link>
          <Link className="button" href="/cart">
            কার্ট
          </Link>
        </div>
      </div>
    </header>
  );
}
