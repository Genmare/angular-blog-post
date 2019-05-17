export class Post {

    constructor(
        public title: string,
        public content: string,
        public loveIts: number = 0,
        public createdAt: Date = new Date()
    ) { }

    /**
     * Recharge la propriété date (utile lors du parse du post)
     */
    formatDate() {
        this.createdAt = new Date(this.createdAt);
    }
}
