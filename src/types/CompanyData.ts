export interface CompanyData {
  cik:        number;
  entityName: string;
  facts:      Facts;
}

export interface Facts {
  dei:       Dei;
  "us-gaap": UsGaap;
}

export interface Dei {
  EntityCommonStockSharesOutstanding: EntityCommonStockSharesOutstanding;
  EntityPublicFloat:                  EntityPublicFloat;
}

export interface EntityCommonStockSharesOutstanding {
  label:       string;
  description: string;
  units:       EntityCommonStockSharesOutstandingUnits;
}

export interface EntityCommonStockSharesOutstandingUnits {
  shares: Share[];
}

export interface Share {
  end:    Date;
  val:    number;
  accn:   string;
  fy:     number;
  fp:     FP;
  form:   Form;
  filed:  Date;
  frame?: string;
  start?: Date;
}

export enum Form {
  The10K = "10-K",
  The10Q = "10-Q",
}

export enum FP {
  Fy = "FY",
  Q1 = "Q1",
  Q2 = "Q2",
  Q3 = "Q3",
}

export interface EntityPublicFloat {
  label:       null | string;
  description: null | string;
  units:       EntityPublicFloatUnits;
}

export interface EntityPublicFloatUnits {
  USD: Share[];
}

export interface UsGaap {
  AccountsPayableCurrent:                                                                                                        EntityPublicFloat;
  AccountsReceivableNetCurrent:                                                                                                  EntityPublicFloat;
  AccruedLiabilitiesCurrent:                                                                                                     EntityPublicFloat;
  AccumulatedOtherComprehensiveIncomeLossNetOfTax:                                                                               EntityPublicFloat;
  AcquiredFiniteLivedIntangibleAssetResidualValue:                                                                               EntityPublicFloat;
  AdditionalPaidInCapital:                                                                                                       EntityPublicFloat;
  AdjustmentsToAdditionalPaidInCapitalSharebasedCompensationRequisiteServicePeriodRecognitionValue:                              EntityPublicFloat;
  AllocatedShareBasedCompensationExpense:                                                                                        EntityPublicFloat;
  AmortizationOfIntangibleAssets:                                                                                                EntityPublicFloat;
  AntidilutiveSecuritiesExcludedFromComputationOfEarningsPerShareAmount:                                                         EntityCommonStockSharesOutstanding;
  Assets:                                                                                                                        EntityPublicFloat;
  AssetsCurrent:                                                                                                                 EntityPublicFloat;
  CapitalExpendituresIncurredButNotYetPaid:                                                                                      EntityPublicFloat;
  CapitalizedComputerSoftwareNet:                                                                                                EntityPublicFloat;
  CapitalizedContractCostNetCurrent:                                                                                             EntityPublicFloat;
  CapitalizedContractCostNetNoncurrent:                                                                                          EntityPublicFloat;
  CashAndCashEquivalentsAtCarryingValue:                                                                                         EntityPublicFloat;
  CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsIncludingDisposalGroupAndDiscontinuedOperations:                  EntityPublicFloat;
  CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsPeriodIncreaseDecreaseIncludingExchangeRateEffect:                EntityPublicFloat;
  CommonStockParOrStatedValuePerShare:                                                                                           CommonStockParOrStatedValuePerShare;
  CommonStockSharesAuthorized:                                                                                                   EntityCommonStockSharesOutstanding;
  CommonStockSharesIssued:                                                                                                       EntityCommonStockSharesOutstanding;
  CommonStockSharesOutstanding:                                                                                                  EntityCommonStockSharesOutstanding;
  CommonStockValue:                                                                                                              EntityPublicFloat;
  ComprehensiveIncomeNetOfTax:                                                                                                   EntityPublicFloat;
  ContractWithCustomerLiabilityRevenueRecognized:                                                                                EntityPublicFloat;
  ConversionOfStockAmountConverted1:                                                                                             EntityPublicFloat;
  ConversionOfStockSharesConverted1:                                                                                             EntityCommonStockSharesOutstanding;
  ConversionOfStockSharesIssued1:                                                                                                EntityCommonStockSharesOutstanding;
  CostOfRevenue:                                                                                                                 EntityPublicFloat;
  DebtInstrumentConvertibleBeneficialConversionFeature:                                                                          EntityPublicFloat;
  DeferredIncomeTaxExpenseBenefit:                                                                                               EntityPublicFloat;
  DeferredOfferingCosts:                                                                                                         EntityPublicFloat;
  DeferredRevenueCurrent:                                                                                                        EntityPublicFloat;
  DeferredRevenueNoncurrent:                                                                                                     EntityPublicFloat;
  DepreciationDepletionAndAmortization:                                                                                          EntityPublicFloat;
  EarningsPerShareBasicAndDiluted:                                                                                               CommonStockParOrStatedValuePerShare;
  EffectiveIncomeTaxRateReconciliationAtFederalStatutoryIncomeTaxRate:                                                           DefinedContributionPlanEmployerMatchingContributionPercent;
  EffectOfExchangeRateOnCashCashEquivalentsRestrictedCashAndRestrictedCashEquivalents:                                           EntityPublicFloat;
  EmployeeServiceShareBasedCompensationAllocationOfRecognizedPeriodCostsCapitalizedAmount:                                       EntityPublicFloat;
  EquitySecuritiesWithoutReadilyDeterminableFairValueAmount:                                                                     EntityPublicFloat;
  FairValueAdjustmentOfWarrants:                                                                                                 EntityPublicFloat;
  FinanceLeaseLiabilityNoncurrent:                                                                                               EntityPublicFloat;
  FinanceLeasePrincipalPayments:                                                                                                 EntityPublicFloat;
  FinanceLeaseRightOfUseAsset:                                                                                                   EntityPublicFloat;
  FiniteLivedIntangibleAssetsAccumulatedAmortization:                                                                            EntityPublicFloat;
  FiniteLivedIntangibleAssetsGross:                                                                                              EntityPublicFloat;
  FiniteLivedIntangibleAssetsNet:                                                                                                EntityPublicFloat;
  ForeignCurrencyTransactionGainLossUnrealized:                                                                                  EntityPublicFloat;
  GainLossOnSaleOfPropertyPlantEquipment:                                                                                        EntityPublicFloat;
  GeneralAndAdministrativeExpense:                                                                                               EntityPublicFloat;
  Goodwill:                                                                                                                      EntityPublicFloat;
  GoodwillAcquiredDuringPeriod:                                                                                                  EntityPublicFloat;
  GoodwillImpairmentLoss:                                                                                                        EntityPublicFloat;
  GoodwillPurchaseAccountingAdjustments:                                                                                         EntityPublicFloat;
  GrossProfit:                                                                                                                   EntityPublicFloat;
  IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest:                                   EntityPublicFloat;
  IncomeTaxExpenseBenefit:                                                                                                       EntityPublicFloat;
  IncomeTaxesPaidNet:                                                                                                            EntityPublicFloat;
  IncreaseDecreaseInAccountsPayable:                                                                                             EntityPublicFloat;
  IncreaseDecreaseInAccountsReceivable:                                                                                          EntityPublicFloat;
  IncreaseDecreaseInAccruedLiabilitiesAndOtherOperatingLiabilities:                                                              EntityPublicFloat;
  IncreaseDecreaseInContractWithCustomerLiability:                                                                               EntityPublicFloat;
  IncreaseDecreaseInOperatingLeaseLiability:                                                                                     EntityPublicFloat;
  IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets:                                                                        EntityPublicFloat;
  InterestExpense:                                                                                                               EntityPublicFloat;
  InterestPaidNet:                                                                                                               EntityPublicFloat;
  LettersOfCreditOutstandingAmount:                                                                                              EntityPublicFloat;
  Liabilities:                                                                                                                   EntityPublicFloat;
  LiabilitiesAndStockholdersEquity:                                                                                              EntityPublicFloat;
  LiabilitiesCurrent:                                                                                                            EntityPublicFloat;
  LineOfCredit:                                                                                                                  EntityPublicFloat;
  LineOfCreditFacilityMaximumBorrowingCapacity:                                                                                  EntityPublicFloat;
  NetCashProvidedByUsedInFinancingActivities:                                                                                    EntityPublicFloat;
  NetCashProvidedByUsedInInvestingActivities:                                                                                    EntityPublicFloat;
  NetCashProvidedByUsedInOperatingActivities:                                                                                    EntityPublicFloat;
  NetIncomeLoss:                                                                                                                 EntityPublicFloat;
  NetIncomeLossAvailableToCommonStockholdersBasic:                                                                               EntityPublicFloat;
  NumberOfOperatingSegments:                                                                                                     NumberOf;
  OperatingExpenses:                                                                                                             EntityPublicFloat;
  OperatingIncomeLoss:                                                                                                           EntityPublicFloat;
  OperatingLeaseLeaseIncome:                                                                                                     EntityPublicFloat;
  OperatingLeaseLiabilityNoncurrent:                                                                                             EntityPublicFloat;
  OperatingLeasePayments:                                                                                                        EntityPublicFloat;
  OperatingLeaseRightOfUseAsset:                                                                                                 EntityPublicFloat;
  OtherAccruedLiabilitiesCurrent:                                                                                                EntityPublicFloat;
  OtherAssetsNoncurrent:                                                                                                         EntityPublicFloat;
  OtherComprehensiveIncomeForeignCurrencyTransactionAndTranslationAdjustmentNetOfTaxPortionAttributableToParent:                 EntityPublicFloat;
  OtherComprehensiveIncomeLossForeignCurrencyTransactionAndTranslationAdjustmentNetOfTax:                                        EntityPublicFloat;
  OtherLiabilitiesCurrent:                                                                                                       EntityPublicFloat;
  OtherLiabilitiesNoncurrent:                                                                                                    EntityPublicFloat;
  OtherNonoperatingIncomeExpense:                                                                                                EntityPublicFloat;
  PaymentsOfDebtIssuanceCosts:                                                                                                   EntityPublicFloat;
  PaymentsOfMergerRelatedCostsFinancingActivities:                                                                               EntityPublicFloat;
  PaymentsOfStockIssuanceCosts:                                                                                                  EntityPublicFloat;
  PaymentsToAcquireBusinessesNetOfCashAcquired:                                                                                  EntityPublicFloat;
  PaymentsToAcquireInvestments:                                                                                                  EntityPublicFloat;
  PaymentsToAcquirePropertyPlantAndEquipment:                                                                                    EntityPublicFloat;
  PaymentsToDevelopSoftware:                                                                                                     EntityPublicFloat;
  PreferredStockParOrStatedValuePerShare:                                                                                        CommonStockParOrStatedValuePerShare;
  PreferredStockSharesAuthorized:                                                                                                EntityCommonStockSharesOutstanding;
  PreferredStockSharesIssued:                                                                                                    EntityCommonStockSharesOutstanding;
  PreferredStockSharesOutstanding:                                                                                               EntityCommonStockSharesOutstanding;
  PrepaidExpenseAndOtherAssetsCurrent:                                                                                           EntityPublicFloat;
  ProceedsFromIssuanceInitialPublicOffering:                                                                                     EntityPublicFloat;
  ProceedsFromIssuanceOfRedeemableConvertiblePreferredStock:                                                                     EntityPublicFloat;
  ProceedsFromStockOptionsExercised:                                                                                             EntityPublicFloat;
  ProfitLoss:                                                                                                                    EntityPublicFloat;
  PropertyPlantAndEquipmentNet:                                                                                                  EntityPublicFloat;
  ResearchAndDevelopmentExpense:                                                                                                 EntityPublicFloat;
  RestrictedCashAndCashEquivalentsAtCarryingValue:                                                                               EntityPublicFloat;
  RestrictedCashAndCashEquivalentsNoncurrent:                                                                                    EntityPublicFloat;
  RestrictedCashNoncurrent:                                                                                                      EntityPublicFloat;
  RestructuringCharges:                                                                                                          EntityPublicFloat;
  RestructuringCosts:                                                                                                            EntityPublicFloat;
  RetainedEarningsAccumulatedDeficit:                                                                                            EntityPublicFloat;
  RevenueFromContractWithCustomerExcludingAssessedTax:                                                                           EntityPublicFloat;
  RevenueRemainingPerformanceObligation:                                                                                         EntityPublicFloat;
  RevenueRemainingPerformanceObligationPercentage:                                                                               DefinedContributionPlanEmployerMatchingContributionPercent;
  RightOfUseAssetObtainedInExchangeForOperatingLeaseLiability:                                                                   EntityPublicFloat;
  SellingAndMarketingExpense:                                                                                                    EntityPublicFloat;
  ShareBasedCompensation:                                                                                                        EntityPublicFloat;
  ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsExercisableNumber:                                             EntityCommonStockSharesOutstanding;
  ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsExercisableWeightedAverageExercisePrice:                       CommonStockParOrStatedValuePerShare;
  ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsForfeituresAndExpirationsInPeriod:                             EntityCommonStockSharesOutstanding;
  ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsForfeituresAndExpirationsInPeriodWeightedAverageExercisePrice: CommonStockParOrStatedValuePerShare;
  ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingNumber:                                             EntityCommonStockSharesOutstanding;
  ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingWeightedAverageExercisePrice:                       CommonStockParOrStatedValuePerShare;
  ShareBasedCompensationArrangementsByShareBasedPaymentAwardOptionsExercisesInPeriodWeightedAverageExercisePrice:                CommonStockParOrStatedValuePerShare;
  SharebasedCompensationArrangementBySharebasedPaymentAwardCompensationCost1:                                                    EntityPublicFloat;
  StockholdersEquity:                                                                                                            EntityPublicFloat;
  StockIssuedDuringPeriodSharesStockOptionsExercised:                                                                            EntityCommonStockSharesOutstanding;
  StockIssuedDuringPeriodValueNewIssues:                                                                                         EntityPublicFloat;
  StockIssuedDuringPeriodValueStockOptionsExercised:                                                                             EntityPublicFloat;
  TemporaryEquityCarryingAmountAttributableToParent:                                                                             EntityPublicFloat;
  TemporaryEquityParOrStatedValuePerShare:                                                                                       CommonStockParOrStatedValuePerShare;
  TemporaryEquitySharesAuthorized:                                                                                               EntityCommonStockSharesOutstanding;
  TemporaryEquitySharesIssued:                                                                                                   EntityCommonStockSharesOutstanding;
  TemporaryEquitySharesOutstanding:                                                                                              EntityCommonStockSharesOutstanding;
  WeightedAverageNumberOfShareOutstandingBasicAndDiluted:                                                                        EntityCommonStockSharesOutstanding;
  AccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment:                                                      EntityPublicFloat;
  AdvertisingExpense:                                                                                                            EntityPublicFloat;
  AllowanceForDoubtfulAccountsReceivable:                                                                                        EntityPublicFloat;
  CapitalizedComputerSoftwareAccumulatedAmortization:                                                                            EntityPublicFloat;
  CapitalizedComputerSoftwareGross:                                                                                              EntityPublicFloat;
  CapitalizedContractCostAmortization:                                                                                           EntityPublicFloat;
  CapitalizedContractCostImpairmentLoss:                                                                                         EntityPublicFloat;
  CapitalizedContractCostNet:                                                                                                    EntityPublicFloat;
  CurrentForeignTaxExpenseBenefit:                                                                                               EntityPublicFloat;
  CurrentIncomeTaxExpenseBenefit:                                                                                                EntityPublicFloat;
  CurrentStateAndLocalTaxExpenseBenefit:                                                                                         EntityPublicFloat;
  DeferredFederalIncomeTaxExpenseBenefit:                                                                                        EntityPublicFloat;
  DeferredForeignIncomeTaxExpenseBenefit:                                                                                        EntityPublicFloat;
  DeferredIncomeTaxLiabilities:                                                                                                  EntityPublicFloat;
  DeferredStateAndLocalIncomeTaxExpenseBenefit:                                                                                  EntityPublicFloat;
  DeferredTaxAssetsGross:                                                                                                        EntityPublicFloat;
  DeferredTaxAssetsLiabilitiesNet:                                                                                               EntityPublicFloat;
  DeferredTaxAssetsNet:                                                                                                          EntityPublicFloat;
  DeferredTaxAssetsOperatingLossCarryforwards:                                                                                   EntityPublicFloat;
  DeferredTaxAssetsOther:                                                                                                        EntityPublicFloat;
  DeferredTaxAssetsTaxCreditCarryforwards:                                                                                       EntityPublicFloat;
  DeferredTaxAssetsTaxDeferredExpenseCompensationAndBenefitsShareBasedCompensationCost:                                          EntityPublicFloat;
  DeferredTaxAssetsValuationAllowance:                                                                                           EntityPublicFloat;
  DeferredTaxLiabilitiesDeferredExpenseCapitalizedSoftware:                                                                      EntityPublicFloat;
  DeferredTaxLiabilitiesGoodwillAndIntangibleAssetsIntangibleAssets:                                                             EntityPublicFloat;
  DeferredTaxLiabilitiesOther:                                                                                                   EntityPublicFloat;
  Depreciation:                                                                                                                  EntityPublicFloat;
  EffectiveIncomeTaxRateReconciliationShareBasedCompensationExcessTaxBenefitAmount:                                              EntityPublicFloat;
  EmployeeRelatedLiabilitiesCurrent:                                                                                             EntityPublicFloat;
  EmployeeServiceShareBasedCompensationNonvestedAwardsTotalCompensationCostNotYetRecognizedStockOptions:                         EntityPublicFloat;
  EmployeeServiceShareBasedCompensationTaxBenefitFromCompensationExpense:                                                        EntityPublicFloat;
  FinanceLeaseInterestExpense:                                                                                                   EntityPublicFloat;
  FinanceLeaseLiability:                                                                                                         EntityPublicFloat;
  FinanceLeaseLiabilityCurrent:                                                                                                  EntityPublicFloat;
  FinanceLeaseLiabilityPaymentsDue:                                                                                              EntityPublicFloat;
  FinanceLeaseLiabilityPaymentsDueAfterYearFive:                                                                                 EntityPublicFloat;
  FinanceLeaseLiabilityPaymentsDueNextTwelveMonths:                                                                              EntityPublicFloat;
  FinanceLeaseLiabilityPaymentsDueYearFive:                                                                                      EntityPublicFloat;
  FinanceLeaseLiabilityPaymentsDueYearFour:                                                                                      EntityPublicFloat;
  FinanceLeaseLiabilityPaymentsDueYearThree:                                                                                     EntityPublicFloat;
  FinanceLeaseLiabilityPaymentsDueYearTwo:                                                                                       EntityPublicFloat;
  FinanceLeaseLiabilityUndiscountedExcessAmount:                                                                                 EntityPublicFloat;
  FinanceLeaseRightOfUseAssetAmortization:                                                                                       EntityPublicFloat;
  FinanceLeaseWeightedAverageDiscountRatePercent:                                                                                DefinedContributionPlanEmployerMatchingContributionPercent;
  FiniteLivedIntangibleAssetsAmortizationExpenseAfterYearFive:                                                                   EntityPublicFloat;
  FiniteLivedIntangibleAssetsAmortizationExpenseNextTwelveMonths:                                                                EntityPublicFloat;
  FiniteLivedIntangibleAssetsAmortizationExpenseYearFive:                                                                        EntityPublicFloat;
  FiniteLivedIntangibleAssetsAmortizationExpenseYearFour:                                                                        EntityPublicFloat;
  FiniteLivedIntangibleAssetsAmortizationExpenseYearThree:                                                                       EntityPublicFloat;
  FiniteLivedIntangibleAssetsAmortizationExpenseYearTwo:                                                                         EntityPublicFloat;
  IncomeLossFromContinuingOperationsBeforeIncomeTaxesDomestic:                                                                   EntityPublicFloat;
  IncomeLossFromContinuingOperationsBeforeIncomeTaxesForeign:                                                                    EntityPublicFloat;
  IncomeTaxReconciliationChangeInDeferredTaxAssetsValuationAllowance:                                                            EntityPublicFloat;
  IncomeTaxReconciliationForeignIncomeTaxRateDifferential:                                                                       EntityPublicFloat;
  IncomeTaxReconciliationIncomeTaxExpenseBenefitAtFederalStatutoryIncomeTaxRate:                                                 EntityPublicFloat;
  IncomeTaxReconciliationNondeductibleExpense:                                                                                   EntityPublicFloat;
  IncomeTaxReconciliationOtherAdjustments:                                                                                       EntityPublicFloat;
  IncomeTaxReconciliationStateAndLocalIncomeTaxes:                                                                               EntityPublicFloat;
  IncomeTaxReconciliationTaxCredits:                                                                                             EntityPublicFloat;
  Investments:                                                                                                                   EntityPublicFloat;
  LeaseCost:                                                                                                                     EntityPublicFloat;
  LesseeOperatingLeaseLiabilityPaymentsDue:                                                                                      EntityPublicFloat;
  LesseeOperatingLeaseLiabilityPaymentsDueAfterYearFive:                                                                         EntityPublicFloat;
  LesseeOperatingLeaseLiabilityPaymentsDueNextTwelveMonths:                                                                      EntityPublicFloat;
  LesseeOperatingLeaseLiabilityPaymentsDueYearFive:                                                                              EntityPublicFloat;
  LesseeOperatingLeaseLiabilityPaymentsDueYearFour:                                                                              EntityPublicFloat;
  LesseeOperatingLeaseLiabilityPaymentsDueYearThree:                                                                             EntityPublicFloat;
  LesseeOperatingLeaseLiabilityPaymentsDueYearTwo:                                                                               EntityPublicFloat;
  LesseeOperatingLeaseLiabilityUndiscountedExcessAmount:                                                                         EntityPublicFloat;
  LineOfCreditFacilityUnusedCapacityCommitmentFeePercentage:                                                                     DefinedContributionPlanEmployerMatchingContributionPercent;
  NumberOfReportingUnits:                                                                                                        NumberOf;
  OperatingLeaseCost:                                                                                                            EntityPublicFloat;
  OperatingLeaseLiability:                                                                                                       EntityPublicFloat;
  OperatingLeaseLiabilityCurrent:                                                                                                EntityPublicFloat;
  OperatingLeaseWeightedAverageDiscountRatePercent:                                                                              DefinedContributionPlanEmployerMatchingContributionPercent;
  ProceedsFromStockPlans:                                                                                                        EntityPublicFloat;
  PropertyPlantAndEquipmentGross:                                                                                                EntityPublicFloat;
  RealizedInvestmentGainsLosses:                                                                                                 EntityPublicFloat;
  RestrictedCash:                                                                                                                EntityPublicFloat;
  ShareBasedCompensationArrangementByShareBasedPaymentAwardFairValueAssumptionsExpectedDividendRate:                             DefinedContributionPlanEmployerMatchingContributionPercent;
  ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsExercisesInPeriodTotalIntrinsicValue:                          EntityPublicFloat;
  ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsGrantsInPeriodGross:                                           EntityCommonStockSharesOutstanding;
  ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsGrantsInPeriodWeightedAverageGrantDateFairValue:               CommonStockParOrStatedValuePerShare;
  ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingIntrinsicValue:                                     EntityPublicFloat;
  SharebasedCompensationArrangementBySharebasedPaymentAwardOptionsExercisableIntrinsicValue1:                                    EntityPublicFloat;
  ShortTermLeaseCost:                                                                                                            EntityPublicFloat;
  StockIssuedDuringPeriodValueAcquisitions:                                                                                      EntityPublicFloat;
  StockIssuedDuringPeriodValueEmployeeStockPurchasePlan:                                                                         EntityPublicFloat;
  UnrecognizedTaxBenefits:                                                                                                       EntityPublicFloat;
  UnrecognizedTaxBenefitsIncreasesResultingFromCurrentPeriodTaxPositions:                                                        EntityPublicFloat;
  UnrecognizedTaxBenefitsThatWouldImpactEffectiveTaxRate:                                                                        EntityPublicFloat;
  UnrecordedUnconditionalPurchaseObligationBalanceOnFifthAnniversary:                                                            EntityPublicFloat;
  UnrecordedUnconditionalPurchaseObligationBalanceOnFirstAnniversary:                                                            EntityPublicFloat;
  UnrecordedUnconditionalPurchaseObligationBalanceOnFourthAnniversary:                                                           EntityPublicFloat;
  UnrecordedUnconditionalPurchaseObligationBalanceOnSecondAnniversary:                                                           EntityPublicFloat;
  UnrecordedUnconditionalPurchaseObligationBalanceOnThirdAnniversary:                                                            EntityPublicFloat;
  UnrecordedUnconditionalPurchaseObligationBalanceSheetAmount:                                                                   EntityPublicFloat;
  UnrecordedUnconditionalPurchaseObligationDueAfterFiveYears:                                                                    EntityPublicFloat;
  ValuationAllowanceDeferredTaxAssetChangeInAmount:                                                                              EntityPublicFloat;
  VariableLeaseCost:                                                                                                             EntityPublicFloat;
  AvailableForSaleSecuritiesDebtSecurities:                                                                                      EntityPublicFloat;
  ContractualObligation:                                                                                                         EntityPublicFloat;
  SelfInsuranceReserve:                                                                                                          EntityPublicFloat;
  EarningsPerShareBasic:                                                                                                         CommonStockParOrStatedValuePerShare;
  EarningsPerShareDiluted:                                                                                                       CommonStockParOrStatedValuePerShare;
  InterestIncomeExpenseNonoperatingNet:                                                                                          EntityPublicFloat;
  ReceivablesFromCustomers:                                                                                                      EntityPublicFloat;
  StockIssuedDuringPeriodValueRestrictedStockAwardGross:                                                                         EntityPublicFloat;
  WeightedAverageNumberOfDilutedSharesOutstanding:                                                                               EntityCommonStockSharesOutstanding;
  WeightedAverageNumberOfSharesOutstandingBasic:                                                                                 EntityCommonStockSharesOutstanding;
  AccretionAmortizationOfDiscountsAndPremiumsInvestments:                                                                        EntityPublicFloat;
  AssetsFairValueDisclosure:                                                                                                     EntityPublicFloat;
  AvailableForSaleDebtSecuritiesAccumulatedGrossUnrealizedGainBeforeTax:                                                         EntityPublicFloat;
  AvailableForSaleDebtSecuritiesAccumulatedGrossUnrealizedLossBeforeTax:                                                         EntityPublicFloat;
  AvailableForSaleDebtSecuritiesAmortizedCostBasis:                                                                              EntityPublicFloat;
  ImpairmentOfInvestments:                                                                                                       EntityPublicFloat;
  MarketableSecurities:                                                                                                          EntityPublicFloat;
  MarketableSecuritiesCurrent:                                                                                                   EntityPublicFloat;
  MarketableSecuritiesUnrealizedGainLoss:                                                                                        EntityPublicFloat;
  OtherComprehensiveIncomeLossAvailableForSaleSecuritiesAdjustmentNetOfTax:                                                      EntityPublicFloat;
  OtherComprehensiveIncomeLossNetOfTax:                                                                                          EntityPublicFloat;
  OtherComprehensiveIncomeLossNetOfTaxPortionAttributableToParent:                                                               EntityPublicFloat;
  PaymentsToAcquireMarketableSecurities:                                                                                         EntityPublicFloat;
  ProceedsFromSaleAndMaturityOfMarketableSecurities:                                                                             EntityPublicFloat;
  UnrealizedGainLossOnInvestments:                                                                                               EntityPublicFloat;
  AccruedBonusesCurrent:                                                                                                         EntityPublicFloat;
  IncreaseDecreaseInTradingSecurities:                                                                                           EntityPublicFloat;
  ProceedsFromMaturitiesPrepaymentsAndCallsOfAvailableForSaleSecurities:                                                         EntityPublicFloat;
  ProceedsFromMaturitiesPrepaymentsAndCallsOfHeldToMaturitySecurities:                                                           EntityPublicFloat;
  ProvisionForLoanAndLeaseLosses:                                                                                                EntityPublicFloat;
  DebtSecuritiesAvailableForSaleAllowanceForCreditLossNotPreviouslyRecorded:                                                     EntityPublicFloat;
  FinancingReceivableAllowanceForCreditLosses:                                                                                   EntityPublicFloat;
  PreferredStockValue:                                                                                                           EntityPublicFloat;
  ProceedsFromSaleOfAvailableForSaleSecuritiesDebt:                                                                              EntityPublicFloat;
  ProvisionForDoubtfulAccounts:                                                                                                  EntityPublicFloat;
  PurchaseObligation:                                                                                                            EntityPublicFloat;
  DebtSecuritiesAvailableForSaleRealizedGainLoss:                                                                                EntityPublicFloat;
  CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsPeriodIncreaseDecreaseExcludingExchangeRateEffect:                EntityPublicFloat;
  DeferredTaxLiabilities:                                                                                                        EntityPublicFloat;
  DefinedContributionPlanEmployerMatchingContributionPercent:                                                                    DefinedContributionPlanEmployerMatchingContributionPercent;
  ImpairmentOfIntangibleAssetsIndefinitelivedExcludingGoodwill:                                                                  EntityPublicFloat;
  IndefiniteLivedIntangibleAssetsExcludingGoodwill:                                                                              EntityPublicFloat;
  IndefinitelivedIntangibleAssetsAcquired:                                                                                       EntityPublicFloat;
  IntangibleAssetsGrossExcludingGoodwill:                                                                                        EntityPublicFloat;
  IntangibleAssetsNetExcludingGoodwill:                                                                                          EntityPublicFloat;
  InvestmentsFairValueDisclosure:                                                                                                EntityPublicFloat;
  PaymentsToAcquireOtherProductiveAssets:                                                                                        EntityPublicFloat;
  PaymentsToAcquireProductiveAssets:                                                                                             EntityPublicFloat;
  ProvisionForLoanLossesExpensed:                                                                                                EntityPublicFloat;
  StockIssuedDuringPeriodValueConversionOfConvertibleSecurities:                                                                 EntityPublicFloat;
  RestructuringAndRelatedCostNumberOfPositionsEliminatedPeriodPercent:                                                           DefinedContributionPlanEmployerMatchingContributionPercent;
  RestructuringReserve:                                                                                                          EntityPublicFloat;
  AvailableForSaleSecuritiesDebtMaturitiesWithinOneYearFairValue:                                                                EntityPublicFloat;
  DebtSecuritiesAvailableForSaleAmortizedCostCurrent:                                                                            EntityPublicFloat;
  DebtSecuritiesAvailableForSaleAmortizedCostNoncurrent:                                                                         EntityPublicFloat;
  EquitySecuritiesWithoutReadilyDeterminableFairValueImpairmentLossAnnualAmount:                                                 EntityPublicFloat;
  GoodwillForeignCurrencyTranslationGainLoss:                                                                                    EntityPublicFloat;
  InterestExpenseNonoperating:                                                                                                   EntityPublicFloat;
  MarketableSecuritiesNoncurrent:                                                                                                EntityPublicFloat;
  PaymentsToAcquireIntangibleAssets:                                                                                             EntityPublicFloat;
  PaymentForContingentConsiderationLiabilityFinancingActivities:                                                                 EntityPublicFloat;
}

export interface CommonStockParOrStatedValuePerShare {
  label:       string;
  description: string;
  units:       CommonStockParOrStatedValuePerShareUnits;
}

export interface CommonStockParOrStatedValuePerShareUnits {
  "USD/shares": Share[];
}

export interface DefinedContributionPlanEmployerMatchingContributionPercent {
  label:       string;
  description: string;
  units:       DefinedContributionPlanEmployerMatchingContributionPercentUnits;
}

export interface DefinedContributionPlanEmployerMatchingContributionPercentUnits {
  pure: Share[];
}

export interface NumberOf {
  label:       string;
  description: string;
  units:       NumberOfOperatingSegmentsUnits;
}

export interface NumberOfOperatingSegmentsUnits {
  Segment: Share[];
  segment: Share[];
}
