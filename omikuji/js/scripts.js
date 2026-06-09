document.getElementById('draw').addEventListener('click', function() {
  const omikujiResults = ['大吉', '中吉', '小吉', '末吉', '凶', '大凶', '吉', '半吉'];
  const result = omikujiResults[Math.floor(Math.random() * omikujiResults.length)];
  const resultElement = document.getElementById('result');

  const colors = {
    '大吉': 'result-good',
    '中吉': 'result-good',
    '吉': 'result-good',
    '小吉': 'result-neutral',
    '半吉': 'result-neutral',
    '末吉': 'result-bad',
    '凶': 'result-bad',
    '大凶': 'result-bad'
  };

  resultElement.textContent = `あなたの運勢は..... ${result}!`;
  resultElement.className = colors[result] || 'result-neutral';
})