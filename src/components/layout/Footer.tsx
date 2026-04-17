import { Link } from "react-router-dom";

export function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="bg-paper border-t border-border py-[24px] px-[24px] md:px-[40px] min-h-[100px] flex items-center">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8 text-[11px] text-muted">
        
        <div className="flex items-center justify-center lg:justify-self-start gap-4 max-w-[380px] text-left">
          <img
            src={`${baseUrl}images/logo-cmma.jpg`}
            alt="Logo CMMA"
            className="h-[58px] w-[58px] rounded-full border border-border object-cover shrink-0"
          />
          <div className="leading-[1.4]">
            Promotion du <strong className="font-semibold text-ink">Cheval de Megève</strong> et du <strong className="font-semibold text-ink">Mulet des Alpes</strong>. Association de filière en région Auvergne-Rhône-Alpes.
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center lg:justify-self-center">
          <span className="uppercase tracking-[1px]">Association de valorisation</span>
          <span className="text-[12px] text-ink">CMMA</span>
          <span>Patrimoine vivant, attelage, médiation et usages alpins.</span>
        </div>

        <div className="flex items-center justify-center lg:justify-self-end gap-2 uppercase tracking-[1px] text-center whitespace-nowrap">
          <span>&copy; {new Date().getFullYear()} CMMA</span>
          <span className="opacity-50">-</span>
          <Link to="/mentions-legales" className="hover:text-ink transition-colors">Mentions Légales</Link>
        </div>

      </div>
    </footer>
  );
}
