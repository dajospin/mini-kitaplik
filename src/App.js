import React from 'react';
import './App.css';
import AramaCubugu from './components/AramaCubugu';
import KategoriFiltre from './components/KategoriFiltre';
import KitapListe from './components/KitapListe';
import FavoriPaneli from './components/FavoriPaneli';

const kitaplar = [
  { id: 1, baslik: "React'e Giriş", yazar: "D. Usta", kategori: "Web" },
  { id: 2, baslik: "İleri JavaScript", yazar: "S. Kılıç", kategori: "Web" },
  { id: 3, baslik: "Veri Yapıları", yazar: "A. Demir", kategori: "CS" },
  { id: 4, baslik: "Algoritmalar", yazar: "E. Kaya", kategori: "CS" },
  { id: 5, baslik: "UI/UX Temelleri", yazar: "N. Akın", kategori: "Tasarım" }
];

function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem('aranan') || ''
  );
  const [kategori, setKategori] = React.useState('Tümü');
  const [favoriler, setFavoriler] = React.useState(
    JSON.parse(localStorage.getItem('favoriler')) || []
  );

  // Side effect for search text
  React.useEffect(() => {
    localStorage.setItem('aranan', aramaMetni);
  }, [aramaMetni]);

  // Side effect for favorites
  React.useEffect(() => {
    localStorage.setItem('favoriler', JSON.stringify(favoriler));
  }, [favoriler]);

  // Filter books based on search and category
  const filtrelenmisKitaplar = kitaplar.filter((kitap) => {
    const aramaKosulu = kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
                       kitap.yazar.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriKosulu = kategori === 'Tümü' || kitap.kategori === kategori;
    return aramaKosulu && kategoriKosulu;
  });

  const handleSearch = (event) => {
    setAramaMetni(event.target.value);
  };

  const handleKategoriChange = (event) => {
    setKategori(event.target.value);
  };

  const handleFavoriToggle = (kitapId) => {
    if (favoriler.includes(kitapId)) {
      setFavoriler(favoriler.filter(id => id !== kitapId));
    } else {
      setFavoriler([...favoriler, kitapId]);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Mini Kitaplık</h1>
      </header>
      
      <div className="app-content">
        <div className="filtreler">
          <AramaCubugu aramaMetni={aramaMetni} onSearch={handleSearch} />
          <KategoriFiltre kategori={kategori} onKategoriChange={handleKategoriChange} />
        </div>
        
        <div className="main-content">
          <KitapListe 
            kitaplar={filtrelenmisKitaplar} 
            favoriler={favoriler}
            onFavoriToggle={handleFavoriToggle}
          />
          
          <FavoriPaneli 
            favoriler={favoriler}
            kitaplar={kitaplar}
            onFavoriToggle={handleFavoriToggle}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
