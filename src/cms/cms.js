import CMS from 'netlify-cms-app'
import { MetaControl, MetaPreview } from './Meta'

CMS.registerWidget(`metatags`, MetaControl, MetaPreview)
