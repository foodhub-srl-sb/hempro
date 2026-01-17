# Gestione Contenuti (Area Admin)

## Obiettivo
Gestire gli articoli, le news e le risorse del sito HEMPRO utilizzando il pannello di amministrazione dedicato.

## Accesso
1.  Navigare su `/admin` (es. `https://hempro.vercel.app/admin` o `http://localhost:3000/admin`).
2.  Effettuare il login con le credenziali amministratore.
3.  Cliccare su **"Contenuti"** nella barra laterale o nel dashboard.

## Funzionalità

### 1. Lista Contenuti
La pagina `/admin/content` mostra tutti i contenuti presenti nel database.
- **Colonne**: Titolo, Tipo, Categoria, Data.
- **Azioni**: Modifica (pulsante a destra).

### 2. Aggiungere Nuovo Contenuto
1.  Cliccare sul pulsante verde **"Nuovo Contenuto"** in alto a destra.
2.  Compilare il form:
    - **Titolo**: Il titolo principale.
    - **Slug**: L'URL univoco (es. `titolo-articolo`). **Importante**: usare solo minuscole e trattini.
    - **Tipo**: Selezionare dal menu (NEWS, SCIENTIFIC, etc.).
    - **Categoria**: Etichetta visuale (es. "Idroponica").
    - **Estratto**: Breve descrizione (150-200 caratteri).
    - **Contenuto Completo**: Testo in formato **Markdown**.
    - **Immagine**: URL dell'immagine (vedi sezione Upload).
3.  Cliccare **"Crea Contenuto"**.

### 3. Modificare Contenuto
1.  Dalla lista, cliccare su **"Modifica"**.
2.  Aggiornare i campi desiderati.
3.  Cliccare **"Salva Modifiche"**.

### 4. Upload Immagini
Attualmente il sistema richiede un URL pubblico per le immagini.
**Opzione A: Supabase Storage (Consigliato)**
1.  Caricare l'immagine nel bucket `public` di Supabase.
2.  Copiare l'URL pubblico.
3.  Incollarlo nel campo "URL Immagine".

**Opzione B: Immagine Esterna**
1.  Usare un link diretto a un'immagine ospitata altrove.

## Markdown Cheat Sheet
Il campo "Contenuto Completo" supporta Markdown:
- `# Titolo 1`, `## Titolo 2` per le intestazioni.
- `**Grassetto**`, `*Corsivo*`.
- `- Lista puntata`.
- `[Testo Link](https://esempio.com)`.
