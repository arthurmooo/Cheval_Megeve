export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="w-full flex-grow flex items-center justify-center p-[40px] py-[80px] bg-paper">
      <div className="max-w-[600px] w-full text-center border border-border p-[40px] md:p-[60px] bg-paper shadow-sm">
        <span className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-gold mb-[16px] block">
          En construction
        </span>
        <h1 className="font-serif text-[32px] md:text-[40px] mb-[24px] text-ink leading-[1.2]">
          {title}
        </h1>
        <div className="h-[1px] w-[60px] bg-border mx-auto mb-[24px]" />
        <p className="font-sans text-[14px] leading-[1.6] text-muted">
          L'architecture du site prévoit de détailler ici les informations stratégiques et techniques concernant :<br/>
          <strong className="font-medium text-ink mt-2 inline-block">{title}</strong>.
        </p>
      </div>
    </div>
  );
}
