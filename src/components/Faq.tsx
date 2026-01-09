import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "../css/Faq.css";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,

    question: "What is this blog site about?",

    answer:
      "This blog site covers a wide range of topics related to modern web development, including TypeScript, React, CSS best practices, and project deployment strategies.",
  },

  {
    id: 2,

    question: "How often is new content published?",

    answer:
      "We strive to publish new articles and tutorials twice a week, typically on Tuesdays and Fridays. Follow our GitHub repository for real-time updates!",
  },

  {
    id: 3,

    question: "Can I contribute an article?",

    answer:
      "Yes, we welcome contributions! Please check our CONTRIBUTING.md file in the root of the repository for guidelines on submitting a pull request with your content.",
  },

  {
    id: 4,

    question: "Is there a newsletter?",

    answer:
      "Currently, we do not have a separate email newsletter, but all new posts are announced via our main social media channels and are easily discoverable on the homepage.",
  },
];

// 1. Create a Sub-Component for individual items
// This allows each item to manage its own animation reference
const FAQItemComponent: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  toggleFAQ: (id: number) => void;
}> = ({ item, isOpen, toggleFAQ }) => {
  const answerRef = useRef<HTMLDivElement>(null);

  // 2. Use useEffect to trigger GSAP animation when 'isOpen' changes
  useEffect(() => {
    if (isOpen) {
      // Animate Open
      gsap.to(answerRef.current, {
        height: "auto",
        background: "#131415",
        duration: 0.5,
        ease: "power2.out",
        opacity: 1,
      });
    } else {
      // Animate Close
      gsap.to(answerRef.current, {
        height: 0,
        duration: 0.4,
        ease: "power2.in",
        opacity: 0,
      });
    }
  }, [isOpen]);

  return (
    <div className="faq-item">
      <button
        className={`faq-question ${isOpen ? "open" : ""}`}
        onClick={() => toggleFAQ(item.id)}
        aria-expanded={isOpen}
      >
        {item.question}
        <span className="faq-icon">{isOpen ? "—" : "+"}</span>
      </button>

      {/* Attach the ref here. Inline style ensures it starts hidden/visible correctly */}
      <div
        ref={answerRef}
        className="faq-answer-wrapper"
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
      >
        <div className="faq-answer-content">
          {/* Added padding wrapper so text doesn't squish during animation */}
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQComponent: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item) => (
          <FAQItemComponent
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
