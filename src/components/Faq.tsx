import React, { useState } from 'react';
import '../css/Faq.css';

// Define the structure for an individual FAQ item
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Sample data for the FAQ section
const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is this blog site about?",
    answer: "This blog site covers a wide range of topics related to modern web development, including TypeScript, React, CSS best practices, and project deployment strategies."
  },
  {
    id: 2,
    question: "How often is new content published?",
    answer: "We strive to publish new articles and tutorials twice a week, typically on Tuesdays and Fridays. Follow our GitHub repository for real-time updates!"
  },
  {
    id: 3,
    question: "Can I contribute an article?",
    answer: "Yes, we welcome contributions! Please check our CONTRIBUTING.md file in the root of the repository for guidelines on submitting a pull request with your content."
  },
  {
    id: 4,
    question: "Is there a newsletter?",
    answer: "Currently, we do not have a separate email newsletter, but all new posts are announced via our main social media channels and are easily discoverable on the homepage."
  },
];

const FAQComponent: React.FC = () => {
  // State to track which item is open. 
  // 'null' means no item is open.
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    // If the currently open item is clicked, close it. Otherwise, open the new one.
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item) => (
          <div key={item.id} className="faq-item">
            {/* Question (the clickable accordion header) */}
            <button 
              className={`faq-question ${openId === item.id ? 'open' : ''}`}
              onClick={() => toggleFAQ(item.id)}
              aria-expanded={openId === item.id}
              aria-controls={`faq-answer-${item.id}`}
            >
              {item.question}
              {/* Simple icon to indicate open/close state */}
              <span className="faq-icon">{openId === item.id ? '—' : '+'}</span>
            </button>
            
            {/* Answer (the collapsible content) */}
            <div 
              id={`faq-answer-${item.id}`}
              className={`faq-answer-wrapper ${openId === item.id ? 'open' : ''}`}
            >
              <p className="faq-answer-content">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;