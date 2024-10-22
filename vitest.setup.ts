import { vi } from 'vitest'

const mock = function () {
    return {
        observe: vi.fn(),
        disconnect: vi.fn(),
    };
};

// @ts-ignore
globalThis.IntersectionObserver = mock;
