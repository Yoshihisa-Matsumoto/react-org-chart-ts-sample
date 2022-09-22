import React from 'react';
import { tree as t, tree1, tree2, tree3, tree4 } from './Tree';
import avatarPersonnel from '../assets/avatar-personnel.svg';
import OrgChart, { Person } from '@yoshmatsumoto/react-org-chart';
import './OrgChartView.css';

interface OrgChartState {
  tree: Person;
  downloadingChart: boolean;
  config: any;
}
const OrgChartView = () => {
  // const [tree, setTree] = React.useState(t);
  // const [downloadingChart, setDownloadingChart] = React.useState(false);
  // const [config, setConfig] = React.useState<any>({});
  const [state, setState] = React.useState<OrgChartState>({
    tree: t,
    downloadingChart: false,
    config: {},
  });

  const getChild = (id: string) => {
    switch (id) {
      case '100':
        return tree1;
      case '36':
        return tree2;
      case '56':
        return tree3;
      case '25':
        return tree4;
      default:
        return [];
    }
  };

  const getParent = (d: Person) => {
    if (d.id === '100') {
      return {
        id: '500',
        person: {
          id: '500',
          avatar: avatarPersonnel,
          department: '',
          name: 'Pascal ruth',
          title: 'Member',
          totalReports: 1,
        },
        hasChild: false,
        hasParent: true,
        children: [d],
      } as Person;
    } else if (d.id === '500') {
      return {
        id: '1',
        person: {
          id: '1',
          avatar: avatarPersonnel,
          department: '',
          name: 'Bryce joe',
          title: 'Director',
          totalReports: 1,
        },
        hasChild: false,
        hasParent: false,
        children: [d],
      } as Person;
    } else {
      return d;
    }
  };

  const handleDownload = () => {
    state.downloadingChart = false;
    //    setDownloadingChart(false);
  };

  const handleOnChangeConfig = (newConfig: any) => {
    const setting = { ...newConfig } as any;
    console.log(setting);
    state.config = setting;
  };

  const handleLoadConfig = (d: any) => {
    const currentConfig = state.config;
    return currentConfig;
  };

  const downloadImageId = 'download-image';
  const downloadPdfId = 'download-pdf';

  return (
    <React.Fragment>
      <div className="zoom-buttons">
        <button className="btn btn-outline-primary zoom-button" id="zoom-in">
          +
        </button>
        <button className="btn btn-outline-primary zoom-button" id="zoom-out">
          -
        </button>
      </div>
      <div className="download-buttons">
        <button className="btn btn-outline-primary" id="download-image">
          Download as image
        </button>
        <button className="btn btn-outline-primary" id="download-pdf">
          Download as PDF
        </button>
        <a
          className="github-link"
          href="https://github.com/unicef/react-org-chart"
        >
          Github
        </a>
        {state.downloadingChart && <div>Downloading chart</div>}
      </div>
      <OrgChart
        tree={state.tree}
        downloadImageId={downloadImageId}
        downloadPdfId={downloadPdfId}
        onConfigChange={(newConfig: any) => {
          console.log('ConfigChange', newConfig);
          handleOnChangeConfig(newConfig);
        }}
        loadConfig={(d: any) => {
          console.log(d);
          console.log(state.config);
          let configuration = handleLoadConfig(d);
          if (configuration) {
            return configuration;
          }
        }}
        downlowdedOrgChart={(d: boolean) => {
          console.log('downlowdedOrgChart');
          handleDownload();
        }}
        loadImage={(personData: Person) => {
          console.log('loadImage');
          return Promise.resolve(avatarPersonnel);
        }}
        loadParent={(personData: Person) => {
          console.log('loadParent');
          const parentData = getParent(personData);
          return parentData;
        }}
        loadChildren={(personData: Person) => {
          console.log('loadChildren');
          const childrenData = getChild(personData.id);
          return childrenData;
        }}
        width={1200}
        height={600}
      />
    </React.Fragment>
  );
};

export default OrgChartView;
