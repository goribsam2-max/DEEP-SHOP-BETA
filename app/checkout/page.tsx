import Link from "next/link";

export default function CheckoutPage() {
  return (
    <section className="section">
      <div className="container grid-2">
        <div>
          <h3>চেকআউট</h3>
          <p className="section-sub">ডেলিভারি ঠিকানা এবং পেমেন্ট মেথড নির্বাচন করুন।</p>
          <form className="form">
            <div>
              <label htmlFor="address">ডেলিভারি ঠিকানা</label>
              <input id="address" placeholder="ঢাকা, বাংলাদেশ" />
            </div>
            <div>
              <label htmlFor="method">পেমেন্ট মেথড</label>
              <select id="method">
                <option>বিকাশ</option>
                <option>নগদ</option>
                <option>কার্ড</option>
              </select>
            </div>
          </form>
        </div>
        <div className="card">
          <h4>অর্ডার সামারি</h4>
          <p>মোট: ৳ ৩,৪৫০</p>
          <Link className="btn primary" href="/tracking">
            অর্ডার কনফার্ম
          </Link>
        </div>
      </div>
    </section>
  );
}
