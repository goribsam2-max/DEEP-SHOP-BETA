"use client";

import { useState } from "react";
import Link from "next/link";

const steps = ["অ্যাকাউন্ট", "স্টোর", "কনফার্ম"];

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    store: "",
    category: "",
  });
  const [message, setMessage] = useState("");

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      return;
    }
    setMessage("রেজিস্ট্রেশন সম্পন্ন! অ্যাডমিন ভেরিফিকেশন প্রক্রিয়াধীন।");
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="auth-shell">
      <div className="auth-card">
        <div className="auth-progress">
          {steps.map((step, index) => (
            <span key={step} className={index <= currentStep ? "active" : ""} />
          ))}
        </div>
        <h3>সেলার রেজিস্ট্রেশন</h3>
        <p className="section-sub">৩ ধাপে সম্পূর্ণ রেজিস্ট্রেশন করুন।</p>
        <form className="form" onSubmit={(event) => event.preventDefault()}>
          {currentStep === 0 ? (
            <>
              <div>
                <label htmlFor="name">নাম</label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, name: event.target.value }))
                  }
                  placeholder="আপনার নাম লিখুন"
                />
              </div>
              <div>
                <label htmlFor="phone">ফোন নম্বর</label>
                <input
                  id="phone"
                  value={formData.phone}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, phone: event.target.value }))
                  }
                  placeholder="01XXXXXXXXX"
                />
              </div>
            </>
          ) : null}

          {currentStep === 1 ? (
            <>
              <div>
                <label htmlFor="store">স্টোরের নাম</label>
                <input
                  id="store"
                  value={formData.store}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, store: event.target.value }))
                  }
                  placeholder="স্টোরের নাম"
                />
              </div>
              <div>
                <label htmlFor="category">ক্যাটাগরি</label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, category: event.target.value }))
                  }
                >
                  <option value="">সিলেক্ট করুন</option>
                  <option value="fashion">ফ্যাশন</option>
                  <option value="grocery">গ্রোসারি</option>
                  <option value="electronics">ইলেকট্রনিক্স</option>
                </select>
              </div>
            </>
          ) : null}

          {currentStep === 2 ? (
            <div className="surface">
              <h4>কনফার্মেশন</h4>
              <p>নাম: {formData.name || "--"}</p>
              <p>ফোন: {formData.phone || "--"}</p>
              <p>স্টোর: {formData.store || "--"}</p>
              <p>ক্যাটাগরি: {formData.category || "--"}</p>
            </div>
          ) : null}
        </form>
        {message ? <p>{message}</p> : null}
        <div className="actions" style={{ marginTop: "16px" }}>
          <button className="btn ghost" type="button" onClick={handlePrev}>
            পেছনে যান
          </button>
          <button className="btn primary" type="button" onClick={handleNext}>
            {currentStep === steps.length - 1 ? "সাবমিট" : "পরবর্তী"}
          </button>
        </div>
        <p style={{ marginTop: "16px" }}>
          ইতিমধ্যে একাউন্ট আছে? <Link href="/auth/login">লগইন করুন</Link>
        </p>
      </div>
    </section>
  );
}
