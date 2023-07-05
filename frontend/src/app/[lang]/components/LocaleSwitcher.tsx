'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../../../../i18n-config'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const router = useRouter()
  const getCurrentLocale = () => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    return segments[1]
  }
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const goTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
    router.push(redirectedPathName(event.target.value))
  }

  return (
    <div>
      <select name="language" onChange={e => goTo(e)}>
        {i18n.locales.map((locale) => {
          return (
            <option value={locale} key={locale} selected={getCurrentLocale() === locale}>
              {locale}
            </option>
          )
        })}
      </select>
    </div>
  )
}