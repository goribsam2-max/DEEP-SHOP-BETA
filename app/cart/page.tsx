"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OrderItem, storage } from "../../lib/storage";

export default function CartPage() {
  const [items, setItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    setItems(storage.getCart());
  }, []);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="section">
      <div className="container grid-2">
        <div>
          <h3>আপনার কার্ট</h3>
          <p className="section-sub">সিলেক্টেড আইটেম: {items.length}</p>
          {items.map((item) => (
            <div key={item.productId} className="card" style={{ marginBottom: "12px" }}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>৳ {item.price}</p>
              <p>পরিমাণ: {item.quantity}</p>
            </div>
          ))}
        </div>
        <div className="card">
          <h4>পেমেন্ট সামারি</h4>
          <p>সাবটোটাল: ৳ {total}</p>
          <Link className="btn primary" href="/checkout">
            চেকআউট
          </Link>
        </div>
      </div>
    </section>
  );
}
