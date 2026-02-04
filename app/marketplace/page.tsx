import Link from "next/link";
import { products } from "../../lib/data";

export default function MarketplacePage() {
  return (
    <section className="section">
      <div className="container">
        <h3>স্টাইলিশ মার্কেটপ্লেস</h3>
        <p className="section-sub">ফ্যাশন, গ্রোসারি, এবং গ্যাজেট — সবকিছু এক জায়গায়।</p>
        <div className="cards">
          {products.map((product) => (
            <div key={product.id} className="card fade-up">
              <span className="badge">{product.badge}</span>
              <h4>{product.name}</h4>
              <p>{product.price}</p>
              <div className="actions">
                <Link className="btn ghost" href={`/product/${product.id}`}>
                  বিস্তারিত দেখুন
                </Link>
                <button className="btn primary" type="button">
                  কার্টে যোগ করুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
