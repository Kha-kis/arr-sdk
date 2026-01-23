export type paths = {
    "/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ApiInfoResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/author": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AuthorResource"][];
                        "text/json": components["schemas"]["AuthorResource"][];
                        "text/plain": components["schemas"]["AuthorResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["AuthorResource"];
                    "application/json": components["schemas"]["AuthorResource"];
                    "text/json": components["schemas"]["AuthorResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AuthorResource"];
                        "text/json": components["schemas"]["AuthorResource"];
                        "text/plain": components["schemas"]["AuthorResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/author/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AuthorResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: {
                    moveFiles?: boolean;
                };
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["AuthorResource"];
                    "application/json": components["schemas"]["AuthorResource"];
                    "text/json": components["schemas"]["AuthorResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AuthorResource"];
                        "text/json": components["schemas"]["AuthorResource"];
                        "text/plain": components["schemas"]["AuthorResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: {
                    addImportListExclusion?: boolean;
                    deleteFiles?: boolean;
                };
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/author/editor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["AuthorEditorResource"];
                    "application/json": components["schemas"]["AuthorEditorResource"];
                    "text/json": components["schemas"]["AuthorEditorResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["AuthorEditorResource"];
                    "application/json": components["schemas"]["AuthorEditorResource"];
                    "text/json": components["schemas"]["AuthorEditorResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/author/lookup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    term?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/blocklist": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    page?: number;
                    pageSize?: number;
                    sortDirection?: components["schemas"]["SortDirection"];
                    sortKey?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BlocklistResourcePagingResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/blocklist/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/blocklist/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["BlocklistBulkResource"];
                    "application/json": components["schemas"]["BlocklistBulkResource"];
                    "text/json": components["schemas"]["BlocklistBulkResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/book": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    authorId?: number;
                    bookIds?: number[];
                    includeAllAuthorBooks?: boolean;
                    titleSlug?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BookResource"][];
                        "text/json": components["schemas"]["BookResource"][];
                        "text/plain": components["schemas"]["BookResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["BookResource"];
                    "application/json": components["schemas"]["BookResource"];
                    "text/json": components["schemas"]["BookResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BookResource"];
                        "text/json": components["schemas"]["BookResource"];
                        "text/plain": components["schemas"]["BookResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/book/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BookResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["BookResource"];
                    "application/json": components["schemas"]["BookResource"];
                    "text/json": components["schemas"]["BookResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BookResource"];
                        "text/json": components["schemas"]["BookResource"];
                        "text/plain": components["schemas"]["BookResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: {
                    addImportListExclusion?: boolean;
                    deleteFiles?: boolean;
                };
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/book/{id}/overview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/book/editor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["BookEditorResource"];
                    "application/json": components["schemas"]["BookEditorResource"];
                    "text/json": components["schemas"]["BookEditorResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["BookEditorResource"];
                    "application/json": components["schemas"]["BookEditorResource"];
                    "text/json": components["schemas"]["BookEditorResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/book/lookup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    term?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/book/monitor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["BooksMonitoredResource"];
                    "application/json": components["schemas"]["BooksMonitoredResource"];
                    "text/json": components["schemas"]["BooksMonitoredResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/bookfile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    authorId?: number;
                    bookFileIds?: number[];
                    bookId?: number[];
                    unmapped?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BookFileResource"][];
                        "text/json": components["schemas"]["BookFileResource"][];
                        "text/plain": components["schemas"]["BookFileResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/bookfile/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BookFileResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["BookFileResource"];
                    "application/json": components["schemas"]["BookFileResource"];
                    "text/json": components["schemas"]["BookFileResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BookFileResource"];
                        "text/json": components["schemas"]["BookFileResource"];
                        "text/plain": components["schemas"]["BookFileResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/bookfile/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["BookFileListResource"];
                    "application/json": components["schemas"]["BookFileListResource"];
                    "text/json": components["schemas"]["BookFileListResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/bookfile/editor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["BookFileListResource"];
                    "application/json": components["schemas"]["BookFileListResource"];
                    "text/json": components["schemas"]["BookFileListResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/bookshelf": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["BookshelfResource"];
                    "application/json": components["schemas"]["BookshelfResource"];
                    "text/json": components["schemas"]["BookshelfResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/calendar": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    end?: string;
                    includeAuthor?: boolean;
                    start?: string;
                    unmonitored?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BookResource"][];
                        "text/json": components["schemas"]["BookResource"][];
                        "text/plain": components["schemas"]["BookResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/calendar/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BookResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/command": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CommandResource"][];
                        "text/json": components["schemas"]["CommandResource"][];
                        "text/plain": components["schemas"]["CommandResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["CommandResource"];
                    "application/json": components["schemas"]["CommandResource"];
                    "text/json": components["schemas"]["CommandResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CommandResource"];
                        "text/json": components["schemas"]["CommandResource"];
                        "text/plain": components["schemas"]["CommandResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/command/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CommandResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/development": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DevelopmentConfigResource"];
                        "text/json": components["schemas"]["DevelopmentConfigResource"];
                        "text/plain": components["schemas"]["DevelopmentConfigResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/development/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DevelopmentConfigResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["DevelopmentConfigResource"];
                    "application/json": components["schemas"]["DevelopmentConfigResource"];
                    "text/json": components["schemas"]["DevelopmentConfigResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DevelopmentConfigResource"];
                        "text/json": components["schemas"]["DevelopmentConfigResource"];
                        "text/plain": components["schemas"]["DevelopmentConfigResource"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/downloadclient": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DownloadClientConfigResource"];
                        "text/json": components["schemas"]["DownloadClientConfigResource"];
                        "text/plain": components["schemas"]["DownloadClientConfigResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/downloadclient/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DownloadClientConfigResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["DownloadClientConfigResource"];
                    "application/json": components["schemas"]["DownloadClientConfigResource"];
                    "text/json": components["schemas"]["DownloadClientConfigResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DownloadClientConfigResource"];
                        "text/json": components["schemas"]["DownloadClientConfigResource"];
                        "text/plain": components["schemas"]["DownloadClientConfigResource"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/host": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["HostConfigResource"];
                        "text/json": components["schemas"]["HostConfigResource"];
                        "text/plain": components["schemas"]["HostConfigResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/host/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["HostConfigResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["HostConfigResource"];
                    "application/json": components["schemas"]["HostConfigResource"];
                    "text/json": components["schemas"]["HostConfigResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["HostConfigResource"];
                        "text/json": components["schemas"]["HostConfigResource"];
                        "text/plain": components["schemas"]["HostConfigResource"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/indexer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["IndexerConfigResource"];
                        "text/json": components["schemas"]["IndexerConfigResource"];
                        "text/plain": components["schemas"]["IndexerConfigResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/indexer/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["IndexerConfigResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["IndexerConfigResource"];
                    "application/json": components["schemas"]["IndexerConfigResource"];
                    "text/json": components["schemas"]["IndexerConfigResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["IndexerConfigResource"];
                        "text/json": components["schemas"]["IndexerConfigResource"];
                        "text/plain": components["schemas"]["IndexerConfigResource"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/mediamanagement": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MediaManagementConfigResource"];
                        "text/json": components["schemas"]["MediaManagementConfigResource"];
                        "text/plain": components["schemas"]["MediaManagementConfigResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/mediamanagement/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MediaManagementConfigResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["MediaManagementConfigResource"];
                    "application/json": components["schemas"]["MediaManagementConfigResource"];
                    "text/json": components["schemas"]["MediaManagementConfigResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MediaManagementConfigResource"];
                        "text/json": components["schemas"]["MediaManagementConfigResource"];
                        "text/plain": components["schemas"]["MediaManagementConfigResource"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/metadataprovider": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MetadataProviderConfigResource"];
                        "text/json": components["schemas"]["MetadataProviderConfigResource"];
                        "text/plain": components["schemas"]["MetadataProviderConfigResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/metadataprovider/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MetadataProviderConfigResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["MetadataProviderConfigResource"];
                    "application/json": components["schemas"]["MetadataProviderConfigResource"];
                    "text/json": components["schemas"]["MetadataProviderConfigResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MetadataProviderConfigResource"];
                        "text/json": components["schemas"]["MetadataProviderConfigResource"];
                        "text/plain": components["schemas"]["MetadataProviderConfigResource"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/naming": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NamingConfigResource"];
                        "text/json": components["schemas"]["NamingConfigResource"];
                        "text/plain": components["schemas"]["NamingConfigResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/naming/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NamingConfigResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["NamingConfigResource"];
                    "application/json": components["schemas"]["NamingConfigResource"];
                    "text/json": components["schemas"]["NamingConfigResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NamingConfigResource"];
                        "text/json": components["schemas"]["NamingConfigResource"];
                        "text/plain": components["schemas"]["NamingConfigResource"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/naming/examples": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    authorFolderFormat?: string;
                    colonReplacementFormat?: number;
                    id?: number;
                    includeAuthorName?: boolean;
                    includeBookTitle?: boolean;
                    includeQuality?: boolean;
                    numberStyle?: string;
                    renameBooks?: boolean;
                    replaceIllegalCharacters?: boolean;
                    replaceSpaces?: boolean;
                    resourceName?: string;
                    separator?: string;
                    standardBookFormat?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/ui": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UiConfigResource"];
                        "text/json": components["schemas"]["UiConfigResource"];
                        "text/plain": components["schemas"]["UiConfigResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/config/ui/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UiConfigResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["UiConfigResource"];
                    "application/json": components["schemas"]["UiConfigResource"];
                    "text/json": components["schemas"]["UiConfigResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UiConfigResource"];
                        "text/json": components["schemas"]["UiConfigResource"];
                        "text/plain": components["schemas"]["UiConfigResource"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/customfilter": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CustomFilterResource"][];
                        "text/json": components["schemas"]["CustomFilterResource"][];
                        "text/plain": components["schemas"]["CustomFilterResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["CustomFilterResource"];
                    "application/json": components["schemas"]["CustomFilterResource"];
                    "text/json": components["schemas"]["CustomFilterResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CustomFilterResource"];
                        "text/json": components["schemas"]["CustomFilterResource"];
                        "text/plain": components["schemas"]["CustomFilterResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/customfilter/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CustomFilterResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["CustomFilterResource"];
                    "application/json": components["schemas"]["CustomFilterResource"];
                    "text/json": components["schemas"]["CustomFilterResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CustomFilterResource"];
                        "text/json": components["schemas"]["CustomFilterResource"];
                        "text/plain": components["schemas"]["CustomFilterResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/customformat": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CustomFormatResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CustomFormatResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CustomFormatResource"];
                        "text/json": components["schemas"]["CustomFormatResource"];
                        "text/plain": components["schemas"]["CustomFormatResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/customformat/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CustomFormatResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CustomFormatResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CustomFormatResource"];
                        "text/json": components["schemas"]["CustomFormatResource"];
                        "text/plain": components["schemas"]["CustomFormatResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/customformat/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/delayprofile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DelayProfileResource"][];
                        "text/json": components["schemas"]["DelayProfileResource"][];
                        "text/plain": components["schemas"]["DelayProfileResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["DelayProfileResource"];
                    "application/json": components["schemas"]["DelayProfileResource"];
                    "text/json": components["schemas"]["DelayProfileResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DelayProfileResource"];
                        "text/json": components["schemas"]["DelayProfileResource"];
                        "text/plain": components["schemas"]["DelayProfileResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/delayprofile/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DelayProfileResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["DelayProfileResource"];
                    "application/json": components["schemas"]["DelayProfileResource"];
                    "text/json": components["schemas"]["DelayProfileResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DelayProfileResource"];
                        "text/json": components["schemas"]["DelayProfileResource"];
                        "text/plain": components["schemas"]["DelayProfileResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/delayprofile/reorder/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: {
                    afterId?: number;
                };
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/diskspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DiskSpaceResource"][];
                        "text/json": components["schemas"]["DiskSpaceResource"][];
                        "text/plain": components["schemas"]["DiskSpaceResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/downloadclient": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DownloadClientResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: {
                    forceSave?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["DownloadClientResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DownloadClientResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/downloadclient/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DownloadClientResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: {
                    forceSave?: boolean;
                };
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["DownloadClientResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DownloadClientResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/downloadclient/action/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["DownloadClientResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/downloadclient/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["DownloadClientBulkResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DownloadClientResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["DownloadClientBulkResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/downloadclient/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DownloadClientResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/downloadclient/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: {
                    forceTest?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["DownloadClientResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/downloadclient/testall": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/edition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    bookId?: number[];
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["EditionResource"][];
                        "text/json": components["schemas"]["EditionResource"][];
                        "text/plain": components["schemas"]["EditionResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/filesystem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    allowFoldersWithoutTrailingSlashes?: boolean;
                    includeFiles?: boolean;
                    path?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/filesystem/mediafiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    path?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/filesystem/type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    path?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["HealthResource"][];
                        "text/json": components["schemas"]["HealthResource"][];
                        "text/plain": components["schemas"]["HealthResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    bookId?: number;
                    downloadId?: string;
                    eventType?: number[];
                    includeAuthor?: boolean;
                    includeBook?: boolean;
                    page?: number;
                    pageSize?: number;
                    sortDirection?: components["schemas"]["SortDirection"];
                    sortKey?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["HistoryResourcePagingResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/history/author": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    authorId?: number;
                    bookId?: number;
                    eventType?: components["schemas"]["EntityHistoryEventType"];
                    includeAuthor?: boolean;
                    includeBook?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["HistoryResource"][];
                        "text/json": components["schemas"]["HistoryResource"][];
                        "text/plain": components["schemas"]["HistoryResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/history/failed/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/history/since": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    date?: string;
                    eventType?: components["schemas"]["EntityHistoryEventType"];
                    includeAuthor?: boolean;
                    includeBook?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["HistoryResource"][];
                        "text/json": components["schemas"]["HistoryResource"][];
                        "text/plain": components["schemas"]["HistoryResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/importlist": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImportListResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: {
                    forceSave?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ImportListResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImportListResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/importlist/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImportListResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: {
                    forceSave?: boolean;
                };
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ImportListResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImportListResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/importlist/action/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ImportListResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/importlist/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ImportListBulkResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImportListResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ImportListBulkResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/importlist/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImportListResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/importlist/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: {
                    forceTest?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ImportListResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/importlist/testall": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/importlistexclusion": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImportListExclusionResource"][];
                        "text/json": components["schemas"]["ImportListExclusionResource"][];
                        "text/plain": components["schemas"]["ImportListExclusionResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["ImportListExclusionResource"];
                    "application/json": components["schemas"]["ImportListExclusionResource"];
                    "text/json": components["schemas"]["ImportListExclusionResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImportListExclusionResource"];
                        "text/json": components["schemas"]["ImportListExclusionResource"];
                        "text/plain": components["schemas"]["ImportListExclusionResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/importlistexclusion/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImportListExclusionResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["ImportListExclusionResource"];
                    "application/json": components["schemas"]["ImportListExclusionResource"];
                    "text/json": components["schemas"]["ImportListExclusionResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImportListExclusionResource"];
                        "text/json": components["schemas"]["ImportListExclusionResource"];
                        "text/plain": components["schemas"]["ImportListExclusionResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/indexer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["IndexerResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: {
                    forceSave?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["IndexerResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["IndexerResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/indexer/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["IndexerResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: {
                    forceSave?: boolean;
                };
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["IndexerResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["IndexerResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/indexer/action/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["IndexerResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/indexer/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["IndexerBulkResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["IndexerResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["IndexerBulkResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/indexer/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["IndexerResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/indexer/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: {
                    forceTest?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["IndexerResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/indexer/testall": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/indexerflag": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["IndexerFlagResource"][];
                        "text/json": components["schemas"]["IndexerFlagResource"][];
                        "text/plain": components["schemas"]["IndexerFlagResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/language": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["LanguageResource"][];
                        "text/json": components["schemas"]["LanguageResource"][];
                        "text/plain": components["schemas"]["LanguageResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/language/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["LanguageResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/localization": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                        "text/json": string;
                        "text/plain": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/log": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    level?: string;
                    page?: number;
                    pageSize?: number;
                    sortDirection?: components["schemas"]["SortDirection"];
                    sortKey?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["LogResourcePagingResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/log/file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["LogFileResource"][];
                        "text/json": components["schemas"]["LogFileResource"][];
                        "text/plain": components["schemas"]["LogFileResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/log/file/{filename}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    filename: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/log/file/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["LogFileResource"][];
                        "text/json": components["schemas"]["LogFileResource"][];
                        "text/plain": components["schemas"]["LogFileResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/log/file/update/{filename}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    filename: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/manualimport": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    authorId?: number;
                    downloadId?: string;
                    filterExistingFiles?: boolean;
                    folder?: string;
                    replaceExistingFiles?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ManualImportResource"][];
                        "text/json": components["schemas"]["ManualImportResource"][];
                        "text/plain": components["schemas"]["ManualImportResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["ManualImportUpdateResource"][];
                    "application/json": components["schemas"]["ManualImportUpdateResource"][];
                    "text/json": components["schemas"]["ManualImportUpdateResource"][];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/mediacover/author/{authorId}/{filename}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    authorId: number;
                    filename: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/mediacover/book/{bookId}/{filename}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    bookId: number;
                    filename: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/metadata": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MetadataResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: {
                    forceSave?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["MetadataResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MetadataResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/metadata/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MetadataResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: {
                    forceSave?: boolean;
                };
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["MetadataResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MetadataResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/metadata/action/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["MetadataResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/metadata/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MetadataResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/metadata/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: {
                    forceTest?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["MetadataResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/metadata/testall": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/metadataprofile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MetadataProfileResource"][];
                        "text/json": components["schemas"]["MetadataProfileResource"][];
                        "text/plain": components["schemas"]["MetadataProfileResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["MetadataProfileResource"];
                    "application/json": components["schemas"]["MetadataProfileResource"];
                    "text/json": components["schemas"]["MetadataProfileResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MetadataProfileResource"];
                        "text/json": components["schemas"]["MetadataProfileResource"];
                        "text/plain": components["schemas"]["MetadataProfileResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/metadataprofile/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MetadataProfileResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["MetadataProfileResource"];
                    "application/json": components["schemas"]["MetadataProfileResource"];
                    "text/json": components["schemas"]["MetadataProfileResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MetadataProfileResource"];
                        "text/json": components["schemas"]["MetadataProfileResource"];
                        "text/plain": components["schemas"]["MetadataProfileResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/metadataprofile/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MetadataProfileResource"];
                        "text/json": components["schemas"]["MetadataProfileResource"];
                        "text/plain": components["schemas"]["MetadataProfileResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NotificationResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: {
                    forceSave?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["NotificationResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NotificationResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notification/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NotificationResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: {
                    forceSave?: boolean;
                };
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["NotificationResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NotificationResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notification/action/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["NotificationResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notification/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NotificationResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notification/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: {
                    forceTest?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["NotificationResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notification/testall": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/parse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    title?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ParseResource"];
                        "text/json": components["schemas"]["ParseResource"];
                        "text/plain": components["schemas"]["ParseResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/qualitydefinition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["QualityDefinitionResource"][];
                        "text/json": components["schemas"]["QualityDefinitionResource"][];
                        "text/plain": components["schemas"]["QualityDefinitionResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/qualitydefinition/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["QualityDefinitionResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["QualityDefinitionResource"];
                    "application/json": components["schemas"]["QualityDefinitionResource"];
                    "text/json": components["schemas"]["QualityDefinitionResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["QualityDefinitionResource"];
                        "text/json": components["schemas"]["QualityDefinitionResource"];
                        "text/plain": components["schemas"]["QualityDefinitionResource"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/qualitydefinition/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["QualityDefinitionResource"][];
                    "application/json": components["schemas"]["QualityDefinitionResource"][];
                    "text/json": components["schemas"]["QualityDefinitionResource"][];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/qualityprofile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["QualityProfileResource"][];
                        "text/json": components["schemas"]["QualityProfileResource"][];
                        "text/plain": components["schemas"]["QualityProfileResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["QualityProfileResource"];
                    "application/json": components["schemas"]["QualityProfileResource"];
                    "text/json": components["schemas"]["QualityProfileResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["QualityProfileResource"];
                        "text/json": components["schemas"]["QualityProfileResource"];
                        "text/plain": components["schemas"]["QualityProfileResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/qualityprofile/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["QualityProfileResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["QualityProfileResource"];
                    "application/json": components["schemas"]["QualityProfileResource"];
                    "text/json": components["schemas"]["QualityProfileResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["QualityProfileResource"];
                        "text/json": components["schemas"]["QualityProfileResource"];
                        "text/plain": components["schemas"]["QualityProfileResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/qualityprofile/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["QualityProfileResource"];
                        "text/json": components["schemas"]["QualityProfileResource"];
                        "text/plain": components["schemas"]["QualityProfileResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/queue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    includeAuthor?: boolean;
                    includeBook?: boolean;
                    includeUnknownAuthorItems?: boolean;
                    page?: number;
                    pageSize?: number;
                    sortDirection?: components["schemas"]["SortDirection"];
                    sortKey?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["QueueResourcePagingResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/queue/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: {
                    blocklist?: boolean;
                    changeCategory?: boolean;
                    removeFromClient?: boolean;
                    skipRedownload?: boolean;
                };
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/queue/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: {
                    blocklist?: boolean;
                    changeCategory?: boolean;
                    removeFromClient?: boolean;
                    skipRedownload?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["QueueBulkResource"];
                    "application/json": components["schemas"]["QueueBulkResource"];
                    "text/json": components["schemas"]["QueueBulkResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/queue/details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    authorId?: number;
                    bookIds?: number[];
                    includeAuthor?: boolean;
                    includeBook?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["QueueResource"][];
                        "text/json": components["schemas"]["QueueResource"][];
                        "text/plain": components["schemas"]["QueueResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/queue/grab/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/queue/grab/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["QueueBulkResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/queue/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["QueueStatusResource"];
                        "text/json": components["schemas"]["QueueStatusResource"];
                        "text/plain": components["schemas"]["QueueStatusResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/release": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    authorId?: number;
                    bookId?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ReleaseResource"][];
                        "text/json": components["schemas"]["ReleaseResource"][];
                        "text/plain": components["schemas"]["ReleaseResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["ReleaseResource"];
                    "application/json": components["schemas"]["ReleaseResource"];
                    "text/json": components["schemas"]["ReleaseResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ReleaseResource"];
                        "text/json": components["schemas"]["ReleaseResource"];
                        "text/plain": components["schemas"]["ReleaseResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/release/push": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ReleaseResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ReleaseResource"];
                        "text/json": components["schemas"]["ReleaseResource"];
                        "text/plain": components["schemas"]["ReleaseResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/releaseprofile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ReleaseProfileResource"][];
                        "text/json": components["schemas"]["ReleaseProfileResource"][];
                        "text/plain": components["schemas"]["ReleaseProfileResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["ReleaseProfileResource"];
                    "application/json": components["schemas"]["ReleaseProfileResource"];
                    "text/json": components["schemas"]["ReleaseProfileResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ReleaseProfileResource"];
                        "text/json": components["schemas"]["ReleaseProfileResource"];
                        "text/plain": components["schemas"]["ReleaseProfileResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/releaseprofile/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ReleaseProfileResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["ReleaseProfileResource"];
                    "application/json": components["schemas"]["ReleaseProfileResource"];
                    "text/json": components["schemas"]["ReleaseProfileResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ReleaseProfileResource"];
                        "text/json": components["schemas"]["ReleaseProfileResource"];
                        "text/plain": components["schemas"]["ReleaseProfileResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/remotepathmapping": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RemotePathMappingResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["RemotePathMappingResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RemotePathMappingResource"];
                        "text/json": components["schemas"]["RemotePathMappingResource"];
                        "text/plain": components["schemas"]["RemotePathMappingResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/remotepathmapping/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RemotePathMappingResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["RemotePathMappingResource"];
                    "application/json": components["schemas"]["RemotePathMappingResource"];
                    "text/json": components["schemas"]["RemotePathMappingResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RemotePathMappingResource"];
                        "text/json": components["schemas"]["RemotePathMappingResource"];
                        "text/plain": components["schemas"]["RemotePathMappingResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/rename": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    authorId?: number;
                    bookId?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RenameBookResource"][];
                        "text/json": components["schemas"]["RenameBookResource"][];
                        "text/plain": components["schemas"]["RenameBookResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retag": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    authorId?: number;
                    bookId?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RetagBookResource"][];
                        "text/json": components["schemas"]["RetagBookResource"][];
                        "text/plain": components["schemas"]["RetagBookResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/rootfolder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RootFolderResource"][];
                        "text/json": components["schemas"]["RootFolderResource"][];
                        "text/plain": components["schemas"]["RootFolderResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["RootFolderResource"];
                    "application/json": components["schemas"]["RootFolderResource"];
                    "text/json": components["schemas"]["RootFolderResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RootFolderResource"];
                        "text/json": components["schemas"]["RootFolderResource"];
                        "text/plain": components["schemas"]["RootFolderResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/rootfolder/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RootFolderResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["RootFolderResource"];
                    "application/json": components["schemas"]["RootFolderResource"];
                    "text/json": components["schemas"]["RootFolderResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RootFolderResource"];
                        "text/json": components["schemas"]["RootFolderResource"];
                        "text/plain": components["schemas"]["RootFolderResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    term?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/series": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    authorId?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SeriesResource"][];
                        "text/json": components["schemas"]["SeriesResource"][];
                        "text/plain": components["schemas"]["SeriesResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/system/backup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BackupResource"][];
                        "text/json": components["schemas"]["BackupResource"][];
                        "text/plain": components["schemas"]["BackupResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/system/backup/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/system/backup/restore/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/system/backup/restore/upload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/system/restart": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/system/routes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/system/routes/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/system/shutdown": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/system/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SystemResource"];
                        "text/json": components["schemas"]["SystemResource"];
                        "text/plain": components["schemas"]["SystemResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/system/task": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TaskResource"][];
                        "text/json": components["schemas"]["TaskResource"][];
                        "text/plain": components["schemas"]["TaskResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/system/task/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TaskResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tag": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TagResource"][];
                        "text/json": components["schemas"]["TagResource"][];
                        "text/plain": components["schemas"]["TagResource"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["TagResource"];
                    "application/json": components["schemas"]["TagResource"];
                    "text/json": components["schemas"]["TagResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TagResource"];
                        "text/json": components["schemas"]["TagResource"];
                        "text/plain": components["schemas"]["TagResource"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tag/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TagResource"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/*+json": components["schemas"]["TagResource"];
                    "application/json": components["schemas"]["TagResource"];
                    "text/json": components["schemas"]["TagResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TagResource"];
                        "text/json": components["schemas"]["TagResource"];
                        "text/plain": components["schemas"]["TagResource"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tag/detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TagDetailsResource"][];
                        "text/json": components["schemas"]["TagDetailsResource"][];
                        "text/plain": components["schemas"]["TagDetailsResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tag/detail/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TagDetailsResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UpdateResource"][];
                        "text/json": components["schemas"]["UpdateResource"][];
                        "text/plain": components["schemas"]["UpdateResource"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/wanted/cutoff": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    includeAuthor?: boolean;
                    monitored?: boolean;
                    page?: number;
                    pageSize?: number;
                    sortDirection?: components["schemas"]["SortDirection"];
                    sortKey?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BookResourcePagingResource"];
                        "text/json": components["schemas"]["BookResourcePagingResource"];
                        "text/plain": components["schemas"]["BookResourcePagingResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/wanted/cutoff/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BookResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/wanted/missing": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    includeAuthor?: boolean;
                    monitored?: boolean;
                    page?: number;
                    pageSize?: number;
                    sortDirection?: components["schemas"]["SortDirection"];
                    sortKey?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BookResourcePagingResource"];
                        "text/json": components["schemas"]["BookResourcePagingResource"];
                        "text/plain": components["schemas"]["BookResourcePagingResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/wanted/missing/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BookResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/content/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/feed/v1/calendar/readarr.ics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    futureDays?: number;
                    pastDays?: number;
                    tagList?: string;
                    unmonitored?: boolean;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: {
                    returnUrl?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "multipart/form-data": {
                        password?: string;
                        rememberMe?: string;
                        username?: string;
                    };
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ping": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PingResource"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PingResource"];
                    };
                };
            };
        };
        patch?: never;
        trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: {
        AddAuthorOptions: {
            booksToMonitor?: string[] | null;
            monitor?: components["schemas"]["MonitorTypes"];
            monitored?: boolean;
            searchForMissingBooks?: boolean;
        };
        AddBookOptions: {
            addType?: components["schemas"]["BookAddType"];
            searchForNewBook?: boolean;
        };
        /** @enum {string} */
        AllowFingerprinting: "never" | "newFiles" | "allFiles";
        ApiInfoResource: {
            current?: string | null;
            deprecated?: string[] | null;
        };
        /** @enum {string} */
        ApplyTags: "add" | "remove" | "replace";
        /** @enum {string} */
        AuthenticationRequiredType: "enabled" | "disabledForLocalAddresses";
        /** @enum {string} */
        AuthenticationType: "none" | "basic" | "forms" | "external";
        Author: {
            /** Format: date-time */
            added?: string;
            addOptions?: components["schemas"]["AddAuthorOptions"];
            /** Format: int32 */
            authorMetadataId?: number;
            books?: components["schemas"]["BookListLazyLoaded"];
            cleanName?: string | null;
            foreignAuthorId?: string | null;
            /** Format: int32 */
            id?: number;
            /** Format: date-time */
            lastInfoSync?: string | null;
            metadata?: components["schemas"]["AuthorMetadataLazyLoaded"];
            metadataProfile?: components["schemas"]["MetadataProfileLazyLoaded"];
            /** Format: int32 */
            metadataProfileId?: number;
            monitored?: boolean;
            monitorNewItems?: components["schemas"]["NewItemMonitorTypes"];
            name?: string | null;
            path?: string | null;
            qualityProfile?: components["schemas"]["QualityProfileLazyLoaded"];
            /** Format: int32 */
            qualityProfileId?: number;
            rootFolderPath?: string | null;
            series?: components["schemas"]["SeriesListLazyLoaded"];
            tags?: number[] | null;
        };
        AuthorEditorResource: {
            applyTags?: components["schemas"]["ApplyTags"];
            authorIds?: number[] | null;
            deleteFiles?: boolean;
            /** Format: int32 */
            metadataProfileId?: number | null;
            monitored?: boolean | null;
            monitorNewItems?: components["schemas"]["NewItemMonitorTypes"];
            moveFiles?: boolean;
            /** Format: int32 */
            qualityProfileId?: number | null;
            rootFolderPath?: string | null;
            tags?: number[] | null;
        };
        AuthorLazyLoaded: {
            readonly isLoaded?: boolean;
            value?: components["schemas"]["Author"];
        };
        AuthorMetadata: {
            aliases?: string[] | null;
            /** Format: date-time */
            born?: string | null;
            /** Format: date-time */
            died?: string | null;
            disambiguation?: string | null;
            foreignAuthorId?: string | null;
            gender?: string | null;
            genres?: string[] | null;
            hometown?: string | null;
            /** Format: int32 */
            id?: number;
            images?: components["schemas"]["MediaCover"][] | null;
            links?: components["schemas"]["Links"][] | null;
            name?: string | null;
            nameLastFirst?: string | null;
            overview?: string | null;
            ratings?: components["schemas"]["Ratings"];
            sortName?: string | null;
            sortNameLastFirst?: string | null;
            status?: components["schemas"]["AuthorStatusType"];
            titleSlug?: string | null;
        };
        AuthorMetadataLazyLoaded: {
            readonly isLoaded?: boolean;
            value?: components["schemas"]["AuthorMetadata"];
        };
        AuthorResource: {
            /** Format: date-time */
            added?: string;
            addOptions?: components["schemas"]["AddAuthorOptions"];
            /** Format: int32 */
            authorMetadataId?: number;
            authorName?: string | null;
            authorNameLastFirst?: string | null;
            cleanName?: string | null;
            disambiguation?: string | null;
            readonly ended?: boolean;
            folder?: string | null;
            foreignAuthorId?: string | null;
            genres?: string[] | null;
            /** Format: int32 */
            id?: number;
            images?: components["schemas"]["MediaCover"][] | null;
            lastBook?: components["schemas"]["Book"];
            links?: components["schemas"]["Links"][] | null;
            /** Format: int32 */
            metadataProfileId?: number;
            monitored?: boolean;
            monitorNewItems?: components["schemas"]["NewItemMonitorTypes"];
            nextBook?: components["schemas"]["Book"];
            overview?: string | null;
            path?: string | null;
            /** Format: int32 */
            qualityProfileId?: number;
            ratings?: components["schemas"]["Ratings"];
            remotePoster?: string | null;
            rootFolderPath?: string | null;
            sortName?: string | null;
            sortNameLastFirst?: string | null;
            statistics?: components["schemas"]["AuthorStatisticsResource"];
            status?: components["schemas"]["AuthorStatusType"];
            tags?: number[] | null;
            titleSlug?: string | null;
        };
        AuthorStatisticsResource: {
            /** Format: int32 */
            availableBookCount?: number;
            /** Format: int32 */
            bookCount?: number;
            /** Format: int32 */
            bookFileCount?: number;
            /** Format: double */
            readonly percentOfBooks?: number;
            /** Format: int64 */
            sizeOnDisk?: number;
            /** Format: int32 */
            totalBookCount?: number;
        };
        /** @enum {string} */
        AuthorStatusType: "continuing" | "ended";
        AuthorTitleInfo: {
            title?: string | null;
            titleWithoutYear?: string | null;
            /** Format: int32 */
            year?: number;
        };
        BackupResource: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            path?: string | null;
            /** Format: int64 */
            size?: number;
            /** Format: date-time */
            time?: string;
            type?: components["schemas"]["BackupType"];
        };
        /** @enum {string} */
        BackupType: "scheduled" | "manual" | "update";
        BlocklistBulkResource: {
            ids?: number[] | null;
        };
        BlocklistResource: {
            author?: components["schemas"]["AuthorResource"];
            /** Format: int32 */
            authorId?: number;
            bookIds?: number[] | null;
            customFormats?: components["schemas"]["CustomFormatResource"][] | null;
            /** Format: date-time */
            date?: string;
            /** Format: int32 */
            id?: number;
            indexer?: string | null;
            message?: string | null;
            protocol?: components["schemas"]["DownloadProtocol"];
            quality?: components["schemas"]["QualityModel"];
            sourceTitle?: string | null;
        };
        BlocklistResourcePagingResource: {
            /** Format: int32 */
            page?: number;
            /** Format: int32 */
            pageSize?: number;
            records?: components["schemas"]["BlocklistResource"][] | null;
            sortDirection?: components["schemas"]["SortDirection"];
            sortKey?: string | null;
            /** Format: int32 */
            totalRecords?: number;
        };
        Book: {
            /** Format: date-time */
            added?: string;
            addOptions?: components["schemas"]["AddBookOptions"];
            anyEditionOk?: boolean;
            author?: components["schemas"]["AuthorLazyLoaded"];
            authorMetadata?: components["schemas"]["AuthorMetadataLazyLoaded"];
            /** Format: int32 */
            authorMetadataId?: number;
            bookFiles?: components["schemas"]["BookFileListLazyLoaded"];
            cleanTitle?: string | null;
            editions?: components["schemas"]["EditionListLazyLoaded"];
            foreignBookId?: string | null;
            foreignEditionId?: string | null;
            genres?: string[] | null;
            /** Format: int32 */
            id?: number;
            /** Format: date-time */
            lastInfoSync?: string | null;
            /** Format: date-time */
            lastSearchTime?: string | null;
            links?: components["schemas"]["Links"][] | null;
            monitored?: boolean;
            ratings?: components["schemas"]["Ratings"];
            relatedBooks?: number[] | null;
            /** Format: date-time */
            releaseDate?: string | null;
            seriesLinks?: components["schemas"]["SeriesBookLinkListLazyLoaded"];
            title?: string | null;
            titleSlug?: string | null;
        };
        /** @enum {string} */
        BookAddType: "automatic" | "manual";
        BookEditorResource: {
            addImportListExclusion?: boolean | null;
            bookIds?: number[] | null;
            deleteFiles?: boolean | null;
            monitored?: boolean | null;
        };
        BookFile: {
            author?: components["schemas"]["AuthorLazyLoaded"];
            /** Format: int32 */
            calibreId?: number;
            /** Format: date-time */
            dateAdded?: string;
            edition?: components["schemas"]["EditionLazyLoaded"];
            /** Format: int32 */
            editionId?: number;
            /** Format: int32 */
            id?: number;
            indexerFlags?: components["schemas"]["IndexerFlags"];
            mediaInfo?: components["schemas"]["MediaInfoModel"];
            /** Format: date-time */
            modified?: string;
            originalFilePath?: string | null;
            /** Format: int32 */
            part?: number;
            /** Format: int32 */
            partCount?: number;
            path?: string | null;
            quality?: components["schemas"]["QualityModel"];
            releaseGroup?: string | null;
            sceneName?: string | null;
            /** Format: int64 */
            size?: number;
        };
        BookFileListLazyLoaded: {
            readonly isLoaded?: boolean;
            readonly value?: components["schemas"]["BookFile"][] | null;
        };
        BookFileListResource: {
            bookFileIds?: number[] | null;
            quality?: components["schemas"]["QualityModel"];
        };
        BookFileResource: {
            audioTags?: components["schemas"]["ParsedTrackInfo"];
            /** Format: int32 */
            authorId?: number;
            /** Format: int32 */
            bookId?: number;
            /** Format: date-time */
            dateAdded?: string;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            indexerFlags?: number | null;
            mediaInfo?: components["schemas"]["MediaInfoResource"];
            path?: string | null;
            quality?: components["schemas"]["QualityModel"];
            qualityCutoffNotMet?: boolean;
            /** Format: int32 */
            qualityWeight?: number;
            /** Format: int64 */
            size?: number;
        };
        BookLazyLoaded: {
            readonly isLoaded?: boolean;
            value?: components["schemas"]["Book"];
        };
        BookListLazyLoaded: {
            readonly isLoaded?: boolean;
            readonly value?: components["schemas"]["Book"][] | null;
        };
        BookResource: {
            /** Format: date-time */
            added?: string | null;
            addOptions?: components["schemas"]["AddBookOptions"];
            anyEditionOk?: boolean;
            author?: components["schemas"]["AuthorResource"];
            /** Format: int32 */
            authorId?: number;
            authorTitle?: string | null;
            disambiguation?: string | null;
            editions?: components["schemas"]["EditionResource"][] | null;
            foreignBookId?: string | null;
            foreignEditionId?: string | null;
            genres?: string[] | null;
            /** Format: int32 */
            id?: number;
            images?: components["schemas"]["MediaCover"][] | null;
            /** Format: date-time */
            lastSearchTime?: string | null;
            links?: components["schemas"]["Links"][] | null;
            monitored?: boolean;
            overview?: string | null;
            /** Format: int32 */
            pageCount?: number;
            ratings?: components["schemas"]["Ratings"];
            /** Format: date-time */
            releaseDate?: string | null;
            remoteCover?: string | null;
            seriesTitle?: string | null;
            statistics?: components["schemas"]["BookStatisticsResource"];
            title?: string | null;
            titleSlug?: string | null;
        };
        BookResourcePagingResource: {
            /** Format: int32 */
            page?: number;
            /** Format: int32 */
            pageSize?: number;
            records?: components["schemas"]["BookResource"][] | null;
            sortDirection?: components["schemas"]["SortDirection"];
            sortKey?: string | null;
            /** Format: int32 */
            totalRecords?: number;
        };
        BookshelfAuthorResource: {
            books?: components["schemas"]["BookResource"][] | null;
            /** Format: int32 */
            id?: number;
            monitored?: boolean | null;
        };
        BookshelfResource: {
            authors?: components["schemas"]["BookshelfAuthorResource"][] | null;
            monitoringOptions?: components["schemas"]["MonitoringOptions"];
            monitorNewItems?: components["schemas"]["NewItemMonitorTypes"];
        };
        BooksMonitoredResource: {
            bookIds?: number[] | null;
            monitored?: boolean;
        };
        BookStatisticsResource: {
            /** Format: int32 */
            bookCount?: number;
            /** Format: int32 */
            bookFileCount?: number;
            /** Format: double */
            readonly percentOfBooks?: number;
            /** Format: int64 */
            sizeOnDisk?: number;
            /** Format: int32 */
            totalBookCount?: number;
        };
        /** @enum {string} */
        CertificateValidationType: "enabled" | "disabledForLocalAddresses" | "disabled";
        Command: {
            clientUserAgent?: string | null;
            readonly completionMessage?: string | null;
            readonly isExclusive?: boolean;
            readonly isLongRunning?: boolean;
            readonly isTypeExclusive?: boolean;
            /** Format: date-time */
            lastExecutionTime?: string | null;
            /** Format: date-time */
            lastStartTime?: string | null;
            readonly name?: string | null;
            readonly requiresDiskAccess?: boolean;
            sendUpdatesToClient?: boolean;
            suppressMessages?: boolean;
            trigger?: components["schemas"]["CommandTrigger"];
            readonly updateScheduledTask?: boolean;
        };
        /** @enum {string} */
        CommandPriority: "normal" | "high" | "low";
        CommandResource: {
            body?: components["schemas"]["Command"];
            clientUserAgent?: string | null;
            commandName?: string | null;
            /** Format: date-span */
            duration?: string | null;
            /** Format: date-time */
            ended?: string | null;
            exception?: string | null;
            /** Format: int32 */
            id?: number;
            /** Format: date-time */
            lastExecutionTime?: string | null;
            message?: string | null;
            name?: string | null;
            priority?: components["schemas"]["CommandPriority"];
            /** Format: date-time */
            queued?: string;
            result?: components["schemas"]["CommandResult"];
            sendUpdatesToClient?: boolean;
            /** Format: date-time */
            started?: string | null;
            /** Format: date-time */
            stateChangeTime?: string | null;
            status?: components["schemas"]["CommandStatus"];
            trigger?: components["schemas"]["CommandTrigger"];
            updateScheduledTask?: boolean;
        };
        /** @enum {string} */
        CommandResult: "unknown" | "successful" | "unsuccessful";
        /** @enum {string} */
        CommandStatus: "queued" | "started" | "completed" | "failed" | "aborted" | "cancelled" | "orphaned";
        /** @enum {string} */
        CommandTrigger: "unspecified" | "manual" | "scheduled";
        CustomFilterResource: {
            filters?: {
                [key: string]: unknown;
            }[] | null;
            /** Format: int32 */
            id?: number;
            label?: string | null;
            type?: string | null;
        };
        CustomFormat: {
            /** Format: int32 */
            id?: number;
            includeCustomFormatWhenRenaming?: boolean;
            name?: string | null;
            specifications?: components["schemas"]["ICustomFormatSpecification"][] | null;
        };
        CustomFormatResource: {
            /** Format: int32 */
            id?: number;
            includeCustomFormatWhenRenaming?: boolean | null;
            name?: string | null;
            specifications?: components["schemas"]["CustomFormatSpecificationSchema"][] | null;
        };
        CustomFormatSpecificationSchema: {
            fields?: components["schemas"]["Field"][] | null;
            /** Format: int32 */
            id?: number;
            implementation?: string | null;
            implementationName?: string | null;
            infoLink?: string | null;
            name?: string | null;
            negate?: boolean;
            presets?: components["schemas"]["CustomFormatSpecificationSchema"][] | null;
            required?: boolean;
        };
        /** @enum {string} */
        DatabaseType: "sqLite" | "postgreSQL";
        DelayProfileResource: {
            bypassIfAboveCustomFormatScore?: boolean;
            bypassIfHighestQuality?: boolean;
            enableTorrent?: boolean;
            enableUsenet?: boolean;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            minimumCustomFormatScore?: number;
            /** Format: int32 */
            order?: number;
            preferredProtocol?: components["schemas"]["DownloadProtocol"];
            tags?: number[] | null;
            /** Format: int32 */
            torrentDelay?: number;
            /** Format: int32 */
            usenetDelay?: number;
        };
        DevelopmentConfigResource: {
            consoleLogLevel?: string | null;
            filterSentryEvents?: boolean;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            logRotate?: number;
            logSql?: boolean;
            metadataSource?: string | null;
        };
        DiskSpaceResource: {
            /** Format: int64 */
            freeSpace?: number;
            /** Format: int32 */
            id?: number;
            label?: string | null;
            path?: string | null;
            /** Format: int64 */
            totalSpace?: number;
        };
        DownloadClientBulkResource: {
            applyTags?: components["schemas"]["ApplyTags"];
            enable?: boolean | null;
            ids?: number[] | null;
            /** Format: int32 */
            priority?: number | null;
            removeCompletedDownloads?: boolean | null;
            removeFailedDownloads?: boolean | null;
            tags?: number[] | null;
        };
        DownloadClientConfigResource: {
            autoRedownloadFailed?: boolean;
            autoRedownloadFailedFromInteractiveSearch?: boolean;
            downloadClientWorkingFolders?: string | null;
            enableCompletedDownloadHandling?: boolean;
            /** Format: int32 */
            id?: number;
        };
        DownloadClientResource: {
            configContract?: string | null;
            enable?: boolean;
            fields?: components["schemas"]["Field"][] | null;
            /** Format: int32 */
            id?: number;
            implementation?: string | null;
            implementationName?: string | null;
            infoLink?: string | null;
            message?: components["schemas"]["ProviderMessage"];
            name?: string | null;
            presets?: components["schemas"]["DownloadClientResource"][] | null;
            /** Format: int32 */
            priority?: number;
            protocol?: components["schemas"]["DownloadProtocol"];
            removeCompletedDownloads?: boolean;
            removeFailedDownloads?: boolean;
            tags?: number[] | null;
        };
        /** @enum {string} */
        DownloadProtocol: "unknown" | "usenet" | "torrent";
        Edition: {
            asin?: string | null;
            book?: components["schemas"]["BookLazyLoaded"];
            bookFiles?: components["schemas"]["BookFileListLazyLoaded"];
            /** Format: int32 */
            bookId?: number;
            disambiguation?: string | null;
            foreignEditionId?: string | null;
            format?: string | null;
            /** Format: int32 */
            id?: number;
            images?: components["schemas"]["MediaCover"][] | null;
            isbn13?: string | null;
            isEbook?: boolean;
            language?: string | null;
            links?: components["schemas"]["Links"][] | null;
            manualAdd?: boolean;
            monitored?: boolean;
            overview?: string | null;
            /** Format: int32 */
            pageCount?: number;
            publisher?: string | null;
            ratings?: components["schemas"]["Ratings"];
            /** Format: date-time */
            releaseDate?: string | null;
            title?: string | null;
            titleSlug?: string | null;
        };
        EditionLazyLoaded: {
            readonly isLoaded?: boolean;
            value?: components["schemas"]["Edition"];
        };
        EditionListLazyLoaded: {
            readonly isLoaded?: boolean;
            readonly value?: components["schemas"]["Edition"][] | null;
        };
        EditionResource: {
            asin?: string | null;
            /** Format: int32 */
            bookId?: number;
            disambiguation?: string | null;
            foreignEditionId?: string | null;
            format?: string | null;
            /** Format: int32 */
            id?: number;
            images?: components["schemas"]["MediaCover"][] | null;
            isbn13?: string | null;
            isEbook?: boolean;
            language?: string | null;
            links?: components["schemas"]["Links"][] | null;
            manualAdd?: boolean;
            monitored?: boolean;
            overview?: string | null;
            /** Format: int32 */
            pageCount?: number;
            publisher?: string | null;
            ratings?: components["schemas"]["Ratings"];
            /** Format: date-time */
            releaseDate?: string | null;
            remoteCover?: string | null;
            title?: string | null;
            titleSlug?: string | null;
        };
        /** @enum {string} */
        EntityHistoryEventType: "unknown" | "grabbed" | "bookFileImported" | "downloadFailed" | "bookFileDeleted" | "bookFileRenamed" | "bookImportIncomplete" | "downloadImported" | "bookFileRetagged" | "downloadIgnored";
        Field: {
            advanced?: boolean;
            helpLink?: string | null;
            helpText?: string | null;
            helpTextWarning?: string | null;
            hidden?: string | null;
            isFloat?: boolean;
            label?: string | null;
            name?: string | null;
            /** Format: int32 */
            order?: number;
            placeholder?: string | null;
            section?: string | null;
            selectOptions?: components["schemas"]["SelectOption"][] | null;
            selectOptionsProviderAction?: string | null;
            type?: string | null;
            unit?: string | null;
            value?: unknown;
        };
        /** @enum {string} */
        FileDateType: "none" | "bookReleaseDate";
        /** @enum {string} */
        HealthCheckResult: "ok" | "notice" | "warning" | "error";
        HealthResource: {
            /** Format: int32 */
            id?: number;
            message?: string | null;
            source?: string | null;
            type?: components["schemas"]["HealthCheckResult"];
            wikiUrl?: string | null;
        };
        HistoryResource: {
            author?: components["schemas"]["AuthorResource"];
            /** Format: int32 */
            authorId?: number;
            book?: components["schemas"]["BookResource"];
            /** Format: int32 */
            bookId?: number;
            customFormats?: components["schemas"]["CustomFormatResource"][] | null;
            /** Format: int32 */
            customFormatScore?: number;
            data?: {
                [key: string]: string | null;
            } | null;
            /** Format: date-time */
            date?: string;
            downloadId?: string | null;
            eventType?: components["schemas"]["EntityHistoryEventType"];
            /** Format: int32 */
            id?: number;
            quality?: components["schemas"]["QualityModel"];
            qualityCutoffNotMet?: boolean;
            sourceTitle?: string | null;
        };
        HistoryResourcePagingResource: {
            /** Format: int32 */
            page?: number;
            /** Format: int32 */
            pageSize?: number;
            records?: components["schemas"]["HistoryResource"][] | null;
            sortDirection?: components["schemas"]["SortDirection"];
            sortKey?: string | null;
            /** Format: int32 */
            totalRecords?: number;
        };
        HostConfigResource: {
            analyticsEnabled?: boolean;
            apiKey?: string | null;
            applicationUrl?: string | null;
            authenticationMethod?: components["schemas"]["AuthenticationType"];
            authenticationRequired?: components["schemas"]["AuthenticationRequiredType"];
            backupFolder?: string | null;
            /** Format: int32 */
            backupInterval?: number;
            /** Format: int32 */
            backupRetention?: number;
            bindAddress?: string | null;
            branch?: string | null;
            certificateValidation?: components["schemas"]["CertificateValidationType"];
            consoleLogLevel?: string | null;
            enableSsl?: boolean;
            /** Format: int32 */
            id?: number;
            instanceName?: string | null;
            launchBrowser?: boolean;
            logLevel?: string | null;
            password?: string | null;
            passwordConfirmation?: string | null;
            /** Format: int32 */
            port?: number;
            proxyBypassFilter?: string | null;
            proxyBypassLocalAddresses?: boolean;
            proxyEnabled?: boolean;
            proxyHostname?: string | null;
            proxyPassword?: string | null;
            /** Format: int32 */
            proxyPort?: number;
            proxyType?: components["schemas"]["ProxyType"];
            proxyUsername?: string | null;
            sslCertPassword?: string | null;
            sslCertPath?: string | null;
            /** Format: int32 */
            sslPort?: number;
            trustCgnatIpAddresses?: boolean;
            updateAutomatically?: boolean;
            updateMechanism?: components["schemas"]["UpdateMechanism"];
            updateScriptPath?: string | null;
            urlBase?: string | null;
            username?: string | null;
        };
        ICustomFormatSpecification: {
            readonly implementationName?: string | null;
            readonly infoLink?: string | null;
            name?: string | null;
            negate?: boolean;
            /** Format: int32 */
            readonly order?: number;
            required?: boolean;
        };
        ImportListBulkResource: {
            applyTags?: components["schemas"]["ApplyTags"];
            enableAutomaticAdd?: boolean | null;
            ids?: number[] | null;
            /** Format: int32 */
            metadataProfileId?: number | null;
            /** Format: int32 */
            qualityProfileId?: number | null;
            rootFolderPath?: string | null;
            tags?: number[] | null;
        };
        ImportListExclusionResource: {
            authorName?: string | null;
            foreignId?: string | null;
            /** Format: int32 */
            id?: number;
        };
        /** @enum {string} */
        ImportListMonitorType: "none" | "specificBook" | "entireAuthor";
        ImportListResource: {
            configContract?: string | null;
            enableAutomaticAdd?: boolean;
            fields?: components["schemas"]["Field"][] | null;
            /** Format: int32 */
            id?: number;
            implementation?: string | null;
            implementationName?: string | null;
            infoLink?: string | null;
            /** Format: int32 */
            listOrder?: number;
            listType?: components["schemas"]["ImportListType"];
            message?: components["schemas"]["ProviderMessage"];
            /** Format: int32 */
            metadataProfileId?: number;
            /** Format: date-span */
            minRefreshInterval?: string;
            monitorNewItems?: components["schemas"]["NewItemMonitorTypes"];
            name?: string | null;
            presets?: components["schemas"]["ImportListResource"][] | null;
            /** Format: int32 */
            qualityProfileId?: number;
            rootFolderPath?: string | null;
            shouldMonitor?: components["schemas"]["ImportListMonitorType"];
            shouldMonitorExisting?: boolean;
            shouldSearch?: boolean;
            tags?: number[] | null;
        };
        /** @enum {string} */
        ImportListType: "program" | "goodreads" | "other";
        IndexerBulkResource: {
            applyTags?: components["schemas"]["ApplyTags"];
            enableAutomaticSearch?: boolean | null;
            enableInteractiveSearch?: boolean | null;
            enableRss?: boolean | null;
            ids?: number[] | null;
            /** Format: int32 */
            priority?: number | null;
            tags?: number[] | null;
        };
        IndexerConfigResource: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            maximumSize?: number;
            /** Format: int32 */
            minimumAge?: number;
            /** Format: int32 */
            retention?: number;
            /** Format: int32 */
            rssSyncInterval?: number;
        };
        IndexerFlagResource: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            readonly nameLower?: string | null;
        };
        /** @enum {string} */
        IndexerFlags: "freeleech" | "halfleech" | "doubleUpload" | "internal" | "scene" | "freeleech75" | "freeleech25";
        IndexerResource: {
            configContract?: string | null;
            /** Format: int32 */
            downloadClientId?: number;
            enableAutomaticSearch?: boolean;
            enableInteractiveSearch?: boolean;
            enableRss?: boolean;
            fields?: components["schemas"]["Field"][] | null;
            /** Format: int32 */
            id?: number;
            implementation?: string | null;
            implementationName?: string | null;
            infoLink?: string | null;
            message?: components["schemas"]["ProviderMessage"];
            name?: string | null;
            presets?: components["schemas"]["IndexerResource"][] | null;
            /** Format: int32 */
            priority?: number;
            protocol?: components["schemas"]["DownloadProtocol"];
            supportsRss?: boolean;
            supportsSearch?: boolean;
            tags?: number[] | null;
        };
        IsoCountry: {
            name?: string | null;
            twoLetterCode?: string | null;
        };
        LanguageResource: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            readonly nameLower?: string | null;
        };
        Links: {
            name?: string | null;
            url?: string | null;
        };
        LogFileResource: {
            contentsUrl?: string | null;
            downloadUrl?: string | null;
            filename?: string | null;
            /** Format: int32 */
            id?: number;
            /** Format: date-time */
            lastWriteTime?: string;
        };
        LogResource: {
            exception?: string | null;
            exceptionType?: string | null;
            /** Format: int32 */
            id?: number;
            level?: string | null;
            logger?: string | null;
            message?: string | null;
            method?: string | null;
            /** Format: date-time */
            time?: string;
        };
        LogResourcePagingResource: {
            /** Format: int32 */
            page?: number;
            /** Format: int32 */
            pageSize?: number;
            records?: components["schemas"]["LogResource"][] | null;
            sortDirection?: components["schemas"]["SortDirection"];
            sortKey?: string | null;
            /** Format: int32 */
            totalRecords?: number;
        };
        ManualImportResource: {
            additionalFile?: boolean;
            audioTags?: components["schemas"]["ParsedTrackInfo"];
            author?: components["schemas"]["AuthorResource"];
            book?: components["schemas"]["BookResource"];
            disableReleaseSwitching?: boolean;
            downloadId?: string | null;
            foreignEditionId?: string | null;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            indexerFlags?: number;
            name?: string | null;
            path?: string | null;
            quality?: components["schemas"]["QualityModel"];
            /** Format: int32 */
            qualityWeight?: number;
            rejections?: components["schemas"]["Rejection"][] | null;
            releaseGroup?: string | null;
            replaceExistingFiles?: boolean;
            /** Format: int64 */
            size?: number;
        };
        ManualImportUpdateResource: {
            additionalFile?: boolean;
            /** Format: int32 */
            authorId?: number | null;
            /** Format: int32 */
            bookId?: number | null;
            disableReleaseSwitching?: boolean;
            downloadId?: string | null;
            foreignEditionId?: string | null;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            indexerFlags?: number;
            name?: string | null;
            path?: string | null;
            quality?: components["schemas"]["QualityModel"];
            rejections?: components["schemas"]["Rejection"][] | null;
            releaseGroup?: string | null;
            replaceExistingFiles?: boolean;
        };
        MediaCover: {
            coverType?: components["schemas"]["MediaCoverTypes"];
            readonly extension?: string | null;
            remoteUrl?: string | null;
            url?: string | null;
        };
        /** @enum {string} */
        MediaCoverTypes: "unknown" | "poster" | "banner" | "fanart" | "screenshot" | "headshot" | "cover" | "disc" | "logo" | "clearlogo";
        MediaInfoModel: {
            /** Format: int32 */
            audioBitrate?: number;
            /** Format: int32 */
            audioBits?: number;
            /** Format: int32 */
            audioChannels?: number;
            audioFormat?: string | null;
            /** Format: int32 */
            audioSampleRate?: number;
        };
        MediaInfoResource: {
            audioBitRate?: string | null;
            audioBits?: string | null;
            /** Format: double */
            audioChannels?: number;
            audioCodec?: string | null;
            audioSampleRate?: string | null;
            /** Format: int32 */
            id?: number;
        };
        MediaManagementConfigResource: {
            allowFingerprinting?: components["schemas"]["AllowFingerprinting"];
            autoUnmonitorPreviouslyDownloadedBooks?: boolean;
            chmodFolder?: string | null;
            chownGroup?: string | null;
            copyUsingHardlinks?: boolean;
            createEmptyAuthorFolders?: boolean;
            deleteEmptyFolders?: boolean;
            downloadPropersAndRepacks?: components["schemas"]["ProperDownloadTypes"];
            extraFileExtensions?: string | null;
            fileDate?: components["schemas"]["FileDateType"];
            /** Format: int32 */
            id?: number;
            importExtraFiles?: boolean;
            /** Format: int32 */
            minimumFreeSpaceWhenImporting?: number;
            recycleBin?: string | null;
            /** Format: int32 */
            recycleBinCleanupDays?: number;
            rescanAfterRefresh?: components["schemas"]["RescanAfterRefreshType"];
            setPermissionsLinux?: boolean;
            skipFreeSpaceCheckWhenImporting?: boolean;
            watchLibraryForChanges?: boolean;
        };
        MetadataProfile: {
            allowedLanguages?: string | null;
            /** Format: int32 */
            id?: number;
            ignored?: string[] | null;
            /** Format: int32 */
            minPages?: number;
            /** Format: double */
            minPopularity?: number;
            name?: string | null;
            skipMissingDate?: boolean;
            skipMissingIsbn?: boolean;
            skipPartsAndSets?: boolean;
            skipSeriesSecondary?: boolean;
        };
        MetadataProfileLazyLoaded: {
            readonly isLoaded?: boolean;
            value?: components["schemas"]["MetadataProfile"];
        };
        MetadataProfileResource: {
            allowedLanguages?: string | null;
            /** Format: int32 */
            id?: number;
            ignored?: string[] | null;
            /** Format: int32 */
            minPages?: number;
            /** Format: double */
            minPopularity?: number;
            name?: string | null;
            skipMissingDate?: boolean;
            skipMissingIsbn?: boolean;
            skipPartsAndSets?: boolean;
            skipSeriesSecondary?: boolean;
        };
        MetadataProviderConfigResource: {
            embedMetadata?: boolean;
            /** Format: int32 */
            id?: number;
            scrubAudioTags?: boolean;
            updateCovers?: boolean;
            writeAudioTags?: components["schemas"]["WriteAudioTagsType"];
            writeBookTags?: components["schemas"]["WriteBookTagsType"];
        };
        MetadataResource: {
            configContract?: string | null;
            enable?: boolean;
            fields?: components["schemas"]["Field"][] | null;
            /** Format: int32 */
            id?: number;
            implementation?: string | null;
            implementationName?: string | null;
            infoLink?: string | null;
            message?: components["schemas"]["ProviderMessage"];
            name?: string | null;
            presets?: components["schemas"]["MetadataResource"][] | null;
            tags?: number[] | null;
        };
        MonitoringOptions: {
            booksToMonitor?: string[] | null;
            monitor?: components["schemas"]["MonitorTypes"];
            monitored?: boolean;
        };
        /** @enum {string} */
        MonitorTypes: "all" | "future" | "missing" | "existing" | "latest" | "first" | "none" | "unknown";
        NamingConfigResource: {
            authorFolderFormat?: string | null;
            /** Format: int32 */
            colonReplacementFormat?: number;
            /** Format: int32 */
            id?: number;
            includeAuthorName?: boolean;
            includeBookTitle?: boolean;
            includeQuality?: boolean;
            numberStyle?: string | null;
            renameBooks?: boolean;
            replaceIllegalCharacters?: boolean;
            replaceSpaces?: boolean;
            separator?: string | null;
            standardBookFormat?: string | null;
        };
        /** @enum {string} */
        NewItemMonitorTypes: "all" | "none" | "new";
        NotificationResource: {
            configContract?: string | null;
            fields?: components["schemas"]["Field"][] | null;
            /** Format: int32 */
            id?: number;
            implementation?: string | null;
            implementationName?: string | null;
            includeHealthWarnings?: boolean;
            infoLink?: string | null;
            link?: string | null;
            message?: components["schemas"]["ProviderMessage"];
            name?: string | null;
            onApplicationUpdate?: boolean;
            onAuthorAdded?: boolean;
            onAuthorDelete?: boolean;
            onBookDelete?: boolean;
            onBookFileDelete?: boolean;
            onBookFileDeleteForUpgrade?: boolean;
            onBookRetag?: boolean;
            onDownloadFailure?: boolean;
            onGrab?: boolean;
            onHealthIssue?: boolean;
            onImportFailure?: boolean;
            onReleaseImport?: boolean;
            onRename?: boolean;
            onUpgrade?: boolean;
            presets?: components["schemas"]["NotificationResource"][] | null;
            supportsOnApplicationUpdate?: boolean;
            supportsOnAuthorAdded?: boolean;
            supportsOnAuthorDelete?: boolean;
            supportsOnBookDelete?: boolean;
            supportsOnBookFileDelete?: boolean;
            supportsOnBookFileDeleteForUpgrade?: boolean;
            supportsOnBookRetag?: boolean;
            supportsOnDownloadFailure?: boolean;
            supportsOnGrab?: boolean;
            supportsOnHealthIssue?: boolean;
            supportsOnImportFailure?: boolean;
            supportsOnReleaseImport?: boolean;
            supportsOnRename?: boolean;
            supportsOnUpgrade?: boolean;
            tags?: number[] | null;
            testCommand?: string | null;
        };
        ParsedBookInfo: {
            authorName?: string | null;
            authorTitleInfo?: components["schemas"]["AuthorTitleInfo"];
            bookTitle?: string | null;
            discography?: boolean;
            /** Format: int32 */
            discographyEnd?: number;
            /** Format: int32 */
            discographyStart?: number;
            quality?: components["schemas"]["QualityModel"];
            releaseDate?: string | null;
            releaseGroup?: string | null;
            releaseHash?: string | null;
            releaseTitle?: string | null;
            releaseVersion?: string | null;
        };
        ParsedTrackInfo: {
            asin?: string | null;
            authorMBId?: string | null;
            authors?: string[] | null;
            readonly authorTitle?: string | null;
            bookMBId?: string | null;
            bookTitle?: string | null;
            catalogNumber?: string | null;
            cleanTitle?: string | null;
            country?: components["schemas"]["IsoCountry"];
            disambiguation?: string | null;
            /** Format: int32 */
            discCount?: number;
            /** Format: int32 */
            discNumber?: number;
            /** Format: date-span */
            duration?: string;
            goodreadsId?: string | null;
            isbn?: string | null;
            label?: string | null;
            language?: string | null;
            mediaInfo?: components["schemas"]["MediaInfoModel"];
            publisher?: string | null;
            quality?: components["schemas"]["QualityModel"];
            recordingMBId?: string | null;
            releaseGroup?: string | null;
            releaseHash?: string | null;
            releaseMBId?: string | null;
            seriesIndex?: string | null;
            seriesTitle?: string | null;
            source?: string | null;
            title?: string | null;
            trackMBId?: string | null;
            trackNumbers?: number[] | null;
            /** Format: int32 */
            year?: number;
        };
        ParseResource: {
            author?: components["schemas"]["AuthorResource"];
            books?: components["schemas"]["BookResource"][] | null;
            /** Format: int32 */
            id?: number;
            parsedBookInfo?: components["schemas"]["ParsedBookInfo"];
            title?: string | null;
        };
        PingResource: {
            status?: string | null;
        };
        ProfileFormatItem: {
            format?: components["schemas"]["CustomFormat"];
            /** Format: int32 */
            score?: number;
        };
        ProfileFormatItemResource: {
            /** Format: int32 */
            format?: number;
            /** Format: int32 */
            id?: number;
            name?: string | null;
            /** Format: int32 */
            score?: number;
        };
        /** @enum {string} */
        ProperDownloadTypes: "preferAndUpgrade" | "doNotUpgrade" | "doNotPrefer";
        ProviderMessage: {
            message?: string | null;
            type?: components["schemas"]["ProviderMessageType"];
        };
        /** @enum {string} */
        ProviderMessageType: "info" | "warning" | "error";
        /** @enum {string} */
        ProxyType: "http" | "socks4" | "socks5";
        Quality: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
        };
        QualityDefinitionResource: {
            /** Format: int32 */
            id?: number;
            /** Format: double */
            maxSize?: number | null;
            /** Format: double */
            minSize?: number | null;
            quality?: components["schemas"]["Quality"];
            title?: string | null;
            /** Format: int32 */
            weight?: number;
        };
        QualityModel: {
            quality?: components["schemas"]["Quality"];
            revision?: components["schemas"]["Revision"];
        };
        QualityProfile: {
            /** Format: int32 */
            cutoff?: number;
            /** Format: int32 */
            cutoffFormatScore?: number;
            formatItems?: components["schemas"]["ProfileFormatItem"][] | null;
            /** Format: int32 */
            id?: number;
            items?: components["schemas"]["QualityProfileQualityItem"][] | null;
            /** Format: int32 */
            minFormatScore?: number;
            name?: string | null;
            upgradeAllowed?: boolean;
        };
        QualityProfileLazyLoaded: {
            readonly isLoaded?: boolean;
            value?: components["schemas"]["QualityProfile"];
        };
        QualityProfileQualityItem: {
            allowed?: boolean;
            /** Format: int32 */
            id?: number;
            items?: components["schemas"]["QualityProfileQualityItem"][] | null;
            name?: string | null;
            quality?: components["schemas"]["Quality"];
        };
        QualityProfileQualityItemResource: {
            allowed?: boolean;
            /** Format: int32 */
            id?: number;
            items?: components["schemas"]["QualityProfileQualityItemResource"][] | null;
            name?: string | null;
            quality?: components["schemas"]["Quality"];
        };
        QualityProfileResource: {
            /** Format: int32 */
            cutoff?: number;
            /** Format: int32 */
            cutoffFormatScore?: number;
            formatItems?: components["schemas"]["ProfileFormatItemResource"][] | null;
            /** Format: int32 */
            id?: number;
            items?: components["schemas"]["QualityProfileQualityItemResource"][] | null;
            /** Format: int32 */
            minFormatScore?: number;
            name?: string | null;
            upgradeAllowed?: boolean;
        };
        QueueBulkResource: {
            ids?: number[] | null;
        };
        QueueResource: {
            author?: components["schemas"]["AuthorResource"];
            /** Format: int32 */
            authorId?: number | null;
            book?: components["schemas"]["BookResource"];
            /** Format: int32 */
            bookId?: number | null;
            customFormats?: components["schemas"]["CustomFormatResource"][] | null;
            /** Format: int32 */
            customFormatScore?: number;
            downloadClient?: string | null;
            downloadClientHasPostImportCategory?: boolean;
            downloadForced?: boolean;
            downloadId?: string | null;
            errorMessage?: string | null;
            /** Format: date-time */
            estimatedCompletionTime?: string | null;
            /** Format: int32 */
            id?: number;
            indexer?: string | null;
            outputPath?: string | null;
            protocol?: components["schemas"]["DownloadProtocol"];
            quality?: components["schemas"]["QualityModel"];
            /** Format: double */
            size?: number;
            /** Format: double */
            sizeleft?: number;
            status?: string | null;
            statusMessages?: components["schemas"]["TrackedDownloadStatusMessage"][] | null;
            /** Format: date-span */
            timeleft?: string | null;
            title?: string | null;
            trackedDownloadState?: components["schemas"]["TrackedDownloadState"];
            trackedDownloadStatus?: components["schemas"]["TrackedDownloadStatus"];
        };
        QueueResourcePagingResource: {
            /** Format: int32 */
            page?: number;
            /** Format: int32 */
            pageSize?: number;
            records?: components["schemas"]["QueueResource"][] | null;
            sortDirection?: components["schemas"]["SortDirection"];
            sortKey?: string | null;
            /** Format: int32 */
            totalRecords?: number;
        };
        QueueStatusResource: {
            /** Format: int32 */
            count?: number;
            errors?: boolean;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            totalCount?: number;
            /** Format: int32 */
            unknownCount?: number;
            unknownErrors?: boolean;
            unknownWarnings?: boolean;
            warnings?: boolean;
        };
        Ratings: {
            /** Format: double */
            readonly popularity?: number;
            /** Format: double */
            value?: number;
            /** Format: int32 */
            votes?: number;
        };
        Rejection: {
            reason?: string | null;
            type?: components["schemas"]["RejectionType"];
        };
        /** @enum {string} */
        RejectionType: "permanent" | "temporary";
        ReleaseProfileResource: {
            enabled?: boolean;
            /** Format: int32 */
            id?: number;
            ignored?: string[] | null;
            /** Format: int32 */
            indexerId?: number;
            required?: string[] | null;
            tags?: number[] | null;
        };
        ReleaseResource: {
            /** Format: int32 */
            age?: number;
            /** Format: double */
            ageHours?: number;
            /** Format: double */
            ageMinutes?: number;
            airDate?: string | null;
            approved?: boolean;
            /** Format: int32 */
            authorId?: number | null;
            authorName?: string | null;
            /** Format: int32 */
            bookId?: number | null;
            bookTitle?: string | null;
            commentUrl?: string | null;
            customFormats?: components["schemas"]["CustomFormatResource"][] | null;
            /** Format: int32 */
            customFormatScore?: number;
            discography?: boolean;
            downloadAllowed?: boolean;
            downloadClient?: string | null;
            /** Format: int32 */
            downloadClientId?: number | null;
            downloadUrl?: string | null;
            guid?: string | null;
            /** Format: int32 */
            id?: number;
            indexer?: string | null;
            /** Format: int32 */
            indexerFlags?: number;
            /** Format: int32 */
            indexerId?: number;
            infoHash?: string | null;
            infoUrl?: string | null;
            /** Format: int32 */
            leechers?: number | null;
            magnetUrl?: string | null;
            protocol?: components["schemas"]["DownloadProtocol"];
            /** Format: date-time */
            publishDate?: string;
            quality?: components["schemas"]["QualityModel"];
            /** Format: int32 */
            qualityWeight?: number;
            rejected?: boolean;
            rejections?: string[] | null;
            releaseGroup?: string | null;
            releaseHash?: string | null;
            /** Format: int32 */
            releaseWeight?: number;
            sceneSource?: boolean;
            /** Format: int32 */
            seeders?: number | null;
            /** Format: int64 */
            size?: number;
            subGroup?: string | null;
            temporarilyRejected?: boolean;
            title?: string | null;
        };
        RemotePathMappingResource: {
            host?: string | null;
            /** Format: int32 */
            id?: number;
            localPath?: string | null;
            remotePath?: string | null;
        };
        RenameBookResource: {
            /** Format: int32 */
            authorId?: number;
            /** Format: int32 */
            bookFileId?: number;
            /** Format: int32 */
            bookId?: number;
            existingPath?: string | null;
            /** Format: int32 */
            id?: number;
            newPath?: string | null;
        };
        /** @enum {string} */
        RescanAfterRefreshType: "always" | "afterManual" | "never";
        RetagBookResource: {
            /** Format: int32 */
            authorId?: number;
            /** Format: int32 */
            bookFileId?: number;
            /** Format: int32 */
            bookId?: number;
            changes?: components["schemas"]["TagDifference"][] | null;
            /** Format: int32 */
            id?: number;
            path?: string | null;
            trackNumbers?: number[] | null;
        };
        Revision: {
            isRepack?: boolean;
            /** Format: int32 */
            real?: number;
            /** Format: int32 */
            version?: number;
        };
        RootFolderResource: {
            accessible?: boolean;
            /** Format: int32 */
            defaultMetadataProfileId?: number;
            defaultMonitorOption?: components["schemas"]["MonitorTypes"];
            defaultNewItemMonitorOption?: components["schemas"]["NewItemMonitorTypes"];
            /** Format: int32 */
            defaultQualityProfileId?: number;
            defaultTags?: number[] | null;
            /** Format: int64 */
            freeSpace?: number | null;
            host?: string | null;
            /** Format: int32 */
            id?: number;
            isCalibreLibrary?: boolean;
            library?: string | null;
            name?: string | null;
            outputFormat?: string | null;
            outputProfile?: string | null;
            password?: string | null;
            path?: string | null;
            /** Format: int32 */
            port?: number;
            /** Format: int64 */
            totalSpace?: number | null;
            urlBase?: string | null;
            username?: string | null;
            useSsl?: boolean;
        };
        /** @enum {string} */
        RuntimeMode: "console" | "service" | "tray";
        SelectOption: {
            hint?: string | null;
            name?: string | null;
            /** Format: int32 */
            order?: number;
            /** Format: int32 */
            value?: number;
        };
        Series: {
            books?: components["schemas"]["BookListLazyLoaded"];
            description?: string | null;
            foreignAuthorId?: string | null;
            foreignSeriesId?: string | null;
            /** Format: int32 */
            id?: number;
            linkItems?: components["schemas"]["SeriesBookLinkListLazyLoaded"];
            numbered?: boolean;
            /** Format: int32 */
            primaryWorkCount?: number;
            title?: string | null;
            /** Format: int32 */
            workCount?: number;
        };
        SeriesBookLink: {
            book?: components["schemas"]["BookLazyLoaded"];
            /** Format: int32 */
            bookId?: number;
            /** Format: int32 */
            id?: number;
            isPrimary?: boolean;
            position?: string | null;
            series?: components["schemas"]["SeriesLazyLoaded"];
            /** Format: int32 */
            seriesId?: number;
            /** Format: int32 */
            seriesPosition?: number;
        };
        SeriesBookLinkListLazyLoaded: {
            readonly isLoaded?: boolean;
            readonly value?: components["schemas"]["SeriesBookLink"][] | null;
        };
        SeriesBookLinkResource: {
            /** Format: int32 */
            bookId?: number;
            /** Format: int32 */
            id?: number;
            position?: string | null;
            /** Format: int32 */
            seriesId?: number;
            /** Format: int32 */
            seriesPosition?: number;
        };
        SeriesLazyLoaded: {
            readonly isLoaded?: boolean;
            value?: components["schemas"]["Series"];
        };
        SeriesListLazyLoaded: {
            readonly isLoaded?: boolean;
            readonly value?: components["schemas"]["Series"][] | null;
        };
        SeriesResource: {
            description?: string | null;
            /** Format: int32 */
            id?: number;
            links?: components["schemas"]["SeriesBookLinkResource"][] | null;
            title?: string | null;
        };
        /** @enum {string} */
        SortDirection: "default" | "ascending" | "descending";
        SystemResource: {
            appData?: string | null;
            appName?: string | null;
            authentication?: components["schemas"]["AuthenticationType"];
            branch?: string | null;
            /** Format: date-time */
            buildTime?: string;
            databaseType?: components["schemas"]["DatabaseType"];
            databaseVersion?: string | null;
            instanceName?: string | null;
            isAdmin?: boolean;
            isDebug?: boolean;
            isDocker?: boolean;
            isLinux?: boolean;
            isNetCore?: boolean;
            isOsx?: boolean;
            isProduction?: boolean;
            isUserInteractive?: boolean;
            isWindows?: boolean;
            /** Format: int32 */
            migrationVersion?: number;
            mode?: components["schemas"]["RuntimeMode"];
            osName?: string | null;
            osVersion?: string | null;
            packageAuthor?: string | null;
            packageUpdateMechanism?: components["schemas"]["UpdateMechanism"];
            packageUpdateMechanismMessage?: string | null;
            packageVersion?: string | null;
            runtimeName?: string | null;
            runtimeVersion?: string | null;
            /** Format: date-time */
            startTime?: string;
            startupPath?: string | null;
            urlBase?: string | null;
            version?: string | null;
        };
        TagDetailsResource: {
            authorIds?: number[] | null;
            delayProfileIds?: number[] | null;
            downloadClientIds?: number[] | null;
            /** Format: int32 */
            id?: number;
            importListIds?: number[] | null;
            indexerIds?: number[] | null;
            label?: string | null;
            notificationIds?: number[] | null;
            restrictionIds?: number[] | null;
        };
        TagDifference: {
            field?: string | null;
            newValue?: string | null;
            oldValue?: string | null;
        };
        TagResource: {
            /** Format: int32 */
            id?: number;
            label?: string | null;
        };
        TaskResource: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            interval?: number;
            /** Format: date-span */
            readonly lastDuration?: string;
            /** Format: date-time */
            lastExecution?: string;
            /** Format: date-time */
            lastStartTime?: string;
            name?: string | null;
            /** Format: date-time */
            nextExecution?: string;
            taskName?: string | null;
        };
        /** @enum {string} */
        TrackedDownloadState: "downloading" | "downloadFailed" | "downloadFailedPending" | "importPending" | "importing" | "importFailed" | "imported" | "ignored";
        /** @enum {string} */
        TrackedDownloadStatus: "ok" | "warning" | "error";
        TrackedDownloadStatusMessage: {
            messages?: string[] | null;
            title?: string | null;
        };
        UiConfigResource: {
            calendarWeekColumnHeader?: string | null;
            enableColorImpairedMode?: boolean;
            /** Format: int32 */
            firstDayOfWeek?: number;
            /** Format: int32 */
            id?: number;
            longDateFormat?: string | null;
            shortDateFormat?: string | null;
            showRelativeDates?: boolean;
            theme?: string | null;
            timeFormat?: string | null;
            /** Format: int32 */
            uiLanguage?: number;
        };
        UpdateChanges: {
            fixed?: string[] | null;
            new?: string[] | null;
        };
        /** @enum {string} */
        UpdateMechanism: "builtIn" | "script" | "external" | "apt" | "docker";
        UpdateResource: {
            branch?: string | null;
            changes?: components["schemas"]["UpdateChanges"];
            fileName?: string | null;
            hash?: string | null;
            /** Format: int32 */
            id?: number;
            installable?: boolean;
            installed?: boolean;
            /** Format: date-time */
            installedOn?: string | null;
            latest?: boolean;
            /** Format: date-time */
            releaseDate?: string;
            url?: string | null;
            version?: string | null;
        };
        /** @enum {string} */
        WriteAudioTagsType: "no" | "newFiles" | "allFiles" | "sync";
        /** @enum {string} */
        WriteBookTagsType: "newFiles" | "allFiles" | "sync";
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
