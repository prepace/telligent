// Lightweight mock for Supabase client to enable wireframe mode without DB access

function createChainResult({ rows = [], single = false } = {}) {
    const base = {
        data: single ? (rows[0] ?? null) : rows,
        error: null,
    };
    return Promise.resolve(base);
}

function buildQueryChain() {
    // Support a subset of the Postgrest query builder used in this app
    const chain = {
        select: () => chain,
        eq: () => chain,
        single: () => createChainResult({ rows: [null], single: true }),
        insert: () => createChainResult({ rows: [] }),
        upsert: () => createChainResult({ rows: [] }),
        update: () => createChainResult({ rows: [] }),
        delete: () => createChainResult({ rows: [] }),
    };
    return chain;
}

export function createMockSupabaseClient() {
    return {
        auth: {
            async getUser() {
                return { data: { user: null }, error: null };
            },
            onAuthStateChange() {
                return {
                    data: {
                        subscription: { unsubscribe: () => { } },
                    },
                };
            },
            async signInWithPassword() {
                return { data: { session: null }, error: null };
            },
            async signUp() {
                return { data: { session: null }, error: null };
            },
            async signOut() {
                return { error: null };
            },
        },
        from() {
            return buildQueryChain();
        },
        storage: {
            from() {
                return {
                    async upload() {
                        return { data: { path: "" }, error: null };
                    },
                };
            },
        },
    };
}
