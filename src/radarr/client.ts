import { BaseClient, type ClientConfig } from '../core/index.js'
import { MovieResource } from './resources/movie.js'
import { MovieFileResource } from './resources/movieFile.js'
import { CalendarResource } from './resources/calendar.js'
import { CommandResource_ } from './resources/command.js'
import { QueueResource } from './resources/queue.js'
import { HistoryResource } from './resources/history.js'
import { QualityProfileResource, QualityDefinitionResource } from './resources/qualityProfile.js'
import { CustomFormatResource } from './resources/customFormat.js'
import { DownloadClientResource, DownloadClientConfigResource } from './resources/downloadClient.js'
import { IndexerResource, IndexerConfigResource, IndexerFlagResource } from './resources/indexer.js'
import { TagResource, TagDetailsResource } from './resources/tag.js'
import { RootFolderResource } from './resources/rootFolder.js'
import { SystemInfoResource, HealthResource, DiskSpaceResource, TaskResource, BackupResource, LogResource, LogFileResource, UpdateResource } from './resources/system.js'
import { ReleaseResource } from './resources/release.js'
import { ImportListResource, ImportListConfigResource, ImportExclusionResource } from './resources/importList.js'
import { NotificationResource } from './resources/notification.js'
import { MetadataResource } from './resources/metadata.js'
import { BlocklistResource } from './resources/blocklist.js'
import { ManualImportResource } from './resources/manualImport.js'
import { ParseResource } from './resources/parse.js'
import { HostConfigResource, UiConfigResource, NamingConfigResource, MediaManagementConfigResource } from './resources/config.js'
import { DelayProfileResource } from './resources/delayProfile.js'
import { RemotePathMappingResource } from './resources/remotePathMapping.js'
import { AutoTaggingResource } from './resources/autoTagging.js'
import { CollectionResource } from './resources/collection.js'
import { CreditResource } from './resources/credit.js'
import { ExtraFileResource } from './resources/extraFile.js'
import { RenameResource } from './resources/rename.js'
import { LanguageResourceApi } from './resources/language.js'
import { LocalizationResource } from './resources/localization.js'
import { CustomFilterResource } from './resources/customFilter.js'
import { WantedResource } from './resources/wanted.js'

export class RadarrClient extends BaseClient {
  public readonly movie: MovieResource
  public readonly movieFile: MovieFileResource
  public readonly calendar: CalendarResource
  public readonly command: CommandResource_
  public readonly queue: QueueResource
  public readonly history: HistoryResource
  public readonly qualityProfile: QualityProfileResource
  public readonly qualityDefinition: QualityDefinitionResource
  public readonly customFormat: CustomFormatResource
  public readonly downloadClient: DownloadClientResource
  public readonly downloadClientConfig: DownloadClientConfigResource
  public readonly indexer: IndexerResource
  public readonly indexerConfig: IndexerConfigResource
  public readonly indexerFlag: IndexerFlagResource
  public readonly tag: TagResource
  public readonly tagDetails: TagDetailsResource
  public readonly rootFolder: RootFolderResource
  public readonly system: SystemInfoResource
  public readonly health: HealthResource
  public readonly diskSpace: DiskSpaceResource
  public readonly task: TaskResource
  public readonly backup: BackupResource
  public readonly log: LogResource
  public readonly logFile: LogFileResource
  public readonly update: UpdateResource
  public readonly release: ReleaseResource
  public readonly importList: ImportListResource
  public readonly importListConfig: ImportListConfigResource
  public readonly importExclusion: ImportExclusionResource
  public readonly notification: NotificationResource
  public readonly metadata: MetadataResource
  public readonly blocklist: BlocklistResource
  public readonly manualImport: ManualImportResource
  public readonly parse: ParseResource
  public readonly hostConfig: HostConfigResource
  public readonly uiConfig: UiConfigResource
  public readonly namingConfig: NamingConfigResource
  public readonly mediaManagementConfig: MediaManagementConfigResource
  public readonly delayProfile: DelayProfileResource
  public readonly remotePathMapping: RemotePathMappingResource
  public readonly autoTagging: AutoTaggingResource
  public readonly collection: CollectionResource
  public readonly credit: CreditResource
  public readonly extraFile: ExtraFileResource
  public readonly rename: RenameResource
  public readonly language: LanguageResourceApi
  public readonly localization: LocalizationResource
  public readonly customFilter: CustomFilterResource
  public readonly wanted: WantedResource

  constructor(config: ClientConfig) {
    super(config)

    this.movie = new MovieResource(this)
    this.movieFile = new MovieFileResource(this)
    this.calendar = new CalendarResource(this)
    this.command = new CommandResource_(this)
    this.queue = new QueueResource(this)
    this.history = new HistoryResource(this)
    this.qualityProfile = new QualityProfileResource(this)
    this.qualityDefinition = new QualityDefinitionResource(this)
    this.customFormat = new CustomFormatResource(this)
    this.downloadClient = new DownloadClientResource(this)
    this.downloadClientConfig = new DownloadClientConfigResource(this)
    this.indexer = new IndexerResource(this)
    this.indexerConfig = new IndexerConfigResource(this)
    this.indexerFlag = new IndexerFlagResource(this)
    this.tag = new TagResource(this)
    this.tagDetails = new TagDetailsResource(this)
    this.rootFolder = new RootFolderResource(this)
    this.system = new SystemInfoResource(this)
    this.health = new HealthResource(this)
    this.diskSpace = new DiskSpaceResource(this)
    this.task = new TaskResource(this)
    this.backup = new BackupResource(this)
    this.log = new LogResource(this)
    this.logFile = new LogFileResource(this)
    this.update = new UpdateResource(this)
    this.release = new ReleaseResource(this)
    this.importList = new ImportListResource(this)
    this.importListConfig = new ImportListConfigResource(this)
    this.importExclusion = new ImportExclusionResource(this)
    this.notification = new NotificationResource(this)
    this.metadata = new MetadataResource(this)
    this.blocklist = new BlocklistResource(this)
    this.manualImport = new ManualImportResource(this)
    this.parse = new ParseResource(this)
    this.hostConfig = new HostConfigResource(this)
    this.uiConfig = new UiConfigResource(this)
    this.namingConfig = new NamingConfigResource(this)
    this.mediaManagementConfig = new MediaManagementConfigResource(this)
    this.delayProfile = new DelayProfileResource(this)
    this.remotePathMapping = new RemotePathMappingResource(this)
    this.autoTagging = new AutoTaggingResource(this)
    this.collection = new CollectionResource(this)
    this.credit = new CreditResource(this)
    this.extraFile = new ExtraFileResource(this)
    this.rename = new RenameResource(this)
    this.language = new LanguageResourceApi(this)
    this.localization = new LocalizationResource(this)
    this.customFilter = new CustomFilterResource(this)
    this.wanted = new WantedResource(this)
  }
}
