import { motion } from "framer-motion";
import { DollarSign, Zap, Globe } from "lucide-react";
import heroLuggage from "@/assets/hero-luggage.webp";

const stats = [
  {
    icon: DollarSign,
    title: "До $300",
    subtitle: "за рейс",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "Доставка",
    subtitle: "за 3–12 часов",
    color: "text-primary",
  },
  {
    icon: Globe,
    title: "В любую точку",
    subtitle: "мира",
    color: "text-primary",
  },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroLuggage}
          alt="Багаж и посылки в аэропорту"
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black text-foreground mb-16 max-w-xl leading-tight"
        >
          Отправляйте посылки быстрее, чем курьерские службы через верифицированного путешественника
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glow-card rounded-2xl p-6 bg-card/80 backdrop-blur-sm flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">{stat.title}</span>
                <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
