"use client";

import { useState } from "react";

function FAQItem({ question, answer, last }: { question: string; answer: string; last?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`py-5 ${!last ? "border-b border-[#f0b6c8]" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className="font-semibold text-[15px] text-gray-900">{question}</span>
        <span className="text-[#e8457c] text-2xl leading-none flex items-center justify-center w-6 h-6 rounded-full border border-[#e8457c] group-hover:bg-[#e8457c] group-hover:text-white transition-colors flex-shrink-0 ml-4">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && <p className="mt-2 text-[13px] text-gray-500 leading-relaxed">{answer}</p>}
    </div>
  );
}

export default FAQItem;
