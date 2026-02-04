export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid-2">
        <div>
          <h3>যোগাযোগ</h3>
          <p className="section-sub">সেলস, সাপোর্ট, অথবা পার্টনারশিপের জন্য যোগাযোগ করুন।</p>
          <ul>
            <li>📞 ১৬২৩৪</li>
            <li>📧 support@banglabazar.bd</li>
            <li>📍 ঢাকা, বাংলাদেশ</li>
          </ul>
        </div>
        <div className="card">
          <h4>কুইক মেসেজ</h4>
          <form className="form">
            <div>
              <label htmlFor="name">নাম</label>
              <input id="name" placeholder="আপনার নাম" />
            </div>
            <div>
              <label htmlFor="email">ইমেইল</label>
              <input id="email" placeholder="you@example.com" />
            </div>
            <button className="btn primary" type="button">
              পাঠান
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
