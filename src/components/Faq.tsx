import { useRef, useState } from "react";
import gsap from "gsap";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is the purpose of this platform?",
    answer:
      "This plotform is mine(Esad Abdullah KOSEDAG) personal and community website for developers around everywhere.",
  },
  {
    question: "How to contribure?",
    answer:
      "You can check CONTRIBUTE.md file on website.",
  },
  {
    question: "Can i share my projects?",
    answer:
      "Yes you can share your projects. You can share articles, researches, videos and cases via website by following the rules in CONTRIBUTE.md file.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const toggleFaq = (index: number) => {
    const content = contentRefs.current[index];
    if (!content) return;

    // Aynı elementteki eski animasyonları durdur
    gsap.killTweensOf(content);

    if (activeIndex === index) {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
      setActiveIndex(null);
    } else {
      if (activeIndex !== null) {
        const prev = contentRefs.current[activeIndex];
        if (prev) {
          gsap.killTweensOf(prev);
          gsap.to(prev, {
            height: 0,
            opacity: 0,
            duration: 0.35,
            ease: "power2.inOut",
          });
        }
      }

      gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
      );

      setActiveIndex(index);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        <h2
          className="text-center text-4xl font-semibold mb-8
                       bg-gradient-to-r from-green-400 to-cyan-400
                       bg-clip-text text-transparent"
        >
          Sık Sorulan Sorular
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10
                         bg-white/5 backdrop-blur-md"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between"
              >
                <span className="text-lg text-gray-100 font-medium">
                  {faq.question}
                </span>

                <span
                  className={`text-green-400 text-2xl transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                ref={(el) => {
                  if (el) contentRefs.current[index] = el;
                }}
                className="h-0 overflow-hidden"
              >
                <p className="px-6 pb-5 text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
