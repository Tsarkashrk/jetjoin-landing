import { motion } from "framer-motion";
import { UserCheck, Search, Send, Banknote } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Регистрация",
    desc: "Создайте аккаунт и пройдите верификацию за 5 минут",
  },
  {
    icon: Search,
    title: "Найдите рейс",
    desc: "Путешественник указывает маршрут, отправитель находит подходящий",
  },
  {
    icon: Send,
    title: "Передайте посылку",
    desc: "Встретьтесь в аэропорту и передайте посылку лично",
  },
  {
    icon: Banknote,
    title: "Получите оплату",
    desc: "Деньги поступят на ваш счёт после подтверждения доставки",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Как это работает</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Четыре простых шага до вашей первой доставки
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glow-card rounded-2xl p-6 bg-card/60 backdrop-blur-sm text-center"
            >
              <div className="w-14 h-14 rounded-2xl gradient-cta flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <span className="text-xs font-bold text-primary mb-2 block">Шаг {i + 1}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
