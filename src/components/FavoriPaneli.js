import React from 'react';

function FavoriPaneli({ favoriler, kitaplar, onFavoriToggle }) {
  const favoriKitaplar = kitaplar.filter(kitap => favoriler.includes(kitap.id));

  return (
    <div className="favori-paneli">
      <h2>Favoriler ({favoriler.length})</h2>
      {favoriKitaplar.length === 0 ? (
        <p>Henüz favori kitap yok.</p>
      ) : (
        <ul className="favori-liste">
          {favoriKitaplar.map((kitap) => (
            <li key={kitap.id} className="favori-oge">
              <span>{kitap.baslik}</span>
              <button 
                onClick={() => onFavoriToggle(kitap.id)}
                className="favori-cikar-buton"
              >
                Kaldır
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriPaneli;