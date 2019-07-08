import React from 'react';
import { Header }  from '../Header/header';
import { GizmoSection }  from '../Gizmos/gizmoSection';
import { ExternalApi } from '../ExternalApi/externalApi';
import { BasementBuilder } from '../BasementBuilder/basementBuilder';
import { Contact } from '../Contact/contact';

import './App.css';

function App() {
return (
<div className='app'>
  <div className='header-container'>
    <Header className='header' />
  </div>
  <div className="gizmos-background">
      <GizmoSection />
  </div>
  <div className='external-api-container'>
    <ExternalApi />
  </div>
  <div className='basement-builder-container'>
    <BasementBuilder />
  </div>
  <div className='footer-container'>
    <Contact className='footer' />
  </div>
</div>
);
}

export default App;
