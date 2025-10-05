'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

interface Player {
  rank: number;
  name: string;
  nationality: string;
  rating: number;
  RD: number;
}

export default function Rankings() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'rank' | 'rating' | 'RD'>('rank');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [activeSurface, setActiveSurface] = useState<'overall' | 'hard' | 'clay' | 'grass'>('overall');

  useEffect(() => {
    const loadRankings = async () => {
      try {
        const filename = activeSurface === 'overall' ? 'ratings.csv' : `${activeSurface}_ratings.csv`;
        const response = await fetch(`/${filename}`);
        if (!response.ok) {
          throw new Error('Failed to load rankings');
        }
        const csvText = await response.text();
        const lines = csvText.split('\n').filter(line => line.trim());
        
        const data: Player[] = lines.slice(1) // Skip header
          .map(line => {
            const values = line.split(',');
            return {
              rank: parseInt(values[0]) || 0,
              name: values[1] || '',
              nationality: values[2] || '',
              rating: parseFloat(values[3]) || 0,
              RD: parseFloat(values[4]) || 0
            };
          })
          .filter(player => player.name); // Filter out empty rows
        
        setPlayers(data);
      } catch (error) {
        console.error('Error loading rankings:', error);
        // Fallback data for development
        setPlayers([
          { rank: 1, name: 'Jannik Sinner', nationality: 'ITA', rating: 2090.3, RD: 72.9 },
          { rank: 2, name: 'Carlos Alcaraz', nationality: 'ESP', rating: 2059.9, RD: 64.9 },
          { rank: 3, name: 'Novak Djokovic', nationality: 'SRB', rating: 1929.5, RD: 73.7 },
          { rank: 4, name: 'Jack Draper', nationality: 'GBR', rating: 1825.8, RD: 72.1 },
          { rank: 5, name: 'Taylor Fritz', nationality: 'USA', rating: 1800.5, RD: 57.8 }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadRankings();
  }, [activeSurface]);

  const filteredAndSortedPlayers = players
    .filter(player => 
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortOrder === 'desc') {
        return bValue > aValue ? 1 : -1;
      }
      return aValue > bValue ? 1 : -1;
    });

  const handleSort = (column: 'rank' | 'rating' | 'RD') => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading rankings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs sm:text-sm font-medium">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live Rankings
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-blue-800 dark:from-white dark:via-green-300 dark:to-blue-300 bg-clip-text text-transparent leading-tight">
              Tennis Rankings
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Last updated: 10/01/2025 <br />
              Below are the current Glicko-2 ratings (minimum 15 matches played in 2025)
            </p>
          </div>
          
          {/* Surface Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {[
              { key: 'overall', label: 'Overall', icon: '🏆', color: 'from-yellow-500 to-orange-500' },
              { key: 'hard', label: 'Hard Court', icon: '🏟️', color: 'from-blue-500 to-cyan-500' },
              { key: 'clay', label: 'Clay Court', icon: '🏖️', color: 'from-orange-500 to-red-500' },
              { key: 'grass', label: 'Grass Court', icon: '🌱', color: 'from-green-500 to-emerald-500' }
            ].map((surface) => (
              <button
                key={surface.key}
                onClick={() => setActiveSurface(surface.key as any)}
                className={`group relative overflow-hidden px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeSurface === surface.key
                    ? `bg-gradient-to-r ${surface.color} text-white shadow-lg shadow-${surface.color.split('-')[1]}-500/25 transform scale-105`
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
                    {surface.icon}
                  </span>
                  <span className="hidden sm:inline">{surface.label}</span>
                  <span className="sm:hidden">{surface.label.split(' ')[0]}</span>
                </div>
                {activeSurface === surface.key && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-6 sm:mb-8">
            <div className="relative group w-full sm:w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg sm:rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <input
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="relative w-full sm:w-64 px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg sm:rounded-xl bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500/50 focus:border-transparent backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
              />
            </div>
            
            <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'rank' | 'rating' | 'RD')}
                className="flex-1 sm:flex-none px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg sm:rounded-xl bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500/50 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
              >
                <option value="rank">Sort by Rank</option>
                <option value="rating">Sort by Rating</option>
                <option value="RD">Sort by RD</option>
              </select>
              
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg sm:rounded-xl bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-2 focus:ring-green-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <span className="text-base sm:text-lg">{sortOrder === 'asc' ? '↑' : '↓'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Rankings Table */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <tr>
                  <th 
                    className="w-12 sm:w-16 px-2 sm:px-4 py-3 sm:py-6 text-center font-bold cursor-pointer hover:bg-green-700/80 transition-all duration-300 group text-xs sm:text-sm"
                    onClick={() => handleSort('rank')}
                  >
                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                      <span>Rank</span>
                      {sortBy === 'rank' && (
                        <span className="text-green-200 group-hover:text-white transition-colors text-xs sm:text-sm">
                          {sortOrder === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th className="w-32 sm:w-48 px-2 sm:px-4 py-3 sm:py-6 text-left font-bold text-xs sm:text-sm">Player</th>
                  <th className="w-16 sm:w-24 px-2 sm:px-4 py-3 sm:py-6 text-center font-bold text-xs sm:text-sm">Nation</th>
                  <th 
                    className="w-20 sm:w-24 px-2 sm:px-4 py-3 sm:py-6 text-center font-bold cursor-pointer hover:bg-green-700/80 transition-all duration-300 group text-xs sm:text-sm"
                    onClick={() => handleSort('rating')}
                  >
                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                      <span>Rating</span>
                      {sortBy === 'rating' && (
                        <span className="text-green-200 group-hover:text-white transition-colors text-xs sm:text-sm">
                          {sortOrder === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="w-16 sm:w-20 px-2 sm:px-4 py-3 sm:py-6 text-center font-bold cursor-pointer hover:bg-green-700/80 transition-all duration-300 group text-xs sm:text-sm"
                    onClick={() => handleSort('RD')}
                  >
                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                      <span>RD</span>
                      {sortBy === 'RD' && (
                        <span className="text-green-200 group-hover:text-white transition-colors text-xs sm:text-sm">
                          {sortOrder === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedPlayers.map((player, index) => (
                  <tr 
                    key={player.rank} 
                    className={`group border-b border-gray-200/50 dark:border-gray-700/50 hover:bg-gradient-to-r hover:from-green-50/50 hover:to-blue-50/50 dark:hover:from-green-900/20 dark:hover:to-blue-900/20 transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-white/50 dark:bg-gray-800/50' : 'bg-gray-50/50 dark:bg-gray-700/50'
                    }`}
                  >
                    <td className="px-2 sm:px-4 py-3 sm:py-6 text-center">
                      <div className="flex items-center justify-center">
                        <span className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                          {player.rank}
                        </span>
                        {player.rank <= 3 && (
                          <span className="ml-1 sm:ml-2 text-sm sm:text-lg">
                            {player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : '🥉'}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 py-3 sm:py-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                          {player.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <span className="text-gray-900 dark:text-white font-semibold truncate text-sm sm:text-base group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                          {player.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 py-3 sm:py-6 text-center">
                      <span className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-md sm:rounded-lg font-mono text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-600">
                        {player.nationality}
                      </span>
                    </td>
                    <td className="px-2 sm:px-4 py-3 sm:py-6 text-center">
                      <div className="flex items-center justify-center gap-1 sm:gap-2">
                        <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                          {player.rating.toFixed(1)}
                        </span>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full opacity-60"></div>
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 py-3 sm:py-6 text-center">
                      <span className="text-sm sm:text-lg font-mono text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg">
                        {player.RD.toFixed(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-lg sm:text-2xl">👥</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2">
              {players.length}
            </div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">Total Players</div>
          </div>
          <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-lg sm:text-2xl">🏆</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
              {players.length > 0 ? players[0].rating.toFixed(1) : '0'}
            </div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">Highest Rating</div>
          </div>
          <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-lg sm:text-2xl">📊</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1 sm:mb-2">
              {players.length > 0 ? (players.reduce((sum, p) => sum + p.rating, 0) / players.length).toFixed(1) : '0'}
            </div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">Average Rating</div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="/"
            className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl sm:rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="text-lg sm:text-xl group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span>Back to Home</span>
          </a>
        </div>
      </div>
    </div>
  );
}
