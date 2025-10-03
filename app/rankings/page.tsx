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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tennis Rankings
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Last updated: 10/01/2025 <br />
            Below are the current Glicko-2 ratings (minimum 15 matches played in 2025)
          </p>
          
          {/* Surface Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {[
              { key: 'overall', label: 'Overall', icon: '🏆' },
              { key: 'hard', label: 'Hard Court', icon: '🏟️' },
              { key: 'clay', label: 'Clay Court', icon: '🏖️' },
              { key: 'grass', label: 'Grass Court', icon: '🌱' }
            ].map((surface) => (
              <button
                key={surface.key}
                onClick={() => setActiveSurface(surface.key as any)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSurface === surface.key
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 border border-gray-200 dark:border-gray-600'
                }`}
              >
                <span className="mr-2">{surface.icon}</span>
                {surface.label}
              </button>
            ))}
          </div>
          
          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'rank' | 'rating' | 'RD')}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500"
              >
                <option value="rank">Sort by Rank</option>
                <option value="rating">Sort by Rating</option>
                <option value="RD">Sort by RD</option>
              </select>
              
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-2 focus:ring-green-500"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
        </div>

        {/* Rankings Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th 
                    className="w-16 px-4 py-4 text-center font-semibold cursor-pointer hover:bg-green-700 transition-colors"
                    onClick={() => handleSort('rank')}
                  >
                    Rank {sortBy === 'rank' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="w-48 px-4 py-4 text-left font-semibold">Player</th>
                  <th className="w-24 px-4 py-4 text-center font-semibold">Nationality</th>
                  <th 
                    className="w-24 px-4 py-4 text-center font-semibold cursor-pointer hover:bg-green-700 transition-colors"
                    onClick={() => handleSort('rating')}
                  >
                    Rating {sortBy === 'rating' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th 
                    className="w-20 px-4 py-4 text-center font-semibold cursor-pointer hover:bg-green-700 transition-colors"
                    onClick={() => handleSort('RD')}
                  >
                    RD {sortBy === 'RD' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedPlayers.map((player, index) => (
                  <tr 
                    key={player.rank} 
                    className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'
                    }`}
                  >
                    <td className="px-4 py-4 text-center font-semibold text-gray-900 dark:text-white">
                      {player.rank}
                    </td>
                    <td className="px-4 py-4 text-gray-900 dark:text-white font-medium truncate">
                      {player.name}
                    </td>
                    <td className="px-4 py-4 text-center text-gray-600 dark:text-gray-300">
                      <span className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {player.nationality}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center text-gray-900 dark:text-white">
                      <span className="font-mono text-lg font-semibold text-green-600 dark:text-green-400">
                        {player.rating.toFixed(1)}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center text-gray-600 dark:text-gray-300">
                      <span className="font-mono">
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
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {players.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Total Players</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {players.length > 0 ? players[0].rating.toFixed(1) : '0'}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Highest Rating</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {players.length > 0 ? (players.reduce((sum, p) => sum + p.rating, 0) / players.length).toFixed(1) : '0'}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Average Rating</div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
