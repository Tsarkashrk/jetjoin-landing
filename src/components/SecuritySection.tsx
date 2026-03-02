import { motion } from "framer-motion";
import { ShieldCheck, Fingerprint, Lock, Eye } from "lucide-react";

const features = [
  { icon: Fingerprint, text: "Верификация паспорта и личности каждого пользователя" },
  { icon: Lock, text: "Безопасная оплата через эскроу — деньги защищены" },
  { icon: Eye, text: "Отслеживание посылки в реальном времени" },
  { icon: ShieldCheck, text: "Страхование каждой посылки до $5 000" },
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Безопасность</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Ваша посылка под надёжной защитой на каждом этапе
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl glow-card bg-card/60"
            >
              <div className="w-10 h-10 rounded-lg gradient-cta flex items-center justify-center shrink-0">
                <f.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
