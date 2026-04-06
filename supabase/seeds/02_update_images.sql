-- Aggiunge image_url ai contenuti seed
-- Incollare nell'SQL Editor di Supabase Dashboard ed eseguire

UPDATE contents SET image_url = '/images/hemp_greenhouse.png'
WHERE slug = 'coltivazione-idroponica-canapa-puglia';

UPDATE contents SET image_url = '/images/lab_analysis.png'
WHERE slug = 'analisi-nutraceutica-profilo-aminoacidico';

UPDATE contents SET image_url = '/images/industrial_hemp_field.png'
WHERE slug = 'sviluppo-tempeh-canapa-meat-substitute';

UPDATE contents SET image_url = '/images/hemp_greenhouse.png'
WHERE slug = 'microgreens-canapa-produzione-caratteristiche';

UPDATE contents SET image_url = '/images/hemp_research.png'
WHERE slug = 'normativa-novel-food-derivati-canapa-2026';

UPDATE contents SET image_url = '/images/industrial_hemp_field.png'
WHERE slug = 'bando-regione-puglia-filiera-canapa-2026';

UPDATE contents SET image_url = '/images/hemp_research.png'
WHERE slug = 'evento-open-day-hempro-bari-aprile-2026';

UPDATE contents SET image_url = '/images/lab_analysis.png'
WHERE slug = 'profilo-lipidico-varieta-canapicole-pugliesi';

UPDATE contents SET image_url = '/images/industrial_hemp_field.png'
WHERE slug = 'podcast-canapa-sostenibilita-agricola';
