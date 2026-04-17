import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export function LandingPage() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="w-full flex-grow flex flex-col bg-paper">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[320px] flex flex-col items-center justify-center text-center text-white border-b border-border">
        {/* Background Overlay & Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 z-10" />
          <img
            src={`${baseUrl}images/presentation-officielle.jpg`}
            alt="Présentation officielle du Cheval de Megève et du Mulet des Alpes"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 px-[40px] max-w-4xl mx-auto flex flex-col items-center">
          <motion.img
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src={`${baseUrl}images/logo-cmma.jpg`}
            alt="Logo CMMA"
            className="h-[84px] w-[84px] rounded-full border border-white/40 shadow-xl object-cover mb-[18px]"
          />
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-[36px] md:text-[48px] italic font-normal mb-[12px] text-balance"
          >
            L'Excellence équine au sommet des Alpes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-[14px] md:text-[16px] tracking-[2px] uppercase opacity-90"
          >
            L'alliance du Prestige et de la Performance
          </motion.p>
        </div>
      </section>

      {/* 2. INSTITUTIONAL REASSURANCE */}
      <section className="border-b border-border py-6 px-[40px] bg-paper">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <ShieldCheck className="w-5 h-5 text-gold" />
          <span className="font-sans text-[12px] tracking-[1px] uppercase font-semibold text-ink">
            Label Officiel de la Filière
          </span>
          <span className="hidden md:inline text-border font-light">|</span>
          <span className="font-sans text-[13px] text-muted">
            Garantie de traçabilité, de sélection et d'authenticité par la Région
          </span>
        </div>
      </section>

      {/* 3. DOUBLE BLOCK ENTRANCE - Grid Layout */}
      <section className="flex-grow flex flex-col items-center w-full bg-paper">
        <div className="w-full flex-grow grid grid-cols-1 lg:grid-cols-2 border-b border-border">
          
          {/* Bloc A: Cheval de Megève */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:border-r border-border border-b lg:border-b-0 group"
          >
            <div className="h-[280px] lg:h-[320px] border-b border-border overflow-hidden">
              <img 
                src={`${baseUrl}images/cheval-megeve.jpg`}
                alt="Cheval de Megève" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="p-[40px] flex flex-col justify-center items-center lg:items-start text-center lg:text-left flex-grow bg-paper relative">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-gold mb-[8px]">
                Patrimoine & Prestige
              </span>
              <h2 className="font-serif text-[32px] mb-[12px] text-ink">Le Cheval de Megève</h2>
              <p className="font-sans text-[14px] leading-[1.6] text-muted mb-[24px] max-w-[400px]">
                Le joyau de nos montagnes. Une race d'exception alliant tradition séculaire, éclat du modèle et puissance tranquille pour l'attelage de prestige.
              </p>
              <Link to="/labels" className="inline-block px-[28px] py-[12px] border border-ink text-ink text-[12px] font-semibold uppercase tracking-[1px] hover:bg-ink hover:text-white transition-colors w-fit">
                Découvrir la race
              </Link>
            </div>
          </motion.div>

          {/* Bloc B: Mulet des Alpes */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col group"
          >
            <div className="h-[280px] lg:h-[320px] border-b border-border overflow-hidden">
              <img 
                src={`${baseUrl}images/activite-famille.jpg`}
                alt="Cheval de trait en activité avec une famille à Megève" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="p-[40px] flex flex-col justify-center items-center lg:items-start text-center lg:text-left flex-grow bg-paper relative">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-gold mb-[8px]">
                Transition Écologique
              </span>
              <h2 className="font-serif text-[32px] mb-[12px] text-ink">Le Mulet des Alpes</h2>
              <p className="font-sans text-[14px] leading-[1.6] text-muted mb-[24px] max-w-[400px]">
                Le champion de la polyvalence durable. Une force de travail décarbonée idéale pour le débardage, la randonnée et l'entretien des espaces sensibles.
              </p>
              <Link to="/services" className="inline-block px-[28px] py-[12px] border border-ink text-ink text-[12px] font-semibold uppercase tracking-[1px] hover:bg-ink hover:text-white transition-colors w-fit">
                Usages & Services
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
