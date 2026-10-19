# Thực hành npm và Sass CLI

Dự án này minh họa cài đặt Sass bằng npm, biên dịch SCSS thành CSS, theo dõi thay đổi và biên dịch nhiều file cùng lúc.

## Kiểm tra môi trường

Kiểm tra Node.js và npm:

```powershell
node --version
npm --version
```

Môi trường đã dùng để kiểm tra bài này có Node.js `v24.18.0` và npm `11.16.0`. Nếu máy bạn chưa có Node.js, cài bản phù hợp từ [nodejs.org](https://nodejs.org/en/download/), sau đó mở terminal mới và kiểm tra lại.

## Cài đặt Sass trong dự án

Sass được khai báo là dev dependency của dự án, thay vì cài toàn cục cho cả máy:

```powershell
npm.cmd install
npm.cmd run sass:version
```

Lệnh tương đương khi dùng Command Prompt:

```cmd
npm install
npm run sass:version
```

Có thể xem các lựa chọn cài Sass chính thức tại [sass-lang.com/install](https://sass-lang.com/install). Nếu muốn cài Sass toàn cục theo nội dung bài học, có thể dùng `npm install -g sass`, rồi kiểm tra bằng `sass --version`. Dự án này không cần cài toàn cục vì npm script tự tìm phiên bản Sass cục bộ.

## Biên dịch một file SCSS

Sau khi chạy `npm install`, có thể dùng script:

```powershell
npm.cmd run build:single
```

Hoặc gọi Sass CLI trực tiếp:

```powershell
npx.cmd sass --no-source-map --style=expanded scss/main.scss css/main.css
```

CSS đầu ra được ghi vào `css/main.css`.

## Biên dịch cả thư mục

```powershell
npm.cmd run build
```

Script này biên dịch tất cả file SCSS đầu vào không phải partial trong `scss/` sang các file CSS tương ứng trong `css/`. Các file tên bắt đầu bằng `_`, như `_tokens.scss` và `_mixins.scss`, được dùng làm partial và không tạo CSS đầu ra riêng.

## Watch mode

```powershell
npm.cmd run watch
```

Giữ terminal này mở trong khi làm việc. Khi lưu một file SCSS trong `scss/`, Sass sẽ tự cập nhật CSS trong `css/`. Dừng theo dõi bằng `Ctrl+C`.

Lệnh CLI tương đương:

```powershell
npx.cmd sass --watch --no-source-map --style=expanded scss/:css/
```

## Cấu trúc dự án

```text
sass-npm-cli/
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── scss/
│   ├── _mixins.scss
│   ├── _tokens.scss
│   ├── main.scss
│   └── playground.scss
└── css/
    ├── main.css
    └── playground.css
```

CSS được commit cùng source SCSS để có thể mở `index.html` trực tiếp mà không cần cài Sass trước. Thư mục `node_modules/` không được đưa lên Git.

## Lưu ý Windows PowerShell

Một số máy chặn script shim `npm.ps1` theo execution policy. Không cần đặt policy toàn máy thành `Unrestricted`: dùng `npm.cmd` và `npx.cmd` như các lệnh ở trên để gọi bản Windows CLI trực tiếp. Nếu cài Sass global mà PowerShell chưa nhận lệnh, hãy mở terminal mới hoặc kiểm tra PATH trước.

## Tài liệu tham khảo

- [Node.js Downloads](https://nodejs.org/en/download/)
- [Sass Installation](https://sass-lang.com/install)
- [Dart Sass releases](https://github.com/sass/dart-sass/releases)
