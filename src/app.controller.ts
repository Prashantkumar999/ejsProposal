import { Controller, Get, Render } from '@nestjs/common';

@Controller('proposal')
export class AppController {
  // Route: /proposal/page1 - Property Management Proposal page
  @Get('page1')
  @Render('proposal')
  getProposal() {
    // You can pass data to the EJS template here
    return {
      ownerName: 'MS. FATIN',
      propertyDetails: '2 BEDROOM DUPLEX APARTMENT, 2560 SQ.FT., SEA VIEW, EMAAR BUILDING, OASIS TWO, MASDAR CITY',
      proposalRef: 'RHH-0226-265',
      date: '10/12/2025',
      annualRevenue: 'AED 280,000',
      occupancy: '85%',
      increase: '+25%',
    };
  }

  // Route: /proposal/page2 - Executive Financial Summary page
  @Get('page2')
  @Render('summary')
  getSummary() {
    // You can pass data to the EJS template here
    return {
      annualNetProfit: 'AED 280,000',
      monthlyAverage: 'AED 10,000',
      grossAnnualRevenue: 'AED 120,000',
      averageADR: 'AED 333.34',
      occupancyPercent: '85%',
      yieldIncrease: '+25% HIGHER YIELD',
    };
  }

  // Route: /proposal/page3 - Monthly STR vs LTR Comparison Chart
  @Get('page3')
  @Render('chart-monthly')
  getMonthlyChart() {
    // Chart data is handled in the EJS template via JavaScript
    return {};
  }

  // Route: /proposal/page4 - Revenue vs Profit Analysis Chart
  @Get('page4')
  @Render('chart-revenue')
  getRevenueChart() {
    // Chart data is handled in the EJS template via JavaScript
    return {};
  }

  // Route: /proposal/page5 - Why Your Property Earns More
  @Get('page5')
  @Render('why-earns-more')
  getWhyEarnsMore() {
    return {
      lowSeasonPrice: '612',
      lowSeasonAccuracy: '75%',
      peakSeasonPrice: '1200',
      peakSeasonAccuracy: '92%',
      shoulderSeasonPrice: '888',
      shoulderSeasonAccuracy: '85%',
    };
  }

  // Route: /proposal/page6 - Why Opt for Holiday Homes
  @Get('page6')
  @Render('why-holiday-homes')
  getWhyHolidayHomes() {
    // This page uses static content, no dynamic data needed
    return {};
  }

  // Route: /proposal/page7 - Why Royal Holiday Homes
  @Get('page7')
  @Render('why-royal-homes')
  getWhyRoyalHomes() {
    // This page uses static content, no dynamic data needed
    return {};
  }

  // Route: /proposal/page8 - How It Works
  @Get('page8')
  @Render('how-it-works')
  getHowItWorks() {
    // This page uses static content, no dynamic data needed
    return {};
  }

  // Route: /proposal/page9 - Ready to Maximize
  @Get('page9')
  @Render('ready-to-maximize')
  getReadyToMaximize() {
    // This page uses static content, no dynamic data needed
    return {};
  }

  // Route: /proposal/page10 - Our Portfolio
  @Get('page10')
  @Render('portfolio')
  getPortfolio() {
    return {
      managedProperties: '150+',
      fiveStarReviews: '5000+',
      bookingsPerMonth: '1000+',
      travelersMonthly: '3500+',
      managedAssets: '250M+',
      trustedOwners: '100+',
    };
  }

  // Route: /proposal/page11 - Income Calculator
  @Get('page11')
  @Render('income-calculator')
  getIncomeCalculator() {
    return {};
  }
}
