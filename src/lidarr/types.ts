import type { components } from './generated-types.js'

// Artist (main entity - like Series in Sonarr)
export type Artist = components['schemas']['ArtistResource']
export type ArtistEditor = components['schemas']['ArtistEditorResource']
export type ArtistStatistics = components['schemas']['ArtistStatisticsResource']
export type AddArtistOptions = components['schemas']['AddArtistOptions']

// Album (like Movie in Radarr)
export type Album = components['schemas']['AlbumResource']
export type AlbumRelease = components['schemas']['AlbumReleaseResource']
export type AlbumStatistics = components['schemas']['AlbumStatisticsResource']
export type AddAlbumOptions = components['schemas']['AddAlbumOptions']
export type AlbumAddType = components['schemas']['AlbumAddType']
export type AlbumsMonitored = components['schemas']['AlbumsMonitoredResource']
export type AlbumStudio = components['schemas']['AlbumStudioResource']
export type AlbumStudioArtist = components['schemas']['AlbumStudioArtistResource']

// Track (like Episode in Sonarr)
export type Track = components['schemas']['TrackResource']
export type TrackFile = components['schemas']['TrackFileResource']
export type TrackFileList = components['schemas']['TrackFileListResource']

// Medium (disc/vinyl in an album release)
export type Medium = components['schemas']['MediumResource']

// Quality
export type QualityProfile = components['schemas']['QualityProfileResource']
export type QualityProfileQualityItem = components['schemas']['QualityProfileQualityItemResource']
export type QualityDefinition = components['schemas']['QualityDefinitionResource']
export type Quality = components['schemas']['Quality']
export type QualityModel = components['schemas']['QualityModel']

// Metadata Profile (Lidarr-specific)
export type MetadataProfile = components['schemas']['MetadataProfileResource']
export type MetadataProfileElement = components['schemas']['ProfilePrimaryAlbumTypeItemResource']

// Custom Format
export type CustomFormat = components['schemas']['CustomFormatResource']
export type CustomFormatBulk = components['schemas']['CustomFormatBulkResource']
export type CustomFormatSpecificationSchema = components['schemas']['CustomFormatSpecificationSchema']

// Language
export type Language = components['schemas']['LanguageResource']

// Release (search results)
export type Release = components['schemas']['ReleaseResource']

// Command
export type Command = components['schemas']['Command']
export type CommandResource = components['schemas']['CommandResource']
export type CommandStatus = components['schemas']['CommandStatus']
export type CommandResult = components['schemas']['CommandResult']
export type CommandPriority = components['schemas']['CommandPriority']
export type CommandTrigger = components['schemas']['CommandTrigger']

// Queue
export type Queue = components['schemas']['QueueResource']
export type QueueBulk = components['schemas']['QueueBulkResource']
export type QueueStatus = components['schemas']['QueueStatusResource']

// History
export type History = components['schemas']['HistoryResource']
export type EntityHistoryEventType = components['schemas']['EntityHistoryEventType']

// Calendar
export type Calendar = Album

// Download Client
export type DownloadClient = components['schemas']['DownloadClientResource']
export type DownloadClientBulk = components['schemas']['DownloadClientBulkResource']
export type DownloadClientConfig = components['schemas']['DownloadClientConfigResource']
export type DownloadProtocol = components['schemas']['DownloadProtocol']

// Indexer
export type Indexer = components['schemas']['IndexerResource']
export type IndexerBulk = components['schemas']['IndexerBulkResource']
export type IndexerConfig = components['schemas']['IndexerConfigResource']
export type IndexerFlag = components['schemas']['IndexerFlagResource']

// Import List
export type ImportList = components['schemas']['ImportListResource']
export type ImportListBulk = components['schemas']['ImportListBulkResource']
export type ImportExclusion = components['schemas']['ImportListExclusionResource']
// Note: Lidarr doesn't have ImportListExclusionBulkResource

// Notification
export type Notification = components['schemas']['NotificationResource']

// Metadata
export type Metadata = components['schemas']['MetadataResource']

// Tag
export type Tag = components['schemas']['TagResource']
export type TagDetails = components['schemas']['TagDetailsResource']

// Root Folder
export type RootFolder = components['schemas']['RootFolderResource']

// Remote Path Mapping
export type RemotePathMapping = components['schemas']['RemotePathMappingResource']

// Blocklist
export type Blocklist = components['schemas']['BlocklistResource']
export type BlocklistBulk = components['schemas']['BlocklistBulkResource']

// Manual Import
export type ManualImport = components['schemas']['ManualImportResource']
export type ManualImportUpdate = components['schemas']['ManualImportUpdateResource']

// Parse
export type Parse = components['schemas']['ParseResource']

// Backup
export type Backup = components['schemas']['BackupResource']
export type BackupType = components['schemas']['BackupType']

// System
export type SystemResource = components['schemas']['SystemResource']
export type Health = components['schemas']['HealthResource']
export type HealthCheckResult = components['schemas']['HealthCheckResult']
export type DiskSpace = components['schemas']['DiskSpaceResource']
export type Task = components['schemas']['TaskResource']
export type Log = components['schemas']['LogResource']
export type LogFile = components['schemas']['LogFileResource']
export type Update = components['schemas']['UpdateResource']

// Config
export type HostConfig = components['schemas']['HostConfigResource']
export type UiConfig = components['schemas']['UiConfigResource']
export type NamingConfig = components['schemas']['NamingConfigResource']
export type MediaManagementConfig = components['schemas']['MediaManagementConfigResource']

// Delay Profile
export type DelayProfile = components['schemas']['DelayProfileResource']

// Custom Filter
export type CustomFilter = components['schemas']['CustomFilterResource']

// Localization
export type Localization = components['schemas']['LocalizationResource']

// Media
export type MediaCover = components['schemas']['MediaCover']
export type MediaCoverTypes = components['schemas']['MediaCoverTypes']
export type MediaInfo = components['schemas']['MediaInfoResource']

// Ratings
export type Ratings = components['schemas']['Ratings']

// Rename
export type Rename = components['schemas']['RenameTrackResource']

// Retag
export type Retag = components['schemas']['RetagTrackResource']

// Wanted
export type MonitorTypes = components['schemas']['MonitorTypes']
export type NewItemMonitorTypes = components['schemas']['NewItemMonitorTypes']
export type MonitoringOptions = components['schemas']['MonitoringOptions']

// Misc types
export type ApplyTags = components['schemas']['ApplyTags']
export type SortDirection = components['schemas']['SortDirection']
export type Field = components['schemas']['Field']
export type SelectOption = components['schemas']['SelectOption']
export type ProviderMessage = components['schemas']['ProviderMessage']
export type Links = components['schemas']['Links']

// Paging types (only those available in Lidarr's API)
export type BlocklistPagingResource = components['schemas']['BlocklistResourcePagingResource']
export type HistoryPagingResource = components['schemas']['HistoryResourcePagingResource']
export type QueuePagingResource = components['schemas']['QueueResourcePagingResource']
export type LogPagingResource = components['schemas']['LogResourcePagingResource']
export type AlbumPagingResource = components['schemas']['AlbumResourcePagingResource']
// Note: Lidarr doesn't have paged endpoints for Artist, Track, or ImportExclusion
