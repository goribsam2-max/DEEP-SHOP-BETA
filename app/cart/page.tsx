export default function CartPage() {
  return (
    <section className="section">
      <div className="container grid-2">
        <div className="fade-up">
          <h3>আপনার স্টাইল কার্ট</h3>
          <p className="section-sub">পণ্য যোগ করুন এবং দ্রুত চেকআউট করুন।</p>
          <ul>
            <li>সিলেক্টেড পণ্য: ৩টি</li>
            <li>ডেলিভারি চার্জ: ৳ ৬০</li>
            <li>ডিসকাউন্ট: ৳ ১০০</li>
          </ul>
        </div>
        <div className="card fade-up">
          <h4>পেমেন্ট সামারি</h4>
          <p>মোট: ৳ ২,৯৫০</p>
          <button className="btn primary" type="button">
            চেকআউট করুন
          </button>
        </div>
      </div>
    </section>
  );
}
