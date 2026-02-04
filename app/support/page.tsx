import { supportChannels } from "../../lib/data";

export default function SupportPage() {
  return (
    <section className="section">
      <div className="container">
        <h3>সাপোর্ট ও হেল্প সেন্টার</h3>
        <p className="section-sub">বাংলাদেশি সেলার ও কাস্টমারদের জন্য ২৪/৭ সহায়তা।</p>
        <div className="cards">
          {supportChannels.map((channel) => (
            <div key={channel.title} className="card fade-up">
              <h4>{channel.title}</h4>
              <p>{channel.detail}</p>
            </div>
          ))}
        </div>
        <div className="section">
          <div className="container surface grid-2">
            <div>
              <h3>লাইভ টিকিট করুন</h3>
              <p>আপনার সমস্যা দ্রুত সমাধানের জন্য টিকিট সাবমিট করুন।</p>
            </div>
            <form className="form">
              <div>
                <label htmlFor="subject">বিষয়</label>
                <input id="subject" placeholder="অর্ডার বা পেমেন্ট সমস্যা" />
              </div>
              <div>
                <label htmlFor="details">বিবরণ</label>
                <textarea id="details" rows={4} placeholder="আপনার বিস্তারিত লিখুন" />
              </div>
              <button className="btn primary" type="button">
                টিকিট সাবমিট
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
