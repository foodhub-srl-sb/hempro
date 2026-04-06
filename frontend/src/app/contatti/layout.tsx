import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contatti | HEMPRO Hub',
    description: 'Contatta il team HEMPRO per informazioni sul progetto, collaborazioni e richieste.',
};

export default function ContattiLayout({ children }: { children: React.ReactNode }) {
    return children;
}
