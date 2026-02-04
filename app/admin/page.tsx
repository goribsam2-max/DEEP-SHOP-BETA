import Link from "next/link";
import { adminModules } from "../../lib/data";

export default function AdminPage() {
  return (
    <section className="section">
      <div className="container">
        <h3>অ্যাডমিন কমান্ড সেন্টার</h3>
        <p className="section-sub">
          সেলার, কন্টেন্ট, থিম, কোড এবং পেমেন্ট কনফিগারেশন — সবকিছু এক জায়গা থেকে নিয়ন্ত্রণ করুন।
        </p>
        <div className="cards">
          {adminModules.map((module) => (
            <div key={module.title} className="card fade-up">
              <h4>{module.title}</h4>
              <p>{module.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="container surface grid-2">
          <div>
            <h3>থিম স্টুডিও</h3>
            <p>রঙ, ফন্ট এবং হোম ব্যানার রিয়েল-টাইমে আপডেট করুন।</p>
            <div className="tag-row">
              <span className="tag">লাইভ প্রিভিউ</span>
              <span className="tag">রোল ব্যাক</span>
              <span className="tag">ভার্সনিং</span>
            </div>
          </div>
          <div className="card">
            <h4>সেটিংস শর্টকাট</h4>
            <p>অ্যাডমিন প্যানেল কনফিগারেশন।</p>
            <Link className="btn primary" href="/admin/login">
              অ্যাডমিন লগইন
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
