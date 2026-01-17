# Gestione Iscrizioni e Contatti (Area Admin)

## Obiettivo
Visualizzare le iscrizioni alla newsletter e i messaggi ricevuti dal sito.

## Accesso
1.  Navigare su `/admin`.
2.  Effettuare il login.

## Sezioni Disponibili

### 1. Iscrizioni Newsletter
Vai alla pagina **Iscrizioni** (o `/admin/submissions`).
- Visualizza l'elenco di tutte le email iscritte tramite il footer del sito.
- I dati sono ordinati dal più recente.

### 2. Messaggi Contatti
Vai alla pagina **Messaggi** (o `/admin/messages`).
- Visualizza i messaggi inviati tramite la pagina `/contatti`.
- **Status Indicators**:
    - 🟡 **New**: Nuovi messaggi (non letti).
    - ⚪ **Read**: Messaggi letti (Lo stato 'Read' sarà implementato in futuro, attualmente visualizza solo lo stato salvato nel DB).

## Export Dati
Per esportare questi dati in CSV (es. per Mailchimp):
1.  Accedere direttamente alla [Dashboard Supabase](https://supabase.com/dashboard/project/ttwcgihojnfehykjjxco/editor).
2.  Selezionare la tabella `subscriptions` o `contacts`.
3.  Cliccare su "CSV" nella toolbar in alto.
