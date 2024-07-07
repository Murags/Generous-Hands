import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import AnalyticsContent from './AnalyticsContent';
import MapsContent from './MapsContent';
import DonationContent from './DonationContent';
import LogoutContent from './LogoutContent';

function Dashboard() {
  const [activeSection, setActiveSection] = React.useState('Analytics');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="body-container">
      <Topbar />
      <div className="container">
        <Sidebar onNavClick={handleNavClick} activeNavItem={activeSection} />
        <main className="content">
          {activeSection === 'Analytics' && <AnalyticsContent />}
          {activeSection === 'Maps' && <MapsContent />}
          {activeSection === 'Donation' && <DonationContent />}
          {activeSection === 'Logout' && <LogoutContent />}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

