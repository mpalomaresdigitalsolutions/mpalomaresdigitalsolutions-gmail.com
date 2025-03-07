// ROI Calculator
function calculateROI() {
    const adSpend = parseFloat(document.getElementById('ad-spend').value);
    const conversionValue = parseFloat(document.getElementById('conversion-value').value);
    const roi = ((conversionValue - adSpend) / adSpend) * 100;
    document.getElementById('roi-results').textContent = `ROI: ${roi.toFixed(2)}%`;
}

// Pricing Calculator
function estimateCost() {
    const campaignType = document.getElementById('campaign-type').value;
    const budget = parseFloat(document.getElementById('monthly-budget').value);
    const cost = campaignType === 'search' ? budget * 0.15 : budget * 0.10;
    document.getElementById('price-estimate').textContent = `Estimated Cost: $${cost.toFixed(2)}`;
}