import React from 'react';

import './App.css';

import OrgChartView from './component/OrgChartView';

function App() {
  return (
    <div className="App">
      <OrgChartView />
      {/* <BrowserRouter basename="/react-org-chart">
        <Routes>
          <Route path="/" element={<OrgChartView />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
