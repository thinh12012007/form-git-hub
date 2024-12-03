// Lấy phần tử nút
const toggleButton = document.getElementById("toggle-mode");

// Thêm sự kiện click
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
