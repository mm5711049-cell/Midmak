function detectScreen() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dimElement = document.getElementById('screen-dim');
    const typeElement = document.getElementById('screen-type');

    if (dimElement && typeElement) {
        dimElement.innerText = `العرض: ${width}px | الطول: ${height}px`;
        
        let device = "كمبيوتر (Desktop)";
        if (width < 640) device = "جوال (Mobile)";
        else if (width < 1024) device = "جهاز لوحي (Tablet)";
        
        typeElement.innerText = `نوع الجهاز: ${device}`;
    }
}

// تشغيل الوظيفة عند التحميل وعند تغيير مقاس النافذة
window.addEventListener('load', detectScreen);
window.addEventListener('resize', detectScreen);
