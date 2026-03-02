import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Privacy = () => {
  const sections = [
    {
      num: 1,
      title: 'Общие положения',
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Настоящая Политика конфиденциальности разработана в соответствии с Законом Республики Казахстан «О персональных данных и их защите».</p>
          <p>Используя платформу JetJoin, вы соглашаетесь с условиями обработки персональных данных.</p>
        </div>
      ),
    },
    {
      num: 2,
      title: 'Какие данные мы собираем',
      content: (
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">2.1 Персональные данные</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>ФИО</li>
              <li>номер телефона</li>
              <li>email</li>
              <li>данные удостоверения личности или паспорта (для верификации)</li>
              <li>фото профиля</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">2.2 Данные о рейсах</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>номер рейса</li>
              <li>дата и маршрут</li>
              <li>страна отправления и назначения</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">2.3 Технические данные</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>IP-адрес</li>
              <li>данные браузера</li>
              <li>cookies</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      num: 3,
      title: 'Цели обработки данных',
      content: (
        <div className="text-muted-foreground">
          <p className="mb-4">Мы обрабатываем данные для:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>регистрации аккаунта;</li>
            <li>верификации личности;</li>
            <li>обеспечения безопасности сделок;</li>
            <li>связи между пользователями;</li>
            <li>улучшения сервиса;</li>
            <li>выполнения требований законодательства.</li>
          </ul>
        </div>
      ),
    },
    {
      num: 4,
      title: 'Передача данных третьим лицам',
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p className="font-semibold text-foreground">Мы не продаем персональные данные.</p>
          <p>Данные могут передаваться:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>государственным органам по законному требованию;</li>
            <li>платежным провайдерам;</li>
            <li>IT-подрядчикам (хостинг, аналитика).</li>
          </ul>
        </div>
      ),
    },
    {
      num: 5,
      title: 'Хранение данных',
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Персональные данные хранятся:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>в защищенных дата-центрах;</li>
            <li>с применением технических и организационных мер защиты.</li>
          </ul>
          <p>Срок хранения — в течение срока действия аккаунта и установленного законодательством срока.</p>
        </div>
      ),
    },
    {
      num: 6,
      title: 'Права пользователя',
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Пользователь имеет право:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>получать информацию о своих данных;</li>
            <li>требовать исправления;</li>
            <li>требовать удаления (если это не противоречит закону);</li>
            <li>отозвать согласие на обработку данных.</li>
          </ul>
          <p className="pt-2">
            Запрос можно направить на:{' '}
            <a href="mailto:privacy@jetjoin.kz" className="text-primary hover:underline">
              privacy@jetjoin.kz
            </a>
          </p>
        </div>
      ),
    },
    {
      num: 7,
      title: 'Безопасность',
      content: (
        <div className="text-muted-foreground">
          <p className="mb-4">JetJoin применяет:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>SSL-шифрование;</li>
            <li>ограниченный доступ к данным;</li>
            <li>внутренние политики безопасности.</li>
          </ul>
        </div>
      ),
    },
    {
      num: 8,
      title: 'Cookies',
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Мы используем cookies для:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>корректной работы сайта;</li>
            <li>аналитики;</li>
            <li>персонализации интерфейса.</li>
          </ul>
          <p>Пользователь может отключить cookies в настройках браузера.</p>
        </div>
      ),
    },
    {
      num: 9,
      title: 'Трансграничная передача данных',
      content: (
        <div className="text-muted-foreground leading-relaxed">
          <p>В случае международных рейсов возможна трансграничная передача данных в соответствии с законодательством РК.</p>
        </div>
      ),
    },
    {
      num: 10,
      title: 'Изменения политики',
      content: (
        <div className="text-muted-foreground leading-relaxed">
          <p>Компания вправе обновлять Политику. Актуальная версия размещается на сайте.</p>
        </div>
      ),
    },
  ]

  return (
    <>
      <Helmet>
        <title>Privacy Policy — JetJoin</title>
        <meta name="description" content="Политика конфиденциальности платформы JetJoin. Узнайте, как мы защищаем ваши персональные данные." />
      </Helmet>

      <Navbar />

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">Политика конфиденциальности</p>
            <p className="text-sm text-muted-foreground mt-3">Последнее обновление: 2 марта 2026 г.</p>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {sections.map((section, index) => (
            <motion.section key={section.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 flex items-start gap-3">
                <span className="text-primary shrink-0">{section.num}.</span>
                <span>{section.title}</span>
              </h2>
              {section.content}
            </motion.section>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 pt-8">
          <Footer />
        </motion.div>
      </section>
    </>
  )
}

export default Privacy
