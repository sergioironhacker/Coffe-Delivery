
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

export function CartButton() {
  const { state } = useCart();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {state.itemCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {state.itemCount}
            </Badge>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh]">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Tu Pedido</DrawerTitle>
            <DrawerDescription>
              {state.itemCount > 0 
                ? `${state.itemCount} producto${state.itemCount > 1 ? 's' : ''} en tu carrito`
                : 'Tu carrito está vacío'
              }
            </DrawerDescription>
          </DrawerHeader>
          <CartContent />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function CartContent() {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simular proceso de checkout
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      alert("¡Pedido realizado con éxito! Te contactaremos pronto para confirmar la entrega.");
    }, 2000);
  };

  if (state.items.length === 0) {
    return (
      <div className="p-4 text-center">
        <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">Tu carrito está vacío</p>
        <DrawerClose asChild>
          <Button variant="outline" className="mt-4">
            Continuar comprando
          </Button>
        </DrawerClose>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="space-y-4 max-h-60 overflow-y-auto">
        {state.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium truncate">{item.name}</h4>
              <p className="text-sm text-muted-foreground">${item.price}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="text-sm font-medium w-8 text-center">
                {item.quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6 text-destructive hover:text-destructive"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Total:</span>
          <span className="font-bold text-lg">${state.total.toFixed(2)}</span>
        </div>
        
        <div className="space-y-2">
          <Button 
            className="w-full coffee-gradient text-white" 
            onClick={handleCheckout}
            disabled={isCheckingOut}
          >
            {isCheckingOut ? "Procesando..." : "Realizar Pedido"}
          </Button>
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={clearCart}
          >
            Vaciar Carrito
          </Button>
        </div>
      </div>
    </div>
  );
}
