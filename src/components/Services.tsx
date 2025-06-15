
import { Clock, MapPin, CreditCard, Headphones, Truck, Shield } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Services() {
  const services = [
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Tu café llegará caliente en 15-30 minutos",
      highlight: "15-30 min"
    },
    {
      icon: MapPin,
      title: "Cobertura Amplia",
      description: "Entregamos en toda la ciudad sin costo adicional",
      highlight: "Envío gratis"
    },
    {
      icon: CreditCard,
      title: "Pago Fácil",
      description: "Tarjetas, efectivo, transferencias y más",
      highlight: "Sin comisiones"
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Atención al cliente siempre disponible",
      highlight: "Siempre activo"
    },
    {
      icon: Truck,
      title: "Seguimiento en Vivo",
      description: "Rastrea tu pedido en tiempo real",
      highlight: "GPS en vivo"
    },
    {
      icon: Shield,
      title: "Garantía de Calidad",
      description: "Si no te gusta, te devolvemos el dinero",
      highlight: "100% garantizado"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="bg-coffee-100 text-coffee-800 dark:bg-coffee-800 dark:text-coffee-100 mb-4">
            Nuestros Servicios
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una experiencia completa que va más allá del café
          </p>
        </div>

        {/*Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-none bg-background/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-coffee-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <Badge variant="outline" className="mb-2 border-coffee-300 text-coffee-700 dark:border-coffee-700 dark:text-coffee-300">
                  {service.highlight}
                </Badge>
              </CardHeader>
              
              <CardContent className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in">
            <div className="text-3xl lg:text-4xl font-bold text-coffee-500 mb-2">5K+</div>
            <p className="text-muted-foreground">Clientes felices</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl lg:text-4xl font-bold text-coffee-500 mb-2">15min</div>
            <p className="text-muted-foreground">Tiempo promedio</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl lg:text-4xl font-bold text-coffee-500 mb-2">4.9★</div>
            <p className="text-muted-foreground">Calificación</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl lg:text-4xl font-bold text-coffee-500 mb-2">24/7</div>
            <p className="text-muted-foreground">Disponibilidad</p>
          </div>
        </div>
      </div>
    </section>
  );
}
