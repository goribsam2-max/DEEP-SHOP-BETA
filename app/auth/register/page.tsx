"use client";

import { useState } from "react";
import { storage } from "../../../lib/storage";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    const users = storage.getUsers();
    users.push({ id: `USR-${Date.now()}`, name, phone, email, status: "Active" });
    storage.saveUsers(users);
    setMessage("রেজিস্ট্রেশন সম্পন্ন!");
  };

  return (
    <section className="section">
      <div className="container grid-2">
        <div>
          <h3>রেজিস্টার</h3>
          <p className="section-sub">আপনার অ্যাকাউন্ট তৈরি করুন।</p>
          <form className="form" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label htmlFor="name">নাম</label>
              <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="phone">ফোন</label>
              <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email">ইমেইল</label>
              <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {message ? <p>{message}</p> : null}
            <button className="btn primary" type="button" onClick={handleRegister}>
              রেজিস্টার করুন
            </button>
          </form>
        </div>
        <div className="card">
          <h4>প্রফেশনাল সেলার এক্সেস</h4>
          <p>রেজিস্ট্রেশনের পর অ্যাডমিন ভেরিফিকেশন প্রক্রিয়া শুরু হবে।</p>
        </div>
      </div>
    </section>
  );
}
