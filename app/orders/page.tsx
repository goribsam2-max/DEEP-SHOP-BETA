"use client";

import { useEffect, useState } from "react";
import { OrderData, storage } from "../../lib/storage";

export default function OrdersPage() {
  const [orders, setOrders] = useState<OrderData[]>([]);

  useEffect(() => {
    setOrders(storage.getOrders());
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h3>আমার অর্ডার</h3>
        <p className="section-sub">আপনার অর্ডার স্ট্যাটাস দেখুন।</p>
        <div className="cards">
          {orders.map((order) => (
            <div key={order.id} className="card fade-up">
              <h4>{order.id}</h4>
              <p>স্ট্যাটাস: {order.status}</p>
              <p>মোট: ৳ {order.total + order.deliveryCharge}</p>
              <p>পেমেন্ট: {order.paymentMethod}</p>
              {order.trxId ? <p>ট্রানজেকশন আইডি: {order.trxId}</p> : null}
              <p>ডেলিভারি ঠিকানা: {order.customerAddress}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
