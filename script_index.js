// ตัวอย่างฟังก์ชัน JavaScript เพื่อปรับแต่งเทมเพลต Resume
document.addEventListener("DOMContentLoaded", function() {
  // เพิ่มการตอบสนองการคลิกที่รูปโปรไฟล์
  var profilePic = document.querySelector(".profile-pic");
  profilePic.addEventListener("click", function() {
    alert("คุณคลิกที่รูปโปรไฟล์");
  });

  // เพิ่มการเปลี่ยนสีพื้นหลังเมื่อเมาส์ hover ไปที่หัวข้อ
  var sectionHeaders = document.querySelectorAll("h2");
  sectionHeaders.forEach(function(header) {
    header.addEventListener("mouseover", function() {
      this.style.backgroundColor = "#eee";
    });

    header.addEventListener("mouseout", function() {
      this.style.backgroundColor = "transparent";
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  // เพิ่มการเปิด/ปิดส่วนข้อมูล
  var sections = document.querySelectorAll("section");
  sections.forEach(function(section) {
    var sectionHeader = section.querySelector("h2");
    sectionHeader.addEventListener("click", function() {
      section.classList.toggle("active");
    });
  });

  // เพิ่มการเปลี่ยนสีของตัวอักษรเมื่อเลื่อนเมาส์
  var textElements = document.querySelectorAll("h1, h2, p, li");
  textElements.forEach(function(element) {
    element.addEventListener("mouseover", function() {
      this.style.color = "#ff0000"; // เปลี่ยนสีตามความต้องการ
    });

    element.addEventListener("mouseout", function() {
      this.style.color = ""; // เอาสีกลับมาเป็นค่าเริ่มต้น
    });
  });
});
