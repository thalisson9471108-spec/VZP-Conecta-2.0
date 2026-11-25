/*=======================================
   1. DADOS
   ============================================================ */
const DB_CATEGORIES = [
    { id: 1, name: "Alimentação", parent_id: null, icon: "fa-utensils" },
    { id: 2, name: "Lanchonetes", parent_id: 1, icon: "fa-burger" },
    { id: 3, name: "Mercados", parent_id: null, icon: "fa-cart-shopping" },
    { id: 4, name: "Saúde", parent_id: null, icon: "fa-heart-pulse" },
    { id: 5, name: "Clínicas", parent_id: null, icon: "fa-hospital" },
    { id: 7, name: "Farmácias", parent_id: 4, icon: "fa-prescription-bottle-medical" },
    { id: 8, name: "Oficinas", parent_id: null, icon: "fa-wrench" },
    { id: 9, name: "Autopeças", parent_id: null, icon: "fa-gear" },
    { id: 10, name: "Postos", parent_id: null, icon: "fa-gas-pump" },
    { id: 11, name: "Lojas", parent_id: null, icon: "fa-couch" },
    { id: 12, name: "Marcenarias", parent_id: null, icon: "fa-hammer" },
    { id: 13, name: "Hotéis", parent_id: null, icon: "fa-bed" },
    { id: 14, name: "Lazer/Turismo", parent_id: null, icon: "fa-face-smile" },
    { id: 15, name: "Outros", parent_id: null, icon: "fa-ellipsis" }
];

const DEFAULT_HOURS_BY_CATEGORY = {
    2:  { 1: ['11:00','23:00'], 2: ['11:00','23:00'], 3: ['11:00','23:00'], 4: ['11:00','23:00'], 5: ['11:00','23:00'], 6: ['11:00','23:00'], 0: null },
    3:  { 1: ['18:00','23:00'], 2: ['18:00','23:00'], 3: ['18:00','23:00'], 4: ['18:00','23:00'], 5: ['18:00','23:00'], 6: ['18:00','23:00'], 0: null },
    7:  { 1: ['07:00','20:00'], 2: ['07:00','20:00'], 3: ['07:00','20:00'], 4: ['07:00','20:00'], 5: ['07:00','20:00'], 6: ['07:00','20:00'], 0: ['07:00','13:00'] },
    15: { 0: ['00:00','23:59'], 1: ['00:00','23:59'], 2: ['00:00','23:59'], 3: ['00:00','23:59'], 4: ['00:00','23:59'], 5: ['00:00','23:59'], 6: ['00:00','23:59'] },
    16: { 1: ['08:00','18:00'], 2: ['08:00','18:00'], 3: ['08:00','18:00'], 4: ['08:00','18:00'], 5: ['08:00','18:00'], 6: ['08:00','12:00'], 0: null },
    17: { 1: ['08:00','22:00'], 2: ['08:00','22:00'], 3: ['08:00','22:00'], 4: ['08:00','22:00'], 5: ['08:00','22:00'], 6: ['08:00','22:00'], 0: ['08:00','14:00'] },
    20: { 1: ['08:00','18:00'], 2: ['08:00','18:00'], 3: ['08:00','18:00'], 4: ['08:00','18:00'], 5: ['08:00','18:00'], 6: ['08:00','12:00'], 0: null },
    21: { 1: ['08:00','18:00'], 2: ['08:00','18:00'], 3: ['08:00','18:00'], 4: ['08:00','18:00'], 5: ['08:00','18:00'], 6: ['08:00','12:00'], 0: null },
    24: { 0: ['00:00','23:59'], 1: ['00:00','23:59'], 2: ['00:00','23:59'], 3: ['00:00','23:59'], 4: ['00:00','23:59'], 5: ['00:00','23:59'], 6: ['00:00','23:59'] },
    27: { 1: ['08:00','18:00'], 2: ['08:00','18:00'], 3: ['08:00','18:00'], 4: ['08:00','18:00'], 5: ['08:00','18:00'], 6: ['08:00','12:00'], 0: null },
    28: { 1: ['08:00','18:00'], 2: ['08:00','18:00'], 3: ['08:00','18:00'], 4: ['08:00','18:00'], 5: ['08:00','18:00'], 6: ['08:00','12:00'], 0: null },
    39: { 0: ['00:00','23:59'], 1: ['00:00','23:59'], 2: ['00:00','23:59'], 3: ['00:00','23:59'], 4: ['00:00','23:59'], 5: ['00:00','23:59'], 6: ['00:00','23:59'] },
    42: { 1: ['08:00','18:00'], 2: ['08:00','18:00'], 3: ['08:00','18:00'], 4: ['08:00','18:00'], 5: ['08:00','18:00'], 6: ['08:00','18:00'], 0: ['08:00','18:00'] },
    46: { 1: ['08:00','18:00'], 2: ['08:00','18:00'], 3: ['08:00','18:00'], 4: ['08:00','18:00'], 5: ['08:00','18:00'], 6: ['08:00','12:00'], 0: null }
};

function getDefaultHours(categoryId) { return DEFAULT_HOURS_BY_CATEGORY[categoryId] || null; }

const REAL_COORDS = {
    1:  { lat: -17.597573, lng: -44.729636 }, 2:  { lat: -17.598646, lng: -44.731731 },
    3:  { lat: -17.596901, lng: -44.730311 }, 4:  { lat: -17.603125, lng: -44.739462 },
    5:  { lat: -17.59974, lng: -44.73162 }, 6:  { lat: -17.59846, lng: -44.73219 },
    7:  { lat: -17.59821, lng: -44.73245 }, 8:  { lat: -17.59633, lng: -44.73372 },
    9:  { lat: -17.59694, lng: -44.73401 }, 10: { lat: -17.59740, lng: -44.73321 },
    11: { lat: -17.59431, lng: -44.73611 }, 12: { lat: -17.59758, lng: -44.73284 },
    13: { lat: -17.59740, lng: -44.73345 }, 14: { lat: -17.59915, lng: -44.73196 },
    15: { lat: -17.59684, lng: -44.73425 }, 16: { lat: -17.59629, lng: -44.73481 },
    17: { lat: -17.59674, lng: -44.73264 }, 18: { lat: -17.59792, lng: -44.73543 },
    19: { lat: -17.59713, lng: -44.73579 }, 20: { lat: -17.59661, lng: -44.73510 },
    21: { lat: -17.59751, lng: -44.73245 }, 22: { lat: -17.59820, lng: -44.73355 },
    23: { lat: -17.59874, lng: -44.73302 }, 24: { lat: -17.59467, lng: -44.73640 },
    25: { lat: -17.59527, lng: -44.73672 }, 26: { lat: -17.59596, lng: -44.73539 },
    27: { lat: -17.59607, lng: -44.73246 }, 28: { lat: -17.59755, lng: -44.73378 },
    29: { lat: -17.59648, lng: -44.73350 }, 30: { lat: -17.59687, lng: -44.73389 },
    31: { lat: -17.59443, lng: -44.73596 }, 32: { lat: -17.59509, lng: -44.73467 },
    33: { lat: -17.59554, lng: -44.73419 }, 34: { lat: -17.59502, lng: -44.73102 },
    35: { lat: -17.59698, lng: -44.73702 }, 36: { lat: -17.59586, lng: -44.72802 },
    37: { lat: -17.59482, lng: -44.73902 }, 38: { lat: -17.59784, lng: -44.73392 },
    39: { lat: -17.59552, lng: -44.73803 }, 40: { lat: -17.59948, lng: -44.73201 }
};

const DB_ESTABLISHMENTS = [
    { id: 1, slug: "papex-papelaria", name: "Papex", category_id: 11, description: "Papelaria em Várzea da Palma.", address_street: "R. Joaquim Marques Carvalho", address_number: "868", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.597573, longitude:-44.729636, phone: "(38) 3731-3003", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 2, slug: "otica-relojoaria-diamantina", name: "Ótica e Relojoaria Diamantina", category_id: 15, description: "Ótica, relojoaria e joalheria no centro da cidade.", address_street: "Rua Joaquim Marques de Carvalho", address_number: "900", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.598646, longitude: -44.731731, phone: "(38) 3731-1177", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 3, slug: "hospital-Adolf-Ensch", name: "Hospital Adolf Ensch", category_id: 15, description: "Hospital geral.", address_street: "Rua Dr Ensch", address_number: "735", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.596901, longitude: -44.730311, phone: "(38) 3731-1217", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 4, slug: "restaurante-serrinha", name: "Restaurante Serrinha", category_id: 1, description: "Restaurante e bar em Várzea da Palma.", address_street: "Rodovia BR 496", address_number: "S/N", neighborhood: "Serrinha", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.603125, longitude: -44.739462, phone: "(38) 3731-1578", whatsapp: "(38)998259787", instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 5, slug: "lili-store", name: "Lili Store", category_id: 15, description: "Loja de vestuário e acessórios.", address_street: "Rua Tomaz Antonio Gonzaga", address_number: "92", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.599324, longitude: -44.734159, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 6, slug: "cordeiro-bike-moto-shop", name: "Cordeiro Bike Moto Shop", category_id: 9, description: "Loja de bicicletas, motos e acessórios.", address_street: "Rua Tomaz Antonio Gonzaga", address_number: "83", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.599612, longitude: -44.734340, phone: "(38) 99916-5759", whatsapp: "38999165759", instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 7, slug: "ciclozak", name: "Ciclozak", category_id: 9, description: "Loja de bicicletas e peças.", address_street: "Rua Tomaz Antônio Gonzaga", address_number: "180", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.599730, longitude: -44.735222, phone: "(38) 3731-1707", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 8, slug: "dira-modas", name: "Dira Modas", category_id: 11, description: "Loja de roupas femininas com moda gestante, fitness e casual.", address_street: "Rua Tómaz Antônio Gonzaga", address_number: "417", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.600450, longitude: -44.738548, phone: "(38) 3731-2208", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 9, slug: "loja-zema", name: "Loja Zema", category_id: 11, description: "Loja Zema em Várzea da Palma.", address_street: "Rua Tiradentes", address_number: "190", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5982466, longitude: -44.7334669, phone: "(38) 998150922", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 10, slug: "daniel-relogios-joias-otica", name: "Daniel Relógios Jóias Ótica", category_id: 15, description: "Relojoaria, joalheria e ótica.", address_street: "Rua Joaquim Marques Carvalho", address_number: "916", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5986186, longitude: -44.7315387, phone: "(38) 3731-1396", whatsapp: "(38) 98822-1191", instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 11, slug: "sao-geraldo-pecas-oficina", name: "São Geraldo Peças e Oficina", category_id: 8, description: "Oficina mecânica e autopeças.", address_street: "Rua Salvador Roberto", address_number: "1422", neighborhood: "", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5967503, longitude: -44.7261367, phone: "(38) 3731-1247 ou (38) 3731-1237", whatsapp: "(38) 98401-8581", instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 12, slug: "celia-moda-fashion", name: "Celia Moda Fashion", category_id: 11, description: "Loja de roupas e acessórios.", address_street: "Rua Tiradentes", address_number: "770", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.599199, longitude: -44.737460, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 13, slug: "boutique-brinco-modas", name: "Boutique Brinco Modas", category_id: 11, description: "Boutique de moda e acessórios.", address_street: "Rua Joaquim Marques Carvalho", address_number: "910", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.598609, longitude: -44.731596, phone: "(38)3731-1634", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 14, slug: "lojao-nova-brasilia", name: "Lojão Nova Brasília", category_id: 11, description: "Loja de variedades e vestuário.", address_street: "Rua Tomaz Antônio Gonzaga", address_number: "28", neighborhood: "Pilar", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.599192, longitude: -44.733517, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 15, slug: "marcenaria-estilar", name: "Marcenaria Estilar", category_id: 12, description: "Marcenaria e fabricação de móveis planejados.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5968, longitude: -44.7342, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 16, slug: "marcenaria-decore", name: "Marcenaria Decore", category_id: 12, description: "Marcenaria e móveis sob medida.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.627207, longitude: -44.715855, phone:"(38) 99834-7002", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 17, slug: "facciale-odontologia", name: "Facciale Odontologia Avançada", category_id: 5, description: "Clínica odontológica com atendimento especializado.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.598013, longitude: -44.731050, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 18, slug: "hotel-casa-grande", name: "Hotel Casa Grande", category_id: 13, description: "Hotel em Várzea da Palma.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.596544, longitude:-44.728825, phone: "(38) 3731-1762", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 19, slug: "hotel-leticia", name: "Hotel Letícia", category_id: 13, description: "Hotel em Várzea da Palma.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.599887, longitude: -44.736213, phone: "(38) 3731-4447", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 20, slug: "hotel-mineiro", name: "Hotel Mineiro", category_id: 13, description: "Hotel em Várzea da Palma.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.598715, longitude: -44.730285, phone: "(38) 3731-1401", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 21, slug: "oral-centter-clinicas", name: "Oral Centter Clínicas Odontológicas", category_id: 5, description: "Clínica odontológica.", address_street: "Avenida Dr. Malard", address_number: "1.410", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.597646, longitude: -44.730593, phone: "(38) 99977-1410", whatsapp: null, instagram: "oralcentter.vzp", website: "oralcentter.com", hours_json: null, is_open: 1, cover_url: "https://maps.app.goo.gl/eut576rJ7eKzZTvS8", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 22, slug: "dental-prime", name: "Dental Prime", category_id: 5, description: "Clínica odontológica.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.598919, longitude: -44.733016, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 23, slug: "supermais-supermercados", name: "Supermais Supermercados e Utilidades", category_id: 3, description: "Supermercado e loja de utilidades.", address_street: "Rua Claudio Manoel da Costa ", address_number: "957", neighborhood: "Pinlar", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.600794, longitude: -44.735293, phone: "(38)997381620", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 24, slug: "oficina-tuche", name: "Oficina Tuche", category_id: 8, description: "Oficina mecânica.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.601843, longitude: -44.732835, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 25, slug: "oficina-santos", name: "Oficina Santos", category_id: 8, description: "Oficina mecânica.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5953, longitude: -44.7368, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 26, slug: "pousada-do-frances", name: "Pousada do Frances", category_id: 13, description: "Pousada em Várzea da Palma.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5957, longitude: -44.7354, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 27, slug: "academia-hotel", name: "Academia Hotel", category_id: 13, description: "Hotel em Várzea da Palma.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5962, longitude: -44.7327, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 28,    slug: "flore-store", name: "Florê Store", category_id: 11, description: "Loja de moda feminina.", address_street: "Rua Pedro Sampaio", address_number: "1170", neighborhood: "Teimoso", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.598768, longitude: -44.728585, phone: "(38) 99867-8149", whatsapp: null, instagram: "https://www.instagram.com/florestorevzp/", website: "http://www.florestore.com.br/", hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 29, slug: "ideal-modas", name: "Ideal Modas", category_id: 11, description: "Loja de roupas unissex.", address_street: "Rua Salvador Roberto", address_number: "1267", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.597626730804983, longitude: -44.729184561860954, phone: "(38)3837311739", whatsapp: null, instagram: null, website: "http://www.aidealmodas.com.br/", hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 30, slug: "palmas-byke", name: "Palmas Byke (Edson Machado Dorneles)", category_id: 9, description: "Comércio de artigos de óptica e bicicletas.", address_street: "Rua Salvador Roberto", address_number: "954", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5969, longitude: -44.7326, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 31, slug: "hgs-autopecas-mecanica", name: "HGS Autopeças e Mecânica", category_id: 9, description: "Autopeças e serviços de mecânica, alinhamento e balanceamento.", address_street: "Avenida Adelino Aguiar", address_number: "941", neighborhood: "Caiçara", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5946, longitude: -44.7357, phone: "(38) 3731-1299", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 32, slug: "posto-santana-4", name: "Posto Santana 4", category_id: 10, description: "Posto de combustível.", address_street: "Av. Maximiliano Gaidzinski", address_number: "957", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.599804, longitude: -44.739471, phone: "(38)3731-3580", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1547407138-3c921660b204?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 33, slug: "posto-jotaeme", name: "Posto Jotaeme", category_id: 10, description: "Posto de combustível.", address_street: "Rua Salvador Roberto", address_number: "1.082", neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.597872, longitude: -44.729662, phone: "(38)98824-1798", whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1547407138-3c921660b204?w=800&h=400&fit=crop", photos_urls: [], is_verified: 1, status: "approved" },
    { id: 34, slug: "cafe-central", name: "Café Central", category_id: 2, description: "Café aconchegante no centro da cidade.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5950, longitude: -44.7310, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=400&fit=crop", photos_urls: [], is_verified: 0, status: "approved" },
    { id: 35, slug: "supermercado-bh-loja-2", name: "Supermercado BH Loja 2", category_id: 3, description: "Mercado com variedade de produtos.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.59795810796948, longitude: -44.73996027789521, phone: "(38)37313604", whatsapp: null, instagram: null, website: "https://www.supermercadosbh.com.br/", hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop", photos_urls: [], is_verified: 0, status: "approved" },
    { id: 36, slug: "hotel-premium", name: "Hotel Premium", category_id: 13, description: "Hotel confortável com quartos climatizados.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5960, longitude: -44.7280, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=400&fit=crop", photos_urls: [], is_verified: 0, status: "approved" },
    { id: 37, slug: "posto-shell", name: "Posto Shell", category_id: 10, description: "Posto de combustível com loja de conveniência.", address_street: null, address_number: null, neighborhood: "Saída da Cidade", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5945, longitude: -44.7390, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1547407138-3c921660b204?w=800&h=400&fit=crop", photos_urls: [], is_verified: 0, status: "approved" },
    { id: 38, slug: "praca-de-eventos", name: "Praça de Eventos", category_id: 14, description: "Praça central da cidade, com jardins e bancos.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5980, longitude: -44.7340, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=400&fit=crop", photos_urls: [], is_verified: 0, status: "approved" },
    { id: 39, slug: "parque-da-biblia", name: "Praça da Bíblia", category_id: 14, description: "Área verde com trilhas e espaço para piquenique.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5955, longitude: -44.7380, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=400&fit=crop", photos_urls: [], is_verified: 0, status: "approved" },
    { id: 40, slug: "feira-cultural", name: "Feira Cultural", category_id: 14, description: "Feira com artesanato local e comidas típicas. Aos sábados.", address_street: null, address_number: null, neighborhood: "Centro", city: "Várzea da Palma", state: "MG", zipcode: "39260-000", latitude: -17.5995, longitude: -44.7320, phone: null, whatsapp: null, instagram: null, website: null, hours_json: null, is_open: 1, cover_url: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&h=400&fit=crop", photos_urls: [], is_verified: 0, status: "approved" }
];

// Preenche horários padrão se ausentes
DB_ESTABLISHMENTS.forEach(e => {
    if (!e.hours_json) {
        const defaults = getDefaultHours(e.category_id);
        if (defaults) e.hours_json = JSON.stringify(defaults);
    }
});

const DB_ROUTES = [
    { id: 1, name: "🌅 Café da Manhã Cultural", badge: "economico", badgeLabel: "💰 Econômico", duration: "3h", description: "Comece o dia conhecendo o melhor da cultura local.", rating: 4.7, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop", stops: [34, 38, 40] },
    { id: 2, name: "🍝 Tour Gastronômico", badge: "luxo", badgeLabel: "💎 Luxo", duration: "4h", description: "Experiência completa com alta gastronomia.", rating: 4.9, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop", stops: [1, 4, 36] },
    { id: 3, name: "🌳 Dia na Natureza", badge: "economico", badgeLabel: "💰 Econômico", duration: "6h", description: "Contato com a natureza e paisagens incríveis.", rating: 4.8, image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop", stops: [39, 38, 34] },
    { id: 4, name: "🛍️ Compras e Lazer", badge: "medio", badgeLabel: "⭐ Médio", duration: "4h", description: "Compras, artesanato local e pausa para um bom café.", rating: 4.5, image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&h=400&fit=crop", stops: [35, 5, 34] },
    { id: 5, name: "🏛️ Roteiro Histórico", badge: "medio", badgeLabel: "⭐ Médio", duration: "3h", description: "Conheça a história e a arquitetura da cidade.", rating: 4.6, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop", stops: [2, 38, 5] }
];

/* ============================================================
   2. AUTH MODULE
   ============================================================ */
const AuthModule = (() => {
    const SESSION_KEY = 'vzp_session';
    const USERS_KEY = 'vzp_users';
    const DEFAULT_USER = { id: 'Teste', name: 'Visitante', email: 'teste@vzp.com', password: 'admin123', role: 'Contateste', initials: 'VS', created_at: new Date().toISOString() };

    function getUsers() {
        try {
            const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
            if (!users.find(u => u.email === DEFAULT_USER.email)) {
                users.push(DEFAULT_USER);
                localStorage.setItem(USERS_KEY, JSON.stringify(users));
            }
            return users;
        } catch { return [DEFAULT_USER]; }
    }
    function saveUsers(users) { try { localStorage.setItem(USERS_KEY, JSON.stringify(users)); } catch {} }
    function getSession() { try { const s = localStorage.getItem(SESSION_KEY); return s ? JSON.parse(s) : null; } catch { return null; } }
    function saveSession(user) { try { localStorage.setItem(SESSION_KEY, JSON.stringify({ id: user.id, name: user.name, email: user.email, role: user.role, initials: user.initials, logged_at: new Date().toISOString() })); } catch {} }
    function clearSession() { try { localStorage.removeItem(SESSION_KEY); } catch {} }
    function login(email, password) {
        const user = getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
        if (!user) return { ok: false, error: 'E-mail não cadastrado' };
        if (user.password !== password) return { ok: false, error: 'Senha incorreta' };
        saveSession(user);
        return { ok: true, user };
    }
    function register({ name, email, password }) {
        const users = getUsers();
        if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) return { ok: false, error: 'E-mail já cadastrado' };
        const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
        const newUser = { id: 'user-' + Date.now(), name, email, password, role: 'Usuário', initials, created_at: new Date().toISOString() };
        users.push(newUser);
        saveUsers(users);
        saveSession(newUser);
        return { ok: true, user: newUser };
    }
    function logout() { clearSession(); }
    function updateProfile(updates) {
        const session = getSession();
        if (!session) return false;
        const users = getUsers();
        const idx = users.findIndex(u => u.id === session.id);
        if (idx < 0) return false;
        if (updates.name) {
            users[idx].name = updates.name;
            users[idx].initials = updates.name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
        }
        if (updates.role) users[idx].role = updates.role;
        saveUsers(users);
        saveSession(users[idx]);
        return true;
    }
    return { getSession, login, register, logout, updateProfile, getUsers };
})();

/* ============================================================
   3. EST MODULE
   ============================================================ */
const EstModule = (() => {
    let _favorites = [];
    let _userEstablishments = [];

    function init() {
        try { _favorites = JSON.parse(localStorage.getItem('vzp_favorites') || '[]'); } catch { _favorites = []; }
        try { _userEstablishments = JSON.parse(localStorage.getItem('vzp_user_establishments') || '[]'); } catch { _userEstablishments = []; }
    }
    function saveUser() { try { localStorage.setItem('vzp_user_establishments', JSON.stringify(_userEstablishments)); } catch {} }
    function getAll() { return [...DB_ESTABLISHMENTS, ..._userEstablishments]; }
    function getCategories() { return DB_CATEGORIES.slice(); }
    function getCategoryById(id) { return DB_CATEGORIES.find(c => c.id === id) || null; }
    function getById(id) { return DB_ESTABLISHMENTS.find(e => e.id === id) || _userEstablishments.find(e => e.id === id) || null; }
    function getBySlug(slug) { return DB_ESTABLISHMENTS.find(e => e.slug === slug) || _userEstablishments.find(e => e.slug === slug) || null; }
    function getCategoryAndChildren(parentId) {
        const ids = [parentId];
        DB_CATEGORIES.forEach(c => {
            if (c.parent_id === parentId) { ids.push(c.id); ids.push(...getCategoryAndChildren(c.id)); }
        });
        return [...new Set(ids)];
    }
    function search({ query = '', categoryId = null, onlyOpen = false, onlyFavorites = false, onlyPending = false, sortBy = 'relevance' } = {}) {
        let list = getAll();
        if (query.trim()) {
            const q = query.toLowerCase().trim();
            list = list.filter(e => (e.name || '').toLowerCase().includes(q) || (e.description || '').toLowerCase().includes(q) || (e.neighborhood || '').toLowerCase().includes(q));
        }
        if (categoryId) { const ids = getCategoryAndChildren(categoryId); list = list.filter(e => ids.includes(e.category_id)); }
        if (onlyOpen) list = list.filter(e => isOpenNow(e));
        if (onlyFavorites) list = list.filter(e => _favorites.includes(e.id));
        if (onlyPending) list = list.filter(e => e.status === 'pending');
        if (sortBy === 'name') list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        return list;
    }
    function parseHours(est) {
        if (!est.hours_json) return null;
        try { return typeof est.hours_json === 'string' ? JSON.parse(est.hours_json) : est.hours_json; } catch { return null; }
    }
    function isOpenNow(est) {
        const hours = parseHours(est);
        if (!hours) return est.is_open === 1;
        const now = new Date();
        const dayHours = hours[now.getDay()];
        if (!dayHours) return false;
        const open = Array.isArray(dayHours) ? dayHours[0] : dayHours.open;
        const close = Array.isArray(dayHours) ? dayHours[1] : dayHours.close;
        if (!open || !close) return false;
        const [oH, oM] = open.split(':').map(Number);
        const [cH, cM] = close.split(':').map(Number);
        const nowMin = now.getHours() * 60 + now.getMinutes();
        return nowMin >= oH * 60 + oM && nowMin <= cH * 60 + cM;
    }
    function opensSoon(est) {
        const hours = parseHours(est);
        if (!hours) return false;
        const now = new Date();
        const dayHours = hours[now.getDay()];
        if (!dayHours) return false;
        const open = Array.isArray(dayHours) ? dayHours[0] : dayHours.open;
        if (!open) return false;
        const [oH, oM] = open.split(':').map(Number);
        const openMin = oH * 60 + oM;
        const nowMin = now.getHours() * 60 + now.getMinutes();
        return nowMin < openMin && (openMin - nowMin) <= 120;
    }
    function minutesUntilClose(est) {
        const hours = parseHours(est);
        if (!hours) return null;
        const now = new Date();
        const dayHours = hours[now.getDay()];
        if (!dayHours) return null;
        const close = Array.isArray(dayHours) ? dayHours[1] : dayHours.close;
        if (!close) return null;
        const [cH, cM] = close.split(':').map(Number);
        const closeMin = cH * 60 + cM;
        const nowMin = now.getHours() * 60 + now.getMinutes();
        return nowMin > closeMin ? null : closeMin - nowMin;
    }
    function getStatusText(est) {
        if (isOpenNow(est)) {
            const mins = minutesUntilClose(est);
            if (mins !== null && mins <= 60) return `Fecha em ${mins}min`;
            return 'Aberto agora';
        }
        if (opensSoon(est)) {
            const hours = parseHours(est);
            if (hours) {
                const now = new Date();
                const dh = hours[now.getDay()];
                const open = Array.isArray(dh) ? dh[0] : dh?.open;
                if (open) return `Abre às ${open}`;
            }
            return 'Abre em breve';
        }
        return 'Fechado';
    }
    function isFavorite(id) { return _favorites.includes(id); }
    function toggleFavorite(id) {
        const idx = _favorites.indexOf(id);
        if (idx >= 0) _favorites.splice(idx, 1); else _favorites.push(id);
        try { localStorage.setItem('vzp_favorites', JSON.stringify(_favorites)); } catch {}
        return isFavorite(id);
    }
    function getPendingCount() { return _userEstablishments.filter(e => e.status === 'pending').length; }
    function getReviews(id) {
        try { return JSON.parse(localStorage.getItem('vzp_reviews') || '{}')[id] || []; } catch { return []; }
    }
    function addReview(id, { name, rating, comment }) {
        const all = JSON.parse(localStorage.getItem('vzp_reviews') || '{}');
        if (!all[id]) all[id] = [];
        all[id].push({ user_name: name || 'Anônimo', rating: Math.max(1, Math.min(5, parseInt(rating) || 5)), comment: comment || '', created_at: new Date().toISOString() });
        try { localStorage.setItem('vzp_reviews', JSON.stringify(all)); } catch {}
    }
    function createEstablishment(data) {
        const nextId = 1000 + _userEstablishments.length + 1;
        const slug = (data.name || 'local').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-' + nextId;
        const est = {
            id: nextId, slug, name: data.name, category_id: parseInt(data.category_id),
            description: data.description || null,
            address_street: data.address_street || null, address_number: data.address_number || null,
            address_complement: data.address_complement || null, neighborhood: data.neighborhood || null,
            city: 'Várzea da Palma', state: 'MG', zipcode: data.zipcode || null,
            latitude: data.latitude ? parseFloat(data.latitude) : null, longitude: data.longitude ? parseFloat(data.longitude) : null,
            phone: data.phone || null, whatsapp: data.whatsapp ? data.whatsapp.replace(/\D/g, '') : null,
            instagram: data.instagram || null, website: data.website || null,
            hours_json: data.hours_json || null, is_open: 1,
            cover_url: (data.photos_urls && data.photos_urls[0]) || data.cover_url || null,
            photos_urls: data.photos_urls || [], logo_url: null, is_verified: 0, is_claimed: 0,
            status: 'pending', created_at: new Date().toISOString(), updated_at: new Date().toISOString()
        };
        _userEstablishments.push(est);
        saveUser();
        return est;
    }
    function approveEstablishment(id) {
        const est = _userEstablishments.find(e => e.id === id);
        if (!est) return false;
        est.status = 'approved'; est.is_verified = 1; est.updated_at = new Date().toISOString();
        saveUser();
        return true;
    }
    function rejectEstablishment(id) {
        const idx = _userEstablishments.findIndex(e => e.id === id);
        if (idx < 0) return false;
        _userEstablishments.splice(idx, 1); saveUser(); return true;
    }
    function clearUserEstablishments() { _userEstablishments = []; saveUser(); }
    function escapeHtml(str) {
        if (str == null) return '';
        return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
    }
    function distanceKm(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2)**2;
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    }
    return {
        init, getAll, getCategories, getCategoryById, getById, getBySlug,
        search, isOpenNow, opensSoon, minutesUntilClose, getStatusText,
        isFavorite, toggleFavorite, getPendingCount, getReviews, addReview,
        createEstablishment, approveEstablishment, rejectEstablishment,
        clearUserEstablishments, escapeHtml, distanceKm
    };
})();

/* ============================================================
   4. HISTORY MODULE
   ============================================================ */
const HistoryModule = (() => {
    let _events = [];
    function init() {
        try { _events = JSON.parse(localStorage.getItem('vzp_history') || '[]'); } catch { _events = []; }
        if (_events.length === 0) {
            const now = Date.now();
            _events = [
                { id: 1, type: 'visit', title: 'Visitou Hospital Adolf Ensch', desc: 'Local visualizado', timestamp: now - 1000 * 60 * 15 },
                { id: 2, type: 'fav', title: 'Favoritou Ciclozak', desc: 'Adicionado aos favoritos', timestamp: now - 1000 * 60 * 60 * 2 }
            ];
            save();
        }
    }
    function save() { try { localStorage.setItem('vzp_history', JSON.stringify(_events.slice(0, 100))); } catch {} }
    function add(type, title, desc) {
        const event = { id: Date.now() + Math.random(), type, title, desc, timestamp: Date.now() };
        _events.unshift(event);
        if (_events.length > 100) _events.pop();
        save();
        return event;
    }
    function getAll() { return _events.slice(); }
    function getByType(type) { return type === 'all' ? getAll() : _events.filter(e => e.type === type); }
    function getStats() {
        const all = getAll();
        return {
            total: all.length,
            visits: all.filter(e => e.type === 'visit').length,
            routes: all.filter(e => e.type === 'route').length,
            favs: all.filter(e => e.type === 'fav').length
        };
    }
    function clear() { _events = []; save(); }
    return { init, add, getAll, getByType, getStats, clear };
})();

/* ============================================================
   5. GLOBAL STATE
   ============================================================ */
let map;
let tileLayer = null;
let routingControl = null;
let userLocation = null;
let placeMarkers = [];
let currentStep = 1;
let formPhotos = [];
let _historyFilter = 'all';
let _confirmCallback = null;
let _sidecardEstId = null;
let toastTimeout;

const CITY = { lat: -17.5975, lng: -44.7336, zoom: 15 };
const ICONS = {
    satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
};
const SENTINEL_CONFIG = {
    instanceId: 'COLE_SEU_INSTANCE_ID_AQUI',
    layer: 'TRUE_COLOR',
    maxCloudCoverage: 20,
    timeRange: (() => {
        const end = new Date(); const start = new Date();
        start.setMonth(start.getMonth() - 6);
        return `${start.toISOString().split('T')[0]}/${end.toISOString().split('T')[0]}`;
    })()
};
const CAT_ICON_CLASS = {
    2: 'restaurant', 7: 'market', 15: 'hospital', 16: 'hospital', 17: 'hospital',
    24: 'gas', 39: 'hotel', 42: 'park', 46: 'shop',
    20: 'shop', 21: 'shop', 27: 'shop', 28: 'shop'
};
const DAYS_OF_WEEK = [
    { num: 1, name: 'Segunda' }, { num: 2, name: 'Terça' }, { num: 3, name: 'Quarta' },
    { num: 4, name: 'Quinta' }, { num: 5, name: 'Sexta' }, { num: 6, name: 'Sábado' }, { num: 0, name: 'Domingo' }
];

function getEstablishmentCoords(est) {
    if (est.latitude && est.longitude) return { lat: est.latitude, lng: est.longitude };
    if (REAL_COORDS[est.id]) return REAL_COORDS[est.id];
    return { lat: CITY.lat, lng: CITY.lng };
}
function getEstablishmentPhotos(est) {
    const photos = [];
    if (est.cover_url) photos.push(est.cover_url);
    if (Array.isArray(est.photos_urls)) est.photos_urls.forEach(p => { if (p && !photos.includes(p)) photos.push(p); });
    if (photos.length === 0) photos.push('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=400&fit=crop');
    return photos;
}

/* ============================================================
   6. TOAST
   ============================================================ */
function showToast(msg, type = 'info') {
    const t = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = msg;
    t.className = 'toast ' + type;
    const icon = document.getElementById('toastIcon');
    icon.className = 'fas';
    if (type === 'success') icon.classList.add('fa-check-circle');
    else if (type === 'error') icon.classList.add('fa-exclamation-circle');
    else icon.classList.add('fa-info-circle');
    t.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => t.classList.remove('show'), 3000);
}
function hideToast() { document.getElementById('toast').classList.remove('show'); }

/* ============================================================
   7. AUTH UI
   ============================================================ */
function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.querySelector(`.auth-tab[onclick*="${tab}"]`)?.classList.add('active');
    document.getElementById(tab === 'login' ? 'formLogin' : 'formRegister')?.classList.add('active');
}
function togglePassword(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    btn.innerHTML = isPassword ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
}
function checkPasswordStrength() {
    const input = document.getElementById('registerPassword');
    const el = document.getElementById('passwordStrength');
    if (!input || !el) return;
    const v = input.value;
    let strength = 0;
    if (v.length >= 6) strength++;
    if (v.length >= 10) strength++;
    if (/[A-Z]/.test(v)) strength++;
    if (/[0-9]/.test(v)) strength++;
    if (/[^A-Za-z0-9]/.test(v)) strength++;
    const labels = ['', 'Muito fraca', 'Fraca', 'Média', 'Forte', 'Muito forte'];
    const colors = ['', '#ef4444', '#f59e0b', '#eab308', '#10b981', '#059669'];
    el.textContent = labels[strength] || '';
    el.style.color = colors[strength] || 'var(--text-muted)';
    el.style.fontWeight = '700';
}
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const btn = event.target.querySelector('button[type="submit"]');
    btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
    setTimeout(() => {
        const result = AuthModule.login(email, password);
        btn.disabled = false; btn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Entrar';
        if (!result.ok) {
            document.getElementById('loginEmail').classList.add('error');
            document.getElementById('loginPassword').classList.add('error');
            showToast('❌ ' + result.error, 'error');
            return;
        }
        showToast(`✅ Bem-vindo, ${result.user.name.split(' ')[0]}!`, 'success');
        applyUserToUI(result.user);
        hideAuthScreen();
    }, 600);
}
function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('registerPasswordConfirm').value;
    if (name.length < 3) { showToast('⚠️ Nome muito curto', 'error'); return; }
    if (password.length < 6) { showToast('⚠️ Senha muito curta (mínimo 6 caracteres)', 'error'); return; }
    if (password !== confirm) { showToast('⚠️ As senhas não coincidem', 'error'); return; }
    const btn = event.target.querySelector('button[type="submit"]');
    btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Criando...';
    setTimeout(() => {
        const result = AuthModule.register({ name, email, password });
        btn.disabled = false; btn.innerHTML = '<i class="fas fa-user-plus"></i> Criar conta';
        if (!result.ok) { showToast('❌ ' + result.error, 'error'); return; }
        showToast(`🎉 Conta criada! Bem-vindo, ${name.split(' ')[0]}!`, 'success');
        applyUserToUI(result.user);
        hideAuthScreen();
    }, 700);
}
function loginDemo() {
    const result = AuthModule.login('admin@vzp.com', 'admin123');
    if (result.ok) {
        showToast(`👋 Olá, ${result.user.name.split(' ')[0]}!`, 'success');
        applyUserToUI(result.user);
        hideAuthScreen();
    } else showToast('❌ Erro ao entrar como visitante', 'error');
}
function applyUserToUI(user) {
    document.getElementById('userAvatar').textContent = user.initials || 'U';
    document.getElementById('userNameSidebar').textContent = user.name;
    document.getElementById('userRoleSidebar').textContent = user.role;
}
function showAuthScreen() { document.getElementById('authScreen').classList.add('active'); document.body.style.overflow = 'hidden'; }
function hideAuthScreen() { document.getElementById('authScreen').classList.remove('active'); document.body.style.overflow = ''; }
function checkAuth() {
    const session = AuthModule.getSession();
    if (session) { applyUserToUI(session); hideAuthScreen(); }
    else showAuthScreen();
}
function toggleUserMenu(event) { event.stopPropagation(); document.getElementById('userMenu').classList.toggle('open'); }
function closeUserMenu() { document.getElementById('userMenu')?.classList.remove('open'); }
document.addEventListener('click', () => closeUserMenu());

/* ============================================================
   8. CONFIRM MODAL
   ============================================================ */
function openConfirmModal(title, message, callback) {
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmMessage').textContent = message;
    document.getElementById('confirmModal').classList.add('open');
    _confirmCallback = callback;
}
function closeConfirmModal() { document.getElementById('confirmModal').classList.remove('open'); _confirmCallback = null; }
function confirmAction() { if (_confirmCallback) _confirmCallback(); closeConfirmModal(); }
function requestLogout() {
    closeUserMenu();
    openConfirmModal('Sair da conta?', 'Você precisará fazer login novamente para acessar.', () => {
        AuthModule.logout();
        showToast('👋 Até logo!', 'info');
        setTimeout(() => {
            showAuthScreen();
            document.getElementById('formLogin')?.reset();
            document.getElementById('formRegister')?.reset();
            switchAuthTab('login');
        }, 300);
    });
}

/* ============================================================
   9. PROFILE MODAL
   ============================================================ */
function openProfileModal() {
    closeUserMenu();
    const session = AuthModule.getSession();
    if (!session) return;
    const modal = document.getElementById('estModal');
    const content = modal.querySelector('.est-modal-content');
    content.innerHTML = `
        <div style="padding: 32px 28px;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:24px;">
                <h2 style="font-size:22px; font-weight:800; display:flex; align-items:center; gap:10px; letter-spacing:-0.02em;">
                    <i class="fas fa-user-circle" style="color:var(--primary-600);"></i> Meu perfil
                </h2>
                <button class="est-modal-close" style="position:static; width:38px; height:38px;" onclick="EstUI.closeModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div style="text-align:center; margin-bottom:28px;">
                <div style="width:88px; height:88px; border-radius:50%; background:var(--gradient-primary); color:white; display:flex; align-items:center; justify-content:center; font-size:32px; font-weight:800; margin:0 auto 14px; box-shadow: 0 12px 32px rgba(37,99,235,0.4);">
                    ${EstModule.escapeHtml(session.initials)}
                </div>
                <div style="font-size:12px; color:var(--text-muted); font-weight:600;">
                    Membro desde ${new Date(session.logged_at || Date.now()).toLocaleDateString('pt-BR')}
                </div>
            </div>
            <div style="margin-bottom:16px;">
                <label style="font-size:12.5px; font-weight:700; color:var(--text-primary); margin-bottom:6px; display:block;">Nome completo</label>
                <input type="text" id="profileName" value="${EstModule.escapeHtml(session.name)}" style="padding:13px 14px; border:1.5px solid var(--border); border-radius:12px; width:100%; font-family:inherit; font-size:14px; background:var(--gray-50); outline:none;">
            </div>
            <div style="margin-bottom:16px;">
                <label style="font-size:12.5px; font-weight:700; color:var(--text-primary); margin-bottom:6px; display:block;">E-mail</label>
                <input type="email" value="${EstModule.escapeHtml(session.email)}" disabled style="padding:13px 14px; border:1.5px solid var(--border); border-radius:12px; width:100%; font-family:inherit; font-size:14px; background:var(--gray-100); color:var(--text-muted); outline:none; cursor:not-allowed;">
            </div>
            <div style="margin-bottom:24px;">
                <label style="font-size:12.5px; font-weight:700; color:var(--text-primary); margin-bottom:6px; display:block;">Cargo</label>
                <input type="text" id="profileRole" value="${EstModule.escapeHtml(session.role)}" style="padding:13px 14px; border:1.5px solid var(--border); border-radius:12px; width:100%; font-family:inherit; font-size:14px; background:var(--gray-50); outline:none;">
            </div>
            <div style="display:flex; gap:10px;">
                <button class="est-form-btn secondary" style="flex:1;" onclick="EstUI.closeModal()">Cancelar</button>
                <button class="est-form-btn primary" style="flex:1;" onclick="saveProfileChanges()"><i class="fas fa-save"></i> Salvar</button>
            </div>
        </div>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function saveProfileChanges() {
    const name = document.getElementById('profileName').value.trim();
    const role = document.getElementById('profileRole').value.trim();
    if (name.length < 3) { showToast('⚠️ Nome muito curto', 'error'); return; }
    if (AuthModule.updateProfile({ name, role })) {
        applyUserToUI(AuthModule.getSession());
        showToast('✅ Perfil atualizado!', 'success');
        EstUI.closeModal();
    } else showToast('❌ Erro ao salvar', 'error');
}

/* ============================================================
   10. LIGHTBOX
   ============================================================ */
const Lightbox = (() => {
    let _photos = [], _index = 0;
    function open(photos, startIndex = 0) {
        if (!photos || photos.length === 0) return;
        _photos = photos; _index = startIndex;
        update();
        document.getElementById('lightbox').classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function close() {
        document.getElementById('lightbox').classList.remove('open');
        document.body.style.overflow = '';
    }
    function next() { _index = (_index + 1) % _photos.length; update(); }
    function prev() { _index = (_index - 1 + _photos.length) % _photos.length; update(); }
    function update() {
        const img = document.getElementById('lightboxImg');
        const counter = document.getElementById('lightboxCounter');
        img.src = _photos[_index];
        counter.textContent = `${_index + 1} / ${_photos.length}`;
        counter.style.display = _photos.length > 1 ? 'block' : 'none';
        const prevBtn = document.querySelector('.lightbox-nav.prev');
        const nextBtn = document.querySelector('.lightbox-nav.next');
        if (_photos.length <= 1) { prevBtn.style.display = 'none'; nextBtn.style.display = 'none'; }
        else { prevBtn.style.display = 'flex'; nextBtn.style.display = 'flex'; }
    }
    document.addEventListener('keydown', e => {
        if (!document.getElementById('lightbox').classList.contains('open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
    });
    return { open, close, next, prev };
})();
function closeLightbox() { Lightbox.close(); }
function lightboxNext() { Lightbox.next(); }
function lightboxPrev() { Lightbox.prev(); }
function openLightboxFromModal(estId, index) {
    const est = EstModule.getById(estId);
    if (!est) return;
    Lightbox.open(getEstablishmentPhotos(est), index);
}

/* ============================================================
   11. HOURS EDITOR
   ============================================================ */
function renderHoursEditor(initialHours = null) {
    const container = document.getElementById('hoursEditor');
    if (!container) return;
    let hours = {};
    if (initialHours) {
        try { hours = typeof initialHours === 'string' ? JSON.parse(initialHours) : initialHours; }
        catch { hours = {}; }
    }
    container.innerHTML = DAYS_OF_WEEK.map(day => {
        const dh = hours[day.num];
        const open = Array.isArray(dh) ? dh[0] : (dh?.open || '08:00');
        const close = Array.isArray(dh) ? dh[1] : (dh?.close || '18:00');
        const isClosed = !dh || (dh && !Array.isArray(dh) && dh.closed);
        return `
            <div class="hours-day-row ${isClosed ? 'closed' : ''}" data-day="${day.num}">
                <div class="hours-day-label">${day.name}</div>
                <div class="hours-times">
                    <input type="time" class="hours-open" value="${open}" ${isClosed ? 'disabled' : ''}>
                    <span class="hours-sep">às</span>
                    <input type="time" class="hours-close" value="${close}" ${isClosed ? 'disabled' : ''}>
                </div>
                <label class="hours-day-toggle">
                    <input type="checkbox" class="hours-open-check" ${!isClosed ? 'checked' : ''} onchange="toggleDayClosed(this)">
                    Aberto
                </label>
            </div>`;
    }).join('');
}
function toggleDayClosed(checkbox) {
    const row = checkbox.closest('.hours-day-row');
    row.classList.toggle('closed', !checkbox.checked);
    row.querySelectorAll('input[type="time"]').forEach(inp => { inp.disabled = !checkbox.checked; });
}
function collectHoursFromEditor() {
    const container = document.getElementById('hoursEditor');
    if (!container) return null;
    const rows = container.querySelectorAll('.hours-day-row');
    const hours = {};
    let hasAny = false;
    rows.forEach(row => {
        const day = parseInt(row.dataset.day);
        const isOpen = row.querySelector('.hours-open-check').checked;
        if (!isOpen) hours[day] = null;
        else {
            hours[day] = [row.querySelector('.hours-open').value, row.querySelector('.hours-close').value];
            hasAny = true;
        }
    });
    return hasAny ? hours : null;
}

/* ============================================================
   12. EST UI
   ============================================================ */
const EstUI = (() => {
    let _currentCategory = null;
    let _currentQuery = '';
    let _onlyOpen = false;
    let _onlyFavorites = false;
    let _onlyPending = false;
    let _currentSort = 'relevance';

    function init() { renderCategories(); renderEstablishments(); updateStats(); bindEvents(); }

    function renderCategories() {
        const container = document.getElementById('estCategories');
        if (!container) return;
        const roots = EstModule.getCategories().filter(c => c.parent_id === null);
        container.innerHTML = `
            <button class="est-chip active" data-category=""><i class="fas fa-layer-group"></i> Todas</button>
            ${roots.map(c => `<button class="est-chip" data-category="${c.id}"><i class="fas ${c.icon || 'fa-tag'}"></i> ${c.name}</button>`).join('')}
        `;
        container.querySelectorAll('.est-chip').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.category ? parseInt(btn.dataset.category) : null;
                _currentCategory = (_currentCategory === id) ? null : id;
                container.querySelectorAll('.est-chip').forEach(b => b.classList.remove('active'));
                if (_currentCategory === null) container.querySelector('[data-category=""]').classList.add('active');
                else btn.classList.add('active');
                renderEstablishments();
            });
        });
    }

    function renderEstablishments() {
        const container = document.getElementById('estGrid');
        if (!container) return;
        const list = EstModule.search({ query: _currentQuery, categoryId: _currentCategory, onlyOpen: _onlyOpen, onlyFavorites: _onlyFavorites, onlyPending: _onlyPending, sortBy: _currentSort });
        if (list.length === 0) {
            container.innerHTML = `<div class="est-empty"><i class="fas fa-store-slash"></i><h3>Nenhum estabelecimento encontrado</h3><p>Tente ajustar os filtros ou a busca.</p></div>`;
            document.getElementById('estCount').textContent = '0';
            return;
        }
        container.innerHTML = list.map(renderCard).join('');
        document.getElementById('estCount').textContent = list.length;
    }

    function renderCard(e) {
        const cat = EstModule.getCategoryById(e.category_id);
        const isFav = EstModule.isFavorite(e.id);
        const isOpen = EstModule.isOpenNow(e);
        const isPending = e.status === 'pending';
        const statusText = EstModule.getStatusText(e);
        return `
        <div class="est-card ${isPending ? 'pending-card' : ''}" data-id="${e.id}">
            <div class="est-card-cover">
                ${e.cover_url ? `<img src="${EstModule.escapeHtml(e.cover_url)}" alt="">` : `<i class="fas ${cat?.icon || 'fa-store'}"></i>`}
                <span class="est-card-category-badge"><i class="fas ${cat?.icon || 'fa-tag'}"></i> ${cat?.name || 'Local'}</span>
                ${isPending ? `<span class="est-card-pending-badge"><i class="fas fa-clock"></i> Pendente</span>` : (e.is_verified ? `<span class="est-card-verified-badge"><i class="fas fa-check-circle"></i> Verificado</span>` : '')}
            </div>
            <div class="est-card-actions">
                <button class="est-card-action fav ${isFav ? 'active' : ''}" data-fav="${e.id}"><i class="fas fa-heart"></i></button>
            </div>
            <div class="est-card-body">
                <div class="est-card-name">${EstModule.escapeHtml(e.name)}</div>
                ${e.description ? `<div class="est-card-desc">${EstModule.escapeHtml(e.description)}</div>` : ''}
                <div class="est-card-meta">
                    ${e.phone ? `<span class="phone"><i class="fas fa-phone"></i> ${EstModule.escapeHtml(e.phone)}</span>` : ''}
                    ${e.neighborhood ? `<span><i class="fas fa-map-pin"></i> ${EstModule.escapeHtml(e.neighborhood)}</span>` : ''}
                    <span class="${isOpen ? 'open' : 'closed'}"><i class="fas fa-circle" style="font-size:8px;"></i> ${statusText}</span>
                </div>
            </div>
            ${isPending ? `
                <div class="est-card-moderation">
                    <button class="btn-approve" onclick="event.stopPropagation(); approveEst(${e.id})"><i class="fas fa-check"></i> Aprovar</button>
                    <button class="btn-reject" onclick="event.stopPropagation(); rejectEst(${e.id})"><i class="fas fa-times"></i> Rejeitar</button>
                </div>` : ''}
        </div>`;
    }

    function updateStats() {
        const all = EstModule.getAll();
        document.getElementById('statTotal').textContent = all.length;
        document.getElementById('statOpen').textContent = all.filter(e => EstModule.isOpenNow(e)).length;
        document.getElementById('statVerified').textContent = all.filter(e => e.is_verified === 1).length;
        const pending = EstModule.getPendingCount();
        document.getElementById('statPending').textContent = pending;
        const badge = document.getElementById('pendingBadge');
        if (badge) { badge.textContent = pending; badge.style.display = pending > 0 ? 'block' : 'none'; }
        const aboutCount = document.getElementById('aboutCount');
        if (aboutCount) aboutCount.textContent = all.length;
    }

    function bindEvents() {
        const search = document.getElementById('estSearch');
        if (search) {
            let timer;
            search.addEventListener('input', e => {
                clearTimeout(timer);
                timer = setTimeout(() => { _currentQuery = e.target.value; renderEstablishments(); }, 250);
            });
        }
        const openBtn = document.getElementById('estFilterOpen');
        if (openBtn) openBtn.addEventListener('click', () => { _onlyOpen = !_onlyOpen; openBtn.classList.toggle('active', _onlyOpen); renderEstablishments(); });
        const favBtn = document.getElementById('estFilterFav');
        if (favBtn) favBtn.addEventListener('click', () => { _onlyFavorites = !_onlyFavorites; favBtn.classList.toggle('active', _onlyFavorites); renderEstablishments(); });
        const pendBtn = document.getElementById('estFilterPending');
        if (pendBtn) pendBtn.addEventListener('click', () => { _onlyPending = !_onlyPending; pendBtn.classList.toggle('active', _onlyPending); renderEstablishments(); });
        const sort = document.getElementById('estSortSelect');
        if (sort) sort.addEventListener('change', e => { _currentSort = e.target.value; renderEstablishments(); });
        const grid = document.getElementById('estGrid');
        if (grid) {
            grid.addEventListener('click', e => {
                const favBtn = e.target.closest('[data-fav]');
                if (favBtn) {
                    e.stopPropagation();
                    const id = parseInt(favBtn.dataset.fav);
                    EstModule.toggleFavorite(id);
                    favBtn.classList.toggle('active', EstModule.isFavorite(id));
                    updateStats();
                    return;
                }
                const card = e.target.closest('.est-card');
                if (card) openDetails(parseInt(card.dataset.id));
            });
        }
        const modal = document.getElementById('estModal');
        if (modal) {
            modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
            document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
        }
    }

    function openDetails(id) {
        const e = EstModule.getById(id);
        if (!e) return;
        const cat = EstModule.getCategoryById(e.category_id);
        const reviews = EstModule.getReviews(e.id);
        const isFav = EstModule.isFavorite(e.id);
        const isOpen = EstModule.isOpenNow(e);
        const isPending = e.status === 'pending';
        const statusText = EstModule.getStatusText(e);
        const avgRating = reviews.length > 0 ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1) : null;
        const distribution = [5, 4, 3, 2, 1].map(star => ({
            star, count: reviews.filter(r => r.rating === star).length,
            pct: reviews.length > 0 ? (reviews.filter(r => r.rating === star).length / reviews.length) * 100 : 0
        }));
        if (!isPending) { HistoryModule.add('visit', `Visitou ${e.name}`, 'Detalhes visualizados'); renderHistory(); }
        const modal = document.getElementById('estModal');
        const content = modal.querySelector('.est-modal-content');
        const fullAddress = [e.address_street && (e.address_street + (e.address_number ? ', ' + e.address_number : '')), e.neighborhood, 'Várzea da Palma - MG'].filter(Boolean).join(' • ');
        const photos = getEstablishmentPhotos(e);
        const heroImg = photos[0];
        let distanceText = null;
        if (userLocation && e.latitude && e.longitude) {
            const d = EstModule.distanceKm(userLocation.lat, userLocation.lng, e.latitude, e.longitude);
            distanceText = d < 1 ? Math.round(d * 1000) + ' m' : d.toFixed(1) + ' km';
        }
        let hoursHtml = '';
        if (e.hours_json) {
            try {
                const hours = typeof e.hours_json === 'string' ? JSON.parse(e.hours_json) : e.hours_json;
                const today = new Date().getDay();
                hoursHtml = `<div class="est-hours-list">` + DAYS_OF_WEEK.map(d => {
                    const dh = hours[d.num];
                    const isToday = d.num === today;
                    let timeText = 'Fechado', isClosed = true;
                    if (dh) {
                        const open = Array.isArray(dh) ? dh[0] : dh?.open;
                        const close = Array.isArray(dh) ? dh[1] : dh?.close;
                        if (open && close) { timeText = `${open} - ${close}`; isClosed = false; }
                    }
                    return `<div class="est-hours-row ${isToday ? 'today' : ''}"><span class="day">${d.name}${isToday ? ' (hoje)' : ''}</span><span class="time ${isClosed ? 'closed' : ''}">${timeText}</span></div>`;
                }).join('') + `</div>`;
            } catch {}
        }
        let galleryHtml = '';
        if (photos.length > 0) {
            const maxShow = 5;
            galleryHtml = `<div class="est-gallery">` + photos.slice(0, maxShow).map((p, i) => {
                const isLast = i === maxShow - 1 && photos.length > maxShow;
                return `<div class="est-gallery-item" onclick="openLightboxFromModal(${e.id}, ${i})"><img src="${EstModule.escapeHtml(p)}" alt="">${isLast ? `<div class="est-gallery-more">+${photos.length - maxShow}</div>` : ''}</div>`;
            }).join('') + `</div>`;
        }
        content.innerHTML = `
            <div class="est-modal-hero">
                <img src="${EstModule.escapeHtml(heroImg)}" alt="${EstModule.escapeHtml(e.name)}">
                <div class="est-modal-hero-overlay"></div>
                <button class="est-modal-close" onclick="EstUI.closeModal()"><i class="fas fa-times"></i></button>
                <div class="est-modal-hero-info">
                    <h2>${EstModule.escapeHtml(e.name)}</h2>
                    <div class="est-modal-hero-badges">
                        <span class="est-modal-badge cat"><i class="fas ${cat?.icon || 'fa-tag'}"></i> ${cat?.name || 'Local'}</span>
                        ${isPending ? '<span class="est-modal-badge pending"><i class="fas fa-clock"></i> Pendente</span>' : (isOpen ? '<span class="est-modal-badge open"><i class="fas fa-circle" style="font-size:8px;"></i> Aberto agora</span>' : '<span class="est-modal-badge closed"><i class="fas fa-circle" style="font-size:8px;"></i> Fechado</span>')}
                        ${e.is_verified ? '<span class="est-modal-badge verified"><i class="fas fa-check-circle"></i> Verificado</span>' : ''}
                    </div>
                    ${fullAddress ? `<div class="est-modal-hero-location"><i class="fas fa-map-pin"></i> ${EstModule.escapeHtml(fullAddress)}</div>` : ''}
                </div>
            </div>
            <div class="est-modal-quick-stats">
                <div class="est-quick-stat-item"><i class="fas fa-star est-quick-stat-icon star"></i><div class="est-quick-stat-value">${avgRating || '—'}</div><div class="est-quick-stat-label">Avaliação</div></div>
                <div class="est-quick-stat-item"><i class="fas fa-clock est-quick-stat-icon ${isOpen ? 'open' : ''}"></i><div class="est-quick-stat-value" style="font-size:13px;">${statusText}</div><div class="est-quick-stat-label">Status</div></div>
                <div class="est-quick-stat-item"><i class="fas fa-route est-quick-stat-icon"></i><div class="est-quick-stat-value" style="font-size:14px;">${distanceText || '—'}</div><div class="est-quick-stat-label">Distância</div></div>
            </div>
            <div class="est-modal-primary-actions">
                ${e.latitude && e.longitude ? `<button class="est-action-primary route" onclick="closeEstModalAndRoute(${e.id})"><i class="fas fa-route"></i> Traçar rota</button>` : '<div></div>'}
                ${e.phone ? `<a href="tel:${EstModule.escapeHtml(e.phone)}" class="est-action-primary icon-only"><i class="fas fa-phone"></i></a>` : ''}
                ${e.whatsapp ? `<a href="https://wa.me/55${e.whatsapp.replace(/\D/g,'')}" target="_blank" class="est-action-primary whatsapp"><i class="fab fa-whatsapp"></i></a>` : ''}
                <button class="est-action-primary icon-only" onclick="shareEstablishment(${e.id})"><i class="fas fa-share-alt"></i></button>
            </div>
            ${e.description ? `<div class="est-modal-section"><div class="est-modal-section-title"><i class="fas fa-info-circle"></i> Sobre</div><p class="est-modal-description">${EstModule.escapeHtml(e.description)}</p></div>` : ''}
            ${photos.length > 1 ? `<div class="est-modal-section"><div class="est-modal-section-title"><i class="fas fa-images"></i> Fotos (${photos.length})</div>${galleryHtml}</div>` : ''}
            ${hoursHtml ? `<div class="est-modal-section"><div class="est-modal-section-title"><i class="fas fa-clock"></i> Horário de funcionamento</div>${hoursHtml}</div>` : ''}
            <div class="est-modal-section">
                <div class="est-modal-section-title"><i class="fas fa-list"></i> Informações</div>
                <div class="est-info-grid">
                    ${e.address_street ? `<div class="est-info-block"><i class="fas fa-map-marker-alt"></i><div><div class="label">Endereço</div><div class="value">${EstModule.escapeHtml(e.address_street)}${e.address_number ? ', ' + EstModule.escapeHtml(e.address_number) : ''}<br>${EstModule.escapeHtml(e.neighborhood || '')}</div></div></div>` : ''}
                    ${e.phone ? `<div class="est-info-block"><i class="fas fa-phone"></i><div><div class="label">Telefone</div><div class="value">${EstModule.escapeHtml(e.phone)}</div></div></div>` : ''}
                    ${e.whatsapp ? `<div class="est-info-block"><i class="fab fa-whatsapp" style="color:#25d366;"></i><div><div class="label">WhatsApp</div><div class="value">${EstModule.escapeHtml(e.whatsapp)}</div></div></div>` : ''}
                    ${e.instagram ? `<div class="est-info-block"><i class="fab fa-instagram" style="color:#e1306c;"></i><div><div class="label">Instagram</div><div class="value">${EstModule.escapeHtml(e.instagram)}</div></div></div>` : ''}
                    ${e.website ? `<div class="est-info-block"><i class="fas fa-globe"></i><div><div class="label">Site</div><div class="value">${EstModule.escapeHtml(e.website)}</div></div></div>` : ''}
                    ${e.latitude && e.longitude ? `<div class="est-info-block"><i class="fas fa-map"></i><div><div class="label">Coordenadas</div><div class="value">${e.latitude.toFixed(4)}, ${e.longitude.toFixed(4)}</div></div></div>` : ''}
                </div>
            </div>
            ${e.latitude && e.longitude ? `<div class="est-modal-section"><div class="est-modal-section-title"><i class="fas fa-map"></i> Localização</div><div class="est-mini-map" onclick="closeEstModalAndViewOnMap(${e.id})"><div id="miniMap-${e.id}" style="width:100%;height:100%;"></div></div></div>` : ''}
            <div class="est-modal-section" style="display:flex;gap:8px;">
                <button class="est-action-primary icon-only ${isFav ? 'fav active' : ''}" onclick="EstUI.toggleFavFromModal(${e.id})" style="flex:1;"><i class="fas fa-heart"></i> ${isFav ? 'Favoritado' : 'Favoritar'}</button>
            </div>
            ${!isPending ? `
            <div class="est-modal-section">
                <div class="est-modal-section-title"><i class="fas fa-star" style="color:var(--warning-500);"></i> Avaliações (${reviews.length})</div>
                ${reviews.length > 0 ? `
                    <div class="est-reviews-summary">
                        <div class="est-rating-big"><div class="value">${avgRating}</div><div class="stars">${'★'.repeat(Math.round(avgRating))}${'☆'.repeat(5-Math.round(avgRating))}</div><div class="count">${reviews.length} ${reviews.length === 1 ? 'avaliação' : 'avaliações'}</div></div>
                        <div class="est-rating-bars">${distribution.map(d => `<div class="est-rating-bar-row"><span class="num">${d.star}★</span><div class="est-rating-bar"><div class="est-rating-bar-fill" style="width:${d.pct}%"></div></div><span class="count">${d.count}</span></div>`).join('')}</div>
                    </div>` : `<p style="color:var(--text-muted);font-size:13.5px;margin-bottom:12px;text-align:center;padding:24px 0;">Seja o primeiro a avaliar este local</p>`}
                ${reviews.slice().reverse().slice(0, 5).map(r => {
                    const initials = (r.user_name || 'A').charAt(0).toUpperCase();
                    const date = r.created_at ? new Date(r.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }) : '';
                    return `<div class="est-review"><div class="est-review-avatar">${EstModule.escapeHtml(initials)}</div><div class="est-review-body"><div class="est-review-header"><span class="est-review-author">${EstModule.escapeHtml(r.user_name)}</span>${date ? `<span class="est-review-date">${date}</span>` : ''}</div><div class="est-review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>${r.comment ? `<div class="est-review-comment">${EstModule.escapeHtml(r.comment)}</div>` : ''}</div></div>`;
                }).join('')}
                ${reviews.length > 5 ? `<p style="text-align:center;color:var(--text-muted);font-size:12px;margin-top:8px;">+ ${reviews.length - 5} avaliações anteriores</p>` : ''}
                <button class="est-btn-toggle-review" onclick="toggleReviewForm(this)"><i class="fas fa-plus-circle"></i> Adicionar avaliação</button>
                <div class="est-review-form-wrapper" id="reviewFormWrapper">
                    <form class="est-review-form" onsubmit="EstUI.submitReview(event, ${e.id})">
                        <input type="text" name="name" placeholder="Seu nome" required>
                        <select name="rating" required><option value="">Escolha uma nota</option><option value="5">⭐⭐⭐⭐⭐ Excelente</option><option value="4">⭐⭐⭐⭐ Muito bom</option><option value="3">⭐⭐⭐ Bom</option><option value="2">⭐⭐ Ruim</option><option value="1">⭐ Péssimo</option></select>
                        <textarea name="comment" placeholder="Conte sua experiência (opcional)"></textarea>
                        <button type="submit"><i class="fas fa-paper-plane"></i> Publicar avaliação</button>
                    </form>
                </div>
            </div>` : ''}
        `;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (e.latitude && e.longitude) {
            setTimeout(() => {
                const miniMapEl = document.getElementById('miniMap-' + e.id);
                if (miniMapEl && !miniMapEl._leaflet_id) {
                    const miniMap = L.map(miniMapEl, { center: [e.latitude, e.longitude], zoom: 15, zoomControl: false, scrollWheelZoom: false, dragging: false, attributionControl: false });
                    L.tileLayer(ICONS.satellite, { attribution: '© Esri', maxZoom: 19 }).addTo(miniMap);
                    L.marker([e.latitude, e.longitude], { icon: L.divIcon({ className: 'custom-div-icon', html: '<div style="width:30px;height:30px;background:var(--gradient-primary);border-radius:50%;border:3px solid white;box-shadow:0 4px 14px rgba(37,99,235,.5);"></div>', iconSize: [30, 30], iconAnchor: [15, 15] }) }).addTo(miniMap);
                }
            }, 150);
        }
    }
    function closeModal() { document.getElementById('estModal')?.classList.remove('open'); document.body.style.overflow = ''; }
    function toggleFavFromModal(id) {
        EstModule.toggleFavorite(id);
        const e = EstModule.getById(id);
        if (e) { HistoryModule.add('fav', `Favoritou ${e.name}`, 'Adicionado aos favoritos'); renderHistory(); }
        openDetails(id);
        renderEstablishments();
        updateStats();
    }
    function submitReview(event, id) {
        event.preventDefault();
        const data = new FormData(event.target);
        EstModule.addReview(id, { name: data.get('name'), rating: parseInt(data.get('rating')), comment: data.get('comment') });
        const e = EstModule.getById(id);
        if (e) { HistoryModule.add('review', `Avaliou ${e.name}`, `⭐ ${data.get('rating')} estrelas`); renderHistory(); }
        openDetails(id);
        showToast('⭐ Avaliação enviada!', 'success');
    }
    return { init, renderEstablishments, openDetails, closeModal, toggleFavFromModal, submitReview, updateStats };
})();

/* ============================================================
   13. HELPERS
   ============================================================ */
function shareEstablishment(id) {
    const e = EstModule.getById(id);
    if (!e) return;
    const url = `${window.location.origin}${window.location.pathname}#est-${e.slug}`;
    const text = `📍 ${e.name}\n${e.neighborhood || ''}, Várzea da Palma - MG`;
    if (navigator.share) navigator.share({ title: e.name, text, url }).catch(() => {});
    else navigator.clipboard.writeText(`${text}\n${url}`).then(() => showToast('📤 Link copiado!', 'success')).catch(() => showToast('❌ Não foi possível copiar', 'error'));
}
function closeEstModalAndViewOnMap(id) {
    const e = EstModule.getById(id);
    if (!e) return;
    EstUI.closeModal();
    switchTab('map');
    setTimeout(() => { map?.setView([e.latitude, e.longitude], 17); }, 300);
}
function toggleReviewForm(btn) {
    const wrapper = btn.nextElementSibling;
    if (!wrapper) return;
    const isOpen = wrapper.classList.toggle('open');
    btn.innerHTML = isOpen ? '<i class="fas fa-minus-circle"></i> Cancelar' : '<i class="fas fa-plus-circle"></i> Adicionar avaliação';
}

/* ============================================================
   14. MODERAÇÃO
   ============================================================ */
function approveEst(id) {
    openConfirmModal('Aprovar estabelecimento?', 'Ele ficará visível publicamente.', () => {
        if (EstModule.approveEstablishment(id)) { showToast('✅ Aprovado!', 'success'); EstUI.renderEstablishments(); EstUI.updateStats(); reloadMapMarkers(); }
    });
}
function rejectEst(id) {
    openConfirmModal('Rejeitar estabelecimento?', 'Ele será removido permanentemente.', () => {
        if (EstModule.rejectEstablishment(id)) { showToast('🗑️ Removido', 'info'); EstUI.renderEstablishments(); EstUI.updateStats(); reloadMapMarkers(); }
    });
}
function toggleFilterPending() { document.getElementById('estFilterPending')?.click(); }
function clearUserEstablishments() {
    openConfirmModal('Remover locais cadastrados?', 'Todos os locais que você cadastrou serão removidos.', () => {
        EstModule.clearUserEstablishments();
        showToast('🗑️ Removidos', 'info');
        EstUI.renderEstablishments(); EstUI.updateStats(); reloadMapMarkers();
    });
}

/* ============================================================
   15. CADASTRO
   ============================================================ */
function openRegisterModal() {
    currentStep = 1; formPhotos = [];
    const catSelect = document.getElementById('reg-category');
    catSelect.innerHTML = '<option value="">Selecione...</option>';
    DB_CATEGORIES.forEach(c => { catSelect.innerHTML += `<option value="${c.id}">${c.name}</option>`; });
    ['reg-name','reg-description','reg-photo-url','reg-zipcode','reg-address','reg-number','reg-complement','reg-neighborhood','reg-lat','reg-lng','reg-phone','reg-whatsapp','reg-instagram','reg-website'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.value = ''; el.classList.remove('error','success'); }
    });
    renderFormGallery();
    renderHoursEditor(null);
    updateStepUI();
    document.getElementById('registerModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeRegisterModal() { document.getElementById('registerModal').classList.remove('open'); document.body.style.overflow = ''; }
function updateStepUI() {
    document.querySelectorAll('.est-form-step').forEach(s => s.classList.remove('active'));
    document.querySelector(`.est-form-step[data-step="${currentStep}"]`)?.classList.add('active');
    document.querySelectorAll('.est-form-step-indicator').forEach(ind => {
        const step = parseInt(ind.dataset.step);
        ind.classList.remove('active','done');
        if (step === currentStep) ind.classList.add('active');
        else if (step < currentStep) ind.classList.add('done');
    });
    document.getElementById('btnPrev').style.display = currentStep > 1 ? 'flex' : 'none';
    document.getElementById('btnNext').style.display = currentStep < 4 ? 'flex' : 'none';
    document.getElementById('btnSubmit').style.display = currentStep === 4 ? 'flex' : 'none';
}
function prevStep() { if (currentStep > 1) { currentStep--; updateStepUI(); } }
function nextStep() { if (!validateStep(currentStep)) return; if (currentStep < 4) { currentStep++; updateStepUI(); } }
function validateStep(step) {
    if (step === 1) {
        const name = document.getElementById('reg-name').value.trim();
        const cat = document.getElementById('reg-category').value;
        if (!name || name.length < 3) { showToast('⚠️ Nome deve ter pelo menos 3 caracteres', 'error'); document.getElementById('reg-name').classList.add('error'); return false; }
        document.getElementById('reg-name').classList.remove('error');
        if (!cat) { showToast('⚠️ Selecione uma categoria', 'error'); document.getElementById('reg-category').classList.add('error'); return false; }
        document.getElementById('reg-category').classList.remove('error');
        return true;
    }
    if (step === 2) {
        const address = document.getElementById('reg-address').value.trim();
        const number = document.getElementById('reg-number').value.trim();
        const neighborhood = document.getElementById('reg-neighborhood').value.trim();
        if (!address) { showToast('⚠️ Rua é obrigatória', 'error'); document.getElementById('reg-address').classList.add('error'); return false; }
        if (!number) { showToast('⚠️ Número é obrigatório', 'error'); document.getElementById('reg-number').classList.add('error'); return false; }
        if (!neighborhood) { showToast('⚠️ Bairro é obrigatório', 'error'); document.getElementById('reg-neighborhood').classList.add('error'); return false; }
        return true;
    }
    return true;
}
function submitEstablishment() {
    if (!validateStep(1) || !validateStep(2)) return;
    const hours = collectHoursFromEditor();
    const data = {
        name: document.getElementById('reg-name').value.trim(),
        category_id: document.getElementById('reg-category').value,
        description: document.getElementById('reg-description').value.trim(),
        cover_url: formPhotos[0] || null,
        photos_urls: formPhotos,
        zipcode: document.getElementById('reg-zipcode').value.trim(),
        address_street: document.getElementById('reg-address').value.trim(),
        address_number: document.getElementById('reg-number').value.trim(),
        address_complement: document.getElementById('reg-complement').value.trim(),
        neighborhood: document.getElementById('reg-neighborhood').value.trim(),
        latitude: document.getElementById('reg-lat').value,
        longitude: document.getElementById('reg-lng').value,
        phone: document.getElementById('reg-phone').value.trim(),
        whatsapp: document.getElementById('reg-whatsapp').value.trim(),
        instagram: document.getElementById('reg-instagram').value.trim(),
        website: document.getElementById('reg-website').value.trim(),
        hours_json: hours ? JSON.stringify(hours) : null
    };
    const est = EstModule.createEstablishment(data);
    HistoryModule.add('create', `Cadastrou ${est.name}`, 'Aguardando aprovação');
    renderHistory();
    closeRegisterModal();
    showToast('✅ Cadastro enviado! Aguardando aprovação.', 'success');
    switchTab('explore');
    setTimeout(() => { EstUI.renderEstablishments(); EstUI.updateStats(); reloadMapMarkers(); }, 300);
}
function switchPhotoTab(tab) {
    document.querySelectorAll('.est-form-photo-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.est-form-photo-tab[onclick*="${tab}"]`)?.classList.add('active');
    document.querySelectorAll('.est-form-photo-pane').forEach(p => p.classList.remove('active'));
    document.getElementById(`pane-${tab}`)?.classList.add('active');
}
function addPhotoFromUrl() {
    const input = document.getElementById('reg-photo-url');
    const url = input.value.trim();
    if (!url) return;
    if (formPhotos.length >= 6) { showToast('⚠️ Máximo 6 fotos', 'error'); return; }
    if (!/^https?:\/\//.test(url)) { showToast('⚠️ URL inválida', 'error'); return; }
    formPhotos.push(url);
    input.value = '';
    renderFormGallery();
    showToast('📸 Foto adicionada!', 'success');
}
function handlePhotoUpload(event) {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;
    const remaining = 6 - formPhotos.length;
    if (remaining <= 0) { showToast('⚠️ Máximo 6 fotos', 'error'); return; }
    files.slice(0, remaining).forEach(file => {
        if (file.size > 5 * 1024 * 1024) { showToast(`⚠️ ${file.name} é muito grande (máx 5MB)`, 'error'); return; }
        const reader = new FileReader();
        reader.onload = (e) => { formPhotos.push(e.target.result); renderFormGallery(); };
        reader.readAsDataURL(file);
    });
    event.target.value = '';
}
function removeFormPhoto(index) { formPhotos.splice(index, 1); renderFormGallery(); }
function renderFormGallery() {
    const container = document.getElementById('formGallery');
    if (!container) return;
    container.innerHTML = formPhotos.map((p, i) => `
        <div class="form-gallery-item"><img src="${EstModule.escapeHtml(p)}" alt=""><button type="button" class="remove" onclick="removeFormPhoto(${i})"><i class="fas fa-times"></i></button></div>
    `).join('') + (formPhotos.length < 6 ? `
        <button type="button" class="form-gallery-add" onclick="document.getElementById('reg-photo-file').click()"><i class="fas fa-plus"></i><span>Adicionar</span></button>
    ` : '');
}
function formatCEP(input) {
    let v = input.value.replace(/\D/g, '');
    if (v.length > 5) v = v.slice(0, 5) + '-' + v.slice(5, 8);
    input.value = v;
}
async function buscarCEP(event) {
    const cep = document.getElementById('reg-zipcode').value.replace(/\D/g, '');
    if (cep.length !== 8) { showToast('⚠️ CEP inválido', 'error'); return; }
    const btn = event.target.closest('.est-form-cep-btn');
    const originalHTML = btn.innerHTML;
    btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    try {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await res.json();
        if (data.erro) { showToast('❌ CEP não encontrado', 'error'); return; }
        document.getElementById('reg-address').value = data.logradouro || '';
        document.getElementById('reg-neighborhood').value = data.bairro || '';
        document.getElementById('hint-cep').textContent = `✓ ${data.localidade} - ${data.uf}`;
        showToast('✅ Endereço preenchido!', 'success');
    } catch (err) { showToast('❌ Erro ao buscar CEP', 'error'); }
    finally { btn.disabled = false; btn.innerHTML = originalHTML; }
}
function useMyLocation() {
    if (!navigator.geolocation) { showToast('⚠️ GPS indisponível', 'error'); return; }
    showToast('📍 Obtendo localização...', 'info');
    navigator.geolocation.getCurrentPosition(
        pos => { document.getElementById('reg-lat').value = pos.coords.latitude.toFixed(6); document.getElementById('reg-lng').value = pos.coords.longitude.toFixed(6); showToast('✅ Coordenadas capturadas!', 'success'); },
        () => showToast('❌ Não foi possível obter GPS', 'error'),
        { enableHighAccuracy: true, timeout: 10000 }
    );
}
function formatPhone(input) {
    let v = input.value.replace(/\D/g, '');
    if (v.length <= 10) v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    else v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    input.value = v;
}

/* ============================================================
   16. ROTAS UI
   ============================================================ */
const RoutesUI = (() => {
    function init() { renderRoutes(); updateStats(); }
    function renderRoutes() {
        const container = document.getElementById('routesGrid');
        if (!container) return;
        container.innerHTML = DB_ROUTES.map(route => {
            const stops = route.stops.map(id => EstModule.getById(id)).filter(Boolean);
            return `
                <div class="route-card">
                    <div class="route-card-header">
                        ${route.image ? `<img src="${route.image}" alt="">` : ''}
                        <span class="route-badge ${route.badge}">${route.badgeLabel}</span>
                        <span class="route-duration-badge"><i class="fas fa-clock"></i> ${route.duration}</span>
                    </div>
                    <div class="route-card-body">
                        <div class="route-title">${route.name}</div>
                        <div class="route-desc">${route.description}</div>
                        <div class="route-stops">${stops.map((s, i) => `<div class="route-stop"><span class="route-stop-num">${i + 1}</span><span>${EstModule.escapeHtml(s.name)}</span></div>`).join('')}</div>
                        <div class="route-actions">
                            <button class="route-btn primary" onclick="startRouteOnMap(${route.id})"><i class="fas fa-route"></i> Traçar rota</button>
                            <button class="route-btn secondary" onclick="viewRouteOnMap(${route.id})"><i class="fas fa-map"></i> Ver no mapa</button>
                        </div>
                    </div>
                </div>`;
        }).join('');
    }
    function updateStats() {
        const el1 = document.getElementById('routesCount');
        const el2 = document.getElementById('routesStops');
        if (el1) el1.textContent = DB_ROUTES.length;
        if (el2) el2.textContent = DB_ROUTES.reduce((acc, r) => acc + r.stops.length, 0);
    }
    return { init, renderRoutes, updateStats };
})();

function startRouteOnMap(routeId) {
    const route = DB_ROUTES.find(r => r.id === routeId);
    if (!route || route.stops.length === 0) return;
    const firstStop = EstModule.getById(route.stops[0]);
    if (!firstStop) return;
    HistoryModule.add('route', 'Rota iniciada', route.name);
    renderHistory();
    traceRouteTo(firstStop.id);
    showToast(`🚀 ${route.name}`, 'success');
}
function viewRouteOnMap(routeId) {
    const route = DB_ROUTES.find(r => r.id === routeId);
    if (!route) return;
    switchTab('map');
    const stops = route.stops.map(id => EstModule.getById(id)).filter(Boolean);
    if (stops.length === 0) return;
    const lats = stops.map(s => s.latitude);
    const lngs = stops.map(s => s.longitude);
    const cLat = (Math.min(...lats) + Math.max(...lats)) / 2;
    const cLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;
    setTimeout(() => { map?.setView([cLat, cLng], 14); showToast(`🗺️ Rota: ${route.name}`, 'info'); }, 300);
}

/* ============================================================
   17. ROTEAMENTO
   ============================================================ */
function setMapLayer(type, btn) {
    document.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const indicator = document.getElementById('mapInfoIndicator');
    const indicatorText = document.getElementById('mapInfoText');
    if (tileLayer) { map.removeLayer(tileLayer); tileLayer = null; }
    if (type === 'sentinel') {
        if (!SENTINEL_CONFIG.instanceId || SENTINEL_CONFIG.instanceId === 'COLE_SEU_INSTANCE_ID_AQUI') {
            showToast('⚠️ Configure o Instance ID do Sentinel-2 no código', 'error');
            document.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.map-btn[onclick*="esri"]')?.classList.add('active');
            tileLayer = L.tileLayer(ICONS.satellite, { attribution: '© Esri World Imagery', maxZoom: 19 }).addTo(map);
            return;
        }
        try {
            tileLayer = L.tileLayer.wms(`https://sh.dataspace.copernicus.eu/ogc/wms/${SENTINEL_CONFIG.instanceId}`, {
                layers: SENTINEL_CONFIG.layer, format: 'image/png', transparent: true, version: '1.3.0',
                attribution: '© ESA Sentinel-2 / Copernicus', maxZoom: 16,
                maxcc: SENTINEL_CONFIG.maxCloudCoverage, time: SENTINEL_CONFIG.timeRange, tileSize: 256, uppercase: true
            }).addTo(map);
            if (indicator && indicatorText) {
                indicator.classList.add('sentinel');
                indicatorText.textContent = `Sentinel-2 · ${SENTINEL_CONFIG.timeRange.split('/')[1]}`;
            }
            showToast('🛰️ Sentinel-2 ativado', 'success');
            let errorCount = 0;
            tileLayer.on('tileerror', () => {
                errorCount++;
                if (errorCount === 3) { showToast('⚠️ Sentinel-2 não respondeu. Voltando para Esri...', 'error'); setMapLayer('esri'); }
            });
        } catch (err) { showToast('❌ Erro ao carregar Sentinel-2', 'error'); setMapLayer('esri'); }
    } else {
        tileLayer = L.tileLayer(ICONS.satellite, { attribution: '© Esri World Imagery', maxZoom: 19 }).addTo(map);
        if (indicator && indicatorText) {
            indicator.classList.remove('sentinel');
            indicatorText.textContent = 'Esri — imagem de satélite';
        }
    }
}
function closeEstModalAndRoute(estId) {
    EstUI.closeModal();
    setTimeout(() => traceRouteTo(estId), 300);
}
function traceRouteTo(estId) {
    const est = EstModule.getById(estId);
    if (!est) return;
    if (!est.latitude || !est.longitude) { showToast('⚠️ Este local não tem coordenadas', 'error'); return; }
    switchTab('map');
    HistoryModule.add('route', `Rota para ${est.name}`, 'Calculando...');
    renderHistory();
    if (userLocation) { createRoute(userLocation.lat, userLocation.lng, est.latitude, est.longitude, est); return; }
    if (!navigator.geolocation) { createRoute(CITY.lat, CITY.lng, est.latitude, est.longitude, est); return; }
    showToast('📍 Obtendo localização...', 'info');
    navigator.geolocation.getCurrentPosition(
        pos => { userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude }; createRoute(userLocation.lat, userLocation.lng, est.latitude, est.longitude, est); },
        () => createRoute(CITY.lat, CITY.lng, est.latitude, est.longitude, est),
        { enableHighAccuracy: true, timeout: 10000 }
    );
}
function createRoute(startLat, startLng, endLat, endLng, dest) {
    if (routingControl) { map.removeControl(routingControl); routingControl = null; }
    routingControl = L.Routing.control({
        waypoints: [L.latLng(startLat, startLng), L.latLng(endLat, endLng)],
        routeWhileDragging: false, showAlternatives: false, addWaypoints: false,
        fitSelectedRoutes: true, show: false,
        lineOptions: { styles: [{ color: '#2563EB', weight: 7, opacity: 0.25 }, { color: '#2563EB', weight: 5, opacity: 0.9 }] },
        createMarker: (i, wp) => {
            if (i === 0) return L.marker(wp.latLng, { icon: L.divIcon({ className: 'custom-div-icon', html: '<div style="width:20px;height:20px;background:#10b981;border-radius:50%;border:4px solid white;box-shadow:0 3px 10px rgba(0,0,0,.3);"></div>', iconSize: [20,20], iconAnchor: [10,10] }), zIndexOffset: 2000 });
            return L.marker(wp.latLng, { icon: L.divIcon({ className: 'custom-div-icon', html: '<div class="custom-pin city"><div class="custom-pin-body"><i class="fas fa-flag-checkered"></i></div></div>', iconSize: [40,40], iconAnchor: [20,20] }), zIndexOffset: 1500 });
        }
    }).addTo(map);
    routingControl.on('routesfound', e => {
        const route = e.routes[0];
        const { summary, instructions } = route;
        document.getElementById('routeDistance').textContent = (summary.totalDistance / 1000).toFixed(1) + ' km';
        document.getElementById('routeTime').textContent = Math.round(summary.totalTime / 60) + ' min';
        document.getElementById('routeStepsCount').textContent = instructions.length;
        const container = document.getElementById('routeSteps');
        const iconMap = { 'Head': 'fa-arrow-up', 'Turn': 'fa-arrow-right', 'Continue': 'fa-arrow-right', 'Roundabout': 'fa-arrows-spin', 'Merge': 'fa-code-merge', 'Destination': 'fa-flag-checkered', 'Waypoint': 'fa-location-dot', 'EndOfRoad': 'fa-arrow-right', 'Fork': 'fa-code-branch' };
        container.innerHTML = instructions.map(inst => {
            const mod = (inst.modifier || '').toLowerCase();
            let icon = iconMap[inst.type] || 'fa-arrow-right';
            if (mod.includes('left') && (inst.type === 'Turn' || inst.type === 'Continue')) icon = 'fa-arrow-left';
            return `<div class="route-step"><div class="route-step-icon"><i class="fas ${icon}"></i></div><div class="route-step-text">${EstModule.escapeHtml(inst.text)}</div><div class="route-step-distance">${(inst.distance / 1000).toFixed(1)} km</div></div>`;
        }).join('');
        document.getElementById('routePanel').classList.add('open');
        showClearRouteBtn();
        setTimeout(() => {
            if (map && route.coordinates.length > 0) {
                const bounds = L.latLngBounds(route.coordinates.map(c => [c.lat, c.lng]));
                map.fitBounds(bounds, { padding: [80, 80], maxZoom: 15 });
            }
        }, 200);
        HistoryModule.add('route', `Rota para ${dest.name}`, `${(summary.totalDistance / 1000).toFixed(1)} km • ${Math.round(summary.totalTime / 60)} min`);
        renderHistory();
        showToast('🗺️ Rota calculada!', 'success');
    });
    routingControl.on('routingerror', () => showToast('❌ Erro ao calcular rota', 'error'));
    showToast('Calculando rota...', 'info');
}
function clearRoute() {
    if (routingControl) { map.removeControl(routingControl); routingControl = null; }
    document.getElementById('routePanel')?.classList.remove('open');
    hideClearRouteBtn();
    showToast('🧹 Rota removida', 'info');
}
function showClearRouteBtn() {
    let btn = document.getElementById('clearRouteBtn');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'clearRouteBtn';
        btn.className = 'clear-route-btn';
        btn.innerHTML = '<i class="fas fa-times"></i>';
        btn.onclick = clearRoute;
        document.querySelector('.map-view')?.appendChild(btn);
    }
    btn.classList.add('visible');
}
function hideClearRouteBtn() { document.getElementById('clearRouteBtn')?.classList.remove('visible'); }

/* ============================================================
   18. BUSCA GLOBAL
   ============================================================ */
const GlobalSearch = (() => {
    let _focusedIndex = -1;
    let _results = [];
    function init() {
        const input = document.getElementById('globalSearchInput');
        const dropdown = document.getElementById('globalSearchDropdown');
        const clearBtn = document.getElementById('globalSearchClear');
        if (!input || !dropdown) return;
        let timer;
        input.addEventListener('input', (e) => {
            clearTimeout(timer);
            const q = e.target.value.trim();
            clearBtn.style.display = q ? 'flex' : 'none';
            if (!q) { close(); return; }
            timer = setTimeout(() => render(q), 180);
        });
        input.addEventListener('focus', () => { if (input.value.trim()) render(input.value.trim()); });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') { close(); input.blur(); }
            else if (e.key === 'ArrowDown') { e.preventDefault(); moveFocus(1); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); moveFocus(-1); }
            else if (e.key === 'Enter' && _focusedIndex >= 0) { e.preventDefault(); _results[_focusedIndex]?.action?.(); }
        });
        document.addEventListener('click', (e) => { if (!e.target.closest('#globalSearchWrapper')) close(); });
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); input.focus(); input.select(); }
        });
    }
    function render(q) {
        const dropdown = document.getElementById('globalSearchDropdown');
        const ql = q.toLowerCase();
        _results = []; _focusedIndex = -1;
        const establishments = EstModule.getAll().filter(e => (e.name || '').toLowerCase().includes(ql) || (e.description || '').toLowerCase().includes(ql) || (e.neighborhood || '').toLowerCase().includes(ql)).slice(0, 5);
        const categories = EstModule.getCategories().filter(c => c.name.toLowerCase().includes(ql)).slice(0, 4);
        const actions = [
            { label: 'Ver mapa', icon: 'fa-map', action: () => { switchTab('map'); close(); } },
            { label: 'Explorar estabelecimentos', icon: 'fa-store', action: () => { switchTab('explore'); close(); } },
            { label: 'Cadastrar novo local', icon: 'fa-plus-circle', action: () => { openRegisterModal(); close(); } },
            { label: 'Ver rotas turísticas', icon: 'fa-route', action: () => { switchTab('routes'); close(); } }
        ].filter(a => a.label.toLowerCase().includes(ql)).slice(0, 3);
        let html = '';
        if (establishments.length > 0) {
            html += `<div class="search-section"><div class="search-section-title">Estabelecimentos</div>`;
            establishments.forEach(e => {
                const cat = EstModule.getCategoryById(e.category_id);
                const isOpen = EstModule.isOpenNow(e);
                const idx = _results.length;
                _results.push({ action: () => { close(); switchTab('explore'); setTimeout(() => EstUI.openDetails(e.id), 200); } });
                html += `<button class="search-item" data-idx="${idx}" onclick="GlobalSearch.pick(${idx})"><div class="search-item-icon ${isOpen ? 'green' : 'gray'}"><i class="fas ${cat?.icon || 'fa-store'}"></i></div><div class="search-item-content"><div class="search-item-title">${EstModule.escapeHtml(e.name)}</div><div class="search-item-subtitle">${cat?.name || ''}${e.neighborhood ? ' • ' + EstModule.escapeHtml(e.neighborhood) : ''}</div></div><span class="search-item-badge ${isOpen ? 'open' : 'closed'}">${isOpen ? 'Aberto' : 'Fechado'}</span></button>`;
            });
            html += `</div>`;
        }
        if (categories.length > 0) {
            html += `<div class="search-section"><div class="search-section-title">Categorias</div>`;
            categories.forEach(c => {
                const idx = _results.length;
                _results.push({ action: () => { close(); switchTab('explore'); setTimeout(() => { document.querySelector(`.est-chip[data-category="${c.id}"]`)?.click(); }, 200); } });
                const count = EstModule.getAll().filter(e => e.category_id === c.id).length;
                html += `<button class="search-item" data-idx="${idx}" onclick="GlobalSearch.pick(${idx})"><div class="search-item-icon purple"><i class="fas ${c.icon || 'fa-tag'}"></i></div><div class="search-item-content"><div class="search-item-title">${EstModule.escapeHtml(c.name)}</div><div class="search-item-subtitle">${count} ${count === 1 ? 'local' : 'locais'}</div></div></button>`;
            });
            html += `</div>`;
        }
        if (actions.length > 0) {
            html += `<div class="search-section"><div class="search-section-title">Ações rápidas</div>`;
            actions.forEach(a => {
                const idx = _results.length;
                _results.push({ action: a.action });
                html += `<button class="search-item" data-idx="${idx}" onclick="GlobalSearch.pick(${idx})"><div class="search-item-icon orange"><i class="fas ${a.icon}"></i></div><div class="search-item-content"><div class="search-item-title">${a.label}</div></div><i class="fas fa-arrow-right" style="color:var(--text-muted);font-size:12px;"></i></button>`;
            });
            html += `</div>`;
        }
        if (_results.length === 0) html = `<div class="search-empty"><i class="fas fa-search"></i>Nenhum resultado para "<strong>${EstModule.escapeHtml(q)}</strong>"</div>`;
        else html += `<div class="search-footer-hint"><span><kbd>↑</kbd> <kbd>↓</kbd> navegar · <kbd>Enter</kbd> abrir · <kbd>Esc</kbd> fechar</span><span>${_results.length} resultado${_results.length > 1 ? 's' : ''}</span></div>`;
        dropdown.innerHTML = html;
        dropdown.classList.add('open');
    }
    function pick(idx) { _results[idx]?.action?.(); }
    function moveFocus(dir) {
        const items = document.querySelectorAll('.search-dropdown .search-item');
        if (items.length === 0) return;
        _focusedIndex += dir;
        if (_focusedIndex < 0) _focusedIndex = items.length - 1;
        if (_focusedIndex >= items.length) _focusedIndex = 0;
        items.forEach((it, i) => it.classList.toggle('focused', i === _focusedIndex));
        items[_focusedIndex]?.scrollIntoView({ block: 'nearest' });
    }
    function close() { document.getElementById('globalSearchDropdown')?.classList.remove('open'); _focusedIndex = -1; }
    function clear() {
        const input = document.getElementById('globalSearchInput');
        if (input) input.value = '';
        document.getElementById('globalSearchClear').style.display = 'none';
        close();
    }
    return { init, pick, close, clear };
})();
function clearGlobalSearch() { GlobalSearch.clear(); }

/* ============================================================
   19. HISTÓRICO UI
   ============================================================ */
function renderHistory() {
    const container = document.getElementById('historyTimeline');
    if (!container) return;
    const stats = HistoryModule.getStats();
    document.getElementById('historyTotal').textContent = stats.total;
    document.getElementById('historyVisits').textContent = stats.visits;
    document.getElementById('historyRoutes').textContent = stats.routes;
    document.getElementById('historyFavs').textContent = stats.favs;
    const badge = document.getElementById('notifBadge');
    if (badge) badge.textContent = stats.total > 99 ? '99+' : stats.total;
    const events = HistoryModule.getByType(_historyFilter);
    if (events.length === 0) {
        container.innerHTML = `<div class="est-empty"><i class="fas fa-clock"></i><h3>Sem eventos</h3><p>Nenhuma atividade registrada.</p></div>`;
        return;
    }
    const grouped = {};
    events.forEach(e => {
        const d = new Date(e.timestamp);
        const key = d.toDateString();
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(e);
    });
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    container.innerHTML = Object.keys(grouped).map(dayKey => {
        let label = dayKey;
        if (dayKey === today) label = 'Hoje';
        else if (dayKey === yesterday) label = 'Ontem';
        else { const d = new Date(dayKey); label = d.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' }); }
        const items = grouped[dayKey].map(e => renderTimelineItem(e)).join('');
        return `<div class="timeline-day"><div class="timeline-day-label">${label}</div>${items}</div>`;
    }).join('');
}
function renderTimelineItem(e) {
    const iconMap = {
        visit: { icon: 'fa-map-pin', color: 'green' }, route: { icon: 'fa-route', color: 'blue' },
        fav: { icon: 'fa-heart', color: 'red' }, review: { icon: 'fa-star', color: 'orange' },
        create: { icon: 'fa-plus-circle', color: 'purple' }
    };
    const meta = iconMap[e.type] || { icon: 'fa-circle', color: 'gray' };
    const time = new Date(e.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    return `<div class="timeline-item"><div class="timeline-icon ${meta.color}"><i class="fas ${meta.icon}"></i></div><div class="timeline-content"><div class="timeline-title">${EstModule.escapeHtml(e.title)}</div><div class="timeline-desc">${EstModule.escapeHtml(e.desc)}</div><div class="timeline-time"><i class="fas fa-clock"></i> ${time}</div></div></div>`;
}
function clearHistory() {
    openConfirmModal('Limpar histórico?', 'Todas as atividades registradas serão apagadas.', () => {
        HistoryModule.clear();
        renderHistory();
        showToast('🗑️ Histórico limpo', 'info');
    });
}
document.addEventListener('click', e => {
    const filter = e.target.closest('.history-filter');
    if (!filter) return;
    document.querySelectorAll('.history-filter').forEach(f => f.classList.remove('active'));
    filter.classList.add('active');
    _historyFilter = filter.dataset.filter;
    renderHistory();
});

/* ============================================================
   20. CONFIGURAÇÕES
   ============================================================ */
document.addEventListener('click', e => {
    const item = e.target.closest('.settings-nav-item');
    if (!item) return;
    document.querySelectorAll('.settings-nav-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    const panel = item.dataset.panel;
    document.querySelectorAll('.settings-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(`panel-${panel}`)?.classList.add('active');
    if (panel === 'dados') updateDataSize();
});
function toggleSetting(el, name) { el.classList.toggle('active'); showToast(`${el.classList.contains('active') ? '✅' : '⭕'} ${name}`, 'info'); }
function toggleDarkMode(el) {
    el.classList.toggle('active');
    const isDark = el.classList.contains('active');
    document.body.classList.toggle('dark', isDark);
    showToast(`🌙 Modo ${isDark ? 'escuro' : 'claro'}`, 'info');
}
function clearFilters() {
    document.getElementById('estSearch').value = '';
    document.getElementById('estFilterOpen')?.classList.remove('active');
    document.getElementById('estFilterFav')?.classList.remove('active');
    document.getElementById('estFilterPending')?.classList.remove('active');
    document.querySelectorAll('.est-chip').forEach(c => c.classList.remove('active'));
    document.querySelector('.est-chip[data-category=""]')?.classList.add('active');
    EstUI.renderEstablishments();
}
function toggleFilterOpen() { document.getElementById('estFilterOpen')?.click(); }
function clearFavorites() {
    openConfirmModal('Remover favoritos?', 'Todos os locais favoritados serão removidos.', () => {
        localStorage.removeItem('vzp_favorites');
        EstModule.init();
        EstUI.renderEstablishments();
        EstUI.updateStats();
        showToast('💔 Favoritos limpos', 'info');
    });
}
function clearReviews() {
    openConfirmModal('Apagar avaliações?', 'Todas as suas avaliações serão apagadas.', () => {
        localStorage.removeItem('vzp_reviews');
        showToast('⭐ Avaliações limpas', 'info');
    });
}
function exportData() {
    const data = {
        exported_at: new Date().toISOString(), version: '4.2.0',
        favorites: JSON.parse(localStorage.getItem('vzp_favorites') || '[]'),
        history: JSON.parse(localStorage.getItem('vzp_history') || '[]'),
        reviews: JSON.parse(localStorage.getItem('vzp_reviews') || '{}'),
        user_establishments: JSON.parse(localStorage.getItem('vzp_user_establishments') || '[]')
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vzp-conecta-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('📥 Dados exportados!', 'success');
}
function resetAll() {
    openConfirmModal('Resetar TUDO?', 'Todos os dados do app serão apagados. Esta ação é irreversível.', () => {
        ['vzp_favorites','vzp_history','vzp_reviews','vzp_user_establishments','vzp_session','vzp_users'].forEach(k => localStorage.removeItem(k));
        EstModule.init();
        HistoryModule.init();
        EstUI.renderEstablishments();
        EstUI.updateStats();
        renderHistory();
        reloadMapMarkers();
        showToast('🔄 App resetado', 'info');
    });
}
function shareApp() {
    const text = '📍 VZP Conecta — Guia comercial de Várzea da Palma - MG';
    const url = window.location.href;
    if (navigator.share) navigator.share({ title: 'VZP Conecta', text, url }).catch(() => {});
    else navigator.clipboard.writeText(`${text}\n${url}`).then(() => showToast('📤 Link copiado!', 'success')).catch(() => showToast('❌ Erro', 'error'));
}
function updateDataSize() {
    let total = 0;
    for (const k in localStorage) { if (k.startsWith('vzp_')) total += (localStorage[k] || '').length; }
    const el = document.getElementById('dataSize');
    if (el) el.textContent = `${(total / 1024).toFixed(1)} KB`;
}

/* ============================================================
   21. MAPA
   ============================================================ */
function createPinIcon(categoryId, isPending, name) {
    const cat = EstModule.getCategoryById(categoryId);
    const colorClass = isPending ? 'pending' : (CAT_ICON_CLASS[categoryId] || 'shop');
    const icon = isPending ? 'fa-clock' : (cat?.icon || 'fa-store');
    return L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="custom-pin ${colorClass}"><div class="custom-pin-body"><i class="fas ${icon}"></i></div><div class="custom-pin-label">${EstModule.escapeHtml(name)}</div></div>`,
        iconSize: [36, 44], iconAnchor: [18, 44], popupAnchor: [0, -40], tooltipAnchor: [0, -40]
    });
}
function initMap() {
map = L.map('map', { 
    center: [CITY.lat, CITY.lng], 
    zoom: CITY.zoom, 
    minZoom: 13,        // Limite mínimo (não deixa afastar demais)
    maxZoom: 18,        // Limite máximo (não deixa aproximar até apagar o mapa)
    zoomControl: false, 
    attributionControl: true, 
    preferCanvas: true 
});
    tileLayer = L.tileLayer(ICONS.satellite, { attribution: '© Esri World Imagery', maxZoom: 19 }).addTo(map);
    L.marker([CITY.lat, CITY.lng], {
        icon: L.divIcon({ className: 'custom-div-icon', html: '<div class="custom-pin city"><div class="custom-pin-body"><i class="fas fa-city"></i></div></div>', iconSize: [48, 58], iconAnchor: [24, 58] }),
        zIndexOffset: -100
    }).addTo(map).bindPopup(`<div class="map-popup"><div class="map-popup-content"><div class="map-popup-title">Várzea da Palma - MG</div><div class="map-popup-meta"><i class="fas fa-map-pin"></i> Centro da cidade</div></div></div>`);
    loadMapMarkers();
    renderMapCategories();
    setTimeout(() => map.invalidateSize(), 300);
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            pos => { userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude }; const g = document.getElementById('gpsStatus'); if (g) g.textContent = `GPS ±${Math.round(pos.coords.accuracy)}m`; },
            () => {},
            { enableHighAccuracy: true, maximumAge: 30000, timeout: 15000 }
        );
    }
    setTimeout(() => {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#est-')) {
            const slug = hash.replace('#est-', '');
            const est = EstModule.getBySlug(slug);
            if (est) { switchTab('explore'); setTimeout(() => EstUI.openDetails(est.id), 500); }
        }
    }, 800);
}
function loadMapMarkers() {
    placeMarkers.forEach(m => map.removeLayer(m));
    placeMarkers = [];
    EstModule.getAll().forEach(e => {
        const coords = getEstablishmentCoords(e);
        if (!coords.lat || !coords.lng) return;
        const isPending = e.status === 'pending';
        const icon = createPinIcon(e.category_id, isPending, e.name);
        const marker = L.marker([coords.lat, coords.lng], { icon }).addTo(map);
        marker.estData = e;
        const isOpen = EstModule.isOpenNow(e);
        const cat = EstModule.getCategoryById(e.category_id);
        const cover = getEstablishmentPhotos(e)[0];
        marker.bindPopup(`
            <div class="map-popup">
                <img class="map-popup-img" src="${EstModule.escapeHtml(cover)}" alt="">
                <div class="map-popup-content">
                    <div class="map-popup-title">${EstModule.escapeHtml(e.name)}</div>
                    <div class="map-popup-meta"><i class="fas ${cat?.icon || 'fa-store'}"></i> ${cat?.name || ''}${e.neighborhood ? ` • ${EstModule.escapeHtml(e.neighborhood)}` : ''}</div>
                    <span class="map-popup-status ${isOpen ? 'open' : 'closed'}"><i class="fas fa-circle" style="font-size:6px;"></i> ${isOpen ? 'Aberto agora' : 'Fechado'}</span>
                    <button class="map-popup-btn" onclick="openEstFromMap(${e.id})"><i class="fas fa-info-circle"></i> Ver detalhes</button>
                </div>
            </div>`, { maxWidth: 260, minWidth: 220, closeButton: true });
        marker.on('click', () => openMapSidecard(e.id));
        placeMarkers.push(marker);
    });
}
function reloadMapMarkers() { if (map) loadMapMarkers(); }

function openMapSidecard(estId) {
    const e = EstModule.getById(estId);
    if (!e) return;
    _sidecardEstId = estId;
    const cat = EstModule.getCategoryById(e.category_id);
    const isOpen = EstModule.isOpenNow(e);
    const cover = getEstablishmentPhotos(e)[0];
    const statusText = EstModule.getStatusText(e);
    document.getElementById('mapSidecardImg').src = cover;
    document.getElementById('mapSidecardBadge').innerHTML = `<i class="fas ${cat?.icon || 'fa-store'}"></i> ${cat?.name || 'Local'}`;
    document.getElementById('mapSidecardTitle').textContent = e.name;
    const addr = [e.address_street, e.address_number].filter(Boolean).join(', ');
    const fullAddr = addr + (e.neighborhood ? ` — ${e.neighborhood}` : '');
    let distanceText = null;
    if (userLocation) {
        const c = getEstablishmentCoords(e);
        const d = EstModule.distanceKm(userLocation.lat, userLocation.lng, c.lat, c.lng);
        distanceText = d < 1 ? Math.round(d * 1000) + ' m' : d.toFixed(1) + ' km';
    }
    document.getElementById('mapSidecardBody').innerHTML = `
        <div class="map-sidecard-meta">
            ${fullAddr ? `<div class="map-sidecard-meta-item"><i class="fas fa-map-marker-alt"></i> ${EstModule.escapeHtml(fullAddr)}</div>` : ''}
            <div class="map-sidecard-meta-item"><i class="fas fa-clock"></i><span style="color: ${isOpen ? 'var(--success-600)' : 'var(--text-muted)'}; font-weight: 700;">${statusText}</span></div>
            ${distanceText ? `<div class="map-sidecard-meta-item"><i class="fas fa-route"></i> ${distanceText} de você</div>` : ''}
            ${e.phone ? `<div class="map-sidecard-meta-item"><i class="fas fa-phone"></i> ${EstModule.escapeHtml(e.phone)}</div>` : ''}
        </div>
        <div class="map-sidecard-actions">
            <button class="map-sidecard-action primary" onclick="openEstFromMap(${e.id})"><i class="fas fa-info-circle"></i> Ver detalhes completos</button>
            ${e.latitude || REAL_COORDS[e.id] ? `<button class="map-sidecard-action secondary" onclick="routeFromMap(${e.id})"><i class="fas fa-route"></i> Rota</button>` : ''}
            ${e.whatsapp ? `<a href="https://wa.me/55${e.whatsapp.replace(/\D/g,'')}" target="_blank" class="map-sidecard-action secondary"><i class="fab fa-whatsapp"></i> WhatsApp</a>` : (e.phone ? `<a href="tel:${EstModule.escapeHtml(e.phone)}" class="map-sidecard-action secondary"><i class="fas fa-phone"></i> Ligar</a>` : '')}
        </div>`;
    document.getElementById('mapSidecard').classList.add('open');
    const coords = getEstablishmentCoords(e);
    map.flyTo([coords.lat, coords.lng], 17, { duration: 0.6 });
}
function closeMapSidecard() { document.getElementById('mapSidecard').classList.remove('open'); _sidecardEstId = null; }
function openEstFromMap(estId) { closeMapSidecard(); if (map) map.closePopup(); EstUI.openDetails(estId); }
function routeFromMap(estId) { closeMapSidecard(); if (map) map.closePopup(); traceRouteTo(estId); }

function renderMapCategories() {
    const container = document.getElementById('mapCategories');
    if (!container) return;
    const roots = EstModule.getCategories().filter(c => c.parent_id === null);
    container.innerHTML = `
        <button class="category-chip active" onclick="filterMapCategory(null, this)"><i class="fas fa-layer-group"></i> Todos</button>
        ${roots.map(c => `<button class="category-chip" onclick="filterMapCategory(${c.id}, this)"><i class="fas ${c.icon}"></i> ${c.name}</button>`).join('')}
    `;

    if (typeof L !== 'undefined' && L.DomEvent) {
        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.disableScrollPropagation(container);
    }

    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => { isDown = false; });
    container.addEventListener('mouseup', () => { isDown = false; });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
}

function filterMapCategory(id, btn) {
    document.querySelectorAll('#mapCategories .category-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    placeMarkers.forEach(m => {
        const match = id === null || m.estData.category_id === id;
        if (match) { m.setOpacity(1); if (m._icon) m._icon.style.display = ''; }
        else m.setOpacity(0.15);
    });
}

function zoomIn() { map?.zoomIn(); }
function zoomOut() { map?.zoomOut(); }
function goToCurrentLocation() {
    if (!navigator.geolocation) { showToast('⚠️ GPS indisponível', 'error'); return; }
    showToast('📍 Obtendo localização...', 'info');
    navigator.geolocation.getCurrentPosition(
        pos => {
            switchTab('map');
            userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
            map?.flyTo([pos.coords.latitude, pos.coords.longitude], 17, { duration: 0.8 });
            if (window._userMarker) map.removeLayer(window._userMarker);
            window._userMarker = L.marker([pos.coords.latitude, pos.coords.longitude], {
                icon: L.divIcon({ className: 'custom-div-icon', html: '<div style="width:20px;height:20px;background:#10b981;border-radius:50%;border:4px solid white;box-shadow:0 0 0 8px rgba(16,185,129,0.2), 0 4px 12px rgba(0,0,0,0.3);animation:pulse-dot 2s infinite;"></div>', iconSize: [20, 20], iconAnchor: [10, 10] })
            }).addTo(map).bindPopup('<b>Você está aqui</b>');
            showToast('📍 Localização encontrada!', 'success');
        },
        () => { map?.setView([CITY.lat, CITY.lng], CITY.zoom); showToast('⚠️ Não foi possível obter localização', 'error'); },
        { enableHighAccuracy: true, timeout: 10000 }
    );
}

/* ============================================================
   22. TABS
   ============================================================ */
function switchTab(tab) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.getElementById(`tab-${tab}`)?.classList.add('active');
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.querySelector(`.nav-item[data-tab="${tab}"]`)?.classList.add('active');
    if (tab === 'map') setTimeout(() => map && map.invalidateSize(), 150);
    if (tab === 'explore') EstUI.updateStats();
    if (tab === 'routes') RoutesUI.updateStats();
    if (tab === 'history') renderHistory();
}
document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

/* ============================================================
   23. START
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    EstModule.init();
    HistoryModule.init();
    initMap();
    EstUI.init();
    RoutesUI.init();
    renderHistory();
    updateDataSize();
    checkAuth();
    GlobalSearch.init();
    console.log('🚀 VZP Conecta v4.2 — separado em HTML / CSS / JS');
});