import React from 'react';

const Settings = () => {
  return (
    <section id="settings" className="section">
      <h2>Organization Settings</h2>
      <form id="orgSettingsForm">
        <label htmlFor="orgName">Organization Name</label>
        <input type="text" id="orgName" name="orgName" placeholder="Enter organization name" />

        <label htmlFor="orgImage">Default Image</label>
        <input type="file" id="orgImage" name="orgImage" />

        <label htmlFor="orgDescription">Description</label>
        <textarea id="orgDescription" name="orgDescription" placeholder="Enter description"></textarea>

        <label htmlFor="orgGallery">Gallery Images</label>
        <input type="file" id="orgGallery" name="orgGallery" multiple />

        <label htmlFor="orgHours">Opening Hours</label>
        <input type="text" id="orgHours" name="orgHours" placeholder="Enter opening hours" />

        <label htmlFor="orgPaybill">Paybill Number</label>
        <input type="text" id="orgPaybill" name="orgPaybill" placeholder="Enter paybill number" />

        <label htmlFor="orgPriority">Priority of Donations</label>
        <input type="text" id="orgPriority" name="orgPriority" placeholder="Enter priority donations" />

        <button type="submit">Save Settings</button>
      </form>
    </section>
  );
};

export default Settings;
