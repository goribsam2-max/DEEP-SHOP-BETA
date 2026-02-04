"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { categories, products } from "../lib/data";
import { storage } from "../lib/storage";

export default function HomePage() {
  const [broadcasts, setBroadcasts] = useState<Array<{ id: string; title: string; image: string }>>([]);

  useEffect(() => {
    setBroadcasts(storage.getBroadcasts());
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="fade-up">
            <span className="pill">স্টাইলিশ • অ্যানিমেটেড • স্মার্ট শপিং</span>
            <h2>Vibe Gadgets — আপনার জন্য প্রিমিয়াম গ্যাজেটস মার্কেটপ্লেস</h2>
            <p>
              স্মার্টফোন থেকে স্মার্টওয়াচ, সবকিছুর জন্য নির্ভরযোগ্য এবং দ্রুত শপিং অভিজ্ঞতা।
            </p>
            <div className="actions">
              <Link className="btn primary" href="/shop">
                শপিং শুরু করুন
              </Link>
              <Link className="btn ghost" href="/features">
                সব ফিচার
              </Link>
            </div>
          </div>
          <div className="card fade-up">
            <span className="badge">আজকের অফার</span>
            <h3>Vibe Pro Bundle</h3>
            <p>বিকাশ/নগদ/ক্যাশ অন ডেলিভারি</p>
            <h2>৳ ১২,৯৯০</h2>
            <button className="btn primary" type="button">
              এখনই কিনুন
            </button>
          </div>
        </div>
      </section>

      {broadcasts.length ? (
        <section className="section">
          <div className="container">
            <h3>ব্রডকাস্ট নোটিফিকেশন</h3>
            <div className="cards">
              {broadcasts.map((item) => (
                <div key={item.id} className="notification-banner fade-up">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>অ্যাডমিন থেকে সর্বশেষ আপডেট।</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <h3>ক্যাটাগরি</h3>
          <p className="section-sub">আপনার পছন্দের ক্যাটাগরি বেছে নিন।</p>
          <div className="cards">
            {categories.map((cat) => (
              <div key={cat} className="card fade-up">
                <h4>{cat}</h4>
                <p>এক্সক্লুসিভ ডিল এবং নতুন কালেকশন।</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3>ফিচার্ড প্রোডাক্ট</h3>
          <div className="cards">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="card fade-up">
                <span className="badge">{product.badge}</span>
                <img src={product.images[0]} alt={product.name} />
                <h4>{product.name}</h4>
                <p>৳ {product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
