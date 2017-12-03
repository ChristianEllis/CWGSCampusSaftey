export interface Counseling{
  name: string;
  phone: string;
  otherPhone?: {
    desc: string,
    phone: string,
  }[];
  address: string;
  hours: string;
  desc: string[];
}
