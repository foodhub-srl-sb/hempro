# Gestire le Iscrizioni e Contatti

## Obiettivo
Visualizzare e gestire le iscrizioni alla newsletter e le richieste di contatto in Supabase.

## Accesso ai Dati
I dati sono salvati nel database Supabase del progetto **HEMPRO**.

### Tabelle
1.  `subscriptions`: Email iscritte alla newsletter.
2.  `contacts`: Messaggi inviati dal form contatti.

## Dashboard Admin
Accedere alla dashboard di Supabase per visualizzare i dati in tempo reale:
[Vai alla Dashboard Supabase](https://supabase.com/dashboard/project/ttwcgihojnfehykjjxco/editor)

## Esportazione Dati
Dalla dashboard Supabase, è possibile esportare le tabelle in formato CSV:
1.  Selezionare la tabella (es. `subscriptions`)
2.  Cliccare su "CSV" nella barra degli strumenti
3.  Scaricare il file

## Note Tecniche
- Le tabelle hanno RLS (Row Level Security) abilitato.
- L'inserimento è pubblico (da form web).
- La lettura è riservata agli amministratori (via dashboard) o API autenticate.
