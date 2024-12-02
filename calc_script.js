// Função para adicionar o valor ao display
function appendValue(value) {
    document.getElementById('display').value += value;
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para apagar o último caractere
function clearLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Função para inserir π no display
function appendPi() {
    document.getElementById('display').value += 'pi'; // Math.js usa 'pi' como identificador
}

// Função para calcular o resultado usando Math.js
function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        let result = math.evaluate(expression); // Math.js processa expressões complexas
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}

// Função para calcular raiz quadrada
function calculateSqrt() {
    try {
        let value = document.getElementById('display').value;
        let result = math.sqrt(math.evaluate(value));
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}

// Função para calcular porcentagem
function calculatePercentage() {
    try {
        let value = document.getElementById('display').value;
        let result = math.evaluate(value) * 0.01;
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}