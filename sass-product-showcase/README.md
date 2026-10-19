# Tái cấu trúc Landing Page bằng Sass

Bài tập này chuyển các quy tắc CSS tùy chỉnh của trang Astra One sang Sass,
giữ nguyên markup Bootstrap, thứ tự các section, nội dung và giao diện của
[trang nguồn](../bootstrap-product-showcase.html). Bản refactor có thể xem
trực tiếp tại [index.html](./index.html).

## Cấu trúc

```text
sass-product-showcase/
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── scss/
│   ├── main.scss
│   └── abstracts/
│       ├── _variables.scss
│       └── _mixins.scss
└── css/
    └── main.css
```

## Cách tái cấu trúc

- `scss/abstracts/_variables.scss` tập trung màu chữ, màu nền hero, kích thước
  ảnh sản phẩm và icon.
- `scss/abstracts/_mixins.scss` định nghĩa mixin `square-size($size)` để tái
  sử dụng cặp chiều rộng/chiều cao bằng nhau.
- `scss/main.scss` kết nối modules bằng `@use`, lồng `.product-image` trong
  `.product-hero` và dùng mixin cho `.feature-icon`.
- `css/main.css` là stylesheet đã biên dịch, được liên kết trong HTML.

SCSS thay thế các quy tắc custom trong inline style ban đầu. Bootstrap 5,
Font Awesome, các lớp utility, markup và nội dung trang được giữ nguyên. Phần
body của `index.html` giữ nguyên so với trang nguồn để bảo toàn bố cục.

## Cài đặt và biên dịch

Cần Node.js và npm:

```powershell
node --version
npm --version
npm.cmd install
npm.cmd run build
```

Sass được cài cục bộ trong dự án; không cần cài toàn cục. CSS đầu ra nằm tại
`css/main.css`.

Để tự biên dịch mỗi khi SCSS thay đổi:

```powershell
npm.cmd run watch
```

Dừng chế độ watch bằng `Ctrl+C`. Trong Command Prompt, có thể dùng `npm` thay
cho `npm.cmd`.
