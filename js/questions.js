// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "absord",
    answer: "ดูดซึม",
    options: [
      "ดูดซึม",
      "กระจาย"
    ]
  },
    {
    numb: 2,
    question: "abstract",
    answer: "นามธรรม",
    options: [
      "นามธรรม",
      "ความยุติธรรม"
    ]
  },
    {
    numb: 3,
    question: "accent",
    answer: "สำเนียง",
    options: [
      "ล่าสุด",
      "สำเนียง"
    ]
  },
    {
    numb: 4,
    question: "accidentally",
    answer: "โดยบังเอิญ",
    options: [
      "โดยบังเอิญ",
      "การเกิดอุบัติเหตุ"
    ]
  },
    {
    numb: 5,
    question: "accommodate",
    answer: "จัดที่พักให้",
    options: [
      "จัดที่พักให้",
      "จองวันหยุด"
    ]
  },
    {
    numb: 6,
    question: "accomplish",
    answer: "ทำให้สำเร็จ",
    options: [
    "ความสำเร็จ",
    "ทำให้สำเร็จ"
    ]
  },
    {
    numb: 7,
    question: "accountant",
    answer: "นักบัญชี",
    options: [
    "นักบัญชี",
    "บัญชีสำรอง"
    ]
  },
    {
    numb: 8,
    question: "accuracy",
    answer: "ความแม่นยำ",
    options: [
    "ความรวดเร็ว",
    "ความแม่นยำ"
    ]
  },
  {
    numb: 9,
    question: "accurately",
    answer: "อย่างแม่นยำ",
    options: [
    "อย่างแม่นยำ",
    "ความมั่นคง"
    ]
  },
  {
    numb: 10,
    question: "acid",
    answer: "กรด",
    options: [
    "กรด",
    "ด่าง"
    ]
  },
  {
    numb: 11,
    question: "activate",
    answer: "การกระตุ้นให้ทำงาน",
    options: [
    "การใช้งาน",
    "การกระตุ้นให้ทำงาน"
    ]
  },
  {
    numb: 12,
    question: "addiction",
    answer: "การเสพติด",
    options: [
    "การเสพติด",
    "การเพิ่มส่วนต่าง"
    ]
  },
  {
    numb: 13,
    question: "additionally",
    answer: "นอกจากนี้",
    options: [
    "นอกจากนี้",
    "ต่างจากนี้"
    ]
  },
  {
    numb: 14,
    question: "adequate",
    answer: "เพียงพอ",
    options: [
    "ประหยัด",
    "เพียงพอ"
    ]
  },
  {
    numb: 15,
    question: "adjust",
    answer: "ปรับ",
    options: [
    "ปรับ",
    "แค่"
    ]
  },
  {
    numb: 16,
    question: "adequatelyt",
    answer: "อย่างพอเพียง",
    options: [
    "อย่างพอเพียง",
    "พอแค่นี้"
    ]
  },
  {
    numb: 17,
    question: "affordable",
    answer: "ราคาที่สามารถจ่ายได้",
    options: [
    "ราคาที่ได้จ่าย",
    "ราคาที่สามารถจ่ายได้"
    ]
  },
  {
    numb: 18,
    question: "agriculture",
    answer: "การเกษตร",
    options: [
    "การเกษตร",
    "ขอบเขตวัฒนธรรม"
    ]
  },
  {
    numb: 19,
    question: "AIDS",
    answer: "โรคเอดส์",
    options: [
    "โรคเอดส์",
    "มีความเป็นกรดมาก"
    ]
  },
  {
    numb: 20,
    question: "alien",
    answer: "มนุษย์ต่างดาว",
    options: [
    "มนุษย์ต่างดาว",
    "ต่างด้าว"
    ]
  },
  {
    numb: 21,
    question: "alongside",
    answer: "ข้างเคียง",
    options: [
    "ด้านข้างยาว",
    "ข้างเคียง"
    ]
  },
  {
    numb: 22,
    question: "altogether",
    answer: "โดยรวม",
    options: [
    "โดยรวม",
    "โดยร่วมกัน"
    ]
  },
  {
    numb: 23,
    question: "ambulance",
    answer: "รถโรงพยาบาล",
    options: [
    "รถโรงพยาบาล",
    "รถลาก"
    ]
  },
  {
    numb: 24,
    question: "amusing",
    answer: "ที่ให้ความสนุกสนาน",
    options: [
    "ที่ให้ความสุข",
    "ที่ให้ความสนุกสนาน"
    ]
  },
  {
    numb: 25,
    question: "analyst",
    answer: "นักวิเคราะห์",
    options: [
    "นักวิเคราะห์",
    "นักสังเคราะห์"
    ]
  },
  {
    numb: 26,
    question: "ancestor",
    answer: "บรรพบุรุษ",
    options: [
    "บรรพบุรุษ",
    "วีรบุรุษ"
    ]
  },
  {
    numb: 27,
    question: "animation",
    answer: "แอนิเมชัน",
    options: [
    "แอนิเมชัน",
    "การเคลื่อนไหวของสัตว์"
    ]
  },
  {
    numb: 28,
    question: "annually",
    answer: "ทุกปี",
    options: [
    "ทุกปี",
    "ทุกอย่างโดยรวม"
    ]
  },
  {
    numb: 29,
    question: "anticipate",
    answer: "คาดการณ์",
    options: [
    "ความผิดพลาด",
    "คาดการณ์"
    ]
  },
  {
    numb: 30,
    question: "anxiety",
    answer: "ความวิตกกังวล",
    options: [
    "ความวิตกกังวล",
    "ความเจริญ"
    ]
  },
  {
    numb: 31,
    question: "apology",
    answer: "การขอโทษ",
    options: [
    "การขอโทษ",
    "การให้อภัย"
    ]
  },
  {
    numb: 32,
    question: "applicant",
    answer: "ผู้สมัคร",
    options: [
    "การสมัคร",
    "ผู้สมัคร"
    ]
  },
  {
    numb: 33,
    question: "appropriately",
    answer: "อย่างเหมาะสม",
    options: [
    "อย่างดี",
    "อย่างเหมาะสม"
    ]
  },
  {
    numb: 34,
    question: "arrow",
    answer: "ลูกศร",
    options: [
    "ลูกศร",
    "เป้าหมาย"
    ]
  },
  {
    numb: 35,
    question: "artwork",
    answer: "งานศิลปะ",
    options: [
    "งานนิเทศ",
    "งานศิลปะ"
    ]
  },
  {
    numb: 36,
    question: "aside",
    answer: "แยกออกไป",
    options: [
    "ข้างเดียว",
    "แยกออกไป"
    ]
  },
  {
    numb: 37,
    question: "asset",
    answer: "ทรัพย์สิน",
    options: [
    "ทรัพย์สิน",
    "วัตถุ"
    ]
  },
  {
    numb: 38,
    question: "assign",
    answer: "มอบหมาย",
    options: [
    "มอบหมาย",
    "หมายเรียก"
    ]
  },
  {
    numb: 39,
    question: "assistance",
    answer: "ความช่วยเหลือ",
    options: [
    "การให้ช่วยเหลือ",
    "ความช่วยเหลือ"
    ]
  },
  {
    numb: 40,
    question: "assumption",
    answer: "สมมติฐาน",
    options: [
    "สมมติฐาน",
    "การสมมติ"
    ]
  },
  {
    numb: 41,
    question: "assure",
    answer: "ยืนยัน",
    options: [
    "การปฏิเสธ",
    "ยืนยัน"
    ]
  },
  {
    numb: 42,
    question: "astonishing",
    answer: "น่าประหลาดใจ",
    options: [
    "น่าเหลือเชื่อ",
    "น่าประหลาดใจ"
    ]
  },
  {
    numb: 43,
    question: "attachment",
    answer: "การแนบ",
    options: [
    "การแนบ",
    "การแทรก"
    ]
  },
  {
    numb: 44,
    question: "auction",
    answer: "การประมูล",
    options: [
    "การขายตรง",
    "การประมูล"
    ]
  },
  {
    numb: 45,
    question: "audio",
    answer: "เกี่ยวกับเสียง",
    options: [
    "เกี่ยวกับเสียง",
    "วิทยุ"
    ]
  },
  {
    numb: 46,
    question: "automatic",
    answer: "อัตโนมัติ",
    options: [
    "อัตโนมัติ",
    "อัตโนมัต"
    ]
  },
  {
    numb: 47,
    question: "automatically",
    answer: "โดยอัตโนมัติ",
    options: [
    "โดยไม่มีกำหนด",
    "โดยอัตโนมัติ"
    ]
  },
  {
    numb: 48,
    question: "awareness",
    answer: "การรับรู้",
    options: [
    "การรับรู้",
    "การตอบสนอง"
    ]
  },
  {
    numb: 49,
    question: "awkward",
    answer: "อึดอัดใจ",
    options: [
    "อึดอัดใจ",
    "ความสบายใจ"
    ]
  },
  {
    numb: 50,
    question: "badge",
    answer: "เข็มกลัดแสดงสัญลักษณ์",
    options: [
    "ป้าย",
    "เข็มกลัดแสดงสัญลักษณ์"
    ]
  },
  {
    numb: 51,
    question: "balanced",
    answer: "สมดุล",
    options: [
    "สมดุล",
    "เรียบร้อย"
    ]
  },
  {
    numb: 52,
    question: "ballet",
    answer: "บัลเลต์",
    options: [
    "บัลเลต์",
    "บัลล์เลต์"
    ]
  },
  {
    numb: 53,
    question: "balloon",
    answer: "บอลลูน",
    options: [
    "ลูกโป่ง",
    "บอลลูน"
    ]
  },
  {
    numb: 54,
    question: "barely",
    answer: "เกือบจะไม่",
    options: [
    "เกือบจะไม่",
    "เกือบแล้ว"
    ]
  },
  {
    numb: 55,
    question: "bargain",
    answer: "การต่อรองราคา",
    options: [
    "การต่อรองข้อเสนอ",
    "การต่อรองราคา"
    ]
  },
  {
    numb: 56,
    question: "basement",
    answer: "ชั้นใต้ดิน",
    options: [
    "โดยพื้นฐาน",
    "ชั้นใต้ดิน"
    ]
  },
  {
    numb: 57,
    question: "basket",
    answer: "ตะกร้า",
    options: [
    "ตะกร้า",
    "กระบอก"
    ]
  },
  {
    numb: 58,
    question: "bat",
    answer: "ค้างค้าว",
    options: [
    "แบต",
    "ค้างค้าว"
    ]
  },
  {
    numb: 59,
    question: "beneficial",
    answer: "มีประโยชน์",
    options: [
    "มีประโยชน์",
    "มีความจำเป็น"
    ]
  },
  {
    numb: 60,
    question: "beside",
    answer: "ข้าง",
    options: [
    "ข้าง",
    "แถว"
    ]
  },
  {
    numb: 61,
    question: "besides",
    answer: "นอกจากนั้น",
    options: [
    "ข้างๆ",
    "นอกจากนั้น"
    ]
  },
  {
    numb: 62,
    question: "bias",
    answer: "ความลำเอียง",
    options: [
    "ความลำเอียง",
    "การขาย"
    ]
  },
  {
    numb: 63,
    question: "bid",
    answer: "ประมูล",
    options: [
    "บิด",
    "ประมูล"
    ]
  },
  {
    numb: 64,
    question: "biological",
    answer: "เกี่ยวกับชีววิทยา",
    options: [
    "เกี่ยวกับชีววิทยา",
    "ชีวิต"
    ]
  },
  {
    numb: 65,
    question: "blanket",
    answer: "ผ้าห่ม",
    options: [
    "ข้อมือ",
    "ผ้าห่ม"
    ]
  },
  {
    numb: 66,
    question: "blow",
    answer: "ตี",
    options: [
    "ตี",
    "สะบัด"
    ]
  },
  {
    numb: 67,
    question: "bold",
    answer: "กล้าหาญ",
    options: [
    "กล้าหาญ",
    "ท้าทาย"
    ]
  },
  {
    numb: 68,
    question: "bombing",
    answer: "การวางระเบิด",
    options: [
    "การวางกับดัก",
    "การวางระเบิด"
    ]
  },
  {
    numb: 69,
    question: "booking",
    answer: "การจอง",
    options: [
    "การจอง",
    "การจองหนังสือ"
    ]
  },
  {
    numb: 70,
    question: "boost",
    answer: "เพิ่ม",
    options: [
    "ปรับ",
    "เพิ่ม"
    ]
  },
  {
    numb: 71,
    question: "bound",
    answer: "ถูกผูกมัด",
    options: [
    "ถูกผูกมัด",
    "การผูกขาด"
    ]
  },
  {
    numb: 72,
    question: "brick",
    answer: "อิฐ",
    options: [
    "อิฐ",
    "หินอัดก้อน"
    ]
  },
  {
    numb: 73,
    question: "briefly",
    answer: "โดยสังเขป",
    options: [
    "โดยปริยาย",
    "โดยสังเขป"
    ]
  },
  {
    numb: 74,
    question: "broadcaster",
    answer: "ผู้ประกาศ",
    options: [
    "ผู้ประกาศ",
    "การประกาศ"
    ]
  },
{
  numb: 75,
  question: "broadly",
  answer: "โดยทั่วไป",
  options: [
  "การประชาสัมพันธ์",
  "โดยทั่วไป"
  ]
},
{
  numb: 76,
  question: "bug",
  answer: "แมลง",
  options: [
  "ข้อผิดพลาด",
  "แมลง"
  ]
},
{
  numb: 77,
  question: "cabin",
  answer: "ห้องโดยสาร",
  options: [
  "ห้องโดยสาร",
  "ที่นั่ง"
  ]
},
{
  numb: 78,
  question: "canel",
  answer: "คลอง",
  options: [
  "สายน้ำ",
  "คลอง"
  ]
},
{
  numb: 79,
  question: "candle",
  answer: "เทียน",
  options: [
  "เทียน",
  "ธูป"
  ]
},
{
  numb: 80,
  question: "carbon",
  answer: "คาร์บอน",
  options: [
  "คาร์บ-ออน",
  "คาร์บอน"
  ]
},
{
  numb: 81,
  question: "casual",
  answer: "ไม่เป็นทางการ",
  options: [
  "อย่างเป็นทางการ",
  "ไม่เป็นทางการ"
  ]
},
{
  numb: 82,
  question: "cave",
  answer: "ถ้ำ",
  options: [
  "ถ้ำ",
  "ความโค้ง"
  ]
},
{
  numb: 83,
  question: "certainty",
  answer: "ความหนาแน่น",
  options: [
  "ความบาง",
  "ความหนาแน่น"
  ]
},
{
  numb: 84,
  question: "certificate",
  answer: "ใบรับรอง",
  options: [
  "ใบรับรอง",
  "ใบแจ้งเกิด"
  ]
},
{
  numb: 85,
  question: "challenging",
  answer: "ที่ท้าทาย",
  options: [
  "สิ่งที่ตื่นเต้น",
  "ที่ท้าทาย"
  ]
},
{
  numb: 86,
  question: "champoinship",
  answer: "การแข่งขันชิงแชมป์",
  options: [
  "ความสัมพันธ์ของผู้ชนะ",
  "การแข่งขันชิงแชมป์"
  ]
},
{
  numb: 87,
  question: "charming",
  answer: "มีเสน่ห์",
  options: [
  "มีเสน่ห์",
  "มีความหลงไหล"
  ]
},
{
  numb: 88,
  question: "chase",
  answer: "ไล่ตาม",
  options: [
  "ไล่ตาม",
  "ติดตาม"
  ]
},
{
  numb: 89,
  question: "cheek",
  answer: "แก้ม",
  options: [
  "โหนก",
  "แก้ม"
  ]
},
{
  numb: 90,
  question: "cheer",
  answer: "ส่งเสียงเชียร์",
  options: [
  "เรียกร้อง",
  "ส่งเสียงเชียร์"
  ]
},
{
  numb: 91,
  question: "choir",
  answer: "คณะร้องประสานเสียง",
  options: [
  "คณะร้องประสานเสียง",
  "นักร้องเดี่ยว"
  ]
},
{
  numb: 92,
  question: "chop",
  answer: "สับ",
  options: [
  "หัก",
  "สับ"
  ]
},
{
  numb: 93,
  question: "circuit",
  answer: "วงจร",
  options: [
  "กรอบ",
  "วงจร"
  ]
},
{
  numb: 94,
  question: "civilization",
  answer: "อารยธรรม",
  options: [
  "วัฒนธรรม",
  "อารยธรรม"
  ]
},
{
  numb: 95,
  question: "clarify",
  answer: "ทำให้กระจ่าง",
  options: [
  "ทำให้กระจ่าง",
  "ทำให้สว่าง"
  ]
},
{
  numb: 96,
  question: "classify",
  answer: "จัดประเภท",
  options: [
  "จัดระเบียบ",
  "จัดประเภท"
  ]
},
{
  numb: 97,
  question: "clerk",
  answer: "เสมียน",
  options: [
  "ผู้จัดการ",
  "เสมียน"
  ]
},
{
  numb: 98,
  question: "cliff",
  answer: "หน้าผา",
  options: [
  "หน้าผาก",
  "หน้าผา"
  ]
},
{
  numb: 99,
  question: "clinic",
  answer: "คลินิก",
  options: [
  "คลินิก",
  "คลินิค"
  ]
},
{
  numb: 100,
  question: "clip",
  answer: "คลีปหนีบ",
  options: [
  "คลีปหนีบ",
  "วีดิโอสั้น ๆ "
  ]
},
{
  numb: 101,
  question: "coincidence",
  answer: "ความบังเอิญ",
  options: [
  "ความตั้งใจ",
  "ความบังเอิญ"
  ]
},
{
  numb: 102,
  question: "collector",
  answer: "นักสะสม",
  options: [
  "นักสะสม",
  "นักซื้อขาย"
  ]
},
{
  numb: 103,
  question: "colony",
  answer: "อาณานิคม",
  options: [
  "ราชอาณาจักร",
  "อาณานิคม"
  ]
},
{
  numb: 104,
  question: "colourful",
  answer: "มีสีสัน",
  options: [
  "มีสีสัน",
  "สีเต็มพื้นที่"
  ]
},
{
  numb: 105,
  question: "comic",
  answer: "การ์ตูน",
  options: [
  "นิยาย",
  "การ์ตูน"
  ]
},
{
  numb: 106,
  question: "commander",
  answer: "ผู้บังคับบัญชา",
  options: [
  "ผู้บังคับบัญชา",
  "การบังคับ"
  ]
},
{
  numb: 107,
  question: "comparative",
  answer: "เปรียบเทียบ",
  options: [
  "การเอาเปรียบ",
  "เปรียบเทียบ"
  ]
},
{
  numb: 108,
  question: "completion",
  answer: "การทำให้สมบูรณ์",
  options: [
  "การบูรณะ",
  "การทำให้สมบูรณ์"
  ]
},
{
  numb: 109,
  question: "compose",
  answer: "ประพันธ์",
  options: [
  "ประพันธ์",
  "ประโยชน์"
  ]
},
{
  numb: 110,
  question: "composer",
  answer: "นักประพันธ์เพลง",
  options: [
  "นักประพันธ์เพลง",
  "การประพันธ์"
  ]
},
{
  numb: 111,
  question: "compound",
  answer: "สารประกอบ",
  options: [
  "สารประกอบ",
  "ความภาคภูมิใจ"
  ]
},
{
  numb: 112,
  question: "comprehensive",
  answer: "คลอบคลุม",
  options: [
  "ประกอบด้วย",
  "คลอบคลุม"
  ]
},
{
  numb: 113,
  question: "compulsory",
  answer: "ที่บังคับ",
  options: [
  "แบบอย่าง",
  "ที่บังคับ"
  ]
},
{
  numb: 114,
  question: "concrete",
  answer: "คอนกรีต",
  options: [
  "คอนกรีต",
  "ที่เป็นรูปธรรม"
  ]
},
{
  numb: 115,
  question: "confess",
  answer: "สารภาพ",
  options: [
  "สารภาพ",
  "อ้างอิง"
  ]
},
{
  numb: 116,
  question: "confusion",
  answer: "ความสับสน",
  options: [
  "ความสับสน",
  "ความไม่เข้าใจ"
  ]
},
{
  numb: 117,
  question: "consequently",
  answer: "ดังนั้น",
  options: [
  "อย่างงี้",
  "ดังนั้น"
  ]
},
{
  numb: 118,
  question: "conservation",
  answer: "การอนุรักษ์",
  options: [
  "การทำลาย",
  "การอนุรักษ์"
  ]
},
{
  numb: 119,
  question: "considerable",
  answer: "มากพอสมควร",
  options: [
  "มากพอสมควร",
  "พอดี"
  ]
},
{
  numb: 120,
  question: "considerably",
  answer: "อย่างมาก",
  options: [
  "อย่างมาก",
  "อย่างน้อย"
  ]
},
{
  numb: 121,
  question: "consistently",
  answer: "อย่างสม่ำเสมอ",
  options: [
  "การฝึกฝน",
  "อย่างสม่ำเสมอ"
  ]
},
{
  numb: 122,
  question: "conspiracy",
  answer: "การสมคบคิด",
  options: [
  "การคบหา",
  "การสมคบคิด"
  ]
},
{
  numb: 123,
  question: "consult",
  answer: "ปรึกษา",
  options: [
  "เรียกร้อง",
  "ปรึกษา"
  ]
},
{
  numb: 124,
  question: "consultant",
  answer: "ที่ปรึกษา",
  options: [
  "การเรียกใช้",
  "ที่ปรึกษา"
  ]
},
{
  numb: 125,
  question: "consumption",
  answer: "การบริโภค",
  options: [
  "การบริจาค",
  "การบริโภค"
  ]
},
{
  numb: 126,
  question: "controversy",
  answer: "ความขัดแย้ง",
  options: [
  "ความขัดแย้ง",
  "ความเชื่อใจกัน"
  ]
},
{
  numb: 126,
  question: "convenience",
  answer: "ความสะดวกสบาย",
  options: [
  "ความสบาย",
  "ความสะดวกสบาย"
  ]
},
{
  numb: 127,
  question: "convention",
  answer: "การประชุม",
  options: [
  "การประชุม",
  "การปรึกษา"
  ]
},
{
  numb: 128,
  question: "conventional",
  answer: "ตามประเพณี",
  options: [
  "ตามประเพณี",
  "ตามที่ประชุม"
  ]
},
{
  numb: 129,
  question: "convey",
  answer: "สื่อสาร",
  options: [
  "หนทาง",
  "สื่อสาร"
  ]
},
{
  numb: 130,
  question: "convincing",
  answer: "น่าเชื่อถือ",
  options: [
  "น่าเชื่อใจ",
  "น่าเชื่อถือ"
  ]
},
{
  numb: 131,
  question: "cope",
  answer: "รับมือ",
  options: [
  "รับมือ",
  "รับของ"
  ]
},
{
  numb: 132,
  question: "corporation",
  answer: "บริษัท",
  options: [
  "บริษัท",
  "สถาน"
  ]
},
{
  numb: 133,
  question: "corridor",
  answer: "ทางเดิน",
  options: [
  "ทางเดิน",
  "รอยเท้า"
  ]
},
{
  numb: 134,
  question: "counter",
  answer: "เคาน์เตอร์",
  options: [
  "ลิ้นชัก",
  "เคาน์เตอร์"
  ]
},
{
  numb: 135,
  question: "converage",
  answer: "การรายงานข่าว",
  options: [
  "การรายงานผล",
  "การรายงานข่าว"
  ]
},
{
  numb: 136,
  question: "crack",
  answer: "แตก",
  options: [
  "แตก",
  "กัด"
  ]
},
{
  numb: 137,
  question: "craft",
  answer: "งานฝีมือ",
  options: [
  "งานฝีมือ",
  "งานใช้แรง"
  ]
},
{
  numb: 138,
  question: "creativity",
  answer: "ความคิดสร้างสรรค์",
  options: [
  "ความคิดสร้างสรรค์",
  "กิจกรรมสร้่างสรรค์"
  ]
},
{
  numb: 139,
  question: "critically",
  answer: "อย่างรุนแรง",
  options: [
  "อย่างรุนแรง",
  "อย่างบางเบา"
  ]
},
{
  numb: 140,
  question: "cruise",
  answer: "การล่องเรือ",
  options: [
  "การคุ้ยหา",
  "การล่องเรือ"
  ]
},
{
  numb: 141,
  question: "cue",
  answer: "หนทาง",
  options: [
  "คิ้ว",
  "หนทาง"
  ]
},
{
  numb: 142,
  question: "curious",
  answer: "อยากรู้อยากเห็น",
  options: [
  "อยากรู้อยากเห็น",
  "จริงจัง"
  ]
},
{
  numb: 143,
  question: "curriculum",
  answer: "หลักสูตร",
  options: [
  "หลักสูตร",
  "แผนผัง"
  ]
},
{
  numb: 144,
  question: "cute",
  answer: "น่ารัก",
  options: [
  "สวยงาม",
  "น่ารัก"
  ]
},
{
  numb: 145,
  question: "controversial",
  answer: "ที่ก่อให้เกิดการถกเถียง",
  options: [
  "ที่ก่อให้เกิดการถกเถียง",
  "ที่ก่อให้เกิดความเข้าใจ"
  ]
},





  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];