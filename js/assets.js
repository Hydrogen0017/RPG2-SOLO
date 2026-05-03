class TestArt {
    static drawScene1(ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 640);
        gradient.addColorStop(0, '#2c3e50');
        gradient.addColorStop(1, '#34495e');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 960, 640);
        ctx.fillStyle = '#ecf0f1';
        ctx.font = 'bold 36px Microsoft YaHei';
        ctx.textAlign = 'center';
        ctx.fillText('测试页1', 480, 320);
    }

    static drawScene2(ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 640);
        gradient.addColorStop(0, '#8e44ad');
        gradient.addColorStop(1, '#9b59b6');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 960, 640);
        ctx.fillStyle = '#ecf0f1';
        ctx.font = 'bold 36px Microsoft YaHei';
        ctx.textAlign = 'center';
        ctx.fillText('测试页2', 480, 320);
    }

    static drawScene3(ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 640);
        gradient.addColorStop(0, '#27ae60');
        gradient.addColorStop(1, '#2ecc71');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 960, 640);
        ctx.fillStyle = '#ecf0f1';
        ctx.font = 'bold 36px Microsoft YaHei';
        ctx.textAlign = 'center';
        ctx.fillText('测试页3', 480, 320);
    }

    static drawScene4(ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 640);
        gradient.addColorStop(0, '#e67e22');
        gradient.addColorStop(1, '#f39c12');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 960, 640);
        ctx.fillStyle = '#ecf0f1';
        ctx.font = 'bold 36px Microsoft YaHei';
        ctx.textAlign = 'center';
        ctx.fillText('测试页4', 480, 320);
    }

    static drawScene5(ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 640);
        gradient.addColorStop(0, '#c0392b');
        gradient.addColorStop(1, '#e74c3c');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 960, 640);
        ctx.fillStyle = '#ecf0f1';
        ctx.font = 'bold 36px Microsoft YaHei';
        ctx.textAlign = 'center';
        ctx.fillText('测试页5', 480, 320);
    }

    static drawScene6(ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 640);
        gradient.addColorStop(0, '#2980b9');
        gradient.addColorStop(1, '#3498db');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 960, 640);
        ctx.fillStyle = '#ecf0f1';
        ctx.font = 'bold 36px Microsoft YaHei';
        ctx.textAlign = 'center';
        ctx.fillText('测试页6', 480, 320);
    }
}
