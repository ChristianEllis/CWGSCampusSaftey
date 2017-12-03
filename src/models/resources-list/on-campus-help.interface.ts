export interface OnCampusHelp{
  name: string;
  phone: string;
  otherPhone?: {
    desc: string,
    phone: string,
  }[];
  location: string;
  geolocation?: string;
  hours: string;
  desc: string[];
}
