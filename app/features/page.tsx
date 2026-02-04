import { features } from "../../lib/data";

export default function FeaturesPage() {
  return (
    <section className="section">
      <div className="container">
        <h3>৩৫+ প্রফেশনাল ফিচার</h3>
        <p className="section-sub">Vibe Gadgets এর ফুল কমার্স স্ট্যাক।</p>
        <div className="cards">
          {features.map((feature) => (
            <div key={feature} className="card fade-up">
              <h4>{feature}</h4>
              <p>ব্যবসা স্কেল করার জন্য অপ্টিমাইজড।</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
