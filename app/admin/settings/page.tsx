"use client";

import { useState } from "react";
import { SiteSettings, storage } from "../../../lib/storage";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>(storage.getSettings());
  const [message, setMessage] = useState("");

  const saveSettings = () => {
    storage.saveSettings(settings);
    setMessage("সেটিংস আপডেট হয়েছে।");
  };

  return (
    <section className="section">
      <div className="container grid-2">
        <div>
          <h3>সাইট সেটিংস</h3>
          <p className="section-sub">নাম, লোকেশন, পেমেন্ট মেথড কন্ট্রোল করুন।</p>
          <form className="form" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label htmlFor="name">সাইট নাম</label>
              <input
                id="name"
                value={settings.name}
                onChange={(e) => setSettings({ ...settings, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="location">লোকেশন</label>
              <input
                id="location"
                value={settings.location}
                onChange={(e) => setSettings({ ...settings, location: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="paymentNumber">বিকাশ/নগদ নম্বর</label>
              <input
                id="paymentNumber"
                value={settings.paymentNumber}
                onChange={(e) => setSettings({ ...settings, paymentNumber: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="codCharge">COD চার্জ</label>
              <input
                id="codCharge"
                type="number"
                value={settings.codCharge}
                onChange={(e) => setSettings({ ...settings, codCharge: Number(e.target.value) })}
              />
            </div>
            <div>
              <label>পেমেন্ট মেথড</label>
              <div className="actions">
                <label>
                  <input
                    type="checkbox"
                    checked={settings.paymentMethods.cod}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        paymentMethods: { ...settings.paymentMethods, cod: e.target.checked },
                      })
                    }
                  />
                  COD
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={settings.paymentMethods.bkash}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        paymentMethods: { ...settings.paymentMethods, bkash: e.target.checked },
                      })
                    }
                  />
                  bKash
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={settings.paymentMethods.nagad}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        paymentMethods: { ...settings.paymentMethods, nagad: e.target.checked },
                      })
                    }
                  />
                  Nagad
                </label>
              </div>
            </div>
            {message ? <p>{message}</p> : null}
            <button className="btn primary" type="button" onClick={saveSettings}>
              সেভ করুন
            </button>
          </form>
        </div>
        <div className="card">
          <h4>টিপস</h4>
          <p>এই সেটিংস হোমপেজ ও ফুটারে দেখাবে।</p>
        </div>
      </div>
    </section>
  );
}
