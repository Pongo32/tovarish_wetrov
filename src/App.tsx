import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Anchor, 
  Wind, 
  Compass, 
  Info, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight,
  Shield,
  Zap,
  Waves
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SAILS = [
  {
    id: 'gennaker-9',
    name: 'Геннакер 9 м²',
    description: 'Компактный и эффективный парус для малых судов и швертботов.',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=800',
    specs: ['Площадь: 9 м²', 'Материал: Полиэстер 77 г/м²', 'Комплект: Киса с карабином']
  },
  {
    id: 'gennaker-11',
    name: 'Геннакер 11.34 м²',
    description: 'Оптимальный выбор для популярных разборных катамаранов типа «Ветер».',
    image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798156?auto=format&fit=crop&q=80&w=800',
    specs: ['Площадь: 11.34 м²', 'Усиление: Боуты (косынки + стропы)', 'Кольца: Нержавеющая сталь 304']
  },
  {
    id: 'gennaker-15',
    name: 'Геннакер 15.4 м²',
    description: 'Мощный парус для крупных тримаранов и крейсерских яхт.',
    image: 'https://images.unsplash.com/photo-1532339142463-fd0a8979791a?auto=format&fit=crop&q=80&w=800',
    specs: ['Площадь: 15.4 м²', 'Тип: Асимметричный', 'Доставка: Бесплатно по европ. части РФ']
  }
];

const FEATURES = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Качество материалов',
    desc: 'Используем пропитанный полиэстер 77 г/м² и фурнитуру из нержавеющей стали 304 марки.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Индивидуальный пошив',
    desc: 'Учитываем особенности вашего судна: от «Ветра» и «Простора» до морских яхт.'
  },
  {
    icon: <Waves className="w-6 h-6" />,
    title: 'Доставка по РФ',
    desc: 'Бесплатная доставка СДЭКом по европейской части России. Образцы ткани почтой.'
  }
];

const BOATS = [
  'Ветер', 'Альбатрос', 'Простор', 'Тайфун', 'Сибкат', 'Кулик', 'Яхты', 'Швертботы'
];

const COLORS = [
  { name: 'Белый', class: 'bg-white border border-gray-200' },
  { name: 'Красный', class: 'bg-red-600' },
  { name: 'Синий', class: 'bg-blue-700' },
  { name: 'Голубой', class: 'bg-sky-400' },
  { name: 'Желтый', class: 'bg-yellow-400' },
  { name: 'Оранжевый', class: 'bg-orange-500' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-nautical-blue/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Anchor className="w-6 h-6 text-accent-gold" />
            <span className="font-serif text-lg font-bold tracking-tight uppercase">Товарищ Ветроф</span>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-nautical-blue"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-8 flex flex-col gap-8"
          >
            {['Главная', 'Паруса', 'Цвета', 'Технологии', 'Контакты'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-serif font-medium border-b border-nautical-blue/10 pb-4"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="Главная" className="relative h-[90vh] flex flex-col justify-end px-6 pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Замените "/images/hero.jpg" на путь к вашей фотографии (например: "/hero.jpg" если положили в корень public) */}
          <img 
            src="/images/hero.jpg" 
            alt="Hero background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Падение обратно на стоковую картинку, если файла нет
              (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1200";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nautical-blue via-nautical-blue/40 to-transparent" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white"
        >
          <span className="text-accent-gold font-medium uppercase tracking-[0.2em] text-xs mb-4 block">
            Мастерская в Перми
          </span>
          <h1 className="text-5xl md:text-7xl font-serif leading-[0.9] mb-6">
            Товарищ <br /> <span className="italic text-accent-gold">Ветроф</span>
          </h1>
          <p className="text-white/70 max-w-xs mb-8 text-sm leading-relaxed">
            Индивидуальный пошив геннакеров и спинакеров для тех, кто ценит скорость и качество.
          </p>
          <button className="bg-rescue-orange text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 group shadow-lg shadow-rescue-orange/20">
            Заказать парус
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* Stats/Features */}
      <section className="py-20 px-6 bg-sail-cream">
        <div className="grid grid-cols-1 gap-12">
          {FEATURES.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-accent-gold shadow-sm mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
              <p className="text-nautical-blue/60 text-sm leading-relaxed px-4">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sails Showcase */}
      <section id="Паруса" className="py-24 bg-white overflow-hidden">
        <div className="px-6 mb-12">
          <h2 className="text-4xl font-serif mb-4 italic">Наши работы</h2>
          <div className="h-1 w-20 bg-accent-gold" />
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 px-6 pb-8">
          {SAILS.map((sail) => (
            <motion.div 
              key={sail.id}
              className="min-w-[85vw] snap-center bg-ocean-white rounded-3xl overflow-hidden shadow-xl shadow-nautical-blue/5 border border-nautical-blue/5"
            >
              <div className="h-64 relative">
                <img 
                  src={sail.image} 
                  alt={sail.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <Wind className="w-5 h-5 text-accent-gold" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-4">{sail.name}</h3>
                <p className="text-nautical-blue/60 text-sm mb-6 leading-relaxed">
                  {sail.description}
                </p>
                <div className="space-y-2">
                  {sail.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-medium text-nautical-blue/80">
                      <div className="w-1 h-1 rounded-full bg-accent-gold" />
                      {spec}
                    </div>
                  ))}
                </div>
                <button className="mt-8 w-full py-4 border border-nautical-blue/10 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-nautical-blue hover:text-white transition-colors">
                  Рассчитать стоимость
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Boats Section */}
      <section className="py-16 px-6 bg-ocean-white">
        <h3 className="text-center font-serif text-2xl mb-8">Шьем для любых судов:</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {BOATS.map((boat) => (
            <span key={boat} className="px-4 py-2 bg-white border border-nautical-blue/5 rounded-full text-xs font-medium text-nautical-blue/60">
              {boat}
            </span>
          ))}
        </div>
      </section>

      {/* Colors Section */}
      <section id="Цвета" className="py-24 px-6 bg-sail-cream">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Палитра цветов</h2>
          <p className="text-sm text-nautical-blue/60">Широкий выбор ярких расцветок и их комбинаций.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
          {COLORS.map((color) => (
            <div key={color.name} className="flex flex-col items-center gap-2">
              <div className={cn("w-16 h-16 rounded-full shadow-inner", color.class)} />
              <span className="text-[10px] uppercase tracking-widest font-bold text-nautical-blue/40">{color.name}</span>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-xs italic text-nautical-blue/50">
          * Отправляем образцы ткани почтой для точного подбора цвета.
        </p>
      </section>

      {/* Technical Info Section */}
      <section id="Технологии" className="py-24 px-6 bg-nautical-blue text-white relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Compass className="w-64 h-64 -mr-20 -mt-20" />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-serif mb-8 italic">Наше производство</h2>
          <p className="text-white/60 mb-12 leading-relaxed">
            Каждый парус «Товарищ Ветроф» — это результат ручной работы и внимания к деталям. Мы используем только проверенные материалы.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-accent-gold text-3xl font-serif">01</div>
              <div>
                <h4 className="font-bold mb-2">Усиленные боуты</h4>
                <p className="text-sm text-white/50">Косынки и стропы в местах наибольшей нагрузки для долгой службы.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-accent-gold text-3xl font-serif">02</div>
              <div>
                <h4 className="font-bold mb-2">Нержавеющая сталь</h4>
                <p className="text-sm text-white/50">Используем кольца только 304 марки — никакой коррозии даже в соленой воде.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-accent-gold text-3xl font-serif">03</div>
              <div>
                <h4 className="font-bold mb-2">Полная комплектация</h4>
                <p className="text-sm text-white/50">В комплекте всегда идет удобная киса (мешок) с карабином для фиксации.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA / Contact */}
      <section id="Контакты" className="py-24 px-6 text-center">
        <div className="max-w-xs mx-auto">
          <h2 className="text-4xl font-serif mb-6 italic">Связаться <br /> с мастером</h2>
          <p className="text-nautical-blue/60 text-sm mb-6">
            Пермь, работаем по всей России.
          </p>
          <a 
            href="tel:+79124999600" 
            className="text-2xl font-serif font-bold text-accent-gold block mb-10"
          >
            +7 912 499 96 00
          </a>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Ваше имя" 
              className="w-full px-6 py-4 bg-ocean-white border border-nautical-blue/5 rounded-2xl focus:outline-none focus:border-accent-gold transition-colors"
            />
            <textarea 
              placeholder="Ваше сообщение или модель судна" 
              rows={3}
              className="w-full px-6 py-4 bg-ocean-white border border-nautical-blue/5 rounded-2xl focus:outline-none focus:border-accent-gold transition-colors resize-none"
            />
            <button className="w-full bg-rescue-orange text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-rescue-orange/20">
              Отправить в WhatsApp / Telegram
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-white border-t border-nautical-blue/5 py-12 px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-2">
            <Anchor className="w-5 h-5 text-accent-gold" />
            <span className="font-serif text-lg font-bold uppercase">Товарищ Ветроф</span>
          </div>
          <div className="flex gap-6">
            <a
              href="https://vk.com/vetrof"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nautical-blue/40 hover:text-accent-gold transition-colors"
              aria-label="VKontakte"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.8 2H3.2C2.54 2 2 2.54 2 3.2v17.6c0 .66.54 1.2 1.2 1.2h17.6c.66 0 1.2-.54 1.2-1.2V3.2c0-.66-.54-1.2-1.2-1.2zm-3.6 12.2h-2.2c-.8 0-1.1-.9-2.6-2.5-1.2-1.3-1.7-1.5-2.1-1.5-.5 0-.6.3-.6 1v2c0 .8-.2 1.2-1.2 1.2-1.9 0-4-1.2-5-3.4C3.2 10.4 3 8.6 3 7.4c0-.7.3-1.1 1-1.1h2.2c.7 0 .9.3 1.1.9.8 2.3 2.4 4.3 3 4.3.4 0 .6-.3.6-1.3v-2c-.1-.8-.5-1.2-1.4-1.2-.5 0-.8 0-1.3.4-.5.4-.2 1.1.9 2.3 1.2 1.3 1.7 1.5 2.1 1.5s.6-.3.6-1v-2c0-.8.2-1.2 1.2-1.2 1.9 0 4 1.2 5 3.4.8 1.8 1 3.6 1 4.8 0 .7-.3 1.1-1 1.1z" />
              </svg>
            </a>
            <span className="text-xs uppercase tracking-widest text-nautical-blue/40">WhatsApp</span>
            <span className="text-xs uppercase tracking-widest text-nautical-blue/40">Telegram</span>
          </div>
          <p className="text-[10px] text-nautical-blue/30 uppercase tracking-widest">
            © 2026 Товарищ Ветроф. Пермь, Россия.
          </p>
        </div>
      </footer>
    </div>
  );
}
