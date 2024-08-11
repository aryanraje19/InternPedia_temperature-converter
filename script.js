document.getElementById('convertBtn').addEventListener('click', function() {
    let temperature = document.getElementById('temperature').value;
    let scale = document.querySelector('input[name="scale"]:checked').value;
    let result;

    if (scale === 'celsius') {
        result = (temperature * 9/5) + 32;
        resultText = `${temperature}°C is ${result.toFixed(2)}°F`;
    } else {
        result = (temperature - 32) * 5/9;
        resultText = `${temperature}°F is ${result.toFixed(2)}°C`;
    }

    document.getElementById('resultText').textContent = resultText;
});
