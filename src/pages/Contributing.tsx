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
        
        <div className="bg-[#070F2B] min-h-screen text-gray-200 font-sans">
            <style>
@import url('https://fonts.googleapis.com/css2?family=Asimovian&family=Genos:ital,wght@0,300;1,300&display=swap');
            </style>
            <main className="pt-20 container mx-auto p-7">
                <h1 className="text-4xl md:text-5xl font-[Asimovian] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-8 mt-4 uppercase tracking-wider">
                    Guideline to Contribute
                </h1>
                <div className="border-4 border-solid border-cyan-900 border-l-cyan-500 p-20 rounded-xl">
                    <article className="prose prose-invert prose-lg max-w-none prose-headings:font-[Genos] prose-text:font-[Genos] prose-headings:uppercase prose-a:text-cyan-400">
                        <ReactMarkdown>
                            {markdownContent}
                        </ReactMarkdown>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default ContributingPage;