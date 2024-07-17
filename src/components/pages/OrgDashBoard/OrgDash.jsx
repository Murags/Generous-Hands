import React from 'react';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import OrgAnalytics from './OrgAnalytics';
import Settings from './OrgSettings';
import Donations from './OrgDonations';


function OrgDashboard() {
  const [activeSection, setActiveSection] = React.useState('Home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };
  const buttons = [
    { label: 'Home', icon: 'fa-home' },
    { label: 'Donations', icon: 'fa-donate' },
    { label: 'Settings', icon: 'fa-cogs' },
  ];

  return (
    <div className="body-container">
      <Topbar />
      <div className="container">
        <Sidebar buttons={buttons} onNavClick={handleNavClick} activeNavItem={activeSection} />
        <main className="dash-content">
          {activeSection === 'Home' && <OrgAnalytics />}
          {activeSection === 'Settings' && <Settings />}
          {activeSection === 'Donations' && <Donations />}
        </main>
      </div>
    </div>
  );
}

export default OrgDashboard;

