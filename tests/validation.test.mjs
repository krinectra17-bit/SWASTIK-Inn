import assert from 'node:assert';

// Configuration
const HOTEL = {
  name: 'Swastika Inn',
  officialName: 'Swastika Hotel & Lawn',
  phone: '+91 63935 56011',
  whatsappNumber: '916393556011',
};

function formatDateDisplay(dateStr) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function calcNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;
  const [y1, m1, d1] = checkIn.split('-').map(Number);
  const [y2, m2, d2] = checkOut.split('-').map(Number);
  const a = new Date(y1, m1 - 1, d1).getTime();
  const b = new Date(y2, m2 - 1, d2).getTime();
  return Math.max(0, Math.round((b - a) / 86_400_000));
}

function getRoomLabel(categoryId) {
  switch (categoryId) {
    case 'deluxe-double':
      return 'Deluxe Double Bed AC Room';
    case 'triple-bed':
      return 'Triple Bed AC Room';
    default:
      return categoryId;
  }
}

function buildWhatsAppMessage(data, nights) {
  const roomLabel = getRoomLabel(data.roomCategory);
  const checkInDisplay = formatDateDisplay(data.checkIn);
  const checkOutDisplay = formatDateDisplay(data.checkOut);

  const lines = [
    'Hello Swastika Inn,',
    '',
    'I would like to enquire about a room booking.',
    '',
    `Guest Name: ${data.guestName.trim()}`,
    `Check-in Date: ${checkInDisplay}`,
    `Check-out Date: ${checkOutDisplay}`,
    `Total Nights: ${nights}`,
    `Adults: ${data.adults}`,
    `Children: ${data.children > 0 ? data.children : 'None'}`,
    `Rooms Required: ${data.rooms}`,
    `Preferred Room: ${roomLabel}`,
    `Estimated Arrival: ${data.arrivalTime.trim() || 'Not Specified'}`,
    `Mobile Number: ${data.mobileNumber.trim() || 'Not Provided'}`,
    `Special Requests: ${data.specialRequests.trim() || 'None'}`,
    '',
    'Please confirm room availability and the final price for my selected dates.',
    '',
    'Thank you.',
  ];

  return lines.join('\n');
}

function buildWhatsAppURL(data, nights) {
  const message = buildWhatsAppMessage(data, nights);
  return `https://wa.me/${HOTEL.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

console.log('--- RUNNING AUTOMATED UNIT & INTEGRATION TESTS ---');

// Test 1: Nights calculation
assert.strictEqual(calcNights('2026-11-01', '2026-11-04'), 3, 'Calculates 3 nights correctly');
assert.strictEqual(calcNights('2026-11-01', '2026-11-01'), 0, 'Same day is 0 nights');
assert.strictEqual(calcNights('2026-11-05', '2026-11-01'), 0, 'Reverse dates return 0');
console.log('✓ Test 1: Date calculations passed');

// Test 2: WhatsApp URL generation
const mockData = {
  guestName: 'Ramesh Sharma',
  checkIn: '2026-11-10',
  checkOut: '2026-11-12',
  adults: 2,
  children: 1,
  rooms: 1,
  roomCategory: 'deluxe-double',
  arrivalTime: '14:00',
  mobileNumber: '+91 98765 43210',
  specialRequests: 'Ground floor requested',
};

const nights = calcNights(mockData.checkIn, mockData.checkOut);
assert.strictEqual(nights, 2);

const url = buildWhatsAppURL(mockData, nights);
assert(url.startsWith('https://wa.me/916393556011?text='), 'Correct WhatsApp number in URL');
assert(url.includes(encodeURIComponent('Ramesh Sharma')), 'Contains encoded guest name');
assert(url.includes(encodeURIComponent('Deluxe Double Bed AC Room')), 'Contains room label');
assert(url.includes(encodeURIComponent('Total Nights: 2')), 'Contains nights count');
console.log('✓ Test 2: WhatsApp URL and payload generation passed');

// Test 3: Fallback handling
const mockDataMinimal = {
  guestName: 'Ananya Verma',
  checkIn: '2026-12-01',
  checkOut: '2026-12-02',
  adults: 1,
  children: 0,
  rooms: 1,
  roomCategory: 'triple-bed',
  arrivalTime: '',
  mobileNumber: '',
  specialRequests: '',
};

const msg = buildWhatsAppMessage(mockDataMinimal, 1);
assert(msg.includes('Children: None'), 'Children none fallback');
assert(msg.includes('Estimated Arrival: Not Specified'), 'Arrival fallback');
assert(msg.includes('Mobile Number: Not Provided'), 'Mobile fallback');
assert(msg.includes('Special Requests: None'), 'Special requests fallback');
console.log('✓ Test 3: Empty field fallbacks passed');

console.log('ALL TESTS PASSED SUCCESSFULLY!');
