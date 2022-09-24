const crypto = require("crypto");

class TodoItem {
    static Create(item) {
        return new TodoItem(crypto.randomUUID(), item, new Date(), new Date());
    }

    constructor(id, item, createdAt, updatedAt) {
        this.id = id;
        this.item = item;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    getId() {
        return this.id;
    }

    getItem() {
        return this.item;
    }

    getCreatedAt() {
        return this.createdAt;
    }

    getUpdatedAt() {
        return this.updatedAt;
    }

    state() {
        return {
            id: this.id,
            item: this.item,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    updateItem(newItem) {
        this.item = newItem;
        this.updatedAt = new Date();
    }
}

module.exports = { TodoItem };
