import React from 'react';
import { HeaderSection }  from '../Header/headerSection';
import { GizmoSection }  from '../Gizmos/gizmoSection';

function App() {
return (
<div className='app'>
  <div className="header-background">
    <HeaderSection />
  </div>
  <div className="gizmos-background">
    <GizmoSection />
  </div>
</div>
);
}

export default App;
