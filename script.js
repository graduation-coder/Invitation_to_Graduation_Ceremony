// Thiết lập ngày kết thúc
const countdownDate = new Date("May 12, 2026 00:00:00").getTime();
const updateTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Tính toán ngày, giờ, phút, giây
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị kết quả vào các thẻ span
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const timerEl = document.getElementById("timer");

    if (daysEl) daysEl.innerHTML = days < 10 ? "0" + days : days;
    if (hoursEl) hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
    if (minutesEl) minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    if (secondsEl) secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // Nếu đếm ngược kết thúc
    if (distance < 0) {
        clearInterval(updateTimer);
        if (timerEl) timerEl.innerHTML = "CHÚC MỪNG TỐT NGHIỆP!";
    }
}, 1000);