import React from 'react';
import KitapKarti from './KitapKarti';

function KitapListe({ kitaplar, favoriler, onFavoriToggle }) {
  return (
    <div className="kitap-liste">
      <h2>Kitaplar</h2>
      {kitaplar.length === 0 ? (
        <p>Kitap bulunamadı.</p>
      ) : (
        kitaplar.map((kitap) => (
          <KitapKarti
            key={kitap.id}
            {...kitap}
            favorideMi={favoriler.includes(kitap.id)}
            onFavoriToggle={onFavoriToggle}
          />
        ))
      )}
    </div>
  );
}

export default KitapListe;