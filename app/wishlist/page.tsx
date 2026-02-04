import Link from "next/link";
import { products } from "../../lib/data";

export default function WishlistPage() {
  return (
    <section className="section">
      <div className="container">
        <h3>উইশলিস্ট</h3>
        <p className="section-sub">আপনার পছন্দের স্টাইলগুলো সেভ করে রাখুন।</p>
        <div className="cards">
          {products.map((product) => (
            <div key={product.id} className="card fade-up">
              <span className="badge">{product.badge}</span>
              <h4>{product.name}</h4>
              <p>{product.price}</p>
              <Link className="btn ghost" href={`/product/${product.id}`}>
                শপিং করুন
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
