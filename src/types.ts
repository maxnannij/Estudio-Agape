/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'monotributo' | 'pymes' | 'impuestos' | 'finanzas' | 'general';
  features: string[];
  iconName: string;
}

export interface MonotributoLimit {
  category: string;
  maxInvoicing: number; // Annual max billing in ARS
  monthlyQuota: number; // Total monthly quota in ARS (service/product avg)
  maxElectricity?: number;
  maxSurface?: number;
}

export interface TaxExpiry {
  id: string;
  name: string;
  description: string;
  frequency: string;
  nextExpiry: string;
  urgency: 'high' | 'medium' | 'low';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface EstimatorResult {
  recommendedPlan: string;
  estimatedFeeRange: string;
  servicesIncluded: string[];
  ctaMessage: string;
}
