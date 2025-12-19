import { BaseClient, type ClientConfig } from '../core/index.js'
import { IndexerResource, IndexerStatsResource, IndexerStatusResource } from './resources/indexer.js'
import { SearchResource } from './resources/search.js'
import { ApplicationResource } from './resources/application.js'
import { AppProfileResource } from './resources/appProfile.js'
import { IndexerProxyResource } from './resources/indexerProxy.js'
import { CommandResource_ } from './resources/command.js'
import { HistoryResource } from './resources/history.js'
import { DownloadClientResource, DownloadClientConfigResource } from './resources/downloadClient.js'
import { NotificationResource } from './resources/notification.js'
import { TagResource, TagDetailsResource } from './resources/tag.js'
import { SystemInfoResource, HealthResource, TaskResource, BackupResource, LogResource, LogFileResource, UpdateResource } from './resources/system.js'
import { HostConfigResource, UiConfigResource, DevelopmentConfigResource } from './resources/config.js'
import { CustomFilterResource } from './resources/customFilter.js'
import { FileSystemResource } from './resources/filesystem.js'
import { LocalizationResource } from './resources/localization.js'
import { NewznabResource } from './resources/newznab.js'

export class ProwlarrClient extends BaseClient {
  public readonly indexer: IndexerResource
  public readonly indexerStats: IndexerStatsResource
  public readonly indexerStatus: IndexerStatusResource
  public readonly search: SearchResource
  public readonly application: ApplicationResource
  public readonly appProfile: AppProfileResource
  public readonly indexerProxy: IndexerProxyResource
  public readonly command: CommandResource_
  public readonly history: HistoryResource
  public readonly downloadClient: DownloadClientResource
  public readonly downloadClientConfig: DownloadClientConfigResource
  public readonly notification: NotificationResource
  public readonly tag: TagResource
  public readonly tagDetails: TagDetailsResource
  public readonly system: SystemInfoResource
  public readonly health: HealthResource
  public readonly task: TaskResource
  public readonly backup: BackupResource
  public readonly log: LogResource
  public readonly logFile: LogFileResource
  public readonly update: UpdateResource
  public readonly hostConfig: HostConfigResource
  public readonly uiConfig: UiConfigResource
  public readonly developmentConfig: DevelopmentConfigResource
  public readonly customFilter: CustomFilterResource
  public readonly filesystem: FileSystemResource
  public readonly localization: LocalizationResource
  public readonly newznab: NewznabResource

  constructor(config: ClientConfig) {
    super(config)

    this.indexer = new IndexerResource(this)
    this.indexerStats = new IndexerStatsResource(this)
    this.indexerStatus = new IndexerStatusResource(this)
    this.search = new SearchResource(this)
    this.application = new ApplicationResource(this)
    this.appProfile = new AppProfileResource(this)
    this.indexerProxy = new IndexerProxyResource(this)
    this.command = new CommandResource_(this)
    this.history = new HistoryResource(this)
    this.downloadClient = new DownloadClientResource(this)
    this.downloadClientConfig = new DownloadClientConfigResource(this)
    this.notification = new NotificationResource(this)
    this.tag = new TagResource(this)
    this.tagDetails = new TagDetailsResource(this)
    this.system = new SystemInfoResource(this)
    this.health = new HealthResource(this)
    this.task = new TaskResource(this)
    this.backup = new BackupResource(this)
    this.log = new LogResource(this)
    this.logFile = new LogFileResource(this)
    this.update = new UpdateResource(this)
    this.hostConfig = new HostConfigResource(this)
    this.uiConfig = new UiConfigResource(this)
    this.developmentConfig = new DevelopmentConfigResource(this)
    this.customFilter = new CustomFilterResource(this)
    this.filesystem = new FileSystemResource(this)
    this.localization = new LocalizationResource(this)
    this.newznab = new NewznabResource(this)
  }
}
