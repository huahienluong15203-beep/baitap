# Phân tích và xây dựng Website Template

## Trang web tham khảo

- Tên trang: Python.org
- URL: https://www.python.org/
- Ngày quan sát: 19/10/2026
- Ảnh chụp màn hình: [reference-python-homepage.png](./reference-python-homepage.png)

## Phân tích bố cục

- **Header:** Trang tham khảo mở đầu bằng thanh điều hướng phụ, sau đó là khu vực thương hiệu với logo, tìm kiếm và liên kết cộng đồng. Phần đầu trang dùng nền xanh đậm để làm nổi bật nhận diện.
- **Navigation Menu:** Các liên kết chính được gom thành một thanh menu riêng ngay bên dưới khu vực thương hiệu. Những mục như About, Downloads và Documentation giúp người dùng đi đến nội dung nhanh.
- **Content Section:** Nội dung bắt đầu bằng khu vực giới thiệu có ví dụ mã nguồn và thông tin về ngôn ngữ Python. Bên dưới là các khối nội dung về tính năng, tài nguyên và cộng đồng. Bố cục tách phần giới thiệu khỏi thông tin chi tiết để dễ quét.
- **Footer:** Các liên kết hỗ trợ, tài nguyên và thông tin tổ chức được đặt ở cuối trang, tách biệt với nội dung chính.

## Bố cục xây dựng lại

Trang `index.html` và `style.css` trong bài này lấy cảm hứng từ cách phân chia nội dung trên, nhưng sử dụng tên thương hiệu và nội dung minh họa riêng:

- Header có thanh điều hướng phụ và khu vực thương hiệu/tìm kiếm.
- Navigation chính có bốn mục và được giữ cố định khi cuộn.
- Content có phần giới thiệu, minh họa code và các thẻ chủ đề theo lưới.
- Footer gồm thông tin bản quyền và các liên kết phân cấp bằng dấu chấm.
- CSS có breakpoint cho điện thoại và tablet, không phụ thuộc framework hay tài nguyên hình ảnh bên ngoài.
