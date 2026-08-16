/*
  VJCC / VJCBI Survival Kit
  -----------------------------------------
  Đây là file admin chỉnh nội dung trong phiên bản MVP.
  Sau này có thể thay file này bằng dữ liệu từ Google Sheets mà không cần đổi giao diện.
*/

window.SURVIVAL_DATA = {
  settings: {
    siteName: "VJCBI Survival Kit",
    shortName: "Survival Kit",
    tagline: "Không biết tìm ở đâu? Bắt đầu từ đây.",
    description: "Cổng tra cứu nhanh dành cho sinh viên Trường Kinh doanh và Sáng tạo Việt - Nhật.",
    aiApiUrl: "/api/chat", // Nếu frontend vẫn ở GitHub Pages, đổi thành URL Vercel đầy đủ: https://...vercel.app/api/chat
    contactEmail: "dtcq@VJCC.org.vn",
    lastUpdated: "16/08/2026"
  },

  intro: {
    title: "Giới thiệu",
    eyebrow: "Thông tin cơ bản",
    paragraphs: [
      "Trường Kinh doanh và Sáng tạo Việt - Nhật (Vietnam - Japan College of Business and Innovation, VJCBI) chính thức đi vào hoạt động từ ngày 01/08/2026, kế thừa nền tảng của Viện VJCC, đơn vị đào tạo thuộc Trường Đại học Ngoại thương.",
      "VJCBI có sứ mạng đào tạo nguồn nhân lực chất lượng cao có tư duy toàn cầu, năng lực đổi mới sáng tạo và tinh thần trách nhiệm xã hội; thực hiện nghiên cứu, phát triển công nghệ, chuyển giao tri thức và thúc đẩy đổi mới sáng tạo trên nền tảng hợp tác Việt Nam - Nhật Bản."
    ],
    focusAreas: [
      "Đào tạo chính quy bậc đại học và sau đại học",
      "Đào tạo và tư vấn doanh nghiệp",
      "Nghiên cứu và đổi mới sáng tạo",
      "Kết nối kinh doanh và hợp tác doanh nghiệp",
      "Giao lưu giáo dục, văn hóa và ngôn ngữ Việt Nam - Nhật Bản"
    ],
    programs: [
      { code: "JIB", name: "Kinh doanh quốc tế theo mô hình tiên tiến Nhật Bản", type: "Chất lượng cao" },
      { code: "GDB", name: "Kinh doanh số toàn cầu", type: "Định hướng nghề nghiệp quốc tế" },
      { code: "SIM", name: "Quản lý công nghiệp thông minh", type: "Định hướng nghề nghiệp quốc tế" },
      { code: "CCI", name: "Kinh doanh sáng tạo và Công nghiệp văn hóa", type: "Định hướng nghề nghiệp quốc tế" }
    ]
  },

  rightsDuties: {
    title: "Quyền và nghĩa vụ của sinh viên",
    groups: [
      {
        id: "conduct",
        title: "Quy tắc ứng xử VJCBI",
        icon: "◎",
        items: [
          { title: "Trang phục", text: "Gọn gàng, lịch sự; không mặc váy/quần trên đầu gối, áo hai dây hoặc đồ ngủ." },
          { title: "Lời chào", text: "Chủ động chào hỏi thầy cô, cán bộ, anh chị và mọi người khi gặp." },
          { title: "Luôn đúng giờ", text: "Đến lớp trước 5 phút và có mặt trước phòng thi 15 phút trước giờ thi." },
          { title: "Giữ gìn không gian chung", text: "Giữ vệ sinh, kê lại bàn ghế, không tự ý sử dụng phòng học hoặc di chuyển thiết bị khi chưa được phép." },
          { title: "Tôn trọng giờ làm việc", text: "Liên hệ trong giờ hành chính; ưu tiên email thay vì inbox mạng xã hội." }
        ]
      },
      {
        id: "duties",
        title: "Nghĩa vụ học tập & hành chính",
        icon: "✓",
        items: [
          { title: "Học phí", text: "Học phí mỗi kỳ bằng tổng học phí các môn học trong kỳ. Sinh viên cần hoàn thành nghĩa vụ học phí đúng hạn để đủ điều kiện dự thi kết thúc học phần." },
          { title: "Học lại / học cải thiện", text: "Thực hiện theo thông báo của Ban ĐTCQ, làm đơn và đăng ký vào lớp phù hợp. Học phí được tính như đăng ký mới." },
          { title: "Hoãn thi / thi ghép", text: "Cần làm đơn và nộp minh chứng theo quy định; các trường hợp thi ghép cần được Ban ĐTCQ phê duyệt." },
          { title: "Hủy môn", text: "Với các môn được đăng ký tự động, sinh viên có thể thực hiện hủy theo thông báo đăng ký tín chỉ bổ sung của Nhà trường." }
        ],
        links: [
          { label: "Biểu mẫu Phòng QLĐT", url: "https://qldt.ftu.edu.vn/v%C4%83n-b%E1%BA%A3n/bi%E1%BB%83u-m%E1%BA%ABu.html" },
          { label: "Thông tin miễn, giảm học phí", url: "https://ctctsv.ftu.edu.vn/che-do-chinh-sach/mien-giam-hoc-phi-va-ho-tro-chi-phi-hoc-tap" }
        ]
      },
      {
        id: "rights",
        title: "Quyền lợi & cơ hội",
        icon: "★",
        items: [
          { title: "Học bổng", text: "Sinh viên có thể tiếp cận học bổng của FTU và các học bổng/cơ hội riêng của VJCBI từ đối tác, JICA, Cộng đồng Doanh nghiệp Keieijuku và các chương trình liên quan." },
          { title: "Trao đổi quốc tế", text: "Sinh viên VJCBI được hưởng các cơ hội trao đổi tại trường đối tác nước ngoài của FTU và các cơ hội giao lưu riêng của VJCBI." },
          { title: "Tiếng Nhật", text: "VJCBI có các lớp bổ trợ tiếng Nhật; lộ trình và điều kiện tham gia tùy chương trình đào tạo." },
          { title: "Thực tập & việc làm", text: "Sinh viên được hỗ trợ tìm nơi thực tập phục vụ học phần tốt nghiệp và tiếp cận các cơ hội nghề nghiệp khi có." },
          { title: "Nghiên cứu khoa học", text: "Sinh viên có thể tham gia hoạt động nghiên cứu khoa học và đăng ký giảng viên VJCBI hướng dẫn." },
          { title: "Giấy xác nhận & thư giới thiệu", text: "Có thể đề nghị cấp giấy xác nhận phù hợp mục đích và/hoặc thư giới thiệu theo quy trình tương ứng." }
        ],
        links: [
          { label: "Theo dõi cơ hội trao đổi FTU", url: "https://www.facebook.com/ftuexchange" }
        ]
      }
    ]
  },

  activities: {
    title: "Hoạt động ngoại khóa",
    intro: "VJCBI tổ chức nhiều hoạt động giúp sinh viên tăng trải nghiệm thực tế, kết nối cộng đồng, phát triển kỹ năng và định hướng nghề nghiệp.",
    featured: [
      {
        title: "Tham quan doanh nghiệp thực tế",
        description: "Sinh viên gặp gỡ doanh nghiệp, tìm hiểu vận hành, cơ hội nghề nghiệp, triết lý kinh doanh và quan sát môi trường làm việc thực tế.",
        owner: "Ban ĐTCQ & giảng viên môn học",
        image: "assets/company-visit.webp"
      },
      {
        title: "Hoạt động trải nghiệm 2 ngày 1 đêm",
        description: "Hoạt động thường niên nhằm tăng tính gắn kết, tạo không gian thư giãn và trải nghiệm văn hóa vùng miền.",
        owner: "Ban ĐTCQ",
        image: "assets/student-event.webp"
      },
      {
        title: "VJCC Career Compass",
        description: "Ngày hội định hướng nghề nghiệp giúp sinh viên lắng nghe chia sẻ, khám phá định hướng và tiếp cận cơ hội từ doanh nghiệp.",
        owner: "VJSA",
        image: "assets/career-compass.webp"
      },
      {
        title: "Tết Nối",
        description: "Hoạt động kết nối cộng đồng và lan tỏa tinh thần sẻ chia trong những ngày cuối năm.",
        owner: "VJSA",
        image: "assets/tet-noi.webp"
      }
    ],
    more: [
      "Tọa đàm sinh viên và các buổi nói chuyện với chuyên gia",
      "Hội nghị đối thoại giữa VJCBI và sinh viên",
      "Lễ trao học bổng cho sinh viên vượt khó và sinh viên xuất sắc",
      "Giao lưu với đại diện doanh nghiệp Cộng đồng Keieijuku",
      "Chuỗi talkshow “Hey! Where have you been?”",
      "Activation Day - Lễ khởi động năm học mới",
      "Lễ chia tay giảng đường cho sinh viên năm cuối",
      "Orientation Day",
      "Mentor - Mentee",
      "Year End Party"
    ],
    vjsa: {
      title: "VJSA - VJCBI's Student Ambassadors",
      description: "VJSA là tổ chức sinh viên trực thuộc quản lý của Ban Đào tạo Chính quy VJCBI, hoạt động vì lợi ích chung của cộng đồng sinh viên và hỗ trợ tổ chức các hoạt động dành riêng cho sinh viên VJCBI.",
      values: ["Tiên phong", "Chủ động", "Chuyên nghiệp", "Năng động", "Đoàn kết"],
      departments: ["Ban Tổ chức", "Ban Truyền thông", "Ban Nhân sự", "Ban Đối ngoại"]
    }
  },

  people: {
    title: "Chân dung thầy cô",
    intro: "Tìm đúng người phụ trách để được hỗ trợ nhanh hơn.",
    notice: "Tài liệu nguồn hiện chưa có danh sách và hồ sơ từng thầy/cô. Phần này đã được dựng sẵn để admin bổ sung tên, ảnh, vai trò và link liên hệ sau.",
    profiles: [
      {
        name: "Ban Đào tạo chính quy",
        role: "Đầu mối hỗ trợ sinh viên",
        description: "Hỗ trợ các vấn đề học vụ, giấy xác nhận, đơn từ, học lại, học cải thiện, hoãn thi và các thông báo dành cho sinh viên.",
        photo: "",
        email: "dtcq@VJCC.org.vn",
        profileUrl: ""
      }
    ]
  },

  faq: {
    title: "Hỏi & đáp",
    intro: "Những câu hỏi sinh viên thường gặp nhất. Bạn cũng có thể dùng thanh tìm kiếm ở đầu trang.",
    items: [
      {
        question: "Nếu quên thẻ sinh viên khi thi kết thúc học phần thì phải làm sao?",
        answer: "Bạn cần đến văn phòng Ban ĐTCQ để xin giấy xác nhận, nên thực hiện ít nhất 15 phút trước giờ thi bắt đầu.",
        tags: ["thi", "thẻ sinh viên", "Ban ĐTCQ"]
      },
      {
        question: "Cần xin phép nghỉ học hoặc vắng mặt tại hoạt động ngoại khóa thì làm gì?",
        answer: "Sinh viên cần xin phép. Với trường hợp có kế hoạch trước, nộp đơn kèm minh chứng cho giảng viên và Ban ĐTCQ. Với trường hợp đột xuất, có thể gửi đơn/email theo quy định và chủ động thông báo cho giảng viên. Trường hợp khẩn cấp cần liên hệ trực tiếp qua điện thoại. Đơn cần ghi rõ họ tên, mã sinh viên, lớp, lý do và thời gian nghỉ, kèm minh chứng nếu có.",
        tags: ["nghỉ học", "vắng mặt", "đơn", "minh chứng"]
      },
      {
        question: "Muốn xin giấy xác nhận sinh viên thì liên hệ bộ phận nào?",
        answer: "Email Ban ĐTCQ để đăng ký xin giấy xác nhận, nêu rõ nội dung và mục đích. Sau khi hoàn thành, Ban ĐTCQ sẽ chủ động liên hệ để sinh viên đến nhận.",
        tags: ["giấy xác nhận", "Ban ĐTCQ", "email"]
      },
      {
        question: "Đăng ký tham gia hoạt động ngoại khóa như thế nào?",
        answer: "Thông tin thường được đăng trên nhóm lớp, nhóm chung hoặc thông báo qua lớp trưởng. Sinh viên làm theo hướng dẫn của từng hoạt động để đăng ký.",
        tags: ["ngoại khóa", "đăng ký", "VJSA"]
      },
      {
        question: "Thời gian tiếp sinh viên của Ban ĐTCQ là khi nào?",
        answer: "Theo tài liệu Survival Kit hiện tại: các ngày trong tuần, trừ thứ Bảy và Chủ nhật; sáng 9:30-11:00, chiều 14:30-16:00. Sinh viên nên hạn chế liên hệ ngoài thời gian này.",
        tags: ["giờ làm việc", "Ban ĐTCQ"]
      },
      {
        question: "Làm sao để được nhận điểm rèn luyện từ hoạt động VJCBI?",
        answer: "Với hoạt động có điểm rèn luyện, sinh viên cần tham gia đầy đủ từ đầu đến cuối và điểm danh đầy đủ. Sinh viên sẽ được nhận xác nhận tham gia vào cuối học kỳ để phục vụ cộng điểm rèn luyện.",
        tags: ["điểm rèn luyện", "hoạt động"]
      },
      {
        question: "Khi gặp khó khăn hoặc có thắc mắc, tôi nên tìm ai?",
        answer: "Có thể tìm sự hỗ trợ theo thứ tự: anh/chị khóa trên → cố vấn học tập/chủ nhiệm lớp → Ban Đào tạo chính quy.",
        tags: ["hỗ trợ", "cố vấn", "Ban ĐTCQ"]
      }
    ]
  }
};
