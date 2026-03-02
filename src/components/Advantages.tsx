import { motion } from "framer-motion";
import { Clock, Shield, TrendingUp, MapPin } from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "Скорость",
    desc: "Доставка за 3–12 часов вместо дней и недель через обычные службы",
  },
  {
    icon: TrendingUp,
    title: "Выгода",
    desc: "Зарабатывайте до $300 за каждый рейс, используя свободное место в багаже",
  },
  {
    icon: Shield,
    title: "Надёжность",
    desc: "Все пользователи проходят верификацию, посылки застрахованы",
  },
  {
    icon: MapPin,
    title: "География",
    desc: "Доставка в любую точку мира, куда летают коммерческие рейсы",
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Преимущества</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Почему тысячи людей выбирают JetJoin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glow-card rounded-2xl p-8 bg-card/60 backdrop-blur-sm flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
