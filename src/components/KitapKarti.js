import React from 'react';

function KitapKarti({ id, baslik, yazar, kategori, favorideMi, onFavoriToggle }) {
  const handleFavoriClick = () => {
    onFavoriToggle(id);
  };

  return (
    <div className="kitap-karti">
      <div className="kitap-bilgisi">
        <h3>{baslik}</h3>
        <p>{yazar} · {kategori}</p>
      </div>
      <button 
        onClick={handleFavoriClick}
        className={`favori-buton ${favorideMi ? 'favori' : ''}`}
      >
        {favorideMi ? 'Favoriden Çıkar' : 'Favoriye Ekle'}
      </button>
    </div>
  );
}

export default KitapKarti;