import {
  CompanyData,
  UsGaap,
  DefinedContributionPlanEmployerMatchingContributionPercentUnits,
  CommonStockParOrStatedValuePerShareUnits,
  NumberOfOperatingSegmentsUnits,
  EntityCommonStockSharesOutstandingUnits,
  EntityPublicFloatUnits
} from '@/src/types/CompanyData';

const DefinedContributionPlanEmployerMatchingContributionPercent = [
  "EffectiveIncomeTaxRateReconciliationAtFederalStatutoryIncomeTaxRate",
  "RevenueRemainingPerformanceObligationPercentage",
  "FinanceLeaseWeightedAverageDiscountRatePercent",
  "LineOfCreditFacilityUnusedCapacityCommitmentFeePercentage",
  "OperatingLeaseWeightedAverageDiscountRatePercent",
  "ShareBasedCompensationArrangementByShareBasedPaymentAwardFairValueAssumptionsExpectedDividendRate",
  "DefinedContributionPlanEmployerMatchingContributionPercent",
  "RestructuringAndRelatedCostNumberOfPositionsEliminatedPeriodPercent"
]
const CommonStockParOrStatedValuePerShare = [
  "ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsForfeituresAndExpirationsInPeriodWeightedAverageExercisePrice",
  "ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsExercisableWeightedAverageExercisePrice",
  "PreferredStockParOrStatedValuePerShare",
  "EarningsPerShareBasicAndDiluted",
  "ShareBasedCompensationArrangementsByShareBasedPaymentAwardOptionsExercisesInPeriodWeightedAverageExercisePrice",
  "ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingWeightedAverageExercisePrice","TemporaryEquityParOrStatedValuePerShare",
  "ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsGrantsInPeriodWeightedAverageGrantDateFairValue",
  "EarningsPerShareBasic",
  "EarningsPerShareDiluted"
]
const NumberOf = [
  "NumberOfReportingUnits",
  "NumberOfOperatingSegments"
]
const EntityCommonStockSharesOutstanding = [
  "AntidilutiveSecuritiesExcludedFromComputationOfEarningsPerShareAmount",
  "CommonStockSharesAuthorized",
  "CommonStockSharesIssued",
  "CommonStockSharesOutstanding",
  "ConversionOfStockSharesConverted1",
  "PreferredStockSharesAuthorized",
  "PreferredStockSharesIssued",
  "ConversionOfStockSharesIssued1",
  "PreferredStockSharesOutstanding",
  "ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsExercisableNumber",
  "ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsForfeituresAndExpirationsInPeriod",
  "ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingNumber",
  "StockIssuedDuringPeriodSharesStockOptionsExercised",
  "TemporaryEquitySharesAuthorized",
  "TemporaryEquitySharesIssued",
  "TemporaryEquitySharesOutstanding",
  "WeightedAverageNumberOfShareOutstandingBasicAndDiluted",
  "WeightedAverageNumberOfDilutedSharesOutstanding",
  "ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsGrantsInPeriodGross",
  "WeightedAverageNumberOfSharesOutstandingBasic"
]

export default function getUnits(companyData: CompanyData, metric: string): any {
  if (DefinedContributionPlanEmployerMatchingContributionPercent.includes(metric)) {
    const units = companyData.facts["us-gaap"][metric as keyof UsGaap].units as DefinedContributionPlanEmployerMatchingContributionPercentUnits;
    return units.pure;
  } else if (CommonStockParOrStatedValuePerShare.includes(metric)) {
    const units = companyData.facts["us-gaap"][metric as keyof UsGaap].units as CommonStockParOrStatedValuePerShareUnits;
    return units["USD/shares"];
  } else if (NumberOf.includes(metric)) {
    const units = companyData.facts["us-gaap"][metric as keyof UsGaap].units as NumberOfOperatingSegmentsUnits;
    return units.Segment;
  } else if (EntityCommonStockSharesOutstanding.includes(metric)) {
    const units = companyData.facts["us-gaap"][metric as keyof UsGaap].units as EntityCommonStockSharesOutstandingUnits;
    return units.shares;
  } else {
    const units = companyData.facts["us-gaap"][metric as keyof UsGaap].units as EntityPublicFloatUnits;
    return units.USD;
  }
}