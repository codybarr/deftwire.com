// https://www.netlify.com/blog/2017/06/20/extending-netlify-cms-part-one-custom-widgets/
import CMS from 'netlify-cms-app'
import { MetaControl, MetaPreview } from './Meta'

CMS.registerWidget(`metatags`, MetaControl, MetaPreview)
