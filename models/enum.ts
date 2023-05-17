export type PackagingType = 'ROLL' | 'REAM' | 'SKID' | 'BOX';
export type OfficialPriceType =
  | 'NONE'
  | 'MANUAL_NONE'
  | 'MANUAL_DEFAULT'
  | 'RETAIL'
  | 'WHOLESALE';
export type PriceUnit = 'WON_PER_TON' | 'WON_PER_REAM' | 'WON_PER_BOX';
export type ShippingType = 'DELIVERY' | 'PICKUP' | 'STORE';
export type StockEventStatus = 'NORMAL' | 'CANCELLED' | 'PENDING';
export type TaskType = 'CONVERTING' | 'GUILLOTINE' | 'QUANTITY';
export type DiscountType = 'DEFAULT' | 'SPECIAL';
export type BusinessRelationshipRequestStatus =
  | 'PENDING'
  | 'ACCEPTED'
  | 'REJECTED';
export type OrderStatus =
  | 'ORDER_PREPARING'
  | 'ORDER_REQUESTED'
  | 'ORDER_REJECTED'
  | 'OFFER_PREPARING'
  | 'OFFER_REQUESTED'
  | 'OFFER_REJECTED'
  | 'ACCEPTED'
  | 'ORDER_CANCELLED'
  | 'OFFER_CANCELLED';
export type PlanStatus = 'PREPARING' | 'PROGRESSING' | 'PROGRESSED';
export type TaskStatus = 'PREPARING' | 'PROGRESSING' | 'PROGRESSED';
export type Method = 'ACCOUNT_TRANSFER' | 'PROMISSORY_NOTE' | 'CARD_PAYMENT' | 'CASH' | 'OFFSET' | 'ETC' | 'All';
export type Subject =
  'PAID_ACCOUNTS_RECEIVABLE'
  | 'PAID_UNPAID_AMOUNTS'
  | 'PAID_ADVANCES'
  | 'PAID_MISCELLANEOUS_INCOME'
  | 'PAID_PRODUCT_SALES'
  | 'COLLECTED_ACCOUNTS_RECEIVABLE'
  | 'COLLECTED_UNPAID_EXPENSES'
  | 'COLLECTED_PREPAID_EXPENSES'
  | 'COLLECTED_MISCELLANEOUS_LOSSES'
  | 'COLLECTED_PRODUCT_PURCHASES'
  | 'ETC'
  | 'All';
export type AccountedType = 'PAID' | 'COLLECTED';
export type OfficialPriceMapType = 'WHOLESALE' | 'RETAIL';
export type AccountType = 'DEPOSIT';
export type Bank =
  "KAKAO_BANK" |
  "KOOKMIN_BANK" |
  "KEB_HANA_BANK" |
  "NH_BANK" |
  "SHINHAN_BANK" |
  "IBK" |
  "WOORI_BANK" |
  "CITI_BANK_KOREA" |
  "HANA_BANK" |
  "SC_FIRST_BANK" |
  "KYONGNAM_BANK" |
  "KWANGJU_BANK" |
  "DAEGU_BANK" |
  "DEUTSCHE_BANK" |
  "BANK_OF_AMERICA" |
  "BUSAN_BANK" |
  "NACF" |
  "SAVINGS_BANK" |
  "NACCSF" |
  "SUHYUP_BANK" |
  "NACUFOK" |
  "POST_OFFICE" |
  "JEONBUK_BANK" |
  "JEJU_BANK" |
  "K_BANK" |
  "TOS_BANK";
export type CardCompany =
  "BC_CARD" |
  "KB_CARD" |
  "SAMSUNG_CARD" |
  "SHINHAN_CARD" |
  "WOORI_CARD" |
  "HANA_CARD" |
  "LOTTE_CARD" |
  "HYUNDAI_CARD" |
  "NH_CARD";
