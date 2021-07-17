import CMS from 'netlify-cms'
import { MetaControl, MetaPreview } from './Meta'

CMS.registerWidget('meta', MetaControl, MetaPreview)
