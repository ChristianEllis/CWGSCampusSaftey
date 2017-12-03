export interface PoliceStation {
  name: string,
  address: string,
  phone: string,
  nonEmergencyPhone?:{
    desc?: string,
    phone: string,
  }[];
  desc?: string[]
}
