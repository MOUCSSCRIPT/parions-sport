import React, { useState } from 'react';

// Mock data for football matches
const mockMatches = [
  { id: 1, home: "Real Madrid", away: "CF Pachuca", homeOdds: "1", drawOdds: "N", awayOdds: "2" },
  { id: 2, home: "Juventus Turin", away: "Wydad", homeOdds: "1", drawOdds: "N", awayOdds: "2" },
  { id: 3, home: "Danemark(2)", away: "France(2)", homeOdds: "1", drawOdds: "N", awayOdds: "2" },
  { id: 4, home: "Allemagne(2)", away: "Italie(2)", homeOdds: "1", drawOdds: "N", awayOdds: "2" },
  { id: 5, home: "Viking FK", away: "Fredrikstad", homeOdds: "1", drawOdds: "N", awayOdds: "2" },
  { id: 6, home: "Hamkam", away: "Tromsø", homeOdds: "1", drawOdds: "N", awayOdds: "2" },
  { id: 7, home: "Kristiansund", away: "Rosenborg", homeOdds: "1", drawOdds: "N", awayOdds: "2" },
  { id: 8, home: "Barcelona", away: "Atletico Madrid", homeOdds: "1", drawOdds: "N", awayOdds: "2" },
  { id: 9, home: "Liverpool", away: "Manchester City", homeOdds: "1", drawOdds: "N", awayOdds: "2" },
  { id: 10, home: "PSG", away: "AS Monaco", homeOdds: "1", drawOdds: "N", awayOdds: "2" },
  { id: 11, home: "Bayern Munich", away: "Borussia Dortmund", homeOdds: "1", drawOdds: "N", awayOdds: "2" },
  { id: 12, home: "AC Milan", away: "Inter Milan", homeOdds: "1", drawOdds: "N", awayOdds: "2" },
  { id: 13, home: "Ajax", away: "PSV Eindhoven", homeOdds: "1", drawOdds: "N", awayOdds: "2" },
  { id: 14, home: "Benfica", away: "FC Porto", homeOdds: "1", drawOdds: "N", awayOdds: "2" },
  { id: 15, home: "Arsenal", away: "Chelsea", homeOdds: "1", drawOdds: "N", awayOdds: "2" }
];

// Header Component
export const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-3 px-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1646830662982-8b05d40d9375?w=40&h=40&fit=crop" 
              alt="ParionsSport" 
              className="w-8 h-8 rounded mr-2"
            />
            <span className="text-xl font-bold">PARIONS SPORT</span>
            <span className="ml-2 text-sm bg-white text-blue-900 px-2 py-1 rounded">POINT DE VENTE</span>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:text-gray-200">PARIS OUVERTS</a>
          <a href="#" className="hover:text-gray-200">COTES BOOSTÉES</a>
          <a href="#" className="hover:text-gray-200">LOTO SPORTS</a>
          <a href="#" className="hover:text-gray-200">RÉSULTATS</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="text-sm bg-gray-200 text-blue-900 px-3 py-1 rounded hover:bg-gray-300">
            Besoin d'aide ?
          </button>
        </div>
      </div>
    </header>
  );
};

// Left Sidebar Component
export const LeftSidebar = () => {
  return (
    <div className="bg-gray-100 w-64 p-4">
      <h3 className="font-bold text-blue-900 mb-4">GRILLES OUVERTES</h3>
      
      <div className="space-y-3">
        <div className="bg-green-500 text-white p-3 rounded cursor-pointer hover:bg-green-600">
          <div className="flex items-center">
            <span className="text-lg font-bold mr-2">🏆</span>
            <div>
              <div className="font-bold">LOTO FOOT 15</div>
              <div className="text-xs">1ER 15 N°60 Fin de valid 22H05 MFIDS</div>
            </div>
          </div>
        </div>

        <div className="bg-green-400 text-white p-3 rounded cursor-pointer hover:bg-green-500">
          <div className="flex items-center">
            <span className="text-lg font-bold mr-2">🏆</span>
            <div>
              <div className="font-bold">LOTO FOOT 12</div>
              <div className="text-xs">JACKPOT 200 000 €</div>
            </div>
          </div>
        </div>

        <div className="bg-green-300 text-white p-3 rounded cursor-pointer hover:bg-green-400">
          <div className="flex items-center">
            <span className="text-lg font-bold mr-2">🏆</span>
            <div>
              <div className="font-bold">LOTO FOOT 8</div>
              <div className="text-xs">JACKPOT 750 000 €</div>
            </div>
          </div>
        </div>

        <div className="bg-green-200 text-gray-800 p-3 rounded cursor-pointer hover:bg-green-300">
          <div className="flex items-center">
            <span className="text-lg font-bold mr-2">🏆</span>
            <div>
              <div className="font-bold">LOTO FOOT 7</div>
              <div className="text-xs">1ER 7 N°83 Fin de valid 23H05 SFIDS</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-bold text-blue-900 mb-4">PROCHAINES GRILLES</h3>
        <div className="space-y-2">
          {Array.from({length: 8}, (_, i) => (
            <div key={i} className="bg-white border p-2 rounded text-center text-blue-900 font-bold cursor-pointer hover:bg-gray-50">
              {i + 9}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Right Sidebar Component
export const RightSidebar = () => {
  return (
    <div className="bg-gray-100 w-80 p-4">
      <div className="flex mb-4">
        <button className="flex-1 bg-white border-2 border-blue-900 text-blue-900 py-2 px-4 rounded-l font-bold">
          📄 Mon Panier
        </button>
        <button className="flex-1 bg-blue-900 text-white py-2 px-4 rounded-r font-bold">
          🔧 Mes QR codes
        </button>
      </div>

      <div className="bg-blue-900 text-white p-4 rounded mb-4">
        <h3 className="font-bold mb-2">MES SÉLECTIONS</h3>
        <div className="bg-white text-blue-900 p-3 rounded">
          <div className="flex items-center">
            <span className="mr-2">📋</span>
            <div>
              <div className="font-bold">Votre panier est vide</div>
              <div className="text-sm">Sélectionnez au moins un pronostic pour pouvoir valider.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-white p-4 rounded">
        <h3 className="font-bold mb-3">🚀 COTES BOOSTÉES</h3>
        <div className="text-sm mb-3">Sélectionnez au moins une cote boostée</div>
        
        <div className="bg-gray-800 p-3 rounded text-xs">
          <p className="mb-2">
            Les gains sont déjà majorés lors de validations et peuvent subir, après rédaction sur un seul et même support, des variations d'exposition lorsque les gains potentiels de récupérer cette grille.
          </p>
          <p>
            Les paris susceptibles d'annuler de la journée du tirage d'une combinaison ont un dix jours.
          </p>
        </div>
      </div>
    </div>
  );
};

// Match Row Component
export const MatchRow = ({ match, index, selectedPredictions, onPredictionChange }) => {
  const handlePredictionClick = (prediction) => {
    onPredictionChange(match.id, prediction);
  };

  const isSelected = (prediction) => {
    return selectedPredictions[match.id] === prediction;
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-3 px-4 text-center font-bold text-blue-900 bg-blue-100">
        {index + 1}
      </td>
      <td className="py-3 px-6">
        <div className="font-semibold">{match.home}</div>
        <div className="text-sm text-gray-600">vs</div>
        <div className="font-semibold">{match.away}</div>
      </td>
      <td className="py-3 px-4 text-center">
        <button
          onClick={() => handlePredictionClick('1')}
          className={`w-10 h-10 rounded border-2 font-bold ${
            isSelected('1')
              ? 'bg-blue-900 text-white border-blue-900'
              : 'bg-white text-blue-900 border-blue-900 hover:bg-blue-50'
          }`}
        >
          1
        </button>
      </td>
      <td className="py-3 px-4 text-center">
        <button
          onClick={() => handlePredictionClick('N')}
          className={`w-10 h-10 rounded border-2 font-bold ${
            isSelected('N')
              ? 'bg-blue-900 text-white border-blue-900'
              : 'bg-white text-blue-900 border-blue-900 hover:bg-blue-50'
          }`}
        >
          N
        </button>
      </td>
      <td className="py-3 px-4 text-center">
        <button
          onClick={() => handlePredictionClick('2')}
          className={`w-10 h-10 rounded border-2 font-bold ${
            isSelected('2')
              ? 'bg-blue-900 text-white border-blue-900'
              : 'bg-white text-blue-900 border-blue-900 hover:bg-blue-50'
          }`}
        >
          2
        </button>
      </td>
    </tr>
  );
};

// Main Grid Component
export const LotoFootGrid = () => {
  const [selectedPredictions, setSelectedPredictions] = useState({});
  const [showModal, setShowModal] = useState(true);

  const handlePredictionChange = (matchId, prediction) => {
    setSelectedPredictions(prev => ({
      ...prev,
      [matchId]: prev[matchId] === prediction ? null : prediction
    }));
  };

  const getGridCost = () => {
    const selectedCount = Object.keys(selectedPredictions).length;
    return selectedCount > 0 ? `${selectedCount} € minimum` : '1 €';
  };

  return (
    <div className="bg-white p-6">
      {/* Header */}
      <div className="mb-6">
        <nav className="text-sm text-gray-600 mb-4">
          <span>Parions Sport Point de Vente</span>
          <span className="mx-2">{'>'}</span>
          <span>Loto Sports</span>
          <span className="mx-2">{'>'}</span>
          <span>Loto Foot</span>
          <span className="mx-2">{'>'}</span>
          <span className="text-blue-900 font-semibold">Loto Foot 15</span>
        </nav>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">LOTO FOOT 15 N°60</h1>
            <p className="text-gray-600">Fin de validité 22h05 MFIDS</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg">Grille :</span>
              <div className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <button className="text-blue-900 hover:text-blue-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Table */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p className="text-sm text-center mb-4">Loto Foot 15 N°60</p>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-center font-bold">#</th>
                <th className="py-3 px-6 text-left font-bold">Matchs</th>
                <th className="py-3 px-4 text-center font-bold">1</th>
                <th className="py-3 px-4 text-center font-bold">N</th>
                <th className="py-3 px-4 text-center font-bold">2</th>
              </tr>
            </thead>
            <tbody>
              {mockMatches.map((match, index) => (
                <MatchRow
                  key={match.id}
                  match={match}
                  index={index}
                  selectedPredictions={selectedPredictions}
                  onPredictionChange={handlePredictionChange}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Validate Button */}
      <div className="text-center">
        <button className="bg-gray-400 text-white py-3 px-8 rounded-lg font-bold text-lg hover:bg-gray-500 disabled:opacity-50">
          VALIDER MA GRILLE
        </button>
        <p className="text-sm text-gray-600 mt-2">
          Coût: {getGridCost()}
        </p>
      </div>

      {/* Info Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded">
        <h3 className="font-bold mb-2">Loto Foot 15 - Grille N°60 en savoir plus</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p>Grille participante à la grille Loto Foot 15 - Grille N°60 comprenant 15 matchs de :</p>
          <p>Copa America</p>
          <p>Championnat de Norvège</p>
          <p>FIFA U20</p>
          <p>Euro U21</p>
          <p>Championship Norvège</p>
          <p>Coupe FI</p>
        </div>
      </div>

      {/* Links Section */}
      <div className="mt-6">
        <h3 className="font-bold mb-3">LIENS UTILES :</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#" className="text-blue-900 hover:underline">Résultats Loto Foot ?</a>
          <a href="#" className="text-blue-900 hover:underline">Prochaines grilles Loto Foot ?</a>
          <a href="#" className="text-blue-900 hover:underline">Comment jouer au Loto Foot ?</a>
        </div>
      </div>

      {/* Cookie Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md mx-4">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1657868203197-627e5ab86e19?w=40&h=40&fit=crop" 
                alt="ParionsSport" 
                className="w-10 h-10 mr-3"
              />
              <h3 className="font-bold">PARIONS SPORT</h3>
            </div>
            
            <h4 className="font-bold mb-3">Bénéficiez d'une expérience Parions Sport Point de Vente enrichie !</h4>
            
            <div className="text-sm text-gray-700 mb-4">
              <p className="mb-2">Bienvenue sur Parions Sport Point de Vente !</p>
              <p className="mb-2">
                Nous utilisons des cookies en collaboration avec nos partenaires lorsque vous
                parcourez notre site. Ces cookies nous permettent de le faire fonctionner et de vous
                proposer des contenus, des services et des publicités adaptés à vos centres d'intérêt.
              </p>
              
              <ul className="list-disc list-inside mb-2 text-xs">
                <li>Mesure d'audience et amélioration des contenus</li>
                <li>Personnalisation de l'expérience Parions Sport Point de Vente</li>
                <li>Optimisation de la publicité</li>
              </ul>
              
              <p className="text-xs">
                Vous pouvez dès maintenant paramétrer vos cookies selon vos but, ou accepter ou
                refuser l'ensemble. L'utilisation de Parions Sport Point de cookies sur notre
                site vous permet également de modifier vos choix à tout moment.
              </p>
              
              <p className="text-xs mt-2">
                Consultez la <a href="#" className="text-blue-900 underline">Charte Vie Privée</a> de Parions Sport Point de Vente
              </p>
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
              >
                JE PARAMÈTRE
              </button>
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800"
              >
                J'ACCEPTE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};