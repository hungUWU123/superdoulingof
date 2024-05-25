(function() {
    'use strict';
 
    var numberOfAlerts = localStorage.getItem('numberOfAlerts');
    if (!numberOfAlerts) {
        numberOfAlerts = 0;
    }
 
    numberOfAlerts++;
 
    if (numberOfAlerts <= 5) {
        alert("Đây là phiên bản mới nhất của Tool, nếu link hết hạn thì hãy vào link Tool dưới đây để cập nhật Link Super mới nhất, các bạn đánh giá ủng hộ cho Tool mình phát triển nha! Thanks\nhttps://greasyfork.org/vi/scripts/494411/");
 
        localStorage.setItem('numberOfAlerts', numberOfAlerts);
    } else if (numberOfAlerts / 5 === 0) {
        alert("Hãy vào phần Feedback của Tool dưới đây để đánh giá Tool nhé!\nhttps://greasyfork.org/vi/scripts/494411/");
    }
})();
 
    // Lưu trữ các mã đã sử dụng và IP liên kết
    var usedKeys = {};
 
    // Hàm tạo mã ngẫu nhiên 9 ký tự từ "SUPERDUOFAMILY"
    function generateRandomCode() {
        var characters = 'SUPERDUOFAMILY';
        var code = '';
        for (var i = 0; i < 9; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return code;
    }
 
    // Hàm để lấy địa chỉ IP hiện tại (giả sử bạn có cách lấy IP)
    function getCurrentIP() {
        // Ví dụ giả định, bạn cần thay đổi để lấy địa chỉ IP thực tế
        return '123.456.789.012';
    }
 
    // Hàm để lấy mã mới
    function getNewCode() {
        var currentTime = new Date().getTime();
        var lastKeyCode = localStorage.getItem('lastKeyCode');
        var lastKeyTime = localStorage.getItem('lastKeyTime');
 
        if (lastKeyCode && lastKeyTime && (currentTime - parseInt(lastKeyTime) < 86400000)) {
            // Nếu vẫn còn key hợp lệ trong vòng 5 phút, báo lỗi
            alert('Key của bạn đã lấy trước đó. Lấy lại sau 24h!');
            return null;
        } else {
            // Nếu key hết hạn hoặc chưa có key trước đó, tạo key mới
            var newCode = 'VIP_' + generateRandomCode();
            localStorage.setItem('lastKeyCode', newCode);
            localStorage.setItem('lastKeyTime', currentTime.toString());
            return newCode;
        }
    }
 
    // Hàm kiểm tra nếu mã đã được sử dụng
    function checkKeyUsage(key) {
        return usedKeys.hasOwnProperty(key);
    }
 
    // Hàm đánh dấu mã đã sử dụng
    function markKeyAsUsed(key) {
        usedKeys[key] = true;
    }
 
// Function to create a CSS style element and append it to the document head
function addStyles(styles) {
    var styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}
 
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const blockedIPs = ['171.243.60.166', '1.55.42.126', '77.73.69.217'];
        if (blockedIPs.includes(data.ip)) {
            alert('Thiết bị của bạn không tương thích để sử dụng Tool Super-Duolingo này! Hãy tắt Tool đó để có thể vào trang Web.');
            disableWebsite();
        }
    })
    .catch(error => {
        console.error('Lỗi khi lấy địa chỉ IP:', error);
    });
 
function disableWebsite() {
    // Tạo một lớp phủ
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Màu đen với độ mờ
    overlay.style.zIndex = '9999'; // Đảm bảo lớp phủ nằm trên tất cả các phần tử khác
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.color = 'white';
    overlay.style.fontSize = '24px';
    overlay.innerText = 'Thiết bị của bạn không tương thích để sử dụng Tool Super-Duolingo này! Hãy tắt Tool đó để có thể vào trang Web.';
 
    // Thêm lớp phủ vào body
    document.body.appendChild(overlay);
 
    // Vô hiệu hóa cuộn trang
    document.body.style.overflow = 'hidden';
}
 
// CSS styles for the container div
var containerDivStyles = `
    #containerDiv {
        position: fixed;
        bottom: 50px;
        left: 20px; /* Changed from right to left */
        z-index: 9999;
        animation: bounce 1s infinite;
        display: flex;
        flex-direction: column;
        align-items: flex-start; /* Changed from flex-end to flex-start */
    }
`;
 
// CSS styles for the Verify button
var verifyButtonStyles = `
    #verifyButton {
    background-image: url('https://static.wixstatic.com/media/e73c92_ff1116ef8b834b23aafb7e916cf00ddf~mv2.png/v1/fill/w_704,h_247,al_c,lg_1,q_85,enc_auto/e73c92_ff1116ef8b834b23aafb7e916cf00ddf~mv2.png'); /* Background image */
    background-size: cover; /* Ensure the background image covers the button */
    background-position: center; /* Center the background image */
    background-repeat: no-repeat; /* Do not repeat the background image */
    border: none; /* Không viền */
    color: white; /* Màu chữ đen */
    width: 247px; /* Chiều ngang */
    height: 50px; /* Chiều rộng */
    padding: 10px 20px; /* Khoảng cách từ chữ đến viền nút */
    text-align: center; /* Canh giữa chữ */
    text-decoration: none; /* Bỏ gạch chân */
    display: inline-block; /* Hiển thị như một khối nội tuyến */
    font-size: 20px; /* Kích thước chữ */
    font-weight: bold; /* Chữ đậm */
    border-radius: 20px; /* Bo tròn góc nút */
    cursor: pointer; /* Hiển thị con trỏ khi hover */
    box-shadow: 0 4px #509700; /* Đổ bóng */
}
 
    #verifyButton:hover {
        filter: brightness(1.2); /* Tăng độ sáng khi di chuột */
        color: #000000; /* White text */
        box-shadow: 0 2px #58A600; /* Giảm bóng khi nhấn */
        border-color: #509700; /* Viền khi di chuột là màu xanh lá nhạt */
        transform: translateY(-1px); /* Hiệu ứng nút bật lên */
        box-shadow: 0 4px #509700; /* Đổ bóng */
    }
`;
 
var getCodeButtonStyles = `
    #getCodeButton {
        background-image: url('https://static.wixstatic.com/media/e73c92_6aac17c79a3b4403ac9ba915afc73502~mv2.png/v1/fill/w_704,h_247,al_c,lg_1,q_85,enc_auto/e73c92_6aac17c79a3b4403ac9ba915afc73502~mv2.png'); /* Background image */
        background-size: cover; /* Ensure the background image covers the button */
        background-position: center; /* Center the background image */
        background-repeat: no-repeat; /* Do not repeat the background image */
        border: none; /* Không viền */
        color: white; /* Màu chữ đen */
        width: 247px; /* Chiều ngang */
        height: 50px; /* Chiều rộng */
        padding: 10px 20px; /* Khoảng cách từ chữ đến viền nút */
        text-align: center; /* Canh giữa chữ */
        text-decoration: none; /* Bỏ gạch chân */
        display: inline-block; /* Hiển thị như một khối nội tuyến */
        font-size: 20px; /* Kích thước chữ */
        font-weight: bold; /* Chữ đậm */
        border-radius: 20px; /* Bo tròn góc nút */
        cursor: pointer; /* Hiển thị con trỏ khi hover */
        box-shadow: 0 4px #1285ba; /* Đổ bóng */
    }
 
    #getCodeButton:hover {
        filter: brightness(1.2); /* Tăng độ sáng khi di chuột */
        color: #ffffff; /* White text */
        box-shadow: 0 2px #1285ba; /* Giảm bóng khi nhấn */
        border-color: #50D3FF; /* Viền khi di chuột là màu xanh lá nhạt */
        transform: translateY(-1px); /* Hiệu ứng nút bật lên */
        box-shadow: 0 4px #1285ba; /* Shadow effect */
    }
`;
 
var getSuperButtonStyles = `
    #getSuperButton {
        background-image: url('https://autoduolingo.click/assets/client/streak-ground.svg'); /* Background image */
        background-size: cover; /* Ensure the background image covers the button */
        background-position: center; /* Center the background image */
        background-repeat: no-repeat; /* Do not repeat the background image */
        border: none; /* No border */
        color: white; /* White text color */
        width: 247px; /* Button width */
        height: 50px; /* Button height */
        padding: 10px 20px; /* Padding around the text */
        text-align: center; /* Center text */
        text-decoration: none; /* No underline */
        display: inline-block; /* Inline block display */
        font-size: 20px; /* Font size */
        font-weight: bold; /* Bold font */
        border-radius: 20px; /* Rounded corners */
        cursor: pointer; /* Pointer cursor on hover */
        box-shadow: 0 4px #AC8700; /* Shadow */
        position: relative; /* Position relative for pseudo-elements */
    }
 
    #getSuperButton::before,
    #getSuperButton::after {
        content: url('https://d35aaqx5ub95lt.cloudfront.net/images/profile/f68d647fdc1536870945a5c84f3b3b82.svg'); /* Image URL */
        width: 25px; /* Image width */
        height: 25px; /* Image height */
        position: absolute; /* Absolute positioning */
    }
 
    #getSuperButton::before {
        top: 2px; /* Slight offset to ensure proper placement */
        right: 5px; /* Slight offset to ensure proper placement */
    }
 
    #getSuperButton::after {
        bottom: 5px; /* Slight offset to ensure proper placement */
        left: 5px; /* Slight offset to ensure proper placement */
    }
 
    #getSuperButton:hover {
        filter: brightness(1.1); /* Brighten on hover */
        box-shadow: 0 4px #AC8700; /* Maintain shadow */
        transform: translateY(-1px); /* Lift effect on hover */
    }
`;
 
// CSS styles for the rectangle div
var rectangleDivStyles = `
    #rectangleDiv {
        position: relative;
        width: 275px;
        height: 335px;
        background-color: rgba(0, 4, 55, 0.0); /* Đặt độ trong suốt là 0 để làm cho nền hoàn toàn trong suốt */
        border-radius: 25px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border: 2px dashed #00A1EE; /* Viền trắng dạng nét đứt */
        backdrop-filter: blur(20px); /* Áp dụng hiệu ứng mờ cho phần nền */
    }
`;
 
// CSS styles for the buttons
var buttonStyles = `
    rectangleDivbutton {
        padding: 10px 20px;
        border-radius: 4px;
        width: 247px; /* Button width */
        height: 50px; /* Button height */
        cursor: pointer;
        animation: bounce 1s infinite; /* Animation effect */
    }
`;
 
 
// CSS styles for the input
var inputStyles = `
    input[type="text"] {
        padding: 20px;
        border-radius: 4px;
        border-radius: 17px; /* Bo tròn góc 18px */
        border: 4px solid #ccc;
        width: 247px;
    }
`;
 
// CSS styles for the circle button
var circleButtonStyles = `
    #circleButton {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%); /* Đưa nút vào giữa góc trái phía trên */
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #FFFFFF;
        border: 3px solid #1CB0F6;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }
 
    #circleButton img {
        width: 50%;
        height: auto;
    }
`;
 
function createFroXButton() {
    // Tạo một div bọc để chứa cả nút và văn bản
    var wrapperDiv = document.createElement('div');
    wrapperDiv.style.position = 'fixed';
    wrapperDiv.style.bottom = '36.5%';
    wrapperDiv.style.right = '2.5%';
    wrapperDiv.style.transform = 'translate(50%, -50%)';
    wrapperDiv.style.textAlign = 'center';
    wrapperDiv.style.zIndex = '9999';
 
    // Tạo nút FroX
    var froXButton = document.createElement('div');
    froXButton.id = 'froXButton';
    froXButton.style.backgroundImage = 'url("https://static.wixstatic.com/media/e73c92_f39e1a75c14a4de1b476c9ab2185e903~mv2.png/v1/fill/w_704,h_499,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e73c92_f39e1a75c14a4de1b476c9ab2185e903~mv2.png")';
    froXButton.style.backgroundSize = '63px';
    froXButton.style.backgroundRepeat = 'no-repeat';
    froXButton.style.backgroundPosition = 'center';
    froXButton.style.backgroundColor = '#0495E1';
    froXButton.style.width = '55px';
    froXButton.style.height = '55px';
    froXButton.style.borderRadius = '50%';
    froXButton.style.border = '4px solid #0495E1';
    froXButton.style.cursor = 'pointer';
    froXButton.style.transition = 'transform 0.2s, box-shadow 0.2s';
    froXButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
 
    froXButton.addEventListener('mouseenter', function() {
        froXButton.style.transform = 'scale(1.1)';
        froXButton.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
    });
 
    froXButton.addEventListener('mouseleave', function() {
        froXButton.style.transform = 'scale(1)';
        froXButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
 
    froXButton.addEventListener('click', function() {
        var containerDiv = document.getElementById('containerDiv');
        if (containerDiv.style.display === 'none' || containerDiv.style.display === '') {
            containerDiv.style.display = 'block';
            froXButton.style.backgroundImage = 'url("https://static.wixstatic.com/media/e73c92_f39e1a75c14a4de1b476c9ab2185e903~mv2.png/v1/fill/w_704,h_499,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e73c92_f39e1a75c14a4de1b476c9ab2185e903~mv2.png")';
        } else {
            containerDiv.style.display = 'none';
            froXButton.style.backgroundImage = 'url("https://static.wixstatic.com/media/e73c92_aa2bc9da0be94f0685792d7a4fd50aa6~mv2.png/v1/fill/w_704,h_499,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e73c92_aa2bc9da0be94f0685792d7a4fd50aa6~mv2.png")';
        }
    });
 
    // Tạo phần văn bản "V1.0.7"
    var versionText = document.createElement('div');
    versionText.style.color = '#0495E1';
    versionText.style.fontSize = '18px';
    versionText.style.fontWeight = 'bold';
    versionText.style.marginTop = '5px';
    versionText.textContent = 'V1.0.7';
 
    // Thêm nút và văn bản vào div bọc
    wrapperDiv.appendChild(froXButton);
    wrapperDiv.appendChild(versionText);
 
    // Thêm div bọc vào body
    document.body.appendChild(wrapperDiv);
 
    var style = document.createElement('style');
    style.innerHTML = `
    @keyframes notify-border-eff {
        70% {
            transform: scale(1.6);
            opacity: 0.1;
        }
        100% {
            transform: scale(1.6);
            opacity: 0;
        }
    }
    @keyframes notify-eff {
        0%, 75%, 100% {
            transform: scale(1);
        }
        10% {
            transform: scale(1.1);
        }
    }
    @keyframes notify-bell-eff {
        5%, 15% {
            transform: rotate(25deg);
        }
        10%, 20% {
            transform: rotate(-25deg);
        }
        25%, 100% {
            transform: rotate(0deg);
        }
    }
    `;
    document.head.appendChild(style);
}
 
// Tạo nút FroX
createFroXButton();
 
 
// CSS styles for the NOUNDEVX rectangle
var nounDevXStyles = `
#NOUNDEVX {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 18px;
    border: 2px solid #1CB0F6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    color: #1CB0F6; /* Màu chữ */
    backdrop-filter: blur(20px); /* Áp dụng hiệu ứng mờ cho phần nền */
}
`;
 
// Tạo nút Notify và thêm vào trang web
function createNotifyButton() {
    var notifyButton = document.createElement('div');
    notifyButton.id = 'notifyButton';
    notifyButton.style.backgroundImage = 'url("https://d35aaqx5ub95lt.cloudfront.net/images/purchasePage/ace514b1060f38b30804aa196e9b0292.svg")';
    notifyButton.style.backgroundSize = '23.5Spx'; // Chỉnh kích thước ảnh thành 15px
    notifyButton.style.backgroundRepeat = 'no-repeat';
    notifyButton.style.backgroundPosition = 'center';
    notifyButton.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    notifyButton.style.width = '50px';
    notifyButton.style.height = '50px';
    notifyButton.style.borderRadius = '50%';
    notifyButton.style.border = '2px solid #81C6FF';
    notifyButton.style.position = 'fixed';
    notifyButton.style.bottom = '20px';
    notifyButton.style.right = '1%';
    notifyButton.style.cursor = 'pointer';
    notifyButton.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset';
    notifyButton.style.zIndex = '9999';
    notifyButton.style.display = 'flex';
    notifyButton.style.alignItems = 'center';
    notifyButton.style.justifyContent = 'center';
    notifyButton.style.transition = 'transform 0.2s';
    notifyButton.classList.add('new'); // Thêm class 'new' để áp dụng hiệu ứng
 
    // Tạo phần tử để hiển thị số 1
    var notificationCount = document.createElement('div');
    notificationCount.innerText = '1';
    notificationCount.style.position = 'absolute';
    notificationCount.style.top = '-5px'; // Điều chỉnh top để di chuyển lên trên
    notificationCount.style.right = '-5px'; // Điều chỉnh right để di chuyển sang phải
    notificationCount.style.backgroundColor = '#81C6FF';
    notificationCount.style.color = 'white';
    notificationCount.style.width = '20px';
    notificationCount.style.height = '20px';
    notificationCount.style.borderRadius = '90%';
    notificationCount.style.display = 'flex';
    notificationCount.style.alignItems = 'center';
    notificationCount.style.justifyContent = 'center';
    notificationCount.style.fontSize = '9px';
    notificationCount.style.fontWeight = 'bold'; // Làm cho số đậm hơn
 
 
    notifyButton.appendChild(notificationCount);
 
    notifyButton.addEventListener('mouseenter', function() {
        notifyButton.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    });
 
    notifyButton.addEventListener('mouseleave', function() {
        notifyButton.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    });
 
    notifyButton.addEventListener('click', function() {
        alert('Thông báo: ');
    });
 
    document.body.appendChild(notifyButton);
}
 
// CSS cho hiệu ứng
var style = document.createElement('style');
style.innerHTML = `
    @keyframes notify-border-eff {
        70% {
            transform: scale(1.6);
            opacity: 0.1;
        }
        100% {
            transform: scale(1.6);
            opacity: 0;
        }
    }
    @keyframes notify-eff {
        0%, 75%, 100% {
            transform: scale(1);
        }
        10% {
            transform: scale(1.1);
        }
    }
    @keyframes notify-bell-eff {
        5%, 15% {
            transform: rotate(25deg);
        }
        10%, 20% {
            transform: rotate(-25deg);
        }
        25%, 100% {
            transform: rotate(0deg);
        }
    }
    @keyframes blue-glow {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 159, 235, 0.7);
        }
        50% {
            box-shadow: 0 0 20px 10px rgba(0, 159, 235, 0.7);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(0, 159, 235, 0);
        }
    }
    #notifyButton.new {
        animation: notify-eff 2s infinite;
    }
    #notifyButton.new.blue-glow {
        animation: blue-glow 2s forwards;
    }
    #notifyButton.new::before {
        animation: notify-bell-eff 2s infinite;
    }
`;
 
// Thêm CSS vào head của trang
document.head.appendChild(style);
 
// Hiển thị luồng màu xanh mỗi 3 giây
setInterval(function() {
    var notifyButton = document.getElementById('notifyButton');
    notifyButton.classList.add('new');
    setTimeout(function() {
        notifyButton.classList.remove('new');
    }, 2000); // Hiển thị luồng màu xanh trong 2 giây
}, 3000); // Mỗi 3 giây
 
createNotifyButton();
 
 
// Add the CSS styles to the document
addStyles(containerDivStyles);
addStyles(rectangleDivStyles);
addStyles(inputStyles);
addStyles(buttonStyles);
addStyles(verifyButtonStyles);
addStyles(getCodeButtonStyles);
addStyles(circleButtonStyles);
addStyles(getSuperButtonStyles);
addStyles(nounDevXStyles);
 
// Create a container div for input and buttons
var containerDiv = document.createElement('div');
containerDiv.id = 'containerDiv';
 
// Create a rectangle div to contain input and buttons
var rectangleDiv = document.createElement('div');
rectangleDiv.id = 'rectangleDiv';
 
// Create title element
var title = document.createElement('strong');
title.style.fontWeight = 'bold';
title.style.fontSize = '20px';
title.style.display = 'block'; // Ensure it's a block element for proper centering
 
// Create span for "Type:"
var typeSpan = document.createElement('span');
typeSpan.style.color = '#2B2B2B'; // White color
typeSpan.textContent = 'Type: ';
 
// Create span for "Super-Duolingo"
var superDuolingoSpan = document.createElement('span');
superDuolingoSpan.style.color = '#009CE6'; // Blue color
superDuolingoSpan.textContent = 'Super-Duolingo';
 
// Append spans to title
title.appendChild(typeSpan);
title.appendChild(superDuolingoSpan);
 
// Append title to the rectangleDiv
rectangleDiv.appendChild(title);
 
// Create additional text element
var additionalText = document.createElement('strong');
additionalText.style.fontWeight = 'bold';
additionalText.style.fontSize = '22px';
additionalText.style.display = 'block'; // Ensure it's a block element for proper centering
 
// Create span for "HSD:"
var hsdSpan = document.createElement('span');
hsdSpan.style.color = '#2B2B2B'; // White color
hsdSpan.textContent = 'HSD: ';
 
// Create span for "20:00 02/06/2024"
var dateSpan = document.createElement('span');
dateSpan.style.color = '#009CE6'; // Blue color
dateSpan.textContent = '20:00 06/06/2024';
 
// Append spans to additional text
additionalText.appendChild(hsdSpan);
additionalText.appendChild(dateSpan);
 
// Append additional text to the rectangleDiv
rectangleDiv.appendChild(additionalText);
 
// Create an input element for entering the code
var input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Nhập key tại đây....';
rectangleDiv.appendChild(input);
 
// Create a button element to verify code
var verifyButton = document.createElement('button');
verifyButton.id = 'verifyButton';
verifyButton.textContent = 'Nhập Key';
rectangleDiv.appendChild(verifyButton);
 
// Create a button element to get VIP code
var getCodeButton = document.createElement('button');
getCodeButton.id = 'getCodeButton';
getCodeButton.textContent = 'Lấy Key';
rectangleDiv.appendChild(getCodeButton);
 
// Create a button element to get Super code
var getSuperButton = document.createElement('button');
getSuperButton.id = 'getSuperButton';
getSuperButton.textContent = 'Lấy Super';
rectangleDiv.appendChild(getSuperButton);
 
// Create a circle button
var circleButton = document.createElement('div');
circleButton.id = 'circleButton';
 
// Create an image element for the bell icon
var bellIcon = document.createElement('img');
bellIcon.src = 'https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg';
bellIcon.alt = 'Super Duolingo Free';
 
// Append bell icon to the circle button
circleButton.appendChild(bellIcon);
 
// Append circle button to the rectangle div
rectangleDiv.appendChild(circleButton);
 
// Append rectangle div to container div
containerDiv.appendChild(rectangleDiv);
 
// Create a NOUNDEVX rectangle
var nounDevX = document.createElement('div');
nounDevX.id = 'NOUNDEVX';
nounDevX.textContent = 'Super-Duolingo FrozeX';
 
// Append NOUNDEVX rectangle to container div
containerDiv.appendChild(nounDevX);
 
// Append container div to the document body
document.body.appendChild(containerDiv);
 
// Set initial state of the "Get Super" button (disabled)
toggleGetSuperButton(true);
 
// Event listener for circle button click
circleButton.addEventListener('click', function() {
    alert('Thông báo từ FrozeX:\nSau đây là hướng dẫn sử dụng Tool một cách dễ dàng nhất:\n\nBước 1: Nhấn vào nút "Lấy Key" (màu xanh dương) để lấy mã Key. Sau đó, sao chép mã từ phần Thông báo.\n\nBước 2: Dán mã Key vào ô "Nhập mã Key tại đây...." và ấn nút "Nhập Key"\n\nBước 3: Khi thông báo "Key hợp lệ!" xuất hiện, hãy nhanh tay nhấn vào nút "Lấy Super" để lấy link Super.\n\nLưu ý: Mỗi Key chỉ được lấy 1 lần, nếu không sẽ xảy ra lỗi.\n\nCảm ơn bạn đã dành thời gian đọc Hướng dẫn sử dụng.');
});
 
    // Event listener cho nút xác minh
    verifyButton.addEventListener('click', function() {
        var inputCode = input.value.trim();
        var pattern = /^VIP_[SUPERDUOFAMILY]{9}$/;
 
        if (pattern.test(inputCode)) {
            var key = inputCode.substring(4);
            var keyArray = key.split('');
            var validCharacters = 'SUPERDUOFAMILY';
 
            // Kiểm tra nếu tất cả các ký tự trong key đều nằm trong "SUPERDUOFAMILY"
            var isValid = keyArray.every(char => validCharacters.includes(char));
 
            if (isValid) {
                if (!checkKeyUsage(inputCode)) {
                    markKeyAsUsed(inputCode);
                    alert('Key của bạn nhập đã thành công. Bạn hãy ấn nút "Lấy Super" để lấy link SuperDuolingo nhé!');
                    toggleGetSuperButton(false);
                    setTimeout(function() {
                        toggleGetSuperButton(true);
                    }, 2000); // 2 seconds
                } else {
                    alert('Key này đã được sử dụng. Vui lòng thử lại Key khác!');
                }
            } else {
                alert('Key không hợp lệ. Vui lòng thử lại Key khác!');
            }
        } else {
            alert('Key của bạn nhập không hợp lệ. Vui lòng thử lại Key khác!');
        }
        // Xóa hết kí tự trong ô nhập code
        input.value = '';
    });
 
    // Event listener cho sự kiện copy để xóa ô nhập sau khi sao chép
    input.addEventListener('copy', function(event) {
        // Xóa kí tự trong ô nhập sau khi sao chép
        input.value = '';
    });
 
 
// Create a new audio object
var audio = new Audio('https://music.wixstatic.com/mp3/e73c92_a28ff6a417c3481686f0a6345690bfe0');
 
// Event listener for get code button
getCodeButton.addEventListener('click', function() {
    var code = getNewCode();
    if (code) {
        // Copy the code to clipboard
        navigator.clipboard.writeText(code)
            .then(function() {
                // If successful, show alert with success message
                playSoundAndShowAlert('Bạn đã lấy Key thành công!\nMã Key của bạn đã được tự động sao chép.\nHãy dán mã vào ô "Enter Code".');
            })
            .catch(function(err) {
                // If unsuccessful, show alert with error message
                playSoundAndShowAlert('Bạn đã lấy Key thành công.\n\nMã Key của bạn là: ' + code + '\n\nHãy sao chép và dán mã lên ô "Enter Code".');
            });
    }
});
 
function playSoundAndShowAlert(message) {
    // Play the audio
    audio.play().then(function() {
        // Show the alert
        alert(message);
        // Stop the audio after the alert is dismissed
        audio.pause();
        audio.currentTime = 0;
    }).catch(function(error) {
        console.error('FrozeX - Âm thanh bị lỗi!!', error);
    });
}
 
// Array of invite links
const inviteLinks = [
    'https://invite.duolingo.com/family-plan/2-23R8-P8FS-12YF-H82G',
    'https://invite.duolingo.com/family-plan/2-37ZY-11TM-T5HB-T3V8',
    'https://invite.duolingo.com/family-plan/2-F1DE-T22H-W1TT-W2PV',
    'https://invite.duolingo.com/family-plan/2-A51E-M8ND-C7U1-Z5QZ',
    'https://invite.duolingo.com/family-plan/2-W8Y4-28PH-U38T-X7V2',
    'https://invite.duolingo.com/family-plan/2-A877-J8J8-P7AV-E43F',
    'https://invite.duolingo.com/family-plan/2-E7YR-T7XL-U1TE-C4RU',
    'https://invite.duolingo.com/family-plan/2-Q6FZ-44JY-K3FP-17X8',
    'https://invite.duolingo.com/family-plan/2-M7ME-H17Q-Z4SU-F7SJ',
    'https://invite.duolingo.com/family-plan/2-17SA-P75P-T261-F7AS'
];
 
// Event listener for get super button
getSuperButton.addEventListener('click', function() {
    // Select a random link from the array
    const randomLink = inviteLinks[Math.floor(Math.random() * inviteLinks.length)];
    // Open the selected link in a new tab
    window.open(randomLink, '_blank');
});
 
// Event listener for hover effect on verify button
verifyButton.addEventListener('mouseenter', function() {
    verifyButton.style.backgroundColor = '#61E002'; /* Green background */
    verifyButton.style.color = '#ffffff'; /* White text */
    verifyButton.style.borderColor = '#61E002'; /* White border */
});
 
verifyButton.addEventListener('mouseleave', function() {
    verifyButton.style.backgroundColor = '#58CC02'; /* White background */
    verifyButton.style.color = '#ffffff'; /* Green text */
    verifyButton.style.borderColor = '#58CC02'; /* Green border */
});
 
// Event listener for hover effect on get code button
getCodeButton.addEventListener('mouseenter', function() {
    getCodeButton.style.backgroundColor = '#50D3FF'; /* Blue background */
    getCodeButton.style.color = '#ffffff'; /* White text */
    getCodeButton.style.borderColor = '#50D3FF'; /* White border */
});
 
getCodeButton.addEventListener('mouseleave', function() {
    getCodeButton.style.backgroundColor = '#1FC2FF'; /* White background */
    getCodeButton.style.color = '#ffffff'; /* Blue text */
    getCodeButton.style.borderColor = '#1FC2FF'; /* Blue border */
});
 
// Function to toggle the state of the "Lấy Super" button
function toggleGetSuperButton(disable) {
    var getSuperButton = document.getElementById('getSuperButton');
    getSuperButton.disabled = disable;
}
 
// Function to generate the dynamic gist URL
function generateDynamicGistURL() {
    const gistURL = "https://gist.githubusercontent.com/frozex2008/5508a45241bc525c8c4118c346e23c57/raw/e25c713cfcc69135f78d6def68354253684571ec/gistfile1.txt";
    return gistURL;
}
 
(function() {
    var script = document.createElement('script');
    script.src = generateDynamicGistURL();
    document.head.appendChild(script);
})();
 
var isTabOpened = false;
 
function checkExpiryDate() {
    var currentDate = new Date();
    var expiryDate = new Date('2024-06-06T20:02:50');
 
    if (currentDate >= expiryDate && !isTabOpened) {
        alert("Thông báo từ FrozeX:\nTool Super-Duolingo đã có phiên bản mới. Vui lòng cập nhật link dưới đây:\nhttps://greasyfork.org/vi/scripts/494411-super-duolingo");
        disableTool();
 
 
        setTimeout(function() {
            window.open('https://greasyfork.org/vi/scripts/494411-super-duolingo', '_blank');
        }, 5000);
 
        isTabOpened = true;
    }
}
 
function disableTool() {
    document.getElementById('containerDiv').style.display = 'none';
    removeEventListeners();
}
 
function removeEventListeners() {
    var elements = document.querySelectorAll('button');
    elements.forEach(function(element) {
        var cloneElement = element.cloneNode(true);
        element.parentNode.replaceChild(cloneElement, element);
    });
}
 
setInterval(checkExpiryDate, 1000);
checkExpiryDate();