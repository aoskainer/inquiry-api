export interface InquiryResponse {
  statusCode: number;
  message: string;
  data: InquiryResponseData[];
}

export interface InquiryResponseData {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
