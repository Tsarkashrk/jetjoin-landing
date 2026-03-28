import { motion } from 'framer-motion'
import { Plane, Package } from 'lucide-react'
import heroGlobe from '@/assets/hero-globe.webp'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroGlobe} alt="Глобальная сеть авиа-доставки JetJoin" className="object-cover opacity-90 w-full h-full [object-position:65%_center] sm:object-center" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/30 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-8 border border-border">Платформа авиа-доставки</span>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] mb-6 text-foreground">
            <span className="flex items-center gap-3 mb-2">
              <Plane className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              Зарабатывай
            </span>
            на каждом перелёте
            <br />
            <span className="flex items-center gap-3 mt-2">
              <Package className="w-8 h-8 md:w-10 md:h-10 text-accent" />
              Отправляй быстрее,
            </span>
            чем курьерские службы
          </h1>

          <p className="text-base md:text-base lg:text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">JetJoin соединяет путешественников и&nbsp;отправителей для быстрой доставки тем&nbsp;же рейсом&nbsp;— без&nbsp;складов, без&nbsp;ожидания, напрямую.</p>

          <div className="flex flex-wrap gap-4" id="cta">
            <a href="#how-it-works" className="px-8 py-3.5 rounded-xl text-accent-foreground font-bold text-base hover:opacity-90 transition-opacity shadow-lg max-w-full sm:max-w-[250px] w-full text-center bg-gradient-to-b from-yellow-200 to-green-500">
              Начать зарабатывать
            </a>
            <a href="#advantages" className="px-8 py-3.5 rounded-xl border border-foreground/30 text-foreground font-medium text-base hover:bg-foreground/5 transition-colors max-w-full sm:max-w-[250px] w-full text-center">
              Отправить посылку
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
