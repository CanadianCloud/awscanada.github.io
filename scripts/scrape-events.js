/**
 * Luma Events Scraper
 * 
 * This script fetches events from the Luma CloudCanada calendar
 * and saves them to events.json for the website to display.
 * 
 * Usage: npm run scrape-events
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Luma API configuration
// Calendar API ID found from: https://luma.com/CloudCanada
const LUMA_CALENDAR_API_ID = 'cal-eRivKmWDsR2bxYq';
const LUMA_API_URL = `https://api2.luma.com/calendar/get-items?calendar_api_id=${LUMA_CALENDAR_API_ID}&pagination_limit=50&period=future`;

// Output file path
const OUTPUT_FILE = path.join(__dirname, '..', 'events.json');

/**
 * Formats an ISO date string to a readable format
 * @param {string} isoDate - ISO date string
 * @returns {string} Formatted date like "Jan 23, 2026"
 */
function formatDate(isoDate) {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Formats time from ISO date string
 * @param {string} isoDate - ISO date string
 * @returns {string} Formatted time like "7:00 PM"
 */
function formatTime(isoDate) {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

/**
 * Transforms Luma event data to our app's format
 * @param {object} entry - Luma API entry
 * @returns {object} Transformed event object
 */
function transformEvent(entry) {
  const event = entry.event;
  const geoInfo = event.geo_address_info || {};
  
  return {
    id: event.api_id,
    title: event.name,
    date: formatDate(event.start_at),
    time: formatTime(event.start_at),
    startAt: event.start_at,
    endAt: event.end_at,
    location: geoInfo.place_name || geoInfo.city || 'Online',
    address: geoInfo.full_address || '',
    city: geoInfo.city || '',
    image: event.cover_url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    url: `https://lu.ma/${event.url}`,
    description: event.description_short || '',
    price: event.ticket_info?.price_range || null,
    registrationCount: entry.guest_count || 0,
  };
}

/**
 * Fetches events from Luma API
 * @returns {Promise<Array>} Array of event entries
 */
async function fetchLumaEvents() {
  console.log('🔄 Fetching events from Luma API...');
  console.log(`   URL: ${LUMA_API_URL}`);
  
  const response = await fetch(LUMA_API_URL, {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0 (compatible; AWS-Canada-Events-Scraper/1.0)',
    },
  });
  
  if (!response.ok) {
    throw new Error(`Luma API error: ${response.status} ${response.statusText}`);
  }
  
  const data = await response.json();
  return data.entries || [];
}

/**
 * Main scraping function
 */
async function scrapeEvents() {
  try {
    // Fetch events from Luma
    const entries = await fetchLumaEvents();
    console.log(`✅ Found ${entries.length} upcoming events`);
    
    // Transform events to our format
    const events = entries.map(transformEvent);
    
    // Sort by date (earliest first)
    events.sort((a, b) => new Date(a.startAt) - new Date(b.startAt));
    
    // Log event summaries
    console.log('\n📅 Events:');
    events.forEach((event, index) => {
      console.log(`   ${index + 1}. ${event.title} - ${event.date}`);
    });
    
    // Write to events.json
    const outputJson = JSON.stringify(events, null, 2);
    fs.writeFileSync(OUTPUT_FILE, outputJson);
    console.log(`\n💾 Saved ${events.length} events to ${OUTPUT_FILE}`);
    
    return events;
  } catch (error) {
    console.error('❌ Error scraping events:', error.message);
    process.exit(1);
  }
}

// Run the scraper
scrapeEvents();
