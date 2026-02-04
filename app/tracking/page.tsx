export default function TrackingPage() {
  return (
    <section className="section">
      <div className="container grid-2">
        <div>
          <h3>অর্ডার ট্র্যাকিং</h3>
          <p className="section-sub">রিয়েল-টাইম ডেলিভারি স্ট্যাটাস।</p>
          <ul>
            <li>স্ট্যাটাস: প্যাকেজিং সম্পন্ন</li>
            <li>হাব: ঢাকা সেন্ট্রাল</li>
            <li>ডেলিভারি: ২৪ ঘণ্টার মধ্যে</li>
          </ul>
        </div>
        <div className="card">
          <h4>ডেলিভারি আপডেট</h4>
          <p>এসএমএস ও ইন-অ্যাপ নোটিফিকেশন চালু আছে।</p>
        </div>
      </div>
    </section>
  );
}
