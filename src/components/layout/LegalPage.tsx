import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

interface Section {
  title: string;
  content: string | string[];
}

interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
}

export default function LegalPage({ title, subtitle, lastUpdated, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* En-tête */}
      <div className="bg-[#2b2b2b] pt-28 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors duration-300 text-[0.875rem] font-medium mb-8"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            Retour au site
          </Link>
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white tracking-[-0.03em] leading-[1.1] mb-3">
            {title}
          </h1>
          <p className="text-white/50 text-[0.95rem]">{subtitle}</p>
          <p className="text-white/30 text-[0.8rem] mt-2 font-medium">
            Dernière mise à jour : {lastUpdated}
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-14 md:py-20">
        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-[1.15rem] font-bold text-[#2b2b2b] mb-3 tracking-[-0.01em]">
                {i + 1}. {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                <ul className="flex flex-col gap-2 pl-4">
                  {section.content.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[0.9rem] text-[#6b6b6b] leading-relaxed">
                      <span className="text-[#f97316] mt-[5px] text-[8px]">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[0.9rem] text-[#6b6b6b] leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              )}
            </section>
          ))}
        </div>

        {/* Contact légal */}
        <div className="mt-14 p-6 rounded-2xl bg-orange-50 border border-orange-100">
          <p className="text-[0.9rem] text-[#2b2b2b] font-semibold mb-1">
            Questions légales ?
          </p>
          <p className="text-[0.875rem] text-[#6b6b6b]">
            Pour toute question relative aux présentes informations légales, contactez-nous à :{" "}
            <a href="mailto:info@tftechnics.be" className="text-[#f97316] font-semibold hover:underline">
              info@tftechnics.be
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
