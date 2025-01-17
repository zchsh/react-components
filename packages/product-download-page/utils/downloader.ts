import semverRSort from 'semver/functions/rsort'
import semverPrerelease from 'semver/functions/prerelease'
import semverValid from 'semver/functions/valid'
import { ReleaseVersion } from '..'

export function getVersionLabel(
  version: string,
  latestVersion: string
): string {
  if (version === latestVersion) return `${version} (latest)`
  return version
}

export function sortAndFilterReleases(releases: string[]): string[] {
  const validReleases = releases.filter(semverValid)
  // descending sort on releases, while filtering out pre-releases
  return semverRSort(validReleases).filter(
    (version) => !semverPrerelease(version)
  )
}

export function prettyArch(arch: string): string {
  switch (arch) {
    case 'all':
      return 'Universal (32 and 64-bit)'
    case 'i686':
    case 'i386':
    case '686':
    case '386':
      return '32-bit'
    case 'x86_64':
    case '86_64':
    case 'amd64':
      return '64-bit'
    default:
      if (/-/.test(arch)) {
        const parts = arch.split(/-(.+)/)
        return `${prettyArch(parts[0])} (${parts[1]})`
      } else {
        const parts = arch.split('_')
        if (parts.length > 0) {
          return (
            parts[parts.length - 1].charAt(0).toUpperCase() +
            parts[parts.length - 1].slice(1)
          )
        }
      }
  }
}

export function detectOs(platform: string): string | null {
  for (const key in platformMap) {
    if (platform.indexOf(key) !== -1) {
      return platformMap[key]
    }
  }

  return null
}

export function prettyOs(os: string): string {
  switch (os) {
    case 'darwin':
      return 'macOS'
    case 'freebsd':
      return 'FreeBSD'
    case 'openbsd':
      return 'OpenBSD'
    case 'netbsd':
      return 'NetBSD'
    case 'archlinux':
      return 'Arch Linux'
    case 'linux':
      return 'Linux'
    case 'windows':
      return 'Windows'
    default:
      return os.charAt(0).toUpperCase() + os.slice(1)
  }
}

const platformMap = {
  Mac: 'darwin',
  Win: 'windows',
  Linux: 'linux',
}

export function sortPlatforms(releaseData: ReleaseVersion): SortedReleases {
  // first we pull the platforms out of the release data object and format it the way we want
  const platforms = releaseData.builds.reduce((acc, build) => {
    if (!acc[build.os]) acc[build.os] = {}
    acc[build.os][build.arch] = build.url
    return acc
  }, {})

  const platformKeys = Object.keys(platforms)

  // create array of sorted values to base the order on
  const sortedValues = Object.keys(platformMap)
    .map((e) => platformMap[e])
    // join the lists together to make sure
    // all items are accounted for when sorting
    .concat(platformKeys)
    // filter our any duplicates and unneeded items
    .filter((elem, pos, arr) => {
      return arr.indexOf(elem) == pos && platformKeys.indexOf(elem) > -1
    })

  return (
    platformKeys
      // sort items based on platformMap order
      .sort((a, b) => {
        return sortedValues.indexOf(a) - sortedValues.indexOf(b)
      })
      // create new sorted object to return
      .reduce((result, key) => {
        result[key] = platforms[key]
        return result
      }, {})
  )
}

export interface SortedReleases {
  [os: string]: {
    [arch: string]: string
  }
}

export function trackDownload(
  product: string,
  version: string,
  _os: string,
  _arch: string
): void {
  const os = prettyOs(_os)
  const arch = prettyArch(_arch)

  if (window.analytics) {
    window.analytics.track('Download', {
      category: 'Button',
      label: `${product} | v${version} | ${os} | ${arch}`,
      version,
      os,
      architecture: arch,
      product,
    })
  }
}
