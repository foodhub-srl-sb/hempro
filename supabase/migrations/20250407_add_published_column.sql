-- Aggiunge la colonna published alla tabella contents
-- I contenuti esistenti vengono impostati come visibili (true) di default

ALTER TABLE contents
ADD COLUMN IF NOT EXISTS published BOOLEAN NOT NULL DEFAULT TRUE;

-- Aggiorna i contenuti esistenti che potrebbero non avere il valore
UPDATE contents SET published = TRUE WHERE published IS NULL;
