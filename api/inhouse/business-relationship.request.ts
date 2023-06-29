import { PaginationQuery } from '../../models/pagination';

export interface BusinessRelationshipListQuery extends PaginationQuery {
  srcCompanyId: number;
  dstCompanyId: number;
}

export interface BusinessRelationshipCreateRequest {
  srcCompanyId: number;
  dstCompanyId: number;
}

export type BusinessRelationshipCompactListQuery = PaginationQuery;

export interface SearchPartnerRequest {
  companyRegistrationNumber: string;
}

export interface RegisterPartnerRequest {
  companyRegistrationNumber: string;
  create: boolean;
  type: 'PURCHASE' | 'SALES' | 'BOTH';
  partnerNickname: string;
  invoiceCode: string;
  address: string;
  phoneNo: string;
  faxNo: string;
  email: string;
  memo: string;
}

export interface BusinessRelationshipRequestRequest {
  targetCompanyId: number;
  type: 'PURCHASE' | 'SALES' | 'BOTH' | 'NONE';
}

export interface UpsertPartnerRequest {
  companyRegistrationNumber: string;
  partnerNickname: string;
  memo: string;
}
