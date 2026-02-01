// App.tsx veya ana layout dosyan
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import contributingPath from "../CONTRIBUTING.md"; // Yolunu kendine göre düzelt


// --- ANA SAYFA BİLEŞENİ ---
const ContributingPage: React.FC = () => {
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        fetch(contributingPath)
            .then((res) => res.text())
            .then((text) => setMarkdownContent(text))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="bg-neutral-900 min-h-screen text-gray-200 font-sans">
            <main className="pt-20 container mx-auto p-7">
                <h1 className="text-4xl md:text-5xl font-techno font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-8 mt-4 uppercase tracking-wider">
                    Katkıda Bulunma Rehberi
                </h1>
                <article className="prose prose-invert prose-lg max-w-none prose-headings:font-techno prose-headings:uppercase prose-a:text-cyan-400">
                    <ReactMarkdown>
                        {markdownContent}
                    </ReactMarkdown>
                </article>
            </main>
        </div>
    );
};

export default ContributingPage;