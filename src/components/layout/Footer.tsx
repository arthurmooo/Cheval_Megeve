import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-paper border-t border-border py-[20px] px-[40px] min-h-[100px] flex items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 text-[11px] text-muted">
        
        <div className="max-w-[300px] leading-[1.4] text-center lg:text-left">
          Promotion du <strong className="font-semibold text-ink">Cheval de Megève</strong> et du <strong className="font-semibold text-ink">Mulet des Alpes</strong>. Association de filière en région Auvergne-Rhône-Alpes.
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-[30px]">
          <span className="uppercase tracking-[1px]">En partenariat avec :</span>
          <div className="flex gap-4">
            <img 
              src="https://picsum.photos/seed/region-aura-logo/120/60" 
              alt="Logo Région AURA" 
              className="h-[35px] opacity-70 grayscale hover:grayscale-0 transition-all" 
              referrerPolicy="no-referrer" 
            />
            <img 
              src="https://picsum.photos/seed/megeve-logo/120/60" 
              alt="Logo Megève" 
              className="h-[35px] opacity-70 grayscale hover:grayscale-0 transition-all" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>

        <div className="flex items-center gap-2 uppercase tracking-[1px] text-center">
          <span>&copy; {new Date().getFullYear()} CMMM</span>
          <span className="opacity-50">-</span>
          <Link to="/mentions-legales" className="hover:text-ink transition-colors">Mentions Légales</Link>
        </div>

      </div>
    </footer>
  );
}
