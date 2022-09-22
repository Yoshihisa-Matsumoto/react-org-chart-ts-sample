import React from 'react';

export interface PersonalInformation {
  id: string;
  avatar: string;
  department: string;
  name: string;
  title: string;
  totalReports: number;
  link?: string;
}
export interface Person {
  id: string;
  person: PersonalInformation;
  hasChild: boolean;
  hasParent: boolean;
  children?: Person[];
}
export default class OrgChart extends React.PureComponent<{
  tree: Person;
  nodeWidth?: number;
  nodeHeight?: number;
  nodeSpacing?: number;
  animationDuration?: number;
  lineType?: string;
  downloadImageId?: string;
  downloadPdfId?: string;
  zoomIn?: string;
  zoomOutId?: string;
  zoomExtentId?: string;
  loadParent?: (
    personData: Person
  ) => Promise<Person | undefined> | Person | undefined;
  loadChildren?: (personData: Person) => Promise<Person[]> | Person[];
  onConfigChange: (config: OrgChartConfig) => void;
  loadConfig: (config: OrgChartConfig) => OrgChartConfig | undefined;
  loadImage?: (personData: Person) => Promise<string>;
  downlowdedOrgChart: (result: boolean) => void;
  width?: number;
  height?: number;
}> {}

// export interface OrgChartConfig {
//   id?: string;
//   treeData?: Person;
//   margin?: {
//     top: number;
//     right: number;
//     bottom: number;
//     left: number;
//   };
//   animationDuration?: number;
//   nodePaddingX?: number;
//   nodePaddingY?: number;
//   nodeBorderRadius?: number;
//   avatarWidth?: number;
//   lineType?: string;
//   lineDepthY?: number;
//   backgroundColor?: string;
//   borderColor?: string;
//   nameColor?: string;
//   titleColor?: string;
//   reportsColor?: string;
//   shouldResize?: boolean;
//   tree?: Person;
//   nodeWidth?: number;
//   nodeHeight?: number;
//   nodeSpacing?: number;
//   downloadImageId?: string;
//   downloadPdfId?: string;
//   zoomIn?: string;
//   zoomOutId?: string;
//   zoomExtentId?: string;
//   loadParent?: (
//     personData: Person
//   ) => Promise<Person | undefined> | Person | undefined;
//   loadChildren?: (personData: Person) => Promise<Person[]> | Person[];
//   onConfigChange?: (config: OrgChartConfig) => void;
//   loadConfig?: (config: OrgChartConfig) => OrgChartConfig | undefined;
//   loadImage?: (personData: Person) => Promise<string>;
//   downlowdedOrgChart?: (result: boolean) => void;
//   width?: number;
//   height?: number;
//   data?: Person;
//   elemHeight?: number;
//   elemWidth?: number;
//   links?: any;
//   nodeY?: number;
//   nodes?: Person[];
// }
