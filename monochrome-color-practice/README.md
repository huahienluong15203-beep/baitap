# Thực hành phối màu đơn tông

Trang demo giới thiệu một bộ sưu tập sáng tạo và áp dụng hai bảng màu đơn tông tương tác. Bảng màu xanh dùng các sắc độ được yêu cầu trong bài; nút “Tím violet” minh họa bảng màu đơn tông thứ hai.

## Ánh xạ màu xanh theo yêu cầu

- Bậc 1 `#00ADEE`: màu chủ đạo, nhãn ON SALE và điểm nhấn.
- Bậc 2 `#00B2EF`: màu nhãn PREVIEW.
- Bậc 4 `#00BFF2`: nền header/hero.
- Bậc 7 `#8DD7F7`: nền khu vực nội dung và bảng màu.
- Bậc 9 `#C6E9FA`: nền footer.
- Chữ chính giữ màu đen để duy trì độ tương phản.

## Bảng màu thứ hai

Nút **Tím violet** đổi giao diện sang dải đơn sắc từ `#7047D7` đến `#EEE2FC`. Màu nền hero, khu vực nội dung, footer và các nhãn thay đổi theo cùng bảng màu. Danh sách swatch cập nhật mã màu tương ứng.

## Cấu trúc

```text
monochrome-color-practice/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── theme-switcher.js
└── images/
    ├── collection-blue.svg
    ├── collection-sun.svg
    └── collection-leaf.svg
```

Mở `index.html` trong trình duyệt để xem trang. CSS, JavaScript và hình ảnh minh họa đều nằm trong dự án; các hình SVG được tạo riêng cho bài thực hành.
