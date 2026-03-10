import { LogoABFinal } from "@/components/logo-ab"

export function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LogoABFinal size={70} color="currentColor" className="text-foreground" />
            <span className="text-sm text-muted-foreground">
              Andrés Blanco | Presidencia EAN 2026
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Universidad EAN</span>
            <span className="hidden md:inline">•</span>
            <span>Bogotá, Colombia</span>
          </div>

          <div className="text-sm text-muted-foreground">
            Hecho con pasión para la comunidad EAN
          </div>
        </div>
      </div>
    </footer>
  )
}
