type ApiResponse = {
  href: string;
  data: TImageData[];
  links?: {
    href: string;
    rel: string;
    render?: string;
  }[];
};
type TImageData = {
  description: string;
  title: string;
  photographer: string;
  location: string;
  nasa_id: string;
  media_type: string;
  keywords: string[];
  date_created: string;
  description_508: string;
  secondary_creator: string;
  center: string;
};
