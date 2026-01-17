# Deploy in Produzione

## Obiettivo
Effettuare il deploy del sito HEMPRO su Vercel dopo modifiche al codice.

## Prerequisiti
- Repository GitHub configurato e connesso a Vercel
- Modifiche testate in locale (`npm run build` senza errori)

## Procedura

### 1. Verificare Build Locale
```bash
cd frontend
npm run build
```
Se ci sono errori, correggerli prima di procedere.

### 2. Commit delle Modifiche
```bash
git status
git add .
git commit -m "tipo: descrizione breve delle modifiche"
```

Tipi di commit consigliati:
- `feat:` nuova funzionalità
- `fix:` correzione bug
- `content:` nuovo contenuto
- `style:` modifiche estetiche
- `refactor:` refactoring codice
- `docs:` documentazione

### 3. Push su GitHub
```bash
git push origin main
```

### 4. Verifica Deploy Automatico
- Vercel rileva automaticamente i push su main
- Controllare lo stato su: https://vercel.com/dashboard
- Il deploy richiede tipicamente 1-3 minuti

### 5. Verifica Sito Live
- Aprire l'URL del sito (es. https://hempro.vercel.app)
- Verificare che le modifiche siano visibili
- Testare la navigazione tra le pagine

### 6. Configurazione Vercel
**Importante**: Per far funzionare il backend Supabase, configurare le variabili d'ambiente nel progetto Vercel (Settings > Environment Variables):
- `NEXT_PUBLIC_SUPABASE_URL`: (Tuo URL Supabase)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: (Tuo Anon Key)
- `Content-Root`: Impostare a `frontend` se richiesto, o assicurarsi che Vercel rilevi il framework Next.js nella cartella corretta.

## Output Atteso
- Deploy completato su Vercel
- Sito aggiornato e accessibile
- Funzionalità Supabase attive (Admin login, form, contenuti dinamici)

## Troubleshooting

### Errore di Build su Vercel
1. Controllare i log nella dashboard Vercel
2. L'errore più comune è un import mancante o un errore TypeScript
3. Correggere in locale, rifare push

### Cache del Browser e Rendering
Se le modifiche non appaiono:
- Le pagine Risorse e Home sono configurate come **Dinamiche** (`revalidate = 0`) per mostrare sempre i dati più recenti.
- Se vedi ancora una lista vuota:
    1. Controlla che le variabili d'ambiente in Vercel siano corrette.
    2. Controlla i "Function Logs" in Vercel per eventuali errori di connessione.
- Hard refresh: Ctrl+Shift+R

## Note
- Vercel genera automaticamente preview per ogni PR
- Il dominio principale punta sempre al branch main
