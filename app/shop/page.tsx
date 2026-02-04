"use client";

import Link from "next/link";
import { products } from "../../lib/data";
import { storage } from "../../lib/storage";

export default function ShopPage() {
  const addToCart = (id: string) => {
    const product = products.find((item) => item.id === id);
    if (!product) return;
    const cart = storage.getCart();
    const existing = cart.find((item) => item.productId === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.images[0],
      });
    }
    storage.saveCart([...cart]);
  };

  return (
    <section className="section">
      <div className="container">
        <h3>Vibe Shop</h3>
        <p className="section-sub">সব গ্যাজেট এক জায়গায়।</p>
        <div className="cards">
          {products.map((product) => (
            <div key={product.id} className="card fade-up">
              <img src={product.images[0]} alt={product.name} />
              <span className="badge">{product.badge}</span>
              <h4>{product.name}</h4>
              <p>৳ {product.price}</p>
              <div className="actions">
                <Link className="btn ghost" href={`/product/${product.id}`}>
                  ডিটেইলস
                </Link>
                <button className="btn primary" type="button" onClick={() => addToCart(product.id)}>
                  কার্টে যোগ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
