// src/api/sell.ts

export interface ListingPayload {
  title: string;
  date: string;
  venue: string;
  price: string;
}

export interface ListingResponse {
  id: string;
  title: string;
  date: string;
  venue: string;
  price: string;
}

export async function createListing(payload: ListingPayload): Promise<ListingResponse> {
  const token = localStorage.getItem('token');

  const res = await fetch('/api/sell', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Failed to create listing');
  }

  return res.json();
}
