"use client";

import { useState } from "react";

export default function LoginPage() {
  const [message, setMessage] = useState("");

  return (
    <section className="section">
      <div className="container grid-2">
        <div>
          <h3>লগইন</h3>
          <p className="section-sub">আপনার অ্যাকাউন্টে লগইন করুন।</p>
          <form className="form" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label htmlFor="email">ইমেইল</label>
              <input id="email" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="password">পাসওয়ার্ড</label>
              <input id="password" type="password" />
            </div>
            {message ? <p>{message}</p> : null}
            <button className="btn primary" type="button" onClick={() => setMessage("লগইন সফল")}
            >
              লগইন
            </button>
          </form>
        </div>
        <div className="card">
          <h4>নতুন ইউজার?</h4>
          <p>৩ ধাপে রেজিস্টার করুন।</p>
          <a className="btn ghost" href="/auth/register">রেজিস্টার</a>
        </div>
      </div>
    </section>
  );
}
