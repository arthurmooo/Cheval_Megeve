import { Link } from "react-router-dom";

export function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="bg-paper border-t border-border py-[20px] px-[40px] min-h-[100px] flex items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 text-[11px] text-muted">
        
        <div className="flex items-center gap-4 max-w-[380px] text-center lg:text-left">
          <img
            src={`${baseUrl}images/logo-cmma.jpg`}
            alt="Logo CMMA"
            className="h-[58px] w-[58px] rounded-full border border-border object-cover shrink-0"
          />
          <div className="leading-[1.4]">
            Promotion du <strong className="font-semibold text-ink">Cheval de Megève</strong> et du <strong className="font-semibold text-ink">Mulet des Alpes</strong>. Association de filière en région Auvergne-Rhône-Alpes.
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <span className="uppercase tracking-[1px]">Association de valorisation</span>
          <span className="text-[12px] text-ink">CMMA</span>
          <span>Patrimoine vivant, attelage, médiation et usages alpins.</span>
        </div>

        <div className="flex items-center gap-2 uppercase tracking-[1px] text-center">
          <span>&copy; {new Date().getFullYear()} CMMA</span>
          <span className="opacity-50">-</span>
          <Link to="/mentions-legales" className="hover:text-ink transition-colors">Mentions Légales</Link>
        </div>

      </div>
    </footer>
  );
}
