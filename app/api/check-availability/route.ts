import { NextRequest, NextResponse } from 'next/server';

// Mock database or service for demonstration
const mockDatabase = [
    'Ananthapur road, Bellary', 
    'Cantonment, Bellary',
    'Shastrynagar, Bellary',
    'Veerannagouda colony, Bellary',
    'Belagal Cross, Bellary',
    'Cowl Bazar, Bellary',
     // Popular Residential Colonies
    "Gandhi Nagar",
    "Satya Narayana Pet (SN Pet)",
    "Cowl Bazaar",
    "Indira Nagar",
    "Parvathi Nagar",
    "Havambhavi",
    "BUDA Layout",
    "Ashok Nagar",
    "Kuvempu Nagar",
    "Patel Nagar",
    
    // Historical and Commercial Areas
    "Cantonment",
    "Ibrahimpura",
    "M.M.T.C. Colony",
    'mmtc colony',
    "Guggarahatti",
    "Sidiginamola",
    
    // Other Localities
    "Allipura",
    "Belagal",
    "Sirivaram",
    "Ramanjaneya Nagar",
    "Renuka Nagar",
    "Andralu"
];

export async function POST(req: NextRequest) {
  try {
    const { address }:{ address?: string } = await req.json();

    if (!address) {
      return NextResponse.json({ error: 'Address is required' }, { status: 400 });
    }

    //2. Normalize the search query
    // This removes leading / trailing whitespace and converts to lower 
    const normalizedQuery = address.trim().toLowerCase();
    
    // Simulate database lookup delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const matchingAddresses = mockDatabase.filter(dbAddress => 
        dbAddress.toLowerCase().includes(normalizedQuery)
    );
    // const isAvailable = mockDatabase.includes(query.trim());
    const isAvailable = matchingAddresses.length > 0;

    return NextResponse.json({ 
        isAvailable,
        matches: matchingAddresses,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
