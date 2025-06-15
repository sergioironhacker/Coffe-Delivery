
import { Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export function Menu() {
  const { addItem } = useCart();

  const coffeeItems = [
    {
      id: 1,
      name: "Americano Premium",
      description: "Café negro intenso con granos arábica seleccionados",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop&crop=center",
      rating: 4.8,
      popular: true,
      category: "Clásicos"
    },
    {
      id: 2,
      name: "Cappuccino Artesanal",
      description: "Espresso doble con espuma de leche cremosa y canela",
      price: 5.25,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop&crop=center",
      rating: 4.9,
      popular: true,
      category: "Especiales"
    },
    {
      id: 3,
      name: "Latte Vainilla",
      description: "Café suave con leche vaporizada y esencia de vainilla",
      price: 5.75,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop&crop=center",
      rating: 4.7,
      popular: false,
      category: "Saborizados"
    },
    {
      id: 4,
      name: "Mocha Chocolate",
      description: "Espresso con chocolate belga y crema batida",
      price: 6.00,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop&crop=center",
      rating: 4.8,
      popular: false,
      category: "Dulces"
    },
    {
      id: 5,
      name: "Cold Brew Especial",
      description: "Café frío de extracción lenta, servido con hielo",
      price: 4.75,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop&crop=center",
      rating: 4.6,
      popular: false,
      category: "Fríos"
    },
    {
      id: 6,
      name: "Flat White",
      description: "Café australiano con microespuma sedosa",
      price: 5.50,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop&crop=center",
      rating: 4.9,
      popular: true,
      category: "Internacionales"
    }
  ];

  const handleAddToCart = (item: typeof coffeeItems[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category
    });
    
    toast.success(`${item.name} agregado al carrito`, {
      description: `$${item.price} - ${item.category}`,
    });
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="bg-coffee-100 text-coffee-800 dark:bg-coffee-800 dark:text-coffee-100 mb-4">
            Nuestro Menú
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sabores que enamoran
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada taza es preparada con pasión usando los mejores granos del mundo
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeItems.map((item, index) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.popular && (
                    <Badge className="absolute top-3 left-3 bg-coffee-500 text-white">
                      Popular
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">{item.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs mb-2">
                    {item.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-coffee-500">
                    ${item.price}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button 
                  className="w-full coffee-gradient text-white hover:opacity-90 transition-opacity"
                  onClick={() => handleAddToCart(item)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Agregar al Carrito
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            ¿No encuentras lo que buscas? Tenemos más opciones disponibles
          </p>
          <Button variant="outline" size="lg" className="border-coffee-300 text-coffee-700 hover:bg-coffee-50 dark:border-coffee-700 dark:text-coffee-300 dark:hover:bg-coffee-900">
            Ver Menú Completo
          </Button>
        </div>
      </div>
    </section>
  );
}
