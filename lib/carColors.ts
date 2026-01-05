// BMW Color Configuration System
// Maps BMW color codes to actual color names and hex values

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  border: string;
  imagePath: string;
}

export type SeriesType = 'i4' | 'i5-sedan' | 'i5-touring' | 'i7' | 'ix' | 'ix1' | 'ix3';

// BMW Color Code to Color Name and Hex Mapping
const BMW_COLORS: Record<string, { name: string; hex: string; border: string }> = {
  // i4 Series - Named Colors
  'Aventurine Red metallic': {
    name: 'Aventurine Red Metallic',
    hex: '#8B1A1A',
    border: '#6B0F0F',
  },
  'Black Sapphire': {
    name: 'Black Sapphire',
    hex: '#0A0A0A',
    border: '#000000',
  },
  'Mineral White': {
    name: 'Mineral White',
    hex: '#F5F5F5',
    border: '#D1D1D1',
  },
  'Sanremo Green': {
    name: 'Sanremo Green',
    hex: '#2D5016',
    border: '#1F3810',
  },
  
  // BMW Paint Codes
  'P0416': {
    name: 'Carbon Black Metallic',
    hex: '#1A1A1A',
    border: '#0A0A0A',
  },
  'P0475': {
    name: 'Alpine White',
    hex: '#FFFFFF',
    border: '#E0E0E0',
  },
  'P0A90': {
    name: 'Skyscraper Grey Metallic',
    hex: '#6B7280',
    border: '#4B5563',
  },
  'P0A96': {
    name: 'Mineral White Metallic',
    hex: '#F8F9FA',
    border: '#D1D5DB',
  },
  'P0C1M': {
    name: 'Portimao Blue Metallic',
    hex: '#1E40AF',
    border: '#1E3A8A',
  },
  'P0C4A': {
    name: 'Tanzanite Blue Metallic',
    hex: '#1E3A8A',
    border: '#1E293B',
  },
  'P0C4A (1)': {
    name: 'Tanzanite Blue Metallic',
    hex: '#1E3A8A',
    border: '#1E293B',
  },
  'P0C4P': {
    name: 'Storm Bay Metallic',
    hex: '#475569',
    border: '#334155',
  },
  'P0C5Y': {
    name: 'Aventurine Red Metallic',
    hex: '#991B1B',
    border: '#7F1D1D',
  },
  'P0300': {
    name: 'Black Sapphire Metallic',
    hex: '#0F172A',
    border: '#020617',
  },
  'P0C4F': {
    name: 'Sophisto Grey Brilliant Effect',
    hex: '#71717A',
    border: '#52525B',
  },
  'P0C57': {
    name: 'Oxide Grey Metallic',
    hex: '#52525B',
    border: '#3F3F46',
  },
  'P0C7A': {
    name: 'Space Grey Metallic',
    hex: '#3F3F46',
    border: '#27272A',
  },
  'P0C31': {
    name: 'Phytonic Blue Metallic',
    hex: '#1E40AF',
    border: '#1E3A8A',
  },
  'P0C67': {
    name: 'Brooklyn Grey Metallic',
    hex: '#64748B',
    border: '#475569',
  },
};

// Series-specific color configurations
const SERIES_COLORS: Record<SeriesType, string[]> = {
  'i4': [
    'Aventurine Red metallic',
    'Black Sapphire',
    'Mineral White',
    'Sanremo Green',
  ],
  'i5-sedan': [
    'P0416',
    'P0475',
    'P0A90',
    'P0A96',
    'P0C1M',
    'P0C4A',
    'P0C4P',
    'P0C5Y',
  ],
  'i5-touring': [
    'P0416',
    'P0475',
    'P0A90',
    'P0A96',
    'P0C4A',
    'P0C4P',
    'P0C5Y',
  ],
  'i7': [
    'P0416',
    'P0475',
    'P0A90',
    'P0A96',
    'P0C1M',
    'P0C4A (1)',
    'P0C4P',
    'P0C5Y',
  ],
  'ix': [
    'P0300',
    'P0475',
    'P0A96',
    'P0C4F',
    'P0C57',
    'P0C7A',
  ],
  'ix1': [
    'P0300',
    'P0475',
    'P0A96',
    'P0C31',
    'P0C5Y',
    'P0C67',
  ],
  'ix3': [], // Empty - no images available
};

/**
 * Get color options for a specific BMW series
 * @param series - The BMW series identifier
 * @returns Array of color options with image paths
 */
export function getSeriesColors(series: SeriesType): ColorOption[] {
  const colorCodes = SERIES_COLORS[series];
  
  if (!colorCodes || colorCodes.length === 0) {
    // Fallback for series with no images
    return [];
  }

  const seriesPath = series.startsWith('ix') ? 'ix-series' : 'i-series';
  
  return colorCodes.map((colorCode) => {
    const colorInfo = BMW_COLORS[colorCode];
    
    // Generate image path based on series and color code
    const imagePath = `/${seriesPath}/${series}/${colorCode}.png`;
    
    // Create a safe ID from the color code
    const id = colorCode.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
    
    return {
      id,
      name: colorInfo.name,
      hex: colorInfo.hex,
      border: colorInfo.border,
      imagePath,
    };
  });
}

/**
 * Get all available series
 */
export function getAvailableSeries(): SeriesType[] {
  return Object.keys(SERIES_COLORS).filter(
    (series) => SERIES_COLORS[series as SeriesType].length > 0
  ) as SeriesType[];
}

/**
 * Get display name for a series
 */
export function getSeriesDisplayName(series: SeriesType): string {
  const displayNames: Record<SeriesType, string> = {
    'i4': 'BMW i4',
    'i5-sedan': 'BMW i5 Sedan',
    'i5-touring': 'BMW i5 Touring',
    'i7': 'BMW i7',
    'ix': 'BMW iX',
    'ix1': 'BMW iX1',
    'ix3': 'BMW iX3',
  };
  
  return displayNames[series] || series.toUpperCase();
}
