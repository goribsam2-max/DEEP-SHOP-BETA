import Link from "next/link";

export default function OrdersPage() {
  return (
    <section className="section">
      <div className="container grid-2">
        <div>
          <h3>অর্ডার ম্যানেজমেন্ট</h3>
          <p className="section-sub">সেলার ও কাস্টমার—উভয়ের অর্ডার ট্র্যাকিং এক জায়গায়।</p>
          <ul>
            <li>আজকের অর্ডার: ১২৫</li>
            <li>পেন্ডিং: ১৮</li>
            <li>রিটার্ন রিকোয়েস্ট: ৫</li>
          </ul>
        </div>
        <div className="card">
          <h4>অর্ডার রিপোর্ট</h4>
          <p>সাপ্তাহিক রিপোর্ট ডাউনলোড করুন।</p>
          <Link className="btn primary" href="/admin">
            রিপোর্ট দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
}
