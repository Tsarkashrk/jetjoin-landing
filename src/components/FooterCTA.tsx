import { motion } from 'framer-motion'

const FooterCTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Готовы начать?</h2>
          <p className="text-muted-foreground text-lg mb-10">Присоединяйтесь к&nbsp;тысячам путешественников и&nbsp;отправителей по всему миру</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#cta" className="gradient-cta px-10 py-4 rounded-xl text-accent-foreground font-bold text-lg hover:opacity-90 transition-opacity shadow-lg">
              Начать зарабатывать
            </a>
            <a href="#cta" className="px-10 py-4 rounded-xl border border-foreground/30 text-foreground font-medium text-lg hover:bg-foreground/5 transition-colors">
              Отправить посылку
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FooterCTA
