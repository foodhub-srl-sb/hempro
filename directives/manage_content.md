# Gestione Contenuti (Supabase)

## Obiettivo
Aggiungere, modificare o rimuovere contenuti dal sito HEMPRO utilizzando il database Supabase.

## Accesso
Accedere alla dashboard del progetto HEMPRO su Supabase:
[Dashboard Editor](https://supabase.com/dashboard/project/ttwcgihojnfehykjjxco/editor)

## Struttura Dati (`contents`)
La tabella `contents` contiene tutti gli articoli, video, news e risorse.

### Campi Principali
- **slug**: URL del contenuto (es. `nuovo-articolo`). Deve essere univoco.
- **title**: Titolo visualizzato.
- **excerpt**: Breve descrizione per le card.
- **full_content**: Contenuto in formato **Markdown**.
- **type**: `SCIENTIFIC` | `NEWS` | `EVENT` | `VIDEO` | `PODCAST`
- **category**: Etichetta visuale (es. "Idroponica", "Bandi").
- **image_url**: Link all'immagine di copertina (caricata nello Storage o link esterno).
- **published_date**: Data di pubblicazione.

## Procedura: Aggiungere Nuovo Contenuto

1.  **Caricare Immagine (Opzionale)**
    - Andare su **Storage** > bucket `public` (se creato) o usare link esterni.
    - Caricare l'immagine e copiare l'URL pubblico.

2.  **Inserire Riga in `contents`**
    - Andare su **Table Editor** > `contents`.
    - Cliccare **Insert** > **Insert Row**.
    - Compilare i campi:
        - `slug`: `titolo-articolo` (tutto minuscolo, niente spazi).
        - `full_content`: Incollare il testo Markdown.
        - `type`: Selezionare dal menu a tendina.
    - Cliccare **Save**.

3.  **Verifica**
    - Andare su `http://localhost:3000/risorse` (o sito live).
    - Il nuovo contenuto apparirà automaticamente.
    - Se è una "News" recente, apparirà anche in Homepage.

## Procedura: Modifica
1.  Cercare la riga nella tabella.
2.  Cliccare due volte sulla cella da modificare (es. `title`).
3.  Salvare.

## Aggiornamento Codice
Non è più necessario modificare `frontend/src/lib/content.ts` o fare deploy per cambiare i testi, dato che il sito preleva i dati dal database ad ogni build (o richiesta).

> **Nota**: Se il sito usa ISR o Static Generation, le modifiche potrebbero richiedere un nuovo deploy o attesa del periodo di revalidate. Nello stato attuale (default), è dinamico o statico al build time.
