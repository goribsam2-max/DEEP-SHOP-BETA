import { platformFeatures } from "../../lib/data";

export default function FeaturesPage() {
  return (
    <section className="section">
      <div className="container">
        <h3>প্ল্যাটফর্ম ফিচারসমূহ</h3>
        <p className="section-sub">৩০+ প্রিমিয়াম ফিচারসহ সম্পূর্ণ ইকমার্স স্ট্যাক।</p>
        <div className="cards">
          {platformFeatures.map((feature) => (
            <div key={feature} className="card fade-up">
              <h4>{feature}</h4>
              <p>এটি আপনার ব্যবসাকে দ্রুত স্কেল করতে সহায়তা করবে।</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
