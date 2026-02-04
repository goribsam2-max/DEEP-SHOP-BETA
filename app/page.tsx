import Link from "next/link";
import { highlights, products, sellerTools } from "../lib/data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="fade-up">
            <span className="pill">🇧🇩 Bangladesh Ready • Premium Fashion Commerce</span>
            <h2>স্টাইলিশ, স্মার্ট, এবং দ্রুত — আপনার ব্র্যান্ডের জন্য পূর্ণাঙ্গ ইকমার্স প্ল্যাটফর্ম</h2>
            <p>
              Bangla Bazar হলো মাল্টি-সেলার মার্কেটপ্লেস যেখানে ফ্যাশন, লাইফস্টাইল, গ্রোসারি,
              এবং ব্র্যান্ডেড স্টোর এক জায়গায় পরিচালনা করা যায়।
            </p>
            <div className="actions">
              <Link className="btn primary" href="/auth/register">
                রেজিস্টার করুন
              </Link>
              <Link className="btn ghost" href="/marketplace">
                শপিং শুরু করুন
              </Link>
            </div>
            <div className="tag-row" style={{ marginTop: "20px" }}>
              <span className="tag">লাইভ ট্র্যাকিং</span>
              <span className="tag">ফাস্ট ডেলিভারি</span>
              <span className="tag">ক্যাশ অন ডেলিভারি</span>
            </div>
          </div>
          <div className="card hero-card fade-up">
            <span className="badge">আজকের ট্রেন্ডিং</span>
            <h3>Luxury Streetwear Pack</h3>
            <p>বিকাশ/নগদ/কার্ড পেমেন্ট | ফ্রি হোম ডেলিভারি</p>
            <h2>৳ ২,৪৯৯</h2>
            <ul>
              <li>৩ দিনের রিটার্ন পলিসি</li>
              <li>স্টাইলিশ লুক বুক ফ্রি</li>
              <li>লাইভ ফ্যাশন কনসাল্টিং</li>
            </ul>
            <button className="btn primary" type="button">
              এখনই কিনুন
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3>কেন Bangla Bazar?</h3>
          <p className="section-sub">একটি সম্পূর্ণ ব্র্যান্ড অপারেটিং সিস্টেম।</p>
          <div className="cards">
            {highlights.map((item) => (
              <div key={item.title} className="card fade-up">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container surface grid-2">
          <div>
            <h3>সেলারদের জন্য পূর্ণ স্ট্যাক</h3>
            <p>শপ ম্যানেজমেন্ট, প্রোমো, রিপোর্টিং এবং কাস্টমার কেয়ার এক সাথে।</p>
            <ul>
              {sellerTools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h4>সেলার অনবোর্ডিং</h4>
            <p>৩০ মিনিটে আপনার শপ লাইভ করুন, লাইভ ট্রেনিং এবং সাপোর্ট সহ।</p>
            <Link className="btn primary" href="/sellers">
              সেলার হাব
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3>ট্রেন্ডিং পণ্যসমূহ</h3>
          <p className="section-sub">স্টাইল এবং স্মার্ট কম্বো একসাথে।</p>
          <div className="cards">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="card fade-up">
                <span className="badge">{product.badge}</span>
                <h4>{product.name}</h4>
                <p>{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stat-grid">
          <div className="stat">
            <strong>৫,২০০+</strong>
            <span>ভেরিফায়েড সেলার</span>
          </div>
          <div className="stat">
            <strong>৬৪ জেলা</strong>
            <span>ডেলিভারি কভারেজ</span>
          </div>
          <div className="stat">
            <strong>২৪/৭</strong>
            <span>লাইভ সাপোর্ট</span>
          </div>
        </div>
      </section>
    </>
  );
}
