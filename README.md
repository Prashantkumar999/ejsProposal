# Property Management Proposal - NestJS with EJS

A simple NestJS application that serves four beautiful property management proposal pages using EJS templates with interactive charts.

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Images

Place your images in the `public/images/` folder:

**Core Images (Required for multiple pages):**
- `royal_homes_svglogo.svg` - Logo for the proposal page
- `svg_logo.svg` - Logo for summary and other pages
- `illustration.png` - Skyline illustration (used on multiple pages)
- `R.svg` - Small corner logo (used on pages 7, 8, 10)
- `logo.png` - Main logo (used on page 9)

**For Page 6 - Why Opt for Holiday Homes:**
- `higher.svg`
- `higher_yield_through_seasonality.svg`
- `asset_protection.svg`
- `maintain_property_value.svg`
- `reduced_long_term_tenant_risk.svg`
- `flexibility_owner_usage.svg`
- `fixed_annual_income.svg`
- `tenant_disputes_and_issues.svg`
- `property_tied_up.svg`
- `difficult_to_use_property_yourself.svg`
- `wear_and_tear_over_time.svg`

**For Page 8 - How It Works:**
- `arrow.svg` - Flow arrow icon

**For Page 9 - Ready to Maximize:**
- `phone.svg` - Phone icon
- `mail.svg` - Email icon
- `globe.svg` - Website icon
- `location.svg` - Location icon

**For Page 10 - Our Portfolio:**
- `fivestars.svg` - Five stars rating image
- `dubizzle.svg` - Partner logo
- `partner2.svg` - Partner logo
- `booking.svg` - Booking.com logo
- `airbnb.svg` - Airbnb logo
- `agoda.svg` - Agoda logo
- `hotels.svg` - Hotels.com logo
- `bayut.svg` - Bayut logo
- `propertyfinder.svg` - Property Finder logo
- `home&villas.svg` - Home & Villas logo
- `expedia.svg` - Expedia logo
- `vrbo.svg` - VRBO logo

### 3. Start the Development Server

```bash
npm run start:dev
```

The application will start on `http://localhost:3000`

### 4. View the Pages

- **Page 1 - Property Management Proposal**: http://localhost:3000/proposal/page1
- **Page 2 - Executive Financial Summary**: http://localhost:3000/proposal/page2
- **Page 3 - Monthly STR vs LTR Comparison**: http://localhost:3000/proposal/page3
- **Page 4 - Revenue vs Profit Analysis**: http://localhost:3000/proposal/page4
- **Page 5 - Why Your Property Earns More**: http://localhost:3000/proposal/page5
- **Page 6 - Why Opt for Holiday Homes**: http://localhost:3000/proposal/page6
- **Page 7 - Why Royal Holiday Homes**: http://localhost:3000/proposal/page7
- **Page 8 - How It Works**: http://localhost:3000/proposal/page8
- **Page 9 - Ready to Maximize**: http://localhost:3000/proposal/page9
- **Page 10 - Our Portfolio**: http://localhost:3000/proposal/page10

## 📁 Project Structure

```
ejsproject/
├── src/
│   ├── app.controller.ts    # Routes for the pages
│   ├── app.module.ts         # Main application module
│   └── main.ts               # Application entry point
├── views/
│   ├── proposal.ejs          # Property Management Proposal page (Page 1)
│   ├── summary.ejs           # Executive Financial Summary page (Page 2)
│   ├── chart-monthly.ejs     # Monthly STR vs LTR Comparison chart (Page 3)
│   ├── chart-revenue.ejs     # Revenue vs Profit Analysis chart (Page 4)
│   ├── why-earns-more.ejs    # Why Your Property Earns More (Page 5)
│   ├── why-holiday-homes.ejs # Why Opt for Holiday Homes (Page 6)
│   ├── why-royal-homes.ejs   # Why Royal Holiday Homes (Page 7)
│   ├── how-it-works.ejs      # How It Works (Page 8)
│   ├── ready-to-maximize.ejs # Ready to Maximize (Page 9)
│   └── portfolio.ejs         # Our Portfolio (Page 10)
├── public/
│   └── images/               # Static images folder
├── package.json
└── README.md
```

## 🎨 Customizing Data

You can customize the data displayed on the pages by editing `src/app.controller.ts`:

### For Page 1 - Proposal Page (`/proposal/page1`):
- `ownerName` - Owner's name
- `propertyDetails` - Property description
- `proposalRef` - Proposal reference number
- `date` - Proposal date
- `annualRevenue` - Annual revenue forecast
- `occupancy` - Occupancy percentage
- `increase` - Percentage increase

### For Page 2 - Summary Page (`/proposal/page2`):
- `annualNetProfit` - Annual net profit
- `monthlyAverage` - Monthly average payout
- `grossAnnualRevenue` - Gross annual revenue
- `averageADR` - Average daily rate
- `occupancyPercent` - Occupancy percentage
- `yieldIncrease` - Yield increase text

### For Page 3 & 4 - Chart Pages:
- Chart data is configured directly in the EJS templates using Chart.js
- You can modify the chart data in `views/chart-monthly.ejs` and `views/chart-revenue.ejs`

### For Page 5 - Why Your Property Earns More (`/proposal/page5`):
- `lowSeasonPrice` - Low season ADR price
- `lowSeasonAccuracy` - Low season accuracy percentage
- `peakSeasonPrice` - Peak season ADR price
- `peakSeasonAccuracy` - Peak season accuracy percentage
- `shoulderSeasonPrice` - Shoulder season ADR price
- `shoulderSeasonAccuracy` - Shoulder season accuracy percentage

### For Page 6 - Why Opt for Holiday Homes (`/proposal/page6`):
- This page uses static content with comparison cards
- Make sure to add the required icon images to `public/images/` folder

### For Page 7 - Why Royal Holiday Homes (`/proposal/page7`):
- This page uses static content with benefit points
- No dynamic data needed

### For Page 8 - How It Works (`/proposal/page8`):
- This page shows the process flow
- Requires `arrow.svg` and `illustration.png` images

### For Page 9 - Ready to Maximize (`/proposal/page9`):
- This page is a call-to-action with contact information
- Requires contact icons: `phone.svg`, `mail.svg`, `globe.svg`, `location.svg`
- Requires `logo.png` and `illustration.png`

### For Page 10 - Our Portfolio (`/proposal/page10`):
- Portfolio statistics and partner logos
- Customizable data: `managedProperties`, `fiveStarReviews`, `bookingsPerMonth`, `travelersMonthly`, `managedAssets`, `trustedOwners`
- Requires partner logo images and `fivestars.svg`

## 🔧 Available Scripts

- `npm run start:dev` - Start development server with hot-reload
- `npm run build` - Build the project for production
- `npm run start:prod` - Start production server
- `npm run start` - Start the server

## 📝 How It Works

1. **NestJS** is the backend framework that handles routing
2. **EJS** (Embedded JavaScript) is used as the template engine
3. The controller (`app.controller.ts`) defines routes and passes data to templates
4. EJS templates (`views/*.ejs`) render the HTML with the provided data
5. Static files (images) are served from the `public` folder

## 🎓 Beginner-Friendly Explanation

### What is NestJS?
NestJS is a Node.js framework that helps you build server-side applications. It's like Express.js but with more structure and features.

### What is EJS?
EJS (Embedded JavaScript) is a template engine that lets you write HTML with embedded JavaScript. You can use `<%= variable %>` to insert data into your HTML.

### How the Pages Work:
1. When you visit a route like `http://localhost:3000/proposal/page1`, NestJS calls the corresponding function
2. The function returns data (like owner name, property details, etc.)
3. The data is passed to the EJS template (e.g., `proposal.ejs`)
4. EJS replaces `<%= variable %>` with the actual values
5. For chart pages, Chart.js renders interactive charts using JavaScript
6. The final HTML is sent to your browser

## 🐛 Troubleshooting

**Port 3000 already in use?**
- Change the port in `src/main.ts` from `3000` to another number (e.g., `3001`)

**Images not showing?**
- Make sure images are in `public/images/` folder
- Check that image filenames match exactly (case-sensitive)

**Template not found error?**
- Make sure `views` folder exists in the root directory
- Check that `.ejs` files are in the `views` folder

## 📚 Learn More

- [NestJS Documentation](https://docs.nestjs.com/)
- [EJS Documentation](https://ejs.co/)
