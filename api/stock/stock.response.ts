import PlanStockGroup from '../../models/plan-stock-group';
import { Model } from '../..';
import { Stock, StockEvent, StockGroup, StockPrice } from '../../models';
import { PaginationResponse } from '../../models/pagination';

/** 재고그룹 목록 조회 */
export type StockGroupListResponse = PaginationResponse<StockGroup>;

/** 재고그룹 히스토리 조회 */
export type StockGroupHistoryResponse = {
  stockInfo: Stock;
  stocks: Stock[];
  stockEvents: PaginationResponse<StockEvent & { remainingQuantity: number }>;
};

/** 자사 자식재고 목록 조회 */
export type StockListResponse = PaginationResponse<Stock>;

/** 자사 재고 상세 */
export type StockDetailResponse = Stock;

/** 거래처 재고그룹 목록 조회 */
export type PartnerStockGroupListResponse = PaginationResponse<
  StockGroup & { partnerCompanyRegistrationNumber: string }
>;

export type StockGroupQuantityResponse = Model.StockQuantity;

/** 재고그룹 상세 조회 */
export type StockGroupDetailResponse = StockGroup;

/** 플랜에 연결된 재고 그룹 */
export type PlanStockGroupListResponse = PaginationResponse<PlanStockGroup>;

/** 도착예정재고 금액 */
export type ArrivalStockPriceResponse = StockPrice;
