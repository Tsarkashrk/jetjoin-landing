import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xl font-black text-foreground">JetJoin</span>
        <div className="flex gap-6">
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline">
            Условия использования
          </Link>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline">
            Политика конфиденциальности
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} JetJoin. Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer
