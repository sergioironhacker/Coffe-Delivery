
import { Coffee, Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Menú", href: "#menu" },
    { name: "Servicios", href: "#servicios" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" }
  ];

  const legalLinks = [
    { name: "Términos de Servicio", href: "#" },
    { name: "Política de Privacidad", href: "#" },
    { name: "Política de Cookies", href: "#" },
    { name: "Devoluciones", href: "#" }
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" }
  ];

  return (
    <footer id="contacto" className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-coffee-gradient rounded-full">
                <Coffee className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">CaféExpress</h3>
                <p className="text-sm text-muted-foreground">Café a tu puerta</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Llevamos más de 5 años sirviendo el mejor café de la ciudad. 
              Nuestra pasión es brindarte una experiencia única en cada taza.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" className="h-9 w-9">
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-foreground mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-coffee-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-foreground mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-coffee-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-foreground mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-coffee-500" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-coffee-500" />
                <span className="text-muted-foreground">hola@cafeexpress.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-coffee-500" />
                <span className="text-muted-foreground">Calle Principal 123, Ciudad</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-coffee-500" />
                <span className="text-muted-foreground">24/7 - Siempre abierto</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 p-8 bg-coffee-gradient rounded-2xl text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¡Mantente al día con nuestras ofertas!
            </h3>
            <p className="text-coffee-100 mb-6">
              Suscríbete y recibe un 20% de descuento en tu primer pedido
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-coffee-300"
              />
              <Button className="bg-coffee-800 hover:bg-coffee-700 text-white px-8 py-3">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 CaféExpress. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm mt-4 sm:mt-0">
            Hecho con ❤️ y mucho café
          </p>
        </div>
      </div>
    </footer>
  );
}
