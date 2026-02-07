// بيانات الترجمة
const translations = {
    ar: {
        heroTitle: "مؤسسة مدماك الجنوب",
        heroDesc: "بناء المستقبل بأعلى معايير الجودة والاتقان.",
        card1Title: "دقة التنفيذ",
        card1Desc: "نلتزم بالدقة من القواعد حتى تسليم المفتاح.",
        consTitle: "خدمات بناء العظم",
        langBtn: "English"
    },
    en: {
        heroTitle: "MIDMAK AL-JANOUB",
        heroDesc: "Building the future with the highest standards of quality.",
        card1Title: "Precision",
        card1Desc: "We are committed to accuracy from foundations to key handover.",
        consTitle: "Skeletal Construction Services",
        langBtn: "العربية"
    }
};

let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const html = document.getElementById('main-html');
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    html.lang = currentLang;
    
    // تحديث النصوص
    if(document.getElementById('hero-title')) {
        document.getElementById('hero-title').innerText = translations[currentLang].heroTitle;
        document.getElementById('hero-desc').innerText = translations[currentLang].heroDesc;
    }
    // يمكنك إضافة باقي العناصر هنا
}

// كاشف الشاشة
function updateScreen() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    document.getElementById('screen-dim').innerText = `Dimensions: ${w}px x ${h}px`;
    document.getElementById('screen-type').innerText = w < 768 ? "Mobile" : "Tablet/Desktop";
}

window.onresize = updateScreen;
window.onload = updateScreen;
