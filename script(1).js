function calculateCompound() {
    const p = parseFloat(document.getElementById('principal').value) || 1000;
    const r = parseFloat(document.getElementById('rate').value) / 100 || 0.05;
    const t = parseFloat(document.getElementById('years').value) || 5;
    const fv = p * Math.pow(1 + r, t);
    document.getElementById('compoundResult').textContent = `Future Value: £${fv.toFixed(2)}`;
}

// Add more functions for other calculators as we expand

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    calculateCompound();
});