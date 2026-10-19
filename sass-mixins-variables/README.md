# Sass Variables & Mixins

Bài thực hành này chuyển các style lặp lại thành Sass variables và mixins, đồng thời chia source thành các lớp `abstracts`, `base` và `components`.

## Cấu trúc thư mục

```text
sass-mixins-variables/
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── scss/
│   ├── main.scss
│   ├── abstracts/
│   │   ├── _variables.scss
│   │   └── _mixins.scss
│   ├── base/
│   │   └── _typography.scss
│   └── components/
│       ├── _buttons.scss
│       └── _cards.scss
└── css/
    └── main.css
```

Các module Sass được chia thành `abstracts/`, `base/` và `components/` bên trong `scss/`. Các file bắt đầu bằng dấu gạch dưới là partial, không được biên dịch thành CSS riêng.

## Những phần được tối ưu

- `abstracts/_variables.scss`: một nguồn chung cho màu sắc, cỡ chữ, padding, bo góc, bóng đổ và chiều rộng nội dung.
- `abstracts/_mixins.scss`: `button-style($bg-color)` nhận màu nền tùy chọn; `box-style` đóng gói style dùng chung cho card.
- `base/_typography.scss`: áp dụng biến dùng chung cho tiêu đề và đoạn văn.
- `components/_buttons.scss`: gọi mixin cho button chính và button phụ, chỉ truyền màu khi cần biến thể.
- `components/_cards.scss`: dùng lại box mixin cho các card.
- `scss/main.scss`: entry point kết nối modules bằng `@use`.

## So sánh cách viết

Trước khi tối ưu, button và card lặp trực tiếp các thuộc tính như màu, padding, bo góc và shadow. Sau khi tách Sass, cập nhật `$primary-color`, `$padding-standard` hoặc `$box-shadow-default` trong `_variables.scss` sẽ cập nhật các component sử dụng biến đó. Quy tắc dùng chung được đặt một lần trong mixin và áp dụng bằng `@include`.

Ví dụ:

```scss
@use "../abstracts/mixins" as mixins;

.button {
  @include mixins.button-style;
}

.button--secondary {
  @include mixins.button-style(#334155);
}
```

## Cài đặt và biên dịch

Yêu cầu Node.js và npm:

```powershell
node --version
npm --version
npm.cmd install
npm.cmd run build
```

Trong Command Prompt, có thể dùng `npm` thay cho `npm.cmd`. Sass được cài cục bộ theo `package.json`; không cần cài global. File kết quả là `css/main.css` và đã được commit để có thể mở `index.html` trực tiếp.

Theo dõi SCSS và tự biên dịch khi lưu:

```powershell
npm.cmd run watch
```

Dừng watch bằng `Ctrl+C`.
