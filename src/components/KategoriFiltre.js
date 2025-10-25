import React from 'react';

function KategoriFiltre({ kategori, onKategoriChange }) {
  return (
    <div className="kategori-filtre">
      <select value={kategori} onChange={onKategoriChange} className="kategori-select">
        <option value="Tümü">Tüm Kategoriler</option>
        <option value="Web">Web</option>
        <option value="CS">CS</option>
        <option value="Tasarım">Tasarım</option>
      </select>
    </div>
  );
}

export default KategoriFiltre;