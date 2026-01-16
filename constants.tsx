
import { ContentItem, ContentType } from './types';

export const COLORS = {
  primary: '#036C42',
  secondary: '#47A4B5',
  accent: '#2FAB5F',
  light: '#94D0C7',
  bg: '#fbf9f4'
};

export const MOCK_CONTENT: ContentItem[] = [
  {
    id: 'DEEP-DIVE-01',
    actionCode: 'AZIONE 2A/2B',
    type: ContentType.SCIENTIFIC,
    title: 'Ottimizzazione dei Protocolli di Coltivazione in Sistemi Floating per Microgreens di Canapa',
    excerpt: 'Analisi tecnica avanzata sui parametri di crescita, spettri luminosi LED e accumulo di composti bioattivi in sistemi idroponici.',
    fullContent: `INTRODUZIONE E OBIETTIVI SPERIMENTALI
Il progetto HEMPRO, nell'ambito delle Azioni 2A e 2B, ha focalizzato la ricerca sulla produzione di microgreens di Cannabis sativa L. (varietà industriali certificate Fedora 17 e Felina 32). L'obiettivo primario è stato definire un protocollo di coltivazione standardizzato in sistemi "Floating System" (coltura idroponica a zattera galleggiante) in grado di massimizzare non solo la resa biomasse, ma soprattutto il profilo fitochimico del prodotto finale.

PARAMETRI DI COLTIVAZIONE E GESTIONE DEL SUBSTRATO
La sperimentazione ha evidenziato che l'uso di un substrato inerte a base di torba neutra mista a perlite (rapporto 70:30) garantisce il miglior drenaggio basale, prevenendo fenomeni di asfissia radicale durante le prime fasi di emergenza. La densità di semina ottimale è stata individuata in 2.5 semi/cm², un valore che previene l'eccessivo ombreggiamento reciproco riducendo il rischio di attacchi di patogeni fungini come il Pythium spp.

GESTIONE DELLA SOLUZIONE NUTRITIVA
Il controllo costante della soluzione nutritiva è il cuore del sistema floating. Per i microgreens di canapa, i dati raccolti indicano:
- Conducibilità Elettrica (EC): Range ottimale tra 1.2 e 1.6 dS/m. Valori superiori causano stress osmotico riducendo la turgidità delle foglioline cotiledonari.
- pH: Stabilizzato tra 5.8 e 6.2 per garantire la massima biodisponibilità di micronutrienti come Ferro e Manganese.
- Rapporto N:K: Un apporto bilanciate di Azoto nitrico e Potassio (1:1.5) ha favorito uno sviluppo più robusto della parete cellulare.

INFLUENZA DELLO SPETTRO LUMINOSO LED
L'utilizzo di sistemi di illuminazione a LED (Light Emitting Diodes) ha permesso di modulare la morfologia della pianta. Risultati chiave:
1. Spettro Blue-Rich (450nm): Ha indotto un portamento più compatto e un aumento significativo del contenuto di clorofilla e flavonoidi totali.
2. Spettro Red/Far-Red (660/730nm): Ha accelerato l'allungamento dell'ipocotile, facilitando le operazioni di taglio meccanico, ma con una riduzione della densità nutrizionale.
Il protocollo HEMPRO suggerisce un fotoperiodo di 16 ore di luce con un'intensità di 250 µmol m⁻² s⁻¹ (PPFD).

ANALISI DEI RISULTATI E CONCLUSIONI
Le analisi biochimiche post-raccolta (effettuate al giorno 12 dalla semina) hanno mostrato un contenuto di vitamina E (tocoferoli) superiore del 30% rispetto alle colture tradizionali in suolo. La standardizzazione di questo processo permette alle aziende agricole pugliesi di immettere sul mercato un "superfood" con certificazione scientifica, riducendo al minimo l'uso di acqua grazie al ricircolo della soluzione nutritiva. Questo studio rappresenta un pilastro fondamentale per il trasferimento tecnologico verso i sistemi di agricoltura verticale indoor.`,
    category: 'Idroponica',
    date: '15 Mag 2024',
    imageUrl: '/images/hemp_greenhouse.png',
    author: 'CNR-ISPA',
    tags: ['Microgreens', 'Hydroponics', 'LED', 'Innovation']
  },
  {
    id: 'DEEP-DIVE-02',
    actionCode: 'AZIONE 3A',
    type: ContentType.SCIENTIFIC,
    title: 'Biotecnologie Alimentari: La Cinetica di Fermentazione del Tempeh di Canapa',
    excerpt: 'Studio dettagliato sull\'attività enzimatica del Rhizopus oligosporus e miglioramento del profilo amminoacidico nel seme di canapa.',
    fullContent: `STATO DELL'ARTE E MOTIVAZIONI DELLA RICERCA
L'Azione 3A del progetto HEMPRO mira alla valorizzazione del seme di canapa (varietà Fedora 17) attraverso processi di fermentazione controllata. La sfida biotecnologica consiste nel trasformare il seme decorticato in un prodotto strutturato ad alto valore proteico: il Tempeh di Canapa. Questo studio analizza l'interazione tra lo starter fungino Rhizopus oligosporus e la matrice vegetale pugliese.

IL PROCESSO DI PRE-TRATTAMENTO
La canapa industriale presenta una densità lipidica elevata (circa il 30-35%). Per permettere una crescita ottimale del micelio, il protocollo di pre-trattamento prevede:
- Decorticatura meccanica: Rimozione del pericarpo per facilitare la penetrazione delle ife fungine.
- Ammollo acidificato: Utilizzo di acido lattico per abbassare il pH della granella a 4.5, creando un ambiente selettivo favorevole al Rhizopus e inibitore per specie batteriche indesiderate (B. cereus).
- Cottura al vapore: Effettuata per 20 minuti a 100°C per denaturare parzialmente le proteine e aumentare la suscettibilità enzimatica.

CINETICA DI FERMENTAZIONE ED ATTIVITÀ ENZIMATICA
La fermentazione solida (Solid-State Fermentation - SSF) è stata monitorata in camera climatica a 31°C con UR del 85%. 
Durante le 24-36 ore di processo, si sono osservate tre fasi distinte:
1. Fase di Lag (0-8h): Il micelio inizia la colonizzazione superficiale.
2. Fase di Crescita Logaritmica (8-24h): Massima attività respiratoria con incremento della temperatura interna del panetto.
3. Fase di Maturazione (24-36h): Formazione del panetto bianco compatto.

L'analisi biochimica ha rivelato una forte attività proteasica, che ha portato alla scissione delle proteine globulari della canapa (edestina e albumina) in peptidi a basso peso molecolare e amminoacidi liberi. Questo processo incrementa la digeribilità delle proteine (PDCAAS score) rendendo il tempeh un alimento ideale per diete plant-based.

EVOLUZIONE DEL PROFILO LIPIDICO E ANTINUTRIZIONALI
Uno dei risultati più interessanti riguarda la riduzione dei fattori antinutrizionali:
- Acido Fitico: Ridotto del 45% grazie all'attività delle fitasi fungine, migliorando l'assorbimento di minerali come Calcio e Zinco.
- Saponine: Diminuite del 20%, riducendo la nota amara tipica del seme crudo.
Parallelamente, il rapporto Omega-6/Omega-3 è rimasto inalterato (circa 3:1), preservando le qualità nutraceutiche originarie della canapa.

CONCLUSIONI E APPLICAZIONI INDUSTRIALI
Il Tempeh di canapa sviluppato da HEMPRO si distingue per una consistenza compatta e un profilo aromatico che vira verso note di nocciola e fungo fresco. La scalabilità industriale di questo processo è stata validata presso i partner di trasformazione (Azione 3B), aprendo la strada a una nuova categoria di "Meat Substitutes" a KM 0, prodotti interamente con materie prime pugliesi e biotecnologie d'avanguardia.`,
    category: 'Biotecnologie',
    date: '10 Mag 2024',
    imageUrl: '/images/lab_analysis.png',
    author: 'CNR-ISPA',
    tags: ['Fermentazione', 'Tempeh', 'Biotech', 'Food Design']
  },
  {
    id: 'A2A-DOC-01',
    actionCode: 'AZIONE 2A',
    type: ContentType.SCIENTIFIC,
    title: 'Protocollo di Germinazione Microgreens',
    excerpt: 'Ottimizzazione dei parametri di temperatura e umidità per varietà Fedora 17 e Felina 32.',
    fullContent: 'Questo report tecnico definisce i range ottimali per la germinazione in camere di crescita del CNR-ISPA. Analisi su substrati inerti e organici con focus sulla prevenzione di attacchi fungini post-emergenza.',
    category: 'Agronomia',
    date: '12 Gen 2024',
    imageUrl: '/images/hemp_research.png',
    author: 'CNR-ISPA',
    tags: ['Microgreens', 'Germinazione', 'Azione 2A']
  },
  {
    id: 'POD-01',
    actionCode: 'AZIONE 4B',
    type: ContentType.AUDIO,
    title: 'HempTalk: Economia Circolare in Puglia',
    excerpt: 'Intervista al Prof. Marcello Mastrorilli (CNR-ISPA) sul futuro della canapa alimentare.',
    fullContent: 'In questo episodio esploriamo come la canapa possa rappresentare una coltura chiave per la transizione ecologica pugliese, riducendo l\'uso di acqua e fertilizzanti nel settore food.',
    category: 'Interviste',
    date: '18 Gen 2024',
    imageUrl: '/images/industrial_hemp_field.png',
    author: 'Food Hub',
    tags: ['Podcast', 'Sostenibilità', 'CNR']
  },
  {
    id: 'NEWS-01',
    actionCode: 'NEWS',
    type: ContentType.NEWS,
    title: 'Nuovi Bandi PSR Puglia per Innovazione',
    excerpt: 'Apertura delle sottomisure dedicate all\'agricoltura di precisione e colture alternative.',
    fullContent: 'La Regione Puglia annuncia nuovi finanziamenti per le aziende che intendono diversificare la produzione con la canapa industriale. Scadenze e criteri di ammissibilità.',
    category: 'Finanziamenti',
    date: '22 Gen 2024',
    imageUrl: '/images/industrial_hemp_field.png',
    author: 'Regione Puglia',
    tags: ['Bandi', 'PSR', 'Finanziamenti']
  },
  {
    id: 'A3A-DOC-01',
    actionCode: 'AZIONE 3A',
    type: ContentType.SCIENTIFIC,
    title: 'Cinetica di Fermentazione del Tempeh',
    excerpt: 'Studio dell\'attività enzimatica del Rhizopus oligosporus su semi di canapa decorticati.',
    fullContent: 'Analisi biochimica della fermentazione solida. Risultati sulla biodisponibilità delle proteine e riduzione dei fattori antinutrizionali nel prodotto finito.',
    category: 'Biotecnologie',
    date: '05 Feb 2024',
    imageUrl: '/images/lab_analysis.png',
    author: 'CNR-ISPA',
    tags: ['Tempeh', 'Fermentazione', 'Azione 3A']
  },
  {
    id: 'B1-VID-01',
    actionCode: 'AZIONE 1B',
    type: ContentType.VIDEO,
    title: 'Tecniche di Raccolta Meccanizzata',
    excerpt: 'Dimostrazione pratica della raccolta del seme con macchine agevolatrici in Puglia.',
    fullContent: 'Pillola video (2:45 min) che illustra la calibrazione delle testate per la raccolta della canapa industriale riducendo la sgranatura spontanea.',
    category: 'Meccanizzazione',
    date: '20 Mar 2024',
    imageUrl: '/images/industrial_hemp_field.png',
    author: 'Fattorie Canapuglia',
    tags: ['Meccanizzazione', 'Harvest', 'Video']
  },
  {
    id: 'ART-01',
    actionCode: 'AZIONE 4A',
    type: ContentType.BLOG,
    title: 'Novel Food: La Guida Definitiva',
    excerpt: 'Tutto quello che c\'è da sapere sulla normativa EFSA per gli estratti di canapa.',
    fullContent: 'Un approfondimento legale e scientifico sui requisiti di sicurezza e le procedure di autorizzazione per l\'immissione sul mercato di nuovi alimenti a base di canapa.',
    category: 'Legislazione',
    date: '28 Mar 2024',
    imageUrl: '/images/hemp_research.png',
    author: 'Food Hub',
    tags: ['EFSA', 'Novel Food', 'Normative']
  },
  {
    id: 'VID-02',
    actionCode: 'AZIONE 2B',
    type: ContentType.VIDEO,
    title: 'IoT e Sensori: Monitoraggio Smart in Serra',
    excerpt: 'Come installare e configurare i sensori di umidità e pH per sistemi floating.',
    fullContent: 'Guida pratica all\'installazione di kit IoT open-source per il monitoraggio remoto delle colture di microgreens.',
    category: 'Tecnologia',
    date: '02 Apr 2024',
    imageUrl: '/images/hemp_greenhouse.png',
    author: 'Ortogourmet',
    tags: ['IoT', 'Sensori', 'Tech']
  },
  {
    id: 'POD-02',
    actionCode: 'AZIONE 4B',
    type: ContentType.AUDIO,
    title: 'Nutrizione: Semi di Canapa vs Altri Superfood',
    excerpt: 'Confronto nutrizionale tra semi di canapa, chia e quinoa in una dieta bilanciata.',
    fullContent: 'Podcast di 15 minuti dedicato alle proprietà nutrizionali, con focus sul rapporto ottimale Omega-3/Omega-6 presente nella canapa pugliese.',
    category: 'Salute',
    date: '10 Apr 2024',
    imageUrl: '/images/hemp_research.png',
    author: 'CNR-ISPA',
    tags: ['Omega-3', 'Superfood', 'Podcast']
  },
  {
    id: 'B2-DOC-01',
    actionCode: 'AZIONE 2B',
    type: ContentType.BLOG,
    title: 'Manuale per la Coltivazione Fuori Suolo',
    excerpt: 'Guida pratica per l\'implementazione di sistemi floating per baby leaf di canapa.',
    fullContent: 'Specifiche tecniche per la gestione della soluzione nutritiva (pH, EC) e cicli di illuminazione per la produzione commerciale di baby leaf.',
    category: 'Innovazione',
    date: '15 Apr 2024',
    imageUrl: '/images/hemp_greenhouse.png',
    author: 'Ortogourmet',
    tags: ['Hydroponics', 'Innovazione', 'Azione 2B']
  },
  {
    id: 'NEWS-02',
    actionCode: 'NEWS',
    type: ContentType.NEWS,
    title: 'Workshop Nazionale Canapa Alimentare',
    excerpt: 'Bari ospiterà il prossimo 20 Giugno il summit nazionale sulla filiera food.',
    fullContent: 'Tutti i partner HEMPRO parteciperanno all\'evento per presentare i primi risultati tecnici sulle varietà microgreens.',
    category: 'Eventi',
    date: '02 Mag 2024',
    imageUrl: '/images/industrial_hemp_field.png',
    author: 'HEMPRO Network',
    tags: ['Workshop', 'Bari', 'Eventi']
  }
];
