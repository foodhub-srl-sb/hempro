# Aggiungere Nuovo Contenuto

## Obiettivo
Aggiungere un nuovo articolo, video, podcast o altro contenuto al sito HEMPRO.

## Input Richiesti
- **Titolo**: Il titolo del contenuto
- **Tipo**: DOCUMENTO | VIDEO | WEBINAR | RICERCA | AUDIO/PODCAST | NEWS FLASH
- **Categoria**: Es. "Idroponica", "Biotecnologie", "Agronomia"
- **Codice Azione**: Es. "AZIONE 2A", "AZIONE 3B", "NEWS"
- **Estratto**: Breve descrizione (1-2 frasi)
- **Contenuto Completo**: Testo in formato Markdown
- **Immagine**: Immagine di copertina (1200x600px consigliato)
- **Autore**: Nome dell'autore o organizzazione
- **Tags**: Lista di tag (3-5 consigliati)

## Procedura

### 1. Preparare l'immagine
- Dimensione consigliata: 1200x600px
- Formato: PNG o JPG
- Salvarla in: `frontend/public/images/`
- Nome file: slug del contenuto (es. `nuovo-articolo-microgreens.png`)

### 2. Aggiungere entry in content.ts
Aprire `frontend/src/lib/content.ts` e aggiungere un nuovo oggetto nell'array `MOCK_CONTENT`:

```typescript
{
  id: 'UNIQUE-ID',
  slug: 'titolo-in-formato-url',
  actionCode: 'AZIONE 2A',
  type: ContentType.SCIENTIFIC,
  title: 'Titolo del Contenuto',
  excerpt: 'Breve descrizione...',
  fullContent: `## Sezione 1
Contenuto in Markdown...`,
  category: 'Categoria',
  date: '01 Gen 2025',
  imageUrl: '/images/nome-immagine.png',
  author: 'Nome Autore',
  tags: ['Tag1', 'Tag2', 'Tag3']
}
```

### 3. Verificare in locale
```bash
cd frontend
npm run dev
```
Aprire http://localhost:3000/risorse e verificare che il contenuto appaia.

### 4. Deploy
```bash
git add .
git commit -m "content: aggiungi [titolo contenuto]"
git push
```
Vercel rileverà automaticamente il push e farà il deploy.

## Output Atteso
- Nuovo contenuto visibile su /risorse
- Pagina dettaglio accessibile su /risorse/[slug]
- Immagine caricata correttamente

## Note
- Il contenuto supporta Markdown completo (titoli, liste, grassetto, corsivo, blocchi citazione)
- Per contenuti video/audio, aggiungere anche `videoUrl` o `audioUrl`
- Mantenere coerenza con lo stile esistente
