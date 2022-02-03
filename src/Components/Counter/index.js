import React, { useState, useEffect } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div>
      <p>Contador: {count} hits</p>
      <button onClick={() => setCount(count + 1)}>
        Adicionar
      </button>

      <button onClick={() => setCount(count - 1)}>
        Subtrair
      </button>
    </div>
  );
}