import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [tour360Rotation, setTour360Rotation] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleTour360Drag = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      setTour360Rotation(prev => prev + e.movementX * 0.5);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const rooms = [
    {
      title: 'Люкс',
      description: 'Просторный номер с видом на город',
      features: ['40 м²', 'King Size', 'Ванна', 'Мини-бар'],
      price: '8 500 ₽/ночь'
    },
    {
      title: 'Стандарт',
      description: 'Уютный номер для комфортного отдыха',
      features: ['25 м²', 'Queen Size', 'Душ', 'Wi-Fi'],
      price: '4 500 ₽/ночь'
    },
    {
      title: 'Студия',
      description: 'Современный номер с кухонной зоной',
      features: ['35 м²', 'King Size', 'Кухня', 'Терраса'],
      price: '6 500 ₽/ночь'
    }
  ];

  const services = [
    { icon: 'Wifi', title: 'Бесплатный Wi-Fi', description: 'Высокоскоростной интернет во всех номерах' },
    { icon: 'Car', title: 'Парковка', description: 'Бесплатная охраняемая парковка для гостей' },
    { icon: 'Coffee', title: 'Ресторан', description: 'Завтрак, обед и ужин в уютном ресторане' },
    { icon: 'Dumbbell', title: 'Фитнес-зал', description: 'Современный тренажерный зал 24/7' },
    { icon: 'Sparkles', title: 'Spa & Wellness', description: 'Массаж, сауна, джакузи' },
    { icon: 'Briefcase', title: 'Бизнес-центр', description: 'Конференц-залы и переговорные' }
  ];

  const attractions = [
    { name: 'Вологодский Кремль', distance: '1.2 км' },
    { name: 'Софийский собор', distance: '1.5 км' },
    { name: 'Музей кружева', distance: '0.8 км' },
    { name: 'Набережная реки Вологды', distance: '0.5 км' },
    { name: 'Площадь Революции', distance: '2.0 км' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Отель Вологда</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#rooms" className="text-foreground hover:text-primary transition-colors">Номера</a>
            <a href="#tour" className="text-foreground hover:text-primary transition-colors">360° Тур</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#location" className="text-foreground hover:text-primary transition-colors">Расположение</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Забронировать</Button>
        </div>
      </header>

      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Добро пожаловать в Отель Вологда
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Комфорт и роскошь в самом сердце древнего города
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Icon name="Calendar" size={20} />
                Забронировать номер
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Phone" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши номера</h2>
            <p className="text-lg text-muted-foreground">
              Выберите идеальный номер для вашего отдыха
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Hotel" size={64} className="text-primary/20" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{room.title}</h3>
                  <p className="text-muted-foreground mb-4">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-muted rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{room.price}</span>
                    <Button>Забронировать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tour" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">360° Виртуальный тур</h2>
            <p className="text-lg text-muted-foreground">
              Осмотрите номер со всех сторон. Перетаскивайте изображение мышью
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden animate-scale-in">
              <div 
                className="aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 relative cursor-move select-none"
                onMouseMove={handleTour360Drag}
                style={{
                  background: `linear-gradient(${tour360Rotation}deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2), hsl(var(--secondary) / 0.2))`
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                  <Icon name="Camera" size={80} className="text-primary/30" />
                  <div className="text-center">
                    <p className="text-xl font-semibold text-foreground mb-2">360° Интерактивный тур</p>
                    <p className="text-muted-foreground">Перетаскивайте для осмотра</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm text-muted-foreground bg-white/80 backdrop-blur-sm rounded-lg p-3">
                  <span className="flex items-center gap-2">
                    <Icon name="Move" size={16} />
                    Используйте мышь для вращения
                  </span>
                  <span>Угол: {Math.round(tour360Rotation)}°</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">
              Всё для вашего комфорта и удобства
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Расположение</h2>
            <p className="text-lg text-muted-foreground">
              В шаговой доступности от главных достопримечательностей
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden animate-scale-in">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="MapPin" size={80} className="text-primary/30" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-semibold mb-2">ул. Мира, 92, Вологда, 160000</p>
                  <p className="text-white/80 text-sm">Центр города, рядом с историческими памятниками</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Ближайшие достопримечательности:</h3>
                <div className="space-y-3">
                  {attractions.map((attraction, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <div className="flex items-center gap-3">
                        <Icon name="MapPin" size={20} className="text-primary" />
                        <span className="font-medium">{attraction.name}</span>
                      </div>
                      <span className="text-muted-foreground">{attraction.distance}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 gap-2">
                  <Icon name="Navigation" size={18} />
                  Открыть на карте
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Мы ответим на все ваши вопросы
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 animate-scale-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (900) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о ваших пожеланиях..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Icon name="Send" size={18} />
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <Icon name="Phone" size={24} className="text-primary mx-auto mb-2" />
                  <p className="font-semibold">+7 (8172) 72-00-00</p>
                  <p className="text-sm text-muted-foreground">Круглосуточно</p>
                </div>
                <div>
                  <Icon name="Mail" size={24} className="text-primary mx-auto mb-2" />
                  <p className="font-semibold">info@hotel-vologda.ru</p>
                  <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                </div>
                <div>
                  <Icon name="MapPin" size={24} className="text-primary mx-auto mb-2" />
                  <p className="font-semibold">ул. Мира, 92</p>
                  <p className="text-sm text-muted-foreground">Вологда, 160000</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Отель Вологда</h3>
              <p className="text-background/80">
                Современный отель в историческом центре Вологды
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Навигация</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#rooms" className="hover:text-background transition-colors">Номера</a></li>
                <li><a href="#tour" className="hover:text-background transition-colors">360° Тур</a></li>
                <li><a href="#services" className="hover:text-background transition-colors">Услуги</a></li>
                <li><a href="#location" className="hover:text-background transition-colors">Расположение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li>+7 (8172) 72-00-00</li>
                <li>info@hotel-vologda.ru</li>
                <li>ул. Мира, 92, Вологда</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="border-background/20 hover:bg-background/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-background/20 hover:bg-background/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-background/20 hover:bg-background/10">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-6 text-center text-background/60">
            <p>&copy; 2024 Отель Вологда. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
