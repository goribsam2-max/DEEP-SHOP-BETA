"use client";

import { useEffect, useState } from "react";
import { OrderData, storage } from "../../../lib/storage";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<OrderData[]>([]);

  useEffect(() => {
    setOrders(storage.getOrders());
  }, []);

  const updateStatus = (id: string, status: OrderData["status"]) => {
    const updated = orders.map((order) => (order.id === id ? { ...order, status } : order));
    setOrders(updated);
    storage.saveOrders(updated);
  };

  return (
    <section className="section">
      <div className="container">
        <h3>অর্ডার ম্যানেজমেন্ট</h3>
        <div className="cards">
          {orders.map((order) => (
            <div key={order.id} className="card">
              <h4>{order.id}</h4>
              <p>নাম: {order.customerName}</p>
              <p>ফোন: {order.customerPhone}</p>
              <p>ঠিকানা: {order.customerAddress}</p>
              <p>পেমেন্ট: {order.paymentMethod}</p>
              {order.trxId ? <p>ট্রানজেকশন আইডি: {order.trxId}</p> : null}
              <p>IP: {order.ip ?? "N/A"}</p>
              <p>ডিভাইস: {order.device}</p>
              <p>মডেল: {order.deviceModel}</p>
              <div className="actions">
                {(["Pending", "Processing", "Shipped", "Delivered"] as const).map((status) => (
                  <button
                    key={status}
                    className="btn ghost"
                    type="button"
                    onClick={() => updateStatus(order.id, status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
