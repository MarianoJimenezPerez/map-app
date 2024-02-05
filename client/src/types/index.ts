export enum Alignment {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}
export interface DeviceInterface {
  id: number;
  name: string;
  mobileNumber: number;
  lastConnection: string;
  latitude: number;
  longitude: number;
}
export interface MarkerInterface {
  id: number;
  latitude: number;
  longitude: number;
}
export interface FormDataInterface {
  name: string;
  mobileNumber: number;
  lastConnection: string;
  latitude: number;
  longitude: number;
}
