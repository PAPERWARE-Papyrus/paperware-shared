import { PaginationQuery } from '../../models/pagination';

export type LocationListQuery = PaginationQuery;

export interface LocationCreateRequest {
  name: string;
  isPublic: boolean;
  address: string;
  phoneNo?: string | null;
}

export type LocationUpdateRequest = LocationCreateRequest;

export interface LocationForSalesListQuery extends PaginationQuery {
  targetCompanyId: number;
}
