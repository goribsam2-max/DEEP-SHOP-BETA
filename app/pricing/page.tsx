import Link from "next/link";

export default function PricingPage() {
  return (
    <section className="section">
      <div className="container">
        <h3>প্রাইসিং প্ল্যান</h3>
        <p className="section-sub">স্টার্টআপ থেকে এন্টারপ্রাইজ—সব সাইজের জন্য প্ল্যান।</p>
        <div className="cards">
          <div className="card fade-up">
            <h4>স্টার্টার</h4>
            <p>৳ ১,৯৯৯/মাস</p>
            <ul>
              <li>১০০ পণ্য</li>
              <li>স্ট্যান্ডার্ড সাপোর্ট</li>
              <li>বেসিক রিপোর্ট</li>
            </ul>
            <Link className="btn primary" href="/auth/register">
              শুরু করুন
            </Link>
          </div>
          <div className="card fade-up">
            <h4>গ্রোথ</h4>
            <p>৳ ৫,৯৯৯/মাস</p>
            <ul>
              <li>৫,০০০ পণ্য</li>
              <li>প্রিমিয়াম সাপোর্ট</li>
              <li>এনালিটিক্স</li>
            </ul>
            <Link className="btn primary" href="/auth/register">
              শুরু করুন
            </Link>
          </div>
          <div className="card fade-up">
            <h4>এন্টারপ্রাইজ</h4>
            <p>কাস্টম প্রাইস</p>
            <ul>
              <li>আনলিমিটেড পণ্য</li>
              <li>ডেডিকেটেড টিম</li>
              <li>কাস্টম ইন্টিগ্রেশন</li>
            </ul>
            <Link className="btn primary" href="/contact">
              কথা বলুন
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
