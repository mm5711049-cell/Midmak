function updateScreenSpecs() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dim = document.getElementById('screen-dim');
    const type = document.getElementById('screen-type');
    
    if (dim && type) {
        dim.innerText = `دقة الشاشة: ${w} × ${h}`;
        type.innerText = w < 768 ? 'الجهاز: جوال' : 'الجهاز: كمبيوتر';
    }
}
window.onload = updateScreenSpecs;
window.onresize = updateScreenSpecs;
