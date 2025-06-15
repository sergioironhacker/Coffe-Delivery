
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Diseñadora",
      rating: 5,
      text: "El mejor café que he probado en años. La entrega es súper rápida y el café llega perfectamente caliente. ¡Totalmente recomendado!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b69c?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Desarrollador",
      rating: 5,
      text: "Como trabajo desde casa, necesito mi café de la mañana. CaféExpress nunca me ha fallado. Calidad excepcional y servicio impecable.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Estudiante",
      rating: 5,
      text: "Perfecto para esas largas sesiones de estudio. El cold brew es mi favorito y los precios son muy justos. ¡Gracias CaféExpress!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Luis Torres",
      role: "Arquitecto",
      rating: 5,
      text: "La calidad del café es excepcional. Se nota que usan granos premium. El flat white es simplemente perfecto, como en las mejores cafeterías.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Sofia López",
      role: "Doctora",
      rating: 5,
      text: "Durante mis guardias nocturnas, CaféExpress es mi salvación. Entrega 24/7 y café que realmente me mantiene alerta. ¡Excelente servicio!",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Miguel Sánchez",
      role: "Chef",
      rating: 5,
      text: "Como chef, aprecio la calidad de los ingredientes. Este café tiene un sabor increíble y la consistencia es perfecta en cada pedido.",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="bg-coffee-100 text-coffee-800 dark:bg-coffee-800 dark:text-coffee-100 mb-4">
            Testimonios
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Miles de personas confían en nosotros para su dosis diaria de café
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-coffee-300 dark:text-coffee-700" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-coffee-gradient rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              ¿Listo para probar la diferencia?
            </h3>
            <p className="text-coffee-100 mb-8 max-w-2xl mx-auto">
              Únete a miles de clientes satisfechos y descubre por qué somos la opción #1 para café a domicilio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-coffee-700 font-semibold px-8 py-3 rounded-lg hover:bg-coffee-50 transition-colors">
                Hacer mi Primer Pedido
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Ver Promociones
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
