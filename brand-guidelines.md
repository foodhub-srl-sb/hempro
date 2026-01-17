# HEMPRO Brand Guidelines

## Colori

| Nome | Hex | Uso |
|------|-----|-----|
| Primary | `#036C42` | Verde scuro - Header, footer, CTA principali |
| Secondary | `#47A4B5` | Teal - Accenti, badge, hover states |
| Accent | `#2FAB5F` | Verde chiaro - Highlight, success states |
| Light | `#94D0C7` | Verde acqua - Background leggeri |
| Background | `#fbf9f4` | Crema - Sfondo principale |
| Foreground | `#1f2937` | Grigio scuro - Testo principale |

## Tipografia

- **Titoli**: Font Serif (Georgia, Times New Roman, serif)
- **Body**: Font Sans-Serif (Arial, Helvetica, sans-serif)
- **Monospace**: Geist Mono (per codice/dati tecnici)

## Logo

- File principale: `/public/images/hempro-logo.png`
- Altezza header: `h-16` (normale), `h-10` (scrolled)
- Altezza footer: `h-16`

## Stile Componenti

### Bordi arrotondati
- Card: `rounded-3xl`
- Bottoni: `rounded-xl`
- Badge: `rounded-full`

### Ombre
- Card: `shadow-sm` → `shadow-xl` on hover
- Header scrolled: `shadow-[0_10px_40px_-15px_rgba(3,108,66,0.1)]`

### Transizioni
- Default: `transition-all duration-300`
- Hover effetti: `duration-500`
- Animazioni lunghe: `duration-1000`

## Animazioni

### Fade In
```css
.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}
```

### Glass Effect
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}
```
