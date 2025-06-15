
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section id="inicio" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-coffee-50 to-coffee-100 dark:from-coffee-950 dark:to-coffee-900">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-coffee-100 text-coffee-800 dark:bg-coffee-800 dark:text-coffee-100">
                <Star className="h-3 w-3 mr-1 fill-current" />
                Café Premium a Domicilio
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                El mejor café
                <span className="text-coffee-500 block">
                  directo a tu puerta
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Descubre sabores únicos con nuestros granos seleccionados. 
                Entrega rápida y café recién preparado para ti.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-coffee-500" />
                <span>15-30 min</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-coffee-500" />
                <span>Entrega gratis</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Star className="h-5 w-5 text-coffee-500 fill-current" />
                <span>4.9/5 estrellas</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="coffee-gradient text-white hover:opacity-90 transition-opacity">
                Ver Menú
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-coffee-300 text-coffee-700 hover:bg-coffee-50 dark:border-coffee-700 dark:text-coffee-300 dark:hover:bg-coffee-900">
                Cómo Funciona
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=800&fit=crop&crop=center"
                alt="Café artesanal"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Café Especial del Día</h3>
                  <p className="text-sm text-muted-foreground">Americano Premium</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-coffee-500 text-lg">$4.50</p>
                  <p className="text-xs text-muted-foreground">Entrega gratuita</p>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-coffee-200 dark:bg-coffee-800 rounded-full opacity-50"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-coffee-100 dark:bg-coffee-900 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
