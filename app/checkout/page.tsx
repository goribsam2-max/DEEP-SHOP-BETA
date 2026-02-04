"use client";

import { useEffect, useState } from "react";
import { storage, OrderData, PaymentMethod } from "../../lib/storage";

const paymentOptions: Array<{ label: string; value: PaymentMethod }> = [
  { label: "Cash on Delivery", value: "COD" },
  { label: "bKash", value: "BKASH" },
  { label: "Nagad", value: "NAGAD" },
];

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState<PaymentMethod>("COD");
  const [trxId, setTrxId] = useState("");
  const [ip, setIp] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState("");
  const settings = storage.getSettings();

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp(undefined));
  }, []);

  const handleSubmit = () => {
    const cart = storage.getCart();
    if (!cart.length) {
      setMessage("কার্ট খালি আছে।");
      return;
    }
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const order: OrderData = {
      id: `ORD-${Date.now()}`,
      items: cart,
      total,
      deliveryCharge: settings.codCharge,
      paymentMethod: payment,
      paymentNumber: settings.paymentNumber,
      trxId: payment === "COD" ? undefined : trxId,
      customerName: name,
      customerPhone: phone,
      customerAddress: address,
      status: "Pending",
      createdAt: new Date().toISOString(),
      ip,
      device: navigator.userAgent,
      deviceModel: navigator.platform,
    };
    const orders = storage.getOrders();
    orders.unshift(order);
    storage.saveOrders(orders);
    storage.saveCart([]);
    setMessage("অর্ডার সফল! আপনার অর্ডার লিস্টে দেখুন।");
  };

  return (
    <section className="section">
      <div className="container grid-2">
        <div>
          <h3>চেকআউট</h3>
          <p className="section-sub">COD চার্জ: ৳ {settings.codCharge}</p>
          <form className="form" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label htmlFor="name">নাম</label>
              <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="phone">ফোন নম্বর</label>
              <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <label htmlFor="address">ঠিকানা</label>
              <input id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
              <label htmlFor="payment">পেমেন্ট মেথড</label>
              <select id="payment" value={payment} onChange={(e) => setPayment(e.target.value as PaymentMethod)}>
                {paymentOptions
                  .filter((option) =>
                    option.value === "COD"
                      ? settings.paymentMethods.cod
                      : option.value === "BKASH"
                      ? settings.paymentMethods.bkash
                      : settings.paymentMethods.nagad
                  )
                  .map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
            </div>
            {payment !== "COD" ? (
              <div>
                <label htmlFor="trx">ট্রানজেকশন আইডি</label>
                <input id="trx" value={trxId} onChange={(e) => setTrxId(e.target.value)} />
                <p>পেমেন্ট নাম্বার: {settings.paymentNumber}</p>
              </div>
            ) : null}
            {message ? <p>{message}</p> : null}
            <button className="btn primary" type="button" onClick={handleSubmit}>
              অর্ডার কনফার্ম
            </button>
          </form>
        </div>
        <div className="card">
          <h4>পেমেন্ট ইনফো</h4>
          <p>COD চার্জ: ৳ {settings.codCharge}</p>
          <p>বিকাশ/নগদ নম্বর: {settings.paymentNumber}</p>
          <p>সম্পূর্ণ অ্যাডভান্স পেমেন্টের জন্য ট্রানজেকশন আইডি দিন।</p>
        </div>
      </div>
    </section>
  );
}
