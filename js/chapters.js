class Chapters {
    static createChapter1(game) {
        return {
            id: 1,
            name: '测试章节一',
            scenes: [
                {
                    name: '测试页1',
                    dialogues: [
                        { speaker: '旁白', text: '测试内容1' },
                        { speaker: '角色A', text: '测试内容2' }
                    ],
                    render(ctx) {
                        TestArt.drawScene1(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(1);
                    }
                },
                {
                    name: '测试页2',
                    dialogues: [
                        { speaker: '角色B', text: '测试内容3' },
                        { speaker: '角色A', text: '测试内容4' }
                    ],
                    render(ctx) {
                        TestArt.drawScene2(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(2);
                        game.unlockChapter(2);
                        alert('测试章节一完成！测试章节二已解锁！');
                    }
                }
            ]
        };
    }

    static createChapter2(game) {
        return {
            id: 2,
            name: '测试章节二',
            scenes: [
                {
                    name: '测试页3',
                    dialogues: [
                        { speaker: '旁白', text: '测试内容5' },
                        { speaker: '角色A', text: '测试内容6' }
                    ],
                    render(ctx) {
                        TestArt.drawScene3(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(3);
                    }
                },
                {
                    name: '测试页4',
                    dialogues: [
                        { speaker: '角色B', text: '测试内容7' },
                        { speaker: '角色A', text: '测试内容8' }
                    ],
                    render(ctx) {
                        TestArt.drawScene4(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(4);
                        game.unlockChapter(3);
                        alert('测试章节二完成！测试章节三已解锁！');
                    }
                }
            ]
        };
    }

    static createChapter3(game) {
        return {
            id: 3,
            name: '测试章节三',
            scenes: [
                {
                    name: '测试页5',
                    dialogues: [
                        { speaker: '旁白', text: '测试内容9' },
                        { speaker: '角色A', text: '测试内容10' }
                    ],
                    render(ctx) {
                        TestArt.drawScene5(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(5);
                    }
                },
                {
                    name: '测试页6',
                    dialogues: [
                        { speaker: '角色B', text: '测试内容11' },
                        { speaker: '旁白', text: '测试内容12' }
                    ],
                    render(ctx) {
                        TestArt.drawScene6(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(6);
                        alert('测试章节三完成！所有测试章节已结束！');
                    }
                }
            ]
        };
    }

    static getAllChapters(game) {
        return [
            this.createChapter1(game),
            this.createChapter2(game),
            this.createChapter3(game)
        ];
    }
}
