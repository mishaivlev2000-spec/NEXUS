import { useState } from 'react';

export default function MarketplacePage({ products, onRequestQuote }) {
  const [success, setSuccess] = useState('');

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">IT Infrastructure Catalog</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.map((product) => (
          <article key={product.id} className="glass p-4">
            <img src={product.image} alt={product.name} className="h-36 w-full object-cover rounded-lg mb-3" />
            <p className="text-xs text-blue-300">{product.category}</p>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-slate-300">{product.specifications}</p>
            <p className="text-xs text-slate-400 mt-2">Vendor: {product.vendor}</p>
            <button
              className="mt-3 w-full bg-blue-600/80 rounded-lg p-2 text-sm"
              onClick={async () => {
                await onRequestQuote({ productId: product.id, productName: product.name, vendor: product.vendor, qty: 1 });
                setSuccess(`Quote request sent for ${product.name}`);
              }}
            >
              Request Quote
            </button>
          </article>
        ))}
      </div>
      {success && <p className="text-green-400 mt-4">{success}</p>}
    </div>
  );
}
