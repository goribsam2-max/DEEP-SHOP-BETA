import Link from "next/link";

export default function AccountPage() {
  return (
    <section className="section">
      <div className="container grid-2">
        <div>
          <h3>অ্যাকাউন্ট সেটিংস</h3>
          <p className="section-sub">প্রোফাইল, পেমেন্ট, এবং সিকিউরিটি আপডেট করুন।</p>
          <ul>
            <li>প্রোফাইল: আপডেটেড</li>
            <li>মোবাইল ভেরিফিকেশন: সম্পন্ন</li>
            <li>২-স্টেপ সিকিউরিটি: চালু</li>
          </ul>
        </div>
        <div className="card">
          <h4>অ্যাকাউন্ট অ্যাকশন</h4>
          <div className="actions">
            <Link className="btn ghost" href="/auth/login">
              লগইন
            </Link>
            <Link className="btn primary" href="/auth/register">
              আপগ্রেড করুন
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
