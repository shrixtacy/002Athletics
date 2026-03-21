import React, { useState, useEffect } from 'react';
import { useCart } from '@/lib/CartContext';
import { Trash2, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, removeItem, updateQuantity, cartTotal } = useCart();
  const [formData, setFormData] = useState({ name: '', number: '', address: '', email: '' });
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = formData.name && formData.number && formData.address && formData.email;

  const handleCheckout = () => {
    setOrderComplete(true);
    // In a real app, you would send this to a server
  };

  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-32 pb-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <h1 className="font-display text-4xl md:text-5xl mb-8">Your Cart</h1>
            
            {orderComplete ? (
              <div className="bg-card border border-border rounded-lg p-12 text-center shadow-xl">
                <h3 className="font-display text-3xl mb-4 text-primary">Order Complete!</h3>
                <p className="font-body text-muted-foreground mb-8">Thank you for your purchase. We'll send a confirmation email shortly.</p>
                <Link to="/shop">
                  <Button className="w-full md:w-auto px-8">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-20 bg-card border border-border rounded-lg shadow-sm">
                <p className="font-body text-xl text-muted-foreground mb-6">Your cart is empty.</p>
                <Link to="/shop">
                  <Button>Start Shopping</Button>
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 flex flex-col gap-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 sm:gap-6 border-b border-border pb-6 animate-fade-in items-center">
                      <div className="w-20 h-20 sm:w-28 sm:h-28 bg-secondary rounded overflow-hidden flex-shrink-0 relative">
                        <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div>
                          <h3 className="font-display text-xl sm:text-2xl leading-tight mb-2 pr-6">{item.name}</h3>
                        </div>
                        <div className="flex justify-between items-end sm:items-center mt-2 flex-col sm:flex-row gap-4 sm:gap-0">
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-border rounded h-10 bg-background mr-auto">
                            <button 
                              className="px-3 font-display text-lg hover:text-primary transition-colors h-full"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="font-body text-sm w-6 text-center">{item.quantity}</span>
                            <button 
                              className="px-3 font-display text-lg hover:text-primary transition-colors h-full"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          
                          <div className="flex items-center gap-6 self-end sm:self-auto">
                            <span className="font-display text-xl sm:text-2xl">${item.price * item.quantity}</span>
                            <button onClick={() => removeItem(item.id)} className="text-muted-foreground w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary transition-colors" title="Remove Item">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-4">
                    <Link to="/shop" className="inline-flex text-muted-foreground hover:text-primary transition-colors items-center gap-2 font-body text-sm uppercase tracking-wider">
                       <ChevronLeft size={16} /> Continue Shopping
                    </Link>
                  </div>
                </div>

                <div className="bg-card border border-border p-8 rounded-lg shadow-sm h-fit">
                  <h3 className="font-display text-2xl mb-8 flex justify-between border-b border-border pb-4">
                    <span>Total</span>
                    <span>${cartTotal}</span>
                  </h3>

                  {!isCheckingOut ? (
                    <Button className="w-full h-14 text-lg" onClick={() => setIsCheckingOut(true)}>
                      Proceed to Checkout
                    </Button>
                  ) : (
                    <div className="flex flex-col gap-6 animate-fade-in">
                      <div className="flex items-center">
                        <button 
                          onClick={() => setIsCheckingOut(false)} 
                          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors -ml-1 border border-border px-3 py-1 rounded"
                        >
                          <ChevronLeft size={14} /> Back
                        </button>
                      </div>
                      <h4 className="font-display text-xl">Checkout Details</h4>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded bg-background font-body focus:outline-none focus:border-primary transition-colors"
                      />
                      <input
                        type="tel"
                        name="number"
                        placeholder="Phone Number"
                        value={formData.number}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded bg-background font-body focus:outline-none focus:border-primary transition-colors"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded bg-background font-body focus:outline-none focus:border-primary transition-colors"
                      />
                      <input
                        type="text"
                        name="address"
                        placeholder="Delivery Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded bg-background font-body focus:outline-none focus:border-primary transition-colors"
                      />
                      
                      {isFormValid ? (
                        <Button className="w-full h-14 text-lg mt-2 bg-green-600 hover:bg-green-700 text-white shadow-lg" onClick={handleCheckout}>
                          Complete Order
                        </Button>
                      ) : (
                        <div className="text-center font-body text-xs text-muted-foreground mt-2 bg-secondary/50 p-2 rounded">
                          Please fill in all details to continue.
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
            
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Cart;
