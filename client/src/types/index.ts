export enum Alignment {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}
export interface DeviceInterface {
  id: number;
  name: string;
  mobile_number: number;
  last_connection: string;
  latitude: number;
  longitude: number;
}
