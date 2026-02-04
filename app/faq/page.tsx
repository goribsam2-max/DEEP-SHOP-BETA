export default function FaqPage() {
  return (
    <section className="section">
      <div className="container">
        <h3>প্রশ্ন ও উত্তর</h3>
        <p className="section-sub">প্রায় জিজ্ঞাসিত প্রশ্নগুলোর উত্তর এখানে আছে।</p>
        <div className="cards">
          <div className="card fade-up">
            <h4>কিভাবে সেলার রেজিস্ট্রেশন করবো?</h4>
            <p>রেজিস্টার পেজে গিয়ে ৩ ধাপে ফর্ম পূরণ করুন।</p>
          </div>
          <div className="card fade-up">
            <h4>পেমেন্ট সেটআপ কিভাবে?</h4>
            <p>অ্যাডমিন প্যানেলে পেমেন্ট গেটওয়ে অপশন রয়েছে।</p>
          </div>
          <div className="card fade-up">
            <h4>রিটার্ন পলিসি কী?</h4>
            <p>প্রোডাক্ট ডেলিভারির ৩ দিনের মধ্যে রিটার্ন করা যাবে।</p>
          </div>
        </div>
      </div>
    </section>
  );
}
