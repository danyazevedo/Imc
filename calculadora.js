function calculateIMC() {
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('result');
    const image = document.getElementById('imc-image');

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        result.textContent = 'Por favor, insira valores válidos.';
        image.classList.add('hidden');
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);
    let category = '';
    let imagePath = '';


    if (imc < 18.5) {
        category = 'Abaixo do peso';
        imagePath = gender === 'male' ? 'imagem/H magro.avif' : 'imagem/M Abaixo do peso.jpg';
    } else if (imc < 25) {
        category = 'Normal';
        imagePath = gender === 'male' ? 'imagem/H peso ideal.jpg' : 'imagem/M peso ideal.jpg';
    } else {
        category = 'Sobrepeso';
        imagePath = gender === 'male' ? 'imagem/H sobrepeso.jpg' : 'imagem/M sobrepeso.jpg';
    }

    result.textContent = `Seu IMC é ${imc} (${category}).`;
    image.src = imagePath;
    image.classList.remove('hidden');
}
