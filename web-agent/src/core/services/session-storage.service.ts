export class SessionStorageService {

    constructor(private storage: Storage) {
    }

    add(key: string, value: string) {
        this.storage.setItem(key, value);
    }

    remove(key: string) {
        this.storage.removeItem(key);
    }

    get(key: string): string | null {
        return this.storage.getItem(key);
    }

    clear() {
        this.storage.clear();
    }
}

export const sessionStorageServiceInstance = new SessionStorageService(window.sessionStorage);