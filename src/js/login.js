document.getElementById('phone').addEventListener('input', function() {
    var phoneInput = this.value;
    var hiddenDiv = document.getElementById('hiddenDiv');
    var showDiv = document.getElementById('showDiv');

    // تبدیل اعداد فارسی به انگلیسی برای بررسی
    var persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    var englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var convertedInput = phoneInput.split('').map(function(char) {
        var index = persianNumbers.indexOf(char);
        return index !== -1 ? englishNumbers[index] : char;
    }).join('');

    // بررسی اینکه آیا ورودی دقیقاً 11 عدد است
    if (/^\d{11}$/.test(convertedInput)) {
        hiddenDiv.classList.remove('hidden');
        showDiv.classList.add('hidden');
    } else {
        hiddenDiv.classList.add('hidden');
        showDiv.classList.remove('hidden');
    }
});