export interface Hospital {
  name: string;
  address: string;
  phone: string;
  nonEmergencyPhone?:{
    desc?: string,
    phone: string,
  }[];
  hours: string;
  desc?: string[];
}
