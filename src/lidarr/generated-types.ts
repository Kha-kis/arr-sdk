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
    "/api/v1/album": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    albumIds?: number[];
                    artistId?: number;
                    foreignAlbumId?: string;
                    includeAllArtistAlbums?: boolean;
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
                        "application/json": components["schemas"]["AlbumResource"][];
                        "text/json": components["schemas"]["AlbumResource"][];
                        "text/plain": components["schemas"]["AlbumResource"][];
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
                    "application/*+json": components["schemas"]["AlbumResource"];
                    "application/json": components["schemas"]["AlbumResource"];
                    "text/json": components["schemas"]["AlbumResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AlbumResource"];
                        "text/json": components["schemas"]["AlbumResource"];
                        "text/plain": components["schemas"]["AlbumResource"];
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
    "/api/v1/album/{id}": {
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
                        "application/json": components["schemas"]["AlbumResource"];
                        "text/json": components["schemas"]["AlbumResource"];
                        "text/plain": components["schemas"]["AlbumResource"];
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
                    "application/*+json": components["schemas"]["AlbumResource"];
                    "application/json": components["schemas"]["AlbumResource"];
                    "text/json": components["schemas"]["AlbumResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AlbumResource"];
                        "text/json": components["schemas"]["AlbumResource"];
                        "text/plain": components["schemas"]["AlbumResource"];
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
    "/api/v1/album/lookup": {
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
                    content: {
                        "application/json": components["schemas"]["AlbumResource"][];
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
    "/api/v1/album/monitor": {
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
                    "application/*+json": components["schemas"]["AlbumsMonitoredResource"];
                    "application/json": components["schemas"]["AlbumsMonitoredResource"];
                    "text/json": components["schemas"]["AlbumsMonitoredResource"];
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
    "/api/v1/albumstudio": {
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
                    "application/json": components["schemas"]["AlbumStudioResource"];
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
    "/api/v1/artist": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    mbId?: string;
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
                        "application/json": components["schemas"]["ArtistResource"][];
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
                    "application/json": components["schemas"]["ArtistResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ArtistResource"];
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
    "/api/v1/artist/{id}": {
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
                        "application/json": components["schemas"]["ArtistResource"];
                        "text/json": components["schemas"]["ArtistResource"];
                        "text/plain": components["schemas"]["ArtistResource"];
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
                    "application/json": components["schemas"]["ArtistResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ArtistResource"];
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
    "/api/v1/artist/editor": {
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
                    "application/*+json": components["schemas"]["ArtistEditorResource"];
                    "application/json": components["schemas"]["ArtistEditorResource"];
                    "text/json": components["schemas"]["ArtistEditorResource"];
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
                    "application/*+json": components["schemas"]["ArtistEditorResource"];
                    "application/json": components["schemas"]["ArtistEditorResource"];
                    "text/json": components["schemas"]["ArtistEditorResource"];
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
    "/api/v1/artist/lookup": {
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
                    content: {
                        "application/json": components["schemas"]["ArtistResource"][];
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
    "/api/v1/autotagging": {
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
                        "application/json": components["schemas"]["AutoTaggingResource"][];
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
                    "application/json": components["schemas"]["AutoTaggingResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AutoTaggingResource"];
                        "text/json": components["schemas"]["AutoTaggingResource"];
                        "text/plain": components["schemas"]["AutoTaggingResource"];
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
    "/api/v1/autotagging/{id}": {
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
                        "application/json": components["schemas"]["AutoTaggingResource"];
                        "text/json": components["schemas"]["AutoTaggingResource"];
                        "text/plain": components["schemas"]["AutoTaggingResource"];
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
                    "application/json": components["schemas"]["AutoTaggingResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AutoTaggingResource"];
                        "text/json": components["schemas"]["AutoTaggingResource"];
                        "text/plain": components["schemas"]["AutoTaggingResource"];
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
    "/api/v1/autotagging/schema": {
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
                    includeArtist?: boolean;
                    start?: string;
                    tags?: string;
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
                        "application/json": components["schemas"]["AlbumResource"][];
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
                        "application/json": components["schemas"]["AlbumResource"];
                        "text/json": components["schemas"]["AlbumResource"];
                        "text/plain": components["schemas"]["AlbumResource"];
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
                    "application/json": components["schemas"]["CommandResource"];
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
                        "text/json": components["schemas"]["CommandResource"];
                        "text/plain": components["schemas"]["CommandResource"];
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
                        "text/json": components["schemas"]["DownloadClientConfigResource"];
                        "text/plain": components["schemas"]["DownloadClientConfigResource"];
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
                    "application/json": components["schemas"]["DownloadClientConfigResource"];
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
                        "text/json": components["schemas"]["HostConfigResource"];
                        "text/plain": components["schemas"]["HostConfigResource"];
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
                        "text/json": components["schemas"]["IndexerConfigResource"];
                        "text/plain": components["schemas"]["IndexerConfigResource"];
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
                    "application/json": components["schemas"]["IndexerConfigResource"];
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
                        "text/json": components["schemas"]["MediaManagementConfigResource"];
                        "text/plain": components["schemas"]["MediaManagementConfigResource"];
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
                    "application/json": components["schemas"]["MediaManagementConfigResource"];
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
                        "text/json": components["schemas"]["MetadataProviderConfigResource"];
                        "text/plain": components["schemas"]["MetadataProviderConfigResource"];
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
                    "application/json": components["schemas"]["MetadataProviderConfigResource"];
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
                        "text/json": components["schemas"]["NamingConfigResource"];
                        "text/plain": components["schemas"]["NamingConfigResource"];
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
                    artistFolderFormat?: string;
                    colonReplacementFormat?: number;
                    id?: number;
                    includeAlbumTitle?: boolean;
                    includeArtistName?: boolean;
                    includeQuality?: boolean;
                    multiDiscTrackFormat?: string;
                    numberStyle?: string;
                    renameTracks?: boolean;
                    replaceIllegalCharacters?: boolean;
                    replaceSpaces?: boolean;
                    resourceName?: string;
                    separator?: string;
                    standardTrackFormat?: string;
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
                        "text/json": components["schemas"]["UiConfigResource"];
                        "text/plain": components["schemas"]["UiConfigResource"];
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
                    "application/json": components["schemas"]["UiConfigResource"];
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
                    "application/json": components["schemas"]["CustomFilterResource"];
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
                        "text/json": components["schemas"]["CustomFilterResource"];
                        "text/plain": components["schemas"]["CustomFilterResource"];
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
                    "application/json": components["schemas"]["CustomFilterResource"];
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
                        "text/json": components["schemas"]["CustomFormatResource"];
                        "text/plain": components["schemas"]["CustomFormatResource"];
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
    "/api/v1/customformat/bulk": {
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
                    "application/json": components["schemas"]["CustomFormatBulkResource"];
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
                    "application/json": components["schemas"]["CustomFormatBulkResource"];
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
                        "text/json": components["schemas"]["DelayProfileResource"];
                        "text/plain": components["schemas"]["DelayProfileResource"];
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
                        "text/json": components["schemas"]["DownloadClientResource"];
                        "text/plain": components["schemas"]["DownloadClientResource"];
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
                    id: number;
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
                    albumId?: number;
                    artistIds?: number[];
                    downloadId?: string;
                    eventType?: number[];
                    includeAlbum?: boolean;
                    includeArtist?: boolean;
                    includeTrack?: boolean;
                    page?: number;
                    pageSize?: number;
                    quality?: number[];
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
    "/api/v1/history/artist": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    albumId?: number;
                    artistId?: number;
                    eventType?: components["schemas"]["EntityHistoryEventType"];
                    includeAlbum?: boolean;
                    includeArtist?: boolean;
                    includeTrack?: boolean;
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
                    includeAlbum?: boolean;
                    includeArtist?: boolean;
                    includeTrack?: boolean;
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
                        "text/json": components["schemas"]["ImportListResource"];
                        "text/plain": components["schemas"]["ImportListResource"];
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
                    id: number;
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
                        "text/json": components["schemas"]["ImportListExclusionResource"];
                        "text/plain": components["schemas"]["ImportListExclusionResource"];
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
                        "text/json": components["schemas"]["IndexerResource"];
                        "text/plain": components["schemas"]["IndexerResource"];
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
                    id: number;
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
                        "text/json": components["schemas"]["LanguageResource"];
                        "text/plain": components["schemas"]["LanguageResource"];
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
                        "application/json": components["schemas"]["LocalizationResource"];
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
                    artistId?: number;
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
    "/api/v1/mediacover/album/{albumId}/{filename}": {
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
                    albumId: number;
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
    "/api/v1/mediacover/artist/{artistId}/{filename}": {
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
                    artistId: number;
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
                        "text/json": components["schemas"]["MetadataResource"];
                        "text/plain": components["schemas"]["MetadataResource"];
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
                    id: number;
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
                        "text/json": components["schemas"]["MetadataProfileResource"];
                        "text/plain": components["schemas"]["MetadataProfileResource"];
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
                        "text/json": components["schemas"]["NotificationResource"];
                        "text/plain": components["schemas"]["NotificationResource"];
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
                    id: number;
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
                        "text/json": components["schemas"]["QualityDefinitionResource"];
                        "text/plain": components["schemas"]["QualityDefinitionResource"];
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
                        "text/json": components["schemas"]["QualityProfileResource"];
                        "text/plain": components["schemas"]["QualityProfileResource"];
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
                    artistIds?: number[];
                    includeAlbum?: boolean;
                    includeArtist?: boolean;
                    includeUnknownArtistItems?: boolean;
                    page?: number;
                    pageSize?: number;
                    protocol?: components["schemas"]["DownloadProtocol"];
                    quality?: number[];
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
                    albumIds?: number[];
                    artistId?: number;
                    includeAlbum?: boolean;
                    includeArtist?: boolean;
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
                    albumId?: number;
                    artistId?: number;
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
                        "text/json": components["schemas"]["ReleaseProfileResource"];
                        "text/plain": components["schemas"]["ReleaseProfileResource"];
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
                        "text/json": components["schemas"]["RemotePathMappingResource"];
                        "text/plain": components["schemas"]["RemotePathMappingResource"];
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
                    albumId?: number;
                    artistId?: number;
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
                        "application/json": components["schemas"]["RenameTrackResource"][];
                        "text/json": components["schemas"]["RenameTrackResource"][];
                        "text/plain": components["schemas"]["RenameTrackResource"][];
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
                    albumId?: number;
                    artistId?: number;
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
                        "application/json": components["schemas"]["RetagTrackResource"][];
                        "text/json": components["schemas"]["RetagTrackResource"][];
                        "text/plain": components["schemas"]["RetagTrackResource"][];
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
                    "application/json": components["schemas"]["RootFolderResource"];
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
                        "text/json": components["schemas"]["RootFolderResource"];
                        "text/plain": components["schemas"]["RootFolderResource"];
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
                    content: {
                        "application/json": components["schemas"]["SearchResource"][];
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
                        "text/json": components["schemas"]["TaskResource"];
                        "text/plain": components["schemas"]["TaskResource"];
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
                    "application/json": components["schemas"]["TagResource"];
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
                        "text/json": components["schemas"]["TagResource"];
                        "text/plain": components["schemas"]["TagResource"];
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
                    "application/json": components["schemas"]["TagResource"];
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
                        "text/json": components["schemas"]["TagDetailsResource"];
                        "text/plain": components["schemas"]["TagDetailsResource"];
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
    "/api/v1/track": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    albumId?: number;
                    albumReleaseId?: number;
                    artistId?: number;
                    trackIds?: number[];
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
                        "application/json": components["schemas"]["TrackResource"][];
                        "text/json": components["schemas"]["TrackResource"][];
                        "text/plain": components["schemas"]["TrackResource"][];
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
    "/api/v1/track/{id}": {
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
                        "application/json": components["schemas"]["TrackResource"];
                        "text/json": components["schemas"]["TrackResource"];
                        "text/plain": components["schemas"]["TrackResource"];
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
    "/api/v1/trackfile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    albumId?: number[];
                    artistId?: number;
                    trackFileIds?: number[];
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
                        "application/json": components["schemas"]["TrackFileResource"][];
                        "text/json": components["schemas"]["TrackFileResource"][];
                        "text/plain": components["schemas"]["TrackFileResource"][];
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
    "/api/v1/trackfile/{id}": {
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
                        "application/json": components["schemas"]["TrackFileResource"];
                        "text/json": components["schemas"]["TrackFileResource"];
                        "text/plain": components["schemas"]["TrackFileResource"];
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
                    "application/*+json": components["schemas"]["TrackFileResource"];
                    "application/json": components["schemas"]["TrackFileResource"];
                    "text/json": components["schemas"]["TrackFileResource"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TrackFileResource"];
                        "text/json": components["schemas"]["TrackFileResource"];
                        "text/plain": components["schemas"]["TrackFileResource"];
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
    "/api/v1/trackfile/bulk": {
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
                    "application/*+json": components["schemas"]["TrackFileListResource"];
                    "application/json": components["schemas"]["TrackFileListResource"];
                    "text/json": components["schemas"]["TrackFileListResource"];
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
    "/api/v1/trackfile/editor": {
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
                    "application/*+json": components["schemas"]["TrackFileListResource"];
                    "application/json": components["schemas"]["TrackFileListResource"];
                    "text/json": components["schemas"]["TrackFileListResource"];
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
                    includeArtist?: boolean;
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
                        "application/json": components["schemas"]["AlbumResourcePagingResource"];
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
                        "application/json": components["schemas"]["AlbumResource"];
                        "text/json": components["schemas"]["AlbumResource"];
                        "text/plain": components["schemas"]["AlbumResource"];
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
                    includeArtist?: boolean;
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
                        "application/json": components["schemas"]["AlbumResourcePagingResource"];
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
                        "application/json": components["schemas"]["AlbumResource"];
                        "text/json": components["schemas"]["AlbumResource"];
                        "text/plain": components["schemas"]["AlbumResource"];
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
    "/feed/v1/calendar/lidarr.ics": {
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
                    tags?: string;
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
        AddAlbumOptions: {
            addType?: components["schemas"]["AlbumAddType"];
            searchForNewAlbum?: boolean;
        };
        AddArtistOptions: {
            albumsToMonitor?: string[] | null;
            monitor?: components["schemas"]["MonitorTypes"];
            monitored?: boolean;
            searchForMissingAlbums?: boolean;
        };
        /** @enum {string} */
        AlbumAddType: "automatic" | "manual";
        AlbumReleaseResource: {
            /** Format: int32 */
            albumId?: number;
            country?: string[] | null;
            disambiguation?: string | null;
            /** Format: int32 */
            duration?: number;
            foreignReleaseId?: string | null;
            format?: string | null;
            /** Format: int32 */
            id?: number;
            label?: string[] | null;
            media?: components["schemas"]["MediumResource"][] | null;
            /** Format: int32 */
            readonly mediumCount?: number;
            monitored?: boolean;
            status?: string | null;
            title?: string | null;
            /** Format: int32 */
            trackCount?: number;
        };
        AlbumResource: {
            addOptions?: components["schemas"]["AddAlbumOptions"];
            albumType?: string | null;
            anyReleaseOk?: boolean;
            artist?: components["schemas"]["ArtistResource"];
            /** Format: int32 */
            artistId?: number;
            disambiguation?: string | null;
            /** Format: int32 */
            duration?: number;
            foreignAlbumId?: string | null;
            genres?: string[] | null;
            /** Format: int32 */
            id?: number;
            images?: components["schemas"]["MediaCover"][] | null;
            /** Format: date-time */
            lastSearchTime?: string | null;
            links?: components["schemas"]["Links"][] | null;
            media?: components["schemas"]["MediumResource"][] | null;
            /** Format: int32 */
            readonly mediumCount?: number;
            monitored?: boolean;
            overview?: string | null;
            /** Format: int32 */
            profileId?: number;
            ratings?: components["schemas"]["Ratings"];
            /** Format: date-time */
            releaseDate?: string | null;
            releases?: components["schemas"]["AlbumReleaseResource"][] | null;
            remoteCover?: string | null;
            secondaryTypes?: string[] | null;
            statistics?: components["schemas"]["AlbumStatisticsResource"];
            title?: string | null;
        };
        AlbumResourcePagingResource: {
            /** Format: int32 */
            page?: number;
            /** Format: int32 */
            pageSize?: number;
            records?: components["schemas"]["AlbumResource"][] | null;
            sortDirection?: components["schemas"]["SortDirection"];
            sortKey?: string | null;
            /** Format: int32 */
            totalRecords?: number;
        };
        AlbumsMonitoredResource: {
            albumIds?: number[] | null;
            monitored?: boolean;
        };
        AlbumStatisticsResource: {
            /** Format: double */
            readonly percentOfTracks?: number;
            /** Format: int64 */
            sizeOnDisk?: number;
            /** Format: int32 */
            totalTrackCount?: number;
            /** Format: int32 */
            trackCount?: number;
            /** Format: int32 */
            trackFileCount?: number;
        };
        AlbumStudioArtistResource: {
            albums?: components["schemas"]["AlbumResource"][] | null;
            /** Format: int32 */
            id?: number;
            monitored?: boolean | null;
        };
        AlbumStudioResource: {
            artist?: components["schemas"]["AlbumStudioArtistResource"][] | null;
            monitoringOptions?: components["schemas"]["MonitoringOptions"];
            monitorNewItems?: components["schemas"]["NewItemMonitorTypes"];
        };
        /** @enum {string} */
        AllowFingerprinting: "never" | "newFiles" | "allFiles";
        /** @enum {string} */
        ApplyTags: "add" | "remove" | "replace";
        ArtistEditorResource: {
            addImportListExclusion?: boolean;
            applyTags?: components["schemas"]["ApplyTags"];
            artistIds?: number[] | null;
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
        ArtistResource: {
            /** Format: date-time */
            added?: string;
            addOptions?: components["schemas"]["AddArtistOptions"];
            allMusicId?: string | null;
            artistName?: string | null;
            artistType?: string | null;
            cleanName?: string | null;
            disambiguation?: string | null;
            /** Format: int32 */
            discogsId?: number;
            readonly ended?: boolean;
            folder?: string | null;
            foreignArtistId?: string | null;
            genres?: string[] | null;
            /** Format: int32 */
            id?: number;
            images?: components["schemas"]["MediaCover"][] | null;
            lastAlbum?: components["schemas"]["AlbumResource"];
            links?: components["schemas"]["Links"][] | null;
            mbId?: string | null;
            members?: components["schemas"]["Member"][] | null;
            /** Format: int32 */
            metadataProfileId?: number;
            monitored?: boolean;
            monitorNewItems?: components["schemas"]["NewItemMonitorTypes"];
            nextAlbum?: components["schemas"]["AlbumResource"];
            overview?: string | null;
            path?: string | null;
            /** Format: int32 */
            qualityProfileId?: number;
            ratings?: components["schemas"]["Ratings"];
            remotePoster?: string | null;
            rootFolderPath?: string | null;
            sortName?: string | null;
            statistics?: components["schemas"]["ArtistStatisticsResource"];
            status?: components["schemas"]["ArtistStatusType"];
            /** Format: int32 */
            tadbId?: number;
            tags?: number[] | null;
        };
        ArtistStatisticsResource: {
            /** Format: int32 */
            albumCount?: number;
            /** Format: double */
            readonly percentOfTracks?: number;
            /** Format: int64 */
            sizeOnDisk?: number;
            /** Format: int32 */
            totalTrackCount?: number;
            /** Format: int32 */
            trackCount?: number;
            /** Format: int32 */
            trackFileCount?: number;
        };
        /** @enum {string} */
        ArtistStatusType: "continuing" | "ended" | "deleted";
        ArtistTitleInfo: {
            title?: string | null;
            titleWithoutYear?: string | null;
            /** Format: int32 */
            year?: number;
        };
        /** @enum {string} */
        AuthenticationRequiredType: "enabled" | "disabledForLocalAddresses";
        /** @enum {string} */
        AuthenticationType: "none" | "basic" | "forms" | "external";
        AutoTaggingResource: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            removeTagsAutomatically?: boolean;
            specifications?: components["schemas"]["AutoTaggingSpecificationSchema"][] | null;
            tags?: number[] | null;
        };
        AutoTaggingSpecificationSchema: {
            fields?: components["schemas"]["Field"][] | null;
            /** Format: int32 */
            id?: number;
            implementation?: string | null;
            implementationName?: string | null;
            name?: string | null;
            negate?: boolean;
            required?: boolean;
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
            albumIds?: number[] | null;
            artist?: components["schemas"]["ArtistResource"];
            /** Format: int32 */
            artistId?: number;
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
        CustomFormatBulkResource: {
            ids?: number[] | null;
            includeCustomFormatWhenRenaming?: boolean | null;
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
        /** @enum {string} */
        EntityHistoryEventType: "unknown" | "grabbed" | "artistFolderImported" | "trackFileImported" | "downloadFailed" | "trackFileDeleted" | "trackFileRenamed" | "albumImportIncomplete" | "downloadImported" | "trackFileRetagged" | "downloadIgnored";
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
            privacy?: components["schemas"]["PrivacyLevel"];
            section?: string | null;
            selectOptions?: components["schemas"]["SelectOption"][] | null;
            selectOptionsProviderAction?: string | null;
            type?: string | null;
            unit?: string | null;
            value?: unknown;
        };
        /** @enum {string} */
        FileDateType: "none" | "albumReleaseDate";
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
            album?: components["schemas"]["AlbumResource"];
            /** Format: int32 */
            albumId?: number;
            artist?: components["schemas"]["ArtistResource"];
            /** Format: int32 */
            artistId?: number;
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
            track?: components["schemas"]["TrackResource"];
            /** Format: int32 */
            trackId?: number;
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
            /** Format: int32 */
            logSizeLimit?: number;
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
        ImportListBulkResource: {
            applyTags?: components["schemas"]["ApplyTags"];
            enableAutomaticAdd?: boolean | null;
            ids?: number[] | null;
            /** Format: int32 */
            qualityProfileId?: number | null;
            rootFolderPath?: string | null;
            tags?: number[] | null;
        };
        ImportListExclusionResource: {
            artistName?: string | null;
            foreignId?: string | null;
            /** Format: int32 */
            id?: number;
        };
        /** @enum {string} */
        ImportListMonitorType: "none" | "specificAlbum" | "entireArtist";
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
        ImportListType: "program" | "spotify" | "lastFm" | "other" | "advanced";
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
        LocalizationResource: {
            /** Format: int32 */
            id?: number;
            strings?: {
                [key: string]: string | null;
            } | null;
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
            album?: components["schemas"]["AlbumResource"];
            /** Format: int32 */
            albumReleaseId?: number;
            artist?: components["schemas"]["ArtistResource"];
            audioTags?: components["schemas"]["ParsedTrackInfo"];
            disableReleaseSwitching?: boolean;
            downloadId?: string | null;
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
            tracks?: components["schemas"]["TrackResource"][] | null;
        };
        ManualImportUpdateResource: {
            additionalFile?: boolean;
            /** Format: int32 */
            albumId?: number | null;
            /** Format: int32 */
            albumReleaseId?: number | null;
            /** Format: int32 */
            artistId?: number | null;
            disableReleaseSwitching?: boolean;
            downloadId?: string | null;
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
            trackIds?: number[] | null;
            tracks?: components["schemas"]["TrackResource"][] | null;
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
            autoUnmonitorPreviouslyDownloadedTracks?: boolean;
            chmodFolder?: string | null;
            chownGroup?: string | null;
            copyUsingHardlinks?: boolean;
            createEmptyArtistFolders?: boolean;
            deleteEmptyFolders?: boolean;
            downloadPropersAndRepacks?: components["schemas"]["ProperDownloadTypes"];
            enableMediaInfo?: boolean;
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
            scriptImportPath?: string | null;
            setPermissionsLinux?: boolean;
            skipFreeSpaceCheckWhenImporting?: boolean;
            useScriptImport?: boolean;
            watchLibraryForChanges?: boolean;
        };
        MediumResource: {
            mediumFormat?: string | null;
            mediumName?: string | null;
            /** Format: int32 */
            mediumNumber?: number;
        };
        Member: {
            images?: components["schemas"]["MediaCover"][] | null;
            instrument?: string | null;
            name?: string | null;
        };
        MetadataProfileResource: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            primaryAlbumTypes?: components["schemas"]["ProfilePrimaryAlbumTypeItemResource"][] | null;
            releaseStatuses?: components["schemas"]["ProfileReleaseStatusItemResource"][] | null;
            secondaryAlbumTypes?: components["schemas"]["ProfileSecondaryAlbumTypeItemResource"][] | null;
        };
        MetadataProviderConfigResource: {
            embedCoverArt?: boolean;
            /** Format: int32 */
            id?: number;
            metadataSource?: string | null;
            scrubAudioTags?: boolean;
            writeAudioTags?: components["schemas"]["WriteAudioTagsType"];
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
            albumsToMonitor?: string[] | null;
            monitor?: components["schemas"]["MonitorTypes"];
            monitored?: boolean;
        };
        /** @enum {string} */
        MonitorTypes: "all" | "future" | "missing" | "existing" | "latest" | "first" | "none" | "unknown";
        NamingConfigResource: {
            artistFolderFormat?: string | null;
            /** Format: int32 */
            colonReplacementFormat?: number;
            /** Format: int32 */
            id?: number;
            includeAlbumTitle?: boolean;
            includeArtistName?: boolean;
            includeQuality?: boolean;
            multiDiscTrackFormat?: string | null;
            numberStyle?: string | null;
            renameTracks?: boolean;
            replaceIllegalCharacters?: boolean;
            replaceSpaces?: boolean;
            separator?: string | null;
            standardTrackFormat?: string | null;
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
            onAlbumDelete?: boolean;
            onApplicationUpdate?: boolean;
            onArtistAdd?: boolean;
            onArtistDelete?: boolean;
            onDownloadFailure?: boolean;
            onGrab?: boolean;
            onHealthIssue?: boolean;
            onHealthRestored?: boolean;
            onImportFailure?: boolean;
            onReleaseImport?: boolean;
            onRename?: boolean;
            onTrackRetag?: boolean;
            onUpgrade?: boolean;
            presets?: components["schemas"]["NotificationResource"][] | null;
            supportsOnAlbumDelete?: boolean;
            supportsOnApplicationUpdate?: boolean;
            supportsOnArtistAdd?: boolean;
            supportsOnArtistDelete?: boolean;
            supportsOnDownloadFailure?: boolean;
            supportsOnGrab?: boolean;
            supportsOnHealthIssue?: boolean;
            supportsOnHealthRestored?: boolean;
            supportsOnImportFailure?: boolean;
            supportsOnReleaseImport?: boolean;
            supportsOnRename?: boolean;
            supportsOnTrackRetag?: boolean;
            supportsOnUpgrade?: boolean;
            tags?: number[] | null;
            testCommand?: string | null;
        };
        ParsedAlbumInfo: {
            albumTitle?: string | null;
            albumType?: string | null;
            artistName?: string | null;
            artistTitleInfo?: components["schemas"]["ArtistTitleInfo"];
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
            albumMBId?: string | null;
            albumTitle?: string | null;
            artistMBId?: string | null;
            artistTitle?: string | null;
            artistTitleInfo?: components["schemas"]["ArtistTitleInfo"];
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
            label?: string | null;
            mediaInfo?: components["schemas"]["MediaInfoModel"];
            quality?: components["schemas"]["QualityModel"];
            recordingMBId?: string | null;
            releaseGroup?: string | null;
            releaseHash?: string | null;
            releaseMBId?: string | null;
            title?: string | null;
            trackMBId?: string | null;
            trackNumbers?: number[] | null;
            /** Format: int32 */
            year?: number;
        };
        ParseResource: {
            albums?: components["schemas"]["AlbumResource"][] | null;
            artist?: components["schemas"]["ArtistResource"];
            customFormats?: components["schemas"]["CustomFormatResource"][] | null;
            /** Format: int32 */
            customFormatScore?: number;
            /** Format: int32 */
            id?: number;
            parsedAlbumInfo?: components["schemas"]["ParsedAlbumInfo"];
            title?: string | null;
        };
        PingResource: {
            status?: string | null;
        };
        PrimaryAlbumType: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
        };
        /** @enum {string} */
        PrivacyLevel: "normal" | "password" | "apiKey" | "userName";
        ProfileFormatItemResource: {
            /** Format: int32 */
            format?: number;
            /** Format: int32 */
            id?: number;
            name?: string | null;
            /** Format: int32 */
            score?: number;
        };
        ProfilePrimaryAlbumTypeItemResource: {
            albumType?: components["schemas"]["PrimaryAlbumType"];
            allowed?: boolean;
            /** Format: int32 */
            id?: number;
        };
        ProfileReleaseStatusItemResource: {
            allowed?: boolean;
            /** Format: int32 */
            id?: number;
            releaseStatus?: components["schemas"]["ReleaseStatus"];
        };
        ProfileSecondaryAlbumTypeItemResource: {
            albumType?: components["schemas"]["SecondaryAlbumType"];
            allowed?: boolean;
            /** Format: int32 */
            id?: number;
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
            /** Format: double */
            preferredSize?: number | null;
            quality?: components["schemas"]["Quality"];
            title?: string | null;
            /** Format: int32 */
            weight?: number;
        };
        QualityModel: {
            quality?: components["schemas"]["Quality"];
            revision?: components["schemas"]["Revision"];
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
            /** Format: date-time */
            added?: string | null;
            album?: components["schemas"]["AlbumResource"];
            /** Format: int32 */
            albumId?: number | null;
            artist?: components["schemas"]["ArtistResource"];
            /** Format: int32 */
            artistId?: number | null;
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
            /** Format: int32 */
            trackFileCount?: number;
            /** Format: int32 */
            trackHasFileCount?: number;
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
            /** Format: int32 */
            albumId?: number | null;
            albumTitle?: string | null;
            approved?: boolean;
            /** Format: int32 */
            artistId?: number | null;
            artistName?: string | null;
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
        ReleaseStatus: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
        };
        RemotePathMappingResource: {
            host?: string | null;
            /** Format: int32 */
            id?: number;
            localPath?: string | null;
            remotePath?: string | null;
        };
        RenameTrackResource: {
            /** Format: int32 */
            albumId?: number;
            /** Format: int32 */
            artistId?: number;
            existingPath?: string | null;
            /** Format: int32 */
            id?: number;
            newPath?: string | null;
            /** Format: int32 */
            trackFileId?: number;
            trackNumbers?: number[] | null;
        };
        /** @enum {string} */
        RescanAfterRefreshType: "always" | "afterManual" | "never";
        RetagTrackResource: {
            /** Format: int32 */
            albumId?: number;
            /** Format: int32 */
            artistId?: number;
            changes?: components["schemas"]["TagDifference"][] | null;
            /** Format: int32 */
            id?: number;
            path?: string | null;
            /** Format: int32 */
            trackFileId?: number;
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
            /** Format: int32 */
            id?: number;
            name?: string | null;
            path?: string | null;
            /** Format: int64 */
            totalSpace?: number | null;
        };
        /** @enum {string} */
        RuntimeMode: "console" | "service" | "tray";
        SearchResource: {
            album?: components["schemas"]["AlbumResource"];
            artist?: components["schemas"]["ArtistResource"];
            foreignId?: string | null;
            /** Format: int32 */
            id?: number;
        };
        SecondaryAlbumType: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
        };
        SelectOption: {
            hint?: string | null;
            name?: string | null;
            /** Format: int32 */
            order?: number;
            /** Format: int32 */
            value?: number;
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
            artistIds?: number[] | null;
            autoTagIds?: number[] | null;
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
        TrackedDownloadState: "downloading" | "downloadFailed" | "downloadFailedPending" | "importBlocked" | "importPending" | "importing" | "importFailed" | "imported" | "ignored";
        /** @enum {string} */
        TrackedDownloadStatus: "ok" | "warning" | "error";
        TrackedDownloadStatusMessage: {
            messages?: string[] | null;
            title?: string | null;
        };
        TrackFileListResource: {
            quality?: components["schemas"]["QualityModel"];
            releaseGroup?: string | null;
            sceneName?: string | null;
            trackFileIds?: number[] | null;
        };
        TrackFileResource: {
            /** Format: int32 */
            albumId?: number;
            /** Format: int32 */
            artistId?: number;
            audioTags?: components["schemas"]["ParsedTrackInfo"];
            customFormats?: components["schemas"]["CustomFormatResource"][] | null;
            /** Format: int32 */
            customFormatScore?: number;
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
            releaseGroup?: string | null;
            sceneName?: string | null;
            /** Format: int64 */
            size?: number;
        };
        TrackResource: {
            /** Format: int32 */
            absoluteTrackNumber?: number;
            /** Format: int32 */
            albumId?: number;
            artist?: components["schemas"]["ArtistResource"];
            /** Format: int32 */
            artistId?: number;
            /** Format: int32 */
            duration?: number;
            explicit?: boolean;
            foreignRecordingId?: string | null;
            foreignTrackId?: string | null;
            hasFile?: boolean;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            mediumNumber?: number;
            ratings?: components["schemas"]["Ratings"];
            title?: string | null;
            trackFile?: components["schemas"]["TrackFileResource"];
            /** Format: int32 */
            trackFileId?: number;
            trackNumber?: string | null;
        };
        UiConfigResource: {
            calendarWeekColumnHeader?: string | null;
            enableColorImpairedMode?: boolean;
            expandAlbumByDefault?: boolean;
            expandBroadcastByDefault?: boolean;
            expandEPByDefault?: boolean;
            expandOtherByDefault?: boolean;
            expandSingleByDefault?: boolean;
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
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
