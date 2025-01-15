# LapTrinhGiaoDienWeb
Lập trình giao diện website
# Thiết kế giao diện web với Flexbox Layout Design

## HTML Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thiết kế giao diện web với Flexbox Layout Design</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <div class="logo">Logo</div>
            <div class="slogan">Slogan</div>
        </header>

        <!-- Navigation Menu -->
        <nav class="menu">
            <a href="#">Trang chủ</a>
            <a href="#">Giới thiệu</a>
            <a href="#">Sản phẩm</a>
            <a href="#">Tin tức</a>
            <a href="#">Liên hệ</a>
        </nav>

        <!-- Main Content -->
        <main class="main">
            <!-- Left Menu -->
            <aside class="left-menu">
                <ul>
                    <li>Nhóm 1</li>
                    <li>Nhóm 2</li>
                    <li>Nhóm 3</li>
                    <li>Nhóm 4</li>
                    <li>Nhóm 5</li>
                    <li>Nhóm 6</li>
                    <li>Nhóm 7</li>
                    <li>Nhóm 8</li>
                    <li>Nhóm 9</li>
                    <li>Nhóm 10</li>
                </ul>
            </aside>
            <!-- Main Content -->
            <section class="content">
 <h3>Thực hành</h3>
                <p>Mở Visual Studio Code, chọn thư mục <strong>Lập Trình Giao Diện Web</strong>, sau đó mở thư mục <strong>Bài 1</strong> để làm bài tập này.</p>
                <h2>Hướng dẫn cấu hình ban đầu cho VS Code để lập trình giao diện web</h2>
                <h3>VS Code Extensions</h3>
                <ul>
                    <li>Live Preview</li>
                    <li>Live Server</li>
                    <li>Auto Rename Tag</li>
                    <li>Autumn Color Highlight</li>
                    <li>Composer</li>
                    <li>CSS Peek</li>
                    <li>Highlight Matching Tag</li>
                    <li>HTML CSS Support</li>
                    <li>HTML to CSS autocompletion</li>
                    <li>Material Icon Theme</li>
                    <li>One Dark Pro</li>
                    <li>Prettier - Code formatter</li>
                </ul>

                <h3>VS Code Settings</h3>
                <ul>
                    <li>Font size: 13</li>
                    <li>Font family: SF Mono</li>
                    <li>Line height: 30</li>
                    <li>Letter spacing: 0</li>
                    <li>Word wrap: on</li>
                    <li>Word wrap column: 100</li>
                    <li>Format on save: Tích chọn vào</li>
                    <li>Default formatter: Prettier</li>
                </ul>

                <h3>VS Code Commands</h3>
                <ul>
                    <li><code>ctrl/cmd + P</code>: Tìm kiếm file trong dự án</li>
                    <li><code>ctrl/cmd + shift + P</code>: Mở các lệnh trong vscode</li>
                    <li><code>ctrl/cmd + D</code>: Chọn nhiều từ giống nhau</li>
                    <li><code>ctrl/cmd + shift + L</code>: Chọn hết nhiều từ giống nhau</li>
                    <li><code>alt/option + mũi tên lên hoặc xuống</code>: Di chuyển 1 hoặc nhiều dòng khi bôi đen hoặc không</li>
                    <li><code>shift + alt/option + mũi tên lên hoặc xuống</code>: Sao chép nhanh</li>
                </ul>

                <h3>Chrome Extensions</h3>
                <ul>
                    <li>VisBug</li>
                    <li>Dimensions</li>
                    <li>Ejoy English</li>
                    <li>Eye Dropper</li>
                    <li>Color Slurp</li>
                </ul>

               
            </section>
        </main>

        <!-- Footer -->
        <footer class="footer">
            <p>Thông tin liên hệ: 0123 456 789 | email@example.com</p>
            <p>Theo dõi chúng tôi trên: <a href="https://facebook.com/tuanhoba">Facebook</a>, <a href="https://twitter.com/tuanhoba">Twitter</a>, <a href="https://instagram.com/tuanhoba">Instagram</a></p>
            <p>Tham khảo thêm về Flexbox tại: <a href="https://codepen.io/hoangquoctuan/pen/ZEVdREy" target="_blank">CodePen</a></p>
        </footer>
    </div>
</body>
</html>
```

## CSS Code
```css
/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 10px 20px;
}

.header .logo {
    font-size: 24px;
    font-weight: bold;
}

.header .slogan {
    font-size: 18px;
}

/* Navigation Menu */
.menu {
    display: flex;
    justify-content: center;
    background-color: #444;
}

.menu a {
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    text-transform: uppercase;
}

.menu a:hover {
    background-color: #555;
}

/* Main Content */
.main {
    display: flex;
    flex: 1;
}

/* Left Menu */
.left-menu {
    width: 25%;
    background-color: #f4f4f4;
    padding: 20px;
}

.left-menu ul {
    list-style: none;
}

.left-menu li {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #ddd;
    border: 1px solid #ccc;
    text-align: center;
    cursor: pointer;
}

.left-menu li:hover {
    background-color: #ccc;
}

/* Main Content Area */
.content {
    flex: 1;
    padding: 20px;
    background-color: #fff;
}

/* Footer */
.footer {
    background-color: #868686;
    color: red;
    text-align: center;
    padding: 10px;
}
```

