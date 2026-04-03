"use client";

import { useState } from "react";

function FAQItem({ question, answer }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-medium">{question}</span>
        <span className="text-primary text-xl">{open ? "−" : "+"}</span>
      </button>

      {open && <p className="mt-3 text-sm text-muted-foreground max-w-xl">{answer}</p>}
    </div>
  );
}

export default FAQItem;
