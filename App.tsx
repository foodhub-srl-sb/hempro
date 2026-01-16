
import React, { useState, useMemo, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { DetailView } from './components/DetailView';
import { AboutView } from './components/AboutView';
import { PartnersView } from './components/PartnersView';
import { ContactsView } from './components/ContactsView';
import { HomeView } from './components/HomeView';
import { ResourcesView } from './components/ResourcesView';
import { Footer } from './components/Footer';
import { MOCK_CONTENT } from './constants';
import { ViewType } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const selectedItem = useMemo(() => 
    MOCK_CONTENT.find(item => item.id === selectedItemId),
  [selectedItemId]);

  const navigateToDetail = useCallback((id: string) => {
    setSelectedItemId(id);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigate = useCallback((newView: ViewType) => {
    setView(newView);
    setSelectedItemId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#fbf9f4] selection:bg-[#47A4B5]/30">
      <Navbar currentView={view} onNavigate={handleNavigate} />
      
      {view === 'home' && (
        <HomeView 
          onNavigateToResources={() => handleNavigate('resources')} 
          onOpenDetail={navigateToDetail} 
        />
      )}

      {view === 'resources' && (
        <ResourcesView onOpenDetail={navigateToDetail} />
      )}

      {view === 'about' && <AboutView />}
      {view === 'partners' && <PartnersView />}
      {view === 'contacts' && <ContactsView />}
      
      {view === 'detail' && selectedItem && (
        <DetailView item={selectedItem} onBack={() => setView('resources')} />
      )}

      <Footer />
    </div>
  );
};

export default App;
