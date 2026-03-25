import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Terms = () => {
  const sections = [
    {
      num: 1,
      title: 'Общие положения',
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между ТОО «JetJoin» (далее — «Компания», «мы») и пользователем платформы JetJoin (далее — «Пользователь», «Вы»).</p>
          <p>
            <strong className="text-foreground">JetJoin</strong> — это онлайн-платформа, соединяющая путешественников и отправителей для организации доставки посылок тем же авиарейсом.
          </p>
          <p>Используя сайт или мобильное приложение JetJoin, вы подтверждаете согласие с условиями настоящего Соглашения.</p>
        </div>
      ),
    },
    {
      num: 2,
      title: 'Описание сервиса',
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p className="font-semibold text-foreground">JetJoin предоставляет цифровую платформу, позволяющую:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>путешественникам размещать информацию о предстоящих рейсах;</li>
            <li>отправителям размещать заявки на доставку посылок;</li>
            <li>сторонам договариваться о передаче багажа/посылки.</li>
          </ul>
          <p className="pt-2">
            <strong className="text-foreground">Важно:</strong> Компания не является перевозчиком, экспедитором или логистической компанией. Мы предоставляем исключительно информационную и техническую платформу.
          </p>
        </div>
      ),
    },
    {
      num: 3,
      title: 'Регистрация и аккаунт',
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Для использования сервиса необходимо создать учетную запись.</p>
          <p className="font-semibold text-foreground">Пользователь обязуется:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>предоставлять достоверные данные;</li>
            <li>не передавать доступ третьим лицам;</li>
            <li>соблюдать законодательство Республики Казахстан и страны назначения.</li>
          </ul>
          <p className="pt-2">Компания вправе приостановить или удалить аккаунт при нарушении условий.</p>
        </div>
      ),
    },
    {
      num: 4,
      title: 'Верификация пользователей',
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>JetJoin может проводить процедуру верификации личности, включая:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>загрузку удостоверения личности или паспорта;</li>
            <li>подтверждение номера телефона;</li>
            <li>проверку рейса.</li>
          </ul>
          <p className="pt-2">Пользователь соглашается на обработку таких данных в целях безопасности.</p>
        </div>
      ),
    },
    {
      num: 5,
      title: 'Запрещенные предметы',
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Через платформу запрещается перевозка:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>наркотических средств;</li>
            <li>оружия и боеприпасов;</li>
            <li>взрывчатых веществ;</li>
            <li>контрафактной продукции;</li>
            <li>денежных средств;</li>
            <li>товаров, запрещенных законодательством РК или страны назначения.</li>
          </ul>
          <p className="pt-2 font-semibold text-destructive">Пользователь несет полную ответственность за содержимое отправления.</p>
        </div>
      ),
    },
    {
      num: 6,
      title: 'Ответственность сторон',
      content: (
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">6.1 Ответственность путешественника</h3>
            <div className="space-y-4 ml-4">
              <p>Путешественник обязуется:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>лично проверить содержимое посылки;</li>
                <li>не принимать запечатанные неизвестные предметы;</li>
                <li>соблюдать правила авиакомпании и таможни.</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">6.2 Ответственность отправителя</h3>
            <div className="space-y-4 ml-4">
              <p>Отправитель гарантирует:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>законность отправляемого содержимого;</li>
                <li>достоверность описания;</li>
                <li>отсутствие запрещенных предметов.</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: 7,
      title: 'Ограничение ответственности',
      content: (
        <div className="p-6 rounded-2xl glow-card bg-card/60 border border-border">
          <p className="font-semibold text-foreground mb-4">Компания:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
            <li>не является стороной договора перевозки;</li>
            <li>не несет ответственности за утерю, повреждение или задержку посылки;</li>
            <li>не гарантирует успешность сделки между пользователями.</li>
          </ul>
          <p className="mt-4 font-semibold text-muted-foreground">Все сделки заключаются напрямую между пользователями.</p>
        </div>
      ),
    },
    {
      num: 8,
      title: 'Платежи и комиссии',
      content: (
        <div className="space-y-4 text-muted-foreground">
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>JetJoin может взимать сервисную комиссию.</li>
            <li>Размер комиссии указывается в интерфейсе платформы.</li>
            <li>Компания не несет ответственности за налоговые обязательства пользователей.</li>
          </ul>
        </div>
      ),
    },
    {
      num: 9,
      title: 'Разрешение споров',
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Споры между пользователями решаются самостоятельно.</p>
          <p>Споры с Компанией регулируются законодательством Республики Казахстан и рассматриваются в судах РК.</p>
        </div>
      ),
    },
    {
      num: 10,
      title: 'Изменения условий',
      content: (
        <div className="text-muted-foreground leading-relaxed">
          <p>Компания вправе изменять настоящее Соглашение. Обновленная версия публикуется на сайте.</p>
        </div>
      ),
    },
    {
      num: 11,
      title: 'Контактная информация',
      content: (
        <div className="p-6 rounded-2xl glow-card bg-card/60 border border-border">
          <div className="space-y-3 text-muted-foreground">
            <p>
              <strong className="text-foreground">БИН:</strong> 200340013995
            </p>
            <p>
              <strong className="text-foreground">Адрес:</strong> Казахстан, город Алматы, Бостандыкский район, Проспект Гагарина, дом 311А, кв. 162, почтовый индекс 050000
            </p>
            <p>
              <strong className="text-foreground">Email:</strong>{' '}
              <a href="mailto:support@jetjoin.kz" className="text-primary hover:underline">
                mirzagaly.dev@gmail.com
              </a>
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <>
      <Helmet>
        <title>Terms of Service — JetJoin</title>
        <meta name="description" content="Пользовательское соглашение платформы JetJoin для авиа-доставки посылок" />
      </Helmet>

      <Navbar />

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">Условия использования</p>
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

export default Terms
