import { host } from '@/services/config'

class ServerResource {
    // 资源路径根路径
    baseUrl: string

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    /**
     * 获取资源访问路径
     * @param url
     */
    url(url: string): string {
        if (!url) return
        if (/^((https:|http:)?\/\/)/i.test(url)) {
            return url
        } else if (/^data:image/.test(url)) {
            return url
        } else if (url.startsWith(this.baseUrl)) {
            return url
        }
    }
}

const serverResource = new ServerResource(host)

export { serverResource }
