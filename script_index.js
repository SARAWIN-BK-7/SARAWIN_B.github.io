
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
document.addEventListener("DOMContentLoaded", function() {
  const data = [70, 80, 60, 90, 75]; // เปอร์เซ็นต์ของทักษะ
  const labels = ['PLC', 'LabView', 'Image Processing', 'Python', 'ROS']; // ชื่อทักษะ

  const ctx = document.getElementById('skills-chart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Skills',
        data: data,
        backgroundColor: ['#4c6ef5']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 10
          }
        }
      }
    }
  });
});
// Donut chart
// document.addEventListener("DOMContentLoaded", function() {
//   const data = [70, 50, 60, 70, 70]; // เปอร์เซ็นต์ของทักษะ
//   const labels = ['PLC', 'LabView', 'Image Processing', 'Python', 'ROS']; // ชื่อทักษะ

//   const ctx = document.getElementById('skills-chart').getContext('2d');
//   new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//       labels: labels,
//       datasets: [{
//         data: data,
//         backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff']
//       }]
//     },
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: 'bottom',
//         },
//         title: {
//           display: true,
//           text: 'Skills'
//         }
//       }
//     }
//   });
// });