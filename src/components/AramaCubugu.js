import React from 'react';

function AramaCubugu({ aramaMetni, onSearch }) {
  return (
    <div className="arama-cubugu">
      <input
        type="text"
        placeholder="Başlık veya yazar ara..."
        value={aramaMetni}
        onChange={onSearch}
        className="arama-input"
      />
    </div>
  );
}

export default AramaCubugu;