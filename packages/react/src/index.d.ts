import { ReactNode, CSSProperties, Ref, AnchorHTMLAttributes } from 'react'

export type MediaType = 'iframe' | 'video' | 'audio' | 'image' | 'logo'

export type Size = 'normal' | 'large' | 'small'

export type Direction = 'ltr' | 'rtl'

export type Prerender = 'auto' | boolean

export interface MicrolinkBaseProps {
  /** API key for Microlink API */
  apiKey?: string
  /** Enable auto-play for video/audio */
  autoPlay?: boolean
  /** Show contrast mode */
  contrast?: boolean | string
  /** Show media controls */
  controls?: boolean
  /** Text direction */
  direction?: Direction
  /** Enable lazy loading */
  lazy?: boolean | { threshold?: number }
  /** Loop media */
  loop?: boolean
  /** Media types to display */
  media?: MediaType | MediaType[]
  /** Media element ref */
  mediaRef?: Ref<HTMLMediaElement | HTMLIFrameElement>
  /** Mute media */
  muted?: boolean
  /** Play inline */
  playsInline?: boolean
  /** Prerender content */
  prerender?: Prerender
  /** Size of the card */
  size?: Size
  /** URL to fetch metadata for */
  url: string
  /** Show loading state */
  loading?: boolean
  /** Custom fetch data function */
  fetchData?: boolean
  /** Set data callback */
  setData?: (data: MicrolinkData) => MicrolinkData
}

export interface MicrolinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>,
    MicrolinkBaseProps {
  /** Class name for the component */
  className?: string
  /** Children (rendered as URL fallback) */
  children?: ReactNode
}

export interface MicrolinkData {
  url: string
  title?: string
  description?: string
  image?: MediaObject
  logo?: MediaObject
  video?: MediaObject
  audio?: MediaObject
  iframe?: IframeObject
  color?: string
}

export interface MediaObject {
  url: string
  width?: number
  height?: number
  type?: string
  size?: number
  duration?: number
  title?: string
}

export interface IframeObject {
  html: string
  scripts: Array<{ src: string; [key: string]: string }>
}

export interface ImageProxyOptions {
  /** Image URL to proxy */
  src: string
  /** Image width */
  width?: number
  /** Image height */
  height?: number
  /** Image fit mode */
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside'
  /** Background color */
  background?: string
}

export interface ApiUrlOptions extends MicrolinkBaseProps {
  /** URL to fetch metadata for */
  url: string
}

export interface FetchOptions {
  /** API key for Microlink API */
  apiKey?: string
  /** URL to fetch */
  url: string
  /** Media types to fetch */
  media?: MediaType | MediaType[]
  /** Data callback */
  setData?: (data: MicrolinkData) => MicrolinkData
}

export interface FetchResponse {
  data: MicrolinkData
  statusCode: number
  headers: Record<string, string>
}

declare function Microlink(props: MicrolinkProps): JSX.Element

export default Microlink
export { imageProxy, getApiUrl, fetchFromApi }

export function imageProxy(options: ImageProxyOptions): string
export function getApiUrl(options: ApiUrlOptions): string
export function fetchFromApi(url: string, options?: FetchOptions): Promise<FetchResponse>
